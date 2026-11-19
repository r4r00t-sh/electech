import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientsPath = path.join(root, "data/clients.json");
const hiresDir = path.join(root, "public/images/clients-hires");
const outDir = path.join(root, "public/images/clients");
const reportPath = path.join(root, "docs/logo-quality.md");

/** Confirmed official downloads in clients-hires → process into clients/ */
const CONFIRMED = {
  oaks: {
    file: "client-oaks.png",
    logoSource:
      "https://assets.oakshotels.com/image/upload/q_auto,f_auto/media/minor/oaks/images/rebrand/oaks-hotels--resorts-suites-logo-340x140px.png",
    website: "https://www.oakshotels.com/",
  },
  movenpick: {
    file: "client-movenpick.png",
    logoSource:
      "https://movenpick.accor.com/content/dam/technical-folder/seo/movenpickv2/android-chrome-512x512.png",
    website: "https://movenpick.accor.com/",
    note: "Official site PWA icon (512px); full wordmark SVG not exposed on homepage.",
  },
  sofitel: {
    file: "client-sofitel.svg",
    logoSource:
      "https://sofitel.accor.com/content/dam/brands/sof/global-marketing/brand-identity/logos/2601_mkt_0022.svg",
    website: "https://sofitel.accor.com/",
  },
  "circle-mall": {
    file: "client-circle-mall.svg",
    logoSource:
      "https://cdn.prod.website-files.com/681b30237127014420b52a2e/685bcb88eb8fbd3bd0fe2554_circle-mall-en-black.svg",
    website: "https://www.circlemall.ae/",
  },
  "dubai-mall": {
    file: "client-dubai-mall.svg",
    logoSource:
      "https://www.thedubaimall.com/assets/dubai-mall-online/home-banner/dmo-logo.svg",
    website: "https://www.thedubaimall.com/",
  },
  imdaad: {
    file: "client-imdaad.png",
    logoSource: "https://www.imdaad.ae/images/Imdaad-logo.png",
    website: "https://www.imdaad.ae/",
  },
  nakheel: {
    file: "client-nakheel.svg",
    logoSource:
      "https://www.nakheel.com/images/nakheelcorporatelibraries/logos/nakheel-log.svg?sfvrsn=f5c04a69_1",
    website: "https://www.nakheel.com/",
  },
  summertown: {
    file: "client-summertown.svg",
    logoSource:
      "https://www.summertown.ae/wp-content/themes/summertown_2025/assets/images/icons/logo-tree-red.svg",
    website: "https://www.summertown.ae/",
    note: "Header brand mark (tree) from official theme assets.",
  },
  "al-barari": {
    file: "client-al-barari.png",
    logoSource:
      "https://static.wixstatic.com/media/95d3dc_5730414b648b46e7825a247b9a9139f3~mv2.png",
    website: "https://www.albarari.com/",
  },
  arco: {
    file: "client-arco.png",
    logoSource:
      "https://arcointeriors.com/wp-content/uploads/2019/11/logo-arcointeriors.png",
    website: "https://www.arcointeriors.com/",
  },
  etisalat: {
    file: "client-etisalat.svg",
    logoSource:
      "https://www.eand.com/content/dam/eand/logo/etisalat-logo-ver-red-en-1912x536.svg",
    website: "https://www.eand.com/",
  },
  axis: {
    file: "client-axis.png",
    logoSource: "https://www.axis.com/themes/custom/axiscom/logo.png",
    website: "https://www.axis.com/",
  },
  "barr-wray": {
    file: "client-barr-wray.svg",
    logoSource:
      "https://barrandwray.com/wp-content/uploads/sites/3/2025/07/barr-wray-logo-white.svg",
    website: "https://www.barrandwray.com/",
    lightLogo: true,
  },
  multiline: {
    file: "client-multiline.png",
    logoSource:
      "https://multiline.ae/wp-content/uploads/2020/10/header-logo-e1602676564869.png",
    website: "https://www.multiline.ae/",
  },
  "ritz-carlton": {
    file: null, // already processed in clients/
    existing: "/images/clients/client-ritz-carlton.webp",
    logoSource: "https://www.ritzcarlton.com/",
    website: "https://www.ritzcarlton.com/",
    logoType: "raster",
  },
};

const WEBSITE_ONLY = {
  "mall-of-the-emirates": "https://www.malloftheemirates.com/",
  damac: "https://www.damacproperties.com/",
  wasl: "https://www.wasl.ae/",
  "at-group": "https://www.atgroupinteriors.com/",
  amazon: "https://www.amazon.ae/",
  emaar: "https://www.emaar.com/",
  "dubai-hills": "https://www.dubaihillsestate.com/",
  "ibn-battuta": "https://www.ibnbattuta.ae/",
  liva: "https://www.livainsurance.ae/",
  jll: "https://www.jll.com/",
  enfm: "https://www.enfm.ae/",
  "grand-hyatt": "https://www.hyatt.com/",
  kalandoor: "https://www.kalandoor.com/",
  mebs: "https://www.mebs.ae/",
  marriott: "https://www.marriott.com/",
};

function sanitizeSvg(svgText) {
  let s = svgText
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+=["'][^"']*["']/gi, "");
  if (!/\bviewBox\s*=/.test(s)) {
    const wh = s.match(
      /<svg[^>]*\bwidth=["']?([\d.]+)["']?[^>]*\bheight=["']?([\d.]+)["']?/i,
    );
    if (wh) s = s.replace(/<svg\b/, `<svg viewBox="0 0 ${wh[1]} ${wh[2]}"`);
  }
  return s;
}

async function processFile(slug, conf) {
  if (conf.existing) {
    const p = path.join(root, "public", conf.existing.replace(/^\//, ""));
    if (!fs.existsSync(p)) return { ok: false, reason: "missing existing" };
    const meta = await sharp(p, { failOn: "none" }).metadata();
    return {
      ok: true,
      logo: conf.existing,
      logoType: conf.logoType || "raster",
      width: meta.width || 400,
      height: meta.height || 200,
    };
  }

  const src = path.join(hiresDir, conf.file);
  if (!fs.existsSync(src)) return { ok: false, reason: "hires missing" };
  const buf = fs.readFileSync(src);
  const isSvg = conf.file.endsWith(".svg");

  if (isSvg) {
    const text = sanitizeSvg(buf.toString("utf8"));
    if (!text.includes("<svg") || text.includes("<html")) {
      return { ok: false, reason: "not a valid SVG" };
    }
    const out = path.join(outDir, `client-${slug}.svg`);
    fs.writeFileSync(out, text);
    const vb = text.match(/viewBox=["']([\d.\s-]+)["']/i);
    let width = 400;
    let height = 120;
    if (vb) {
      const parts = vb[1].trim().split(/[\s,]+/).map(Number);
      if (parts.length === 4) {
        width = Math.round(parts[2]) || width;
        height = Math.round(parts[3]) || height;
      }
    }
    return {
      ok: true,
      logo: `/images/clients/client-${slug}.svg`,
      logoType: "svg",
      width,
      height,
    };
  }

  const meta = await sharp(buf, { failOn: "none" }).metadata();
  const sw = meta.width || 0;
  const sh = meta.height || 0;
  // Reject only if neither dimension can cover 2× strip height (~56px → 112px)
  if (Math.max(sw, sh) < 112) {
    return { ok: false, reason: `too small ${sw}×${sh}`, width: sw, height: sh };
  }


  let pipeline = sharp(buf, { failOn: "none" }).ensureAlpha();
  try {
    pipeline = pipeline.trim({ threshold: 10 });
  } catch {
    /* */
  }
  const trimmed = await pipeline.toBuffer({ resolveWithObject: true });
  let outSharp = sharp(trimmed.data);
  if (trimmed.info.width > 800) {
    outSharp = outSharp.resize({ width: 800, withoutEnlargement: true });
  }
  const webpPath = path.join(outDir, `client-${slug}.webp`);
  const info = await outSharp
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(webpPath);

  return {
    ok: true,
    logo: `/images/clients/client-${slug}.webp`,
    logoType: "raster",
    width: info.width,
    height: info.height,
    sourceWidth: sw,
    sourceHeight: sh,
    needsBetterLogo: sw < 400,
  };
}

const clients = JSON.parse(fs.readFileSync(clientsPath, "utf8"));
const report = [];

for (const client of clients) {
  const slug = client.slug;
  const conf = CONFIRMED[slug];
  const row = {
    name: client.name,
    slug,
    website: conf?.website || WEBSITE_ONLY[slug] || null,
    sourceUrl: null,
    file: client.logo,
    format: path.extname(client.logo).slice(1) || "jpg",
    size: "n/a",
    status: "old logo kept",
    notes: [],
  };

  // Reset previous bad auto-replacements that aren't in CONFIRMED
  if (!conf) {
    client.logo = `/images/clients/client-${slug}.jpg`;
    delete client.logoType;
    delete client.width;
    delete client.height;
    client.needsBetterLogo = true;
    if (WEBSITE_ONLY[slug]) {
      client.website = WEBSITE_ONLY[slug];
      client.logoSource = WEBSITE_ONLY[slug];
      row.notes.push(
        "Official site known but a reliable primary logo asset could not be retrieved (blocked, wrong asset, or too small).",
      );
    } else {
      delete client.website;
      delete client.logoSource;
      row.notes.push("No confident official website — did not guess a domain.");
    }
    row.status = "flagged";
    row.website = client.website || null;
    row.sourceUrl = client.logoSource || null;
    report.push(row);
    continue;
  }

  client.website = conf.website;
  client.logoSource = conf.logoSource;
  if (conf.lightLogo) client.lightLogo = true;
  else delete client.lightLogo;
  if (conf.note) row.notes.push(conf.note);

  const processed = await processFile(slug, conf);
  if (!processed.ok) {
    client.logo = `/images/clients/client-${slug}.jpg`;
    client.needsBetterLogo = true;
    delete client.logoType;
    delete client.width;
    delete client.height;
    row.status = "flagged";
    row.notes.push(processed.reason || "process failed");
    row.sourceUrl = conf.logoSource;
    report.push(row);
    console.log(`FAIL ${slug}: ${processed.reason}`);
    continue;
  }

  client.logo = processed.logo;
  client.logoType = processed.logoType;
  client.width = processed.width;
  client.height = processed.height;
  if (processed.needsBetterLogo) client.needsBetterLogo = true;
  else delete client.needsBetterLogo;

  // Do not change approved flags
  row.status = "sharp";
  row.file = processed.logo;
  row.format = processed.logoType === "svg" ? "svg" : "webp";
  row.size =
    processed.logoType === "svg"
      ? `viewBox ~${processed.width}×${processed.height}`
      : `${processed.width}×${processed.height}px`;
  row.sourceUrl = conf.logoSource;
  if (processed.needsBetterLogo) {
    row.notes.push(
      `Source narrower than 400px (${processed.sourceWidth}px) but kept — still sharp at display size; prefer a larger master when available.`,
    );
  }
  report.push(row);
  console.log(`OK ${slug} → ${processed.logo}`);
}

fs.writeFileSync(clientsPath, JSON.stringify(clients, null, 2) + "\n");

const svgCount = report.filter((r) => r.format === "svg" && r.status === "sharp").length;
const rasterSharp = report.filter(
  (r) => r.format === "webp" && r.status === "sharp",
).length;
const flagged = report.filter((r) => r.status !== "sharp").length;

const md = [
  "# Client logo quality report",
  "",
  `Generated: ${new Date().toISOString().slice(0, 10)}`,
  "",
  `**Summary:** ${svgCount} SVG · ${rasterSharp} raster (WebP) · ${flagged} still need a better file / old logo kept.`,
  "",
  "| Client | Source | File | Format | Size | Status | Notes |",
  "|--------|--------|------|--------|------|--------|-------|",
  ...report.map(
    (r) =>
      `| ${r.name} | ${r.sourceUrl || r.website || "—"} | \`${r.file}\` | ${r.format} | ${r.size} | ${r.status} | ${(r.notes || []).join(" ") || "—"} |`,
  ),
  "",
  "## Method",
  "",
  "- Logos taken only from official company websites (header/brand assets or PWA icons when wordmarks were not exposed).",
  "- No search-engine image results, logo databases, or generated artwork.",
  "- SVG sanitized; raster converted to WebP max 800px wide, never upscaled.",
  "- `approved` flags were left unchanged for client permission review.",
  "",
];
fs.writeFileSync(reportPath, md.join("\n"));
console.log(md[4]);

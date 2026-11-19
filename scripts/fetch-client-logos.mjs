/**
 * Fetch official client logos from known company websites.
 * Usage: node scripts/fetch-client-logos.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const clientsPath = path.join(root, "data/clients.json");
const hiresDir = path.join(root, "public/images/clients-hires");
const outDir = path.join(root, "public/images/clients");
const reportPath = path.join(root, "docs/logo-quality.md");

fs.mkdirSync(hiresDir, { recursive: true });
fs.mkdirSync(outDir, { recursive: true });

/** Official websites only — leave blank when unsure (will be flagged). */
const WEBSITES = {
  oaks: "https://www.oakshotels.com/",
  movenpick: "https://all.accor.com/brand/movenpick/index.en.shtml",
  "mall-of-the-emirates": "https://www.malloftheemirates.com/",
  "circle-mall": "https://www.circlemall.ae/",
  sofitel: "https://all.accor.com/brand/sofitel/index.en.shtml",
  "dubai-mall": "https://www.thedubaimall.com/",
  imdaad: "https://www.imdaad.ae/",
  damac: "https://www.damacproperties.com/",
  wasl: "https://www.wasl.ae/",
  "at-group": "https://www.atgroupinteriors.com/",
  nakheel: "https://www.nakheel.com/",
  amazon: "https://www.amazon.ae/",
  summertown: "https://www.summertown.ae/",
  emaar: "https://www.emaar.com/",
  multiline: "https://www.multiline.ae/",
  vaa: "", // unsure
  "al-barari": "https://www.albarari.com/",
  arco: "https://www.arcointeriors.com/",
  etisalat: "https://www.eand.com/",
  "dubai-hills": "https://www.dubaihillsestate.com/",
  "ibn-battuta": "https://www.ibnbattuta.ae/",
  "kg-interiors": "", // unsure
  liva: "https://www.livainsurance.ae/",
  jll: "https://www.jll.ae/",
  visualize: "", // unsure
  axis: "https://www.axis.com/",
  enfm: "https://www.enfm.ae/",
  "real-image": "", // unsure
  ascentia: "", // unsure
  "grand-hyatt": "https://www.hyatt.com/en-US/hotel/united-arab-emirates/grand-hyatt-dubai/dxbgh",
  "barr-wray": "https://www.barrandwray.com/",
  "aew-technik": "", // unsure
  "royal-classic": "", // unsure
  cri: "", // unsure
  kalandoor: "https://www.kalandoor.com/",
  "vogo-grand": "", // unsure
  mebs: "https://www.mebs.ae/",
  marriott: "https://www.marriott.com/",
  "ritz-carlton": "https://www.ritzcarlton.com/",
};

const UA =
  "Mozilla/5.0 (compatible; ElectechLogoBot/1.0; +https://electechmep.com)";

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "text/html,*/*" },
    redirect: "follow",
    signal: AbortSignal.timeout(25000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return { html: await res.text(), finalUrl: res.url };
}

async function fetchBinary(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "image/*,*/*" },
    redirect: "follow",
    signal: AbortSignal.timeout(25000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const ctype = res.headers.get("content-type") || "";
  return { buf, ctype, finalUrl: res.url };
}

function absUrl(base, maybe) {
  try {
    return new URL(maybe, base).href;
  } catch {
    return null;
  }
}

function scoreLogoCandidate(url, attrs = "") {
  const u = url.toLowerCase();
  const a = attrs.toLowerCase();
  let score = 0;
  if (/logo/.test(u) || /logo/.test(a)) score += 40;
  if (/brand/.test(u) || /brand/.test(a)) score += 15;
  if (/\.svg(\?|$)/.test(u)) score += 30;
  if (/\.png(\?|$)/.test(u)) score += 20;
  if (/\.webp(\?|$)/.test(u)) score += 18;
  if (/\.jpe?g(\?|$)/.test(u)) score += 5;
  if (/favicon|sprite|icon-|icons\/|social|partner|sponsor|badge/.test(u + a))
    score -= 50;
  if (/og:image|twitter/.test(a)) score -= 20;
  if (/header|nav|site-logo|navbar/.test(a)) score += 10;
  return score;
}

function extractCandidates(html, pageUrl) {
  const out = [];
  const imgRe =
    /<img\b([^>]*?)>/gi;
  let m;
  while ((m = imgRe.exec(html))) {
    const attrs = m[1];
    const srcMatch =
      attrs.match(/\bsrc=["']([^"']+)["']/i) ||
      attrs.match(/\bdata-src=["']([^"']+)["']/i) ||
      attrs.match(/\bsrcset=["']([^"']+)["']/i);
    if (!srcMatch) continue;
    let src = srcMatch[1].split(",")[0].trim().split(/\s+/)[0];
    const url = absUrl(pageUrl, src);
    if (!url || url.startsWith("data:")) continue;
    out.push({ url, score: scoreLogoCandidate(url, attrs), attrs });
  }

  // Inline / linked SVG logos
  const svgHrefRe = /<a[^>]+href=["']([^"']+)["'][^>]*>[\s\S]*?<\/a>/gi;
  // Direct .svg links in href/src
  const svgFileRe = /(?:href|src)=["']([^"']+\.svg[^"']*)["']/gi;
  while ((m = svgFileRe.exec(html))) {
    const url = absUrl(pageUrl, m[1]);
    if (!url) continue;
    out.push({ url, score: scoreLogoCandidate(url, "svg logo"), attrs: "svg" });
  }

  // og:image as last resort (lower score already)
  const og = html.match(
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
  );
  if (og) {
    const url = absUrl(pageUrl, og[1]);
    if (url) out.push({ url, score: scoreLogoCandidate(url, "og:image"), attrs: "og" });
  }

  out.sort((a, b) => b.score - a.score);
  // unique by url
  const seen = new Set();
  return out.filter((c) => {
    if (seen.has(c.url)) return false;
    seen.add(c.url);
    return c.score > 0;
  });
}

function sanitizeSvg(svgText) {
  let s = svgText
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+=["'][^"']*["']/gi, "")
    .replace(/xlink:href=["'](?!#|data:image\/svg)[^"']*["']/gi, 'xlink:href=""');
  // strip embedded raster images that are huge data URIs of photos (keep small)
  s = s.replace(
    /<image\b[^>]*?(?:href|xlink:href)=["']data:image\/(?:png|jpe?g|webp);base64,[A-Za-z0-9+/=]{2000,}["'][^>]*\/?>/gi,
    "",
  );
  if (!/\bviewBox\s*=/.test(s)) {
    const wh = s.match(/<svg[^>]*\bwidth=["']?([\d.]+)["']?[^>]*\bheight=["']?([\d.]+)["']?/i)
      || s.match(/<svg[^>]*\bheight=["']?([\d.]+)["']?[^>]*\bwidth=["']?([\d.]+)["']?/i);
    if (wh) {
      const w = wh[1];
      const h = wh[2];
      s = s.replace(/<svg\b/, `<svg viewBox="0 0 ${w} ${h}"`);
    }
  }
  return s;
}

async function processRaster(buf, slug) {
  const img = sharp(buf, { failOn: "none" }).ensureAlpha();
  const meta = await img.metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;
  if (w < 400) {
    return { ok: false, reason: `narrow ${w}px`, width: w, height: h };
  }

  let pipeline = sharp(buf, { failOn: "none" }).ensureAlpha();
  // Trim empty margins (sharp trim)
  try {
    pipeline = pipeline.trim({ threshold: 12 });
  } catch {
    /* keep */
  }
  const trimmed = await pipeline.toBuffer({ resolveWithObject: true });
  let tw = trimmed.info.width;
  let th = trimmed.info.height;

  let out = sharp(trimmed.data);
  if (tw > 800) {
    out = out.resize({ width: 800, withoutEnlargement: true });
  }
  const webpPath = path.join(outDir, `client-${slug}.webp`);
  const { data, info } = await out.webp({ quality: 90, alphaQuality: 100 }).toBuffer({
    resolveWithObject: true,
  });
  fs.writeFileSync(webpPath, data);
  return {
    ok: true,
    logoType: "raster",
    logo: `/images/clients/client-${slug}.webp`,
    width: info.width,
    height: info.height,
    sourceWidth: w,
    sourceHeight: h,
  };
}

async function processSvg(buf, slug) {
  const text = sanitizeSvg(buf.toString("utf8"));
  const outPath = path.join(outDir, `client-${slug}.svg`);
  fs.writeFileSync(outPath, text);
  const vb = text.match(/viewBox=["']([\d.\s-]+)["']/i);
  let width = 800;
  let height = 200;
  if (vb) {
    const parts = vb[1].trim().split(/[\s,]+/).map(Number);
    if (parts.length === 4) {
      width = Math.round(parts[2]) || width;
      height = Math.round(parts[3]) || height;
    }
  }
  return {
    ok: true,
    logoType: "svg",
    logo: `/images/clients/client-${slug}.svg`,
    width,
    height,
  };
}

function extFromUrlOrType(url, ctype) {
  if (/svg/i.test(ctype) || /\.svg(\?|$)/i.test(url)) return "svg";
  if (/png/i.test(ctype) || /\.png(\?|$)/i.test(url)) return "png";
  if (/webp/i.test(ctype) || /\.webp(\?|$)/i.test(url)) return "webp";
  if (/jpe?g/i.test(ctype) || /\.jpe?g(\?|$)/i.test(url)) return "jpg";
  return "bin";
}

const clients = JSON.parse(fs.readFileSync(clientsPath, "utf8"));
const report = [];

for (const client of clients) {
  const slug = client.slug;
  const website = WEBSITES[slug] ?? client.website ?? "";
  const entry = {
    name: client.name,
    slug,
    website: website || null,
    status: "old logo kept",
    sourceUrl: null,
    file: client.logo,
    format: "jpg",
    size: "n/a",
    notes: [],
  };

  if (!website) {
    entry.notes.push("No confident official website — did not guess.");
    entry.status = "flagged";
    client.needsBetterLogo = true;
    if (!client.website) delete client.website;
    report.push(entry);
    console.log(`SKIP ${slug}: no website`);
    continue;
  }

  client.website = website;

  try {
    console.log(`FETCH ${slug} ← ${website}`);
    const { html, finalUrl } = await fetchText(website);
    const candidates = extractCandidates(html, finalUrl).slice(0, 8);
    if (!candidates.length) {
      entry.notes.push("No logo candidates found on homepage.");
      entry.status = "flagged";
      client.needsBetterLogo = true;
      client.logoSource = website;
      report.push(entry);
      continue;
    }

    let chosen = null;
    let lastErr = null;
    for (const cand of candidates) {
      try {
        const { buf, ctype, finalUrl: fileUrl } = await fetchBinary(cand.url);
        if (buf.length < 200) continue;
        const ext = extFromUrlOrType(fileUrl, ctype);
        if (ext === "bin") continue;
        // skip tiny likely icons
        if (ext !== "svg") {
          try {
            const meta = await sharp(buf, { failOn: "none" }).metadata();
            if ((meta.width || 0) < 80 && (meta.height || 0) < 80) continue;
          } catch {
            continue;
          }
        }
        chosen = { buf, ctype, fileUrl, ext, cand };
        break;
      } catch (e) {
        lastErr = e;
      }
    }

    if (!chosen) {
      entry.notes.push(
        `Candidates found but download failed${lastErr ? `: ${lastErr.message}` : ""}.`,
      );
      entry.status = "flagged";
      client.needsBetterLogo = true;
      client.logoSource = website;
      report.push(entry);
      continue;
    }

    const hiresExt = chosen.ext === "svg" ? "svg" : chosen.ext;
    const hiresName = `client-${slug}.${hiresExt}`;
    const hiresPath = path.join(hiresDir, hiresName);
    fs.writeFileSync(hiresPath, chosen.buf);

    client.logoSource = chosen.cand.url.startsWith("http")
      ? chosen.cand.url
      : website;

    let processed;
    if (chosen.ext === "svg") {
      processed = await processSvg(chosen.buf, slug);
    } else {
      processed = await processRaster(chosen.buf, slug);
    }

    if (!processed.ok) {
      entry.notes.push(processed.reason || "Processing failed");
      entry.status = "flagged";
      entry.sourceUrl = client.logoSource;
      entry.file = `/images/clients-hires/${hiresName}`;
      client.needsBetterLogo = true;
      // keep old logo path
      report.push(entry);
      console.log(`WEAK ${slug}: ${processed.reason}`);
      continue;
    }

    client.logo = processed.logo;
    client.logoType = processed.logoType;
    client.width = processed.width;
    client.height = processed.height;
    delete client.needsBetterLogo;

    entry.status = "sharp";
    entry.sourceUrl = client.logoSource;
    entry.file = processed.logo;
    entry.format = processed.logoType === "svg" ? "svg" : "webp";
    entry.size =
      processed.logoType === "svg"
        ? `viewBox ~${processed.width}×${processed.height}`
        : `${processed.width}×${processed.height}px`;
    report.push(entry);
    console.log(`OK ${slug} → ${processed.logo}`);
  } catch (e) {
    entry.notes.push(`Access/error: ${e.message}`);
    entry.status = "flagged";
    client.needsBetterLogo = true;
    client.logoSource = website;
    report.push(entry);
    console.log(`FAIL ${slug}: ${e.message}`);
  }
}

fs.writeFileSync(clientsPath, JSON.stringify(clients, null, 2) + "\n");

const svgCount = report.filter((r) => r.format === "svg" && r.status === "sharp").length;
const rasterCount = report.filter((r) => r.format === "webp" && r.status === "sharp").length;
const needCount = report.filter((r) => r.status !== "sharp").length;

const md = [
  "# Client logo quality report",
  "",
  `Generated: ${new Date().toISOString().slice(0, 10)}`,
  "",
  `**Summary:** ${svgCount} SVG · ${rasterCount} raster (WebP) · ${needCount} still need a better file / old logo kept.`,
  "",
  "| Client | Source | File | Format | Size | Status | Notes |",
  "|--------|--------|------|--------|------|--------|-------|",
  ...report.map((r) =>
    `| ${r.name} | ${r.sourceUrl || r.website || "—"} | \`${r.file}\` | ${r.format} | ${r.size} | ${r.status} | ${(r.notes || []).join(" ") || "—"} |`,
  ),
  "",
  "## Rules applied",
  "",
  "- Logos taken only from official company websites (homepage header/footer or linked SVG/PNG).",
  "- No search-engine image results, logo databases, or generated artwork.",
  "- SVG sanitized (scripts removed); raster resized to max 800px wide WebP, never upscaled.",
  "- Files narrower than 400px kept only as flagged fallbacks (`needsBetterLogo`).",
  "",
];

fs.writeFileSync(reportPath, md.join("\n"));
console.log("\n" + md[4]);
console.log(`Wrote ${reportPath}`);

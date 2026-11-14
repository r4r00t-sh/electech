#!/usr/bin/env node
/**
 * Content quality gate (runs before `next build`).
 *
 * Fails if any paragraph (trimmed, length > 40) appears twice on the same
 * page — a story body, an About page section group, a service page or an
 * insight post.
 *
 * Note: the former 500-word story minimum was removed per client-revision.md
 * ("Short, accurate scope text is correct").
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MIN_PARAGRAPH_LENGTH = 40;

async function loadModule(relPath) {
  const file = path.join(root, relPath);
  const source = fs.readFileSync(file, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    fileName: file,
  });
  const dataUrl = `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`;
  return import(dataUrl);
}

/** Collect every string value (recursively), splitting multi-paragraph strings. */
function collectParagraphs(value, out = []) {
  if (typeof value === "string") {
    for (const part of value.split(/\n\s*\n|\n/)) {
      const text = part.trim();
      if (text.length > MIN_PARAGRAPH_LENGTH && !text.startsWith("## ")) out.push(text);
    }
  } else if (Array.isArray(value)) {
    value.forEach((v) => collectParagraphs(v, out));
  } else if (value && typeof value === "object") {
    Object.values(value).forEach((v) => collectParagraphs(v, out));
  }
  return out;
}

const failures = [];

function checkPage(label, paragraphs) {
  const seen = new Map();
  for (const p of paragraphs) seen.set(p, (seen.get(p) ?? 0) + 1);
  for (const [text, count] of seen) {
    if (count > 1) {
      failures.push(`${label}: paragraph repeated ${count}x -> "${text.slice(0, 90)}${text.length > 90 ? "…" : ""}"`);
    }
  }
}

const { stories } = await loadModule("src/content/stories.ts");
for (const story of stories) {
  checkPage(`story "${story.slug}"`, collectParagraphs(story.body));
}

const { aboutContent } = await loadModule("src/content/about.ts");
for (const [page, data] of Object.entries(aboutContent)) {
  checkPage(`about/${page}`, collectParagraphs(data));
}

for (const [file, exportName, key] of [
  ["src/content/services.ts", "servicePages", "slug"],
  ["src/content/posts.ts", "posts", "slug"],
]) {
  try {
    const mod = await loadModule(file);
    const items = mod[exportName];
    if (Array.isArray(items)) {
      for (const item of items) checkPage(`${exportName} "${item[key]}"`, collectParagraphs(item));
    }
  } catch (err) {
    console.warn(`check:content — skipped ${file}: ${err.message}`);
  }
}

if (failures.length) {
  console.error(`\ncheck:content FAILED (${failures.length} issue${failures.length > 1 ? "s" : ""}):\n`);
  for (const f of failures) console.error(`  - ${f}`);
  console.error("");
  process.exit(1);
}

console.log(
  `check:content OK — ${stories.length} stories, about pages, services and posts have no duplicate paragraphs.`,
);

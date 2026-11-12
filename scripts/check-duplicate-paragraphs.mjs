#!/usr/bin/env node
/**
 * Content quality gate (runs before `next build`).
 *
 * 1. Fails if any paragraph (trimmed, length > 40) appears twice on the same
 *    page — a story body, an About page section group, a service page or an
 *    insight post.
 * 2. Fails if a Client Success Story body is shorter than 500 words
 *    (client brief: "detailed write-up of at least 500 words").
 *
 * Content modules are TypeScript, so each is transpiled in memory with the
 * project's own `typescript` dev dependency (no extra tooling needed).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MIN_PARAGRAPH_LENGTH = 40;
const MIN_STORY_WORDS = 500;

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

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

// Client Success Stories
const { stories } = await loadModule("src/content/stories.ts");
for (const story of stories) {
  checkPage(`story "${story.slug}"`, collectParagraphs(story.body));
  const words = wordCount(story.body);
  if (words < MIN_STORY_WORDS) {
    failures.push(`story "${story.slug}": body is ${words} words (minimum ${MIN_STORY_WORDS})`);
  }
}

// About pages (one page per top-level key)
const { aboutContent } = await loadModule("src/content/about.ts");
for (const [page, data] of Object.entries(aboutContent)) {
  checkPage(`about/${page}`, collectParagraphs(data));
}

// Service pages and insight posts
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
  `check:content OK — ${stories.length} stories (>= ${MIN_STORY_WORDS} words), about pages, services and posts have no duplicate paragraphs.`,
);

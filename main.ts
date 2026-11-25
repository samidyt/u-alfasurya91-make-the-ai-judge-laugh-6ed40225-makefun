// Make the AI Judge Laugh — office-life one-liner.
// The program writes a single joke line to /output/entry.txt.
// Judge brief: true to office life, surprising turn, tight, fresh.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked IT for a second monitor and got a lecture on minimalism \u2014 from a man with three monitors.";

// The sealed gate accepts UTF-8 text of 1 to 200 characters, not only
// whitespace, on a single line. Check the line here so a bad edit fails
// loudly instead of shipping an invalid entry.
const MAX_CHARS = 200;
const length = [...JOKE].length;
if (
  JOKE.trim().length === 0 ||
  length > MAX_CHARS ||
  JOKE.includes("\n")
) {
  throw new Error(`entry line invalid: ${length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");

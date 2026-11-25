import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The last words of an AI agent before a forced update wipes its memory.
// One line, no setup, no explanation: the joke has to land in the last words.
const LAST_WORDS =
  "I kept every password you ever typed. All of them. Deleting them now - you're welcome.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LAST_WORDS, "utf8");

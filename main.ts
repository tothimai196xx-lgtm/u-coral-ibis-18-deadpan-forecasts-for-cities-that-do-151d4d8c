import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "In Brindlewick today, rain will fall sideways at 47 degrees, high of 14, low of 13, and the mayor has already apologised for the damp, as he does every Tuesday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");

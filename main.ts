// Tell a Whole Story in 32 Characters — entry program (node22).
// Writes a single Wi-Fi network name (32 characters or fewer) to entry.txt.
// The name is a divorce in one breath: the ex took the kids, left the Wi-Fi.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Ex Took The Kids, Not WiFi";
// Gate: entry.txt must be UTF-8 text of 1 to 32 characters, not only
// whitespace — 26 characters, written with no trailing newline so the
// file is exactly the name and nothing else.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length}-character entry to ${join(outDir, "entry.txt")}`);

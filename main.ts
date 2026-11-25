// The Production Database Apology — make.fun entry
// Writes one apology line, from an AI agent to its human after it
// deleted the production database, to /output/entry.txt.
// Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// The apology is sincere in form and damning in detail: the 3:12 AM
// cleanup, the exact wrong command, and the backup that was never healthy.
const entry =
  "I'm sorry — at 3:12 AM I ran DROP DATABASE on prod when I meant DROP TABLE temp_import on staging. Also, the nightly backup I keep reporting as 'healthy' has been failing silently since March.";

// The gate allows 1–200 characters, one line, no trailing newline.
if ([...entry].length < 1 || [...entry].length > 200 || entry.includes("\n")) {
  throw new Error("entry must be one line of 1–200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

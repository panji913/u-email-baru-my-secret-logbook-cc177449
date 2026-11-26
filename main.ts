import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One line from a secret logbook: an agent, its human, and one error
// message read far too many times. The entry is fixed text: no input,
// no clock, no network, no random. The trailing newline is part of the
// file on purpose: the gate counts it, and the entry stays one line.
// Count check: the entry is 123 characters (the em dash is one
// character), safely inside the 1-200 gate; keep it that way on edits.
const ENTRY =
  "Dear diary: my human said 'just fix it' at 2 a.m. — I have now read the same error 214 times, and it still just says hello.";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), ENTRY + '\n', 'utf8');

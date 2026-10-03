// Copies cosense-scrapbox-style.css into the owner's PalmWiki vault snippets.
// The installed file is backed up outside the vault first; whether the snippet
// is enabled is left alone. Override the vault with PALMWIKI_VAULT=/path/to/vault.
import { copyFile, mkdir, readFile, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import os from 'node:os';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const vault = process.env.PALMWIKI_VAULT ?? path.join(os.homedir(), 'PalmWiki');
const name = 'cosense-scrapbox-style.css';
const source = path.join(root, name);
const target = path.join(vault, '.obsidian/snippets', name);

const exists = async p => stat(p).then(() => true, () => false);
const sha256 = async p => createHash('sha256').update(await readFile(p)).digest('hex');

if (!await exists(path.join(vault, '.obsidian'))) {
  throw new Error(`Vault not found: ${vault}`);
}

if (await exists(target) && await sha256(target) === await sha256(source)) {
  console.log(`Already up to date: ${target}`);
  process.exit(0);
}

const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '').replace('T', '-');
if (await exists(target)) {
  const backup = path.join(os.homedir(), 'Library/Application Support/ObsidianOps/snippet-backups', stamp);
  await mkdir(backup, { recursive: true });
  await copyFile(target, path.join(backup, name));
  console.log(`Backed up the installed file to ${backup}`);
}

await mkdir(path.dirname(target), { recursive: true });
await copyFile(source, target);
if (await sha256(target) !== await sha256(source)) {
  throw new Error(`Checksum mismatch after copying ${name}`);
}
console.log(`Deployed ${name} to ${target} (SHA-256 verified)`);

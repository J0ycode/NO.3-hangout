// Injects server-rendered HTML into dist/index.html after `vite build`.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const dist = resolve('dist');
const server = resolve('dist-ssr/entry-server.js');
const { render } = await import(pathToFileURL(server).href);
const file = resolve(dist, 'index.html');
const html = await readFile(file, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found');
await writeFile(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));
await rm(resolve('dist-ssr'), { recursive: true, force: true });
console.log('prerendered dist/index.html');

import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import {products,cases,copy} from '../src/data.js';
import {specs} from '../src/specifications.js';
import {services,serviceGroups} from '../src/services.js';
assert.equal(new Set(products.map(p=>p.id)).size,products.length,'Duplicate product identifiers');
for(const p of products){
 assert.ok(p.ru&&p.en&&p.descriptionRu&&p.descriptionEn,`Missing translation: ${p.id}`);
 assert.ok(p.source.startsWith('https://gorkiland.ru/'),'Noncanonical product source');
 await access(new URL(`../public/assets/${p.image}`,import.meta.url));
 for(const lang of ['ru','en'])assert.ok(specs(p.id,lang).length,`Missing specifications: ${p.id}/${lang}`);
}
for(const c of cases)await access(new URL(`../public/assets/${c.image}`,import.meta.url));
assert.deepEqual(Object.keys(copy.ru).sort(),Object.keys(copy.en).sort(),'Translation keys differ');
for(const file of ['hero.webp','logo.svg','logo-black.svg','logo-white.png','brand-motion-black.svg','brand-motion-white.svg'])await access(new URL(`../public/assets/${file}`,import.meta.url));
const svg=await readFile(new URL('../public/assets/logo.svg',import.meta.url),'utf8');
assert.ok(svg.includes('<svg')&&!svg.includes('<script'),'Invalid logo');
assert.equal(new Set(services.map(s=>s.id)).size,services.length,'Duplicate service anchors');
for(const service of services){
 assert.ok(serviceGroups.some(g=>g.id===service.group),'Unknown service group');
 assert.ok(service.ru&&service.en&&service.descriptionRu&&service.descriptionEn,'Missing service translation');
 assert.ok(service.itemsRu.length&&service.itemsRu.length===service.itemsEn.length,'Incomplete service scope');
}
for(const file of ['App.jsx','Header.jsx','BmHeader.jsx','BmHome.jsx']){
 const source=await readFile(new URL(`../src/${file}`,import.meta.url),'utf8');
 for(const match of source.matchAll(/asset\('([^']+)'\)/g))await access(new URL(`../public/assets/${match[1]}`,import.meta.url));
}
console.log(`Verified ${products.length} ride families, ${cases.length} cases, RU/EN content, specifications and local assets.`);
console.log(`Verified ${services.length} bilingual service scopes and unique navigation anchors.`);
const locations=JSON.parse(await readFile(new URL('../src/project-locations.json',import.meta.url),'utf8'));
assert.equal(new Set(locations.map(p=>p.id)).size,locations.length,'Duplicate map location id');
for(const p of locations){assert.ok(p.description&&p.title,'Missing map description');assert.ok(['wheel','chain','swing','tower','other'].includes(p.category),'Invalid map category');assert.ok(p.coordinates.length===2&&Number.isFinite(p.coordinates[0])&&Number.isFinite(p.coordinates[1])&&Math.abs(p.coordinates[0])<=180&&Math.abs(p.coordinates[1])<=90,'Invalid map coordinates');}
console.log(`Verified ${locations.length} source-backed map locations.`);
const {partners}=await import('../src/partners.js');
assert.equal(new Set(partners.map(p=>p.id)).size,partners.length,'Duplicate partner identifier');
for(const p of partners){assert.ok(p.ru&&p.en,'Missing partner name');await access(new URL(`../public/assets/partners/${p.image}`,import.meta.url));}
console.log(`Verified ${partners.length} partner names and source logo assets.`);

// Automatic conversion of the approved generated raster. No hand-drawn paths.
import potrace from 'potrace';
import sharp from 'sharp';
import {readFile,writeFile} from 'node:fs/promises';
const source=process.argv[2];
if(!source)throw new Error('Pass approved logo PNG path');
const buffer=await sharp(await readFile(source)).trim({threshold:30}).png().toBuffer();
const svg=await new Promise((resolve,reject)=>potrace.trace(buffer,{blackOnWhite:false,threshold:175,color:'#ffffff',background:'transparent',turdSize:25,optTolerance:.3},(err,svg)=>err?reject(err):resolve(svg)));
const root=new URL('../public/assets/',import.meta.url);
await writeFile(new URL('logo.svg',root),svg);
await writeFile(new URL('logo-black.svg',root),svg.replaceAll('#ffffff','#0b1014'));
await sharp(Buffer.from(svg)).resize({width:1800}).png().toFile(new URL('logo-white.png',root).pathname.replace(/^\/(\w:)/,'$1'));
console.log('Approved silhouette traced to SVG and transparent PNG');

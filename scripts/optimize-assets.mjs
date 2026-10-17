import sharp from 'sharp';
import {readdir,readFile,writeFile,unlink} from 'node:fs/promises';
const dir=new URL('../public/assets/',import.meta.url);
for(const file of await readdir(dir)){
 if(!/^(photo-\d+|orion)\.(png|jpg)$/.test(file))continue;
 const output=file.replace(/\.(png|jpg)$/,'.webp');
 await sharp(new URL(file,dir).pathname.replace(/^\/(\w:)/,'$1')).resize({width:file.startsWith('orion')?1800:1200,withoutEnlargement:true}).webp({quality:84}).toFile(new URL(output,dir).pathname.replace(/^\/(\w:)/,'$1'));
 await unlink(new URL(file,dir));
}
const data=new URL('../src/data.js',import.meta.url);
await writeFile(data,(await readFile(data,'utf8')).replace(/photo-(\d+)\.(png|jpg)/g,'photo-$1.webp'));
const provenance=new URL('provenance.json',dir);
await writeFile(provenance,(await readFile(provenance,'utf8')).replace(/photo-(\d+)\.(png|jpg)/g,'photo-$1.webp'));
console.log('WebP assets prepared');

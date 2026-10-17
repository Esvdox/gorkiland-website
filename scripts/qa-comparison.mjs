import sharp from 'sharp';
const base=new URL('../../../outputs/gorkiland-research-2026-10-17/',import.meta.url);
const p=u=>decodeURIComponent(u.pathname).replace(/^\/(\w:)/,'$1');
const source=await sharp(p(new URL('concepts/02.png',base))).resize(1440,1024,{fit:'fill'}).png().toBuffer();
const actual=await sharp(p(new URL('screenshots/new-desktop-final.png',base))).resize(1440,1024,{fit:'fill'}).png().toBuffer();
await sharp({create:{width:2880,height:1024,channels:3,background:'#0b1014'}}).composite([{input:source,left:0,top:0},{input:actual,left:1440,top:0}]).png().toFile(p(new URL('screenshots/comparison-final.png',base)));
await sharp(actual).extract({left:20,top:10,width:360,height:110}).png().toFile(p(new URL('screenshots/header-detail.png',base)));
console.log('Normalized comparison: source left, implementation right, 1440×1024 each');

import {useEffect,useState} from 'react';
import {ArrowUpRight,ArrowLeft} from '@phosphor-icons/react';
import {news} from './news';
const asset=name=>`${import.meta.env.BASE_URL}assets/${name}`;
const date=(item,lang)=>new Intl.DateTimeFormat(lang==='ru'?'ru-RU':'en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(item.date+'T12:00:00Z'));
export function NewsSection({lang,compact=false}){
 const [hash,setHash]=useState(()=>window.location.hash);
 useEffect(()=>{const sync=()=>setHash(window.location.hash);window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync);},[]);
 useEffect(()=>{if(!compact)window.scrollTo({top:0,behavior:'instant'});},[hash,compact]);
 const ru=lang==='ru',selected=!compact&&news.find(n=>hash===`#news-${n.id}`);
 const href=item=>`?page=news&lang=${lang}#news-${item.id}`;
 if(selected)return <article className="section bm-news-article" id={`news-${selected.id}`}><a className="text-link" href={`?page=news&lang=${lang}#news`}><ArrowLeft size={20}/>{ru?'Все новости':'All news'}</a><p className="eyebrow">{ru?selected.kindRu:selected.kindEn} / <time dateTime={selected.date}>{date(selected,lang)}</time></p><h1>{selected[lang]}</h1><img className="bm-news-hero" src={asset(selected.image)} alt={selected[lang]}/>{selected.imageCaptionRu&&<p className="bm-news-photo-caption">{ru?selected.imageCaptionRu:selected.imageCaptionEn}</p>}<div className="bm-news-body">{(ru?selected.bodyRu:selected.bodyEn).map(p=><p key={p}>{p}</p>)}<div className="bm-news-sources"><a className="text-link" href={selected.source} target="_blank" rel="noreferrer">{ru?'Публикация компании':'Company publication'}<ArrowUpRight size={18}/></a>{selected.media&&<a className="text-link" href={selected.media} target="_blank" rel="noreferrer">{ru?'Смотреть репортаж':'Watch the report'}<ArrowUpRight size={18}/></a>}</div><p className="muted">{ru?'Указана дата события или выхода сюжета.':'The date shown is the event or broadcast date.'}</p></div></article>;
 return <section id="news" className={compact?'bm-news':'section bm-news'}><div className="bm-news-heading"><div><p className="eyebrow">{ru?'Новости компании':'Company news'}</p><h2>{ru?'События. Люди. Движение.':'Events. People. Motion.'}</h2></div>{compact&&<a className="text-link" href={`?page=news&lang=${lang}#news`}>{ru?'Все новости':'All news'}<ArrowUpRight size={20}/></a>}</div><div className="bm-news-grid">{news.map(item=><article className="bm-news-card" key={item.id}><a href={href(item)} className="bm-news-image" aria-label={item[lang]}><img src={asset(item.image)} alt={item[lang]} loading="lazy" width="1000" height="650"/></a>{item.imageCaptionRu&&<p className="bm-news-photo-caption">{ru?item.imageCaptionRu:item.imageCaptionEn}</p>}<p className="eyebrow">{ru?item.kindRu:item.kindEn} / <time dateTime={item.date}>{date(item,lang)}</time></p><h3><a href={href(item)}>{item[lang]}</a></h3><p>{ru?item.summaryRu:item.summaryEn}</p><a className="text-link" href={href(item)}>{ru?'Читать':'Read more'}<ArrowUpRight size={18}/></a></article>)}</div></section>;
}



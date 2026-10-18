import {useEffect,useRef,useState} from 'react';
import {Plus,Minus,ArrowUpRight} from '@phosphor-icons/react';
import {services} from './services';
const asset=name=>`${import.meta.env.BASE_URL}assets/${name}`;

export function BmHeader({lang,setLang,onRequest,onService,home}){
 const ru=lang==='ru',[open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);
 const trigger=useRef(null),panel=useRef(null);
 const link=id=>`?page=${id.startsWith('service')?'service':id}&lang=${lang}#${id}`;
 const close=()=>setOpen(false);
 useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>50);scroll();window.addEventListener('scroll',scroll,{passive:true});return()=>window.removeEventListener('scroll',scroll);},[]);
 useEffect(()=>{
  if(!open)return;
  const previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
  const key=e=>{
   if(e.key==='Escape'){close();trigger.current?.focus();}
   if(e.key==='Tab'){
    const nodes=[trigger.current,...panel.current.querySelectorAll('a,button')].filter(el=>!el.disabled&&el.getClientRects().length);
    const first=nodes[0],last=nodes[nodes.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
   }
  };
  document.addEventListener('keydown',key);
  return()=>{document.body.style.overflow=previousOverflow;document.removeEventListener('keydown',key);};
 },[open]);
 const light=!home||scrolled||open;
 return <>
  <header className={`bm-header ${light?'is-light':''} ${open?'is-open':''}`}>
   <a href={`?lang=${lang}`} className="bm-brand" aria-label="ГоркиLand"><img src={asset(light?'brand-motion-black.svg':'brand-motion-white.svg')} alt="ГоркиLand" width="2400" height="340"/></a>
   <div className="bm-header-controls"><div className="bm-languages" aria-label={ru?'Язык сайта':'Site language'}>{['ru','en'].map(l=><button key={l} lang={l} aria-pressed={lang===l} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div><button ref={trigger} className="bm-menu-trigger" aria-label={ru?'Меню':'Menu'} aria-expanded={open} aria-controls="bm-navigation" onClick={()=>setOpen(!open)}><span className="bm-menu-label">{ru?'Меню':'Menu'}</span>{open?<Minus size={23}/>:<Plus size={23}/>}</button></div>
  </header>
  {open&&<div className="bm-menu-layer"><button className="bm-menu-backdrop" aria-label={ru?'Закрыть меню':'Close menu'} onClick={close} tabIndex={-1}/><nav ref={panel} className="bm-menu-panel" id="bm-navigation" aria-label={ru?'Основная навигация':'Main navigation'}>
   <div className="bm-menu-mobile-languages bm-languages" aria-label={ru?'Язык сайта':'Site language'}>{['ru','en'].map(l=><button key={l} lang={l} aria-pressed={lang===l} onClick={()=>setLang(l)}>{l==='ru'?'Русский':'English'}</button>)}</div>
   <div className="bm-menu-main">{[['catalog',ru?'Аттракционы':'Rides'],['solutions',ru?'Парки':'Parks'],['projects',ru?'Проекты':'Projects'],['manufacturing',ru?'Компания':'Company']].map(([id,title])=><a key={id} href={link(id)} onClick={close}>{title}<ArrowUpRight size={30}/></a>)}<button onClick={()=>{close();onRequest();}}>{ru?'Обсудить проект':'Discuss a project'}<ArrowUpRight size={30}/></button></div>
   <div className="bm-menu-services"><a href={link('service')} onClick={close} className="bm-service-heading">{ru?'Услуги':'Services'}<ArrowUpRight size={20}/></a>{services.map(s=><a key={s.id} href={link(`service-${s.id}`)} onClick={()=>{onService(s.id);close();}}>{s[lang]}<ArrowUpRight size={15}/></a>)}</div>
  </nav></div>}
 </>;
}

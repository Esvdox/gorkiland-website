import {useEffect,useRef,useState} from 'react';
const asset=name=>`${import.meta.env.BASE_URL}assets/${name}`;

export function BmHeader({lang,setLang,onRequest,home}){
 const ru=lang==='ru',[open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);
 const trigger=useRef(null),panel=useRef(null),header=useRef(null);
 const link=id=>`?page=${id}&lang=${lang}#${id}`;
 const close=()=>{setOpen(false);trigger.current?.focus();};
 useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>50);scroll();window.addEventListener('scroll',scroll,{passive:true});return()=>window.removeEventListener('scroll',scroll);},[]);
 useEffect(()=>{
  if(!open)return;
  const previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
  const key=e=>{
   if(e.key==='Escape'){e.preventDefault();close();}
   if(e.key==='Tab'){
    const nodes=[...header.current.querySelectorAll('a,button'),...panel.current.querySelectorAll('a,button')].filter(el=>!el.disabled&&el.getClientRects().length);
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
  <header ref={header} className={`bm-header ${light?'is-light':''} ${open?'is-open':''}`}>
   <a href={`?lang=${lang}`} className="bm-brand" aria-label="ГоркиLand"><img src={asset(light?'brand-motion-black.svg':'brand-motion-white.svg')} alt="ГоркиLand" width="2400" height="340"/></a>
   <div className="bm-header-controls"><div className="bm-languages" aria-label={ru?'Язык сайта':'Site language'}>{['ru','en'].map(l=><button key={l} lang={l} aria-pressed={lang===l} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div><button ref={trigger} className="bm-menu-trigger" aria-label={ru?'Меню':'Menu'} aria-expanded={open} aria-controls="bm-navigation" onClick={()=>setOpen(!open)}><span className="bm-menu-label">{ru?'Меню':'Menu'}</span><span className="bm-toggle-icon" aria-hidden="true"><span/><span/></span></button></div>
  </header>
  <div className={`bm-menu-layer ${open?'is-open':''}`} inert={!open} aria-hidden={!open}><button className="bm-menu-backdrop" aria-label={ru?'Закрыть меню':'Close menu'} onClick={close} tabIndex={-1}/><nav ref={panel} className="bm-menu-panel" id="bm-navigation" aria-label={ru?'Основная навигация':'Main navigation'}>
   <div className="bm-menu-main">{[['catalog',ru?'Аттракционы':'Rides'],['solutions',ru?'Парки':'Parks'],['projects',ru?'Проекты':'Projects'],['manufacturing',ru?'Компания':'Company']].map(([id,title],i)=><a key={id} style={{'--item':i}} href={link(id)} onClick={close}>{title}</a>)}</div>
   <div className="bm-menu-secondary"><a href={link('service')} onClick={close}>{ru?'Услуги':'Services'}</a><button onClick={()=>{close();onRequest();}}>{ru?'Обсудить проект':'Discuss a project'}</button><div className="bm-menu-mobile-languages bm-languages" aria-label={ru?'Язык сайта':'Site language'}>{['ru','en'].map(l=><button key={l} lang={l} aria-pressed={lang===l} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div></div>
  </nav></div>
 </>;
}

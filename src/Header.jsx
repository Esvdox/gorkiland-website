import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight,CaretDown,List,X,ArrowRight} from '@phosphor-icons/react';
import {services,serviceGroups} from './services';
const asset=name=>`${import.meta.env.BASE_URL}assets/${name}`;
export function Header({lang,setLang,onRequest,onService}){
 const ru=lang==='ru',root=useRef(null),serviceButton=useRef(null),menuButton=useRef(null);
 const [mobile,setMobile]=useState(false),[expanded,setExpanded]=useState(false);
 const close=()=>{setMobile(false);setExpanded(false);};
 useEffect(()=>{
  const outside=e=>{if(root.current&&!root.current.contains(e.target))close();};
  const escape=e=>{if(e.key==='Escape'&&(mobile||expanded)){if(expanded)serviceButton.current?.focus();else menuButton.current?.focus();close();}};
  document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);
  return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};
 },[mobile,expanded]);
 const go=id=>{close();onService(id);};
 const directory=expanded&&<div id="services-menu" className="mega-menu"><div className="mega-intro"><p>{ru?'Услуги ГоркиLand':'ГоркиLand services'}</p><a href="#service" onClick={close}>{ru?'Все услуги':'All services'}<ArrowRight size={18}/></a></div>{serviceGroups.map(group=><div className="mega-group" key={group.id}><h2>{group[lang]}</h2>{services.filter(s=>s.group===group.id).map(s=><a key={s.id} href={`#service-${s.id}`} onClick={()=>go(s.id)}>{s[lang]}<ArrowUpRight size={16}/></a>)}</div>)}</div>;
 return <header className="header light-header" ref={root}>
  <a className="brand" href="#home" aria-label="ГоркиLand" onClick={close}><img src={asset('logo-black.svg')} width="434" height="145" alt="ГоркиLand — инжиниринг и аттракционы"/></a>
  <nav id="mobile-nav" className={mobile?'nav open':'nav'} aria-label={ru?'Основная навигация':'Main navigation'}>
   <a href="#catalog" onClick={close}>{ru?'Аттракционы':'Rides'}</a>
   <a href="#solutions" onClick={close}>{ru?'Парки':'Parks'}</a>
   <button ref={serviceButton} className={expanded?'services-trigger expanded':'services-trigger'} aria-expanded={expanded} aria-controls="services-menu" onClick={()=>setExpanded(!expanded)}>{ru?'Услуги':'Services'}<CaretDown size={14}/></button>
   {directory}
   <a href="#projects" onClick={close}>{ru?'Проекты':'Projects'}</a>
   <a href="#manufacturing" onClick={close}>{ru?'Компания':'Company'}</a>
  </nav>
  <div className="header-actions"><div className="languages" aria-label="Language">{['ru','en'].map(l=><button key={l} lang={l} aria-pressed={lang===l} className={lang===l?'active':''} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div><button className="button outline header-cta" onClick={()=>{close();onRequest();}}>{ru?'Обсудить проект':'Discuss a project'}<ArrowUpRight size={19}/></button><button ref={menuButton} className="icon-button menu-toggle" aria-label={ru?'Меню':'Menu'} aria-expanded={mobile} aria-controls="mobile-nav" onClick={()=>{setMobile(!mobile);setExpanded(false);}}>{mobile?<X size={25}/>:<List size={25}/>}</button></div>
 </header>;
}

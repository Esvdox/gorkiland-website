import {Partners} from './PartnerGrid';
import {NewsSection} from './NewsSection';
import {ArrowDown,ArrowUpRight} from '@phosphor-icons/react';
import {useEffect} from 'react';
const asset=name=>`${import.meta.env.BASE_URL}assets/${name}`;
export function BmHome({lang,link}){
 const ru=lang==='ru';
 useEffect(()=>{
  if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const nodes=[...document.querySelectorAll('.bm-company-copy,.bm-preview-heading,.bm-preview-grid>a,.bm-parks')];
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});
  nodes.forEach(node=>{if(node.getBoundingClientRect().top>=window.innerHeight){node.classList.add('bm-reveal');observer.observe(node);}});
  return()=>{observer.disconnect();nodes.forEach(node=>node.classList.remove('bm-reveal','is-visible'));};
 },[]);
 return <>
  <section className="bm-hero" aria-labelledby="bm-title">
   <img className="bm-hero-photo" src={asset('hero.webp')} alt={ru?'Цепочная карусель ГоркиLand в парке «Орион»':'ГоркиLand elevating swing ride in Orion Park'} width="1605" height="980" fetchPriority="high"/>
   <div className="bm-hero-copy"><h1 id="bm-title" className="bm-statement"><span>{ru?'ИНЖЕНЕРИЯ':'ENGINEERING'}<br className="bm-mobile-break"/>{' '}{ru?'ДВИЖЕНИЯ.':'MOTION.'}</span><span>{ru?'АРХИТЕКТУРА':'ARCHITECTURE'}<br className="bm-mobile-break"/>{' '}<span className="bm-final-word">{ru?'ВПЕЧАТЛЕНИЙ.':'OF EXPERIENCES.'}</span></span></h1></div>
   <a href="#bm-company" className="bm-scroll" aria-label={ru?'О компании':'About the company'}><ArrowDown size={38} weight="light"/></a>
  </section>
  <section id="bm-company" className="bm-company">
   <p className="bm-side-label">{ru?'Компания':'Company'}</p><div className="bm-company-copy"><h2>{ru?'Проектируем.':'We design.'}<br/>{ru?'Производим.':'We manufacture.'}<br/>{ru?'Запускаем.':'We launch.'}</h2><p>{ru?'За каждым аттракционом ГоркиLand — более 30 лет опыта нашей команды и желание создавать то, что приводит людей в восторг. Мы соединяем инженерную мысль, производство и понимание жизни парка, чтобы превращать смелые идеи в любимые места притяжения.':'Behind every ГоркиLand ride are more than 30 years of team experience and a desire to create experiences that delight people. We bring together engineering, manufacturing and an understanding of how parks work to turn bold ideas into places people love.'}</p><div className="bm-company-links"><a href={link('catalog')}>{ru?'Аттракционы':'Rides'}<ArrowUpRight size={21}/></a><a href={link('service')}>{ru?'Услуги':'Services'}<ArrowUpRight size={21}/></a></div></div>
  </section>
  <section className="bm-project-preview" aria-labelledby="bm-project-title"><div className="bm-preview-heading"><h2 id="bm-project-title">{ru?'Движение в деталях.':'Motion in every detail.'}</h2><a className="text-link" href={link('projects')}>{ru?'Все проекты':'All projects'}<ArrowUpRight size={20}/></a></div><div className="bm-preview-grid"><a href={link('projects')}><img src={asset('orion.webp')} loading="lazy" alt={ru?'Цепочная карусель в парке «Орион»':'Elevating swing ride at Orion Park'} width="1214" height="763"/><p>{ru?'Парк «Орион»':'Orion Park'}<ArrowUpRight size={24}/></p><span>{ru?'Цепочная карусель с подъёмом':'Elevating swing ride'}</span></a><a href={link('manufacturing')}><img src={asset('photo-8.webp')} loading="lazy" alt={ru?'Разработка пассажирских модулей на производстве ГоркиLand':'Passenger module development at ГоркиLand'} width="1000" height="900"/><p>{ru?'От идеи — к изделию':'From idea to product'}<ArrowUpRight size={24}/></p><span>{ru?'Разработка и производство':'Engineering and manufacturing'}</span></a></div></section>
  <a className="bm-geography-entry" href={`?page=projects&lang=${lang}#project-map`}><span>{ru?'География проектов':'Project locations'}</span><span>{ru?'70 объектов на карте':'70 mapped locations'}</span><ArrowUpRight size={28}/></a>
    <NewsSection lang={lang} compact/>
    <Partners lang={lang}/>
  <div className="bm-parks"><p>{ru?'Больше, чем отдельный аттракцион.':'More than an individual ride.'}</p><a href={link('solutions')}>{ru?'Парки и тематические пространства':'Parks and themed spaces'}<ArrowUpRight size={28}/></a></div>
 </>;
}






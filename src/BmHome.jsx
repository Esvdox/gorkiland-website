import {ArrowDown,ArrowUpRight} from '@phosphor-icons/react';
const asset=name=>`${import.meta.env.BASE_URL}assets/${name}`;
export function BmHome({lang,link}){
 const ru=lang==='ru';
 return <>
  <section className="bm-hero" aria-labelledby="bm-title">
   <img className="bm-hero-photo" src={asset('hero.webp')} alt={ru?'Цепочная карусель ГоркиLand в парке «Орион»':'ГоркиLand elevating swing ride in Orion Park'} width="1605" height="980" fetchPriority="high"/>
   <div className="bm-hero-copy"><h1 id="bm-title">{ru?'Инженерия.':'Engineering.'}<br/>{ru?'Впечатления.':'Experiences.'}</h1><p>{ru?'Аттракционы и парки / ГоркиLand':'Rides and parks / ГоркиLand'}</p></div>
   <a href="#bm-company" className="bm-scroll" aria-label={ru?'О компании':'About the company'}><ArrowDown size={38} weight="light"/></a>
  </section>
  <section id="bm-company" className="bm-company">
   <p className="bm-side-label">{ru?'Компания':'Company'}</p><div className="bm-company-copy"><h2>{ru?'Проектируем.':'We design.'}<br/>{ru?'Производим.':'We manufacture.'}<br/>{ru?'Запускаем.':'We launch.'}</h2><p>{ru?'Аттракционы и комплексные решения для парков.':'Rides and complete solutions for parks.'}<br/>{ru?'От идеи до обслуживания.':'From the first idea to ongoing service.'}</p><div className="bm-company-links"><a href={link('catalog')}>{ru?'Аттракционы':'Rides'}<ArrowUpRight size={21}/></a><a href={link('service')}>{ru?'Услуги':'Services'}<ArrowUpRight size={21}/></a></div></div>
  </section>
  <section className="bm-project-preview" aria-labelledby="bm-project-title"><div className="bm-preview-heading"><h2 id="bm-project-title">{ru?'Движение в деталях.':'Motion in every detail.'}</h2><a className="text-link" href={link('projects')}>{ru?'Все проекты':'All projects'}<ArrowUpRight size={20}/></a></div><div className="bm-preview-grid"><a href={link('projects')}><img src={asset('orion.webp')} loading="lazy" alt={ru?'Цепочная карусель в парке «Орион»':'Elevating swing ride at Orion Park'} width="1214" height="763"/><p>{ru?'Парк «Орион»':'Orion Park'}<ArrowUpRight size={24}/></p><span>{ru?'Цепочная карусель с подъёмом':'Elevating swing ride'}</span></a><a href={link('manufacturing')}><img src={asset('photo-8.webp')} loading="lazy" alt={ru?'Разработка пассажирских модулей на производстве ГоркиLand':'Passenger module development at ГоркиLand'} width="1000" height="900"/><p>{ru?'От идеи — к изделию':'From idea to product'}<ArrowUpRight size={24}/></p><span>{ru?'Разработка и производство':'Engineering and manufacturing'}</span></a></div></section>
  <div className="bm-parks"><p>{ru?'Больше, чем отдельный аттракцион.':'More than an individual ride.'}</p><a href={link('solutions')}>{ru?'Парки и тематические пространства':'Parks and themed spaces'}<ArrowUpRight size={28}/></a></div>
 </>;
}

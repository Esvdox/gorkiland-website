import {Plus,Minus,ArrowUpRight} from '@phosphor-icons/react';
import {services,serviceGroups} from './services';
export function ServicesDirectory({lang,active,setActive,onRequest}){
 const ru=lang==='ru';
 return <section id="service" className="section services-directory">
  <div className="section-heading"><p className="eyebrow">05 / {ru?'Услуги':'Services'}</p><h2>{ru?<>Услуги.<br/>Весь путь проекта.</>:<>Services.<br/>The full project journey.</>}</h2><p className="section-intro">{ru?<>От концепции парка до обслуживания техники.<br/>Подключаемся на нужном этапе.</>:<>From the park concept to equipment care.<br/>Join us at the stage you need.</>}</p></div>
  <div className="services-columns">{serviceGroups.map(group=><div className="service-group" key={group.id}><h3>{group[lang]}</h3>{services.filter(s=>s.group===group.id).map(s=>{const open=active===s.id;return <article className={open?'service-item expanded':'service-item'} id={`service-${s.id}`} key={s.id}><h4><button aria-expanded={open} aria-controls={`service-${s.id}-body`} onClick={()=>setActive(open?null:s.id)}>{s[lang]}{open?<Minus size={23}/>:<Plus size={23}/>}</button></h4><div className="service-body" id={`service-${s.id}-body`} hidden={!open}><p>{ru?s.descriptionRu:s.descriptionEn}</p><ul>{(ru?s.itemsRu:s.itemsEn).map(item=><li key={item}>{item}</li>)}</ul><button className="text-link" onClick={()=>onRequest(s[lang],s.group==='operation')}>{ru?'Обсудить задачу':'Discuss your requirements'}<ArrowUpRight size={18}/></button></div></article>;})}</div>)}</div>
  <button className="services-request" onClick={()=>onRequest()}>{ru?'Обсудить ваш проект':'Discuss your project'}<span><ArrowUpRight size={23}/></span></button>
 </section>;
}

import {partners} from './partners';
const asset=name=>`${import.meta.env.BASE_URL}assets/partners/${name}`;
export function Partners({lang}){
 const ru=lang==='ru';
 return <section className="bm-partners" id="partners" aria-labelledby="partners-heading"><div className="bm-partners-heading"><div><p className="eyebrow">{ru?'Наши партнёры':'Our partners'}</p><h2 id="partners-heading">{ru?'Вместе создаём больше.':'Creating more together.'}</h2></div><p>{ru?'Парки, профессиональные объединения и отраслевые площадки.':'Parks, professional associations and industry platforms.'}</p></div><ul className="bm-partners-grid">{partners.map(p=><li key={p.id}><div className={`bm-partner-mark ${p.dark?'is-dark':''} ${p.green?'is-green':''}`}><img className={p.framed?'has-source-frame':''} src={asset(p.image)} alt={p[lang]} loading="lazy" width="260" height="170"/></div><p>{p[lang]}</p></li>)}</ul><p className="bm-partners-note">{ru?'Состав партнёров — по опубликованным материалам ГоркиLand.':'Partner list follows the published ГоркиLand materials.'}</p></section>;
}

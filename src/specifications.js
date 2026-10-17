// Selected unambiguous catalogue fields. Execution variants are not a combined specification.
const labels={height:['Высота исполнения','Configuration height'],seats:['Посадочные места','Seats'],track:['Длина трассы','Track length'],site:['Площадка','Site'],roof:['Варианты крыши','Roof options'],clearance:['До токопроводящей сетки','Floor to contact grid'],angle:['Угол раскачивания','Swing angle'],cycle:['Цикл катания','Ride cycle']};
const fields={
 wheel:[['height',['35–150 м','35–150 m']]],
 bumper:[['roof',['Тент / профиль','Soft / rigid']],['clearance',['2,75 м','2.75 m']]],
 swing:[['height',['10 / 18,5 м','10 / 18.5 m']],['seats','12 / 16 / 18 / 24'],['angle','360°']],
 chain:[['height',['32 / 50 / 60 м','32 / 50 / 60 m']],['seats','20 / 30'],['site',['Ø 27 м','Ø 27 m']]],
 tower:[['height',['51 / 83 м','51 / 83 m']],['seats','50–100'],['site',['15 × 20 / 24 × 30 м','15 × 20 / 24 × 30 m']]],
 disk:[['track',['35 / 75 м','35 / 75 m']],['seats','16']],
 tilt:[['seats','16 / 24 / 32'],['site',['Ø 20 м','Ø 20 m']]],
 coaster:[['track',['100 / 192 / 302 / 400 м','100 / 192 / 302 / 400 m']],['height',['3,5 / 10 / 11 / 15 м','3.5 / 10 / 11 / 15 m']]],
 cosmonaut:[['height',['4 м','4 m']],['seats','16'],['site',['95 м²','95 m²']]],
 ship:[['height',['9 / 12 / 14 м','9 / 12 / 14 m']],['seats','16 / 24 / 40'],['angle','120°']],
 bench:[['height',['6,55 м','6.55 m']],['seats','18'],['cycle',['2,5–3 мин','2.5–3 min']]],
 topspin:[['height',['7 м','7 m']],['seats','12'],['cycle',['2,5–3 мин','2.5–3 min']]]
};
export function specs(id,lang){return (fields[id]||[]).map(([key,value])=>({label:labels[key][lang==='ru'?0:1],value:Array.isArray(value)?value[lang==='ru'?0:1]:value}));}

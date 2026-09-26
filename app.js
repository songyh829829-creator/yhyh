const map=(keyword,city='上饶')=>`https://uri.amap.com/search?keyword=${encodeURIComponent(keyword)}&city=${encodeURIComponent(city)}&src=jiangxi-trip&callnative=1`;
const route=[
 {day:'10/01',place:'景德镇',title:'四地出发，景德镇集合',info:'约 16:00 在景德镇北站集合，前往酒店入住。',travel:'新疆 / 陕西 / 广东 / 北京 → 景德镇',train:'各自车票信息待补充',stay:'栖澜庭院酒店',stayAddress:'景德镇市珠山区三宝路299号缘山庄H-2栋',city:'景德镇',links:[['景德镇北站',map('景德镇北站','景德镇')]]},
 {day:'10/02—03',place:'景德镇',title:'瓷都慢慢逛',info:'两天在景德镇游玩，晚上返回同一家酒店休息。',travel:'景德镇市内行程',train:'无高铁行程',stay:'栖澜庭院酒店',stayAddress:'景德镇市珠山区三宝路299号缘山庄H-2栋',city:'景德镇',links:[['景德镇',map('景德镇','景德镇')]]},
 {day:'10/04',place:'葛仙村',title:'坐高铁，进仙村',info:'景德镇北站乘 G5036 到上饶站，再转车前往葛仙村游玩。',travel:'景德镇北 11:46 → 上饶 12:41',train:'G5036 · 55 分钟',stay:'玥庭兰舍',stayAddress:'铅山县葛仙山镇项源村杨家排45',city:'上饶',links:[['上饶站',map('上饶站')],['葛仙村',map('葛仙村度假区')]]},
 {day:'10/05',place:'望仙谷',title:'从仙村到仙谷',info:'从葛仙村乘车前往望仙谷，抵达后游玩。',travel:'葛仙村 → 望仙谷 · 约 75 km',train:'驾车约 1.5 小时',stay:'一食住行民宿餐饮',stayAddress:'上饶市广信区',city:'上饶',links:[['望仙谷',map('望仙谷景区')]]},
 {day:'10/06',place:'婺源',title:'坐上高铁，去看篁岭',info:'从上饶站乘 G992 到婺源站，随后前往篁岭游玩。',travel:'上饶 10:48 → 婺源 11:11',train:'G992 · 23 分钟',stay:'云朵民宿',stayAddress:'上饶市婺源县鑫邦城12栋',city:'上饶',links:[['婺源站',map('婺源站')],['篁岭',map('婺源篁岭景区')]]},
 {day:'10/07',place:'返程',title:'带着快乐，各自回家',info:'北京、广东、陕西的伙伴从婺源返程；新疆的伙伴从婺源前往南昌，再乘飞机返程。',travel:'婺源 → 各地 / 婺源 → 南昌 → 新疆',train:'具体返程车次、航班待确认',stay:'—',stayAddress:'',city:'南昌',links:[['婺源站',map('婺源站','上饶')],['南昌机场',map('南昌昌北国际机场','南昌')]]}
];
const stays=[
 {date:'10/01—10/03 · 3晚',name:'栖澜庭院酒店',address:'景德镇市珠山区三宝路299号缘山庄H-2栋',city:'景德镇'},
 {date:'10/04 · 1晚',name:'玥庭兰舍（葛仙山风景区店）',address:'铅山县葛仙山镇项源村杨家排45',city:'上饶'},
 {date:'10/05 · 1晚',name:'一食住行民宿餐饮',address:'上饶市广信区',city:'上饶'},
 {date:'10/06 · 1晚',name:'云朵民宿',address:'上饶市婺源县鑫邦城12栋',city:'上饶'}
];
document.querySelector('#timeline').innerHTML=route.map((r,i)=>`<article class="trip-card"><div class="date-badge"><b>${r.day}</b><span>${r.place}</span></div><div class="trip-main"><h3>${r.title}</h3><p>${r.info}</p><div class="facts"><span>路线<br><b>${r.travel}</b></span><span>交通<br><b>${r.train}</b></span><span>住宿<br><b>${r.stay}</b></span></div><div class="links">${r.links.map(([n,u])=>`<a href="${u}" target="_blank" rel="noopener">高德 · ${n} ↗</a>`).join('')}${r.stayAddress?`<a class="stay-map" href="${map(r.stay+' '+r.stayAddress,r.city)}" target="_blank" rel="noopener">住宿 · ${r.stayAddress} ↗</a>`:''}</div></div><span class="num">0${i+1}</span></article>`).join('');
document.querySelector('#stays').innerHTML=stays.map((s,i)=>`<article class="stay-card"><div class="house">${['⌂','♨','⌂','☁'][i]}</div><small>${s.date}</small><h3>${s.name}</h3><p>${s.address}</p><div><a href="${map(s.name+' '+s.address,s.city)}" target="_blank" rel="noopener">高德地图 ↗</a></div></article>`).join('');
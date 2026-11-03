import fs from 'node:fs';
const rows=`今天|Hoy trabajo en casa y como con mi familia.|今天我在家办公，和家人一起吃饭。
今晚|Esta noche cenamos juntos y vemos una película.|今晚我们一起吃饭，再看一部电影。
明天|Mañana voy al mercado con mi hermana mayor.|明天我和姐姐一起去市场。
昨天|Ayer mi padre estuvo en casa toda la tarde.|昨天下午我父亲一直在家。
现在几点？|¿Qué hora es? Tengo una cita con el médico.|现在几点？我约了看医生。
九点整。|Son las nueve y los niños entran al colegio.|九点了，孩子们进学校。
九点十分。|Son las nueve y diez y preparo el desayuno.|九点十分了，我在准备早餐。
九点一刻。|Son las nueve y cuarto y salgo de casa.|九点一刻了，我出门。
九点半。|Son las nueve y media y empieza la clase.|九点半了，课程开始了。
差二十分十点。|Son las diez menos veinte y llega el autobús.|九点四十了，公交车来了。
差一刻十点。|Son las diez menos cuarto y termino mi café.|九点四十五了，我喝完咖啡。
上午十点。|Son las diez de la mañana y abro la tienda.|上午十点了，我开店营业。
下午五点。|Son las cinco de la tarde y vuelvo a casa.|下午五点了，我回家。
十七点三十分。|Son las diecisiete treinta y el tren sale pronto.|十七点三十分了，火车马上出发。
什么时候……？|¿Cuándo empieza la película que quieres ver esta noche?|你今晚想看的电影什么时候开始？
六十秒／两分钟后|El autobús llega dentro de dos minutos a esta parada.|公交车两分钟后到这个站。
一小时／一刻钟后|La clase empieza dentro de un cuarto de hora.|课程一刻钟后开始。
半小时后|Volvemos a casa dentro de media hora, después del paseo.|散步结束后，我们半小时后回家。
早|Me levanto temprano para caminar antes de ir al trabajo.|我早起，在上班前散步。
迟；晚|Hoy llego tarde porque hay mucho tráfico en la ciudad.|今天我迟到了，因为城里堵车。
很快；不久|Mi hermana llega pronto y vamos a comer juntas.|我的姐妹马上到，我们要一起吃饭。
晚些时候|Hablamos más tarde porque ahora estoy en una reunión.|我们晚些时候聊，因为我现在正在开会。
现在|Ahora estudio español mientras mi hermano prepara la cena.|我现在学西班牙语，我兄弟则准备晚餐。
一月|En enero llevo un abrigo cuando salgo por la mañana.|一月早上出门时，我穿大衣。
二月|En febrero celebro mi cumpleaños con unos amigos en casa.|二月我和几个朋友在家庆祝生日。
三月|En marzo las flores empiezan a aparecer en el jardín.|三月，花园里的花开始开放。
四月|En abril llevo un paraguas porque llueve con frecuencia.|四月我带伞，因为经常下雨。
五月|En mayo paseamos por el parque después de comer.|五月我们吃完饭后在公园散步。
六月|En junio terminan las clases y empiezan las vacaciones.|六月课程结束，假期开始。
七月|En julio vamos a la playa para nadar por la mañana.|七月我们早上去海滩游泳。
八月|En agosto mi familia pasa unos días junto al mar.|八月我家人在海边住几天。
九月|En septiembre los niños vuelven al colegio con sus amigos.|九月孩子们和朋友一起返校。
十月|En octubre las hojas cambian de color en el parque.|十月公园里的树叶变色了。
十一月|En noviembre anochece temprano y encendemos las luces de casa.|十一月天黑得早，我们点亮家里的灯。
十二月|En diciembre decoramos la casa para celebrar las fiestas juntos.|十二月我们装饰房子，一起过节。
一天；白天|Paso el día con mi familia y vuelvo por la noche.|我白天和家人在一起，晚上回来。
周末|El fin de semana visitamos a mis abuelos en el pueblo.|周末我们去村里看望祖父母。
一周|Esta semana tengo trabajo, pero el domingo estoy libre.|这周我有工作，不过星期天有空。
两周|Pasamos una quincena en la costa durante las vacaciones.|假期我们在海边住两周。
月|Este mes ahorro dinero para comprar una bicicleta nueva.|这个月我存钱买一辆新自行车。
年|Este año estudio español y practico un poco cada día.|今年我学习西班牙语，每天练习一点。
星期一|El lunes preparo la mochila antes de ir al colegio.|星期一我上学前整理书包。
星期二|El martes tengo clase de español después del trabajo.|星期二下班后我有西班牙语课。
星期三|El miércoles como con mi hermana en un restaurante pequeño.|星期三我和姐妹在一家小餐馆吃饭。
星期四|El jueves vamos al mercado para comprar fruta fresca.|星期四我们去市场买新鲜水果。
星期五|El viernes cenamos con amigos y escuchamos música en casa.|星期五我们和朋友吃晚饭，在家听音乐。
星期六|El sábado salimos temprano para pasar el día en el campo.|星期六我们早早出门，去乡间度过一天。
星期日|El domingo desayunamos despacio y luego paseamos por el parque.|星期天我们慢慢吃早餐，然后去公园散步。
十年|En esta década el barrio tiene más parques y escuelas.|这十年里，街区有了更多公园和学校。
每日的|Mi paseo diario empieza en casa y termina en el parque.|我每天的散步从家里出发，到公园结束。
每周的|En la reunión semanal hablamos del trabajo con nuestros compañeros.|我们在每周会议上和同事讨论工作。
每两周的|La visita quincenal a mis abuelos es siempre muy agradable.|每两周看望祖父母，总是很愉快。
每月的|Mi abono mensual me permite ir al trabajo en autobús.|我的月票让我可以坐公交车上班。
每年的|La fiesta anual del pueblo reúne a todas las familias.|村里的年度庆典让各家各户相聚。
每逢星期一|Los lunes salgo temprano porque tengo clase antes del trabajo.|每周一我很早出门，因为上班前有课。
每个星期天|Todos los domingos preparo el desayuno para toda mi familia.|每个星期天我给全家准备早餐。
上星期四|El jueves pasado fui al mercado con mi madre.|上星期四我和母亲去了市场。
下星期五|El próximo viernes voy a cenar con mis nuevos compañeros.|下星期五我要和新同事一起吃晚饭。
前一周／之后一周|La semana anterior al viaje preparo la ropa y los billetes.|旅行前一周我准备衣物和车票。
在二月|En febrero hace frío, pero salimos a caminar por la tarde.|二月天气冷，但我们下午仍出门散步。
在2019年|En 2019 mi familia vivía en una casa cerca del mar.|2019年，我家人住在海边的一座房子里。
在八十年代|En la década de los ochenta mi padre tenía una bicicleta roja.|八十年代，我父亲有一辆红色自行车。
春天|La primavera trae flores y días más largos a nuestro pueblo.|春天给我们的村庄带来鲜花和更长的白昼。
夏天|Durante el verano nadamos en el mar y comemos al aire libre.|夏天我们在海里游泳，在户外吃饭。
秋天|En el otoño las hojas cubren el camino hacia mi casa.|秋天树叶铺满通往我家的小路。
冬天|Durante el invierno llevamos ropa de abrigo y bebemos sopa caliente.|冬天我们穿保暖衣服，喝热汤。
在春天／冬天|En primavera abrimos las ventanas para escuchar a los pájaros.|春天我们打开窗户，听鸟儿歌唱。
天气怎么样？|¿Qué tiempo hace? Quiero salir a caminar con los niños.|天气怎么样？我想和孩子们出去散步。
今天／明天天气预报如何？|¿Cuál es el pronóstico del tiempo para mañana en la costa?|明天海边的天气预报如何？
天气热／冷吗？|¿Hace frío? Voy a llevar un abrigo para el paseo.|天气冷吗？我要带件大衣去散步。
会下雨吗？|¿Va a llover? El cielo está oscuro y hay viento.|要下雨吗？天空很暗，还刮着风。
天气真好！|¡Qué tiempo tan bueno! Podemos comer juntos en la terraza.|天气真好！我们可以一起在露台吃饭。
天气真糟糕！|¡Qué tiempo tan horrible! Es mejor quedarnos en casa hoy.|天气真糟糕！今天还是待在家里比较好。
晴天／刮风。|Hace sol y viento, así que llevo una chaqueta ligera.|天气晴朗又有风，所以我穿了件薄外套。
天气暖和／炎热。|Hace calorcito y los niños juegan tranquilos en el jardín.|天气暖和，孩子们在花园里安静地玩。
多云。|Está nublado, pero todavía podemos dar un paseo por el parque.|天气多云，不过我们仍可以去公园散步。
有薄雾／浓雾。|Hay niebla y el conductor avanza despacio por la carretera.|有雾，司机在公路上慢慢行驶。
天气很冷。|Hace mucho frío y nos ponemos guantes antes de salir.|天气很冷，我们出门前戴上手套。
下雨了。|Llueve y mi hermana espera el autobús bajo su paraguas.|下雨了，我姐妹撑着伞等公交车。
天气多雨。|Está lluvioso, así que llevo botas para caminar hasta el colegio.|天气多雨，所以我穿靴子步行去学校。
下雪了。|Nieva y los niños miran la calle desde la ventana.|下雪了，孩子们从窗户看着街道。
天气很潮湿。|Hay mucha humedad y la ropa tarda más en secarse.|天气很潮湿，衣服需要更长时间才能干。
有暴风雨。|Hay tormenta y cerramos las ventanas antes de cenar juntos.|有暴风雨，我们一起吃晚饭前关上窗户。
天气变化很大。|El tiempo está muy variable: ahora llueve y luego sale el sol.|天气变化很大：这会儿下雨，一会儿又出太阳。
好的；宜人的|El tiempo es bueno y paseamos por la playa después de comer.|天气宜人，我们饭后在海滩散步。
糟糕的|Hace un tiempo malo y decidimos pasar la tarde en casa.|天气糟糕，我们决定在家度过下午。
凉爽的|El aire está fresco y llevo una chaqueta para caminar.|空气凉爽，我穿着外套散步。
温和的|El clima es suave y podemos pasear incluso en invierno.|气候温和，即使在冬天我们也能散步。
温度|La temperatura baja por la noche y necesitamos una manta más.|夜里温度下降，我们需要再加一条毯子。
太阳|El sol entra por la ventana e ilumina toda la cocina.|阳光从窗户照进来，照亮整个厨房。
雨|La lluvia moja las calles y llena los charcos del parque.|雨水打湿街道，灌满公园里的水洼。
雪|La nieve cubre el jardín y los niños salen a jugar.|雪覆盖花园，孩子们出去玩。
冰雹|El granizo golpea el tejado y todos entramos en casa.|冰雹敲打屋顶，我们都进了屋。
风|El viento mueve las hojas y levanta mi sombrero del suelo.|风吹动树叶，把我的帽子从地上吹起来。
大风；狂风|El vendaval mueve los árboles y nos quedamos dentro de casa.|狂风吹动树木，我们留在屋里。
薄雾|La neblina cubre el río, pero vemos los árboles cercanos.|薄雾笼罩河流，不过我们能看见近处的树。
浓雾|La niebla es espesa y apenas vemos el camino al pueblo.|雾很浓，我们几乎看不见通往村庄的路。
雷声|El trueno suena fuerte y mi perro se esconde bajo la mesa.|雷声很响，我的狗躲到桌子下面。
闪电|El relámpago ilumina el cielo mientras miramos desde la ventana.|我们从窗户望出去时，闪电照亮天空。
雷暴|La tormenta llega por la tarde y volvemos pronto a casa.|雷暴在下午到来，我们早早回家。`.split('\n').map(x=>x.split('|'));
if(rows.length!==100)throw Error(rows.length);
const source=JSON.parse(fs.readFileSync('data/collins-spanish-source.json','utf8'));
const entries=source.entries.slice(200,300).map((r,i)=>({id:r.id,w:r.word,uk:'',us:'',senses:[{pos:r.kind==='phrase'?'短语':'词汇',zh:rows[i][0],en:r.en}],ex:[{en:rows[i][1],zh:rows[i][2]}],col:[],fam:[],syn:[],ant:[],tip:'',cefr:'入门',topic:'essentials',exampleLevel:'A1+',note:`Collins Spanish 3000 · 原书第 ${r.page} 页 · 第 ${i+201} 条；自编例句 A1向A2过渡，时间词条按需引入过去及将来表达`,m:0}));
fs.writeFileSync('data/spanish-batches/003.entries.json',JSON.stringify(entries,null,2));
fs.writeFileSync('data/spanish-batches/003.jobs.json',JSON.stringify(entries.map(e=>({id:e.id,word:e.w,example:e.ex[0].en,zh:e.ex[0].zh})),null,2));

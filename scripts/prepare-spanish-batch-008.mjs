import fs from 'node:fs';
const rows=`延长线|El alargador permite colocar la lámpara cerca del sillón aunque la toma esté lejos.|插座虽远，延长线仍让台灯能放在扶手椅旁。
保险丝盒|La electricista revisa la caja de fusibles mientras nosotros esperamos en el pasillo de entrada.|电工检查保险丝盒时，我们在门厅走廊等候。
灯泡|La bombilla nueva ilumina mejor la mesa donde solemos leer después de cenar.|新灯泡更好地照亮了我们晚饭后读书的桌子。
电表|El contador está dentro de un armario pequeño que se encuentra junto a la puerta principal.|电表在正门旁边的一个小柜子里。
暖气片|El radiador del dormitorio mantiene una temperatura agradable durante las noches más frías del invierno.|卧室暖气片在冬天最冷的夜晚保持宜人的温度。
防盗报警器|La alarma de seguridad está instalada cerca de la entrada de la casa de mis abuelos.|祖父母家的入口附近安装了防盗报警器。
烟雾报警器|La alarma contra incendios está en el techo del pasillo que conduce a los dormitorios.|通往卧室的走廊天花板上装着烟雾报警器。
恒温器|Consulto el termostato para saber qué temperatura hay en la habitación donde juegan los niños.|我查看恒温器，了解孩子们玩耍的房间温度。
燃木炉|La estufa de leña está en un rincón del salón, lejos de las cortinas y los muebles.|燃木炉在客厅一角，远离窗帘和家具。
屋顶|Desde la colina podemos ver el tejado rojo de la casa donde pasamos las vacaciones.|从山坡上能看见我们度假住房的红屋顶。
烟囱|La chimenea sobresale del tejado y se distingue entre los árboles que rodean la casa.|烟囱伸出屋顶，在房屋周围的树木间清晰可见。
天线|La antena está colocada en la parte más alta del edificio que vemos desde la ventana.|从窗户望去，那栋楼的最高处装着天线。
檐沟|El canalón recoge el agua de lluvia que baja por el tejado durante la tormenta.|暴风雨时，檐沟收集从屋顶流下的雨水。
山墙|El hastial tiene forma triangular y una ventana pequeña que ilumina la parte superior de la casa.|山墙呈三角形，一扇小窗照亮房屋上部。
落水管|El bajante conduce el agua desde el canalón hasta la zona situada junto al jardín.|落水管把水从檐沟引到花园旁的区域。
窗户|La ventana del salón da a una calle tranquila por la que apenas pasan coches.|客厅窗户朝向一条很少有汽车经过的安静街道。
百叶窗板|Cerramos la contraventana de madera cuando el viento empieza a golpear las ramas del jardín.|风开始吹打花园的树枝时，我们关上木制窗板。
院门|La puerta del jardín está abierta porque esperamos la llegada de unos amigos esta tarde.|花园院门开着，因为今天下午有朋友要来。
车道入口|La entrada tiene espacio para dos coches y comunica directamente con el garaje de la casa.|车道入口容得下两辆汽车，直接连着房屋车库。
正门|La puerta principal está al final de un camino rodeado de plantas que cuidamos en primavera.|正门在一条两旁种着春季养护植物的小路尽头。
车库|Guardamos las bicicletas en el garaje para dejar libre el pequeño pasillo que lleva al jardín.|我们把自行车放进车库，空出通往花园的小走廊。
防盗门|La puerta blindada tiene una cerradura nueva que el técnico nos explica cómo utilizar.|防盗门换了一把新锁，技术人员向我们说明用法。
走廊|El pasillo conecta el salón con los dormitorios y recibe luz de una ventana del fondo.|走廊连接客厅和卧室，尽头的窗户带来光线。
门厅|En el vestíbulo de entrada hay un banco donde podemos sentarnos para quitarnos los zapatos.|门厅里有一张长凳，可以坐着脱鞋。
楼梯平台|El distribuidor de la segunda planta permite acceder a dos dormitorios y un cuarto de baño.|二楼的楼梯平台通向两间卧室和一间浴室。
楼梯井|El hueco de la escalera recibe luz desde una claraboya situada en la parte superior del edificio.|楼梯井的光线来自楼顶的一扇天窗。
电梯|Subimos las maletas en el ascensor porque el apartamento está en la sexta planta del edificio.|公寓在六楼，所以我们乘电梯搬运行李。
门镜；猫眼|Miro por la mirilla para ver quién ha llamado antes de abrir la puerta de casa.|开门前，我透过猫眼看是谁按了门铃。
门垫|Dejamos las botas sobre el felpudo para no llevar el barro del jardín al interior de casa.|我们把靴子留在门垫上，避免把花园泥土带进屋。
钥匙|La llave del apartamento está en el bolsillo de la chaqueta que colgué junto a la entrada.|公寓钥匙在我挂在入口旁的夹克口袋里。
用对讲机开门让人进来|Mi hermana me abre por el interfono cuando llego al edificio con las bolsas de la compra.|我拎着购物袋来到楼下时，姐妹用对讲机给我开门。
擦鞋底|Nos limpiamos los pies antes de entrar porque hemos estado caminando por un sendero de tierra.|我们刚走过土路，所以进门前先擦鞋底。
挂起外套|Cuelgo la chaqueta junto a la puerta para encontrarla fácilmente cuando vuelva a salir.|我把外套挂在门旁，方便下次出门时拿取。
门铃|El timbre suena justo cuando terminamos de preparar la mesa para la cena con nuestros amigos.|我们刚摆好和朋友吃晚饭的餐桌，门铃就响了。
对讲机|Desde el interfono puedo hablar con la persona que está esperando en la entrada del edificio.|我能通过对讲机与楼宇入口等候的人交谈。
信箱|Al volver del trabajo reviso el buzón por si ha llegado la carta que estamos esperando.|下班回家时，我查看信箱，看看等候的信是否寄到。
满铺地毯|La moqueta cubre todo el suelo del dormitorio y hace que los pasos apenas se oigan.|地毯铺满卧室地面，几乎听不见脚步声。
地板条|Una tabla del suelo se mueve un poco cuando pasamos cerca de la ventana del salón.|我们经过客厅窗边时，一块地板条会轻微移动。
成套沙发|El tresillo está colocado alrededor de la mesa de centro para facilitar la conversación entre los invitados.|成套沙发围着茶几摆放，方便客人交谈。
沙发床|Abrimos el sofá cama para preparar el salón donde van a dormir nuestros amigos esta noche.|今晚朋友睡客厅，我们打开沙发床做好准备。
台灯|La lámpara de mesa tiene una pantalla clara que ilumina el rincón donde hacemos los deberes.|台灯浅色的灯罩照亮了我们做作业的角落。
家庭娱乐系统|El sistema de entretenimiento en casa reúne la televisión y los altavoces que usamos para ver películas.|家庭娱乐系统包括我们看电影时使用的电视和音箱。
有线／卫星电视|Mis abuelos tienen televisión por cable para poder ver sus programas favoritos durante la tarde.|祖父母装了有线电视，下午可以看喜欢的节目。
智能电视|La televisión inteligente nos permite elegir una película sin levantarnos del sofá donde estamos sentados.|智能电视让我们坐在沙发上就能选电影。
点播电视|Con la televisión bajo demanda vemos los programas cuando tenemos tiempo, no a una hora fija.|用点播电视，我们有空时再看节目，不必等固定时间。
放松|Después de trabajar nos gusta relajarnos en el salón mientras escuchamos música y hablamos del día.|下班后，我们喜欢在客厅放松，听音乐、聊一天的事。
坐下|Invito a los vecinos a sentarse mientras termino de preparar el café que vamos a tomar.|我请邻居们先坐下，自己继续准备要喝的咖啡。
看电视|No solemos ver la tele durante la cena porque preferimos conversar con toda la familia.|吃晚饭时我们通常不看电视，更愿意和全家交谈。
书柜|La librería ocupa una pared del salón y contiene los libros que más nos gusta consultar.|书柜占了客厅一整面墙，里面是我们最爱翻阅的书。
窗帘|Abrimos las cortinas por la mañana para aprovechar la luz que entra desde el jardín.|早上我们拉开窗帘，让花园方向的光线照进来。
陈列柜|En la vitrina guardamos los vasos de cristal que usamos cuando vienen invitados a comer.|陈列柜里放着客人来吃饭时使用的玻璃杯。
影碟播放机|El reproductor de DVD está conectado a la televisión y todavía sirve para ver nuestras películas antiguas.|DVD播放机连着电视，还能用来看我们的老电影。
收音机|La radio suena en la cocina mientras preparamos el desayuno y organizamos las tareas del día.|我们准备早餐、安排一天的事情时，厨房里响着收音机。
遥控器|Buscamos el mando a distancia entre los cojines del sofá antes de encender la televisión.|开电视前，我们在沙发靠垫之间找遥控器。
餐边柜|El aparador tiene varios cajones donde guardamos manteles y cubiertos para las comidas de los domingos.|餐边柜有几个抽屉，放着周日聚餐用的桌布和餐具。
电视柜|La mesa de la tele tiene un estante inferior que utilizamos para colocar los discos y los cables.|电视柜下层的架子放着光盘和电线。
百叶窗|Bajamos la persiana para evitar que el sol de la tarde nos moleste mientras leemos.|我们放下百叶窗，避免下午阳光影响阅读。
壁灯|El aplique de pared ilumina la zona del sillón sin ocupar espacio en la mesa pequeña del salón.|壁灯照亮扶手椅区域，又不占客厅小桌子的空间。
电视|La tele está frente al sofá, a una distancia que nos resulta cómoda para ver películas.|电视正对沙发，看电影的距离很舒服。
壁炉|Nos sentamos cerca de la chimenea durante las tardes frías y contamos historias de otros inviernos.|寒冷的下午，我们坐在壁炉附近，讲以前冬天的故事。
茶几|Sobre la mesa de centro dejamos unas revistas para los amigos que suelen venir a visitarnos.|茶几上放着几本杂志，供常来做客的朋友翻阅。
沙发|El sofá es lo bastante amplio para que podamos sentarnos juntos después de cenar en familia.|沙发够宽敞，全家晚饭后能一起坐下来。
装饰画|El cuadro que colgamos sobre el sofá representa el pueblo donde nació mi abuelo.|沙发上方的画描绘了祖父出生的村庄。
装饰摆件|Ese adorno de cerámica lo compramos durante un viaje y ahora está junto a la ventana.|那件陶瓷摆件是旅行时买的，现在放在窗边。
置物架|La estantería del salón combina libros, plantas pequeñas y algunas fotografías de nuestros últimos viajes.|客厅置物架上摆着书、小盆栽和最近旅行的照片。
扶手椅|Mi padre prefiere leer en el sillón que está junto a la lámpara de pie del salón.|父亲更喜欢坐在客厅落地灯旁的扶手椅里看书。
脚凳|Coloco el reposapiés delante del sillón para descansar las piernas después de un paseo largo.|长时间散步后，我把脚凳放到扶手椅前，让双腿休息。
地毯|La alfombra del salón tiene colores suaves que combinan con las cortinas y los cojines del sofá.|客厅地毯色调柔和，与窗帘和沙发靠垫相配。
靠垫|El cojín más grande está en el rincón del sofá donde suele sentarse mi hermana para leer.|最大的靠垫放在沙发一角，姐妹常在那里看书。
电炉灶|La cocina eléctrica tiene cuatro zonas donde podemos preparar varios platos para la comida familiar.|电炉灶有四个加热区，可以同时做几道家庭聚餐的菜。
燃气灶|La cocina de gas está junto a la encimera donde cortamos las verduras antes de preparar la cena.|燃气灶旁是我们做晚饭前切菜的台面。
烤面包机|Pongo dos rebanadas en el tostador mientras mi hermano sirve el zumo para el desayuno.|兄弟倒早餐果汁时，我把两片面包放进烤面包机。
烧水壶|El hervidor de agua está sobre la encimera, cerca de las tazas que utilizamos para preparar el té.|烧水壶在台面上，旁边是泡茶用的杯子。
做饭|Me gusta cocinar con mis amigos porque cada uno aporta ideas y aprendemos recetas diferentes.|我喜欢和朋友一起做饭，大家交流想法，也能学到不同菜谱。
油煎|Antes de freír las verduras preparamos una fuente donde vamos a servirlas con el arroz.|煎蔬菜前，我们准备好盘子，随后和米饭一起盛上。
煸炒|Vamos a sofreír la cebolla mientras mi padre corta las otras verduras que necesitamos para la sopa.|我们煸炒洋葱，父亲则切汤里需要的其他蔬菜。
煮沸|El agua empieza a hervir y preparo la pasta que vamos a comer con salsa de tomate.|水开始沸腾，我准备把意面和番茄酱一起上桌。
烤制|Los domingos solemos asar verduras para acompañar el plato principal que compartimos con nuestros abuelos.|周日我们常烤蔬菜，搭配和祖父母共享的主菜。
洗碗|Después de cenar nos turnamos para lavar los platos y dejar la cocina ordenada para el día siguiente.|晚饭后，我们轮流洗碗，收拾好厨房准备第二天使用。
清洁厨房台面|Antes de empezar a cocinar limpiamos la encimera y colocamos los ingredientes que vamos a necesitar.|做饭前，我们擦干净台面，摆好需要的食材。
收好买来的东西|Al llegar del mercado guardamos la compra y revisamos lo que falta para las comidas de la semana.|从市场回来后，我们收好东西，检查这周做饭还缺什么。
铝箔|El papel de aluminio está en el cajón donde guardamos los materiales que usamos para conservar alimentos.|铝箔在抽屉里，和保存食物用的材料放在一起。
面包盒|La panera está junto al tostador y contiene el pan que compramos ayer en la tienda del barrio.|面包盒放在烤面包机旁，里面是昨天在街区商店买的面包。
保鲜膜|Cubrimos el recipiente con film transparente antes de guardar la ensalada que ha sobrado de la cena.|我们用保鲜膜盖好容器，再把晚饭剩下的沙拉收起来。
水果盘|En la frutera hay manzanas y plátanos que los niños pueden coger cuando tienen hambre entre comidas.|水果盘里有苹果和香蕉，孩子们在两餐间饿了可以拿。
厨房纸|El papel de cocina está cerca del fregadero para tenerlo a mano cuando se derrama algo.|厨房纸在水槽附近，洒了东西时方便拿取。
脚踏垃圾桶|El cubo de pedal está debajo de la encimera y podemos abrirlo sin tocar la tapa con las manos.|脚踏垃圾桶在台面下，不用手碰盖子就能打开。
烤盘|Dejo la bandeja del horno sobre una superficie resistente antes de servir las verduras que acabamos de preparar.|上蔬菜前，我把烤盘放在耐热台面上。
炖锅|La cazuela que usamos para el guiso es lo bastante grande para preparar comida para toda la familia.|我们炖菜用的锅够大，可以做出全家人的饭菜。
砧板|La tabla de cortar está junto a las verduras que vamos a utilizar para preparar la cena.|砧板旁放着晚饭要用的蔬菜。
咖啡壶|La cafetera empieza a sonar mientras colocamos las tazas en la mesa del desayuno de los domingos.|我们摆周日早餐的杯子时，咖啡壶开始发出声音。
滤水篮|Vertemos la pasta en el escurridor antes de mezclarla con la salsa que preparó mi hermana.|我们先用滤水篮沥干意面，再拌入姐妹做的酱汁。
开瓶器|El sacacorchos está en un cajón pequeño, junto a los utensilios que usamos cuando recibimos invitados.|开瓶器放在小抽屉里，旁边是接待客人时使用的工具。
炸锅|La freidora está guardada en un armario porque solo la utilizamos en algunas ocasiones especiales.|炸锅收在柜子里，我们只在某些特别场合使用。
料理机|El robot de cocina nos ayuda a preparar la mezcla mientras organizamos los otros ingredientes sobre la mesa.|料理机帮我们搅拌时，我们在桌上整理其余食材。
平底煎锅|La sartén que elegimos tiene espacio suficiente para preparar las tortillas de todos los que vienen a cenar.|选好的煎锅够大，能为来吃晚饭的人做鸡蛋饼。
刨丝器|Con el rallador preparamos un poco de queso para acompañar la pasta que acabamos de servir.|我们用刨丝器刨些奶酪，搭配刚上桌的意面。
手持搅拌棒|Usamos la batidora de mano para conseguir una crema suave con las verduras que hemos cocido.|我们用手持搅拌棒把煮好的蔬菜打成细腻浓汤。
手持打蛋器|La batidora manual está junto al cuenco donde mezclamos los ingredientes del pastel de cumpleaños.|手持打蛋器旁是我们搅拌生日蛋糕材料的碗。
菜刀|El cuchillo de cocina está sobre la tabla, al lado de los tomates que vamos a cortar.|菜刀放在砧板上，旁边是准备切的西红柿。`.split('\n').map(x=>x.split('|'));
if(rows.length!==100)throw Error(rows.length);
const src=JSON.parse(fs.readFileSync('data/collins-spanish-source.json'));const entries=src.entries.slice(700,800).map((r,i)=>({id:r.id,w:r.word,uk:'',us:'',senses:[{pos:r.kind==='phrase'?'短语':'词汇',zh:rows[i][0],en:r.en.replace(/^vocabulary |^outside |^general |^lounge |^miscellaneous items |^kitchen utensils /,'')}],ex:[{en:rows[i][1],zh:rows[i][2]}],col:[],fam:[],syn:[],ant:[],tip:'',cefr:'入门',topic:'chapter-'+r.chapter,exampleLevel:'B1',note:`Collins Spanish 3000 · 原书第 ${r.page} 页 · 第 ${i+701} 条；自编例句 B1`,m:0}));fs.writeFileSync('data/spanish-batches/008.entries.json',JSON.stringify(entries,null,2));

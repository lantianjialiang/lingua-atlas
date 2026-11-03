import fs from 'node:fs';
const rows=`汤勺|Sirvo la sopa con el cucharón mientras los demás colocan los platos sobre la mesa.|我用汤勺盛汤，其他人把盘子摆上桌。
量杯|La jarra medidora nos ayuda a preparar la cantidad de leche que indica la receta del pastel.|量杯帮我们量出蛋糕配方所需的牛奶。
搅拌碗|El recipiente para mezclar es bastante grande para reunir todos los ingredientes que hemos preparado.|搅拌碗足够大，可以装下准备好的全部食材。
西班牙海鲜饭锅|La paellera está en el centro de la mesa y todos esperan para probar el arroz.|海鲜饭锅放在桌子中间，大家等着品尝米饭。
削皮器|Con el pelador preparo las zanahorias que mi hermana va a añadir a la ensalada.|我用削皮器处理胡萝卜，姐妹准备把它加入沙拉。
高压锅|La olla exprés está guardada en el armario donde colocamos los utensilios que ocupan más espacio.|高压锅收在柜子里，那里放着较占空间的厨具。
擀面杖|El rodillo de cocina está junto a la masa que hemos preparado para hacer galletas.|擀面杖放在我们准备做饼干的面团旁。
小煮锅|En el cazo calentamos la salsa que vamos a servir con las verduras de la cena.|我们在小煮锅里加热晚饭蔬菜要搭配的酱汁。
筛子|Paso la harina por el tamiz antes de añadirla al recipiente donde están los otros ingredientes.|我先筛面粉，再把它加入装着其他食材的碗里。
锅铲|La espátula de madera está junto a la sartén que utilizamos para preparar la tortilla.|木锅铲放在我们做鸡蛋饼的煎锅旁。
开罐器|Buscamos el abrelatas en el cajón donde solemos guardar los utensilios pequeños de la cocina.|我们在平时存放厨房小工具的抽屉里找开罐器。
打蛋器|El batidor de varillas queda dentro del cuenco donde acabamos de mezclar los huevos con el azúcar.|打蛋器留在我们刚搅拌鸡蛋和糖的碗里。
炒锅|Preparamos las verduras en el wok mientras el arroz termina de cocinarse en otra olla.|米饭还在另一口锅里煮，我们同时用炒锅做蔬菜。
木勺|Remuevo la mezcla con una cuchara de madera para repartir bien los ingredientes dentro del recipiente.|我用木勺搅拌，让容器里的食材混合均匀。
厨房水槽|Dejamos los platos junto al fregadero antes de recoger los vasos que quedan en la mesa.|我们把盘子放在水槽旁，再去收桌上剩下的杯子。
烤箱|El horno tiene una puerta de cristal que permite ver cómo va cambiando de color el pastel.|烤箱有一扇玻璃门，可以看蛋糕慢慢变色。
炉灶面板|La placa está junto a la ventana que abrimos cuando necesitamos ventilar después de cocinar.|炉灶面板旁是窗户，做饭后需要通风时我们会打开它。
微波炉|El horno microondas ocupa un estante que queda a una altura cómoda para toda la familia.|微波炉放在一个全家都容易够到的架子上。
射灯|El foco ilumina la zona de la encimera donde solemos cortar los ingredientes antes de cocinar.|射灯照亮台面上我们做饭前常切食材的区域。
冷藏冷冻组合冰箱|El frigorífico combi tiene un congelador inferior donde guardamos la comida que no vamos a usar pronto.|组合冰箱下部的冷冻室存放近期不用的食物。
橱柜|El armario de la cocina tiene varios estantes donde organizamos los platos según su tamaño.|厨房橱柜有几层架子，我们按大小摆放盘子。
水龙头|El grifo del fregadero está debajo de una ventana desde la que podemos ver el jardín.|水槽龙头上方是一扇能看到花园的窗户。
沥水台|Colocamos los platos limpios en el escurridor para dejar libre la zona de trabajo de la cocina.|我们把洗好的盘子放到沥水台，空出厨房操作区域。
抽屉|En el primer cajón guardamos los cubiertos que usamos todos los días para comer en familia.|第一个抽屉放着全家每天吃饭用的餐具。
厨房台面|La encimera es amplia y permite que dos personas preparen la comida al mismo tiempo.|厨房台面宽敞，可容两个人同时备餐。
瓷砖|Los azulejos de la cocina tienen un diseño sencillo que combina con las puertas de los armarios.|厨房瓷砖图案简洁，与橱柜门相配。
餐桌|La mesa de comedor se puede ampliar cuando vienen nuestros amigos y necesitamos más sitio para sentarnos.|朋友来时，餐桌可以展开，让更多人坐下。
餐垫|Ponemos un mantelito individual delante de cada silla antes de colocar los platos que vamos a utilizar.|我们先在每把椅子前放餐垫，再摆盘子。
杯垫|Dejo el vaso sobre un posavasos para evitar que la humedad marque la mesa de madera del salón.|我把杯子放在杯垫上，避免水汽在客厅木桌上留下印迹。
餐具瓷器|La vajilla que usamos los domingos tiene un dibujo azul que mi abuela eligió hace muchos años.|周日用的餐具上有祖母多年前选的蓝色图案。
刀叉勺餐具|Colocamos los cubiertos junto a los platos mientras la comida termina de prepararse en la cocina.|饭菜还在厨房做，我们把刀叉勺放在盘子旁。
玻璃器皿|La cristalería ocupa la parte superior del aparador y la sacamos cuando celebramos comidas especiales.|玻璃器皿放在餐边柜上部，特别聚餐时才拿出来。
摆餐桌|Los niños nos ayudan a poner la mesa mientras nosotros terminamos de preparar la ensalada de la cena.|孩子们帮忙摆餐桌，我们继续准备晚饭沙拉。
吃晚饭|Preferimos cenar un poco antes cuando al día siguiente tenemos que levantarnos para viajar temprano.|如果第二天得早起出行，我们更愿意早点吃晚饭。
收拾餐桌|Después de recoger la mesa nos sentamos un rato en el salón para seguir hablando con nuestros invitados.|收拾餐桌后，我们到客厅坐一会儿，继续和客人交谈。
调味汁壶|La salsera está junto al plato principal para que cada persona añada la cantidad de salsa que prefiera.|调味汁壶放在主菜旁，每个人可以按喜好加酱汁。
餐巾|La servilleta de tela está doblada sobre el plato que hemos colocado delante de cada invitado.|每位客人面前的盘子上都放着折好的布餐巾。
胡椒研磨器|Pasamos el molinillo de pimienta a quien quiere dar un poco más de sabor a su plato.|有人想给菜多添点味道，我们就把胡椒研磨器递给他。
沙拉碗|La ensaladera contiene las verduras que hemos lavado y cortado mientras se preparaba el plato principal.|沙拉碗里装着我们在做主菜时洗好、切好的蔬菜。
盐研磨器|El molinillo de sal está junto al de pimienta, en el centro de la mesa donde vamos a cenar.|盐研磨器和胡椒研磨器一起放在晚餐桌中央。
大菜盘|Colocamos las verduras en la fuente de servir antes de llevarlas a la mesa donde esperan los invitados.|我们把蔬菜装进大菜盘，再端到客人等候的餐桌上。
碗|El cuenco de cerámica es perfecto para la sopa que solemos preparar durante las noches de invierno.|这只陶碗很适合盛我们冬夜常做的汤。
香槟杯|Las copas de cava están sobre la mesa que hemos preparado para celebrar el aniversario de mis padres.|为庆祝父母结婚纪念日，我们准备的餐桌上摆着香槟杯。
茶杯和杯碟|La taza y el platillo forman parte de un juego que utilizamos cuando vienen nuestros abuelos a merendar.|茶杯和杯碟是一套餐具的一部分，祖父母来吃点心时会用。
刀和叉|El cuchillo y el tenedor están colocados a los lados del plato que corresponde a cada comensal.|每位用餐者的盘子两侧都摆着刀和叉。
盘子|Este plato es más hondo que los demás y nos sirve para las comidas que llevan bastante salsa.|这个盘子比别的更深，适合盛酱汁多的菜。
汤匙|Con la cuchara pruebo un poco de sopa antes de llevar el resto a la mesa del comedor.|我用汤匙尝一点汤，再把剩下的端去餐厅。
茶匙|Dejamos una cucharilla junto a cada taza para que los invitados puedan remover el té o el café.|每个杯子旁都放一把茶匙，方便客人搅拌茶或咖啡。
水杯|El vaso está lleno de agua fresca que hemos traído de la cocina para acompañar la comida.|杯里盛着我们从厨房拿来的凉水，用来佐餐。
葡萄酒杯|La copa de vino refleja la luz de la ventana que da al pequeño jardín de la casa.|葡萄酒杯映着朝向屋外小花园的窗户透来的光。
单人床|La cama individual deja espacio suficiente para colocar un escritorio junto a la ventana del dormitorio.|放了单人床后，卧室窗边仍有足够空间放书桌。
双人床|La cama de matrimonio está situada frente al armario donde guardamos la ropa que usamos a diario.|双人床对着衣柜，柜里放着日常衣物。
抽拉床|La cama nido permite alojar a dos personas sin ocupar demasiado espacio durante el resto del día.|抽拉床能住两个人，白天收起来又不占太多空间。
上下铺|Las literas están en la habitación que comparten los niños cuando pasamos las vacaciones en el pueblo.|孩子们回村里度假时共用的房间里放着上下铺。
床上用品|La ropa de cama limpia está guardada en el estante que hay sobre los cajones del armario.|干净的床上用品放在衣柜抽屉上方的架子上。
主卧室|El dormitorio principal tiene una ventana amplia que recibe luz durante casi toda la mañana.|主卧有一扇大窗，上午大部分时间都采光充足。
客房|Preparamos el cuarto de invitados porque mis primos van a quedarse con nosotros durante el fin de semana.|表亲们周末要来住，所以我们准备好客房。
套内浴室|El baño integrado comunica directamente con el dormitorio y tiene una ducha junto a la ventana.|套内浴室直接连着卧室，窗边有淋浴。
婴儿房|La habitación del bebé tiene colores suaves y un sillón donde nos sentamos para leer cuentos.|婴儿房色调柔和，有一把我们坐着读故事的扶手椅。
上床睡觉|Antes de irnos a la cama solemos preparar la ropa que vamos a necesitar a la mañana siguiente.|睡前我们通常准备好第二天早上要穿的衣服。
睡觉|Intento dormir un poco más durante el fin de semana para descansar después de una semana de trabajo.|一周工作之后，我想在周末多睡一会儿休息。
醒来|Al despertarme miro por la ventana para ver qué tiempo hace antes de decidir cómo ir al trabajo.|醒来后，我先看窗外天气，再决定怎么去上班。
整理床铺|Hacemos la cama después de ventilar el dormitorio y antes de empezar las tareas que tenemos previstas.|通风后，我们整理好床铺，再开始计划中的事情。
换床单|Hoy vamos a cambiar las sábanas del cuarto donde durmieron nuestros amigos durante el fin de semana.|今天我们要给周末朋友住过的房间换床单。
毯子|La manta que guardamos al pie de la cama nos resulta útil cuando refresca durante la madrugada.|床尾收着的毯子在凌晨转凉时很有用。
收音机闹钟|La radio despertador se enciende a la hora que elegimos para empezar la mañana escuchando las noticias.|收音机闹钟到设定时间就打开，让我们听着新闻开始新一天。
衣架|Cada percha tiene espacio suficiente para colgar una chaqueta sin que quede demasiado pegada a las demás.|每个衣架都能挂一件外套，不至于和其他衣服挤在一起。
梳妆台|El tocador está junto a la ventana y tiene un espejo que refleja la luz de la mañana.|梳妆台在窗边，镜子映着晨光。
脏衣篮|La cesta de la ropa sucia está detrás de la puerta para no ocupar espacio en el paso.|脏衣篮放在门后，不占通行空间。
纱帘|Los visillos dejan entrar la luz, pero hacen más difícil ver el interior de la habitación desde fuera.|纱帘让光透进来，又让外面不容易看清室内。
棉被|El edredón que usamos en invierno es más grueso que el que guardamos para los meses de verano.|冬天用的被子比夏天备着的那床厚。
床单|Las sábanas que tendimos esta mañana ya están secas y podemos doblarlas antes de guardarlas en el armario.|早上晾的床单干了，我们可以先折好再放进衣柜。
卧室镜子|El espejo del dormitorio está colocado junto al armario para comprobar cómo nos queda la ropa.|卧室镜子放在衣柜旁，方便看衣服穿得是否合适。
五斗柜|La cómoda tiene varios cajones donde organizamos la ropa pequeña para encontrarla sin perder demasiado tiempo.|五斗柜的几个抽屉分放着小件衣物，找起来省时间。
床|La cama está cerca de una ventana desde la que se ven los árboles del jardín de los vecinos.|床靠近窗户，从那里能看见邻居花园的树。
衣柜|El armario del dormitorio tiene puertas corredizas que permiten abrirlo aunque haya poco espacio delante.|卧室衣柜用滑动门，即使前面空间小也能打开。
羽绒被；被芯|El edredón nórdico lleva una funda que podemos quitar para lavarla cuando cambiamos la ropa de cama.|羽绒被套着被套，换床上用品时可以拆下来洗。
窗帘|Cerramos las cortinas del dormitorio para evitar que la luz de la calle nos moleste al dormir.|我们拉上卧室窗帘，避免街灯影响睡眠。
扶手椅|El sillón del dormitorio está junto a una mesa pequeña donde dejamos el libro que estamos leyendo.|卧室扶手椅旁有一张小桌，放着正在读的书。
地毯|La alfombra cubre la parte del suelo que queda al lado de la cama y resulta agradable al levantarse.|地毯铺在床边地面，起床踩上去很舒服。
床头灯|La lámpara de mesilla de noche permite leer un rato sin encender la luz principal del dormitorio.|床头灯让我们不用开卧室主灯也能读一会儿书。
枕头|Esta almohada es más blanda que la otra que solemos guardar para las personas que vienen de visita.|这个枕头比我们平时留给客人用的那个更软。
床垫|Probamos el colchón antes de decidir si es el adecuado para la cama que acabamos de comprar.|我们先试床垫，再决定它是否适合刚买的床。
床头柜|En la mesilla de noche dejo el teléfono y el vaso de agua que preparo antes de acostarme.|睡前，我把手机和备好的水杯放在床头柜上。
浴帘|La cortina de baño está extendida para proteger el resto del cuarto de las salpicaduras de la ducha.|浴帘展开着，挡住淋浴时飞溅到其他地方的水。
马桶座圈|El asiento de retrete es blanco y combina con los otros elementos que hay en el cuarto de baño.|白色马桶座圈与浴室里的其他设施相配。
马桶水箱|La cisterna está detrás del retrete y tiene un botón situado en la parte superior de la tapa.|水箱位于马桶后面，盖子上方有一个按钮。
排水口|El sumidero está en la parte más baja del suelo para recoger el agua que cae durante la ducha.|排水口位于地面最低处，收集淋浴时落下的水。
淋浴|Prefiero ducharme por la mañana porque así me siento más despierto antes de empezar a trabajar.|我更喜欢早上淋浴，这样上班前感觉更清醒。
泡澡|Después de una excursión larga me gusta bañarme y descansar un rato antes de preparar la cena.|长途远足后，我喜欢泡澡、休息一会儿再做晚饭。
洗手|Nos lavamos las manos al volver del mercado y antes de empezar a preparar la comida del domingo.|从市场回来后、准备周日午餐前，我们先洗手。
刷牙|Los niños se cepillan los dientes mientras nosotros terminamos de ordenar las cosas que van a llevar al colegio.|孩子们刷牙时，我们继续整理他们上学要带的东西。
上厕所|Antes de salir hacia la estación preguntamos si alguien necesita ir al servicio para no tener que parar después.|去车站前，我们问是否有人要上厕所，免得之后再停车。
浴室地垫|La alfombrilla de baño está frente a la ducha y la cambiamos cuando queda demasiado mojada.|浴室地垫放在淋浴前，太湿时我们就换掉。
浴巾|La toalla de baño está colgada cerca de la ducha para poder cogerla al terminar.|浴巾挂在淋浴旁，洗完后方便拿取。
擦手巾|Dejamos una toalla de mano limpia junto al lavabo antes de que lleguen los invitados a cenar.|客人来吃晚饭前，我们在洗手池旁放一条干净的擦手巾。
浴球|La esponja de malla cuelga junto al grifo de la ducha y se seca después de cada uso.|浴球挂在淋浴龙头旁，每次使用后晾干。
肥皂|El jabón que usamos para lavarnos las manos está en una jabonera colocada junto al lavabo.|洗手用的肥皂放在洗手池旁的皂盒里。
皂盒|La jabonera tiene pequeños agujeros que permiten salir al agua y mantienen el jabón menos húmedo.|皂盒有小孔排水，让肥皂不那么潮湿。
海绵|La esponja está junto a los productos de baño que ordenamos en un estante al lado de la ducha.|海绵和洗浴用品一起，摆在淋浴旁的架子上。`.split('\n').map(x=>x.split('|'));
if(rows.length!==100)throw Error(rows.length);
const src=JSON.parse(fs.readFileSync('data/collins-spanish-source.json'));const entries=src.entries.slice(800,900).map((r,i)=>({id:r.id,w:r.word,uk:'',us:'',senses:[{pos:r.kind==='phrase'?'短语':'词汇',zh:rows[i][0],en:r.en.replace(/^vocabulary |^general |^table settings |^bedroom /,'')}],ex:[{en:rows[i][1],zh:rows[i][2]}],col:[],fam:[],syn:[],ant:[],tip:'',cefr:'入门',topic:'chapter-'+r.chapter,exampleLevel:'B1',note:`Collins Spanish 3000 · 原书第 ${r.page} 页 · 第 ${i+801} 条；自编例句 B1`,m:0}));fs.writeFileSync('data/spanish-batches/009.entries.json',JSON.stringify(entries,null,2));

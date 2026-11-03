import fs from 'node:fs';
const rows=`马桶刷|La escobilla del váter está en un soporte que queda junto al retrete, detrás de la puerta.|马桶刷放在门后、马桶旁边的支架里。
一卷卫生纸|Colocamos un rollo de papel higiénico nuevo antes de preparar el cuarto de baño para las visitas.|准备客人使用的浴室时，我们先放上一卷新卫生纸。
浴室镜子|El espejo del baño tiene una luz que permite verse mejor incluso cuando todavía no ha amanecido.|浴室镜子有照明灯，即使天还没亮也能看清。
洗手池|El lavabo está debajo de un espejo que ocupa casi toda la pared del cuarto de baño.|洗手池上方是一面几乎占满整堵浴室墙的镜子。
淋浴间|La ducha ocupa la esquina del cuarto de baño que queda más cerca de la ventana.|淋浴间在浴室最靠近窗户的一角。
马桶|El váter está separado del lavabo por un armario estrecho donde guardamos los productos de limpieza.|马桶和洗手池之间隔着一个存放清洁用品的窄柜。
毛巾架|El toallero tiene espacio para colgar las dos toallas que usamos después de ducharnos por la mañana.|毛巾架能挂下我们早上淋浴后用的两条毛巾。
水龙头|El grifo del lavabo combina con los otros elementos metálicos que elegimos al reformar el cuarto de baño.|洗手池龙头与翻修浴室时选的其他金属配件相配。
浴室小柜|El armarito de baño tiene varias baldas que nos ayudan a separar los productos de cada persona.|浴室小柜有几层架子，方便分开放每个人的用品。
坐浴盆|El bidet está situado junto al retrete y tiene un grifo pequeño en la parte posterior.|坐浴盆在马桶旁，后方有一个小水龙头。
淋浴屏|La mampara de la ducha es de cristal y deja pasar la luz que entra desde la ventana.|玻璃淋浴屏让窗外的光线透进来。
浴缸|La bañera está bajo una ventana alta y tiene una repisa donde colocamos los productos de baño.|浴缸在一扇高窗下，旁边台沿摆着洗浴用品。
树|El árbol del jardín da sombra a la mesa donde nos reunimos para comer durante el verano.|花园的树为我们夏天聚餐的桌子遮阴。
土壤|La tierra de estas macetas es distinta de la que utilizamos para las plantas del huerto.|这些花盆里的土，与菜园用的土不同。
青草|El césped está húmedo porque ha llovido durante la noche y todavía no ha salido el sol.|夜里下了雨，太阳还没出来，所以草湿漉漉的。
植物|La planta que nos regaló mi hermana ha crecido mucho desde que la colocamos junto a la ventana.|姐妹送的植物放到窗边后，长大了很多。
杂草|Una mala hierba crece entre las flores del parterre que cuidamos cerca de la entrada de casa.|家门口的花坛里，鲜花之间长出了一株杂草。
花坛|El parterre tiene flores de varios colores que cambian según la época del año en que lo visitamos.|花坛有各种颜色的花，不同季节来看，样子也不同。
堆肥|El abono está guardado en el cobertizo junto a las herramientas que utilizamos para cuidar las plantas.|堆肥和园艺工具一起放在棚子里。
城市菜园|En el huerto urbano compartimos tareas con otros vecinos y aprendemos a cultivar algunas verduras de temporada.|在城市菜园，我们和邻居分工，学习种应季蔬菜。
温室|El invernadero protege las plantas pequeñas mientras esperan el momento de ser trasladadas al jardín.|小植物等待移栽到花园时，温室给它们提供保护。
园丁|La jardinera nos explica por qué algunas plantas necesitan un lugar distinto dentro del jardín.|园丁向我们解释，为何有些植物需要移到花园别处。
除草|Antes de plantar las flores vamos a quitar la maleza que ha crecido junto al sendero del jardín.|种花前，我们先清除花园小路旁长出的杂草。
浇水|Nos turnamos para regar las macetas del balcón cuando pasamos varios días sin que llueva.|连续几天不下雨时，我们轮流给阳台花盆浇水。
种植|Queremos cultivar algunas verduras para aprender de dónde vienen los alimentos que compramos en el mercado.|我们想种些蔬菜，了解市场上买来的食物从哪里来。
栽种|Decidimos plantar un árbol cerca de la valla para tener más sombra durante los próximos veranos.|我们决定在围栏附近种树，今后夏天就能多些阴凉。
遮阳篷|Extendemos el toldo sobre la terraza cuando el sol empieza a dar directamente en la mesa del jardín.|太阳开始直晒花园餐桌时，我们展开露台遮阳篷。
木地台|La tarima rodea una parte de la piscina y comunica con el sendero que lleva a la casa.|木地台围着泳池的一部分，连着通往房屋的小路。
园艺叉|La horquilla de jardín está apoyada junto a la puerta del cobertizo donde guardamos las herramientas más grandes.|园艺叉靠在存放大型工具的棚子门旁。
花园水管|La manguera llega hasta el fondo del jardín, donde están las plantas que necesitan agua esta tarde.|水管够得着花园尽头，那里有今天下午需要浇水的植物。
园艺手套|Nos ponemos los guantes de jardinería antes de empezar a trabajar en los parterres que están junto a la valla.|我们戴上园艺手套，开始打理围栏旁的花坛。
工具棚|El cobertizo tiene un estante para las macetas y varios ganchos donde colgamos las herramientas del jardín.|工具棚有放花盆的架子，也有挂园艺工具的挂钩。
锄头|El azadón está junto a la carretilla que mi abuelo utiliza cuando trabaja en el pequeño huerto de casa.|锄头放在祖父打理家中小菜园时用的独轮车旁。
割草机|El cortacésped está guardado en el cobertizo después de la última vez que cortamos la hierba del jardín.|上次割完花园草坪后，割草机收进了工具棚。
遮阳伞|El parasol cubre la mesa donde solemos sentarnos para tomar algo cuando hace buen tiempo los fines de semana.|周末天气好时，我们常坐着喝东西的桌子上撑着遮阳伞。
花盆|La maceta que elegimos tiene espacio suficiente para la planta que vamos a colocar junto a la entrada.|选好的花盆够大，能装下我们准备放在门口的植物。
修枝剪|Las tijeras de poda están sobre el banco de trabajo, junto a los guantes que utilizamos para cuidar el jardín.|修枝剪放在工作台上，旁边是打理花园用的手套。
铲子|La pala que usamos en el huerto tiene un mango largo que permite trabajar sin agacharse tanto.|菜园用的铲子有长柄，干活时不用弯得那么低。
园艺小铲|Con la paleta preparamos el hueco donde vamos a colocar la planta que compramos ayer en el vivero.|我们用园艺小铲挖坑，准备种下昨天买的植物。
洒水壶|Lleno la regadera antes de subir al balcón donde están las flores que nos regalaron por nuestro aniversario.|我灌满洒水壶，再到阳台浇结婚纪念日收到的鲜花。
除草剂|El herbicida permanece en su envase original dentro del armario destinado a los productos de jardinería.|除草剂装在原包装里，放在存放园艺用品的柜子中。
橡胶雨靴|Las botas de goma están junto a la puerta porque volvimos del huerto con bastante barro en los pies.|雨靴放在门边，因为我们从菜园回来时脚上沾了很多泥。
独轮手推车|La carretilla nos sirve para llevar tierra y macetas desde el cobertizo hasta el otro extremo del jardín.|独轮车帮助我们把土和花盆从棚子运到花园另一头。
窗台花箱|La jardinera está llena de flores y descansa sobre la repisa exterior de la ventana que da a la calle.|花箱里开满了花，放在朝街窗户外侧的窗台上。
花园格栅|La celosía está cubierta por una planta que trepa junto a la pared situada al fondo del patio.|院子尽头墙旁，攀缘植物覆盖了花园格栅。
草坪|El césped del jardín tiene una zona de sombra donde los niños suelen jugar durante las tardes de verano.|花园草坪上有一片阴凉，孩子们夏天下午常在那里玩。
灌木|El arbusto que plantamos junto a la valla ha crecido tanto que ahora da sombra al sendero del jardín.|我们在围栏旁种的灌木长大了，如今已能给花园小路遮阴。
院门|Cerramos la puerta del jardín después de que llegan todos los invitados a la comida del domingo.|周日聚餐的客人都到齐后，我们关上花园院门。
围栏|La valla separa nuestro jardín del sendero por el que pasean los vecinos que viven en la zona.|围栏把花园和附近居民散步的小路隔开。
鸟巢箱|La casita para pájaros cuelga de una rama que podemos ver desde la ventana del comedor.|鸟巢箱挂在一根从餐厅窗户能看见的树枝上。
花园家具|Los muebles de jardín están colocados bajo el toldo para que podamos sentarnos fuera incluso cuando llueve un poco.|花园家具摆在遮阳篷下，小雨时我们也能坐在外面。
小路|El sendero atraviesa el jardín y termina junto al banco donde mi abuela se sienta a leer por las tardes.|小路穿过花园，通向祖母下午看书常坐的长凳。
花|Las flores que plantamos en primavera atraen la atención de los vecinos que pasan delante de nuestra casa.|春天种的花吸引了经过我家门口的邻居们。
庭院|El patio recibe sol por la mañana y se convierte en nuestro lugar favorito para desayunar los domingos.|庭院早上有阳光，是我们最喜欢的周日早餐地点。
花盆|La maceta pequeña está junto a la ventana para que la planta reciba la luz que necesita durante el día.|小花盆放在窗边，让植物白天获得需要的光线。
洗衣杂物间|El lavadero está detrás de la cocina y tiene espacio para la lavadora y los productos que usamos para limpiar.|洗衣杂物间在厨房后，能放洗衣机和清洁用品。
家用电器|Los electrodomésticos de la cocina están distribuidos de manera que podemos movernos con comodidad mientras preparamos la comida.|厨房家电分布合理，我们备餐时走动很方便。
家务|Repartimos las tareas de la casa para que todos tengamos tiempo de descansar durante el fin de semana.|我们分担家务，让大家周末都有时间休息。
废纸篓|La papelera está debajo del escritorio donde guardamos las hojas que ya no necesitamos para estudiar.|废纸篓在书桌下面，用来放学习时不再需要的纸。
脸盆；水盆|La palangana está sobre una mesa del lavadero, junto a la cesta donde dejamos la ropa que falta por lavar.|水盆放在洗衣间桌上，旁边是待洗衣物篮。
漂白水|La lejía está en un envase cerrado dentro del armario donde guardamos por separado los productos de limpieza.|漂白水装在密闭容器里，放在分开存放清洁用品的柜中。
消毒剂|El desinfectante está colocado en el estante donde mantenemos los productos que utilizamos para limpiar el baño.|消毒剂放在存放浴室清洁用品的架子上。
洗碗机洗涤块|La pastilla del lavavajillas se guarda con los demás productos que usamos para lavar los platos a máquina.|洗碗机洗涤块与其他机洗餐具用品放在一起。
洗衣液；洗衣粉|El detergente de ropa está junto a la lavadora para tenerlo a mano cuando organizamos la colada.|洗衣剂放在洗衣机旁，整理待洗衣物时便于拿取。
洗洁精|El lavavajillas que usamos a mano está en una botella situada junto al fregadero de la cocina.|手洗餐具用的洗洁精装在厨房水槽旁的瓶里。
垃圾袋|Colocamos una bolsa de la basura nueva después de llevar los residuos al contenedor que hay en la calle.|把垃圾送到街边垃圾箱后，我们换上新垃圾袋。
扫地|Después de barrer el suelo recogemos las cosas que quedaron sobre la mesa donde merendaron los niños.|扫地后，我们收拾孩子们吃点心的桌上留下的东西。
洗衣服|Solemos hacer la colada durante la mañana para poder tender la ropa antes de que llegue la tarde.|我们通常上午洗衣服，这样下午前就能晾好。
吸尘|Nos turnamos para pasar la aspiradora por las habitaciones que usamos más durante la semana.|我们轮流给一周内常用的几个房间吸尘。
整理|Antes de recoger el salón separamos los juguetes que los niños quieren guardar de los que van a seguir usando.|整理客厅前，我们分开孩子们要收好和还要继续玩的玩具。
清洁|Hoy vamos a limpiar la cocina con más calma porque mañana vienen unos amigos a pasar el fin de semana.|明天有朋友来过周末，所以今天我们仔细清洁厨房。
倒垃圾|Al sacar la basura aprovecho para revisar el buzón que está junto a la entrada del edificio.|倒垃圾时，我顺便查看楼宇入口旁的信箱。
熨烫|Prefiero planchar las camisas cuando he terminado de doblar la ropa que se ha secado en el tendedero.|我喜欢先折好晾干的衣服，再熨衬衫。
掸灰|Quitamos el polvo de los muebles antes de ordenar los libros y las fotos que tenemos en las estanterías.|我们先掸去家具灰尘，再整理架子上的书和照片。
扫帚|La escoba está en un rincón del lavadero, al lado del recogedor que usamos después de barrer.|扫帚放在洗衣间一角，旁边是扫地后用的簸箕。
水桶|Llenamos el cubo en el grifo del patio antes de empezar las tareas de limpieza que tenemos previstas.|我们先在院子龙头下接满水桶，再开始计划中的清洁。
抹布|El trapo que utilizamos para limpiar la mesa está separado de los que usamos en el resto de la casa.|擦桌子的抹布，与清洁家里其他地方的抹布分开放。
晾衣架|El tendedero está junto a la ventana para que la ropa se seque mientras ventilamos la habitación.|晾衣架放在窗边，给房间通风时也能让衣服晾干。
衣夹|Las pinzas de la ropa están en una cesta pequeña que llevamos al patio cuando vamos a tender.|衣夹放在小篮子里，晾衣服时我们把它带到院子。
洗碗机|El lavavajillas está debajo de la encimera y queda cerca del armario donde guardamos los platos limpios.|洗碗机位于台面下，靠近存放干净盘子的橱柜。
垃圾桶|El cubo de la basura tiene una tapa que podemos abrir sin moverlo del rincón donde está guardado.|垃圾桶放在角落里，不用搬动就能打开盖子。
簸箕|Usamos el recogedor para retirar lo que ha quedado junto a la puerta después de limpiar la entrada.|我们清洁门口后，用簸箕收走门旁残留的垃圾。
熨斗|La plancha está sobre una superficie resistente mientras preparamos las camisas que vamos a necesitar durante la semana.|我们准备本周要穿的衬衫时，熨斗放在耐热台面上。
熨衣板|La tabla de planchar se puede plegar y guardar detrás de la puerta cuando terminamos de utilizarla.|熨衣板用完后可以折起，收在门后。
拖把|La fregona está junto al cubo que utilizamos cuando limpiamos el suelo de la cocina y del pasillo.|拖把放在清洁厨房与走廊地板时用的水桶旁。
橡胶手套|Los guantes de goma están en el armario donde guardamos los utensilios que utilizamos para limpiar la casa.|橡胶手套放在收纳家务清洁工具的柜子里。
百洁布|El estropajo está sobre una pequeña bandeja junto al fregadero donde dejamos los utensilios después de lavarlos.|百洁布放在水槽旁的小托盘上，洗好的厨具也留在那里。
厨房布巾|El paño de cocina cuelga de un gancho que está junto al armario donde guardamos los vasos de uso diario.|厨房布巾挂在橱柜旁的挂钩上，柜里放着日常水杯。
烘干机|La secadora está encima de la lavadora para aprovechar mejor el espacio que tenemos en el lavadero.|烘干机放在洗衣机上方，更好地利用洗衣间空间。
吸尘器|Guardamos la aspiradora en un armario del pasillo para poder llevarla fácilmente a cualquiera de las habitaciones.|吸尘器放在走廊柜子里，方便搬到各个房间。
晾衣绳|La cuerda para tender cruza el patio donde solemos dejar secar las sábanas después de lavarlas.|晾衣绳横跨院子，洗好床单后我们常在那里晾干。
洗衣机|La lavadora tiene una puerta de cristal que permite ver la ropa mientras gira durante el lavado.|洗衣机有玻璃门，洗涤时能看见里面转动的衣物。
篮子|En la cesta llevamos la ropa limpia que vamos a repartir entre los armarios de cada dormitorio.|我们用篮子装干净衣服，再分别收进各卧室衣柜。
香蕉|El plátano que hemos dejado en la frutera está listo para acompañar el desayuno que estamos preparando.|水果盘里的香蕉，正好搭配我们正在准备的早餐。
面包|Compramos el pan en una tienda del barrio donde también venden algunos productos para el desayuno.|我们在街区一家也卖早餐用品的商店买面包。
植物油|El aceite vegetal está en un estante de la cocina junto a los ingredientes que utilizamos con más frecuencia.|植物油放在厨房架子上，与常用食材摆在一起。
商店|La tienda de la esquina abre temprano y nos permite comprar lo que falta antes de ir al trabajo.|街角商店开门早，我们上班前能买到缺的东西。
购物中心|El centro comercial tiene tiendas, restaurantes y una zona donde los niños pueden jugar mientras descansamos un rato.|购物中心有商店、餐馆，也有孩子玩耍、我们休息的区域。
超市|Antes de entrar en el supermercado revisamos la lista para recordar los productos que necesitamos durante la semana.|进超市前，我们查看清单，回想一周所需的东西。
市场|En el mercado hablamos con los vendedores para conocer qué frutas y verduras han llegado esa mañana.|我们在市场和摊主交谈，了解当天早上新到的蔬果。`.split('\n').map(x=>x.split('|'));
if(rows.length!==100)throw Error(rows.length);
const src=JSON.parse(fs.readFileSync('data/collins-spanish-source.json'));const entries=src.entries.slice(900,1000).map((r,i)=>({id:r.id,w:r.word,uk:'',us:'',senses:[{pos:r.kind==='phrase'?'短语':'词汇',zh:rows[i][0],en:r.en.replace(/^vocabulary |^general /,'')}],ex:[{en:rows[i][1],zh:rows[i][2]}],col:[],fam:[],syn:[],ant:[],tip:'',cefr:'入门',topic:'chapter-'+r.chapter,exampleLevel:'B1',note:`Collins Spanish 3000 · 原书第 ${r.page} 页 · 第 ${i+901} 条；自编例句 B1`,m:0}));fs.writeFileSync('data/spanish-batches/010.entries.json',JSON.stringify(entries,null,2));

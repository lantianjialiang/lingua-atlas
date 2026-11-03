import fs from 'node:fs';
const rows=`护照|Compruebo la fecha del pasaporte antes de guardarlo junto a los billetes del viaje.|我检查护照日期后，把它和旅行票据放在一起。
飞行员|La piloto saluda a la tripulación antes de entrar en la cabina del avión.|飞行员进入驾驶舱前，向机组人员打招呼。
跑道|El avión avanza por la pista de aterrizaje después de tocar tierra suavemente.|飞机平稳着陆后，沿跑道滑行。
行李箱|Mi maleta es fácil de reconocer porque lleva una cinta roja en el asa.|我的箱子很容易认，因为提手上系了红带子。
轮渡航程|La travesía de ferry dura dos horas y permite disfrutar de las vistas de la costa.|轮渡航程两小时，途中可以欣赏海岸风景。
轮渡码头航站楼|Llegamos a la terminal de ferry con tiempo para localizar la entrada de vehículos.|我们提前到轮渡码头，有时间寻找车辆入口。
车辆甲板|Dejamos el coche en la cubierta para vehículos y subimos a la zona de pasajeros.|我们把车停在车辆甲板，再上到乘客区。
甲板|Desde la cubierta vemos cómo el puerto se aleja mientras empieza la travesía.|航程开始时，我们从甲板看着港口渐渐远去。
船烟囱|La chimenea del barco sobresale por encima de las cubiertas donde pasean los pasajeros.|船的烟囱高出乘客散步的甲板。
圆形舷窗|Por el ojo de buey del camarote podemos ver las olas junto al barco.|透过船舱的圆形舷窗，我们能看见船旁的波浪。
救生艇|El bote salvavidas está sujeto al costado del barco, cerca de la cubierta superior.|救生艇固定在船舷，靠近上层甲板。
船头|Los pasajeros observan el horizonte desde una zona situada cerca de la proa.|乘客们在靠近船头的区域眺望地平线。
船尾|Desde la popa vemos la espuma que deja el barco al avanzar por el mar.|从船尾可以看见船航行时留下的浪花。
船舱客房|Nuestro camarote tiene dos camas y espacio suficiente para guardar las maletas del viaje.|我们的船舱有两张床，也放得下旅行箱。
登船码头|Esperamos en el embarcadero mientras los trabajadores preparan la pasarela para subir al ferry.|工作人员准备登船通道时，我们在码头等候。
游艇码头|En el puerto deportivo hay pequeños veleros que se mueven suavemente junto al muelle.|游艇码头里，小帆船在岸边轻轻摇晃。
海岸警卫队|El guardacostas se acerca al puerto mientras la tripulación comprueba las condiciones del mar.|海岸警卫船驶近港口，船员查看海况。
船长|La capitana habla con la tripulación antes de dirigir el barco hacia la salida del puerto.|船长与船员交谈后，驾驶船舶驶向港口出口。
船员|La tripulación ayuda a los pasajeros a encontrar sus camarotes al comienzo del viaje.|航程开始时，船员帮乘客寻找客房。
步行登船乘客|El pasajero de a pie utiliza una entrada distinta de la que siguen los coches.|步行乘客使用的入口与车辆不同。
登船|Antes de embarcar comprobamos que llevamos los billetes y los documentos en la mochila.|登船前，我们确认票据和证件都在背包里。
航行|Nos gusta navegar cerca de la costa cuando el mar está tranquilo y hace buen tiempo.|海面平静、天气好时，我们喜欢沿海岸航行。
靠岸停泊|El ferry empieza a atracar y los pasajeros se preparan para recoger sus maletas.|轮渡开始靠岸，乘客准备取行李。
锚|El ancla está preparada en la parte delantera del barco que vamos a visitar.|我们要参观的船，船头备好了锚。
浮标|Una boya amarilla marca una zona del agua que vemos desde la cubierta del barco.|黄色浮标标出一片水域，我们从甲板上能看见。
登船通道|Los viajeros cruzan la pasarela despacio porque algunos llevan maletas bastante pesadas.|有些旅客带着重行李，因此大家慢慢走过登船通道。
港湾|El puerto está protegido del viento y tiene espacio para barcos de distintos tamaños.|港湾有遮风的条件，可容纳不同大小的船。
栈桥；防波堤|Caminamos por el malecón hasta un lugar desde donde podemos observar los barcos.|我们沿防波堤走，到了一处能看船的地方。
救生圈|El salvavidas cuelga junto a la barandilla, bien visible desde la zona de paseo.|救生圈挂在栏杆旁，从步行区域很容易看到。
救生衣|La tripulación muestra un chaleco salvavidas durante la explicación que ofrece a los pasajeros.|船员向乘客讲解时，展示一件救生衣。
系泊处|El barco vuelve a su amarradero después de una mañana de navegación por la bahía.|在海湾航行一上午后，船返回系泊处。
港口|El puerto recibe barcos de pasajeros y grandes buques que transportan mercancías a diario.|港口每天接待客船和运货的大型船舶。
独木舟|La piragua avanza por el lago mientras sus ocupantes observan las montañas de alrededor.|独木舟行进在湖面上，乘坐者欣赏周围的山峦。
轮渡|Tomamos el ferry para llegar a la isla sin dejar el coche en el continente.|我们乘轮渡去岛上，也把汽车带过去。
充气小艇|El bote inflable está junto al velero y sirve para acercarse a la orilla.|充气小艇停在帆船旁，用来靠近岸边。
皮划艇|Recorremos la bahía en kayak y descansamos en una playa pequeña durante el paseo.|我们划皮划艇游览海湾，途中在一片小海滩休息。
远洋客轮|El transatlántico llega al puerto y muchos pasajeros salen a observar la ciudad desde cubierta.|远洋客轮抵港，许多乘客走到甲板看城市。
划艇|Alquilamos una barca de remos para pasar la tarde tranquilamente en el lago.|我们租了一艘划艇，在湖上悠闲地度过下午。
帆船|El velero se aleja de la playa mientras el viento llena su vela blanca.|风鼓起白帆，帆船渐渐离开海滩。
拖网渔船|El pesquero de arrastre regresa al puerto después de trabajar durante la noche.|拖网渔船夜间作业后，返回港口。
游艇|El yate está amarrado junto a otros barcos, al final del puerto deportivo.|游艇系泊在游艇码头尽头，旁边还有其他船。
公寓楼|El bloque de pisos donde vive mi hermana tiene un pequeño jardín junto a la entrada.|我姐妹住的公寓楼入口旁有一座小花园。
屋顶|El tejado de la casa necesita una revisión porque entró agua durante la última tormenta.|上次暴风雨时屋里漏水，所以屋顶需要检查。
窗户|Abro la ventana del dormitorio para dejar entrar aire fresco antes de empezar a trabajar.|工作前，我打开卧室窗户，让新鲜空气进来。
阳台|En el balcón hay dos sillas donde nos sentamos a leer después de cenar.|阳台上有两把椅子，我们晚饭后坐在那里看书。
建筑物|El edificio tiene una entrada accesible y varias oficinas distribuidas en tres plantas.|这栋楼有无障碍入口，三层楼里分布着几个办公室。
公寓|Buscamos un apartamento luminoso que esté cerca del transporte público y tenga dos dormitorios.|我们想找一间明亮、靠近公共交通且有两间卧室的公寓。
住宅公寓|El piso que visitamos ayer tiene una cocina pequeña, pero el salón es bastante amplio.|昨天参观的公寓厨房小，但客厅相当宽敞。
地址|Anoto la dirección completa para encontrar fácilmente la casa cuando vuelva a visitar el barrio.|我记下完整地址，方便再次到这个街区时找到那座房子。
住宅区|La zona residencial está lejos del centro, pero tiene parques y buenas conexiones de autobús.|住宅区离市中心远，不过有公园，公交也便利。
区|Este distrito reúne varios barrios donde hay mercados, escuelas y espacios para practicar deporte.|这个区包含几个街区，有市场、学校和运动场地。
租赁中介|El agente de alquiler nos enseña tres viviendas que están disponibles desde el próximo mes.|租赁中介带我们看了三套下个月可入住的房子。
房产中介|Entramos en la inmobiliaria para preguntar por los pisos que aparecen en el escaparate.|我们走进房产中介，询问橱窗展示的公寓。
门房；管理员|La portera recibe un paquete y avisa al vecino que vive en la tercera planta.|管理员收到包裹，通知住在三楼的邻居。
房东|La casera nos entrega las llaves después de enseñarnos dónde están los contadores de la vivienda.|房东告诉我们房屋计量表在哪里，然后交给我们钥匙。
邻居|Mi vecino suele regar las plantas del balcón mientras hablamos de las noticias del barrio.|我和邻居聊街区新闻时，他通常在给阳台植物浇水。
租客|La inquilina organiza sus cajas antes de colocar los muebles en el nuevo salón.|租客先整理箱子，再把家具放到新客厅。
住房抵押贷款|Revisamos los documentos de la hipoteca con el empleado del banco antes de seguir hablando.|我们先和银行职员查看房贷文件，然后继续交谈。
租金|El alquiler de este piso incluye el uso de una pequeña plaza de garaje.|这套公寓的租金包含一个小车位的使用权。
租赁合同|Leemos el contrato de alquiler para conocer las condiciones de la vivienda que vamos a visitar.|我们阅读租赁合同，了解要参观的房屋的条件。
物业公共费用|Los vecinos se reúnen para hablar de los gastos de comunidad y de la limpieza del edificio.|邻居们聚在一起，讨论公共费用和楼宇清洁。
度假短租房|El alquiler vacacional está junto a la playa y tiene espacio para toda nuestra familia.|度假短租房就在海滩旁，住得下我们全家。
租用|Queremos alquilar un piso cerca del trabajo para pasar menos tiempo en el transporte público.|我们想在工作地点附近租公寓，减少乘车时间。
拥有|Mi tía es dueña de una casa antigua que está en el centro del pueblo.|我阿姨拥有一座位于村镇中心的老房子。
居住|Nos gustaría vivir en un barrio tranquilo donde podamos llegar andando a las tiendas.|我们想住在安静、能步行去商店的街区。
搬家|Tenemos que mudarnos de casa porque el próximo mes empezamos a trabajar en otra ciudad.|下个月我们要去另一座城市工作，所以得搬家。
建房|Quieren construir una casa en el terreno donde antes estaba la vivienda de sus abuelos.|他们想在祖父母旧居所在的地块上建房。
公寓楼|El bloque de apartamentos tiene un patio interior que comparten todas las familias del edificio.|这座公寓楼有一个由所有住户共用的内院。
独栋住宅|La casa individual está rodeada de árboles y tiene una entrada para aparcar el coche.|独栋住宅四周有树，还有一个能停车的入口。
农舍|Pasamos el fin de semana en una casa de labranza situada cerca de varios campos de cultivo.|我们在一座靠近几片农田的农舍度过周末。
双拼住宅|La casa pareada comparte una pared con la vivienda de la familia que vive al lado.|这座双拼住宅与邻居家的房屋共用一堵墙。
单间公寓|El estudio tiene una sola estancia donde se encuentran la cama, la mesa y la cocina.|这间单间公寓只有一个空间，里面有床、桌子和厨房。
别墅|El chalet tiene una terraza amplia desde la que se puede ver toda la bahía.|别墅有宽敞的露台，从那里能看见整个海湾。
房间|Esta habitación recibe luz por la mañana y por eso la usamos como zona de estudio.|这间房早上光线好，所以我们把它当作学习区域。
地下室|En el sótano guardamos las herramientas y algunas cajas que todavía no hemos abierto.|地下室里放着工具和一些尚未打开的箱子。
阁楼|El desván está debajo del tejado y tiene una ventana pequeña que da al jardín.|阁楼在屋顶下面，有一扇朝向花园的小窗。
天花板|El techo del salón es alto y permite colocar una lámpara bastante grande sobre la mesa.|客厅天花板很高，桌子上方能安装一盏较大的灯。
外墙|El muro exterior protege el jardín del viento y separa la casa de la calle.|外墙给花园挡风，也把房子和街道分开。
内墙|Pintamos la pared del dormitorio de un color claro para aprovechar mejor la luz.|我们把卧室内墙刷成浅色，更好地利用光线。
地板|El suelo de madera necesita una limpieza después de la visita de toda la familia.|全家人来访后，木地板需要清洁。
插头|Compruebo que el enchufe de la lámpara no esté conectado antes de mover el escritorio.|搬书桌前，我确认台灯插头没有插着。
转换插头|Llevamos un adaptador porque las tomas de corriente del alojamiento son distintas de las nuestras.|住宿处的插座与我们家的不同，所以我们带了转换插头。
插座|La toma de corriente está detrás del sofá y resulta difícil llegar hasta ella.|插座在沙发后面，不太容易够到。
电力|Durante el corte de electricidad utilizamos una linterna para encontrar las velas de la cocina.|停电期间，我们用手电筒找厨房的蜡烛。
管道系统|El fontanero revisa las cañerías del baño mientras nosotros vaciamos el armario de debajo del lavabo.|水管工检查浴室管道时，我们清空洗手池下面的柜子。
水管|La tubería del agua pasa por la pared que separa la cocina del cuarto de baño.|水管经过厨房与浴室之间的墙。
中央供暖|Encendemos la calefacción central un rato antes de que lleguen nuestros amigos a cenar.|朋友来吃晚饭前，我们提前一会儿打开中央供暖。
卫星天线|La antena parabólica está instalada en el tejado, al lado de una chimenea pequeña.|卫星天线装在屋顶，一根小烟囱旁边。
门廊|En el porche dejamos las botas mojadas después de volver del paseo por el bosque.|从森林散步回来后，我们把湿靴子放在门廊里。
后门|La puerta trasera permite entrar al jardín sin tener que pasar por el salón.|后门能直接通向花园，不必经过客厅。
落地玻璃门|La puertaventana del comedor se abre directamente a la terraza donde solemos desayunar.|餐厅的落地玻璃门直接通向我们常吃早餐的露台。
屋顶露台|Subimos a la azotea para disfrutar del aire fresco cuando empieza a ponerse el sol.|太阳开始落山时，我们到屋顶露台乘凉。
阳台|El balcón tiene una barandilla azul y varias macetas que cuidamos durante todo el año.|阳台有蓝色栏杆和几盆我们全年照料的植物。
天窗|La claraboya ilumina la escalera incluso cuando las puertas de las habitaciones están cerradas.|即使各房间的门都关着，天窗也能照亮楼梯。
修理|El técnico viene a reparar la persiana que dejó de funcionar durante la semana pasada.|技术人员来修上周坏掉的卷帘。
装饰|Vamos a decorar el salón con las fotos que hicimos durante nuestro último viaje.|我们打算用上次旅行拍的照片装饰客厅。
翻修|Queremos reformar la cocina para aprovechar mejor el espacio que hay junto a la ventana.|我们想翻修厨房，更好地利用窗边的空间。
空调|El aire acondicionado mantiene fresca la habitación mientras trabajamos durante las horas de más calor.|最热的几个小时里，空调在我们工作时保持室内凉爽。
锅炉|El técnico revisa la caldera porque el agua tarda más de lo normal en calentarse.|热水加热比平时慢，所以技术人员来检查锅炉。
吊扇|El ventilador de techo mueve el aire del dormitorio sin ocupar espacio en el suelo.|吊扇让卧室空气流通，又不占地面空间。`.split('\n').map(x=>x.split('|'));
if(rows.length!==100)throw Error(rows.length);
const src=JSON.parse(fs.readFileSync('data/collins-spanish-source.json'));
const entries=src.entries.slice(600,700).map((r,i)=>({id:r.id,w:r.word.replace(/ f$/,''),uk:'',us:'',senses:[{pos:r.kind==='phrase'?'短语':'词汇',zh:rows[i][0],en:r.en.replace(/^vocabulary |^general |^boats |^types of building |^inside /,'')}],ex:[{en:rows[i][1],zh:rows[i][2]}],col:[],fam:[],syn:[],ant:[],tip:'',cefr:'入门',topic:r.chapter===0?'essentials':'chapter-'+r.chapter,exampleLevel:'A2–B1',note:`Collins Spanish 3000 · 原书第 ${r.page} 页 · 第 ${i+601} 条；自编例句 A2向B1过渡`,m:0}));fs.writeFileSync('data/spanish-batches/007.entries.json',JSON.stringify(entries,null,2));

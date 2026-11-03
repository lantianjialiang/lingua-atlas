import fs from 'node:fs';
const rows=`车把|Sujeto el manillar con las dos manos mientras bajo por el camino.|我下坡时双手握着车把。
变速挡位|Cambio las marchas de la bicicleta antes de subir la cuesta más larga.|在上最长的坡前，我先给自行车换挡。
车架上管|El tubo superior del cuadro une la parte delantera con la zona del sillín.|车架上管连接前部和车座附近区域。
自行车座|Ajusto el sillín para sentarme mejor durante el recorrido hasta el trabajo.|我调整车座，让骑车上班的路上坐得更舒服。
车架|El cuadro de mi bicicleta es ligero, pero soporta bien el uso diario.|我的自行车车架轻巧，但经得住每天使用。
脚踏板|Un pedal hace ruido, así que llevo la bicicleta al taller del barrio.|一个脚踏板有异响，所以我把自行车送到街区修理店。
链条|El mecánico limpia la cadena para que la bicicleta vuelva a funcionar suavemente.|机械师清洁链条，让自行车再次顺畅运转。
轮胎|El neumático de la bicicleta perdió aire durante nuestro paseo por el campo.|我们在乡间骑车时，自行车轮胎漏了气。
车轮|La rueda delantera gira mientras compruebo si el freno roza demasiado.|前轮转动着，我检查刹车是否摩擦过多。
摩托车骑手|La motorista se pone el casco antes de salir hacia el trabajo.|摩托车骑手上班出发前戴上头盔。
轻便摩托车|Usamos el ciclomotor para hacer trayectos cortos dentro del pueblo donde vivimos.|我们用轻便摩托车在所住村庄内短途出行。
踏板摩托车|Aparcamos la motocicleta junto al hotel y seguimos a pie hasta la playa.|我们把踏板摩托车停在酒店旁，再步行到海滩。
油箱|El depósito de gasolina de la moto está casi vacío después del viaje.|旅行之后，摩托车的油箱几乎空了。
前灯|El faro de la moto ilumina la carretera cuando empieza a anochecer.|天开始黑时，摩托车前灯照亮道路。
挡泥板|El guardabarros evita que salpique tanto barro cuando pasamos por un charco.|我们驶过水洼时，挡泥板减少泥水飞溅。
摩托车支脚|Bajo la pata para dejar la moto apoyada mientras busco las llaves.|我放下支脚撑住摩托车，然后找钥匙。
骑行皮衣套装|El traje de cuero cuelga junto al casco en la entrada de casa.|骑行皮衣套装和头盔一起挂在家门口。
靴子|Las botas del motorista están llenas de polvo después de recorrer el camino.|走过那段路后，摩托车骑手的靴子满是灰尘。
头盔|Reviso el casco y cierro bien la correa antes de subir a la moto.|上摩托车前，我检查头盔并扣好带子。
头盔摄像机|La cámara para casco graba el paisaje mientras recorremos la carretera de montaña.|我们沿山路骑行时，头盔摄像机记录沿途风景。
皮手套|Llevo guantes de cuero para proteger las manos durante el viaje en moto.|骑摩托车旅行时，我戴皮手套保护双手。
皮夹克|La chaqueta de cuero tiene varios bolsillos donde guardo mis documentos y llaves.|皮夹克有几个口袋，我把证件和钥匙放在里面。
摩托车|La moto consume poco combustible y nos resulta práctica para movernos por la ciudad.|这辆摩托车耗油少，在城里出行很方便。
铁路网|La red ferroviaria conecta las ciudades principales y facilita los viajes sin coche.|铁路网连接主要城市，让不开车的旅行更方便。
高速列车|Tomamos el tren de alta velocidad para llegar a Madrid antes de comer.|我们乘高速列车，午饭前就到达马德里。
旅客列车|El tren de pasajeros se detiene en varios pueblos durante el recorrido.|这趟旅客列车沿途在几个村镇停车。
货运列车|El tren de mercancías transporta grandes contenedores desde el puerto hasta el interior.|货运列车把大型集装箱从港口运到内陆。
卧铺列车|Viajamos en trenhotel para dormir durante el trayecto y llegar por la mañana.|我们乘卧铺列车，途中睡觉，早上到达。
车厢|Nuestro vagón está al final del tren, cerca del coche restaurante.|我们的车厢在列车尾部，靠近餐车。
线路|Esta línea une la estación central con varios pueblos situados cerca del río.|这条线路连接中央车站和河边的几个村镇。
地铁站|La estación de metro está debajo de la plaza donde quedamos con nuestros amigos.|地铁站就在我们和朋友约见的广场下面。
行李寄存处|Dejamos las maletas en la consigna de equipaje para visitar el centro cómodamente.|我们把箱子放在行李寄存处，轻松游览市中心。
列车查票员|El revisor comprueba nuestros billetes y nos indica dónde están los asientos reservados.|查票员检查车票，并告诉我们预订的座位在哪里。
进站检查|Pasamos por el control de acceso antes de buscar el andén de nuestro tren.|我们经过进站检查，再找列车所在的站台。
火车优惠卡|Con la tarjeta de descuento para viajes en tren pagamos menos por los billetes.|有火车优惠卡，我们买车票能少花钱。
单程票|Compro un billete de ida porque todavía no sé cuándo voy a volver.|我买单程票，因为还不知道何时回程。
往返票|El billete de ida y vuelta incluye el regreso del domingo por la tarde.|这张往返票包含周日下午的回程。
电子票|Muestro el billete electrónico en el móvil cuando llegamos al control de acceso.|到了进站检查处，我出示手机上的电子票。
交通通票|El abono transporte me sirve para usar el tren durante todo el mes.|用这张交通通票，我整个月都能乘火车。
验票读卡器|El lector de billetes reconoce el código y permite pasar a los pasajeros.|验票读卡器识别票上的码，让乘客通过。
头等车厢|Viajamos en primera clase porque necesitamos trabajar con tranquilidad durante el trayecto.|我们乘头等车厢，因为途中需要安静工作。
静音车厢|En el vagón silencioso los pasajeros leen o descansan sin hablar por teléfono.|静音车厢里，乘客看书或休息，不打电话。
预订座位|Buscamos nuestro asiento reservado siguiendo los números que aparecen en el billete.|我们按车票上的号码寻找预订的座位。
换乘火车|Tenemos que cambiar de tren en la próxima estación para llegar al pueblo.|要到那个村镇，我们得在下一站换乘。
验票；激活车票|Antes de subir debemos validar el billete en la máquina situada junto al andén.|上车前，我们要在站台旁的机器上验证车票。
铁路车厢|El vagón tiene espacio para las bicicletas cerca de una de las puertas.|这节车厢一扇门旁有放自行车的空间。
卧铺铺位|Mi litera está junto a la ventana y puedo ver las luces del pueblo.|我的铺位靠窗，可以看到村庄的灯光。
出发信息屏|La pantalla de información anuncia un cambio de andén para nuestro tren.|信息屏宣布我们的火车换了站台。
列车长|La jefa de tren ayuda a una familia que no encuentra su vagón.|列车长帮助一家找不到车厢的乘客。
轻轨|El tren ligero atraviesa varios barrios antes de llegar a la universidad.|轻轨经过几个街区，最后到达大学。
行李架|Coloco la mochila en el portaequipajes para dejar libre el asiento de al lado.|我把背包放到行李架上，空出旁边的座位。
地铁|El metro suele ser más rápido que el coche cuando hay mucho tráfico.|堵车时，地铁通常比汽车快。
站台|Esperamos en el andén mientras miramos la hora de llegada del tren.|我们在站台等候，同时查看火车到达时间。
流动售货车|El bar móvil recorre el pasillo y ofrece bebidas a los pasajeros.|流动售货车沿过道走，为乘客提供饮料。
餐车|Vamos al coche restaurante para tomar un café antes de llegar a destino.|到站之前，我们去餐车喝杯咖啡。
滑动门|Las puertas corredizas se abren cuando el tren se detiene en la estación.|火车在车站停稳时，滑动门打开。
检票闸机|El torno se abre después de leer la tarjeta que llevamos para viajar.|检票闸机读取我们的乘车卡后打开。
自动售票机|La máquina expendedora de billetes permite elegir el destino y pagar con tarjeta.|自动售票机可以选择目的地并刷卡支付。
售票处|Preguntamos en la taquilla si quedan billetes para el último tren de hoy.|我们在售票处询问今天末班车是否还有票。
铁轨|Desde el puente vemos la vía de tren que pasa junto al río.|从桥上能看见沿河经过的铁轨。
火车|El tren sale puntual y nos deja tiempo para visitar el mercado al llegar.|火车准时出发，让我们到达后还有时间逛市场。
火车站|La estación de tren tiene una entrada nueva que da directamente a la plaza.|火车站的新入口直接通向广场。
有轨电车|El tranvía pasa cerca de casa y nos lleva al centro en pocos minutos.|有轨电车经过家附近，几分钟就把我们送到市中心。
航空公司|La compañía aérea nos envía un mensaje con la nueva hora de salida.|航空公司发消息，告诉我们新的出发时间。
航站楼|Buscamos la terminal correcta antes de despedirnos del conductor del taxi.|和出租车司机告别前，我们先确认正确的航站楼。
到达／出发|Seguimos las señales de Salidas para encontrar el mostrador de nuestra compañía.|我们沿出发指示牌寻找航空公司柜台。
自助值机柜台|Usamos el mostrador de facturación automática para obtener las tarjetas de embarque.|我们在自助值机柜台领取登机牌。
安检|Después de pasar por seguridad buscamos un lugar tranquilo para esperar el vuelo.|通过安检后，我们找个安静地方等航班。
人体安检扫描仪|El escáner corporal está situado en la zona de seguridad del aeropuerto.|人体安检扫描仪位于机场安检区域。
海关|Al llegar a la aduana mostramos los documentos que nos solicita el agente.|到达海关时，我们向工作人员出示所需文件。
护照检查|Hay una fila de pasajeros esperando su turno en el control de pasaportes.|护照检查处排着一队等待办理的乘客。
登机口|La puerta de embarque está al final del pasillo, junto a una cafetería.|登机口在走廊尽头的一家咖啡店旁。
商务舱／经济舱|Elegimos la clase turista para gastar menos dinero en este viaje corto.|这次短途旅行，我们选择经济舱来节省费用。
机组人员|La tripulación recibe a los pasajeros y les ayuda a encontrar sus asientos.|机组人员迎接乘客，帮他们找座位。
乘务员|La auxiliar de vuelo guarda una manta para el pasajero que tiene frío.|乘务员给一位觉得冷的乘客准备毯子。
过道|Dejamos libre el pasillo para que los demás pasajeros puedan llegar a sus asientos.|我们让出过道，方便其他乘客去座位。
折叠餐桌|Abro la bandeja plegable para apoyar el vaso que me ofrece la auxiliar.|我打开折叠餐桌，放上乘务员递来的杯子。
上方行李舱|Guardamos las mochilas en el compartimento superior y después buscamos nuestros cinturones.|我们把背包放进上方行李舱，然后找安全带。
安全带|La señal recuerda a los pasajeros que deben llevar el cinturón de seguridad abrochado.|指示灯提醒乘客系好安全带。
机翼|Desde mi ventanilla puedo ver el ala y las nubes que cubren la costa.|从舷窗可以看到机翼和笼罩海岸的云。
飞机发动机|El motor del avión se pone en marcha mientras los pasajeros terminan de sentarse.|乘客陆续坐下时，飞机发动机启动了。
机身|El fuselaje del avión tiene varias filas de ventanillas a lo largo de sus lados.|飞机机身两侧排列着几排舷窗。
货舱|Los trabajadores colocan las maletas en la bodega antes de que termine el embarque.|登机结束前，工作人员把箱子放进货舱。
托运行李|El equipaje facturado viaja en la bodega y se recoge al llegar a destino.|托运行李放在货舱运输，到达目的地后领取。
超重行李|Tenemos que reorganizar las maletas para reducir el exceso de equipaje del grupo.|我们得重新整理箱子，减少团体的超重行李。
手提／随身行李|Mi equipaje de mano contiene los documentos y una muda para el viaje.|我的随身行李里放着证件和一套换洗衣服。
转机航班|Nuestro vuelo de conexión sale una hora después de la llegada del primero.|我们的转机航班在首个航班到达一小时后出发。
时差反应|El desfase horario me da sueño durante el día después de un vuelo largo.|长途飞行后，时差让我白天犯困。
办理值机（在线）|Prefiero facturar en línea para llegar al aeropuerto con la tarjeta de embarque preparada.|我更喜欢在线值机，到机场时登机牌就准备好了。
飞机|El avión despega mientras vemos cómo se alejan las casas junto al aeropuerto.|飞机起飞时，我们看着机场附近的房屋渐渐远去。
机场|Llegamos al aeropuerto con tiempo para comer algo antes de pasar por seguridad.|我们提前到机场，有时间在安检前吃点东西。
行李提取处|En la recogida de equipajes esperamos junto a la cinta indicada para nuestro vuelo.|在行李提取处，我们在本航班对应的转盘旁等候。
登机牌|La tarjeta de embarque muestra el número de asiento y la puerta de salida.|登机牌上显示座位号和登机口。
客舱|La cabina queda en silencio cuando apagan las luces durante el vuelo nocturno.|夜航时灯光熄灭，客舱安静下来。
值机柜台|En el mostrador de facturación pesamos las maletas y entregamos el equipaje.|我们在值机柜台给箱子称重，并办理托运。
驾驶舱|La cabina del piloto está en la parte delantera del avión de pasajeros.|驾驶舱位于客机前部。
航班信息屏|Consultamos la pantalla de información para comprobar si nuestro vuelo sigue saliendo puntual.|我们查看航班信息屏，确认航班是否仍准时起飞。
免税店|Pasamos por la tienda libre de impuestos mientras esperamos la hora del embarque.|等候登机时，我们逛了免税店。
旅行袋|La bolsa de viaje cabe debajo del asiento y contiene todo lo necesario.|旅行袋放得进座位下，里面有需要的物品。
行李手推车|Usamos el carrito portaequipajes para llevar las maletas hasta la salida del aeropuerto.|我们用行李手推车，把箱子推到机场出口。`.split('\n').map(x=>x.split('|'));
if(rows.length!==100)throw Error(rows.length);
const src=JSON.parse(fs.readFileSync('data/collins-spanish-source.json'));
const entries=src.entries.slice(500,600).map((r,i)=>({id:r.id,w:r.word.replace(/^le revisor/,'el revisor').replace('expen- dedora','expendedora').replace(/ f$/,''),uk:'',us:'',senses:[{pos:r.kind==='phrase'?'短语':'词汇',zh:rows[i][0],en:r.en.replace(/^vocabulary /,'')}],ex:[{en:rows[i][1],zh:rows[i][2]}],col:[],fam:[],syn:[],ant:[],tip:'',cefr:'入门',topic:'chapter-'+r.chapter,exampleLevel:'A2+',note:`Collins Spanish 3000 · 原书第 ${r.page} 页 · 第 ${i+501} 条；自编例句 A2+`,m:0}));
fs.writeFileSync('data/spanish-batches/006.entries.json',JSON.stringify(entries,null,2));

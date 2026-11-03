import fs from 'node:fs';
const rows=`云|La nube tapa el sol mientras caminamos por la playa.|我们在海滩散步时，云遮住了太阳。
数字（1至一百万）|Aprendemos los números para entender los precios y decir nuestra edad.|我们学习数字，以便看懂价格和说出年龄。
直升机|El helicóptero aterriza cerca del hospital para recoger a un paciente.|直升机在医院附近降落，接一位患者。
旋翼|El rotor del helicóptero empieza a girar antes de despegar.|直升机的旋翼在起飞前开始转动。
旋翼桨叶|La paleta del rotor gira rápidamente sobre la cabina del helicóptero.|旋翼桨叶在直升机驾驶舱上方快速转动。
机头|El piloto revisa el morro del helicóptero antes del vuelo.|飞行员在飞行前检查直升机的机头。
驾驶舱|La cabina del piloto tiene instrumentos para controlar el helicóptero.|驾驶舱里有控制直升机的仪表。
机尾|El mecánico comprueba la cola del helicóptero antes de la salida.|机械师在出发前检查直升机的机尾。
街道|La calle está tranquila porque los coches no pueden entrar.|街道很安静，因为汽车不能驶入。
司机|La conductora mira a ambos lados antes de entrar en la carretera.|司机在驶入公路前左右观察。
乘客|El pasajero guarda su mochila y se sienta junto a la ventana.|乘客收好背包，坐在窗边。
行人|La peatona espera la luz verde antes de cruzar la calle.|行人等到绿灯才过街。
交通|El tráfico es intenso porque muchas personas vuelven del trabajo.|交通很繁忙，因为很多人下班回家。
堵车|El embotellamiento nos impide llegar a tiempo a la estación.|堵车让我们无法准时到达车站。
高峰时间|Durante la hora punta preferimos ir al trabajo en metro.|在高峰时间，我们更喜欢坐地铁上班。
公共交通|Usamos el transporte público para llegar al centro sin buscar aparcamiento.|我们乘公共交通去市中心，不用找停车位。
出租车|Pedimos un taxi porque llevamos dos maletas muy pesadas.|我们叫了出租车，因为带着两只很重的行李箱。
出租车候车点|La parada de taxis está junto a la entrada de la estación.|出租车候车点就在车站入口旁。
交通通票|Con el abono de transporte puedo viajar todos los días sin comprar billetes.|有了交通通票，我每天乘车都不用再买票。
交通卡|Guardo la tarjeta de transporte en el bolsillo para encontrarla fácilmente.|我把交通卡放进口袋，方便拿取。
路线指引|El vecino nos da las señas para llegar al hotel andando.|邻居告诉我们步行去酒店的路线。
全球定位系统|El GPS indica una ruta más corta para evitar el tráfico.|导航指示一条较短的路线，以避开拥堵。
地图应用|Consulto la aplicación de mapas antes de salir hacia el museo.|我出发去博物馆前查看地图应用。
道路标志|La señal de carretera indica que la estación está a dos kilómetros.|路标显示车站还有两公里。
路线|Elegimos una ruta tranquila para recorrer el pueblo en bicicleta.|我们选了一条安静的路线，骑车游览村庄。
特别协助|Mi abuelo necesita asistencia para subir al autobús con su silla de ruedas.|我祖父需要协助，才能坐着轮椅上公交车。
步行|Prefiero caminar hasta el mercado cuando hace buen tiempo por la mañana.|早上天气好时，我更喜欢步行去市场。
开车|No puedo conducir hoy porque mi coche está en el taller.|今天我不能开车，因为车在修理厂。
返回|Queremos regresar al hotel antes de que empiece la tormenta.|我们想在暴风雨开始前回到酒店。
穿过|Debemos cruzar la calle por el paso de peatones más cercano.|我们应该从最近的人行横道过街。
转弯|Al llegar a la esquina tienes que girar a la derecha.|到街角时，你得向右转。
地图|El mapa muestra un camino que pasa junto al río.|地图显示一条经过河边的小路。
车票|Compro el billete de tren antes de sentarme en el andén.|我先买火车票，然后坐到站台上。
时刻表|Miramos el horario para saber cuándo sale el último autobús.|我们看时刻表，了解末班公交何时出发。
多用途汽车|El monovolumen tiene espacio suficiente para toda la familia y sus maletas.|这辆多用途汽车装得下全家人和行李。
房车|Viajamos en autocaravana para dormir cerca de los lugares que visitamos.|我们乘房车旅行，方便住在游览地点附近。
拖挂式房车|La caravana está en un camping tranquilo junto al lago.|拖挂式房车停在湖边安静的营地里。
副驾驶座|Mi hermana se sienta en el asiento del copiloto y consulta el mapa.|我姐妹坐在副驾驶座上查看地图。
驾驶座|Antes de arrancar ajusto el asiento del conductor para llegar a los pedales.|发动前，我调整驾驶座，以便够到踏板。
后排座位|Los niños colocan sus mochilas junto al asiento trasero del coche.|孩子们把背包放在汽车后排座位旁。
儿童安全座椅|Sujetamos bien la silla infantil antes de iniciar el viaje.|我们在出发前把儿童安全座椅固定好。
车顶行李架|Colocamos las bicicletas en la baca para llevarlas hasta el camping.|我们把自行车放到车顶行李架上，带去营地。
天窗|Abrimos el techo solar para dejar entrar aire durante el paseo.|我们打开天窗，让兜风时有空气进来。
自动的|Mi coche es automático y no necesito cambiar las marchas manualmente.|我的车是自动挡，不用手动换挡。
电动的|El coche eléctrico se carga mientras cenamos en casa de mis padres.|我们在父母家吃晚饭时，电动车正在充电。
混合动力的|Elegimos un vehículo híbrido para gastar menos combustible en la ciudad.|我们选择混合动力车，想在城里少耗些油。
发动机|El mecánico escucha el motor para encontrar el origen del ruido.|机械师听发动机的声音，寻找噪声来源。
电池；蓄电池|La batería está descargada y por eso el coche no arranca.|电池没电了，所以汽车发动不了。
刹车|El conductor pisa el freno al ver a un peatón cerca.|司机看到附近有行人时踩下刹车。
油门；加速踏板|Piso suavemente el acelerador cuando la carretera vuelve a estar libre.|道路重新畅通时，我轻轻踩下油门。
空调|Ponemos el aire acondicionado porque hace mucho calor dentro del coche.|车里很热，所以我们开了空调。
离合器|Tengo que pisar el embrague antes de cambiar de marcha.|换挡前，我得先踩下离合器。
定速巡航|En la autopista uso el control de crucero para mantener una velocidad constante.|在高速公路上，我用定速巡航保持匀速。
排气管|El mecánico revisa el tubo de escape porque hace un ruido extraño.|排气管发出奇怪的声音，所以机械师在检查。
油箱|Llenamos el depósito de gasolina antes de salir hacia la montaña.|我们出发去山区前把油箱加满。
变速箱|La caja de cambios necesita una revisión antes del próximo viaje.|下次旅行前，变速箱需要检查。
传动系统|El taller revisa la trasmisión porque el coche vibra al acelerar.|汽车加速时会振动，所以修理厂检查传动系统。
酒精呼气测试仪|El agente utiliza el alcoholímetro para comprobar si el conductor ha bebido.|警察用酒精呼气测试仪检查司机是否喝过酒。
启动发动机|Antes de poner el motor en marcha, compruebo los espejos y el cinturón.|启动发动机前，我检查后视镜和安全带。
刹车|Tenemos que frenar con suavidad cuando la carretera está mojada.|道路湿滑时，我们得平稳刹车。
超车|No debemos adelantar si no vemos bien la carretera que tenemos delante.|看不清前方道路时，我们不应该超车。
停车|Buscamos un lugar donde aparcar cerca de la entrada del hotel.|我们在酒店入口附近找停车的地方。
倒车|Miro los espejos antes de dar marcha atrás para salir del aparcamiento.|倒车驶出停车位前，我先看后视镜。
减速|Hay que aminorar la velocidad cuando entramos en una zona escolar.|进入学校区域时，我们得减速。
超速驾驶|Conducir a exceso de velocidad pone en peligro a todos los usuarios de la vía.|超速驾驶会危及所有道路使用者。
停下|El autobús tiene que parar para recoger a los pasajeros de esta parada.|公交车得停下来，接这个站的乘客。
后备箱|Guardamos las maletas en el maletero antes de subir al coche.|上车前，我们把行李箱放进后备箱。
车顶|La lluvia golpea el techo mientras esperamos dentro del coche.|我们在车里等候时，雨点敲打车顶。
车窗|Cierro la ventanilla porque empieza a llover durante el viaje.|途中开始下雨，所以我关上车窗。
车轮|La rueda gira lentamente mientras el mecánico comprueba si hay algún problema.|机械师检查问题时，车轮缓缓转动。
车门|Abro la puerta con cuidado para no golpear el coche de al lado.|我小心开车门，以免撞到旁边的车。
汽车翼子板|La aleta del coche tiene un pequeño golpe cerca de la rueda.|汽车轮子附近的翼子板上有个小凹痕。
轮胎|Comprobamos la presión del neumático antes de salir a la carretera.|上路前，我们检查轮胎气压。
引擎盖|El mecánico abre el capó para revisar el nivel de aceite.|机械师打开引擎盖，检查机油量。
挡风玻璃|Limpiamos el parabrisas para ver mejor la carretera durante el viaje.|我们擦干净挡风玻璃，以便途中看清道路。
雨刷|El limpiaparabrisas retira el agua cuando llueve durante el trayecto.|行程中下雨时，雨刷刮去雨水。
侧后视镜|Compruebo el retrovisor lateral antes de cambiar al carril de la derecha.|换到右侧车道前，我先看侧后视镜。
前大灯|Encendemos el faro para ver el camino cuando empieza a oscurecer.|天开始暗时，我们打开车灯看路。
保险杠|El parachoques protege la parte delantera del coche de pequeños golpes.|保险杠保护汽车前部，减轻小碰撞的影响。
车牌|Anoto la matrícula para encontrar el coche en el aparcamiento.|我记下车牌，以便在停车场找到汽车。
转向灯|El conductor enciende el intermitente antes de girar hacia el hotel.|司机转向酒店前，打开转向灯。
仪表台|En el salpicadero vemos información importante sobre el estado del coche.|我们能从仪表台看到车辆状态的重要信息。
燃油表|El indicador de la gasolina muestra que debemos buscar una gasolinera.|燃油表显示我们得找加油站了。
换挡杆|Muevo la palanca de marchas con cuidado mientras aprendo a conducir.|学开车时，我小心地移动换挡杆。
手套箱|Guardo los documentos del coche en la guantera para tenerlos a mano.|我把汽车证件放在手套箱里，便于取用。
手刹|Pongo el freno de mano cuando aparco en una calle con pendiente.|在有坡度的街道停车时，我拉上手刹。
头枕|Ajusto el reposacabezas antes del viaje para colocar bien la cabeza.|出发前，我调整头枕，让头部位置合适。
点火装置|Giro la llave del encendido y espero a que arranque el motor.|我转动点火钥匙，等待发动机启动。
车内后视镜|El retrovisor me permite ver los coches que circulan detrás de mí.|车内后视镜让我能看见后方行驶的汽车。
车载导航系统|El sistema de navegación calcula una ruta nueva cuando salimos de la carretera prevista.|我们离开预定道路时，导航系统计算一条新路线。
安全带|Nos ponemos el cinturón de seguridad antes de que el coche se mueva.|汽车移动前，我们系好安全带。
速度表|Miro el velocímetro para comprobar que no supero el límite de velocidad.|我看速度表，确认自己没有超过限速。
方向盘|Sujeto el volante con las dos manos mientras conduzco por la curva.|开过弯道时，我双手握着方向盘。
双向分隔公路|La autovía tiene dos calzadas separadas para que el tráfico circule en sentidos opuestos.|双向分隔公路有两幅分开的车行道，供车辆相向行驶。
单车道公路|En la carretera de un solo carril esperamos para dejar pasar al otro coche.|在单车道公路上，我们停下等另一辆车通过。
柏油路面|El asfalto está mojado y debemos conducir con especial cuidado.|柏油路面湿滑，我们得格外小心驾驶。
街角|La farmacia está en la esquina, justo enfrente de la estación.|药房在街角，就在车站正对面。
出口|Tomamos la salida indicada para llegar al pueblo antes de que anochezca.|我们走标出的出口，争取在天黑前到达村庄。
匝道|Por la vía de acceso entramos en la autovía cuando hay espacio suficiente.|有足够空间时，我们通过匝道驶入双向分隔公路。
路边休息区|Paramos en el área de descanso para beber agua y estirar las piernas.|我们在路边休息区停下，喝点水、活动腿脚。`.split('\n').map(x=>x.split('|'));
if(rows.length!==100)throw Error(rows.length);
const source=JSON.parse(fs.readFileSync('data/collins-spanish-source.json','utf8'));
const entries=source.entries.slice(300,400).map((r,i)=>({id:r.id,w:i===1?'los números':r.word.replace(/ f$/,''),uk:'',us:'',senses:[{pos:r.kind==='phrase'?'短语':'词汇',zh:rows[i][0],en:i===1?'numbers (1 to 1,000,000)':r.en.replace(/^vocabulary |^exterior |^interior /,'')}],ex:[{en:rows[i][1],zh:rows[i][2]}],col:[],fam:[],syn:[],ant:[],tip:'',cefr:'入门',topic:r.chapter===0?'essentials':'chapter-'+r.chapter,exampleLevel:'A2',note:`Collins Spanish 3000 · 原书第 ${r.page} 页 · 第 ${i+301} 条；自编例句 A2${i===1?'；原书数字汇总复习条（保留原始记录ID）':''}`,m:0}));
fs.writeFileSync('data/spanish-batches/004.entries.json',JSON.stringify(entries,null,2));

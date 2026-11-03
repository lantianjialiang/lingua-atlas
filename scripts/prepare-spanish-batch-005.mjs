import fs from 'node:fs';
const rows=`最高限速|La velocidad máxima cambia al entrar en el pueblo, así que reduzco la marcha.|进入村庄时最高限速改变，所以我减速。
绕行|Seguimos el desvío porque la carretera principal está cerrada por obras.|我们沿绕行路线走，因为主路施工封闭。
驾驶证|Llevo el permiso de conducir cuando salgo de casa en coche.|开车出门时，我带着驾驶证。
车辆登记证|El permiso de circulación está guardado junto a los demás documentos del coche.|车辆登记证和汽车的其他证件放在一起。
汽车保险|Revisamos el seguro de automóvil antes de iniciar un viaje al extranjero.|去国外自驾旅行前，我们检查汽车保险。
交通罚单|Recibió una multa de tráfico por dejar el coche en un lugar prohibido.|他把车停在禁止停车处，收到了交通罚单。
汽车租赁|El alquiler de coches nos permite visitar pueblos sin depender del autobús.|租车让我们不用依赖公交车就能游览村庄。
汽车共享系统|Con el sistema de carsharing reservamos un coche para usarlo unas horas.|通过汽车共享系统，我们预订了一辆车使用几个小时。
居民停车区|La zona verde tiene plazas destinadas principalmente a quienes viven en el barrio.|绿色停车区的车位主要供住在街区的人使用。
收费停车区|En la zona azul buscamos la máquina para pagar el tiempo de aparcamiento.|在蓝色收费停车区，我们找机器支付停车费用。
自动售票机|Compramos el billete en la máquina expendedora antes de subir al tren.|上火车前，我们在自动售票机买票。
无铅汽油|El conductor elige gasolina sin plomo y comprueba el número del surtidor.|司机选择无铅汽油，并查看加油机编号。
柴油|Este vehículo utiliza gasóleo, por eso debemos elegir el surtidor correcto.|这辆车使用柴油，所以我们得选正确的加油机。
道路施工|Las obras de carretera obligan a los conductores a circular por un solo carril.|道路施工使司机只能在一条车道上行驶。
无障碍停车位|La plaza de aparcamiento accesible está junto a la entrada del edificio.|无障碍停车位就在大楼入口旁。
桥|Cruzamos el puente para llegar al barrio que está al otro lado del río.|我们过桥，前往河对岸的街区。
停车场|Dejamos el coche en el parking y continuamos a pie hasta el centro.|我们把车停在停车场，再步行去市中心。
洗车场|Después del viaje pasamos por el lavacoches para limpiar el barro del coche.|旅行后，我们去洗车场洗掉车上的泥。
加油机|El surtidor de gasolina está libre y el conductor se acerca despacio.|加油机空着，司机慢慢靠近。
交叉路口|Al llegar al cruce miramos las señales antes de elegir la dirección.|到路口时，我们先看标志再选择方向。
路缘石|El conductor evita acercarse demasiado al bordillo mientras aparca el coche.|停车时，司机避免过于靠近路缘石。
车道|Nos mantenemos en el carril hasta encontrar una salida que nos sirva.|找到合适的出口前，我们保持在这条车道上。
铁路平交道口|Esperamos en el paso a nivel mientras el tren atraviesa la carretera.|火车穿过公路时，我们在铁路平交道口等待。
高速公路|Tomamos la autopista para llegar antes, aunque el recorrido sea más largo.|我们走高速公路，尽管路程更长，却能早点到达。
停车计时收费器|El parquímetro muestra cuánto tiempo podemos dejar el coche en esta plaza.|停车计时收费器显示这处车位还能停多久。
停车位|Encontramos una plaza de aparcamiento cerca del mercado después de dar dos vueltas.|绕了两圈后，我们在市场附近找到一个停车位。
人行道|Caminamos por la acera para mantenernos separados de los coches que pasan.|我们走在人行道上，与经过的汽车保持分隔。
加油站|Paramos en la gasolinera porque queda poco combustible para llegar al hotel.|我们在加油站停下，因为到酒店的油不够了。
路面坑洞|El coche pasa despacio junto al bache que hay en medio de la calle.|汽车从街道中央的坑洞旁缓缓驶过。
公路|La carretera sigue el río y ofrece vistas de las montañas cercanas.|公路沿河延伸，可以看到附近群山。
环岛|En la rotonda elegimos la salida que lleva hacia la estación de tren.|在环岛，我们选择通往火车站的出口。
测速摄像头|El radar de velocidad está junto a una señal que recuerda el límite permitido.|测速摄像头旁有一块提醒限速的标志。
收费站|Nos detenemos en la estación de peaje para pagar el tramo de autopista.|我们在收费站停下，支付这段高速公路的通行费。
交通锥|Un cono de tráfico indica que una parte de la carretera está cerrada.|一个交通锥提示部分道路已封闭。
红绿灯|El semáforo cambia a verde y los peatones empiezan a cruzar con calma.|信号灯变绿，行人开始从容过街。
交通管理员|La guardia de tráfico comprueba los coches estacionados a lo largo de la calle.|交通管理员检查沿街停放的汽车。
隧道|Entramos en el túnel y dejamos de ver las montañas durante unos minutos.|我们进入隧道，有几分钟看不到群山。
斑马线|Una familia espera junto al paso de cebra antes de cruzar al parque.|一家人在斑马线旁等候，准备过街去公园。
事故|Después del accidente los conductores hablan junto a sus coches, sin personas heridas.|事故后，司机们在各自车旁交谈，没有人受伤。
故障|La avería del motor nos obliga a esperar la llegada de un mecánico.|发动机故障让我们不得不等机械师到来。
碰撞|La colisión dejó un pequeño golpe en el parachoques del coche rojo.|碰撞让红色汽车的保险杠上留下一个小凹痕。
轮胎漏气|El pinchazo nos retrasa porque tenemos que buscar un taller cercano.|轮胎漏气耽误了我们，因为得找附近的修理厂。
出故障|El coche puede averiarse si no revisamos a tiempo los problemas que aparecen.|如果不及时检查出现的问题，汽车可能发生故障。
发生事故|El conductor está preocupado porque acaba de tener un accidente leve.|司机很担心，因为刚发生了一起轻微事故。
轮胎漏气|Creemos que vamos a tener un pinchazo porque el neumático pierde aire.|轮胎在漏气，我们觉得可能要瘪胎了。
更换车轮|El mecánico prepara las herramientas antes de cambiar una rueda en el taller.|机械师在修理厂换车轮前，先准备工具。
拖曳|La grúa llega para remolcar el coche que no puede seguir circulando.|拖车来拖走无法继续行驶的汽车。
安全气囊|En la exposición vemos un airbag desplegado dentro de un coche de demostración.|在展览上，我们看到演示车辆内展开的安全气囊。
防冻液|El mecánico revisa el depósito de anticongelante durante la inspección del coche.|检修汽车时，机械师检查防冻液储液罐。
紧急电话柱|El poste SOS está junto a la carretera, cerca del área de descanso.|紧急电话柱在公路旁，靠近休息区。
汽车修理厂|Dejamos el coche en el garaje para que revisen el ruido del motor.|我们把车留在修理厂，请他们检查发动机的异响。
反光背心|El trabajador lleva un chaleco reflectante para que los conductores lo vean mejor.|工作人员穿着反光背心，让司机更容易看到他。
汽车千斤顶|El gato está debajo del coche mientras el mecánico trabaja en la rueda.|机械师处理车轮时，千斤顶放在汽车下面。
搭电线|Los cables de arranque están guardados en una bolsa dentro del maletero.|搭电线放在后备箱里的一个袋子里。
机械师|La mecánica escucha nuestra descripción y después examina el motor del coche.|机械师听了我们的描述，然后检查汽车发动机。
防滑雪链|En la tienda comparamos varias cadenas para nieve que sirven para nuestros neumáticos.|我们在商店比较几种适合自家轮胎的防滑雪链。
备胎|La rueda de recambio ocupa una parte del espacio que hay bajo el maletero.|备胎占据后备箱下方的一部分空间。
拖车|La grúa lleva el coche averiado hasta el taller más cercano.|拖车把故障汽车运到最近的修理厂。
警示三角牌|El triángulo de emergencia está guardado junto a otras herramientas del coche.|警示三角牌和汽车的其他工具放在一起。
公交线路|La ruta del autobús pasa por el hospital antes de llegar a la estación.|这条公交线路经过医院，再到车站。
公交专用道|El autobús avanza por su carril mientras los demás vehículos esperan en el atasco.|公交车沿专用道前进，其他车辆则堵在路上。
公交车站|Llegamos a la estación de autobuses con tiempo para buscar nuestro andén.|我们提前到达汽车站，有时间寻找乘车站台。
公交通票|Con el abono de autobús viajo al trabajo sin comprar un billete cada mañana.|有公交通票，我每天早上上班不用再单独买票。
查票员|La revisora comprueba los billetes de los pasajeros antes de que salga el autocar.|长途客车发车前，查票员检查乘客的车票。
车票；车费|El billete cuesta menos si lo compramos con antelación por internet.|如果提前在网上买票，车票会更便宜。
优惠票价|Preguntamos si podemos obtener una tarifa con descuento para todo el grupo.|我们询问全团是否能买优惠票。
读卡器|El lector de tarjetas emite un sonido cuando acerco mi tarjeta de transporte.|我把交通卡靠近读卡器时，机器发出提示音。
轮椅通道|El acceso para silla de ruedas permite entrar al autobús sin subir escalones.|轮椅通道让乘客不用上台阶就能进入公交车。
夜班公交|Tomamos el autobús nocturno porque el metro ya no circula a esa hora.|我们坐夜班公交，因为那个时间地铁已经停运。
接驳巴士|La lanzadera une el aeropuerto con el hotel durante todo el día.|接驳巴士全天连接机场和酒店。
校车|El autobús escolar recoge a los niños cerca de sus casas cada mañana.|校车每天早上在孩子们家附近接他们。
旅游大巴|Subimos al autobús de excursión para visitar un pueblo situado en la montaña.|我们登上旅游大巴，去参观山里的一个村庄。
乘公交车|Tenemos que tomar el autobús antes de las ocho para llegar a tiempo.|我们得在八点前坐上公交车，才能准时到达。
用票卡轻触读卡器|Al entrar debemos tocar el lector con el billete para validar el viaje.|上车时，我们得用票卡轻触读卡器来验证行程。
公交车|El autobús está lleno, así que esperamos al siguiente en la parada.|公交车满了，所以我们在站台等下一辆。
公交候车亭|Esperamos bajo la marquesina para protegernos de la lluvia que acaba de empezar.|刚开始下雨，我们在候车亭下等车避雨。
公交站|La parada de autobús está enfrente de la panadería donde compramos el desayuno.|公交站在我们买早餐的面包店对面。
长途客车|El autocar tiene espacio para guardar las maletas debajo de los asientos.|长途客车的座位下方有空间存放行李箱。
小巴|Un microbús lleva a los visitantes desde el pueblo hasta el museo.|一辆小巴把游客从村庄送到博物馆。
观光巴士|Desde el autobús turístico vemos los edificios principales sin tener que caminar tanto.|坐在观光巴士上，我们不用走太多路就能看见主要建筑。
骑车人|La ciclista reduce la velocidad cuando se acerca a un grupo de peatones.|骑车人靠近一群行人时放慢速度。
山地自行车|Usamos la bicicleta de montaña para recorrer los caminos de tierra del bosque.|我们骑山地自行车，在森林土路上游览。
公路自行车|La bicicleta de carretera tiene ruedas estrechas para avanzar por el asfalto.|公路自行车的车轮较窄，适合在柏油路上骑行。
双人自行车|Pedaleamos juntos en el tándem mientras seguimos el camino que rodea el lago.|我们沿环湖小路，合力骑着双人自行车。
自行车支架|Coloco la bicicleta en el soporte para que no se caiga al revisarla.|我把自行车放到支架上，检查时就不会倒。
自行车停放架|Dejamos las bicicletas en el aparcabicis antes de entrar en la biblioteca.|进图书馆前，我们把车停在自行车架上。
自行车儿童座椅|La silla portabebé está colocada detrás del sillín de la bicicleta familiar.|儿童座椅装在家用自行车车座后面。
自行车道|El carril bici nos permite llegar al parque sin compartir espacio con los coches.|沿自行车道去公园，我们不用和汽车共用道路。
补胎工具包|Llevamos un kit de reparación de neumáticos por si tenemos problemas durante la excursión.|我们带着补胎工具包，以防途中遇到问题。
反光背心|El chaleco reflectante hace que los demás vean mejor a la ciclista al anochecer.|天黑时，反光背心让别人更容易看到骑车人。
骑行短裤|El ciclista lleva culotte de ciclismo durante sus recorridos largos por carretera.|骑车人在公路长途骑行时穿骑行短裤。
骑自行车|Nos gusta ir en bicicleta al mercado cuando no tenemos muchas compras que llevar.|不用带太多东西时，我们喜欢骑车去市场。
出去骑车兜风|El domingo vamos a dar una vuelta en bici antes de comer con la familia.|星期天我们先出去骑车兜风，再和家人吃饭。
自行车铃|Toco el timbre de la bicicleta para avisar de mi presencia al acercarme.|靠近时，我按自行车铃，提醒别人我来了。
自行车锁|Sujetamos las bicicletas al aparcabicis con un candado antes de visitar el museo.|参观博物馆前，我们用锁把自行车锁在车架上。
前灯|La luz delantera ilumina el camino cuando volvemos a casa por la noche.|我们晚上回家时，前灯照亮道路。
头盔|Ajusto el casco antes de subir a la bicicleta y salir con mis amigos.|上车和朋友出发前，我调整好头盔。
打气筒|Usamos la bomba para inflar el neumático de la bicicleta antes del paseo.|骑车出行前，我们用打气筒给自行车轮胎充气。
反光片|El reflector de la bicicleta devuelve la luz de los coches que se acercan.|自行车的反光片反射靠近车辆的灯光。
自行车刹车|La mecánica ajusta el freno de la bicicleta antes de devolvérsela al cliente.|机械师把自行车交还客户前，调整好刹车。`.split('\n').map(x=>x.split('|'));
if(rows.length!==100)throw Error(rows.length);
const source=JSON.parse(fs.readFileSync('data/collins-spanish-source.json','utf8'));
const entries=source.entries.slice(400,500).map((r,i)=>({id:r.id,w:r.word.replace('lavachoches','lavacoches').replace('chalecho','chaleco'),uk:'',us:'',senses:[{pos:r.kind==='phrase'?'短语':'词汇',zh:rows[i][0],en:r.en.replace(/^vocabulary |^accessories /,'')}],ex:[{en:rows[i][1],zh:rows[i][2]}],col:[],fam:[],syn:[],ant:[],tip:'',cefr:'入门',topic:'chapter-'+r.chapter,exampleLevel:'A2',note:`Collins Spanish 3000 · 原书第 ${r.page} 页 · 第 ${i+401} 条；自编例句 A2`,m:0}));
fs.writeFileSync('data/spanish-batches/005.entries.json',JSON.stringify(entries,null,2));

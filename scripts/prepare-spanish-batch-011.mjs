import fs from 'node:fs';
const rows=`连锁零售企业|La cadena comercial ha abierto una tienda nueva en el barrio donde vivimos desde el año pasado.|那家连锁企业在我们从去年起居住的街区开了新店。
现金|Llevo algo de dinero en efectivo por si en alguno de los puestos del mercado no aceptan tarjetas.|我带了一些现金，以防市场里有摊位不收卡。
找零|La dependienta me entrega la vuelta después de comprobar el billete con el que he pagado la compra.|店员确认我付的纸币后，把找零交给我。
非接触式|El pago sin contacto nos permite terminar la compra acercando la tarjeta al lector que hay junto a la caja.|非接触支付让我们把卡靠近收银台旁的读卡器就能完成付款。
礼品券|Con el cheque regalo que recibí por mi cumpleaños puedo elegir algo en la tienda de mis amigos.|我能用生日收到的礼品券，在朋友的店里挑选东西。
个人密码|El lector solicita el PIN y la clienta termina de pagar antes de recoger sus bolsas.|读卡器要求输入密码，顾客付完款后取走购物袋。
换货|Preguntamos por el cambio de la chaqueta porque la talla que elegimos resulta demasiado pequeña.|我们选的夹克尺码太小，因此询问换货事宜。
退款|La clienta solicita el reintegro y muestra el tique de la compra que hizo la semana pasada.|顾客申请退款，出示上周购物的小票。
购物代金券|El vale que guardamos en la cartera tiene una fecha que debemos comprobar antes de utilizarlo.|我们放在钱包里的代金券有日期，使用前需要查看。
店员|La dependienta nos indica dónde están los productos que no hemos encontrado después de recorrer varios pasillos.|我们走过几个通道仍没找到商品，店员告诉我们位置。
浏览；随便看看|Nos gusta mirar las tiendas del centro antes de decidir si vamos a comprar algo para la casa.|决定是否买家用品前，我们喜欢先逛逛市中心的店。
购买|Queremos comprar una mesa que sea lo bastante grande para reunir a toda la familia los domingos.|我们想买一张够大的桌子，让全家周日能聚在一起。
付款|Al pagar comprobamos el importe que aparece en la pantalla mientras la dependienta prepara nuestras bolsas.|付款时，我们看屏幕上的金额，店员则准备购物袋。
网上购物|Prefiero comprar en línea los productos que ya conozco, pero me gusta visitar las tiendas cuando necesito probar algo.|熟悉的商品我更愿意网上买，需要试用时则喜欢去实体店。
采购日用品|Antes de hacer la compra organizamos una lista con lo que falta para preparar las comidas de la semana.|采购前，我们先列出这周做饭还缺的东西。
纸币|Los billetes de banco están guardados en una parte de la cartera que se cierra con una cremallera.|纸币收在钱包里一个用拉链封口的夹层中。
读卡器|El lector de tarjetas está orientado hacia el cliente para que pueda comprobar el importe antes de pagar.|读卡器朝向顾客，便于付款前核对金额。
硬币|Busco unas monedas en el bolsillo mientras mi hermana espera junto a la máquina que vende los billetes.|我在口袋里找硬币，姐妹在售票机旁等候。
借记卡／信用卡|La tarjeta de débito que utilizo para las compras está en el mismo bolsillo que la tarjeta de transporte.|购物用的借记卡和交通卡放在同一个口袋里。
纸袋|La bolsa de papel contiene los regalos pequeños que hemos comprado para llevar a la cena de nuestros amigos.|纸袋里装着我们带去朋友晚餐的小礼物。
塑料袋|Guardamos la bolsa de plástico para volver a utilizarla cuando tengamos que llevar algo al mercado.|我们留着塑料袋，下次带东西去市场时再用。
购物小票|Reviso el tique de compra antes de guardarlo con los documentos de los otros productos que hemos comprado.|我检查购物小票，再把它和其他购物凭据收在一起。
可重复使用购物袋|Llevamos una bolsa reutilizable cuando vamos al supermercado para no necesitar otra cada vez que compramos algo.|去超市时我们带可重复使用购物袋，免得每次都拿新袋。
收银台|En la caja esperamos nuestro turno mientras la persona que va delante termina de colocar su compra en las bolsas.|收银台前，我们等前面的顾客把东西装进袋子。
食品杂货|Los comestibles que compramos hoy deben alcanzar para las comidas que vamos a preparar durante el fin de semana.|今天买的食品杂货，要够周末做饭使用。
过道|El pasillo de los productos de desayuno está al fondo de la tienda, junto a la zona de las bebidas.|早餐用品通道在商店深处，靠近饮品区。
积分卡|La tarjeta de puntos está en el móvil y la mostramos cuando terminamos de hacer la compra del mes.|积分卡存在手机里，每月购物结账时我们会出示。
熟食精品店|En la tienda de delicatessen buscamos un queso que pueda acompañar el pan que acabamos de comprar.|我们在熟食店挑奶酪，想搭配刚买的面包。
即食餐；预制餐|La comida preparada está en una sección refrigerada que vemos al pasar junto a los productos frescos.|即食餐放在冷藏区，我们经过生鲜商品时能看到。
瓶子|La botella que elegimos tiene un tamaño adecuado para llevar agua durante el paseo que hemos organizado para mañana.|选好的瓶子大小合适，能带水去参加明天的散步。
盒子|La caja de galletas está en el estante donde guardamos los productos que ofrecemos cuando vienen visitas a merendar.|饼干盒放在存放招待客人吃点心的食品架上。
纸盒包装|El cartón de leche está junto a los vasos que hemos preparado para el desayuno de toda la familia.|牛奶纸盒旁摆着为全家早餐准备的杯子。
罐子|El tarro de mermelada tiene una etiqueta que indica la fruta con la que se ha elaborado el producto.|果酱罐标签上写着制作这种果酱所用的水果。
一包|El paquete que tenemos en la cesta contiene la pasta que vamos a cocinar para la cena de esta noche.|篮子里的那一包是我们今晚晚饭要煮的意面。
罐头盒|La lata está en la despensa, junto a otros alimentos que conservamos para preparar comidas cuando tenemos poco tiempo.|罐头放在储物间里，和没时间时便于做饭的其他食物放在一起。
罐装的|El tomate enlatado que hemos comprado servirá para la salsa que vamos a preparar con nuestros amigos esta tarde.|买来的罐装番茄，将用于下午和朋友一起做的酱汁。
新鲜的|Preferimos el pan fresco que venden en la tienda de la esquina cuando abre por la mañana.|我们更喜欢街角商店早上开门时卖的新鲜面包。
冷冻的|El pescado congelado está en una sección del supermercado que visitamos al final de nuestro recorrido por la tienda.|冷冻鱼在超市里我们最后才逛到的区域。
购物篮|Cogemos una cesta al entrar porque solo necesitamos algunos productos para preparar el desayuno de mañana.|进店时我们拿一个购物篮，因为只需买明天早餐用的几样东西。
秤|Colocamos las manzanas en el peso para saber cuánto van a costar antes de pasar por la caja.|我们把苹果放在秤上，结账前了解价格。
购物车|El carro está lleno de los alimentos que vamos a compartir con la familia durante los próximos días.|购物车里满是接下来几天要与家人分享的食物。
饼干|Las galletas que compramos llevan una mezcla de ingredientes que podemos consultar en la parte posterior del paquete.|买来的饼干使用了多种原料，可在包装背面查看。
库斯库斯|Preparamos cous cous con verduras para ofrecer una comida distinta a los amigos que vienen a vernos el domingo.|我们做蔬菜库斯库斯，周日给来访朋友换换口味。
香草|Las hierbas que compramos en el mercado darán más sabor a la salsa que estamos preparando para la cena.|市场买来的香草会为我们正在做的晚餐酱汁增添风味。
蜂蜜|La miel está en un tarro pequeño que colocamos junto al pan cuando desayunamos todos juntos durante el fin de semana.|蜂蜜放在小罐里，周末全家吃早餐时摆在面包旁。
糖粉|El azúcar glas está preparado junto al pastel que vamos a llevar a la celebración de nuestros vecinos.|糖粉放在蛋糕旁，蛋糕是我们准备带去参加邻居庆祝活动的。
速溶咖啡|El café instantáneo se guarda en un armario donde también tenemos las tazas que utilizamos cuando viajamos.|速溶咖啡放在一个柜里，里面也有旅行用的杯子。
果酱|La mermelada que elegimos está hecha con la fruta que mi abuela solía recoger en su jardín.|我们选的果酱，用的水果正是祖母过去常在花园采的那种。
番茄调味酱|El ketchup está en una botella que pasamos a quien quiere añadir un poco a su comida.|番茄调味酱装在瓶子里，谁想加一些，我们就递给谁。
扁豆|Las lentejas forman parte del guiso que hemos preparado para las personas que vienen a comer mañana.|我们为明天来吃饭的人做的炖菜里放了扁豆。
橘皮果酱|La mermelada de naranja tiene un sabor distinto al de las otras mermeladas que solemos tomar con las tostadas.|橘皮果酱的味道，与我们常抹吐司的其他果酱不同。
蛋黄酱|La mayonesa está al lado de la ensalada que hemos llevado a la comida organizada por nuestros amigos.|蛋黄酱放在沙拉旁，那是我们带去朋友聚餐的菜。
橄榄油|El aceite de oliva que usamos para la ensalada procede de una localidad que visitamos durante nuestro último viaje.|沙拉用的橄榄油，产自我们上次旅行到过的地方。
意大利面|La pasta que hemos comprado tiene una forma que combina bien con la salsa de verduras que preparamos en casa.|买来的意面形状，很适合搭配我们自制的蔬菜酱。
胡椒|La pimienta está en un molinillo que colocamos en el centro de la mesa antes de servir la comida.|胡椒装在研磨器里，上菜前我们把它放到餐桌中央。
米|El arroz que guardamos en la despensa nos sirve para varios de los platos que solemos preparar entre semana.|储物间的米可以做成我们平日常吃的好几道饭菜。
盐|La sal está junto a las especias que utilizamos para preparar las verduras que acompañan el plato principal.|盐放在调味香料旁，用来做搭配主菜的蔬菜。
香辛料|Elegimos varias especias en el mercado para probar una receta que nos enseñó una amiga durante las vacaciones.|我们在市场选几种香辛料，想试做朋友假期教的菜。
糖|El azúcar está en un recipiente que dejamos sobre la mesa cuando servimos el café después de comer.|糖放在容器里，饭后上咖啡时我们把它摆上桌。
茶包|Las bolsitas de té están organizadas en una caja que permite elegir fácilmente el sabor que prefiere cada invitado.|茶包分放在盒子里，客人可以轻松挑喜欢的口味。
植物油|El aceite vegetal se encuentra en el estante donde guardamos los ingredientes que usamos con más frecuencia para cocinar.|植物油放在存放常用烹饪食材的架子上。
醋|El vinagre que ponemos en la mesa acompaña la ensalada que cada persona puede aliñar según sus preferencias.|餐桌上的醋可以给沙拉调味，各人按喜好添加。
巧克力|El chocolate que compramos está dividido en porciones pequeñas para compartirlo con los amigos que vienen a merendar.|买来的巧克力分成小块，便于和来吃点心的朋友分享。
薯片|Las patatas fritas están en un cuenco que hemos colocado junto a las bebidas para recibir a los invitados.|薯片装在碗里，和饮料一起摆着迎接客人。
坚果|Los frutos secos que elegimos están en un puesto del mercado donde también venden frutas deshidratadas y especias.|选好的坚果来自一个也卖果干和香辛料的市场摊位。
橄榄|Las aceitunas se sirven en un plato pequeño mientras esperamos que todos los invitados terminen de llegar a casa.|客人还在陆续到来，我们先上一小碟橄榄。
爆米花|Preparamos las palomitas antes de elegir la película que vamos a ver todos juntos después de cenar.|晚饭后，我们先准备爆米花，再选要一起看的电影。
糖果|Las golosinas están en una bolsa que guardamos para repartirlas durante la fiesta que hemos organizado en el jardín.|糖果放在一个袋里，准备在花园聚会时分给大家。
啤酒|Las botellas de cerveza están en el mostrador del bar, junto a las bebidas que han pedido otros clientes.|啤酒瓶摆在酒吧柜台上，旁边是其他顾客点的饮品。
汽水|La bebida con burbujas está en una botella transparente que hemos colocado en la mesa junto a varios vasos.|汽水装在透明瓶里，和几个杯子一起放在桌上。
果汁|El zumo de frutas que hemos preparado acompaña el desayuno que tomamos cuando podemos levantarnos sin prisa.|自制果汁搭配着我们不用赶时间起床时吃的早餐。
烈酒|Las bebidas alcohólicas se encuentran en un estante distinto del que ocupa el resto de los productos de la tienda.|烈酒放在商店里一个与其他商品分开的架子上。
无气／气泡矿泉水|Pedimos agua sin gas para acompañar la comida que vamos a compartir en el restaurante de la plaza.|我们点无气矿泉水，搭配在广场餐馆共享的饭菜。
葡萄酒|El vino está en una botella que los clientes observan mientras el camarero describe las opciones de la carta.|顾客看着瓶装葡萄酒，服务员介绍酒单上的选项。
集市广场|La plaza se llena de puestos durante la mañana y después vuelve a ser un lugar tranquilo para pasear.|早上市集广场摆满摊位，之后又恢复为安静的散步场所。
跳蚤市场|En el mercadillo encontramos objetos antiguos que nos recuerdan los que había en la casa de nuestros abuelos.|我们在跳蚤市场看到一些老物件，想起祖父母家以前的东西。
室内市场|El mercado cubierto permite hacer la compra con calma incluso en los días en que llueve durante toda la mañana.|即使一上午都下雨，室内市场也能让人从容购物。
农夫市场|Visitamos el mercado de productores para conocer a las personas que cultivan los alimentos que compramos cada semana.|我们逛农夫市场，认识种植每周所购物品的人。
本地的|El producto local que elegimos se elabora en un pueblo situado a pocos kilómetros de la ciudad donde vivimos.|选中的本地产品，制作地在离我们所住城市几公里的村镇。
有机的|El puesto de productos ecológicos tiene etiquetas que los clientes consultan antes de elegir lo que van a comprar.|有机产品摊位上有标签，顾客购物前会先查看。
当季的|Buscamos fruta de temporada para preparar el postre que vamos a compartir con nuestros amigos después de la cena.|我们挑应季水果，准备做成饭后与朋友分享的甜点。
家常制作的|El pastel casero que ha traído mi hermana está junto a los platos que hemos preparado para la merienda.|姐妹带来的自制蛋糕，放在下午点心用的盘子旁。
顾客|Los clientes esperan mientras el vendedor coloca en bolsas los productos que acaban de elegir en el puesto.|摊主把刚挑好的商品装袋时，顾客们在等候。
摊位|El puesto que visitamos cada sábado tiene frutas distintas según la estación en la que hacemos la compra.|我们每周六光顾的摊位，会随购物季节不同而出售不同水果。
商贩|La comerciante nos explica de dónde proceden las verduras que ha recibido esa mañana en su puesto.|商贩向我们介绍当天早上新到蔬菜的产地。
篮子|La cesta está llena de los productos que hemos elegido antes de recorrer los últimos puestos del mercado.|还没逛完市场最后几个摊位，篮子就装满了选好的东西。
塑料袋|La bolsa de plástico contiene las verduras que vamos a separar y guardar cuando lleguemos a casa después del mercado.|塑料袋装着蔬菜，我们从市场回家后会分类存放。
农产品|Los productos del puesto están ordenados de forma que podemos ver fácilmente los precios de cada variedad.|摊位农产品摆放整齐，每一品种的价格都很容易看见。
木条箱|La caja de madera está debajo del puesto y contiene la fruta que el comerciante todavía no ha colocado.|木条箱在摊位下，里面是商贩还没摆出来的水果。
食品杂货店|La tienda de comestibles abre los domingos por la mañana y nos permite comprar lo que falta para la comida.|杂货店周日上午开门，我们能买到午餐缺的东西。
汁液|El zumo que sale de la naranja cae en el recipiente que hemos colocado debajo del exprimidor.|橙子挤出的汁液，落进我们放在榨汁器下的容器里。
叶子|La hoja de la planta tiene un color más claro que las que crecieron durante las semanas anteriores.|这株植物的新叶，颜色比前几周长出的叶子更浅。
果皮|Quitamos la piel de la manzana antes de cortarla en los trozos que vamos a añadir al postre.|我们先削苹果皮，再切成做甜点用的小块。
果核中的籽|La pepita está en el centro de la manzana que hemos cortado para observar sus distintas partes.|我们切开苹果观察各部分，籽就在中央。
厚果皮|La cáscara de la naranja queda sobre la tabla mientras separamos los gajos que vamos a poner en la ensalada.|我们分开橙子瓣放沙拉时，厚果皮留在砧板上。
种子|La semilla que sacamos del fruto es parecida a las que vimos al visitar el huerto de nuestros vecinos.|从果实取出的种子，和参观邻居菜园时见到的相似。
一瓣水果|Cada gajo de mandarina se separa con facilidad antes de repartir la fruta entre las personas que están en la mesa.|橘子瓣很容易掰开，便于分给同桌的人。
水果表皮|La piel de esta fruta tiene un color intenso que contrasta con el de la pulpa que aparece al cortarla.|这种水果的表皮颜色浓烈，与切开后的果肉形成对比。
硬果核|El hueso del melocotón está en el centro y lo dejamos aparte antes de cortar la fruta para el postre.|桃子的硬核在中央，我们把它取出，再切水果做甜点。
新鲜的|El alimento fresco que hemos elegido se encuentra junto a otros productos que han llegado al mercado esta misma mañana.|选好的新鲜食物，和当天早上刚到市场的其他商品放在一起。`.split('\n').map(x=>x.split('|'));
if(rows.length!==100)throw Error(rows.length);
const src=JSON.parse(fs.readFileSync('data/collins-spanish-source.json'));const entries=src.entries.slice(1000,1100).map((r,i)=>({id:r.id,w:r.word.replace(/ f$/,''),uk:'',us:'',senses:[{pos:r.kind==='phrase'?'短语':'词汇',zh:rows[i][0],en:r.en.replace(/^vocabulary |^general |^groceries |^snacks |^drinks |^marketplace /,'')}],ex:[{en:rows[i][1],zh:rows[i][2]}],col:[],fam:[],syn:[],ant:[],tip:'',cefr:'入门',topic:'chapter-'+r.chapter,exampleLevel:'B1',note:`Collins Spanish 3000 · 原书第 ${r.page} 页 · 第 ${i+1001} 条；自编例句 B1`,m:0}));fs.writeFileSync('data/spanish-batches/011.entries.json',JSON.stringify(entries,null,2));

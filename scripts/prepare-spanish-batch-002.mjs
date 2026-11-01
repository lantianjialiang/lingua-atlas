import fs from 'node:fs';
const rows=`他／她怎么样？|¿Cómo está ella esta mañana?|她今天早上怎么样？
他们怎么样？|¿Cómo están tus padres hoy?|你的父母今天怎么样？
很好，谢谢。你呢？|Muy bien, gracias. ¿Y tú, Ana?|很好，谢谢。安娜，你呢？
很好，谢谢。|Bien, gracias. Hoy tengo tiempo libre.|很好，谢谢。我今天有空。
太棒了！|¡Fenomenal! Hoy vamos a la playa.|太棒了！今天我们去海滩。
一般般。|Así, así. Tengo un poco de sueño.|一般般。我有点困。
相当好，谢谢。|Bastante bien, gracias. Estoy en casa.|相当好，谢谢。我在家。
还过得去。|Voy tirando, pero necesito unas vacaciones.|还过得去，不过我需要休假。
糟透了。|Fatal. Tengo mucho trabajo esta semana.|糟透了。我这周有很多工作。
我很好。|Estoy bien y quiero dar un paseo.|我很好，想去散散步。
我累了。（男性）|Estoy cansado después de caminar tanto.|走了这么久，我累了。
我饿了／渴了。|Tengo hambre y sed después del paseo.|散步后，我又饿又渴。
我吃饱了。（男性）|Estoy lleno, no quiero más pan.|我吃饱了，不想再吃面包了。
我冷。|Tengo frío porque la ventana está abierta.|我冷，因为窗户开着。
我热。|Tengo calor y necesito un poco de agua.|我热，需要一点水。
我处于……状态。|Estoy tranquilo en casa con mi familia.|我和家人在家，心情平静。
他／她处于……状态。|Está contenta con su nuevo trabajo.|她对新工作很满意。
他们处于……状态。|Están cansados después del viaje en tren.|坐火车旅行后，他们累了。
高兴的|Estoy contento con mi nueva bicicleta.|我很喜欢我的新自行车。
兴奋的|Luis está entusiasmado con el viaje.|路易斯对这次旅行很兴奋。
惊讶的|Estoy sorprendido por este regalo tan bonito.|收到这么漂亮的礼物，我很惊讶。
恼火的|Pablo está enfadado por el ruido.|巴勃罗因噪声而恼火。
生气的|El padre está enfadado con su hijo.|父亲在生儿子的气。
难过的|Ana está triste porque su amigo se va.|安娜很难过，因为她的朋友要走了。
担心的|Estoy preocupado por el examen de mañana.|我担心明天的考试。
情绪低落的|Se siente deprimido y habla con un amigo.|他情绪低落，和一位朋友谈心。
无聊的|El niño está aburrido en la sala.|男孩在房间里觉得无聊。
我害怕。|Tengo miedo cuando oigo ruidos de noche.|晚上听到声响时，我会害怕。
我感觉……|Me siento tranquilo después de hablar contigo.|和你交谈后，我感到平静。
他／她感觉……|Se siente feliz con sus amigos del colegio.|他和学校的朋友们在一起时感到快乐。
他们感觉……|Se sienten cansados después de trabajar tanto.|干了这么多活后，他们感到疲倦。
好；身体好|Mi abuela se siente bien esta mañana.|我祖母今天早上身体感觉不错。
身体不适|Me siento mal y necesito descansar en casa.|我身体不舒服，需要在家休息。
更好|Hoy me siento mejor y salgo a caminar.|今天我感觉好些了，出门走走。
更糟|Hoy me siento peor y llamo al médico.|今天我感觉更糟了，便给医生打电话。
你在哪里工作？|¿Dónde trabajas ahora, cerca de tu casa?|你现在在哪里工作，离你家近吗？
你做什么工作？|¿A qué te dedicas, además de estudiar?|除了读书，你还做什么工作？
你的职业是什么？|¿Cuál es tu ocupación en esta empresa?|你在这家公司的工作是什么？
你工作还是上学？|¿Trabajas o estudias en esta ciudad?|你在这座城市工作还是上学？
我是个体经营者。（男性）|Soy autónomo y trabajo con varios clientes.|我是个体经营者，和几位客户合作。
我失业了。|Estoy en paro y busco trabajo cada día.|我失业了，每天都在找工作。
我在读大学。|Estoy en la universidad y estudio historia.|我在读大学，学习历史。
我退休了。（男性）|Estoy jubilado y tengo tiempo para leer.|我退休了，有时间看书。
我以旅行为主要活动。|Ahora me dedico a viajar por España.|现在我主要在西班牙各地旅行。
我在家办公。|Trabajo desde casa y preparo mi comida.|我在家办公，自己准备饭菜。
我做兼职／全职工作。|Trabajo a tiempo parcial en una tienda.|我在一家商店做兼职。
我做……工作。|Trabajo de camarero en un restaurante pequeño.|我在一家小餐馆当服务员。
我是……（职业）。|Soy profesora y trabajo cerca de casa.|我是老师，在家附近工作。
我是店员。|Soy dependiente y ayudo a los clientes.|我是店员，帮助顾客。
我的姐妹是工程师。|Mi hermana es ingeniera y diseña puentes.|我的姐妹是工程师，设计桥梁。
建筑工人；泥瓦工|El albañil construye una pared de ladrillos.|泥瓦工在砌一堵砖墙。
主厨|La chef prepara la cena para los invitados.|主厨为客人准备晚餐。
公务员|La funcionaria atiende a una familia en su oficina.|公务员在办公室接待一家人。
清洁工|El limpiador limpia las ventanas de la escuela.|清洁工在擦学校的窗户。
厨师|La cocinera corta verduras para la sopa.|厨师在切煮汤用的蔬菜。
牙医|La dentista revisa los dientes de un niño.|牙医在检查一个孩子的牙齿。
医生|El médico escucha al paciente con atención.|医生仔细听患者讲述。
司机|La conductora lleva a los pasajeros al aeropuerto.|司机把乘客送往机场。
电工|La electricista repara una lámpara en la cocina.|电工在厨房修灯。
工程师|El ingeniero trabaja con los planos del puente.|工程师在研究桥梁图纸。
农民|La agricultora recoge tomates en el campo.|农民在田里收西红柿。
消防员|El bombero ayuda a una familia a salir.|消防员帮助一家人撤离。
渔民|La pescadora prepara sus redes junto al barco.|渔民在船边整理渔网。
信息技术工作人员|El informático instala un programa en mi ordenador.|信息技术人员在我的电脑上安装软件。
木工|La carpintera hace una mesa de madera.|木工在制作一张木桌。
记者|La periodista entrevista a una mujer en la plaza.|记者在广场采访一位女士。
律师|El abogado explica el documento a su cliente.|律师向客户解释文件内容。
机械师；修理工|La mecánica repara un coche en el taller.|修理工在车间修汽车。
护士|El enfermero ayuda al paciente a levantarse.|护士帮助患者起身。
办公室职员|La oficinista organiza los documentos de la empresa.|办公室职员整理公司的文件。
水管工|El fontanero repara el grifo del baño.|水管工在修浴室的水龙头。
警察|La agente de policía ayuda a un turista.|女警察帮助一名游客。
邮递员|El cartero entrega una carta a mi abuela.|邮递员给我的祖母送来一封信。
小学教师|La maestra enseña a leer a los niños.|小学老师教孩子们识字。
水手|El marinero limpia la cubierta del barco.|水手在清洗船的甲板。
销售人员|La vendedora muestra una chaqueta a una clienta.|销售员向一位女顾客展示夹克。
科学家|La científica observa las plantas en el laboratorio.|科学家在实验室观察植物。
中学教师|El profesor explica un problema a sus alumnos.|中学老师向学生解释一道题。
士兵|La soldado lleva agua a un pueblo aislado.|女兵把水送到一个偏远村庄。
兽医|El veterinario examina al perro de mi vecino.|兽医在检查我邻居的狗。
男服务员|El camarero trae la cuenta después del café.|喝完咖啡后，男服务员送来账单。
女服务员|La camarera sirve la comida en la terraza.|女服务员在露台上餐。
我在……工作。|Trabajo en un hotel cerca de la estación.|我在车站附近的一家酒店工作。
生意；商铺|Mi padre abre su negocio a las ocho.|我父亲八点开门营业。
公司|La empresa tiene una oficina en esta ciudad.|这家公司在这座城市有一个办公室。
建筑工地|Los trabajadores llevan casco en la obra.|工人在工地戴着安全帽。
工厂|La fábrica produce muebles para varias tiendas.|这家工厂为几家商店生产家具。
政府|El gobierno construye una escuela en el pueblo.|政府在村里建一所学校。
医院|Mi madre trabaja en el hospital de noche.|我母亲在医院上夜班。
酒店|El hotel tiene habitaciones con vistas al mar.|这家酒店有能看到海景的客房。
办公室|La oficina está cerrada durante el fin de semana.|办公室周末不开放。
餐馆|El restaurante sirve pescado fresco todos los días.|这家餐馆每天供应新鲜的鱼。
学校|El colegio está cerca del parque de mi barrio.|学校靠近我家街区的公园。
商店|La tienda vende fruta y pan recién hecho.|这家商店出售水果和新鲜出炉的面包。
早晨；上午|Por la mañana camino al trabajo con mi hermana.|早上我和姐妹一起步行去上班。
下午|Por la tarde estudio español antes de cenar.|下午我在吃晚饭前学习西班牙语。
晚上|Por la noche cenamos juntos y hablamos del día.|晚上我们一起吃饭，聊聊这一天。
夜晚|Durante la noche, la calle está tranquila y oscura.|夜里街道安静而昏暗。
中午|Al mediodía comemos en una terraza cerca del trabajo.|中午我们在工作地点附近的露台吃饭。
午夜|A medianoche las luces del pueblo siguen encendidas.|到了午夜，村庄的灯还亮着。`.split('\n').map(x=>x.split('|'));
if(rows.length!==100)throw Error('Expected100 got '+rows.length);
const book=JSON.parse(fs.readFileSync('data/collins-spanish-source.json','utf8'));
const entries=book.entries.slice(100,200).map((r,i)=>({id:r.id,w:r.word,uk:'',us:'',senses:[{pos:r.kind==='phrase'?'短语':'词汇',zh:rows[i][0],en:r.en}],ex:[{en:rows[i][1],zh:rows[i][2]}],col:[],fam:[],syn:[],ant:[],tip:'',cefr:'入门',topic:'essentials',exampleLevel:'A1',note:`Collins Spanish 3000 · 原书第 ${r.page} 页 · 第 ${i+101} 条；自编例句难度 A1`,m:0}));
fs.mkdirSync('data/spanish-batches',{recursive:true});
fs.writeFileSync('data/spanish-batches/002.entries.json',JSON.stringify(entries,null,2));
fs.writeFileSync('data/spanish-batches/002.jobs.json',JSON.stringify(entries.map(x=>({id:x.id,word:x.w,example:x.ex[0].en,zh:x.ex[0].zh})),null,2));
console.log('Prepared100 examples for batch2');

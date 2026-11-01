import fs from 'node:fs';
const pairs=`¡Adiós, Pablo!|再见，巴勃罗！
¡Que pases un buen día, Ana!|安娜，祝你度过愉快的一天！
Encantado de conocerte, Luis.|路易斯，很高兴认识你。
Sí, quiero un café.|是的，我想要一杯咖啡。
No, hoy no puedo ir.|不，我今天不能去。
No sé la respuesta.|我不知道答案。
Un café, por favor.|请给我一杯咖啡。
Sí, por favor, un vaso de agua.|好的，请给我一杯水。
Gracias por tu ayuda.|谢谢你的帮助。
No, gracias, ya he comido.|不用了，谢谢，我已经吃过了。
Perdone, ¿dónde está la estación?|劳驾，车站在哪里？
¿Perdón? No oigo bien.|您说什么？我听不清。
Lo siento, llego tarde.|对不起，我迟到了。
¡De acuerdo! Nos vemos a las cinco.|好的！我们五点见。
De nada, es un placer ayudarte.|不客气，很高兴能帮你。
No entiendo esta palabra.|我不明白这个单词。
¿Cuántos años tienes, Ana?|安娜，你多大了？
¿Puedo preguntarle qué edad tiene?|请问您多大年纪？
¿Cuándo es tu cumpleaños, Luis?|路易斯，你的生日是什么时候？
Tengo veinte años.|我二十岁。
Mi cumpleaños es el diez de mayo.|我的生日是五月十日。
Nací el tres de junio.|我出生于六月三日。
¿De dónde eres, María?|玛丽亚，你来自哪里？
¿Dónde vives ahora?|你现在住在哪里？
Vivo en Madrid.|我住在马德里。
Soy de China.|我来自中国。
Mi familia vive en el Reino Unido.|我的家人住在英国。
Soy estudiante.|我是学生。
Mi amigo es escocés.|我的朋友是苏格兰人。
Mi profesor es inglés.|我的老师是英格兰人。
Mi vecino es irlandés.|我的邻居是爱尔兰人。
Mi abuelo es galés.|我的祖父是威尔士人。
Mi compañero es británico.|我的同伴是英国人。
¿Estás casado o soltero, Pablo?|巴勃罗，你已婚还是单身？
¿Estás casada o soltera, Ana?|安娜，你已婚还是单身？
Estoy casado y vivo en Sevilla.|我已婚，住在塞维利亚。（男性）
Estoy soltera y vivo en Madrid.|我单身，住在马德里。（女性）
Tengo pareja y vivimos juntos.|我有伴侣，我们住在一起。
Estoy divorciado desde hace dos años.|我离婚两年了。（男性）
Estoy divorciada desde hace tres años.|我离婚三年了。（女性）
¿Tienes hijos, Marta?|玛尔塔，你有孩子吗？
Tengo dos hijos.|我有两个孩子。
No tengo hijos, pero tengo un perro.|我没有孩子，不过我有一只狗。
Este es mi hermano.|这是我的兄弟。
Estas son mis amigas.|这些是我的朋友们。（女性）
Esta es mi mujer, Ana.|这是我的妻子安娜。
Estos son mis padres.|这些是我的父母。
El marido prepara la cena.|丈夫在准备晚餐。
Mi mujer lee en el jardín.|我的妻子在花园看书。
El hijo ayuda a su padre.|儿子帮助父亲。
La hija dibuja una casa.|女儿在画一座房子。
El niño y la niña juegan en el parque.|男孩和女孩在公园玩。
Mi pareja cocina muy bien.|我的伴侣很会做饭。
Mi novio me trae flores.|我的男朋友给我带来鲜花。
Mi novia toca la guitarra.|我的女朋友弹吉他。
Mi prometido y yo preparamos la boda.|我和未婚夫在筹备婚礼。
El padre lleva a su hijo al colegio.|父亲送儿子上学。
La madre abraza a su hija.|母亲拥抱女儿。
Mi hermano juega al fútbol.|我的兄弟踢足球。
Mi hermana pinta un cuadro.|我的姐妹画了一幅画。
El abuelo cuenta una historia.|祖父在讲故事。
La abuela hace una tarta.|祖母在做蛋糕。
El nieto pasea con su abuelo.|孙子和祖父散步。
La nieta visita a su abuela.|孙女去看望祖母。
Mi suegro trabaja en el jardín.|我的岳父在花园里干活。
Mi suegra prepara una sopa.|我的岳母在煮汤。
La nuera ayuda a poner la mesa.|儿媳帮忙摆餐具。
El yerno lava los platos.|女婿在洗碗。
Mi cuñado monta en bicicleta.|我的姐夫骑自行车。
Mi cuñada compra fruta.|我的嫂子在买水果。
Mi padrastro me ayuda con los deberes.|我的继父帮我做作业。
Mi madrastra prepara el desayuno.|我的继母在准备早餐。
Mi hijastro aprende a nadar.|我的继子在学游泳。
Mi hijastra lee un cuento.|我的继女在读故事。
Mi hermanastro juega conmigo.|我的继兄弟和我一起玩。
Mi hermanastra estudia conmigo.|我的继姐妹和我一起学习。
Mi tío conduce un coche rojo.|我的叔叔开着一辆红色汽车。
Mi tía riega las flores.|我的阿姨给花浇水。
Mi sobrino construye una torre.|我的侄子在搭一座塔。
Mi sobrina dibuja un gato.|我的侄女在画一只猫。
Mi primo y mi prima juegan al tenis.|我的堂兄和堂姐打网球。
Mi amigo y mi amiga toman un café.|我的男性朋友和女性朋友在喝咖啡。
Mi vecino me saluda cada mañana.|我的邻居每天早上向我问好。
¿Cómo estás, María?|玛丽亚，你好吗？
¿Qué tal? Vamos a tomar un café.|最近怎么样？我们去喝杯咖啡吧。`;
const rows=pairs.split('\n').map(x=>x.split('|'));if(rows.length!==85)throw Error(rows.length);
const p='public/spanish/entries/0.json';const e=JSON.parse(fs.readFileSync(p));e.slice(15).forEach((x,i)=>{x.ex=[{en:rows[i][0],zh:rows[i][1]}];});fs.writeFileSync(p,JSON.stringify(e,null,2));fs.writeFileSync('data/spanish-image-jobs.json',JSON.stringify(e.slice(15).map(x=>({id:x.id,word:x.w,example:x.ex[0].en,zh:x.ex[0].zh})),null,2));

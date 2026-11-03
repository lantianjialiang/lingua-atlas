import fs from 'node:fs';
const rows = `电池|La batería del teléfono estaba casi vacía cuando llegamos a la estación, así que buscamos un enchufe cerca de la sala de espera.|我们到车站时手机电池快没电了，于是在候车室附近找插座。
线缆|El cable que conecta la pantalla con el ordenador pasa por detrás de la mesa para que nadie tropiece al entrar en la oficina.|连接显示器和电脑的线缆从桌后经过，免得有人进办公室时绊倒。
打电话|Necesito hacer una llamada de teléfono antes de salir, porque todavía no hemos confirmado a qué hora nos recogerán en la estación.|出门前我得打个电话，因为我们还没确认对方几点到车站接我们。
留下语音留言|Si no consigues hablar con la recepción, puedes dejar un mensaje de voz para que te llamen cuando termine la reunión de esta mañana.|如果联系不上前台，可以留下语音留言，让他们上午会议结束后回电。
网上发布|Antes de publicar en línea las fotografías del viaje, elegimos las imágenes en las que aparecen los lugares que más nos gustaron.|在网上发布旅行照片前，我们挑出拍到最喜欢的地方的那些照片。
下载；上传|Para bajar las fotografías del viaje, conecté el ordenador a la red que nos habían indicado al llegar a la residencia de estudiantes.|为下载旅行照片，我把电脑连上了抵达学生宿舍时告知我们的网络。
给手机充电|Voy a cargar el teléfono mientras preparo la mochila, ya que durante la excursión no tendremos ningún enchufe cerca para conectarlo.|我准备背包时先给手机充电，因为远足时附近没有插座可用。
开机；关机|Antes de apagar el ordenador, guardamos los cambios del informe que tendremos que presentar durante la reunión de mañana por la tarde.|关电脑前，我们保存了明天下午会议要展示的报告中的修改。
点击|Para abrir la carpeta con las fotografías, tienes que hacer clic en el dibujo que aparece junto al nombre de nuestro último viaje.|要打开照片文件夹，需点击上次旅行名称旁边的图标。
充电器|Dejé el cargador sobre la mesa de la entrada para recordar que debía meterlo en la maleta antes de salir hacia el aeropuerto.|我把充电器放在门口桌上，提醒自己去机场前要把它装进箱子。
电脑|El ordenador de la biblioteca tiene una pantalla bastante grande para que podamos consultar el mapa mientras preparamos juntos el recorrido de la excursión.|图书馆的电脑屏幕够大，我们可以边看地图边一起规划远足路线。
SIM卡|La tarjeta SIM estaba dentro de una pequeña caja que guardamos junto a los documentos necesarios para configurar el teléfono nuevo.|SIM卡放在小盒子里，和设置新手机所需的文件收在一起。
智能手机|Con el teléfono inteligente fotografiamos los carteles del museo para poder recordar después cuáles eran las salas que queríamos visitar con más calma.|我们用智能手机拍下博物馆的指示牌，以便记住想慢慢参观的展厅。
平板电脑|La tableta permite ampliar los dibujos que la profesora ha preparado para explicar cómo cambia el paisaje a lo largo de las estaciones.|平板电脑可以放大老师准备的图画，用来讲解景色如何随季节变化。
无线路由器|El router inalámbrico está colocado en una estantería del pasillo, desde donde llega la señal a las habitaciones que utilizamos para estudiar.|无线路由器放在走廊架子上，信号可以覆盖我们学习用的房间。
幼儿园|La escuela infantil tiene un jardín pequeño donde los niños juegan acompañados por sus maestras después de recoger los materiales de la clase.|幼儿园有个小花园，孩子收好课堂材料后，在老师陪同下在那里玩耍。
小学|El colegio de primaria organiza una visita a la biblioteca para que los alumnos conozcan los libros que pueden llevarse a casa durante las vacaciones.|小学组织参观图书馆，让学生了解假期能借回家的书。
中学|El instituto que está junto al parque ha preparado una exposición con los trabajos que los alumnos realizaron durante las clases de historia.|公园旁的中学办了一场展览，展示学生在历史课上完成的作品。
学院；大学|Mi hermana estudia en una universidad pequeña donde los grupos permiten que los estudiantes participen con frecuencia en las conversaciones de clase.|姐姐在一所规模较小的大学读书，班级人数便于学生经常参与课堂讨论。
大学|La universidad ha abierto una biblioteca nueva para que los estudiantes tengan más espacio cuando preparan los exámenes del final del curso.|大学新开了一座图书馆，让学生准备期末考试时有更多空间。
校长|La directora recibió a las familias en la entrada antes de mostrarles las aulas que habían renovado durante las vacaciones del verano.|校长在门口迎接家长，随后带他们看暑假翻新的教室。
小学教师|La maestra reparte unas hojas de colores para que cada alumno dibuje los lugares que recuerda de su camino diario hasta el colegio.|小学老师发下彩纸，让每个学生画出上学路上记得的地方。
中学教师|La profesora explica de nuevo el ejercicio cuando observa que varios alumnos todavía tienen dudas sobre los pasos que deben seguir para resolverlo.|中学老师发现几名学生还不清楚解题步骤，便重新讲解练习。
小学生；学生|La alumna levanta la mano para preguntar si puede utilizar el mapa que ha encontrado en uno de los libros de la biblioteca.|学生举手询问，能否使用她在图书馆一本书里找到的地图。
课|La clase de ciencias comienza con un experimento sencillo que nos permite comparar los materiales antes de leer las explicaciones del libro.|科学课从一个简单实验开始，让我们在读课本解释前先比较各种材料。
讲座|La conferencia reúne a estudiantes de distintas ciudades que desean conocer los proyectos presentados por el equipo de investigación de la universidad.|来自不同城市的学生参加讲座，希望了解大学研究团队展示的项目。
家庭作业|Terminé los deberes antes de cenar, aunque tuve que consultar el libro para resolver una de las preguntas que habíamos trabajado en clase.|我晚饭前做完了作业，不过有道课堂上学过的题还得查课本。
考试|El examen incluía una pregunta sobre el texto que habíamos leído la semana anterior, así que me resultó más fácil organizar las ideas.|考试有一道关于我们上周读过的文章的题，因此我更容易整理思路。
学位|Después de recibir el título, mi hermana se reunió con sus compañeros para celebrar los años que habían pasado estudiando en la misma facultad.|拿到学位后，姐姐和同学聚会，庆祝一起在同一学院度过的求学时光。
本科生|La estudiante de grado está preparando un trabajo sobre los edificios antiguos que todavía pueden visitarse en el centro de nuestra ciudad.|那位本科生正在写一份有关市中心仍可参观的古建筑的报告。
研究生|El estudiante de posgrado consulta varios documentos antes de presentar las conclusiones que ha obtenido durante su investigación sobre los cambios del barrio.|研究生查阅了几份文件，准备展示他研究街区变化所得的结论。
教室|El aula tiene unas mesas que podemos mover fácilmente cuando la profesora nos pide que trabajemos en grupos para preparar una exposición.|教室的桌子很容易移动，便于老师要求我们分组准备展示。
食堂|En el comedor nos sentamos junto a la ventana mientras esperamos a los compañeros que todavía están recogiendo sus bandejas al final de la fila.|在食堂，我们坐在窗边，等还在队伍末尾取餐盘的同学。
礼堂|El salón de actos estaba lleno de familias que habían venido para escuchar el concierto preparado por los alumnos durante las últimas semanas.|礼堂里坐满了来听音乐会的家长，学生们为演出准备了好几个星期。
操场|En el patio hay una zona con sombra donde los alumnos pueden sentarse a conversar cuando prefieren descansar durante el recreo.|操场有一片阴凉处，学生课间想休息时可以坐着聊天。
运动场|El campo de juego está detrás del edificio principal y se utiliza cuando los grupos practican los deportes que han elegido para esta semana.|运动场在主楼后面，各组在那里练习本周选定的运动项目。
学生宿舍|La residencia de estudiantes dispone de una cocina compartida donde solemos reunirnos después de las clases para preparar juntos la cena.|学生宿舍有共用厨房，我们常在下课后聚在那里一起做晚饭。
学生会|El sindicato de estudiantes ha colocado una mesa en la entrada para recoger propuestas sobre las actividades que se organizarán durante el próximo trimestre.|学生会在入口摆了一张桌子，收集下学期活动安排的建议。
学生证|Mostré el carnet de estudiante antes de entrar en la biblioteca, porque necesitaba utilizar una de las salas reservadas para los trabajos en grupo.|进图书馆前我出示了学生证，因为要使用一间专供小组作业的房间。
学习|Quiero aprender a utilizar el programa que empleamos en clase para poder preparar las imágenes de nuestro proyecto sin pedir ayuda cada vez.|我想学会使用课堂上的软件，便于独立制作项目图片，不必每次都求助。
教；教授|Mi hermano quiere enseñar español a personas que acaban de llegar a la ciudad y necesitan practicar situaciones habituales de su vida diaria.|哥哥想教刚到这座城市的人西班牙语，让他们练习日常生活情境。
复习|Antes de la prueba vamos a repasar los ejercicios que nos resultaron más difíciles cuando intentamos resolverlos por nuestra cuenta la semana pasada.|考试前我们要复习上周独立尝试时觉得最难的练习。
参加考试|Para presentarse a un examen en esta escuela, los estudiantes deben comprobar con antelación la fecha y el aula que figuran en su inscripción.|要在这所学校参加考试，学生应提前核对报名信息上的日期和教室。
毕业|Después de graduarse, mi prima quiere viajar durante unos meses antes de decidir en qué ciudad le gustaría empezar a buscar trabajo.|毕业后，表姐想先旅行几个月，再决定去哪个城市找工作。
学习；攻读|Me gusta estudiar en la biblioteca porque allí puedo consultar los libros que necesito sin distraerme con las tareas que quedan pendientes en casa.|我喜欢在图书馆学习，因为能查阅需要的书，也不会被家里没做完的事情分心。
彩色铅笔|Las pinturas están ordenadas por colores dentro de una caja que la maestra coloca en el centro de la mesa para compartir los materiales.|彩色铅笔按颜色排在盒子里，老师把盒子放在桌子中央供大家共用。
橡皮擦|Utilicé la goma de borrar para corregir una línea del dibujo que no coincidía con la forma del edificio que estábamos observando.|我用橡皮擦改掉了画中一条与我们观察的建筑形状不符的线。
练习本|El cuaderno de ejercicios contiene unas páginas donde podemos practicar las palabras que aparecen en el texto antes de escribir nuestra propia historia.|练习本里有几页供我们先练习课文中的词，再写自己的故事。
纸|Colocamos el papel sobre una superficie lisa para poder dibujar el mapa que después utilizaremos durante la visita al museo de la ciudad.|我们把纸放在平整表面上，画一张参观城市博物馆时要用的地图。
圆珠笔|El bolígrafo que me prestaste sigue dentro del estuche, así que te lo devolveré cuando nos encontremos antes de la primera clase.|你借给我的圆珠笔还在笔袋里，第一节课前见面时我会还给你。
铅笔|Con el lápiz marcamos los detalles del dibujo que queremos modificar antes de añadir los colores que hemos elegido para representar el paisaje.|我们用铅笔标出想修改的细节，再添加为景色选好的颜色。
笔袋|El estuche tiene dos compartimentos que permiten separar los lápices de los objetos pequeños que solemos necesitar durante las clases de dibujo.|笔袋有两个隔层，可以把铅笔和绘画课常用的小物件分开。
直尺|La regla nos ayuda a trazar las líneas que forman el plano de la casa antes de añadir las puertas y las ventanas.|直尺帮助我们先画出房屋平面图的线条，再加上门窗。
书包|La mochila escolar está junto a la puerta con los libros que necesito llevar mañana para terminar el trabajo que empezamos en clase.|书包放在门边，里面装着明天完成课堂上开始的作业所需的书。
卷笔刀|Dejé el sacapuntas junto a la caja de pinturas para que todos pudieran utilizarlo mientras preparábamos los dibujos de la exposición del colegio.|我把卷笔刀放在彩色铅笔盒旁，方便大家准备学校展览的画时使用。
教科书|El libro de texto incluye un mapa que nos permite seguir el recorrido de los personajes mientras leemos la historia durante la clase.|教科书里有一张地图，我们课堂上读故事时可以追踪人物的路线。
白板|La profesora dibuja un esquema en la pizarra para que podamos relacionar las ideas que han surgido durante la conversación de esta mañana.|老师在白板上画了示意图，帮助我们联系上午讨论中提出的想法。
大学咖啡厅|En la cafetería de la facultad solemos comentar las lecturas antes de entrar en la sala donde se celebra el seminario de los miércoles.|在进入周三研讨课教室前，我们常在学院咖啡厅讨论阅读材料。
校园|El campus tiene varios caminos que conectan las facultades con la biblioteca, de modo que podemos desplazarnos entre los edificios sin salir del recinto.|校园有几条连接各学院与图书馆的小路，让我们不必出校就能往返各楼。
阶梯教室；报告厅|La sala de conferencias dispone de una pantalla grande donde se muestran las imágenes que acompañan la explicación del equipo de investigación.|报告厅有一块大屏幕，用来展示配合研究团队讲解的图片。
大学讲师|La profesora universitaria comenta los resultados del proyecto mientras los estudiantes comparan las observaciones que han anotado durante las visitas al laboratorio.|大学讲师讲解项目结果，学生则比较参观实验室时记下的观察记录。
图书馆|La biblioteca ha ampliado su horario para que quienes preparan los exámenes puedan consultar los materiales después de terminar las clases de la tarde.|图书馆延长了开放时间，让备考者下午下课后仍能查阅资料。
学生|La estudiante prepara una presentación con las fotografías que tomó durante el viaje organizado por la facultad para conocer las ciudades de la región.|学生用参加学院组织的地区城市考察时拍摄的照片准备展示。
经理|La gerente revisa el calendario del proyecto antes de explicar qué tareas deben terminarse para que el equipo pueda entregar el informe a tiempo.|经理先查看项目日程，再说明团队为按时提交报告需要完成哪些任务。
全体职员|La plantilla se reúne al comienzo de la semana para organizar los turnos que permitirán atender a los clientes durante las vacaciones del verano.|全体职员在周初开会安排轮班，以便暑假期间接待顾客。
同事|Mi compañera me mostró la carpeta donde había guardado los documentos que necesitábamos consultar antes de responder a las preguntas del cliente.|同事给我看了存放文件的文件夹，我们回答客户问题前需要查阅这些文件。
客户|El cliente pidió una copia del plano para poder comentar con sus compañeros los cambios que habíamos propuesto durante la reunión de la mañana.|客户要了一份图纸副本，以便和同事讨论上午会议提出的修改。
人力资源|El departamento de recursos humanos ha preparado una sesión para explicar a las personas nuevas cómo se organizan los equipos dentro de la empresa.|人力资源部门准备了一场说明会，向新员工介绍公司的团队组织方式。
账目|Las cuentas del mes están en una carpeta que debemos revisar antes de preparar los documentos necesarios para la reunión con la directora.|本月账目放在一个文件夹里，我们准备与主管开会所需的文件前要先核对。
数据；数字|Las cifras que aparecen en el gráfico permiten comparar las ventas de este mes con los resultados que habíamos obtenido durante el trimestre anterior.|图表上的数字让我们能比较本月销售额与上一季度的结果。
电子表格|La hoja de cálculo reúne los datos que cada equipo ha enviado para que podamos preparar un resumen antes de la reunión del viernes.|电子表格汇总了各组发送的数据，便于我们周五会议前准备摘要。
演示；展示|La presentación comienza con unas fotografías que ayudan a entender por qué elegimos este barrio cuando empezamos a diseñar nuestro proyecto.|展示以几张照片开场，帮助大家理解我们启动项目设计时为何选择这个街区。
报告|El informe incluye las observaciones que recogimos durante las visitas y explica cuáles son los cambios que consideramos más urgentes para el próximo año.|报告包含实地访问的观察记录，并说明我们认为明年最急需的改进。
会议|La reunión terminó más tarde de lo previsto porque surgieron varias preguntas sobre las propuestas que habíamos recibido de los otros equipos.|会议结束得比预计晚，因为大家对其他团队提出的方案有好几个问题。
电话会议|Durante la teleconferencia tomamos notas para recordar los acuerdos que después tendremos que compartir con los compañeros que no pudieron conectarse.|电话会议时我们做了笔记，以便之后向没能接通的同事传达达成的共识。
视频会议|La videoconferencia nos permite mostrar el modelo a los compañeros que trabajan en otra ciudad sin que tengan que desplazarse hasta nuestra oficina.|视频会议让我们能给在另一座城市工作的同事展示模型，他们不必来办公室。
收件箱|La bandeja de entrada contiene varios mensajes que debemos leer antes de preparar la respuesta que enviaremos al cliente durante la tarde.|收件箱有几封邮件，我们下午准备给客户的回复前需要先读完。
文件|El archivo está guardado en una carpeta compartida para que los miembros del equipo puedan consultar la versión que revisamos durante la reunión.|文件保存在共享文件夹里，方便组员查阅会议上修订的版本。
附件|El archivo adjunto contiene las fotografías que necesitamos comparar con el plano antes de decidir qué cambios vamos a proponer al cliente.|附件包含我们决定向客户提出哪些修改前，要与图纸比较的照片。
用户名|El nombre de usuario aparece en la parte superior de la pantalla cuando accedemos al espacio donde compartimos los documentos del proyecto.|进入共享项目文件的空间后，用户名显示在屏幕顶部。
密码|La contraseña se introduce en un campo que oculta los caracteres mientras la persona accede al sistema desde el ordenador de la oficina.|在办公室电脑上登录系统时，密码输入框会隐藏输入的字符。
打字|Mi padre aprendió a escribir a máquina antes de utilizar ordenadores y todavía conserva el equipo con el que practicaba al terminar sus clases.|父亲使用电脑前就学会了打字，至今仍留着当年下课后练习的机器。
登录；退出系统|Antes de salir del sistema, comprobamos que los documentos estén guardados en la carpeta que utilizarán mañana los compañeros del turno de la mañana.|退出系统前，我们确认文件已存入明天早班同事要使用的文件夹。
做演示|Mañana vamos a dar una presentación para explicar cómo se desarrolló el proyecto y responder a las preguntas de las personas que quieran participar.|明天我们要做演示，介绍项目如何开展，并回答有意参与者的问题。
召开会议|El equipo ha decidido celebrar una reunión antes de enviar la propuesta para que todos puedan comentar los últimos cambios introducidos en el documento.|团队决定提交方案前召开会议，让大家都能讨论文件的最后修改。
电脑死机|El ordenador suele bloquearse cuando intento abrir varias imágenes grandes, así que espero a que termine una tarea antes de empezar la siguiente.|我同时打开几张大图时电脑常死机，所以我等一项任务结束才开始下一项。
计算器|La calculadora está junto a los recibos que debemos sumar antes de introducir los gastos de la semana en la hoja de cálculo.|计算器放在收据旁，我们把本周支出录入电子表格前要先加总金额。
办公桌|El escritorio tiene espacio suficiente para colocar los planos que necesitamos comparar sin tener que apartar el ordenador cada vez que los consultamos.|办公桌够大，可以摊开放要比较的图纸，不必每次查看都移开电脑。
台灯|La lámpara de escritorio ilumina el cuaderno donde tomo notas cuando reviso los documentos que mis compañeros han preparado durante la mañana.|台灯照着我做笔记的本子，我正在核对同事上午准备的文件。
文件柜|El archivador contiene varias carpetas que están ordenadas por fecha para que resulte más sencillo encontrar los contratos que necesitamos consultar.|文件柜里的几个文件夹按日期排列，便于找到要查阅的合同。
文件夹|La carpeta que está encima de la mesa contiene los dibujos que mostraremos al cliente cuando venga a visitar la oficina esta tarde.|桌上的文件夹装着图纸，下午客户来办公室时我们要展示给他。
打孔器|Con la taladradora hacemos dos agujeros en las hojas que después guardaremos en una carpeta para mantener juntos todos los documentos del proyecto.|我们用打孔器在纸上打两个孔，再放进文件夹，让项目文件集中保存。
收件／发件托盘|La bandeja de entrada está a la izquierda del escritorio para que los documentos nuevos queden separados de los que ya hemos revisado.|收件托盘放在办公桌左侧，让新文件和已经审核的文件分开。
笔记本电脑|El ordenador portátil nos permite trabajar en la sala de reuniones mientras consultamos los planos que hemos colocado sobre la mesa central.|笔记本电脑让我们能在会议室工作，同时查看摊在中央桌上的图纸。
便笺本|En el bloc de notas apuntamos las preguntas que queremos hacer durante la visita antes de redactar el informe que entregaremos al equipo.|我们在便笺本上记下参观时要问的问题，之后再写提交给团队的报告。
回形针|El clip mantiene juntas las hojas que debemos entregar al cliente para que pueda consultar los detalles de la propuesta antes de firmarla.|回形针把要交给客户的纸张夹在一起，方便他签字前查看方案细节。
复印机|La fotocopiadora está en una sala compartida donde preparamos las copias que utilizarán los participantes durante el curso organizado por la empresa.|复印机放在共用房间里，我们在那里为公司课程的参加者准备复印材料。
打印机|La impresora termina de preparar las páginas que necesitamos repartir antes de que lleguen los compañeros que asistirán a la reunión de esta mañana.|上午参会的同事到达前，打印机正在印完我们需要分发的材料。
活页夹|La carpeta de anillas permite añadir las hojas nuevas sin cambiar el orden de los documentos que hemos reunido desde el comienzo del proyecto.|活页夹可以添加新纸张，又不改变项目开始以来收集文件的顺序。
扫描仪|El escáner convierte los dibujos en imágenes que podemos enviar al equipo para revisar los detalles antes de preparar la versión final del proyecto.|扫描仪把图画转成图像，方便发给团队核对细节，再准备项目最终版本。`.split('\n').map(r => r.split('|'));
if (rows.length !== 100 || rows.some(r => r.length !== 3)) throw Error(`Invalid text rows: ${rows.length}`);
const source = JSON.parse(fs.readFileSync('data/collins-spanish-source.json', 'utf8'));
const entries = source.entries.slice(1700, 1800).map((r, i) => ({
  id: r.id, w: r.word.replace(/ f$/, ''), uk: '', us: '',
  senses: [{ pos: r.kind === 'phrase' ? '短语' : '词汇', zh: rows[i][0], en: r.en.replace(/^vocabulary |^school |^higher education /, '') }],
  ex: [{ en: rows[i][1], zh: rows[i][2] }], col: [], fam: [], syn: [], ant: [], tip: '',
  cefr: '入门', topic: `chapter-${r.chapter}`, exampleLevel: 'B1+',
  note: `Collins Spanish 3000 · 原书第 ${r.page} 页 · 第 ${1701 + i} 条；自编例句 B1+`, m: 0,
}));
fs.writeFileSync('data/spanish-batches/018.entries.json', JSON.stringify(entries, null, 2));
console.log(`Prepared ${entries.length} reviewed entries: 1701–1800`);

$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '>This is my <span class=indam>b______</span>. <i>(a room where you wash)</i>[sound:rec1327135284.mp3]<br /><br /><img class='center-block img-responsive hinhdep'  src='pasterdsc6l.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This is my <span class=indam>bathroom</span>.[sound:rec1327135289.mp3]<br /></span><br><span style=''><i>a bathroom - ванная комната</i></span>","INFO":null,"STT":0},
{"FRONT":"<span style='font-size: 28px; '>&quot;What a lovely <span class=indam>b_____</span>!&quot; <i>(a room where you sleep)</i>[sound:rec1327135298.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastet_77bn.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;What a lovely <span class=indam>bedroom</span>!&quot;[sound:rec1327135302.mp3]<br /></span><br><span style=''><i>a bedroom - спальня</i></span>","INFO":null,"STT":1},
{"FRONT":"<span style='font-size: 28px; '>Is there a <span class=indam>d____ ____</span> in your house? <i>(a room where you eat)</i>[sound:rec1327135313.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoveymj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Is there a <span class=indam>dining room</span> in your house?[sound:rec1327135321.mp3]<br /></span><br><span style=''><i>a dining room - столовая</i><br></span>","INFO":null,"STT":2},
{"FRONT":"<span style='font-size: 28px; '>-Does your house have a <span class=indam>g____</span>? <i>(a room for a car)</i>[sound:rec1327135334.mp3]<br />-Yes, it does.<br /><img class='center-block img-responsive hinhdep'  src='pastedh727h.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Does your house have a <span class=indam>garage</span>?[sound:rec1327135339.mp3]<br />-Yes, it does.</span><br><span style=''><i>a garage - гараж</i></span>","INFO":null,"STT":3},
{"FRONT":"<span style='font-size: 28px; '>-Where are Richard and Lucy?<br />-They're playing football in <b>the</b> <span class=indam>g____</span>. <i>(private place outside next to a house)</i>[sound:rec1327135359.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemuzkqg.jpg' /><br /></span>","BACK":"<span style='font-size: 28px; '>-Where are Richard and Lucy?<br />-They're playing football in <b>the</b> <span class=indam>garden</span>.[sound:rec1327135368.mp3]<br /></span><br><span style=''><i>a garden - сад</i></span>","INFO":null,"STT":4},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please take off your shoes in the <span class=indam>h____</span>.&quot; <i>(entrance area in a house or flat)</i>[sound:rec1327135384.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten84tgg.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please take off your shoes in the <span class=indam>hall</span>.&quot; (<i>or</i> <span class=indam>hallway</span>)[sound:rec1327135393.mp3]</span><br><span style=''><i>a hall / hallway - прихожая / коридор</i></span>","INFO":null,"STT":5},
{"FRONT":"<span style='font-size: 28px; '>&quot;The house has a beautiful and famous <span class=indam>h___</span>.&quot; <i>(a very big room)</i>[sound:rec1327135403.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastem_win_.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;The house has a beautiful and famous <span class=indam>hall</span>.&quot; [sound:rec1327135408.mp3]</span><br><span style=''><i>a hall - зал</i></span>","INFO":null,"STT":6},
{"FRONT":"<span style='font-size: 28px; '>Ann and her mother are cooking in the <span class=indam>k_____</span>. <i>(room where you cook)</i>[sound:rec1327135416.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez3tmbj.png' /></span>","BACK":"<span style='font-size: 28px; '>Ann and her mother are cooking in the <span class=indam>kitchen</span>.[sound:rec1327135422.mp3]</span><br><span style=''><i>a kitchen - кухня</i></span>","INFO":null,"STT":7},
{"FRONT":"<span style='font-size: 28px; '>The whole family are watching TV in the<span class=indam> li___ ____</span>. <i>(room where you relax)</i>[sound:rec1327135434.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedj7rsc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The whole family are watching TV in the <span class=indam>living room</span><span style='color:#000000;'>.</span>[sound:rec1327135440.mp3]</span><br><span style=''><i>a living room - гостиная</i></span>","INFO":null,"STT":8},
{"FRONT":"<span style='font-size: 28px; '>-Where's Karl?[sound:rec1327135450.mp3]<br />-He's working in his<span class=indam> st____</span>. <i>(room where you work)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteqskg_g.png' /></span>","BACK":"<span style='font-size: 28px; '>-Where's Karl?<br />-He's working in his <span class=indam>study</span>.[sound:rec1327135456.mp3]<br /></span><br><span style=''><i>a study - кабинет</i></span>","INFO":null,"STT":9},
{"FRONT":"<span style='font-size: 28px; '>&quot;Excuse me, where's the <span class=indam>t____</span>?&quot;[sound:rec1327135466.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq06xea.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Excuse me, where's the <span class=indam>toilet</span>?&quot;[sound:rec1327135472.mp3]<br /><br /></span><br><span style=''><i>a toilet - туалет / унитаз</i></span>","INFO":null,"STT":10},
{"FRONT":"<span style='font-size: 28px; '>Dennis is sleeping in his <span class=indam>ar______</span>. <i>(comfortable chair)</i>[sound:rec1327135489.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehjv8vf.png' /></span>","BACK":"<span style='font-size: 28px; '>Dennis is sleeping in his <span class=indam>armchair</span>.[sound:rec1327135495.mp3]<br /><br /></span><br><span style=''><i>an armchair - кресло</i></span>","INFO":null,"STT":11},
{"FRONT":"<span style='font-size: 28px; '>Dennis is sleeping <span class=indam>[...]</span> his armchair.[sound:rec1327135519.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehjv8vf.png' /></span>","BACK":"<span style='font-size: 28px; '>Dennis is sleeping <span class=indam>in</span> his armchair.[sound:rec1327135533.mp3]</span><br><span style=''></span>","INFO":null,"STT":12},
{"FRONT":"<span style='font-size: 28px; '>-Where's Vladimir?<br />-He's sitting at his <span class=indam>d___</span>. <i>(table for working)</i>[sound:rec1327135548.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten0wosk.png' /></span>","BACK":"<span style='font-size: 28px; '>-Where's Vladimir?<br />-He's sitting at his <span class=indam>desk</span>.[sound:rec1327135554.mp3]<br /><br /><br /></span><br><span style=''><i>a desk - письменный стол</i></span>","INFO":null,"STT":13},
{"FRONT":"<span style='font-size: 28px; '>-Is there a <span class=indam>fi_____</span> in the living room?[sound:rec1327135670.mp3]<br />-Yes, there is.<br /><img class='center-block img-responsive hinhdep'  src='pastezmncdx.png' /></span>","BACK":"<span style='font-size: 28px; '>-Is there a <span class=indam>fireplace</span> in the living room?[sound:rec1327135643.mp3]<br />-Yes, there is.<br /><br /></span><br><span style=''><i>a fireplace - камин</i></span>","INFO":null,"STT":14},
{"FRONT":"<span style='font-size: 28px; '>-Are there any <span class=indam>pl____</span> in your living room?[sound:rec1327135658.mp3]<br />-Yes, there are.<br /><img class='center-block img-responsive hinhdep'  src='pastert1mdx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Are there any <span class=indam>plants</span> in your living room?[sound:rec1327135680.mp3]<br />-Yes, there are.<br /></span><br><span style=''><i>a plant - растение</i></span>","INFO":null,"STT":15},
{"FRONT":"<span style='font-size: 28px; '>-Where's Charles?<br />-He's sitting on the <span class=indam>s____</span>. <i>(big, long chair)</i>[sound:rec1327135689.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevihigy.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Where's Charles?<br />-He's sitting on the <span class=indam>sofa</span>.[sound:rec1327135695.mp3]</span><br><span style=''><i>a sofa - диван</i></span>","INFO":null,"STT":16},
{"FRONT":"<span style='font-size: 28px; '>-Where's Charles?<br />-He's sitting <span class=indam>[...]</span> the sofa.[sound:rec1327135705.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevihigy.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Where's Charles?<br />-He's sitting <span class=indam>on</span> the sofa.[sound:rec1327135717.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":17},
{"FRONT":"<span style='font-size: 28px; '>-Where's Lucy?<br />-She's in <b>the</b> <span class=indam>b___</span>.[sound:rec1327135727.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez7bsat.png' /></span>","BACK":"<span style='font-size: 28px; '>-She's in <b>the</b> <span class=indam>bath</span>.[sound:rec1327135732.mp3]<br /><br /></span><br><span style=''><i>a bath - ванна</i></span>","INFO":null,"STT":18},
{"FRONT":"<span style='font-size: 28px; '>-Where's Lucy?[sound:rec1327135754.mp3]<br />-She's <span class=indam>[...]</span> the bath.<br /><img class='center-block img-responsive hinhdep'  src='pastez7bsat.png' /></span>","BACK":"<span style='font-size: 28px; '>She's <span class=indam>in</span> the bath.[sound:rec1327135760.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":19},
{"FRONT":"<span style='font-size: 28px; '>&quot;What interesting <span class=indam>m____</span>!&quot;[sound:rec1327135767.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteajpsqx.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;What interesting <span class=indam>m</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>rrors</span>!&quot; [sound:rec1327135771.mp3]<br /><br /></span><br><span style=''><i>a m</i><span style='font-style:italic; color:#ff5500;'>i</span><i>rror - зеркало</i></span>","INFO":null,"STT":20},
{"FRONT":"<span style='font-size: 28px; '>-Where's Jack?[sound:rec1327135787.mp3]<br />-He's in <b>the</b> <span class=indam>sh____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasteyyvtzm.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Where's Jack?<br />-He's in <b>the</b> <span class=indam>shower</span>.[sound:rec1327135792.mp3]<br /><br /><br /></span><br><span style=''><i>a shower - душевая / душ</i></span>","INFO":null,"STT":21},
{"FRONT":"<span style='font-size: 28px; '>-Where's Jack?[sound:rec1334488890.mp3]<br />-He's <span class=indam>[...]</span> <b>the</b> shower.<br /><img class='center-block img-responsive hinhdep'  src='pasteyyvtzm.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Where's Jack?<br />-He's <span class=indam>in</span> <b>the</b> shower.[sound:rec1334488896.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":22},
{"FRONT":"<span style='font-size: 28px; '>-Where's Dad?<br />-He's <span class=indam>__ b___</span>.[sound:rec1327135837.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3qkxy6.png' /></span>","BACK":"<span style='font-size: 28px; '>-Where's Dad?<br />-He's <span class=indam>in bed</span>.[sound:rec1327135843.mp3]<br /><br /></span><br><span style=''></span>","INFO":null,"STT":23},
{"FRONT":"<span style='font-size: 28px; '>&quot;Look, we have a new <span class=indam>c_____</span>!&quot;[sound:rec1327135852.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekzqlyc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Look, we have a new <span class=indam>cooker</span>!&quot;[sound:rec1327135857.mp3]<br /><br /></span><br><span style=''><i>a cooker - плита</i></span>","INFO":null,"STT":24},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please put your shoes in the <span class=indam>c_____</span>.&quot;[sound:rec1327135865.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemkykmb.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please put your shoes in the <span class=indam>cupboard</span>.&quot;[sound:rec1327135869.mp3]<br /><br /></span><br><span style=''><i>a cupboard - шкаф / буфет</i></span>","INFO":null,"STT":25},
{"FRONT":"<span style='font-size: 28px; '>&quot;There isn't anything in the <span class=indam>f____</span>!&quot;[sound:rec1327135881.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastek451ir.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;There isn't anything in the <span class=indam>fridge</span>!&quot;[sound:rec1327135885.mp3]<br /></span><br><span style=''><i>a fridge - холодильник</i></span>","INFO":null,"STT":26},
{"FRONT":"<span style='font-size: 28px; '>&quot;There isn't <span class=indam>a____</span> in the fridge!&quot; <i>(there's nothing)</i>[sound:rec1327135892.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastek451ir.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;There isn't <span class=indam>anything</span> in the fridge!&quot;[sound:rec1327135899.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":27},
{"FRONT":"<span style='font-size: 28px; '>-Is there a <span class=indam>c____</span> on the floor?[sound:rec1327135909.mp3]<br />-Yes, there is.<br /><img class='center-block img-responsive hinhdep'  src='pasteitg78q.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Is there a <span class=indam>carpet</span> on the floor?[sound:rec1327135915.mp3]<br />-Yes, there is.<br /></span><br><span style=''><i>a carpet - ковер</i></span>","INFO":null,"STT":28},
{"FRONT":"<span style='font-size: 28px; '>-Is there a carpet <span class=indam>[...]</span> the floor?[sound:rec1327135923.mp3]<br />-Yes, there is.<br /><img class='center-block img-responsive hinhdep'  src='pasteitg78q.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Is there a carpet <span class=indam>on</span> the floor?[sound:rec1327135930.mp3]<br />-Yes, there is.<br /></span><br><span style=''><i>on the floor - на полу</i></span>","INFO":null,"STT":29},
{"FRONT":"<span style='font-size: 28px; '>-Was there <span class=indam>c____</span> heating in the hotel?[sound:rec1327135943.mp3]<br />-Yes, there was.<br /><img class='center-block img-responsive hinhdep'  src='pastekpfwgm.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Was there <span class=indam>central</span> heating in the hotel?[sound:rec1327135951.mp3]<br />-Yes, there was.<br /></span><br><span style=''><i>central heating (n.) - центральное отопление</i></span>","INFO":null,"STT":30},
{"FRONT":"<span style='font-size: 28px; '>-Is the <span class=indam>r____</span> on?[sound:rec1327135984.mp3]<br />-Yes, it is.<br /><img class='center-block img-responsive hinhdep'  src='pastek1_nza.png' /></span>","BACK":"<span style='font-size: 28px; '>-Is the <span class=indam>r</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>diator</span> on?[sound:rec1327135990.mp3]<br />-Yes, it is.<br /><br /></span><br><span style=''><i>a r</i><span style='font-style:italic; color:#ff5500;'>a</span><i>diator - батарея</i></span>","INFO":null,"STT":31},
{"FRONT":"<span style='font-size: 28px; '>This is a brick <span class=indam>w____</span>.[sound:rec1327136009.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedmd1fv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This is a brick <span class=indam>wall</span>.[sound:rec1327136026.mp3]<br /><br /><br /></span><br><span style=''><i>a wall - стена</i></span>","INFO":null,"STT":32},
{"FRONT":"<span style='font-size: 28px; '>We use <span class=indam>b____</span> to make buildings.[sound:rec1327136038.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoab9uq.png' /></span>","BACK":"<span style='font-size: 28px; '>We use <span class=indam>bricks</span> to make buildings.[sound:rec1327136043.mp3]<br /><br /><br /></span><br><span style=''><i>a brick - кирпич</i></span>","INFO":null,"STT":33},
{"FRONT":"<span style='font-size: 28px; '>-Where's Vladimir?[sound:rec1327136052.mp3]<br />-He's sitting <span class=indam>[...]</span> his desk.<br /><img class='center-block img-responsive hinhdep'  src='pasten0wosk.png' /></span>","BACK":"<span style='font-size: 28px; '>-Where's Vladimir?<br />-He's sitting <span class=indam>at</span> his desk.[sound:rec1327136059.mp3]<br /></span><br><span style=''><i>at a desk - за столом</i></span>","INFO":null,"STT":34},
{"FRONT":"<span style='font-size: 28px; '>&quot;There are some beautiful paintings in the <span class=indam>a__ g_____</span>.&quot;[sound:rec1327136067.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyht7ns.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;There are some beautiful paintings in the <span class=indam>art gallery</span>.&quot;[sound:rec1327136072.mp3]<br /><br /><br /></span><br><span style=''><i>an art gallery - картинная галерея, музей искусства</i></span>","INFO":null,"STT":35},
{"FRONT":"<span style='font-size: 28px; '>This is an old <span class=indam>c____</span> on an island in Scotland.[sound:rec1327136081.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegr8a9y.png' /></span>","BACK":"<span style='font-size: 28px; '>This is an old <span class=indam>castle</span> on an island in Scotland.[sound:rec1327136088.mp3]<br /><br /><br /></span><br><span style=''><i>a castle - замок</i></span>","INFO":null,"STT":36},
{"FRONT":"<span style='font-size: 28px; '>This is an old castle <span class=indam>[...]</span> an island.[sound:rec1327136101.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegr8a9y.png' /></span>","BACK":"<span style='font-size: 28px; '>This is an old castle <span class=indam>on</span> an island.[sound:rec1327136106.mp3]<br /></span><br><span style=''><i>on an island - на острове</i></span>","INFO":null,"STT":37},
{"FRONT":"<span style='font-size: 28px; '>There are lots of <span class=indam>m_____</span> in London. <i>(places where we can see old things)</i>[sound:rec1327136114.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteadof0o.jpg' /></span>","BACK":"<span style='font-size: 28px; '>There are lots of <span class=indam>museums</span> in London.[sound:rec1327136119.mp3]<br /><br /><br /></span><br><span style=''><i>a museum - музей</i></span>","INFO":null,"STT":38},
{"FRONT":"<span style='font-size: 28px; '>We watch plays in a <span class=indam>th_____</span>.[sound:rec1327136133.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesdibrr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>We watch plays in a <span class=indam>th</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>atre</span>.[sound:rec1327136137.mp3]<br /></span><br><span style=''><i>a theatre - театр</i></span>","INFO":null,"STT":39},
{"FRONT":"<span style='font-size: 28px; '>We watch <span class=indam>pl____</span> in a theatre. <i>(performances / stories with actors)</i>[sound:rec1327136148.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesdibrr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>We watch <span class=indam>plays</span> in a theatre.[sound:rec1327136153.mp3]<br /><br /></span><br><span style=''><i>a play - пьеса</i><br></span>","INFO":null,"STT":40},
{"FRONT":"<span style='font-size: 28px; '>A <span class=indam>b____</span> is a place where we can save money.[sound:rec1327136161.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesyqwan.jpg' /></span>","BACK":"<span style='font-size: 28px; '>A <span class=indam>bank</span> is a place where we can save money.[sound:rec1327136168.mp3]</span><br><span style=''><i>a bank - банк</i></span>","INFO":null,"STT":41},
{"FRONT":"<span style='font-size: 28px; '>A <span class=indam>ph_____</span> is a place where we can buy medicines.[sound:rec1327136178.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastex4tvqr.png' /></span>","BACK":"<span style='font-size: 28px; '>A <span class=indam>pharmacy</span> is a place where we can buy medicines.[sound:rec1327136193.mp3]<br /><i>or</i><br>a <span class=indam>chemist's</span></span><br><span style=''><i>a pharmacy / a chemist's -&nbsp;&nbsp;аптека</i></span>","INFO":null,"STT":42},
{"FRONT":"<span style='font-size: 28px; '>&quot;It's a great <span class=indam>de____ st____</span> - there are lots of different things.&quot; <i>(a big shop)</i>[sound:rec1327136204.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemvkgtj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;It's a great <span class=indam>department store</span> - there are lots of different things.&quot;[sound:rec1327136223.mp3]<br /><br /></span><br><span style=''><i>a department store - универмаг</i></span>","INFO":null,"STT":43},
{"FRONT":"<span style='font-size: 28px; '>&quot;I like shopping at the <span class=indam>m____</span>.&quot;[sound:rec1327136231.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesg0kex.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I like shopping at the <span class=indam>market</span>.&quot;[sound:rec1327136235.mp3]<br /></span><br><span style=''><i>a market - рынок</i></span>","INFO":null,"STT":44},
{"FRONT":"<span style='font-size: 28px; '>&quot;I like shopping <span class=indam>[...]</span> the market.&quot;[sound:rec1327136243.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesg0kex.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I like shopping <span class=indam>at</span> the market.&quot;[sound:rec1327136249.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":45},
{"FRONT":"<span style='font-size: 28px; '>&quot;There's a new <span class=indam>sh___ c____</span> near my town.&quot; <i>(a place with lots of different shops)</i>[sound:rec1327136258.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteawwqop.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;There's a new <span class=indam>shopping centre</span> near my town.&quot;[sound:rec1327136264.mp3]<br /></span><br><span style=''><i>a shopping centre - торговый центр</i></span>","INFO":null,"STT":46},
{"FRONT":"<span style='font-size: 28px; '>London is on <b>the</b> <span class=indam>R____</span> Thames.[sound:rec1327136273.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemr08ae.jpg' /></span>","BACK":"<span style='font-size: 28px; '>London is on <b>the</b> <span class=indam>River</span> Thames.[sound:rec1327136279.mp3]<br /><br /><br /></span><br><span style=''><i>a river - река</i></span>","INFO":null,"STT":47},
{"FRONT":"<span style='font-size: 28px; '>London is <span class=indam>[...]</span> <b>the </b>River Thames.[sound:rec1327136287.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq534jl.png' /></span>","BACK":"<span style='font-size: 28px; '>London is <span class=indam>on</span> <b>the </b>River Thames.[sound:rec1327136293.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":48},
{"FRONT":"<span style='font-size: 28px; '>This <span class=indam>r___</span> goes up and down.[sound:rec1327136301.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev3yxta.png' /></span>","BACK":"<span style='font-size: 28px; '>This <span class=indam>road</span> goes up and down.[sound:rec1327136305.mp3]<br /><br /><br /></span><br><span style=''><i>a road - дорога</i></span>","INFO":null,"STT":49},
{"FRONT":"<span style='font-size: 28px; '>Red <span class=indam>Sq____</span> is in the middle of Moscow.[sound:rec1327136316.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezi0syt.png' /></span>","BACK":"<span style='font-size: 28px; '>Red <span class=indam>Square</span> is in the middle of Moscow.[sound:rec1327136322.mp3]<br /><br /></span><br><span style=''><i>a square - площадь</i></span>","INFO":null,"STT":50},
{"FRONT":"<span style='font-size: 28px; '>There's a bus waiting at the <span class=indam>bus</span> <span class=indam>s___</span>.[sound:rec1327136526.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejdyzi0.png' /></span>","BACK":"<span style='font-size: 28px; '>There's a bus waiting at the <span class=indam>bus</span> <span class=indam>stop</span>.[sound:rec1327136534.mp3]<br /><br /></span><br><span style=''><i>a bus stop - автобусная остановка</i></span>","INFO":null,"STT":51},
{"FRONT":"<span style='font-size: 28px; '>We can book holidays at a <span class=indam>tr___ ag____</span>.[sound:rec1327136549.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaywbzc.png' /></span>","BACK":"<span style='font-size: 28px; '>We can book holidays at a <span class=indam>travel agent's</span>.[sound:rec1327136554.mp3]<br /></span><br><span style=''><i>a travel agent's - бюро путешествий</i></span>","INFO":null,"STT":52},
{"FRONT":"<span style='font-size: 28px; '>There are lots of old <span class=indam>ch____</span> in Britain. <i>(places for Christians)</i>[sound:rec1327136571.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteje8ngc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>There are lots of old <span class=indam>churches</span> in Britain.[sound:rec1327136576.mp3]<br /><br /></span><br><span style=''><i>a church - церковь</i></span>","INFO":null,"STT":53},
{"FRONT":"<span style='font-size: 28px; '>There's a famous <span class=indam>m____</span> in the centre of Istanbul. <i>(a place for Muslims)</i>[sound:rec1327136610.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez48bys.png' /></span>","BACK":"<span style='font-size: 28px; '>There's a famous <span class=indam>mosque</span> in the centre of Istanbul.[sound:rec1327136616.mp3]<br /><br /><br /></span><br><span style=''><i>a mosque - мечеть</i></span>","INFO":null,"STT":54},
{"FRONT":"<span style='font-size: 28px; '>He's very ill. He went to <span class=indam>ho_____</span>.[sound:rec1327136637.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste31ab6i.png' /></span>","BACK":"<span style='font-size: 28px; '>He's very ill. He went to <span class=indam>hospital</span>.[sound:rec1327136642.mp3]<br /><br /></span><br><span style=''><i>a hospital - больница</i></span>","INFO":null,"STT":55},
{"FRONT":"<span style='font-size: 28px; '>There are two police cars outside the <span class=indam>po____ st_____</span>. <i>(office for policemen)</i>[sound:rec1327136655.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenlfdpe.png' /></span>","BACK":"<span style='font-size: 28px; '>There are two police cars outside the <span class=indam>police station</span>.[sound:rec1327136670.mp3]<br /></span><br><span style=''><i>a police station - полицейский участок</i><br></span>","INFO":null,"STT":56},
{"FRONT":"<span style='font-size: 28px; '>There are two police cars <span class=indam>ou____</span> the police station. <i>(next to, near, on the street)</i>[sound:rec1327136678.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenlfdpe.png' /></span>","BACK":"<span style='font-size: 28px; '>There are two police cars <span class=indam>outside</span> the police station.[sound:rec1327136684.mp3]<br /></span><br><span style=''><i>outside - снаружи</i></span>","INFO":null,"STT":57},
{"FRONT":"<span style='font-size: 28px; '>&quot;Let's go to the <span class=indam>p___ off____</span>.&quot; <i>(a place where you can buy stamps etc.)</i>[sound:rec1327136696.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9khh8w.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Let's go to the <span class=indam>post office</span>.&quot;[sound:rec1327136701.mp3]<br /><br /><br /></span><br><span style=''><i>a post office - почта</i></span>","INFO":null,"STT":58},
{"FRONT":"<span style='font-size: 28px; '>&quot;My children go to <span class=indam>ki_____</span>.&quot; <i>(a school for young children)</i>[sound:rec1327136823.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten2ddde.png' /> </span>","BACK":"<span style='font-size: 28px; '>&quot;My children go to <span class=indam>kindergarten</span>.&quot;<br /><i>or </i><br />&quot;My children go to <span class=indam>nursery school</span>.&quot;[sound:rec1327136836.mp3]</span><br><span style=''><i>a kindergarten / a nursery school - детский сад</i></span>","INFO":null,"STT":59},
{"FRONT":"<span style='font-size: 28px; '>-Is there a <span class=indam>sports</span> <span class=indam>c___</span> in the town? <i>(a place where you can play sport inside)</i><br />-Yes, there is.[sound:rec1327136846.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastek029bm.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Is there a <span class=indam>sports</span> <span class=indam>centre</span> in the town?[sound:rec1327136853.mp3]<br />-Yes, there is.<br /></span><br><span style=''><i>a sports centre - спортивный центр</i></span>","INFO":null,"STT":60},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-<span class=indam>Th_____</span> a sofa. <br /><img class='center-block img-responsive hinhdep'  src='pastemrzm0h.png' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-<span class=indam>There's</span> a sofa.[sound:rec1327137079.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":61},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-<span class=indam>Th_____</span> two lamps.<br /><img class='center-block img-responsive hinhdep'  src='pastemrzm0h.png' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-<span class=indam>There are</span> two lamps.[sound:rec1334488907.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":62},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-<span class=indam>Th_____</span> some windows.<br /><img class='center-block img-responsive hinhdep'  src='pastemrzm0h.png' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-<span class=indam>There are</span> some windows.[sound:rec1327137165.mp3]<br /><br /></span><br><span style=''></span>","INFO":null,"STT":63},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-<span class=indam>Th_____</span> two small tables.<br /><img class='center-block img-responsive hinhdep'  src='pastemrzm0h.png' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-<span class=indam>There are</span> two small tables.[sound:rec1327137266.mp3]</span><br><span style=''></span>","INFO":null,"STT":64},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-<span class=indam>Th_____</span> some cushions on the sofa.<br /><img class='center-block img-responsive hinhdep'  src='pastefkygtq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-<span class=indam>There are</span> some cushions on the sofa.[sound:rec1327137275.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":65},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-<span class=indam>Th_____</span> a picture on the wall.<br /><img class='center-block img-responsive hinhdep'  src='pastew48lmw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-<span class=indam>There's</span> a picture on the wall.[sound:rec1327137286.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":66},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-<span class=indam>Th_____</span> some curtains.<br /><img class='center-block img-responsive hinhdep'  src='paster8ogg0.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What is there in the living room?<br />-<span class=indam>There are</span> some curtains.[sound:rec1327137292.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":67},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-<span class=indam>Th_____</span> a carpet.<br /><img class='center-block img-responsive hinhdep'  src='paste334tsl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-<span class=indam>There's</span> a carpet.[sound:rec1327137315.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":68},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-There are some <span class=indam>cu____</span> on the sofa.<br /><img class='center-block img-responsive hinhdep'  src='pastefkygtq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-There are some <span class=indam>cushions</span> on the sofa.[sound:rec1327137326.mp3]<br /><br /></span><br><span style=''><i>a cushion - диванная подушка</i><br /><i>note: a </i><span style='font-weight:600; font-style:italic;'>cushion</span><i> is for a </i><span style='font-weight:600; font-style:italic;'>sofa</span><i>, a </i><span style='font-weight:600; font-style:italic;'>pillow</span><i> is for a </i><span style='font-weight:600; font-style:italic;'>bed</span></span>","INFO":null,"STT":69},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-There are <span class=indam>s___</span> cushions on the sofa.<br /><img class='center-block img-responsive hinhdep'  src='pastefkygtq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-There are <span class=indam>some</span> cushions on the sofa.[sound:rec1327137332.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":70},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-There are some <span class=indam>cu____</span>.<br /><img class='center-block img-responsive hinhdep'  src='paster8ogg0.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-There are some <span class=indam>curtains</span>.[sound:rec1327137338.mp3]<br /><br /></span><br><span style=''><i>a curtain - штора, занавеска</i></span>","INFO":null,"STT":71},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-There's <span class=indam>[...]</span> carpet. <i>(one)</i><br /><img class='center-block img-responsive hinhdep'  src='paste334tsl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-There's <span class=indam>a</span> carpet.[sound:rec1327137348.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":72},
{"FRONT":"<span style='font-size: 28px; '>-What's in the living room?[sound:rec1334489207.mp3]<br />-There's <span class=indam>[...]</span> picture on the wall. <i>(one)</i><br /><img class='center-block img-responsive hinhdep'  src='pastew48lmw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the living room?<br />-There's <span class=indam>a</span> picture on the wall.[sound:rec1327137353.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":73},
{"FRONT":"<span style='font-size: 28px; '>-Are there <span class=indam>[...]</span> plants in your living room?[sound:rec1327137394.mp3]<br />-Yes, there are.<br /><img class='center-block img-responsive hinhdep'  src='pastert1mdx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Are there <span class=indam>any</span> plants in your living room?[sound:rec1327137408.mp3]<br />-Yes, there are.<br /></span><br><span style=''></span>","INFO":null,"STT":74},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> there any plants in your living room now?[sound:rec1327137435.mp3]<br />-Yes, there <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastert1mdx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Are</span> there any plants in your living room now?[sound:rec1327137453.mp3]<br />-Yes, there <span class=indam>are</span>.<br /></span><br><span style=''></span>","INFO":null,"STT":75},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> there a carpet on the floor now?[sound:rec1327137466.mp3]<br />-Yes, there <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasteitg78q.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Is</span> there a carpet on the floor now?<br />-Yes, there <span class=indam>is</span>.[sound:rec1334488928.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":76},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> there a fireplace in the living room now?[sound:rec1327137494.mp3]<br />-Yes, there <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastezmncdx.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Is</span> there a fireplace in the living room now?<br />-Yes, there <span class=indam>is</span>.[sound:rec1334488938.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":77},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> there a sports centre in the town now? [sound:rec1327137538.mp3]<br />-Yes, there <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastek029bm.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Is</span> there a sports centre in the town now? [sound:rec1334488949.mp3]<br />-Yes, there <span class=indam>is</span>.<br /></span><br><span style=''></span>","INFO":null,"STT":78},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> there any shelves on the wall?[sound:rec1327137560.mp3]<br />-Yes, there <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='paste9kztnr.jpg' /><br /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Are</span> there any shelves on the wall?<br />-Yes, there <span class=indam>are</span>.[sound:rec1334488964.mp3]<br /><br /></span><br><span style=''></span>","INFO":null,"STT":79},
{"FRONT":"<span style='font-size: 28px; '>-Are there any <span class=indam>sh____</span> on the wall?[sound:rec1327137580.mp3]<br />-Yes, there are.<br /><img class='center-block img-responsive hinhdep'  src='paste9kztnr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Are there any <span class=indam>shelves</span> on the wall?[sound:rec1327137587.mp3]<br />-Yes, there are.<br /><br /><br /></span><br><span style=''><i>a shelf, shelves (pl.) - полка, полки</i></span>","INFO":null,"STT":80},
{"FRONT":"<span style='font-size: 28px; '>-Are <span class=indam>[...]</span> any shelves on the wall?[sound:rec1327137613.mp3]<br />-Yes, <span class=indam>[...]</span> are.<br /><img class='center-block img-responsive hinhdep'  src='paste9kztnr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Are <span class=indam>there</span> any shelves on the wall?[sound:rec1327137623.mp3]<br />-Yes, <span class=indam>there</span> are.<br /></span><br><span style=''></span>","INFO":null,"STT":81},
{"FRONT":"<span style='font-size: 28px; '>-Are there <span class=indam>[...]</span> books on the shelves?[sound:rec1327137634.mp3]<br />-Yes, there are.<br /><img class='center-block img-responsive hinhdep'  src='paste2ircim.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Are there <span class=indam>any</span> books on the shelves?[sound:rec1327137642.mp3]<br />-Yes, there are.<br /></span><br><span style=''></span>","INFO":null,"STT":82},
{"FRONT":"<span style='font-size: 28px; '>There <span class=indam>[...]</span> a CD player in the living room. <i>(no CD player)</i>[sound:rec1327137654.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemquwoj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>There <span class=indam>isn't</span> a CD player in the living room.[sound:rec1327137667.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":83},
{"FRONT":"<span style='font-size: 28px; '>There isn't <span class=indam>[...]</span> CD player in the living room. <i>(one)</i>[sound:rec1327137676.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemquwoj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>There isn't <span class=indam>a</span> CD player in the living room.[sound:rec1327137683.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":84},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> isn't a CD player in the living room.[sound:rec1327137692.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemquwoj.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>There</span> isn't a CD player in the living room.[sound:rec1327137699.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":85},
{"FRONT":"<span style='font-size: 28px; '>There <span class=indam>[...]</span> any people on the beach.[sound:rec1327137714.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekgcvjn.jpg' /></span>","BACK":"<span style='font-size: 28px; '>There <span class=indam>aren't</span> any people on the beach.[sound:rec1327137742.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":86},
{"FRONT":"<span style='font-size: 28px; '>There aren't <span class=indam>[...]</span> people on the beach. <i>(no people)</i>[sound:rec1327137727.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekgcvjn.jpg' /></span>","BACK":"<span style='font-size: 28px; '>There aren't <span class=indam>any</span> people on the beach.[sound:rec1327137742.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":87},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> there a sofa in the bathroom?[sound:rec1327137753.mp3]<br />-No, there <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasterdsc6l.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Is</span> there a sofa in the bathroom?<br />-No, there <span class=indam>isn't</span>.[sound:rec1334488974.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":88},
{"FRONT":"<span style='font-size: 28px; '>-Is <span class=indam>[...]</span> a sofa in the bathroom?[sound:rec1327137795.mp3]<br />-No, <span class=indam>[...]</span> <span style='color:#000000;'>isn't</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasterdsc6l.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Is <span class=indam>there</span> a sofa in the bathroom?<br />-No, <span class=indam>there</span> <span style='color:#000000;'>isn't</span>.[sound:rec1334488974.mp3]<br /><br /></span><br><span style=''></span>","INFO":null,"STT":89},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> there any books in the bathroom?[sound:rec1327137807.mp3]<br />-No, there <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasterdsc6l.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Are</span> there any books in the bathroom?[sound:rec1327137818.mp3]<br />-No, there <span class=indam>aren't</span>.<br /></span><br><span style=''></span>","INFO":null,"STT":90},
{"FRONT":"<span style='font-size: 28px; '>-Are there <span class=indam>[...]</span> books in the bathroom?[sound:rec1327137834.mp3]<br />-No, there aren't.<br /><img class='center-block img-responsive hinhdep'  src='pasterdsc6l.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Are there <span class=indam>any</span> books in the bathroom?<br />-No, there aren't.[sound:rec1327137818.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":91},
{"FRONT":"<span style='font-size: 28px; '>&quot;We stayed at a wonderful hotel! There <span class=indam>[...]</span> a swimming pool.&quot;[sound:rec1327137889.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenqz3c8.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We stayed at a wonderful hotel! There <span class=indam>was</span> a swimming pool.&quot;[sound:rec1327137877.mp3]</span><br><span style=''></span>","INFO":null,"STT":92},
{"FRONT":"<span style='font-size: 28px; '>&quot;We stayed at a wonderful hotel! There <span class=indam>[...]</span> a great view.&quot;[sound:rec1328609456.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenqz3c8.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We stayed at a wonderful hotel! There <span class=indam>was</span> a great view.&quot;[sound:rec1328609472.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":93},
{"FRONT":"<span style='font-size: 28px; '>&quot;We stayed at a wonderful hotel! There was <span class=indam>[...]</span> great view.&quot;[sound:rec1328609484.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenqz3c8.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We stayed at a wonderful hotel! There was <span class=indam>a</span> great view.&quot;[sound:rec1328609492.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":94},
{"FRONT":"<span style='font-size: 28px; '>&quot;There <span class=indam>[...]</span> lots of deck chairs at the hotel where we stayed.&quot;[sound:rec1328609503.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteufstyu.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;There <span class=indam>were</span> lots of deck chairs at the hotel where we stayed.&quot;[sound:rec1328609520.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":95},
{"FRONT":"<span style='font-size: 28px; '>&quot;There <span class=indam>[...]</span> some plants at the hotel where we stayed.&quot;[sound:rec1328609534.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefnieys.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;There <span class=indam>were</span> some plants at the hotel where we stayed.&quot;[sound:rec1328609542.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":96},
{"FRONT":"<span style='font-size: 28px; '>Peter's sitting in a <span class=indam>d_____</span>.[sound:rec1328691197.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexevjzy.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Peter's sitting in a <span class=indam>deckchair</span>.[sound:rec1328691202.mp3]<br /></span><br><span style=''><i>a deckchair</i></span>","INFO":null,"STT":97},
{"FRONT":"<span style='font-size: 28px; '>&quot;We stayed at very small hotel - there <span class=indam>[...]</span> only 4 guests!&quot;[sound:rec1328691545.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8lelxc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We stayed at very small hotel - there <span class=indam>were</span> only 4 guests!&quot;[sound:rec1328691236.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":98},
{"FRONT":"<span style='font-size: 28px; '>&quot;We stayed at a very small hotel - <span class=indam>[...]</span> were only 4 guests!&quot;[sound:rec1328691559.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8lelxc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We stayed at a very small hotel - <span class=indam>there</span> were only 4 guests!&quot;[sound:rec1328691282.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":99},
{"FRONT":"<span style='font-size: 28px; '>&quot;We stayed at a very small hotel - <span class=indam>[...]</span> wasn't a swimming pool.&quot;[sound:rec1328691572.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8lelxc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We stayed at a very small hotel - <span class=indam>there</span> wasn't a swimming pool.&quot;[sound:rec1328691322.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":100},
{"FRONT":"<span style='font-size: 28px; '>&quot;We stayed at a very small hotel - there <span class=indam>[...]</span> a swimming pool.&quot; [sound:rec1328691589.mp3]<i>(no swimming pool)</i><br /><img class='center-block img-responsive hinhdep'  src='paste8lelxc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We stayed at a very small hotel - there <span class=indam>wasn't</span> a swimming pool.&quot;[sound:rec1328691369.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":101},
{"FRONT":"<span style='font-size: 28px; '>&quot;We stayed at a very small hotel - there <span class=indam>[...]</span> any double rooms.&quot; <i>(no double rooms)</i>[sound:rec1328691601.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8lelxc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We stayed at a very small hotel - there <span class=indam>weren't</span> any double rooms.&quot;[sound:rec1328691392.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":102},
{"FRONT":"<span style='font-size: 28px; '>&quot;We stayed at a very small hotel - there weren't <span class=indam>[...]</span> double rooms.&quot;[sound:rec1328691621.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8lelxc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We stayed at a very small hotel - there weren't <span class=indam>any</span> double rooms.&quot;[sound:rec1334489142.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":103},
{"FRONT":"<span style='font-size: 28px; '>-When you went to Britain, <span class=indam>[...]</span> there a bar in the hotel?<br />-Yes, there <span class=indam>[...]</span>.[sound:rec1328691645.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8lelxc.png' /></span>","BACK":"<span style='font-size: 28px; '>-When you went to Britain, <span class=indam>was</span> there a bar in the hotel?<br />-Yes, there <span class=indam>was</span>.[sound:rec1328691657.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":104},
{"FRONT":"<span style='font-size: 28px; '>-When you went to Britain, <span class=indam>[...]</span> there any nice guests in the hotel?<br />-No, there <span class=indam>[...]</span>.[sound:rec1328691670.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8lelxc.png' /></span>","BACK":"<span style='font-size: 28px; '>-When you went to Britain, <span class=indam>were</span> there any nice guests in the hotel?<br />-No, there <span class=indam>weren't</span>.[sound:rec1328691694.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":105},
{"FRONT":"<span style='font-size: 28px; '>-When you went to Britain, were there <span class=indam>[...]</span> nice guests in the hotel?<br />-No, there weren't.[sound:rec1328691709.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8lelxc.png' /></span>","BACK":"<span style='font-size: 28px; '>-When you went to Britain, were there <span class=indam>any</span> nice guests in the hotel?<br />-No, there weren't.[sound:rec1328691720.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":106},
{"FRONT":"<span style='font-size: 28px; '>He's <span class=indam>ly___</span> on a sun lounger.[sound:rec1328691729.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez8qjcz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's <span class=indam>lying</span> on a sun lounger.[sound:rec1328691741.mp3]<br /><br /><br /></span><br><span style=''><i>to lie - лежать</i></span>","INFO":null,"STT":107},
{"FRONT":"<span style='font-size: 28px; '>He's lying on a <span class=indam>s___ lo____</span>.[sound:rec1328691755.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez8qjcz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's lying on a <span class=indam>sun lounger</span>.[sound:rec1328691760.mp3]<br /><br /></span><br><span style=''><i>a sun lounger</i></span>","INFO":null,"STT":108},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> he doing?<br />-He's having a shower.[sound:rec1328691769.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesuppl2.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>What's</span> he doing?[sound:rec1328691775.mp3]<br />-He's having a shower.<br /></span><br><span style=''></span>","INFO":null,"STT":109},
{"FRONT":"<span style='font-size: 28px; '>-What's he <span class=indam>[...]</span>?[sound:rec1328691784.mp3]<br />-He's having a shower.<br /><img class='center-block img-responsive hinhdep'  src='pastesuppl2.png' /></span>","BACK":"<span style='font-size: 28px; '>-What's he <span class=indam>doing</span>?[sound:rec1328691795.mp3]<br />-He's having a shower.<br /><br /><br /></span><br><span style=''><i>to do - делать</i></span>","INFO":null,"STT":110},
{"FRONT":"<span style='font-size: 28px; '>-What's he doing?[sound:rec1334489005.mp3]<br />-He <span class=indam>______</span> a shower. <b>(have)</b><br /><img class='center-block img-responsive hinhdep'  src='pastesuppl2.png' /></span>","BACK":"<span style='font-size: 28px; '>-What's he doing?<br />-He<span class=indam>'s having</span> a shower.[sound:rec1328691820.mp3]<br /></span><br><span style=''><i>to have a shower - принимать душ</i></span>","INFO":null,"STT":111},
{"FRONT":"<span style='font-size: 28px; '>He <span class=indam>_______</span> on a sun lounger. <b>(lie)</b>[sound:rec1328691831.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez8qjcz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He<span class=indam>'s lying</span> on a sun lounger.[sound:rec1328691839.mp3]<br /></span><br><span style=''><i>to lie - лежать</i></span>","INFO":null,"STT":112},
{"FRONT":"<span style='font-size: 28px; '>-What <span class=indam>[...]</span> they doing?[sound:rec1328691849.mp3]<br />-They're dancing.<br /><img class='center-block img-responsive hinhdep'  src='pastezmsmza.png' /></span>","BACK":"<span style='font-size: 28px; '>-What <span class=indam>are</span> they doing?[sound:rec1328691856.mp3]<br />-They're dancing.<br /></span><br><span style=''></span>","INFO":null,"STT":113},
{"FRONT":"<span style='font-size: 28px; '>-What are they <span class=indam>[...]</span>?[sound:rec1328691868.mp3]<br />-They're dancing.<br /><img class='center-block img-responsive hinhdep'  src='pastezmsmza.png' /></span>","BACK":"<span style='font-size: 28px; '>-What are they <span class=indam>doing</span>?[sound:rec1328691873.mp3]<br />-They're dancing.<br /></span><br><span style=''></span>","INFO":null,"STT":114},
{"FRONT":"<span style='font-size: 28px; '>-What are they doing?[sound:rec1328691889.mp3]<br />-They <span class=indam>_______</span>. <b>(dance)</b><br /><img class='center-block img-responsive hinhdep'  src='pastezmsmza.png' /></span>","BACK":"<span style='font-size: 28px; '>-What are they doing?<br />-They<span class=indam>'re dancing</span>.[sound:rec1328691895.mp3]<br /></span><br><span style=''><i>to dance - танцевать</i></span>","INFO":null,"STT":115},
{"FRONT":"<span style='font-size: 28px; '>-What are they doing?[sound:rec1328691902.mp3]<br />-They're <span class=indam>d_____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastezmsmza.png' /></span>","BACK":"<span style='font-size: 28px; '>-What are they doing?<br />-They're <span class=indam>dancing</span>.[sound:rec1328691906.mp3]<br /><br /><br /></span><br><span style=''><i>to dance - танцевать</i><br></span>","INFO":null,"STT":116},
{"FRONT":"<span style='font-size: 28px; '>-What <span class=indam>[...]</span> you doing?[sound:rec1328691931.mp3]<br />-I'm listening <b>to</b> music.<br /><img class='center-block img-responsive hinhdep'  src='pasteg7yvnc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What <span class=indam>are</span> you doing?[sound:rec1328691940.mp3]<br />-I'm listening <b>to</b> music.<br /></span><br><span style=''></span>","INFO":null,"STT":117},
{"FRONT":"<span style='font-size: 28px; '>-What are you doing?[sound:rec1328691947.mp3]<br />-I<span class=indam>____</span> listening to music.<br /><img class='center-block img-responsive hinhdep'  src='pasteg7yvnc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What are you doing?<br />-I<span class=indam>'m</span> listening to music.[sound:rec1328691957.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":118},
{"FRONT":"<span style='font-size: 28px; '>-What are you doing?[sound:rec1328691970.mp3]<br />-I'm <span class=indam>li____</span> <b>to</b> music.<br /><img class='center-block img-responsive hinhdep'  src='pasteg7yvnc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What are you doing?<br />-I'm <span class=indam>listening</span> <b>to</b> music.[sound:rec1328691975.mp3]<br /></span><br><span style=''><i>to listen - слушать</i></span>","INFO":null,"STT":119},
{"FRONT":"<span style='font-size: 28px; '>-What are you doing?[sound:rec1328691982.mp3]<br />-I <span class=indam>______</span> to music. <b>(listen)</b><br /><img class='center-block img-responsive hinhdep'  src='pasteg7yvnc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What are you doing?<br />-I<span class=indam>'m listening</span> to music.[sound:rec1328691988.mp3]<br /></span><br><span style=''><i>to listen - слушать</i></span>","INFO":null,"STT":120},
{"FRONT":"<span style='font-size: 28px; '>-What are you doing?[sound:rec1328691993.mp3]<br />-We <span class=indam>______</span> football. <b>(play)</b><br /><img class='center-block img-responsive hinhdep'  src='paster13zb_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What are you doing?<br />-We<span class=indam>'re playing</span> football.[sound:rec1328692007.mp3]<br /></span><br><span style=''><i>to play football - играть в футбол</i></span>","INFO":null,"STT":121},
{"FRONT":"<span style='font-size: 28px; '>-What's she doing?[sound:rec1328692018.mp3]<br />-She <span class=indam>________</span> TV.<br /><img class='center-block img-responsive hinhdep'  src='pastefoydue.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What's she doing?<br />-She<span class=indam>'s watching</span> TV.[sound:rec1328692023.mp3]<br /></span><br><span style=''><i>to watch TV - смотреть телевизор</i></span>","INFO":null,"STT":122},
{"FRONT":"<span style='font-size: 28px; '>-What&nbsp;&nbsp;<span class=indam>________</span>? <b>(she / do)</b>[sound:rec1328692035.mp3]<br />-She's watching TV.<br /><img class='center-block img-responsive hinhdep'  src='pastefoydue.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What<span class=indam>'s</span> <span class=indam>she doing</span>?[sound:rec1328692041.mp3]<br />-She's watching TV.<br /></span><br><span style=''></span>","INFO":null,"STT":123},
{"FRONT":"<span style='font-size: 28px; '>-What <span class=indam>_________</span>? <b>(they / do)</b>[sound:rec1328692053.mp3]<br />-They're dancing.<br /><img class='center-block img-responsive hinhdep'  src='pastezmsmza.png' /></span>","BACK":"<span style='font-size: 28px; '>-What <span class=indam>are they doing</span>?[sound:rec1328692059.mp3]<br />-They're dancing.</span><br><span style=''></span>","INFO":null,"STT":124},
{"FRONT":"<span style='font-size: 28px; '>&quot;Oh dear. Her baby <span class=indam>_______</span>.&quot; <b>(cry)</b>[sound:rec1328692069.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedt5w2n.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Oh dear. Her baby<span class=indam>'s crying</span>.&quot;[sound:rec1328692076.mp3]<br /></span><br><span style=''><i>to cry - плакать</i></span>","INFO":null,"STT":125},
{"FRONT":"<span style='font-size: 28px; '>&quot;Her baby <span class=indam>____</span> every day.&quot; <b>(cry)</b>[sound:rec1328692099.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedt5w2n.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Her baby <span class=indam>cries</span> every day.&quot; [sound:rec1334489014.mp3]<br /></span><br><span style=''><i>to cry - плакать</i></span>","INFO":null,"STT":126},
{"FRONT":"<span style='font-size: 28px; '>&quot;My neighbours <span class=indam>____</span> again!&quot; <b>(argue)</b>[sound:rec1328692120.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste40919i.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My neighbours <span class=indam>are arguing</span> again!&quot;[sound:rec1328692141.mp3]<br /></span><br><span style=''><i>to argue - спорить</i></span>","INFO":null,"STT":127},
{"FRONT":"<span style='font-size: 28px; '>&quot;We like <span class=indam>_____</span> football!&quot; <b>(play)</b>[sound:rec1328955621.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paster13zb_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We like <span class=indam>playing</span> football!&quot;[sound:rec1328955632.mp3]<br /></span><br><span style=''><i>to play football - играть в футбол</i></span>","INFO":null,"STT":128},
{"FRONT":"<span style='font-size: 28px; '>&quot;We <span class=indam>____</span> football every day!&quot; <b>(play)</b>[sound:rec1328955640.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paster13zb_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We <span class=indam>play</span> football every day!&quot;[sound:rec1328955654.mp3]<br /></span><br><span style=''><i>to play football - играть в футбол</i></span>","INFO":null,"STT":129},
{"FRONT":"<span style='font-size: 28px; '>Dennis <span class=indam>______</span> in his armchair again.<b> (sleep)</b>[sound:rec1328955667.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehjv8vf.png' /></span>","BACK":"<span style='font-size: 28px; '>Dennis<span class=indam> is sleeping</span> in his armchair again.[sound:rec1328955684.mp3]<br /></span><br><span style=''><i>to sleep - спать</i></span>","INFO":null,"STT":130},
{"FRONT":"<span style='font-size: 28px; '>-Good morning. Where <span class=indam>_______</span>?<b> (you / go)</b>[sound:rec1328955731.mp3]<br />-I'm going to the supermarket.<br /><img class='center-block img-responsive hinhdep'  src='paste_wvyxd.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Good morning. Where <span class=indam>are you going</span>?[sound:rec1328955738.mp3]<br />-I'm going to the supermarket.<br /></span><br><span style=''></span>","INFO":null,"STT":131},
{"FRONT":"<span style='font-size: 28px; '>-Good morning. Where are you going?[sound:rec1328955751.mp3]<br />-<span class=indam>______</span> to the supermarket. <b>(I / go)</b><br /><img class='center-block img-responsive hinhdep'  src='paste_wvyxd.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Good morning. Where are you going?<br />-<span class=indam>I'm going</span> to the supermarket.[sound:rec1328955757.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":132},
{"FRONT":"<span style='font-size: 28px; '>The ghost is <span class=indam>[...]</span> the sofa.[sound:rec1328955766.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep6mnwz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The ghost is <span class=indam>behind</span> the sofa.[sound:rec1328955773.mp3]<br /></span><br><span style=''><i>behind - за, позади</i></span>","INFO":null,"STT":133},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you believe in <span class=indam>gh____</span>?&quot; <i>(spirits of dead people)</i>[sound:rec1328955780.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuxbh7i.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you believe in <span class=indam>ghosts</span>?&quot;[sound:rec1328955785.mp3]<br /><br /><br /><br /><br /></span><br><span style=''><i>a ghost - призрак, привидение</i></span>","INFO":null,"STT":134},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you believe <span class=indam>[...]</span> ghosts?&quot;[sound:rec1328955793.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuxbh7i.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you believe <span class=indam>in</span> ghosts?&quot;[sound:rec1328955800.mp3]<br /><br /></span><br><span style=''><i>to believe </i><span style='font-weight:600; font-style:italic;'>in</span><i> sth. - верить во что-л.</i></span>","INFO":null,"STT":135},
{"FRONT":"<span style='font-size: 28px; '>The ghost is <span class=indam>[...]</span> the window and the door.[sound:rec1328955809.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4kbzjr.png' /></span>","BACK":"<span style='font-size: 28px; '>The ghost is <span class=indam>between</span> the window and the door.[sound:rec1328955817.mp3]<br /></span><br><span style=''><i>between - между</i></span>","INFO":null,"STT":136},
{"FRONT":"<span style='font-size: 28px; '>Look! The plane <span class=indam>______</span> over the city. <b>(fly)</b>[sound:rec1328955893.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexkm4c6.png' /></span>","BACK":"<span style='font-size: 28px; '>Look! The plane <span class=indam>is flying</span> over the city.[sound:rec1328955836.mp3]<br /></span><br><span style=''><i>to fly - летать</i></span>","INFO":null,"STT":137},
{"FRONT":"<span style='font-size: 28px; '>The plane is flying <span class=indam>[...]</span> the city.[sound:rec1328955910.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexkm4c6.png' /></span>","BACK":"<span style='font-size: 28px; '>The plane is flying <span class=indam>over</span> the city.[sound:rec1328955920.mp3]<br /></span><br><span style=''><i>to fly over sth. - пролетать над чем-л.</i><br></span>","INFO":null,"STT":138},
{"FRONT":"<span style='font-size: 28px; '>&quot;Daddy is <span class=indam>[...]</span> the table.&quot;[sound:rec1328955929.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenxsbkb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Daddy is <span class=indam>under</span> the table.&quot;<br />[sound:rec1328955936.mp3]</span><br><span style=''><i>under - под</i></span>","INFO":null,"STT":139},
{"FRONT":"<span style='font-size: 28px; '>She sat <span class=indam>op____</span> me.[sound:rec1328955946.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehllic3.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She sat <span class=indam>opposite</span> me.[sound:rec1328955951.mp3]<br /></span><br><span style=''><i>opposite - напротив</i></span>","INFO":null,"STT":140},
{"FRONT":"<span style='font-size: 28px; '>My house is <span class=indam>[...]</span> his house.[sound:rec1328955973.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemnqyj6.jpg' /></span>","BACK":"<span style='font-size: 28px; '>My house is <span class=indam>opposite</span> his house.[sound:rec1328955980.mp3]<br /></span><br><span style=''><i>opposite - напротив</i></span>","INFO":null,"STT":141},
{"FRONT":"<span style='font-size: 28px; '>&quot;My neighbours are <span class=indam>ar____</span> again!&quot;[sound:rec1328955989.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste40919i.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My neighbours are <span class=indam>arguing</span> again!&quot;[sound:rec1328955998.mp3]<br /><br /><br /></span><br><span style=''><i>to argue - спорить</i></span>","INFO":null,"STT":142},
{"FRONT":"<span style='font-size: 28px; '>&quot;Oh dear. Her <span class=indam>b___</span>'s crying.&quot; <i>(a small child)</i>[sound:rec1328956008.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedt5w2n.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Oh dear. Her <span class=indam>baby</span>'s crying.&quot;[sound:rec1334489022.mp3]<br /><br /><br /></span><br><span style=''><i>a baby - младенец, малыш</i></span>","INFO":null,"STT":143},
{"FRONT":"<span style='font-size: 28px; '>His dog <span class=indam>b___</span> every day. <i>(makes noise by 'shouting')</i>[sound:rec1328956031.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejd3oom.jpg' /></span>","BACK":"<span style='font-size: 28px; '>His dog <span class=indam>barks</span> every day.[sound:rec1328956037.mp3]<br /><br /><br /></span><br><span style=''><i>to bark - лаять</i></span>","INFO":null,"STT":144},
{"FRONT":"<span style='font-size: 28px; '>&quot;Oh no! His dog <span class=indam>______</span> again!&quot; <b>(bark)</b>[sound:rec1328956053.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejd3oom.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Oh no! His dog<span class=indam>'s barking</span> again!&quot;[sound:rec1328956068.mp3]</span><br><span style=''><i>to bark - лаять</i></span>","INFO":null,"STT":145},
{"FRONT":"<span style='font-size: 28px; '>There are lots of beautiful <span class=indam>bu_____</span> in St. Petersburg. <i>(for example, houses)</i>[sound:rec1328956087.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezwzb3m.jpg' /></span>","BACK":"<span style='font-size: 28px; '>There are lots of beautiful <span class=indam>buildings</span> in St. Petersburg.[sound:rec1328956094.mp3]<br /><br /><br /></span><br><span style=''><i>a building - здание</i></span>","INFO":null,"STT":146},
{"FRONT":"<span style='font-size: 28px; '>Karl Marx lived in the nineteenth <span class=indam>c_____</span>. <i>(from 1800 to 1900)</i>[sound:rec1328956116.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteriey4w.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Karl Marx lived in the nineteenth <span class=indam>century</span>.[sound:rec1328956132.mp3]<br /><br /></span><br><span style=''><i>a century - век</i><br /> </span>","INFO":null,"STT":147},
{"FRONT":"<span style='font-size: 28px; '>&quot;Oh dear. Her baby's <span class=indam>cr____</span>.&quot;[sound:rec1328956143.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedt5w2n.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Oh dear. Her baby's <span class=indam>crying</span>.&quot;[sound:rec1328956150.mp3]<br /><br /></span><br><span style=''><i>to cry - плакать</i></span>","INFO":null,"STT":148},
{"FRONT":"<span style='font-size: 28px; '>An <span class=indam>es___&nbsp;&nbsp;ag____</span> is a person who sells flats and houses.[sound:rec1328956159.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyehb5f.jpg' /></span>","BACK":"<span style='font-size: 28px; '>An <span class=indam>estate agent</span> is a person who sells flats and houses.[sound:rec1328956168.mp3]<br /></span><br><span style=''><i>an estate agent - агент по недвижимости, риэлтор</i></span>","INFO":null,"STT":149},
{"FRONT":"<span style='font-size: 28px; '>&quot;When I saw his dog I was very <span class=indam>fr_____</span>!&quot; <i>(afraid)</i>[sound:rec1328956176.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuklruz.png' /><img class='center-block img-responsive hinhdep'  src='pastepmonar.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;When I saw his dog I was very <span class=indam>frightened</span>!&quot;[sound:rec1328956181.mp3]<br /><br /></span><br><span style=''><i>to be frightened - быть испуганным, испугаться</i></span>","INFO":null,"STT":150},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you <span class=indam>be___</span> in ghosts?&quot; <i>(think that they exist)</i>[sound:rec1328956190.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuxbh7i.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you <span class=indam>believe</span> in ghosts?&quot;[sound:rec1328956200.mp3]<br /><br /><br /></span><br><span style=''><i>to believe in sth. - верить во что-л.</i></span>","INFO":null,"STT":151},
{"FRONT":"<span style='font-size: 28px; '>&quot;This is my <span class=indam>lo____</span> pub.&quot; <i>(close to my house) </i>[sound:rec1328956207.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqbmp4e.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;This is my <span class=indam>local</span> pub.&quot;[sound:rec1328956241.mp3]<br /></span><br><span style=''><i>local (adj.) - местный</i></span>","INFO":null,"STT":152},
{"FRONT":"<span style='font-size: 28px; '>&quot;This is my local <span class=indam>p___</span>.&quot; <i>(place where you can drink alcohol)</i> [sound:rec1328956226.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqbmp4e.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;This is my local <span class=indam>pub</span>.&quot; [sound:rec1328956230.mp3]<br /><br /></span><br><span style=''><i>a pub - паб, бар</i></span>","INFO":null,"STT":153},
{"FRONT":"<span style='font-size: 28px; '>&quot;I have very <span class=indam>fr____</span> neighbours.&quot; <i>(nice, kind)</i>[sound:rec1328956251.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekdrnyf.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I have very <span class=indam>friendly</span> neighbours.&quot;[sound:rec1328956257.mp3]<br /></span><br><span style=''><i>friendly (adj.) - дружественный</i></span>","INFO":null,"STT":154},
{"FRONT":"<span style='font-size: 28px; '>&quot;I have very friendly <span class=indam>ne_____</span>.&quot; <i>(people who live near me)</i>[sound:rec1328956264.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekdrnyf.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I have very friendly <span class=indam>neighbours</span>.&quot;[sound:rec1328956269.mp3]<br /><br /></span><br><span style=''><i>a neighbour - сосед</i><br></span>","INFO":null,"STT":155},
{"FRONT":"<span style='font-size: 28px; '>&quot;I have <span class=indam>no____</span> neighbours!&quot; <i>(for example they play loud music)</i>[sound:rec1328956275.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezsepw7.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I have <span class=indam>noisy</span> neighbours!&quot;[sound:rec1328956281.mp3]<br /><br /></span><br><span style=''><i>noisy (adj.) - шумный</i></span>","INFO":null,"STT":156},
{"FRONT":"<span style='font-size: 28px; '>There is <span class=indam>on___</span> one passenger on the bus. <i>(just)</i>[sound:rec1328956292.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebhfpyb.png' /></span>","BACK":"<span style='font-size: 28px; '>There is <span class=indam>only</span> one passenger on the bus.[sound:rec1328956300.mp3]<br /></span><br><span style=''><i>only - только</i></span>","INFO":null,"STT":157},
{"FRONT":"<span style='font-size: 28px; '>There is only one <span class=indam>pa_____</span> on the bus. <i>(person, traveller)</i>[sound:rec1328956309.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebhfpyb.png' /></span>","BACK":"<span style='font-size: 28px; '>There is only one <span class=indam>passenger</span> on the bus.[sound:rec1328956316.mp3]<br /><br /></span><br><span style=''><i>a passenger - пассажир</i></span>","INFO":null,"STT":158},
{"FRONT":"<span style='font-size: 28px; '>The <span class=indam>pr____</span> of this food is £1. <i>(money to buy it)</i>[sound:rec1328956324.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste38fnxk.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The <span class=indam>price</span> of this food is £1. [sound:rec1328956330.mp3]<br /><br /></span><br><span style=''><i>a price - цена</i><br /> </span>","INFO":null,"STT":159},
{"FRONT":"<span style='font-size: 28px; '>What's the <b>price</b> of this food?[sound:rec1328956336.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste38fnxk.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>£1</span>[sound:rec1328956341.mp3]</span><br><span style=''><i>one pound</i></span>","INFO":null,"STT":160},
{"FRONT":"<span style='font-size: 28px; '>He works in a church - he's a <span class=indam>pr____</span>.[sound:rec1328956360.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecdgj4q.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He works in a church - he's a <span class=indam>priest</span>.[sound:rec1328956366.mp3]</span><br><span style=''><i>a priest - священник</i></span>","INFO":null,"STT":161},
{"FRONT":"<span style='font-size: 28px; '>The opposite of loud is <span class=indam>qu____</span>.[sound:rec1328956372.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9avjn_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The opposite of loud is <span class=indam>quiet</span>.[sound:rec1328956376.mp3]<br /></span><br><span style=''><i>quiet (adj.) - тихий</i></span>","INFO":null,"STT":162},
{"FRONT":"<span style='font-size: 28px; '>&quot;This music is too <span class=indam>lo___</span>!&quot;[sound:rec1328956384.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebjg5dz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;This music is too <span class=indam>loud</span>!&quot;[sound:rec1328956388.mp3]<br /></span><br><span style=''><i>loud (adj.) - громкий</i></span>","INFO":null,"STT":163},
{"FRONT":"<span style='font-size: 28px; '>&quot;What a big <span class=indam>sh___</span>!&quot;[sound:rec1328956395.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste60jl54.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;What a big <span class=indam>ship</span>!&quot;[sound:rec1328956415.mp3]<br /><br /></span><br><span style=''><i>a ship - корабль</i></span>","INFO":null,"STT":164},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you <span class=indam>sp___</span> a lot of money?&quot; <i>(buy lots of things in shops, etc.)</i>[sound:rec1328956423.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep2wqw2.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you <span class=indam>spend</span> a lot of money?&quot;[sound:rec1328956431.mp3]<br /><br /><br /></span><br><span style=''><i>to spend - тратить</i></span>","INFO":null,"STT":165},
{"FRONT":"<span style='font-size: 28px; '>&quot;I <span class=indam>sp___</span> lots of money on clothes.&quot; <i>(buy lots of clothes)</i>[sound:rec1328956525.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezi4cn0.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I <span class=indam>spend</span> lots of money on clothes.&quot;[sound:rec1334489029.mp3]<br /><br /></span><br><span style=''><i>to </i><span style='font-weight:600; font-style:italic;'>spend</span><i> money </i><span style='font-weight:600; font-style:italic;'>on</span><i> sth. - тратить деньги на что-л.</i></span>","INFO":null,"STT":166},
{"FRONT":"<span style='font-size: 28px; '>&quot;I <b>spend</b> lots of money <span class=indam>[...]</span> clothes.&quot;[sound:rec1328956539.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezi4cn0.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I <b>spend</b> lots of money <span class=indam>on</span> clothes.&quot;[sound:rec1334489039.mp3]<br /><br /></span><br><span style=''><i>to </i><span style='font-weight:600; font-style:italic;'>spend</span><i> money </i><span style='font-weight:600; font-style:italic;'>on</span><i> sth. - тратить деньги на что-л.</i></span>","INFO":null,"STT":167},
{"FRONT":"<span style='font-size: 28px; '>&quot;That's a very <span class=indam>st___</span> house!&quot; <i>(unusual, odd, interesting)</i>[sound:rec1328956557.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteplupk1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;That's a very <span class=indam>strange</span> house!&quot;[sound:rec1328956571.mp3]<br /></span><br><span style=''><i>strange (adj.) - странный</i></span>","INFO":null,"STT":168},
{"FRONT":"<span style='font-size: 28px; '>In London, the metro is called '<span class=indam>The Und_____</span>'.[sound:rec1328956603.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezseptx.png' /></span>","BACK":"<span style='font-size: 28px; '>In London, the metro is called '<span class=indam>The Underground</span>'.[sound:rec1328956590.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":169},
{"FRONT":"<span style='font-size: 28px; '>In London, the metro <b>is</b> <span class=indam>ca____</span> 'The Underground'.[sound:rec1328956612.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezseptx.png' /></span>","BACK":"<span style='font-size: 28px; '>In London, the metro <b>is</b> <span class=indam>called</span> 'The Underground'.[sound:rec1328956630.mp3]<br /><br /></span><br><span style=''><i>to be called sth. - называться</i></span>","INFO":null,"STT":170},
{"FRONT":"<span style='font-size: 28px; '>&quot;My brother plays the <span class=indam>vi____</span>.&quot;[sound:rec1328956686.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefvovfc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My brother plays the <span class=indam>violin</span>.&quot;[sound:rec1328956692.mp3]<br /></span><br><span style=''><i>a violin - скрипка</i></span>","INFO":null,"STT":171},
{"FRONT":"<span style='font-size: 28px; '>&quot;My brother plays <span class=indam>[...]</span> violin.&quot;[sound:rec1328956700.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefvovfc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My brother plays <span class=indam>the</span> violin.&quot;[sound:rec1328956706.mp3]<br /></span><br><span style=''><i>a violin - скрипка</i><br></span>","INFO":null,"STT":172},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1328956717.mp3]It's a <span class=indam>ce____</span>. <i>(a place where dead people lie)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteryzl3_.png' /></span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>cemetery</span>.[sound:rec1328956722.mp3]</span><br><span style=''><i>a cemetery - кладбище</i></span>","INFO":null,"STT":173},
{"FRONT":"<span style='font-size: 28px; '>There's a long <span class=indam>qu___</span> for the bus. <i>(a line of people waiting for something)</i>[sound:rec1328956773.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekmqogl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>There's a long <span class=indam>queue</span> for the bus.[sound:rec1328956779.mp3]<br /><br /></span><br><span style=''><i>a queue - очередь</i></span>","INFO":null,"STT":174},
{"FRONT":"<span style='font-size: 28px; '>They're <span class=indam>tr___ li____</span>.[sound:rec1328956806.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastet0yzy3.png' /></span>","BACK":"<span style='font-size: 28px; '>They're <span class=indam>traffic lights</span>.[sound:rec1328956811.mp3]<br /></span><br><span style=''><i>traffic lights (n.) - светофор</i></span>","INFO":null,"STT":175},
{"FRONT":"<span style='font-size: 28px; '>Kate's <span class=indam>ch____</span> sweets. <i>(taking the sweets she likes)</i>[sound:rec1328956826.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq6ypnq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Kate's <span class=indam>choosing</span> sweets.[sound:rec1328956831.mp3]<br /><br /><br /></span><br><span style=''><i>to choose - выбирать</i></span>","INFO":null,"STT":176},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! What does he say?<br /><br />a) The house is 30 miles from Cambridge.<br />b) The house is 13 miles from Cambridge.<br>[sound:rec1328956853.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) The house is 30 miles from Cambridge.</span>[sound:rec1328956853.mp3]</span><br><span style=''></span>","INFO":null,"STT":177},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! What does he say?<br /> <br />a) The house is 30 miles from Cambridge.<br />b) The house is 13 miles from Cambridge.<br>[sound:rec1328956865.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) The house is 13 miles from Cambridge.</span>[sound:rec1328956865.mp3]</span><br><span style=''></span>","INFO":null,"STT":178},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! What does he say?<br /><br />a) The house is 19 years old.<br />b) The house is 90 years old.[sound:rec1328956875.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) The house is 19 years old.</span>[sound:rec1328956875.mp3]</span><br><span style=''></span>","INFO":null,"STT":179},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! What does he say?<br /> <br />a) The house is 19 years old.<br />b) The house is 90 years old.[sound:rec1328956884.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) The house is 90 years old.</span>[sound:rec1328956884.mp3]</span><br><span style=''></span>","INFO":null,"STT":180},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! What does he say?<br /> <br />a) Come to my house at 3.30.<br />b) Come to my house at 4.30.[sound:rec1328956900.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) Come to my house at 3.30.</span>[sound:rec1328956900.mp3]</span><br><span style=''></span>","INFO":null,"STT":181},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! What does he say?<br />&nbsp;&nbsp;<br />a) Come to my house at 3.30.<br />b) Come to my house at 4.30.[sound:rec1328956909.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) Come to my house at 4.30.</span>[sound:rec1328956909.mp3]</span><br><span style=''></span>","INFO":null,"STT":182},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! What does he say?<br />&nbsp;&nbsp;<br />a) Come to my house on Tuesday.<br />b) Come to my house on Thursday.[sound:rec1328956918.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) Come to my house on Tuesday.</span>[sound:rec1328956918.mp3]</span><br><span style=''></span>","INFO":null,"STT":183},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! What does he say?<br />&nbsp;&nbsp;&nbsp;<br />a) Come to my house on Tuesday.<br />b) Come to my house on Thursday.[sound:rec1328956926.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) Come to my house on Thursday.</span>[sound:rec1328956926.mp3]</span><br><span style=''></span>","INFO":null,"STT":184},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>___ ___</span> bottles of wine are there?[sound:rec1328956938.mp3]<br />-Six.<br /><img class='center-block img-responsive hinhdep'  src='pastezq0tmw.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>How many</span> bottles of wine are there?[sound:rec1328956945.mp3]<br />-Six.<br /></span><br><span style=''><i>how many ...? - сколько</i></span>","INFO":null,"STT":185},
{"FRONT":"<span style='font-size: 28px; '>-How many bottles of wine <span class=indam>___ th____</span>?[sound:rec1328956954.mp3]<br />-Six.<br /><img class='center-block img-responsive hinhdep'  src='pastezq0tmw.png' /></span>","BACK":"<span style='font-size: 28px; '>-How many bottles of wine <span class=indam>are there</span>?[sound:rec1328956963.mp3]<br />-Six.<br /></span><br><span style=''></span>","INFO":null,"STT":186},
{"FRONT":"<span style='font-size: 28px; '>Look, some birds <span class=indam>______</span> over there. <b>(fly)</b>[sound:rec1336840381.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetbk_pa.png' /></span>","BACK":"<span style='font-size: 28px; '>Look, some birds <span class=indam>are flying</span> over there.[sound:rec1336840388.mp3]</span><br><span style=''><i>to fly - летать</i></span>","INFO":null,"STT":187},
{"FRONT":"<span style='font-size: 28px; '>Oh my God! <span class=indam>T____</span> a cow in the living room![sound:rec1336840508.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesgmhjs.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Oh my God! <span class=indam>There's</span> a cow in the living room![sound:rec1336840516.mp3]</span><br><span style=''></span>","INFO":null,"STT":188},
{"FRONT":"<span style='font-size: 28px; '>Look! <span class=indam>T____</span> a dog driving a car![sound:rec1336840572.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefizwf7.png' /></span>","BACK":"<span style='font-size: 28px; '>Look! <span class=indam>There's</span> a dog driving a car![sound:rec1336840579.mp3]</span><br><span style=''></span>","INFO":null,"STT":189},
{"FRONT":"<span style='font-size: 28px; '>You can't swim here because <span class=indam>t____ ___</span> crocodiles.[sound:rec1336840591.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9aebwl.png' /></span>","BACK":"<span style='font-size: 28px; '>You can't swim here because <span class=indam>there are</span> crocodiles.[sound:rec1336840598.mp3]</span><br><span style=''></span>","INFO":null,"STT":190},
{"FRONT":"<span style='font-size: 28px; '>Oh dear, <span class=indam>t_____</span> an elephant on the road![sound:rec1336840612.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekifqox.png' /></span>","BACK":"<span style='font-size: 28px; '>Oh dear, <span class=indam>there's</span> an elephant on the road![sound:rec1336840618.mp3]</span><br><span style=''></span>","INFO":null,"STT":191},
{"FRONT":"<span style='font-size: 28px; '>What are you doing?[sound:rec1336840625.mp3]<br />I <span class=indam>_______ </span>a letter to my aunt. <b>(write)</b><br /><img class='center-block img-responsive hinhdep'  src='pasteuhqlfd.png' /></span>","BACK":"<span style='font-size: 28px; '>I<span class=indam>'m writing </span>a letter to my aunt.[sound:rec1336840647.mp3]</span><br><span style=''><i>to write - писать</i></span>","INFO":null,"STT":192},
{"FRONT":"<span style='font-size: 28px; '>What are you doing?<br />I'm writing a letter <span class=indam>[...]</span> my aunt.[sound:rec1336840658.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuhqlfd.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm writing a letter <span class=indam>to</span> my aunt.[sound:rec1336840663.mp3]</span><br><span style=''></span>","INFO":null,"STT":193},
{"FRONT":"<span style='font-size: 28px; '>What are you doing?[sound:rec1336840675.mp3]<br />I'm writing a <span class=indam>l____</span> to my aunt.<br /><img class='center-block img-responsive hinhdep'  src='pasteuhqlfd.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm writing a <span class=indam>letter</span> to my aunt.[sound:rec1336840680.mp3]<br /><br /></span><br><span style=''><i>a letter - письмо</i></span>","INFO":null,"STT":194},
{"FRONT":"<span style='font-size: 28px; '>What are Alice and her mother doing?[sound:rec1336840687.mp3]<br />-They're <span class=indam>m_____</span> pancakes.<br /><img class='center-block img-responsive hinhdep'  src='pastezeesy6.jpg' /><img class='center-block img-responsive hinhdep'  src='pasteasb10i.png' /></span>","BACK":"<span style='font-size: 28px; '>They're <span class=indam>making</span> pancakes.[sound:rec1336840692.mp3]</span><br><span style=''><i>to make sth. - делать, готовить что-л.</i><br></span>","INFO":null,"STT":195},
{"FRONT":"<span style='font-size: 28px; '>What are Alice and her mother doing?[sound:rec1336840687.mp3]<br />-They're making <span class=indam>p_____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastezeesy6.jpg' /><img class='center-block img-responsive hinhdep'  src='pasteasb10i.png' /></span>","BACK":"<span style='font-size: 28px; '>They're making <span class=indam>pancakes</span>.[sound:rec1336840692.mp3]</span><br><span style=''><i>a pancake - блин</i></span>","INFO":null,"STT":196},
{"FRONT":"<span style='font-size: 28px; '>Oh my God! There's a <span class=indam>c___</span> in the living room![sound:rec1336840774.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesgmhjs.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Oh my God! There's a <span class=indam>cow</span> in the living room![sound:rec1336840780.mp3]<br /><br /><i> </i></span><br><span style=''><i>a cow - корова</i></span>","INFO":null,"STT":197}]

if (localStorage.caumayEn_SG_6 == null) {
    localStorage.caumayEn_SG_6 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_6"

localStorage.dangolopmay = lopmay
var bandau = 1 // dùng để chỉnh lại âm thanh của mấy thằng addplayer(), vì ban đầu nó đều giống âm thanh cả
//Tập hợp các host random bên dưới, thêm 1 ID vào thì thêm số bên dưới luôn.
var hostId = ["0B01VnLY_sd58VHRtS0RwRHYzd28","0B01VnLY_sd58QmJDZWdPX3hvYVU","0B01VnLY_sd58QmJDZWdPX3hvYVU","0BzYEHk8PA683WE02ZjVCeTNzcGM"]
var host = "http://www.googledrive.com/host/"+hostId[Math.floor((Math.random() * 4))]+"/"

//Chỉnh hàm cho mấy cái nút controlMenu
		$("#controlmenu li").each(function(){
			$(this).click(function(){
				switch($(this).attr('id')) {
					case 'trolaicautruoc':
						trolaicautruoc()
						break;
					case 'doclai':
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_6+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_6).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_6).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_6).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_6+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_6).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_6).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_6).attr("src")
							})
						}
						pauseresume()
						break;
					case 'savenext':
						savenext()
						break;
					case 'quacauketiep':
						quacauketiep()
						break;
					case 'nghedapan':
					playsounddapan("read")
					break;
				}
				return false
			})
		})
// Khi mở cái đầu tiên thì load lấy dữ liệu của dãy bài nhạc danhsachsound
		var cau = Number(localStorage.caumayEn_SG_6)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_6))
//KIỂM TRA KẾT QUẢ VÀ NEXT
			$( "#nhapdapan" ).keyup(function(e){
			
			//Cài đặt phím tắt nhanh
				if (e.altKey == true){
					//Alt + 1
					if(e.keyCode == 49){
						 trolaicautruoc()
					}
					//Alt + 2
					else if(e.keyCode == 50 ){
						doclai()
					}
					//Alt + 3
					else if(e.keyCode == 51){
						pauseresume()
					}
					//Alt + 4
					else if(e.keyCode == 52){
						savenext()
					}
					//Alt + 5
					else if(e.keyCode == 53){
						quacauketiep()
					}
					return false
				} else if (e.keyCode == 222 || e.keyCode == 188 || e.keyCode == 190 || e.keyCode == 191 ){
					keyupcheckketqua(e)
				} else if(e.shiftKey == true && e.keyCode == 32){ //SHIFT+SPACE đọc đáp án
					playsounddapan("read")
				} else if (e.keyCode == 8){
					if( $(".thongbao").html().indexOf("<b>") > 0 ){
						$(".thongbao").html( $(".thongbao").html().substr(0, $(".thongbao").html().length - 8) )
					} else {
						$(".thongbao").html($("#nhapdapan").val())
					}
				}
				else {
					for ( i = 48 ; i<= 90 ; i++){
						if (e.keyCode == i){
							keyupcheckketqua(e)
							return false;
						}
					}
				}
			});
			
			$("#formdapan").submit(function(){
				swicthKetQua()
				return false;
			})
				
				
				
//BẮT ĐẦU VIẾT MẤY HÀM TỪ ĐÂY		
function preloadimg(){ //Tải trước hình ảnh +- 4 hình, để lần sau load nhanh hơn
	cau = Number(localStorage.caumayEn_SG_6)
	$("#preloadimg").html("")
	for (i = cau-4; i <= cau+4; i++) {
		if( i >=0 && i < dulieu.length){
			var l = linksoundimg(dulieu[i].FRONT)
			$("#preloadimg").append("<img class='center-block img-responsive hinhdep'  src='" +host+l.img+ "'></img>")
		}
	}
}
function linksoundimg(text){ //Trả về 2 link.img và link.sound ví dụ: paste2ngu3i.png và rec1327136534.mp3
	sound = text.match(/\[sound:.+mp3/g)
	img = text.match(/src=\'.+(png|jpg|PNG|JPG|gif|GIF)/g)
	//alert(img.length)
	if ( img != null ){
		img = img[0].substr(5)
	}
	if (sound != null){
		sound = sound[0].substr(7)
	}
	var link = {
		'img': img,
		'sound': sound
	}
	return link
}
function suahienthi(hienthi,dapan){
	var l = linksoundimg(hienthi)
	hienthi = hienthi.replace(l.img, host+l.img)
	if (dapan != 1 && dapan != 11) { //Để check đáp án
		hienthi = hienthi.replace("[sound:"+l.sound+"]", '')
	}
	hienthi = hienthi.replace("a) ","<br/>a) ")
	hienthi = hienthi.replace("b) ","<br/>b) ").replace(/<br \/>/g, "").replace(/<br\/>/g, "").replace(/<br>/g, "")
	if (dapan == 1) { //Để check đáp án
		hienthi = hienthi.replace(/<[^>]*>/g,"").replace('a)', "").replace('b)', "").replace(/^-/g, "").replace(/&quot;/g, "").replace(/\[sound.*\]/g,"$#$").toLowerCase()
		hienthi = hienthi.split("$#$")[0]
	} else if (dapan == 11) { //Để hiển thị đáp án
		hienthi = hienthi.replace(/\[sound.*\]/g,"<br/>")
	} else {
		playsound(l.sound)
	}
	return {'hienthi': hienthi, 'img': l.img, 'sound':l.sound}
}
function doicau(caumay){ //Khi bấm nút next thì đổi câu hỏi hiển thị
	//Sửa sound và ảnh replace
	var hienthi = dulieu[caumay].FRONT
	hienthi = suahienthi(hienthi,0).hienthi
	//đổi câu luôn
	$("#cauhoi").html(hienthi)
	$("#cauhoi *, #cauhoi").addClass(localStorage.caidatAnchu)
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_6)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_6) >  0){
		localStorage.caumayEn_SG_6 = Number(localStorage.caumayEn_SG_6) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_6))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_6)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_6)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_6) < dulieu.length-1){
		localStorage.caumayEn_SG_6 = Number(localStorage.caumayEn_SG_6) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_6))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_6)
	$(" div[id^='jp_container_'] ").addClass("hidden")
	$("#jp_container_"+current_player).removeClass("hidden")
	if ( $("#jquery_jplayer_"+current_player+" audio").attr("src") != host+src){
		 $("#jquery_jplayer_"+current_player).jPlayer("setMedia",{
			title:"Trần Quốc Hoài | bsquochoai@gmail.com | drquochoai",
			mp3: host+src
		})
	}
	$("div[id^='jquery_jplayer_']").jPlayer("stop")
	$("#jquery_jplayer_"+current_player).jPlayer("play")
	addplayer()
}

function keyupcheckketqua(e){
	var dapan = dulieu[Number(localStorage.caumayEn_SG_6)].BACK
	dapan = suahienthi(dapan,1).hienthi.replace('&quot;', "")
	$(".thongbao").removeClass("dapandung")
	var tumoidanh = $("#nhapdapan").val().substr( $("#nhapdapan").val().length-1,1 )
	var nhapdapan = $("#nhapdapan").val().replace('"', "&quot;").replace('<', "&#60;").toLowerCase()
	if( $(".thongbao").text().indexOf("Chào bạn!") == 0 || $(".thongbao").text().indexOf("bsquochoai") == 0 ){
			$(".thongbao").text("")
	}
	if ( dapan.indexOf(nhapdapan) == 0 || dapan.indexOf(nhapdapan) == 1 ){
		$(".thongbao").html($("#nhapdapan").val())
	} else {
		$(".thongbao").append("<b>"+tumoidanh+"</b>")
	}
	// Kiểm tra đáp án đúng
	switch (dapan) {
		case nhapdapan+"!": 
			$(".thongbao").append("!")
			break;
		case nhapdapan+"?": 
			$(".thongbao").append("?")
			break;
		case nhapdapan+".": 
			$(".thongbao").append(".")
			break;
		case nhapdapan+" ":
			break;
	}
	if ( dapan == nhapdapan || dapan == nhapdapan+"?" || dapan == nhapdapan+"." || dapan == nhapdapan+"?" || dapan == nhapdapan+"!" || dapan == nhapdapan+" "){
		$(".thongbao").addClass("dapandung")
$("#cauhoi").removeClass('caidatAnchu')
		swicthKetQua()
		//$("#nhapdapan").attr("disabled","true")
	}
}
function playsounddapan(cmd){ // nếu =preload thì thôi, nếu =read thì preload no lại
	var current_player = Number(localStorage.caumayEn_SG_6)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_6)].BACK )
	
	if ( $("#jp_jplayer_answer audio").attr("src") != host+lb.sound){
			 $("#jp_jplayer_answer").jPlayer("setMedia",{
				mp3: host+lb.sound+"?dapan"
			})
	}
	if(cmd == "read"){
		$("#jp_jplayer_answer").jPlayer("stop").jPlayer("play")
	}
	
	
}
function swicthKetQua(){ //press ENTER
	var dapan = dulieu[Number(localStorage.caumayEn_SG_6)].BACK
		dapan = suahienthi(dapan,11)
	if (localStorage.dang == "cauhoi"){
		//Hiển thị câu trả lời và // Đọc đáp án
		$(".thongbao").html(dapan.hienthi).show("300")
		playsounddapan("read")
		//localStorage.dang = "traloi"
	} else {
		playsounddapan("read")
	}
}
function addplayer(){
	cau = Number(localStorage.caumayEn_SG_6)
	for (i = cau-4; i <= cau+4; i++) {
		if( i >=0 && i < dulieu.length){
			if( $("#jquery_jplayer_"+i).length == 1 ){
			
			} else {
						var lf = linksoundimg(dulieu[i].FRONT)
						var jquery_jplayer_ = "			  <div id=\"jp_container_"+i+"\" class=\"jp-audio center-block hidden\" role=\"application\"";
							jquery_jplayer_ += "              aria-label=\"media player\">";
							jquery_jplayer_ += "                <div class=\"jp-type-single\">";
							jquery_jplayer_ += "                  <div class=\"jp-gui jp-interface\">";
							jquery_jplayer_ += "                    <div class=\"jp-controls-holder\">";
							jquery_jplayer_ += "                      <div class=\"jp-progress\">";
							jquery_jplayer_ += "                        <div class=\"jp-seek-bar\">";
							jquery_jplayer_ += "                          <div class=\"jp-play-bar\"><\/div>";
							jquery_jplayer_ += "                          <div id=\"jptimer\">";
							jquery_jplayer_ += "                            <i class=\"jp-current-time\" role=\"timer\" aria-label=\"time\">&nbsp;<\/i>\/";
							jquery_jplayer_ += "                            <i class=\"jp-duration\" role=\"timer\" aria-label=\"duration\">&nbsp;<\/i>";
							jquery_jplayer_ += "                          <\/div>";
							jquery_jplayer_ += "                        <\/div>";
							jquery_jplayer_ += "                      <\/div>";
							jquery_jplayer_ += "                      <div class=\"jp-controls\">";
							jquery_jplayer_ += "                        <button class=\"jp-play\" role=\"button\" tabindex=\"0\">⇛<\/button>";
							jquery_jplayer_ += "                      <\/div>";
							jquery_jplayer_ += "                      <div class=\"jp-toggles\">";
							jquery_jplayer_ += "                        <button class=\"jp-repeat\" role=\"button\" tabindex=\"0\">↻<\/button>";
							jquery_jplayer_ += "                      <\/div>";
							jquery_jplayer_ += "                    <\/div>";
							jquery_jplayer_ += "                  <\/div>";
							jquery_jplayer_ += "                <\/div>";
							jquery_jplayer_ += "              <\/div>";
							
							if (bandau == 1) {
								var srcaudio = host+lf.sound
								jquery_jplayer_ += "<div id=\"jquery_jplayer_"+i+"\" class=\"jp-jplayer \"></div><audio id='jquery_jplayer_firstaudio_"+i+"' preload=\"auto\" src='"+srcaudio+"'></audio>";
							} else {
								jquery_jplayer_ += "<div id=\"jquery_jplayer_"+i+"\" class=\"jp-jplayer \"></div>";
							}
							$("#controlmenu").prepend(jquery_jplayer_)
							$("#jquery_jplayer_"+i).jPlayer({
								ready: function() {
									$(this).jPlayer( "setMedia", {
									  mp3: host+lf.sound
									});
								 },
								cssSelectorAncestor: "#jp_container_"+i,
								swfPath: "http://www.googledrive.com/host/"+hostId[1]+"/jplayer",
								supplied: "mp3",
								preload:"auto",
								useStateClassSkin: true,
								autoBlur: false,
								smoothPlayBar: true,
								remainingDuration: true,
								toggleDuration: true
							});
							}
						
				}
			}
		bandau=2
}
// Chèn answer player
	var jp_jplayer_answer = "			  <div id=\"jp_container_answer\" class=\"jp-audio center-block hidden\" role=\"application\"";
		jp_jplayer_answer += "              aria-label=\"media player\">";
		jp_jplayer_answer += "                <div class=\"jp-type-single\">";
		jp_jplayer_answer += "                  <div class=\"jp-gui jp-interface\">";
		jp_jplayer_answer += "                    <div class=\"jp-controls-holder\">";
		jp_jplayer_answer += "                      <div class=\"jp-progress\">";
		jp_jplayer_answer += "                        <div class=\"jp-seek-bar\">";
		jp_jplayer_answer += "                          <div class=\"jp-play-bar\"><\/div>";
		jp_jplayer_answer += "                          <div id=\"jptimer\">";
		jp_jplayer_answer += "                            <i class=\"jp-current-time\" role=\"timer\" aria-label=\"time\">&nbsp;<\/i>\/";
		jp_jplayer_answer += "                            <i class=\"jp-duration\" role=\"timer\" aria-label=\"duration\">&nbsp;<\/i>";
		jp_jplayer_answer += "                          <\/div>";
		jp_jplayer_answer += "                        <\/div>";
		jp_jplayer_answer += "                      <\/div>";
		jp_jplayer_answer += "                      <div class=\"jp-controls\">";
		jp_jplayer_answer += "                        <button class=\"jp-play\" role=\"button\" tabindex=\"0\">⇛<\/button>";
		jp_jplayer_answer += "                      <\/div>";
		jp_jplayer_answer += "                      <div class=\"jp-toggles\">";
		jp_jplayer_answer += "                        <button class=\"jp-repeat\" role=\"button\" tabindex=\"0\">↻<\/button>";
		jp_jplayer_answer += "                      <\/div>";
		jp_jplayer_answer += "                    <\/div>";
		jp_jplayer_answer += "                  <\/div>";
		jp_jplayer_answer += "                <\/div>";
		jp_jplayer_answer += "              <\/div>";
		jp_jplayer_answer += "<div id=\"jp_jplayer_answer\" class=\"jp-jplayer \"></div>";
		$("body").prepend(jp_jplayer_answer)
		$("#jp_jplayer_answer").jPlayer({
								ready: function() {
									$(this).jPlayer( "setMedia", {
									  mp3: ''
									});
								 },
								cssSelectorAncestor: "#jp_container_answer"+i,
								swfPath: "http://www.googledrive.com/host/"+hostId[1]+"/jplayer",
								supplied: "mp3",
								preload:"auto",
								useStateClassSkin: true,
								autoBlur: false,
								smoothPlayBar: true,
								remainingDuration: true,
								toggleDuration: true
		});

})
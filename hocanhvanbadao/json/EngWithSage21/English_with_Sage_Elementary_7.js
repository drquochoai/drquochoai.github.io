$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) It's on page 118.[sound:rec1336840014.mp3]<br />b) It's on page 180.</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) It's on page 118.</span>[sound:rec1336840014.mp3]</span><br><span style=''></span>","INFO":null,"STT":166},
{"FRONT":"<span style='font-size: 28px; '>&quot;Don't eat too <span class=indam>m___</span> chocolate!&quot;[sound:rec1332265904.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuqhygi.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Don't eat too <span class=indam>much</span> chocolate!&quot;[sound:rec1332265912.mp3]<br /></span><br><span style=''><i>chocolate (n.) - шоколад</i></span>","INFO":null,"STT":15},
{"FRONT":"<span style='font-size: 28px; '>&quot;I hate sleeping in a <span class=indam>t____</span>.&quot;[sound:rec1332698845.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewamzg7.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I hate sleeping in a <span class=indam>tent</span>.&quot;[sound:rec1332698850.mp3]<br /><br /></span><br><span style=''><i>a tent - палатка</i></span>","INFO":null,"STT":119},
{"FRONT":"<span style='font-size: 28px; '>Look at the menu. Onion soup and goat's cheese salad are the <span class=indam>st____</span>.[sound:rec1332699850.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuo7kez.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Look at the menu. Onion soup and goat's cheese salad are the <span class=indam>starters</span>.[sound:rec1332699858.mp3]<br /></span><br><span style=''><i>a starter - холодная закуска</i></span>","INFO":null,"STT":139},
{"FRONT":"<span style='font-size: 28px; '>Excuse me. Are you ready to <span class=indam>o____</span>?[sound:rec1332700690.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewymgbx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Excuse me. Are you ready to <span class=indam>order</span>?[sound:rec1332700697.mp3]<br /><br /></span><br><span style=''><i>to order (food) - заказывать (еду)</i></span>","INFO":null,"STT":152},
{"FRONT":"<span style='font-size: 28px; '>That was a terrible <span class=indam>di______</span>! <i>(a very bad situation)</i>[sound:rec1332698817.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5upofw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>That was a terrible <span class=indam>disaster</span>![sound:rec1332698823.mp3]<br /><br /></span><br><span style=''><i>a disaster - катастрофа</i></span>","INFO":null,"STT":117},
{"FRONT":"<span style='font-size: 28px; '>Let's buy some <span class=indam>______</span>.[sound:rec1332699612.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten94j0q.png' /></span>","BACK":"<span style='font-size: 28px; '>Let's buy some <span class=indam>peppers</span>.[sound:rec1332699616.mp3]<br /><br /></span><br><span style=''><i>a pepper - перец</i></span>","INFO":null,"STT":134},
{"FRONT":"<span style='font-size: 28px; '>He's a bad student. He isn't <span class=indam>_______</span> pass the exam.[sound:rec1332698492.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehkbllc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's a bad student. He isn't <span class=indam>going to</span> pass the exam.[sound:rec1332698482.mp3]<br /><br /></span><br><span style=''><i>to pass an exam - сдать экзамен</i><br /><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>predictions</span><i>)</i></span>","INFO":null,"STT":100},
{"FRONT":"<span style='font-size: 28px; '>&quot;I need a <span class=indam>c____</span> of potatoes.&quot; <i>(two)</i>[sound:rec1332698791.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4sf7l4.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I need a <span class=indam>couple</span> of potatoes.&quot;[sound:rec1332698797.mp3]<br /><br /></span><br><span style=''><i>a couple of = 2</i></span>","INFO":null,"STT":115},
{"FRONT":"<span style='font-size: 28px; '>&quot;Let's cook <span class=indam>[...]</span> mushrooms!&quot;[sound:rec1332266222.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetbymry.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Let's cook <span class=indam>some</span> mushrooms!&quot;[sound:rec1332266231.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":31},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>___________</span> a baby soon. <b>(she / have)</b>[sound:rec1332698449.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_podac.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>She's going to have</span> a baby soon.[sound:rec1332698455.mp3]<br /><br /></span><br><span style=''><i>to have a baby - родить ребенка</i><br /><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>predictions</span><i>)</i><br /></span>","INFO":null,"STT":98},
{"FRONT":"<span style='font-size: 28px; '>&quot;We're going on holiday to Greece! <span class=indam>_________</span> in the sea.&quot; <b>(we / swim)</b>[sound:rec1332697895.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteibgnre.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We're going on holiday to Greece!<span class=indam> We're going to swim</span> in the sea.&quot;[sound:rec1332697903.mp3]<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":83},
{"FRONT":"<span style='font-size: 28px; '>&quot;We're going on holiday to Greece! <span class=indam>___________</span> Greek food.&quot; <b>(we / eat)</b>[sound:rec1332697736.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevs2iah.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We're going on holiday to Greece! <span class=indam>We're going to eat</span> Greek food.&quot;[sound:rec1332697766.mp3]<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":80},
{"FRONT":"<span style='font-size: 28px; '>&quot;I drink a litre of <span class=indam>____</span> every day.&quot;[sound:rec1332266767.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5vb5lm.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I drink a litre of <span class=indam>milk</span> every day.&quot;[sound:rec1332266771.mp3]<br /></span><br><span style=''><i>milk (n.) - молоко</i></span>","INFO":null,"STT":58},
{"FRONT":"<span style='font-size: 28px; '>He probably has a very loud <span class=indam>v____</span>.[sound:rec1332699634.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefolgqz.png' /></span>","BACK":"<span style='font-size: 28px; '>He probably has a very loud <span class=indam>voice</span>.[sound:rec1332699638.mp3]</span><br><span style=''><i>voice (n.) - голос</i></span>","INFO":null,"STT":136},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you like <span class=indam>_____</span>?&quot;[sound:rec1332266275.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteriqlom.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you like <span class=indam>peas</span>?&quot;[sound:rec1332266292.mp3]<br /><br /></span><br><span style=''><i>peas (n.) - горох</i></span>","INFO":null,"STT":35},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please don't give the children <span class=indam>[...]</span> sweets!&quot;[sound:rec1332266076.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0da6sw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please don't give the children <span class=indam>any</span> sweets!&quot;[sound:rec1332266085.mp3]<br /></span><br><span style=''><i>a sweet - конфета</i></span>","INFO":null,"STT":24},
{"FRONT":"<span style='font-size: 28px; '>&quot;I want to make pancakes. Do you have any <span class=indam>____</span>?&quot;[sound:rec1332266628.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiyqtcl.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I want to make pancakes. Do you have any <span class=indam>eggs</span>?&quot;[sound:rec1332266635.mp3]<br /><br /></span><br><span style=''><i>an egg - яйцо</i><br></span>","INFO":null,"STT":53},
{"FRONT":"<span style='font-size: 28px; '>-Do you love me Mummy?<br />-<span class=indam>__ ______</span> I do! <i>(yes, without question)</i>[sound:rec1332699541.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetgyuye.png' /></span>","BACK":"<span style='font-size: 28px; '>-Do you love me Mummy?<br />-<span class=indam>Of course</span> I do![sound:rec1332699546.mp3]<br /></span><br><span style=''><i>of course - конечно, разумеется</i></span>","INFO":null,"STT":129},
{"FRONT":"<span style='font-size: 28px; '>I always eat ice-cream with a <span class=indam>f____</span>.[sound:rec1336839801.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2f069w.png' /></span>","BACK":"<span style='font-size: 28px; '>I always eat ice-cream with a <span class=indam>fork</span>.[sound:rec1336839807.mp3]<br /><br /></span><br><span style=''><i>a fork - вилка</i><br></span>","INFO":null,"STT":155},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'm going on holiday to Greece! <span class=indam>__________</span> in a village.&quot; <b>(I / stay)</b>[sound:rec1332697620.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevs2iah.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'm going on holiday to Greece! <span class=indam>I'm going to stay</span> in a village.&quot;[sound:rec1332697634.mp3]<br /><br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i><br /></span>","INFO":null,"STT":79},
{"FRONT":"<span style='font-size: 28px; '>-How much meat do you eat?[sound:rec1332697505.mp3]<br />-<span class=indam>N____</span>. I'm a vegetarian.<br /><img class='center-block img-responsive hinhdep'  src='pastemqy4b0.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-How much meat do you eat?<br />-<span class=indam>None</span>. I'm a vegetarian.[sound:rec1332697524.mp3]</span><br><span style=''></span>","INFO":null,"STT":76},
{"FRONT":"<span style='font-size: 28px; '>&quot;I need to buy a <span class=indam>le____</span>.&quot;[sound:rec1332266210.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekedvrp.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I need to buy a <span class=indam>lettuce</span>.&quot;[sound:rec1332266214.mp3]<br /></span><br><span style=''><i>a lettuce - салат</i></span>","INFO":null,"STT":30},
{"FRONT":"<span style='font-size: 28px; '>Excuse me. Are you <span class=indam>r____</span> to order?[sound:rec1332700675.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewymgbx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Are you <span class=indam>ready</span> to order?[sound:rec1332700681.mp3]<br /></span><br><span style=''><i>to be ready - быть готовым</i></span>","INFO":null,"STT":151},
{"FRONT":"<span style='font-size: 28px; '>&quot;Would you like some <span class=indam>r____</span> chicken?&quot;[sound:rec1332700069.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepq1yfq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Would you like some <span class=indam>roast</span> chicken?&quot;[sound:rec1332700075.mp3]</span><br><span style=''><i>roast (adj.) - жареный</i></span>","INFO":null,"STT":143},
{"FRONT":"<span style='font-size: 28px; '>&quot;Would you like <span class=indam>[...]</span> butter with your bread?&quot;[sound:rec1332266525.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastergavbw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Would you like <span class=indam>some</span> butter with your bread?&quot;[sound:rec1332266548.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":49},
{"FRONT":"<span style='font-size: 28px; '>&quot;Our car is ten years old. <span class=indam>_________</span> a new one tomorrow.&quot; <b>(we / buy)</b>[sound:rec1332697931.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewf0jkf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Our car is ten years old. <span class=indam>We're going to buy</span> a new one tomorrow.&quot;[sound:rec1332697941.mp3]<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":84},
{"FRONT":"<span style='font-size: 28px; '>&quot;Look at the <span class=indam>b____</span>!&quot;[sound:rec1332698690.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastem2ukbz.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Look at the <span class=indam>boat</span>!&quot;[sound:rec1332698695.mp3]<br /><br /></span><br><span style=''><i>a boat - лодка</i></span>","INFO":null,"STT":109},
{"FRONT":"<span style='font-size: 28px; '>-What did you get for your birthday?[sound:rec1332698565.mp3]<br />-My friends gave me a <span class=indam>b____</span> of wine.<br /><img class='center-block img-responsive hinhdep'  src='pastewuzhdf.png' /></span>","BACK":"<span style='font-size: 28px; '>My friends gave me a <span class=indam>bottle</span> of wine.[sound:rec1332698572.mp3]<br /></span><br><span style=''><i>a bottle - бутылка</i></span>","INFO":null,"STT":103},
{"FRONT":"<span style='font-size: 28px; '>&quot;Look! A piece is <span class=indam>m_____</span>.&quot; <i>(not there)</i>[sound:rec1332698965.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4pn1tq.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Look! A piece is <span class=indam>missing</span>.&quot;[sound:rec1332698969.mp3]<br /><br /></span><br><span style=''><i>missing (adj.) - отсутствующий</i></span>","INFO":null,"STT":125},
{"FRONT":"<span style='font-size: 28px; '>&quot;How many <span class=indam>p____</span> of toast would you like?&quot;[sound:rec1332267012.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegbhonk.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;How many <span class=indam>pieces</span> of toast would you like?&quot;[sound:rec1332267019.mp3]<br /></span><br><span style=''><i>a piece - кусок</i></span>","INFO":null,"STT":67},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please <span style='color:#000000;'>put</span> your rubbish in the <span class=indam>b___</span>.&quot;[sound:rec1332699567.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexi9ct9.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please <span style='color:#000000;'>put</span> your rubbish in the <span class=indam>bin</span>.&quot;[sound:rec1332699571.mp3]<br /><br /></span><br><span style=''><i>a bin - мусорный ящик, мусорное ведро</i></span>","INFO":null,"STT":131},
{"FRONT":"<span style='font-size: 28px; '>I think I'll have tiramisu for <span class=indam>d_____</span>.[sound:rec1332700038.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste91o_ol.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I think I'll have tiramisu for <span class=indam>dessert</span>.[sound:rec1332700045.mp3]<br /></span><br><span style=''><i>dessert (n.) - десерт, сладкое</i></span>","INFO":null,"STT":141},
{"FRONT":"<span style='font-size: 28px; '>&quot;I need a couple <span class=indam>[...]</span> potatoes.&quot;[sound:rec1332698804.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4sf7l4.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I need a couple <span class=indam>of</span> potatoes.&quot;[sound:rec1332698810.mp3]<br /><br /></span><br><span style=''><i>a couple of = 2</i><br /></span>","INFO":null,"STT":116},
{"FRONT":"<span style='font-size: 28px; '>There are some <b>nouns</b> that you can't count - they are <span class=indam>___count____</span>.[sound:rec1332698750.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteetgnqh.png' /></span>","BACK":"<span style='font-size: 28px; '>There are some <b>nouns</b> that you can't count - they are <span class=indam>uncountable</span>.[sound:rec1332698764.mp3]</span><br><span style=''><i>uncountable (adj.) - неисчисляемый</i></span>","INFO":null,"STT":113},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'm going on holiday to Greece! <span class=indam>_________</span> the Acropolis.&quot; <b>(I / see)</b>[sound:rec1332697868.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteee17ru.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'm going on holiday to Greece! <span class=indam>I'm going to see</span> the Acropolis.&quot;[sound:rec1332697882.mp3]<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":82},
{"FRONT":"<span style='font-size: 28px; '>&quot;How <span class=indam>m___</span> ice cream would you like?&quot;[sound:rec1332266005.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteefub1k.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;How <span class=indam>much</span> ice cream would you like?&quot;[sound:rec1332266020.mp3]<br /></span><br><span style=''><i>how much ...? - сколько </i></span>","INFO":null,"STT":20},
{"FRONT":"<span style='font-size: 28px; '>-Is there any <span class=indam>b____</span>?[sound:rec1332266484.mp3]<br />-Yes, there is.<br /><img class='center-block img-responsive hinhdep'  src='pastevgsgga.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Is there any <span class=indam>bread</span>?[sound:rec1332266492.mp3]<br />-Yes, there is.<br /></span><br><span style=''><i>bread (n.) - хлеб</i></span>","INFO":null,"STT":47},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'm a vegetarian. I don't eat <span class=indam>____</span>.&quot;[sound:rec1332266407.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekem76o.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'm a vegetarian. I don't eat <span class=indam>meat</span>.&quot;[sound:rec1332266412.mp3]<br /></span><br><span style=''><i>meat (n.) - мясо</i></span>","INFO":null,"STT":41},
{"FRONT":"<span style='font-size: 28px; '>&quot;Let's have some <span class=indam>ch____</span> for lunch.&quot;[sound:rec1332266580.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec_xcai.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Let's have some <span class=indam>cheese</span> for lunch.&quot;[sound:rec1332266586.mp3]<br /></span><br><span style=''><i>cheese (n.) - сыр</i></span>","INFO":null,"STT":51},
{"FRONT":"<span style='font-size: 28px; '>-Is there <span class=indam>[...]</span> bread?[sound:rec1332266504.mp3]<br />-Yes, there is.<br /><img class='center-block img-responsive hinhdep'  src='pastevgsgga.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Is there <span class=indam>any</span> bread?[sound:rec1332266511.mp3]<br />-Yes, there is.<br /></span><br><span style=''></span>","INFO":null,"STT":48},
{"FRONT":"<span style='font-size: 28px; '>-<span style='font-weight:600; color:#000000;'>Are you going to buy</span> a present for Daniel?[sound:rec1332697994.mp3]<br />-Yes, <span class=indam>____________</span> him some socks later. <b>(I / buy)</b><br /><img class='center-block img-responsive hinhdep'  src='paste271neb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span style='font-weight:600; color:#000000;'>Are you going to buy</span> a present for Daniel?<br />-Yes, <span class=indam>I'm going to buy</span> him some socks later.[sound:rec1332698001.mp3]<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":87},
{"FRONT":"<span style='font-size: 28px; '>It's a £50 <span class=indam>n___</span>. <i>(paper money)</i>[sound:rec1332699526.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paster0ugsh.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's is a £50 <span class=indam>note</span>.[sound:rec1332699531.mp3]</span><br><span style=''><i>a note - банкнота</i></span>","INFO":null,"STT":128},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) It's on page 130. [sound:rec1336839950.mp3]<br />b) It's on page 140.</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) It's on page 140.</span>[sound:rec1336839950.mp3]</span><br><span style=''></span>","INFO":null,"STT":161},
{"FRONT":"<span style='font-size: 28px; '>-How many <span class=indam>c____</span> are there?[sound:rec1332265978.mp3]<br />-I don't know!<br /><img class='center-block img-responsive hinhdep'  src='pastev6i9u8.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-How many <span class=indam>crisps</span> are there?[sound:rec1332265985.mp3]<br />-I don't know!<br /><br /></span><br><span style=''><i>crisps (n.) - чипсы</i></span>","INFO":null,"STT":18},
{"FRONT":"<span style='font-size: 28px; '>Moscow is famous for its <span class=indam>ni____</span>. <i>(things to do in the evening / at night, for example bars and nightclubs)</i>[sound:rec1332699498.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegge_fe.png' /></span>","BACK":"<span style='font-size: 28px; '>Moscow is famous for its <span class=indam>nightlife</span>.[sound:rec1332699503.mp3]</span><br><span style=''><i>a nightlife - ночная жизнь города</i></span>","INFO":null,"STT":127},
{"FRONT":"<span style='font-size: 28px; '>Please can I have <span class=indam>[...]</span> piece of cake?[sound:rec1332265817.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexcm1mz.png' /></span>","BACK":"<span style='font-size: 28px; '>Please can I have <span class=indam>a</span> piece of cake?[sound:rec1332265836.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":11},
{"FRONT":"<span style='font-size: 28px; '>It's a <span class=indam>______</span>.[sound:rec1332265673.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastef8lzt4.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>pineapple</span>.[sound:rec1332265678.mp3]<br /></span><br><span style=''><i>a pineapple - ананас</i><br></span>","INFO":null,"STT":4},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) There are 147 people.<br />b) There are 137 people.[sound:rec1336839986.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) There are 147 people.</span>[sound:rec1336839986.mp3]</span><br><span style=''></span>","INFO":null,"STT":164},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you like <span class=indam>_____</span>?&quot;[sound:rec1332266362.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefmoe83.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you like <span class=indam>fish</span>?&quot;[sound:rec1332266366.mp3]<br /></span><br><span style=''><i>fish (n.) - рыба</i></span>","INFO":null,"STT":39},
{"FRONT":"<span style='font-size: 28px; '>It's <span class=indam>[...]</span> potato.[sound:rec1332266311.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9fasvg.png' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>a</span> potato.[sound:rec1332266315.mp3]<br /></span><br><span style=''><i>a potato - картофелина</i></span>","INFO":null,"STT":37},
{"FRONT":"<span style='font-size: 28px; '>&quot;How <span class=indam>m___</span> pieces of toast would you like?&quot;[sound:rec1332266997.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegbhonk.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;How <span class=indam>many</span> pieces of toast would you like?&quot;[sound:rec1332267004.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":66},
{"FRONT":"<span style='font-size: 28px; '>&quot;Let's have some <span class=indam>____ </span>with our porridge!&quot;[sound:rec1332266736.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecgc76t.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Let's have some <span class=indam>jam </span>with our porridge!&quot;[sound:rec1332266746.mp3]<br /></span><br><span style=''><i>jam (n.) - варенье</i></span>","INFO":null,"STT":56},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please can I have some <span class=indam>_____ </span>in my tea?&quot;[sound:rec1332266834.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste91qeap.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please can I have some <span class=indam>sugar </span>in my tea?&quot;[sound:rec1332266841.mp3]<br /></span><br><span style=''><i>sugar (n.) - сахар</i></span>","INFO":null,"STT":60},
{"FRONT":"<span style='font-size: 28px; '>I really like <span class=indam>p_____</span>.[sound:rec1332266300.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexscoqq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I really like <span class=indam>potatoes</span>.[sound:rec1332266304.mp3]<br /><br /></span><br><span style=''><i>a potato - картофелина</i></span>","INFO":null,"STT":36},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) Please look at page 35.[sound:rec1336839968.mp3]<br />b) Please look at page 45.</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) Please look at page 35.</span>[sound:rec1336839968.mp3]</span><br><span style=''></span>","INFO":null,"STT":162},
{"FRONT":"<span style='font-size: 28px; '>It's his birthday next week, but he's <span class=indam>________</span> to have a party.[sound:rec1332698097.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezkalkq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's his birthday next week, but he's <span class=indam>not going</span> to have a party.[sound:rec1332698108.mp3]<br /><br /></span><br><span style=''><i>to have a party - устроить вечеринку</i><br><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":92},
{"FRONT":"<span style='font-size: 28px; '>&quot;On holiday, we stayed at a <span class=indam>c_______</span>.&quot; <i>(a special place for camping)</i>[sound:rec1332698706.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteioplji.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;On holiday, we stayed at a <span class=indam>campsite</span>.&quot;[sound:rec1332698711.mp3]<br /></span><br><span style=''><i>a campsite - кемпинг</i></span>","INFO":null,"STT":110},
{"FRONT":"<span style='font-size: 28px; '>I'm eating an orange <span class=indam>[...]</span> a knife and fork![sound:rec1336839861.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehm8kzp.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm eating an orange <span class=indam>with</span> a knife and fork![sound:rec1336839868.mp3]</span><br><span style=''><i>with a knife and fork - ножом и вилкой</i></span>","INFO":null,"STT":159},
{"FRONT":"<span style='font-size: 28px; '>&quot;They're playing badly. I think they aren't <span class=indam>________</span> win the match.&quot;[sound:rec1332698534.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste26qivc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;They're playing badly. I think they aren't <span class=indam>going to</span> win the match.&quot;[sound:rec1332698521.mp3]<br /><br /></span><br><span style=''><i>to win a match - выиграть матч</i><br /><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>predictions</span><i>)</i></span>","INFO":null,"STT":102},
{"FRONT":"<span style='font-size: 28px; '>-What would you like to drink?[sound:rec1332700448.mp3]<br />-<span class=indam>M_____</span> water please.<br /><img class='center-block img-responsive hinhdep'  src='pastefdulh5.png' /></span>","BACK":"<span style='font-size: 28px; '>-What would you like to drink?<br />-<span class=indam>Mineral</span> water please.[sound:rec1332700468.mp3]</span><br><span style=''><i>mineral (adj.) - минеральный</i></span>","INFO":null,"STT":153},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) Please look at page 35.<br />b) Please look at page 45.&nbsp;&nbsp;[sound:rec1336839977.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) Please look at page 45.</span> [sound:rec1336839977.mp3]</span><br><span style=''></span>","INFO":null,"STT":163},
{"FRONT":"<span style='font-size: 28px; '>&quot;We don't eat very <span class=indam>m____</span> rice.&quot;<br /><img class='center-block img-responsive hinhdep'  src='paste54sxnb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We don't eat very <span class=indam>much</span> rice.&quot;<br /></span><br><span style=''><i>rice (n.) - рис</i></span>","INFO":null,"STT":46},
{"FRONT":"<span style='font-size: 28px; '>I always eat ice-cream <span class=indam>[...]</span> a fork.[sound:rec1336839787.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2f069w.png' /></span>","BACK":"<span style='font-size: 28px; '>I always eat ice-cream <span class=indam>with</span> a fork.[sound:rec1336839793.mp3]</span><br><span style=''><i>with a fork - вилкой</i></span>","INFO":null,"STT":154},
{"FRONT":"<span style='font-size: 28px; '>Please can I have a <span class=indam>p____</span> of cake?[sound:rec1332265844.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexcm1mz.png' /></span>","BACK":"<span style='font-size: 28px; '>Please can I have a <span class=indam>piece</span> of cake?[sound:rec1332265851.mp3]<br /></span><br><span style=''><i>a piece - кусок</i></span>","INFO":null,"STT":12},
{"FRONT":"<span style='font-size: 28px; '>&quot;I feel lazy. I'm not <span class=indam>_________</span> to work tomorrow.&quot; <b>(go)</b>[sound:rec1332698297.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewgykof.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'm not <span class=indam>going to go</span> to work tomorrow.&quot;[sound:rec1332698311.mp3]<br /><i>or,</i><br />&quot;<span style='color:#000000;'>I'm not</span><span class=indam> going</span> to work tomorrow.&quot;<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":93},
{"FRONT":"<span style='font-size: 28px; '>-How <span class=indam>m____</span> coffee did you drink yesterday?[sound:rec1332267135.mp3]<br>-Four cups.<br /><img class='center-block img-responsive hinhdep'  src='pastesxzxsz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-How <span class=indam>much</span> coffee did you drink yesterday?[sound:rec1332267159.mp3]</span><br><span style=''></span>","INFO":null,"STT":70},
{"FRONT":"<span style='font-size: 28px; '>&quot;Let's have <span class=indam>[...]</span> jam with our porridge!&quot;[sound:rec1332266707.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecgc76t.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Let's have <span class=indam>some</span> jam with our porridge!&quot;[sound:rec1332266713.mp3]<br /></span><br><span style=''><i>jam (n.) - варенье</i></span>","INFO":null,"STT":55},
{"FRONT":"<span style='font-size: 28px; '>-What <span class=indam>m___ c_____</span> will you have?[sound:rec1332700022.mp3]<br />-I'll have steak and chips.<br /><img class='center-block img-responsive hinhdep'  src='pastejm7eru.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What <span class=indam>main course</span> will you have?[sound:rec1332700030.mp3]<br />-I'll have steak and chips.<br /></span><br><span style=''><i>a main course - основное блюдо</i></span>","INFO":null,"STT":140},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please can you give me some <span class=indam>k_____</span>?&quot;[sound:rec1332266373.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5vbrjs.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please can you give me some <span class=indam>ketchup</span>?&quot;[sound:rec1332266398.mp3]<br /></span><br><span style=''><i>ketchup - кетчуп</i></span>","INFO":null,"STT":40},
{"FRONT":"<span style='font-size: 28px; '>It's <span class=indam>[...]</span> apple.[sound:rec1332265635.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezmnctx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>an</span> apple.[sound:rec1332265640.mp3]<br /></span><br><span style=''><i>an apple - яблоко</i></span>","INFO":null,"STT":2},
{"FRONT":"<span style='font-size: 28px; '>-I think German wine is the best.[sound:rec1332698627.mp3]<br />-I <span class=indam>d_____</span>. <i>(don't think the same)</i><br /><img class='center-block img-responsive hinhdep'  src='paste7vpqoa.png' /></span>","BACK":"<span style='font-size: 28px; '>-I think German wine is the best.<br />-I <span class=indam>disagree</span>.[sound:rec1332698637.mp3]<br /><br /></span><br><span style=''><i>to disagree - не соглашаться</i><br></span>","INFO":null,"STT":106},
{"FRONT":"<span style='font-size: 28px; '>-I'm hungry.<br />-Would you like <span class=indam>[...]</span> banana?[sound:rec1332265714.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastespbalx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Would you like <span class=indam>a</span> banana?[sound:rec1332265719.mp3]</span><br><span style=''><i>a banana - банан</i></span>","INFO":null,"STT":7},
{"FRONT":"<span style='font-size: 28px; '>Please can I have another beer? I don't have much <span class=indam>le___</span>.[sound:rec1332700582.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteca99js.png' /></span>","BACK":"<span style='font-size: 28px; '>Please can I have another beer? I don't have much <span class=indam>left</span>.[sound:rec1332700592.mp3]<br /></span><br><span style=''><i>I don't have much left. - У меня осталось немного </i></span>","INFO":null,"STT":146},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please can I have <span class=indam>[...]</span> sugar in my tea?&quot;[sound:rec1332266812.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste91qeap.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please can I have <span class=indam>some</span> sugar in my tea?&quot;[sound:rec1332266827.mp3]<br /></span><br><span style=''><i>sugar (n.) - сахар</i></span>","INFO":null,"STT":59},
{"FRONT":"<span style='font-size: 28px; '>Here are two <span class=indam>_____</span>.[sound:rec1332266167.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetufhgb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Here are two <span class=indam>c</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>rrots</span>.[sound:rec1332266171.mp3]<br /><br /></span><br><span style=''><i>a c</i><span style='font-style:italic; color:#ff5500;'>a</span><i>rrot - морковь</i></span>","INFO":null,"STT":27},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please help me. My cat is <span class=indam>m____</span>!&quot; <i>(lost, not there)</i>[sound:rec1332698948.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastei3gqnx.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My cat is <span class=indam>missing</span>!&quot;[sound:rec1332698958.mp3]<br /><br /></span><br><span style=''><i>missing (adj.) - потерявшийся, пропавший</i></span>","INFO":null,"STT":124},
{"FRONT":"<span style='font-size: 28px; '>&quot;No thanks, I don't want any <span class=indam>c____</span>.&quot;[sound:rec1332266198.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebaki6b.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;No thanks, I don't want any <span class=indam>chips</span>.&quot;[sound:rec1332266203.mp3]<br /><br /></span><br><span style=''><i>chips (n.) - жареный картофель</i><br /><i>note: American English '</i><span style='font-weight:600; font-style:italic;'>fries</span><i>'</i></span>","INFO":null,"STT":29},
{"FRONT":"<span style='font-size: 28px; '>&quot;Let's make a <span class=indam>f___ s____</span>!&quot;[sound:rec1332265992.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_v0f6x.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Let's make a <span class=indam>fruit salad</span>!&quot;[sound:rec1332265997.mp3]<br /></span><br><span style=''><i>fruit salad (n.) - фруктовый салат</i></span>","INFO":null,"STT":19},
{"FRONT":"<span style='font-size: 28px; '>&quot;We don't like vegetables. We don't buy <span class=indam>m____</span> vegetables.&quot;[sound:rec1332697589.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekvaujj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We don't buy <span class=indam>many</span> vegetables.&quot;[sound:rec1332697598.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":78},
{"FRONT":"<span style='font-size: 28px; '>There are <span class=indam>at le____</span> 40 people here. <i>(more than)</i>[sound:rec1332699658.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2uyjv4.png' /></span>","BACK":"<span style='font-size: 28px; '>There are <span class=indam>at least</span> 40 people here.[sound:rec1332699671.mp3]</span><br><span style=''><i>at least - как минимум</i></span>","INFO":null,"STT":138},
{"FRONT":"<span style='font-size: 28px; '>Here are <span class=indam>[...]</span> carrots.[sound:rec1332266109.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetufhgb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Here are <span class=indam>two</span> carrots.[sound:rec1332266128.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":26},
{"FRONT":"<span style='font-size: 28px; '>&quot;Great! I love <span class=indam>c____</span>!&quot;[sound:rec1332265891.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq0eduo.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Great! I love <span class=indam>cake</span>!&quot;[sound:rec1332265897.mp3]<br /><br /></span><br><span style=''><i>a cake - торт, пирожное</i></span>","INFO":null,"STT":14},
{"FRONT":"<span style='font-size: 28px; '>It's a piece of <span class=indam>c____</span>.[sound:rec1332265869.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexcm1mz.png' /></span>","BACK":"<span style='font-size: 28px; '>It's a piece of <span class=indam>cake</span>.[sound:rec1332265873.mp3]<br /></span><br><span style=''><i>a cake - торт, пирожное</i></span>","INFO":null,"STT":13},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you often drink <span class=indam>_____</span>?&quot;[sound:rec1332266602.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuwr2l_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you often drink <span class=indam>coffee</span>?&quot;[sound:rec1332266606.mp3]<br /><br /></span><br><span style=''><i>coffee (n.) - кофе</i></span>","INFO":null,"STT":52},
{"FRONT":"<span style='font-size: 28px; '>&quot;I usually have a <span class=indam>s______</span> for lunch.&quot;[sound:rec1332266060.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9lbpah.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I usually have a <span class=indam>sandwich</span> for lunch.&quot;[sound:rec1332266066.mp3]<br /></span><br><span style=''><i>a sandwich -&nbsp;&nbsp;бутерброд, сандвич</i></span>","INFO":null,"STT":23},
{"FRONT":"<span style='font-size: 28px; '>-How's life?[sound:rec1332699474.mp3]<br />-It's <span class=indam>m___</span> or <span class=indam>l___</span> okay. <i>(fine)</i><br /><img class='center-block img-responsive hinhdep'  src='paste9fqcl_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-How's life?<br />-It's <span class=indam>more</span> or <span class=indam>less</span> okay.[sound:rec1332699479.mp3]<br /></span><br><span style=''><i>more or less - более-менее</i><br></span>","INFO":null,"STT":126},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) There are 147 people.<br />b) There are 137 people. [sound:rec1336839994.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) There are 137 people.</span>[sound:rec1336839994.mp3]</span><br><span style=''></span>","INFO":null,"STT":165},
{"FRONT":"<span style='font-size: 28px; '>&quot;Mmm, can I have <span class=indam>[...]</span> grapes?&quot;[sound:rec1332265686.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7emulc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Mmm, can I have <span class=indam>some</span> grapes?&quot;[sound:rec1332265694.mp3]<br /></span><br><span style=''><i>grapes (n.) - виноград</i></span>","INFO":null,"STT":5},
{"FRONT":"<span style='font-size: 28px; '>&quot;Next week I'm going to the country. <span class=indam>___________</span> photos.&quot; <b>(I / take)</b>[sound:rec1332697849.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelun2kb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Next week I'm going to the country. <span class=indam>I'm going to take</span> photos.&quot;[sound:rec1332697858.mp3]<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":81},
{"FRONT":"<span style='font-size: 28px; '>&quot;Let's cook some <span class=indam>m_____</span>!&quot;[sound:rec1332266244.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetbymry.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Let's cook some <span class=indam>mushrooms</span>!&quot;[sound:rec1332266248.mp3]<br /></span><br><span style=''><i>a mushroom - гриб</i></span>","INFO":null,"STT":32},
{"FRONT":"<span style='font-size: 28px; '>-Are you <span class=indam>g____</span> to finish this by tomorrow?[sound:rec1332698039.mp3]<br />-No I'm not.<br /><img class='center-block img-responsive hinhdep'  src='pastelb4zhf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Are you <span class=indam>going</span> to finish this by tomorrow?[sound:rec1332698048.mp3]<br />-No I'm not.<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":89},
{"FRONT":"<span style='font-size: 28px; '>It's his birthday next week, but he's not going <span class=indam>[...]</span> have a party.[sound:rec1332698077.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezkalkq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's his birthday next week, but he's not going <span class=indam>to</span> have a party.[sound:rec1332698087.mp3]<br /><br /></span><br><span style=''><i>to have a party - устроить вечеринку</i><br><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":91},
{"FRONT":"<span style='font-size: 28px; '>She's carrying a <span class=indam>b____</span> on her head.[sound:rec1332698673.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelne5j0.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She's carrying a <span class=indam>basket</span> on her head.[sound:rec1332698681.mp3]<br /><br /></span><br><span style=''><i>a basket - корзина</i></span>","INFO":null,"STT":108},
{"FRONT":"<span style='font-size: 28px; '>The pub's quiet this evening. There aren't <span class=indam>[...]</span> people.[sound:rec1332700618.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepv14ul.png' /></span>","BACK":"<span style='font-size: 28px; '>The pub's quiet this evening. There aren't <span class=indam>many</span> people.[sound:rec1332700625.mp3]<br /></span><br><span style=''><i>There aren't many people. - Здесь мало народу.</i></span>","INFO":null,"STT":148},
{"FRONT":"<span style='font-size: 28px; '>Oh dear. There <span class=indam>____</span> any eggs left.[sound:rec1332697397.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastei6v8cl.png' /></span>","BACK":"<span style='font-size: 28px; '>Oh dear. There <span class=indam>aren't</span> any eggs left.[sound:rec1332697405.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":71},
{"FRONT":"<span style='font-size: 28px; '>It's an <span class=indam>_____</span>.[sound:rec1332265646.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezmnctx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's an <span class=indam>apple</span>.[sound:rec1332265650.mp3]<br /></span><br><span style=''><i>an apple - яблоко</i></span>","INFO":null,"STT":3},
{"FRONT":"<span style='font-size: 28px; '>&quot;Would you like <span class=indam>[...]</span> tea?&quot;[sound:rec1332266852.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7jn4d9.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Would you like <span class=indam>some</span> tea?&quot;[sound:rec1332266857.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":61},
{"FRONT":"<span style='font-size: 28px; '>She's eating pasta <span class=indam>[...]</span> a fork and spoon. <i>(she's using a fork and spoon)</i>[sound:rec1336839817.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexumrws.png' /></span>","BACK":"<span style='font-size: 28px; '>She's eating pasta <span class=indam>with</span> a fork and spoon.[sound:rec1336839823.mp3]</span><br><span style=''><i>with a fork and spoon - вилкой и ложкой</i></span>","INFO":null,"STT":156},
{"FRONT":"<span style='font-size: 28px; '>&quot;Mmm. That looks like tasty <span class=indam>s___</span>!&quot;[sound:rec1332700055.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeaii1t.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Mmm. That looks like tasty <span class=indam>soup</span>!&quot;[sound:rec1332700059.mp3]</span><br><span style=''><i>soup (n.) - суп</i></span>","INFO":null,"STT":142},
{"FRONT":"<span style='font-size: 28px; '>&quot;Mmm, can I have some <span class=indam>_____</span>?&quot;[sound:rec1332265701.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7emulc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Mmm, can I have some <span class=indam>grapes</span>?&quot;[sound:rec1332265706.mp3]<br /><br /><br /></span><br><span style=''><i>grapes (n.) - виноград</i></span>","INFO":null,"STT":6},
{"FRONT":"<span style='font-size: 28px; '>&quot;I eat <span class=indam>______</span> fruit!&quot;[sound:rec1332697540.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezgdoij.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I eat <span class=indam>a lot of</span> fruit!&quot;[sound:rec1332697551.mp3]<br /><i>or</i><br />&quot;I eat <span class=indam>lots of</span> fruit!&quot;<br /><br /></span><br><span style=''><i>a lot of, lots of - много</i></span>","INFO":null,"STT":77},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) It's on page 118.<br />b) It's on page 180. [sound:rec1336840024.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) It's on page 180.</span>[sound:rec1336840024.mp3]</span><br><span style=''></span>","INFO":null,"STT":167},
{"FRONT":"<span style='font-size: 28px; '>&quot;They're playing badly. I think they <span class=indam>[...]</span> going to win the match.&quot;[sound:rec1332698512.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste26qivc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;They're playing badly. I think they <span class=indam>aren't</span> going to win the match.&quot;[sound:rec1332698521.mp3]<br /><br /></span><br><span style=''><i>to win a match - выиграть матч</i><br /><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>predictions</span><i>)</i><br /></span>","INFO":null,"STT":101},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please <span class=indam>p___</span> your rubbish in the bin.&quot;[sound:rec1332699553.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexi9ct9.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please <span class=indam>put</span> your rubbish in the bin.&quot;[sound:rec1332699559.mp3]<br /><br /></span><br><span style=''><i>to put - положить, класть</i></span>","INFO":null,"STT":130},
{"FRONT":"<span style='font-size: 28px; '>&quot;I sometimes eat <span class=indam>p____</span>.&quot;[sound:rec1332266457.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewv4jgl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I sometimes eat <span class=indam>pasta</span>.&quot;[sound:rec1332266460.mp3]<br /></span><br><span style=''><i>pasta (n.) - макароны</i></span>","INFO":null,"STT":44},
{"FRONT":"<span style='font-size: 28px; '>-Please can I have some toast?[sound:rec1332266966.mp3]<br>-Of course. How <span class=indam>m____</span> would you like?&quot;<br /><img class='center-block img-responsive hinhdep'  src='pastegbhonk.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Of course. How <span class=indam>much</span> would you like?[sound:rec1332266976.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":64},
{"FRONT":"<span style='font-size: 28px; '>I'm eating an orange with a <span class=indam>k___</span> and fork![sound:rec1336839847.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiiehat.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm eating an orange with a <span class=indam>knife</span> and fork![sound:rec1336839853.mp3]</span><br><span style=''><i>a knife - нож</i></span>","INFO":null,"STT":158},
{"FRONT":"<span style='font-size: 28px; '>&quot;No thanks, I don't want <span class=indam>[...]</span> chips.&quot;[sound:rec1332266184.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebaki6b.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;No thanks, I don't want <span class=indam>any</span> chips.&quot;[sound:rec1332266191.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":28},
{"FRONT":"<span style='font-size: 28px; '>Please can I have an <span class=indam>______</span>?[sound:rec1332265620.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteafbi8r.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Please can I have an <span class=indam>orange</span>?[sound:rec1332265610.mp3]<br /></span><br><span style=''><i>an orange - апельсин</i></span>","INFO":null,"STT":1},
{"FRONT":"<span style='font-size: 28px; '>That was a tasty cake - there isn't <span class=indam>[...]</span> left![sound:rec1332700651.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqjtkve.png' /></span>","BACK":"<span style='font-size: 28px; '>That was a tasty cake - there isn't <span class=indam>much</span> left![sound:rec1332700667.mp3]<br /></span><br><span style=''><i>There isn't much left. - Мало осталось.</i><br></span>","INFO":null,"STT":150},
{"FRONT":"<span style='font-size: 28px; '>How <span class=indam>m____</span> hours does your baby usually sleep?[sound:rec1332697461.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejg3x1o.jpg' /></span>","BACK":"<span style='font-size: 28px; '>How <span class=indam>many</span> hours does your baby usually sleep?[sound:rec1332697468.mp3]</span><br><span style=''><i>an hour - час</i></span>","INFO":null,"STT":74},
{"FRONT":"<span style='font-size: 28px; '>&quot;Oh dear. <span class=indam>____ ___ ____ __ ____</span> TV tonight.&quot; <b>(we / not watch)</b>[sound:rec1332698327.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastef6n2kx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Oh dear. <span class=indam>We're not going to watch</span> TV tonight.&quot;[sound:rec1332698336.mp3]<br /><br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>predictions</span><i>)</i></span>","INFO":null,"STT":94},
{"FRONT":"<span style='font-size: 28px; '>&quot;Would you like a <span class=indam>____</span> of tea?&quot;[sound:rec1332266875.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7jn4d9.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Would you like a <span class=indam>cup</span> of tea?&quot;[sound:rec1332266880.mp3]<br /><br /></span><br><span style=''><i>a cup of tea - чашка чая</i><br></span>","INFO":null,"STT":63},
{"FRONT":"<span style='font-size: 28px; '>She's wearing a <span class=indam>r____</span>.[sound:rec1332699585.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejqavpx.png' /></span>","BACK":"<span style='font-size: 28px; '>She's wearing a <span class=indam>ring</span>.[sound:rec1332699589.mp3]<br /><br /></span><br><span style=''><i>a ring - кольцо</i></span>","INFO":null,"STT":132},
{"FRONT":"<span style='font-size: 28px; '>-How <span class=indam>m____</span> cents are there in a euro?[sound:rec1332697416.mp3]<br />-100<br /><img class='center-block img-responsive hinhdep'  src='paste4te0yb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>How <span class=indam>many</span> cents are there in a euro?[sound:rec1332697426.mp3]</span><br><span style=''></span>","INFO":null,"STT":72},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please don't give the children any <span class=indam>s____</span>!&quot;[sound:rec1332266093.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0da6sw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please don't give the children any <span class=indam>sweets</span>!&quot;[sound:rec1332266097.mp3]<br /><br /></span><br><span style=''><i>a sweet - конфета</i><br><br /></span>","INFO":null,"STT":25},
{"FRONT":"<span style='font-size: 28px; '>-What did you get for your birthday?[sound:rec1332698565.mp3]<br />-My friends gave me a bottle <span class=indam>[...]</span> wine.<br /><img class='center-block img-responsive hinhdep'  src='pastewuzhdf.png' /></span>","BACK":"<span style='font-size: 28px; '>My friends gave me a bottle <span class=indam>of</span> wine.[sound:rec1332698572.mp3]<br /></span><br><span style=''><i>wine (n.) - вино</i></span>","INFO":null,"STT":104},
{"FRONT":"<span style='font-size: 28px; '>The pub's quiet this evening. There <span class=indam>____</span> many people.[sound:rec1332700602.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepv14ul.png' /></span>","BACK":"<span style='font-size: 28px; '>The pub's quiet this evening. There <span class=indam>aren't</span> many people.[sound:rec1332700609.mp3]<br /></span><br><span style=''><i>There aren't many people. - Здесь мало народу.</i></span>","INFO":null,"STT":147},
{"FRONT":"<span style='font-size: 28px; '>-What's in the <span class=indam>sh_____ b____</span>?[sound:rec1332698656.mp3]<br />-There are some eggs, milk, bananas, ...<br /><img class='center-block img-responsive hinhdep'  src='paste575o9c.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What's in the <span class=indam>shopping basket</span>?[sound:rec1332698665.mp3]<br />-There are some eggs, milk, bananas, ...<br /><br /></span><br><span style=''><i>a shopping basket - корзина для покупок</i></span>","INFO":null,"STT":107},
{"FRONT":"<span style='font-size: 28px; '>-How <span class=indam>m____</span> milk does she drink?[sound:rec1332267074.mp3]<br>-Three glasses a day.<br /><img class='center-block img-responsive hinhdep'  src='pasteogzers.png' /></span>","BACK":"<span style='font-size: 28px; '>-How <span class=indam>much</span> milk does she drink?[sound:rec1332267083.mp3]</span><br><span style=''></span>","INFO":null,"STT":69},
{"FRONT":"<span style='font-size: 28px; '>It's an <span class=indam>_____</span>.[sound:rec1332266254.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejkubo8.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's an <span class=indam>onion</span>.[sound:rec1332266258.mp3]<br /></span><br><span style=''><i>an onion - луковица</i></span>","INFO":null,"STT":33},
{"FRONT":"<span style='font-size: 28px; '>-Are you going <span class=indam>[...]</span> finish this by tomorrow?[sound:rec1332698058.mp3]<br />-No I'm not.<br /><img class='center-block img-responsive hinhdep'  src='pastelb4zhf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Are you going <span class=indam>to</span> finish this by tomorrow?[sound:rec1332698048.mp3]<br />-No I'm not.<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":90},
{"FRONT":"<span style='font-size: 28px; '>&quot;Here are some <span class=indam>_____</span>.&quot;[sound:rec1332266343.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0f2jzc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Here are some <span class=indam>tomatoes</span>.&quot;[sound:rec1332266347.mp3]<br /><br /><br /></span><br><span style=''><i>a tomato - помидор, томат</i></span>","INFO":null,"STT":38},
{"FRONT":"<span style='font-size: 28px; '>-How <span class=indam>m____</span> fruit do you eat?[sound:rec1332267041.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevreazd.png' /></span>","BACK":"<span style='font-size: 28px; '>-How <span class=indam>much</span> fruit do you eat?[sound:rec1332267047.mp3]</span><br><span style=''></span>","INFO":null,"STT":68},
{"FRONT":"<span style='font-size: 28px; '>&quot;Would you like some <span class=indam>_____ </span>with your bread?&quot;[sound:rec1332266567.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastergavbw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Would you like some <span class=indam>butter </span>with your bread?&quot;[sound:rec1332266572.mp3]<br /></span><br><span style=''><i>butter (n.) - масло</i></span>","INFO":null,"STT":50},
{"FRONT":"<span style='font-size: 28px; '>She's eating pasta with a fork and <span class=indam>s____</span>.[sound:rec1336839831.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecahdqs.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She's eating pasta with a fork and <span class=indam>spoon</span>.[sound:rec1336839838.mp3]</span><br><span style=''><i>a spoon - ложка</i></span>","INFO":null,"STT":157},
{"FRONT":"<span style='font-size: 28px; '>Please can I have another beer? I don't have <span class=indam>[...]</span> left.[sound:rec1332700564.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteca99js.png' /></span>","BACK":"<span style='font-size: 28px; '>Please can I have another beer? I don't have <span class=indam>much</span> left.[sound:rec1332700573.mp3]<br /></span><br><span style=''><i>I don't have much left. - У меня осталось немного </i></span>","INFO":null,"STT":145},
{"FRONT":"<span style='font-size: 28px; '>&quot;I want to make pancakes. Do you have <span class=indam>[...]</span> eggs?&quot;[sound:rec1332266647.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiyqtcl.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I want to make pancakes. Do you have <span class=indam>any</span> eggs?&quot;[sound:rec1332266655.mp3]<br /></span><br><span style=''><i>an egg - яйцо</i></span>","INFO":null,"STT":54},
{"FRONT":"<span style='font-size: 28px; '>Oh dear. There aren't <span class=indam>[...]</span> eggs left.[sound:rec1332700522.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastei6v8cl.png' /></span>","BACK":"<span style='font-size: 28px; '>Oh dear. There aren't <span class=indam>any</span> eggs left.[sound:rec1332700529.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":144},
{"FRONT":"<span style='font-size: 28px; '>-I'm hungry.[sound:rec1332265787.mp3]<br />-Would you like <span class=indam>[...]</span> biscuits?<br /><img class='center-block img-responsive hinhdep'  src='pastezilizp.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Would you like <span class=indam>some</span> biscuits?[sound:rec1332265792.mp3]<br /></span><br><span style=''><i>a biscuit - печенье</i></span>","INFO":null,"STT":9},
{"FRONT":"<span style='font-size: 28px; '>Here are the <span class=indam>in_____</span> for a chocolate cake. <i>(the food we use to make something)</i>[sound:rec1332698871.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehwludk.png' /></span>","BACK":"<span style='font-size: 28px; '>Here are the <span class=indam>ingredients</span> for a chocolate cake.[sound:rec1332698879.mp3]<br /></span><br><span style=''><i>ingredients - состав</i></span>","INFO":null,"STT":121},
{"FRONT":"<span style='font-size: 28px; '>-Would you like to come for a drink later?[sound:rec1332697951.mp3]<br />-Thanks, but we have an exam tomorrow, so <span class=indam>_________</span> this evening. <b>(we / study)</b><br /><img class='center-block img-responsive hinhdep'  src='pastezympng.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Would you like to come for a drink later?<br />-Thanks, but we have an exam tomorrow, so <span class=indam>we're going to study</span> this evening.[sound:rec1332697963.mp3]<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":85},
{"FRONT":"<span style='font-size: 28px; '>He looks <span class=indam>l____</span> his dog. <i>(similar to) </i>[sound:rec1332698924.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenafgcu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He looks <span class=indam>like</span> his dog.[sound:rec1332698935.mp3]<br /><br /></span><br><span style=''><i>to look </i><span style='font-weight:600; font-style:italic;'>like</span><i> sth.</i></span>","INFO":null,"STT":123},
{"FRONT":"<span style='font-size: 28px; '>There are some <b>nouns</b> that you can count, they are <span class=indam>count____</span>.[sound:rec1332698736.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekebjr0.jpg' /></span>","BACK":"<span style='font-size: 28px; '>There are some <b>nouns</b> that you can count, they are <span class=indam>countable</span>.[sound:rec1332698742.mp3]</span><br><span style=''><i>countable (adj.) - исчисляемый</i></span>","INFO":null,"STT":112},
{"FRONT":"<span style='font-size: 28px; '>&quot;I think they're a happy <span class=indam>c____</span>.&quot; <i>(two people)</i>[sound:rec1332698779.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterghhcz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I think they're a happy <span class=indam>couple</span>.&quot;[sound:rec1332698783.mp3]<br /><br /></span><br><span style=''><i>a couple - пара</i></span>","INFO":null,"STT":114},
{"FRONT":"<span style='font-size: 28px; '>How <span class=indam>m____</span> free time do you have during the week?[sound:rec1332697488.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevi8elv.png' /></span>","BACK":"<span style='font-size: 28px; '>How <span class=indam>much</span> free time do you have during the week?[sound:rec1332697496.mp3]</span><br><span style=''></span>","INFO":null,"STT":75},
{"FRONT":"<span style='font-size: 28px; '>A <span class=indam>h____</span> is a symbol of love.[sound:rec1332698857.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste99919y.png' /></span>","BACK":"<span style='font-size: 28px; '>A <span class=indam>heart</span> is a symbol of love.[sound:rec1332698863.mp3]<br /></span><br><span style=''><i>a heart - сердце</i><br></span>","INFO":null,"STT":120},
{"FRONT":"<span style='font-size: 28px; '>&quot;We don't eat very much <span class=indam>[...]</span>.&quot;[sound:rec1332266467.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste54sxnb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We don't eat very much <span class=indam>rice</span>.&quot;[sound:rec1332266471.mp3]<br /></span><br><span style=''><i>rice (n.) - рис</i></span>","INFO":null,"STT":45},
{"FRONT":"<span style='font-size: 28px; '>Is this your <span class=indam>id____</span> husband? <i>(perfect, dream)</i>[sound:rec1332698886.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteabg4og.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Is this your <span class=indam>ideal</span> husband?[sound:rec1332698916.mp3]<br /></span><br><span style=''><i>ideal (adj.) - идеальный</i></span>","INFO":null,"STT":122},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you have any vegetable <span class=indam>____</span>?&quot;[sound:rec1332266437.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep4zr2p.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you have any vegetable <span class=indam>oil</span>?&quot;[sound:rec1332266450.mp3]<br /></span><br><span style=''><i>oil (n.) - масло</i></span>","INFO":null,"STT":43},
{"FRONT":"<span style='font-size: 28px; '>&quot;How much <span class=indam>_____</span> would you like?&quot;[sound:rec1332266984.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegbhonk.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;How much <span class=indam>toast</span> would you like?&quot;[sound:rec1332266989.mp3]<br /></span><br><span style=''><i>toast (n.) - тост</i></span>","INFO":null,"STT":65},
{"FRONT":"<span style='font-size: 28px; '>It's <span class=indam>[...]</span> onion.[sound:rec1332266265.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejkubo8.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>an</span> onion.[sound:rec1332266269.mp3]<br /></span><br><span style=''><i>an onion - луковица</i></span>","INFO":null,"STT":34},
{"FRONT":"<span style='font-size: 28px; '>&quot;Help! <span class=indam>______________</span>!&quot; <b>(we / crash)</b>[sound:rec1332698389.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste52zo7y.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Help! <span class=indam>We're going to crash</span>!&quot;[sound:rec1332698394.mp3]<br /><br /></span><br><span style=''><i>to crash - разбиваться, разбиться</i><br><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>predictions</span><i>)</i></span>","INFO":null,"STT":96},
{"FRONT":"<span style='font-size: 28px; '>It's a <span class=indam>_______</span>.[sound:rec1332699645.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_w3qdg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>cabbage</span>.[sound:rec1332699649.mp3]</span><br><span style=''><i>a cabbage - капуста</i></span>","INFO":null,"STT":137},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> you going to finish this by tomorrow?[sound:rec1332698015.mp3]<br />-No I<span class=indam>[...]</span> not.<br /><img class='center-block img-responsive hinhdep'  src='pastelb4zhf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Are</span> you going to finish this by tomorrow?[sound:rec1332698028.mp3]<br />-No I<span class=indam>'m</span> not.<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":88},
{"FRONT":"<span style='font-size: 28px; '>-How <span class=indam>m___</span> crisps are there?[sound:rec1332265952.mp3]<br />-I don't know!<br /><img class='center-block img-responsive hinhdep'  src='pastev6i9u8.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-How <span class=indam>many</span> crisps are there?[sound:rec1332265961.mp3]<br />-I don't know!<br /></span><br><span style=''><i>crisps (n.) - чипсы</i></span>","INFO":null,"STT":17},
{"FRONT":"<span style='font-size: 28px; '>&quot;Look at the clouds. I think it<span class=indam>__ _______</span> to rain.&quot;[sound:rec1332698356.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetwbrba.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Look at the clouds. I think <span class=indam>it's going</span> to rain.&quot;[sound:rec1332698365.mp3]<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>predictions</span><i>)</i></span>","INFO":null,"STT":95},
{"FRONT":"<span style='font-size: 28px; '>&quot;Don't eat too much <span class=indam>______</span>!&quot;[sound:rec1332265918.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuqhygi.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Don't eat too much <span class=indam>chocolate</span>!&quot;[sound:rec1332265923.mp3]<br /></span><br><span style=''><i>chocolate (n.) - шоколад</i></span>","INFO":null,"STT":16},
{"FRONT":"<span style='font-size: 28px; '>-What would you like to drink?<br />-Some orange <span class=indam>_____</span> please.[sound:rec1332266753.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetsa5ns.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-What would you like to drink?<br />-Some orange <span class=indam>juice</span> please.[sound:rec1332266758.mp3]<br /></span><br><span style=''><i>juice (n.) - сок</i></span>","INFO":null,"STT":57},
{"FRONT":"<span style='font-size: 28px; '>&quot;Would you like some <span class=indam>____</span>?&quot;[sound:rec1332697361.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7jn4d9.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Would you like some <span class=indam>tea</span>?&quot;[sound:rec1332697368.mp3]<br /></span><br><span style=''><i>tea (n.) - чай</i></span>","INFO":null,"STT":62},
{"FRONT":"<span style='font-size: 28px; '>&quot;Every summer we go <span class=indam>c____</span>.&quot; <i>(sleep outside in a tent)</i>[sound:rec1332698830.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuitluv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Every summer we go <span class=indam>camping</span>.&quot;[sound:rec1332698835.mp3]<br /><br /></span><br><span style=''><i>to go camping - жить в палатках</i><br /></span>","INFO":null,"STT":118},
{"FRONT":"<span style='font-size: 28px; '>-I'm hungry.[sound:rec1332265741.mp3]<br />-Would you like a <span class=indam>_______</span>?<br /><img class='center-block img-responsive hinhdep'  src='pastespbalx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Would you like a <span class=indam>banana</span>?[sound:rec1332265746.mp3]<br /></span><br><span style=''><i>a banana - банан</i></span>","INFO":null,"STT":8},
{"FRONT":"<span style='font-size: 28px; '>He's a bad student. He <span class=indam>[...]</span> going to pass the exam.[sound:rec1332698472.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehkbllc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's a bad student. He <span class=indam>isn't</span> going to pass the exam.[sound:rec1332698482.mp3]<br /><br /></span><br><span style=''><i>to pass an exam - сдать экзамен</i><br /><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>predictions</span><i>)</i></span>","INFO":null,"STT":99},
{"FRONT":"<span style='font-size: 28px; '>Please can I have <span class=indam>[...]</span> orange?[sound:rec1332265603.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteafbi8r.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Please can I have <span class=indam>an</span> orange?[sound:rec1332265610.mp3]<br /></span><br><span style=''><i>an orange - апельсин</i></span>","INFO":null,"STT":0},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) It's on page 130.<br />b) It's on page 140.[sound:rec1336839940.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) It's on page 130.</span>[sound:rec1336839940.mp3]</span><br><span style=''></span>","INFO":null,"STT":160},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>___________</span> a present for Daniel? <b>(you / buy)</b>[sound:rec1332697977.mp3]<br />-Yes, <b>I'm going to buy</b> him some socks.<br /><img class='center-block img-responsive hinhdep'  src='paste271neb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Are you going to buy</span> a present for Daniel?[sound:rec1332697986.mp3]<br />-Yes, <b>I'm going to buy</b> him some socks.<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span><i>)</i></span>","INFO":null,"STT":86},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please turn off <b>the</b> <span class=indam>t___</span>.&quot;[sound:rec1332699623.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewwh5xl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please turn off <b>the</b> <span class=indam>tap</span>.&quot;[sound:rec1332699627.mp3]<br /><br /></span><br><span style=''><i>a tap - кран</i></span>","INFO":null,"STT":135},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you have <span class=indam>[...]</span> vegetable oil?&quot;[sound:rec1332266420.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteleizbl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you have <span class=indam>any</span> vegetable oil?&quot;[sound:rec1332266429.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":42},
{"FRONT":"<span style='font-size: 28px; '>&quot;On holiday, we stayed <span class=indam>[...]</span> a campsite.&quot;[sound:rec1332698720.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteioplji.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;On holiday, we stayed <span class=indam>at</span> a campsite.&quot;[sound:rec1332698726.mp3]<br /></span><br><span style=''><i>a campsite - кемпинг</i></span>","INFO":null,"STT":111},
{"FRONT":"<span style='font-size: 28px; '>&quot;How much <span class=indam>___ ____</span> would you like?&quot;[sound:rec1332266028.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteefub1k.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;How much <span class=indam>ice cream</span> would you like?&quot;[sound:rec1332266020.mp3]<br /></span><br><span style=''><i>ice cream (n.) - мороженое</i></span>","INFO":null,"STT":21},
{"FRONT":"<span style='font-size: 28px; '>How <span class=indam>m____</span> money do you have with you?[sound:rec1332697438.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastej6clhz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>How <span class=indam>much</span> money do you have with you?[sound:rec1332697445.mp3]</span><br><span style=''><i>money (n.) - деньги</i></span>","INFO":null,"STT":73},
{"FRONT":"<span style='font-size: 28px; '>-I'm hungry.[sound:rec1332265798.mp3]<br />-Would you like some <span class=indam>b____</span>?<br /><img class='center-block img-responsive hinhdep'  src='pastezilizp.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Would you like some <span class=indam>biscuits</span>?[sound:rec1332265803.mp3]<br /><br /></span><br><span style=''><i>a biscuit - печенье</i><br /><i>note: American English 'a </i><span style='font-weight:600; font-style:italic;'>cookie</span><i>'</i></span>","INFO":null,"STT":10},
{"FRONT":"<span style='font-size: 28px; '>That was a tasty cake - there <span class=indam>[...]</span> much left![sound:rec1332700635.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqjtkve.png' /></span>","BACK":"<span style='font-size: 28px; '>That was a tasty cake - there <span class=indam>isn't</span> much left![sound:rec1332700642.mp3]<br /></span><br><span style=''><i>There isn't much left. - Мало осталось.</i></span>","INFO":null,"STT":149},
{"FRONT":"<span style='font-size: 28px; '>They're <span class=indam>________</span> play football soon.[sound:rec1332698422.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevqeiot.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They're <span class=indam>going to</span> play football soon.[sound:rec1332698428.mp3]<br /><br /></span><br><span style=''><i>(use </i><span style='font-weight:600; font-style:italic;'>be going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>predictions</span><i>)</i></span>","INFO":null,"STT":97},
{"FRONT":"<span style='font-size: 28px; '>-I think French wine is the best.[sound:rec1332698614.mp3]<br />-I <span class=indam>a____</span>. <i>(think the same)</i><br /><img class='center-block img-responsive hinhdep'  src='paste7vpqoa.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>-I think French wine is the best.<br />-I <span class=indam>agree</span>.[sound:rec1332698619.mp3]<br /><br /></span><br><span style=''><i>to agree - соглашаться</i></span>","INFO":null,"STT":105},
{"FRONT":"<span style='font-size: 28px; '>&quot;Let's have <span class=indam>sp____</span> for dinner!&quot;[sound:rec1332699596.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehxxvuf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Let's have <span class=indam>spaghetti</span> for dinner!&quot;[sound:rec1332699602.mp3]<br /></span><br><span style=''><i>spaghetti (n.) - спагетти</i></span>","INFO":null,"STT":133},
{"FRONT":"<span style='font-size: 28px; '>&quot;I usually have <span class=indam>[...]</span> sandwich for lunch.&quot;[sound:rec1332266043.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9lbpah.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I usually have <span class=indam>a</span> sandwich for lunch.&quot;[sound:rec1332266052.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":22}]

if (localStorage.caumayEn_SG_7 == null) {
    localStorage.caumayEn_SG_7 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_7"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_7+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_7).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_7).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_7).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_7+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_7).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_7).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_7).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_7)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_7))
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
	cau = Number(localStorage.caumayEn_SG_7)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_7)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_7) >  0){
		localStorage.caumayEn_SG_7 = Number(localStorage.caumayEn_SG_7) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_7))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_7)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_7)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_7) < dulieu.length-1){
		localStorage.caumayEn_SG_7 = Number(localStorage.caumayEn_SG_7) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_7))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_7)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_7)].BACK
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
	var current_player = Number(localStorage.caumayEn_SG_7)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_7)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_7)].BACK
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
	cau = Number(localStorage.caumayEn_SG_7)
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
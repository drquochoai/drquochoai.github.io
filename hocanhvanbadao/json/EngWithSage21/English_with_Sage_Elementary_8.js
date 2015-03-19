$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '>&quot;I think English is <span class=indam>____</span> than Maths.&quot; <i>(less difficult)</i>[sound:rec1334406411.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedas5uo.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I think English is <span class=indam>easier</span> than Maths.&quot;[sound:rec1334406417.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>easy - easier</span><br /><i>easier - легче</i></span>","INFO":null,"STT":51},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'd like to go to Japan, but I <span class=indam>___ ____</span> flying.&quot; <b>(not like)</b>[sound:rec1334407023.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexl9vl7.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'd like to go to Japan, but I <span class=indam>don't like</span> flying.&quot;[sound:rec1334407030.mp3]<br /><br /></span><br><span style=''><i>like + (verb)-ing</i></span>","INFO":null,"STT":54},
{"FRONT":"<span style='font-size: 28px; '>This game isn't <span class=indam>j___</span> for children - adults can play too! <i>(only)</i>[sound:rec1334407472.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetriodp.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This game isn't <span class=indam>just</span> for children - adults can play too![sound:rec1334407480.mp3]<br /></span><br><span style=''><i>just for ... - только для ...</i></span>","INFO":null,"STT":59},
{"FRONT":"<span style='font-size: 28px; '>Is Coke <span class=indam>more</span> <span class=indam>po____</span> than Pepsi? <i>(people like it)</i>[sound:rec1334406426.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetixugd.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Is Coke <span class=indam>more</span> <span class=indam>popular</span> than Pepsi?[sound:rec1334406431.mp3]<br /></span><br><span style=''><i>more popular - более популярный</i><br /></span>","INFO":null,"STT":133},
{"FRONT":"<span style='font-size: 28px; '>Criminals often <span class=indam>st____</span> money. <i>(take illegally)</i>[sound:rec1334408012.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegczxue.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Criminals often <span class=indam>steal</span> money.[sound:rec1334408018.mp3]<br /><br /></span><br><span style=''><i>to steal sth. - красть / воровать что-л.</i><br></span>","INFO":null,"STT":44},
{"FRONT":"<span style='font-size: 28px; '>He is <span class=indam>ta___</span> than her.[sound:rec1334406187.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste01z045.png' /></span>","BACK":"<span style='font-size: 28px; '>He is <span class=indam>taller</span> than her.[sound:rec1334406192.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>tall - taller</span><br /><i>taller - выше</i></span>","INFO":null,"STT":14},
{"FRONT":"<span style='font-size: 28px; '>&quot;I love <span class=indam>r___</span>!&quot; <i>(when water falls from the sky)</i>[sound:rec1334408279.mp3]<br /><br /><img class='center-block img-responsive hinhdep'  src='pastexswcax.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I love <span class=indam>rain</span>!&quot;[sound:rec1334408291.mp3]<br /><br /><br /></span><br><span style=''><i>rain (n.) - дождь</i></span>","INFO":null,"STT":115},
{"FRONT":"<span style='font-size: 28px; '>A BMW is <span class=indam>____ _____</span> than a Lada. <b>(expensive)</b>[sound:rec1334405921.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh_1exc.png' /><br />$40,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$10,000</span>","BACK":"<span style='font-size: 28px; '>A BMW is <span class=indam>more</span> <span class=indam>expensive</span> than a Lada.[sound:rec1334405929.mp3]<br /></span><br><span style=''><i>more expensive - дороже</i></span>","INFO":null,"STT":85},
{"FRONT":"<span style='font-size: 28px; '>&quot;I <span class=indam>____ _____</span> to live in Australia.&quot; <b>(not like)</b>[sound:rec1334406916.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuyto82.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I <span class=indam>wouldn't</span> <span class=indam>like</span> to live in Australia.&quot;[sound:rec1334406924.mp3]<br /><br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>wouldn't like + to + infinitive</span><br /><i>I wouldn't like to ... - Я не хотел бы ...</i></span>","INFO":null,"STT":18},
{"FRONT":"<span style='font-size: 28px; '>Beer is <span class=indam>[...]</span> healthy than water.[sound:rec1334406016.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemkkspl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Beer is <span class=indam>less</span> healthy than water.[sound:rec1334406023.mp3]<br /></span><br><span style=''><i>less - менее</i></span>","INFO":null,"STT":127},
{"FRONT":"<span style='font-size: 28px; '>He is taller than <span class=indam>____</span>.[sound:rec1334406257.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste01z045.png' /></span>","BACK":"<span style='font-size: 28px; '>He is taller than <span class=indam>her</span>.[sound:rec1334406266.mp3]<br /><i>or</i><br />He is taller than <span class=indam>she is</span>.</span><br><span style=''></span>","INFO":null,"STT":53},
{"FRONT":"<span style='font-size: 28px; '>The cheetah is <span class=indam>___ _____</span> animal in the world. <b>(fast)</b>[sound:rec1334406462.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteihdj4e.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The cheetah is <span class=indam>the fastest</span> animal in the world.[sound:rec1334406473.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>fast - the fastest</span><br /><i>the fastest - самый быстрый</i></span>","INFO":null,"STT":92},
{"FRONT":"<span style='font-size: 28px; '>Greece is not too hot in the summer and not too cold in the winter - it has a good <span class=indam>cl____</span>.[sound:rec1334407632.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5dq0u_.png' /></span>","BACK":"<span style='font-size: 28px; '>Greece is not too hot in the summer and not too cold in the winter - it has a good <span class=indam>climate</span>.[sound:rec1334407642.mp3]</span><br><span style=''><i>climate (n.) - климат</i></span>","INFO":null,"STT":5},
{"FRONT":"<span style='font-size: 28px; '>The best <span class=indam>t___</span> of year to visit is the spring.[sound:rec1334408533.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq5xctm.png' /></span>","BACK":"<span style='font-size: 28px; '>The best <span class=indam>time</span> of year to visit is the spring.[sound:rec1334408540.mp3]<br /></span><br><span style=''><i>time (n.) - время</i></span>","INFO":null,"STT":119},
{"FRONT":"<span style='font-size: 28px; '>A rabbit is <span class=indam>______</span> than a snail. <b>(fast)</b>[sound:rec1334406083.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemqrvk9.jpg' /></span>","BACK":"<span style='font-size: 28px; '>A rabbit is <span class=indam>faster</span> than a snail.[sound:rec1334406092.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>fast - faster</span><br /><i>faster - быстрее</i></span>","INFO":null,"STT":108},
{"FRONT":"<span style='font-size: 28px; '>He's <span class=indam>___ ____</span> student in the class. <b>(bad)</b>[sound:rec1334406777.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterhp74s.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's <span class=indam>the worst</span> student in the class.[sound:rec1334406783.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>bad - the worst</span><br /><i>the worst - самый плохой</i></span>","INFO":null,"STT":55},
{"FRONT":"<span style='font-size: 28px; '>-Would you like a cup of tea?[sound:rec1334408791.mp3]<br />-Yes <span class=indam>p____</span>!<br /><img class='center-block img-responsive hinhdep'  src='pastediuvuu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Would you like a cup of tea?<br />-Yes <span class=indam>please</span>![sound:rec1334408738.mp3]<br /></span><br><span style=''><i>please - пожалуйста</i></span>","INFO":null,"STT":29},
{"FRONT":"<span style='font-size: 28px; '><span style='color:#000000;'>&quot;I wouldn't like</span> <span class=indam>[...]</span> live in Australia.&quot;[sound:rec1334406948.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuyto82.png' /></span>","BACK":"<span style='font-size: 28px; '><span style='color:#000000;'>&quot;I wouldn't like</span> <span class=indam>to</span> live in Australia.&quot;[sound:rec1334406955.mp3]<br /><br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>wouldn't like + to + infinitive</span><br /><i>I wouldn't like to ... - Я не хотел бы ...</i><br /></span>","INFO":null,"STT":0},
{"FRONT":"<span style='font-size: 28px; '>&quot;We went on holiday to Canada and had an <span class=indam>ad_____</span>!&quot; <i>(a very exciting time)</i>[sound:rec1334407508.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyzs8_i.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We went on holiday to Canada and had an <span class=indam>adventure</span>!&quot;[sound:rec1334407515.mp3]<br /><br /></span><br><span style=''><i>to </i><span style='font-weight:600; font-style:italic;'>have</span><i> an adventure</i><br /><i>an adventure - приключение</i></span>","INFO":null,"STT":24},
{"FRONT":"<span style='font-size: 28px; '>This person is <span class=indam>l____</span> in the queue.[sound:rec1334407871.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5zfq2s.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This person is <span class=indam>last</span> in the queue.[sound:rec1334407876.mp3]<br /></span><br><span style=''><i>the last - последний</i></span>","INFO":null,"STT":2},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'd like <span class=indam>[...]</span> be a millionaire!&quot;[sound:rec1334406933.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9ohbhe.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'd like <span class=indam>to</span> be a millionaire!&quot;[sound:rec1334406939.mp3]<br /><br /></span><br><span style=''><i>would like + to + infinitive</i><br><i>I would like to ... - Я хотел бы ...</i></span>","INFO":null,"STT":19},
{"FRONT":"<span style='font-size: 28px; '>A snail is <span class=indam>______</span> than a rabbit. <b>(slow)</b>[sound:rec1334406067.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteco6upb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>A snail is <span class=indam>slower</span> than a rabbit.[sound:rec1334406074.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>slow - slower </span><br /><i>slower - медленнее</i></span>","INFO":null,"STT":91},
{"FRONT":"<span style='font-size: 28px; '>Paris is <b>the</b> <span class=indam>c____</span> of France. <i>(most important city, where the government is)</i>[sound:rec1334407564.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteio3wqb.png' /></span>","BACK":"<span style='font-size: 28px; '>Paris is <b>the</b> <span class=indam>capital</span> of France.[sound:rec1334407570.mp3]<br /></span><br><span style=''><i>the capital - столица</i></span>","INFO":null,"STT":16},
{"FRONT":"<span style='font-size: 28px; '>&quot;He learnt to ride a bike very <span class=indam>eas___</span>.&quot;[sound:rec1334407387.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemkvpgk.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;He learnt to ride a bike very <span class=indam>easily</span>.&quot;[sound:rec1334407395.mp3]<br /><br /></span><br><span style=''><i>easily (adv.) - легко</i></span>","INFO":null,"STT":9},
{"FRONT":"<span style='font-size: 28px; '>This person is <span class=indam>f____</span> in the queue.[sound:rec1334407884.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8gn3sc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This person is <span class=indam>first</span> in the queue.[sound:rec1334407900.mp3]</span><br><span style=''><i>the first - первый</i></span>","INFO":null,"STT":60},
{"FRONT":"<span style='font-size: 28px; '>This shirt is made of <span class=indam>с_____</span>.[sound:rec1334408195.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteg7jj_u.png' /><img class='center-block img-responsive hinhdep'  src='pastefphfg5.png' /></span>","BACK":"<span style='font-size: 28px; '>This shirt is made of <span class=indam>cotton</span>.[sound:rec1334408201.mp3]<br /></span><br><span style=''><i>cotton (n.) - хлопок</i></span>","INFO":null,"STT":87},
{"FRONT":"<span style='font-size: 28px; '>Mice are much <span class=indam>[...]</span> dangerous than tigers.[sound:rec1334405833.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepokonk.png' /></span>","BACK":"<span style='font-size: 28px; '>Mice are much <span class=indam>less</span> dangerous than tigers.[sound:rec1334405853.mp3]<br /></span><br><span style=''><i>less - менее</i></span>","INFO":null,"STT":26},
{"FRONT":"<span style='font-size: 28px; '>&quot;My rabbit is bigger <span class=indam>[...]</span> yours!&quot;[sound:rec1334406102.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeeh_tv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My rabbit is bigger <span class=indam>than</span> yours!&quot;[sound:rec1334406110.mp3]<br /></span><br><span style=''><i>than - чем</i></span>","INFO":null,"STT":46},
{"FRONT":"<span style='font-size: 28px; '>Computers are <span class=indam>_____</span> than ipods. <b>(old)</b>[sound:rec1334406136.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0kwhni.png' /></span>","BACK":"<span style='font-size: 28px; '>Computers are <span class=indam>older</span> than ipods.[sound:rec1334406144.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>old - older</span><br /><i>older - старее</i></span>","INFO":null,"STT":111},
{"FRONT":"<span style='font-size: 28px; '>Rabbits are very <span class=indam>c____</span> in England. <i>(there are lots of rabbits)</i>[sound:rec1334408158.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqrrmqf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Rabbits are very <span class=indam>common</span> in England.[sound:rec1334408171.mp3]</span><br><span style=''><i>common (adj.) - распространенный, свойственный</i></span>","INFO":null,"STT":80},
{"FRONT":"<span style='font-size: 28px; '>&quot;I hate <span class=indam>mo_____</span>!&quot;[sound:rec1334407918.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteduspjr.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I hate <span class=indam>mosquitos</span>!&quot;[sound:rec1334407923.mp3]<br /><br /></span><br><span style=''><i>a mosquito - комар</i></span>","INFO":null,"STT":82},
{"FRONT":"<span style='font-size: 28px; '>Are you a <span class=indam>p_____</span> person? <i>(socially correct)</i>[sound:rec1334407965.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteydyrvi.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Are you a <span class=indam>polite</span> person?[sound:rec1334407971.mp3]</span><br><span style=''><i>polite (adj.) - вежливый</i></span>","INFO":null,"STT":114},
{"FRONT":"<span style='font-size: 28px; '>&quot;I think that BMWs are <span class=indam>[...]</span> than Ladas.&quot; <b>(good)</b>[sound:rec1334406337.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh_1exc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I think that BMWs are <span class=indam>better</span> than Ladas.&quot; [sound:rec1334406344.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>good - better</span><br /><i>better - лучше</i></span>","INFO":null,"STT":100},
{"FRONT":"<span style='font-size: 28px; '>&quot;I<span class=indam>[...]</span> like to be a millionaire!&quot;[sound:rec1334406885.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9ohbhe.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I<span class=indam>'d</span> like to be a millionaire!&quot;[sound:rec1334406907.mp3]<br /><i>(I</i><span style='font-weight:600; font-style:italic; color:#0000ff;'>'d</span><i> = I </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>would</span><i>)</i><br /><br /><br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>would like + to + infinitive</span><br /><i>I would like to ... - Я хотел бы ...</i></span>","INFO":null,"STT":48},
{"FRONT":"<span style='font-size: 28px; '>-Bye. Thanks for everything.[sound:rec1334408809.mp3]<br />-Bye. <span class=indam>H___</span> a safe journey.<br /><img class='center-block img-responsive hinhdep'  src='pastebaslns.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Bye. Thanks for everything.[sound:rec1334408824.mp3]<br />-Bye. <span class=indam>Have</span> a safe journey.<br /></span><br><span style=''><i>Have a... - Желаю Вам...</i></span>","INFO":null,"STT":30},
{"FRONT":"<span style='font-size: 28px; '>&quot;Oh my God! That roller coaster was so <span class=indam>ex____</span>!&quot; <i>(very fun)</i>[sound:rec1334408209.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesp1vaf.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Oh my God! That roller coaster was so <span class=indam>exciting</span>!&quot;[sound:rec1334408220.mp3]<br /></span><br><span style=''><i>exciting (adj.) - захватывающий, увлекательный</i></span>","INFO":null,"STT":132},
{"FRONT":"<span style='font-size: 28px; '>&quot;She <span class=indam>___ ____</span> to be a teacher. She hates children.&quot; <b>(not like)</b>[sound:rec1334407057.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5junuj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;She <span class=indam>wouldn't like</span> to be a teacher. She hates children.&quot;[sound:rec1334407065.mp3]<br /><br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>wouldn't + to + infinitive</span><br /><i>I wouldn't like to ... - Я не хотел бы ...</i></span>","INFO":null,"STT":1},
{"FRONT":"<span style='font-size: 28px; '>A Lada is <span class=indam>___ ______</span> than a BMW. <b>(expensive)</b>[sound:rec1334405903.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev3k6w0.png' /><br />$10,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$40,000</span>","BACK":"<span style='font-size: 28px; '>A Lada is <span class=indam>less</span> <span class=indam>expensive</span> than a BMW.[sound:rec1334405912.mp3]<br /></span><br><span style=''><i>less expensive - менее дорогой</i></span>","INFO":null,"STT":40},
{"FRONT":"<span style='font-size: 28px; '>-Would you like a biscuit?[sound:rec1334408769.mp3]<br />-No <span class=indam>th____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastedyw2qy.png' /></span>","BACK":"<span style='font-size: 28px; '>-No <span class=indam>thanks</span>.[sound:rec1334408776.mp3]<br /><i>or</i><br /><i>-</i>No <span class=indam>thank you</span>.</span><br><span style=''><i>thank you / thanks - спасибо</i><br></span>","INFO":null,"STT":86},
{"FRONT":"<span style='font-size: 28px; '>He is taller <span class=indam>[...]</span> her.[sound:rec1334406203.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste01z045.png' /></span>","BACK":"<span style='font-size: 28px; '>He is taller <span class=indam>than</span> her.[sound:rec1334406208.mp3]<br /></span><br><span style=''><i>than - чем</i><br></span>","INFO":null,"STT":123},
{"FRONT":"<span style='font-size: 28px; '>Is Hong Kong <span class=indam>___ ____ expensive</span> city in the world?[sound:rec1334406647.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetsuvvf.png' /></span>","BACK":"<span style='font-size: 28px; '>Is Hong Kong <span class=indam>the most expensive</span> city in the world?[sound:rec1334406662.mp3]</span><br><span style=''><i>the most expensive - самый дорогой</i></span>","INFO":null,"STT":35},
{"FRONT":"<span style='font-size: 28px; '>The <span class=indam>E____</span> is bigger than Mars.[sound:rec1334407939.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexd0jhx.png' /></span>","BACK":"<span style='font-size: 28px; '>The <span class=indam>Earth</span> is bigger than Mars.[sound:rec1334407944.mp3]<br /></span><br><span style=''><i>the Earth - Земля</i></span>","INFO":null,"STT":131},
{"FRONT":"<span style='font-size: 28px; '>&quot;<span class=indam>___ ____ ____</span> to be famous?&quot; <b>(you / like)</b>[sound:rec1334406964.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevaqeg8.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;<span class=indam>Would you like</span> to be famous?&quot;[sound:rec1334406970.mp3]<br /><br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>would like + to + infinitive</span><br /><i>Would you like ... ? - Ты не хотел бы ... ?</i></span>","INFO":null,"STT":102},
{"FRONT":"<span style='font-size: 28px; '>&quot;I dream <span class=indam>[...]</span> being a sportsman.&quot;[sound:rec1334407717.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehw1jzo.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I dream <span class=indam>about</span> being a sportsman.&quot;[sound:rec1334407830.mp3]<br /><i>or</i><br />&quot;I dream <span class=indam>of</span> being a sportsman.&quot;<br /><br /><br /></span><br><span style=''><i>to dream </i><span style='font-weight:600; font-style:italic;'>about</span><i> / </i><span style='font-weight:600; font-style:italic;'>of </span><i>sth. - мечтать о чем-л.</i></span>","INFO":null,"STT":121},
{"FRONT":"<span style='font-size: 28px; '>&quot;I think that Ladas are <span class=indam>____</span> than BMWs.&quot; <b>(bad)</b>[sound:rec1334406353.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev3k6w0.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I think that Ladas are <span class=indam>worse</span> than BMWs.&quot;[sound:rec1334406359.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>bad - worse</span><br /><i>worse - хуже</i></span>","INFO":null,"STT":83},
{"FRONT":"<span style='font-size: 28px; '>Ipods are <span class=indam>_____</span> than computers. <b>(new)</b>[sound:rec1334406119.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteragsch.png' /></span>","BACK":"<span style='font-size: 28px; '>Ipods are <span class=indam>newer</span> than computers.[sound:rec1334406127.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>new - newer </span><br /><i>newer - новее</i></span>","INFO":null,"STT":32},
{"FRONT":"<span style='font-size: 28px; '>&quot;He plays the piano very <span class=indam>w___</span>.&quot; <i>(the opposite of 'badly')</i> [sound:rec1334407214.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1g5bmz.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;He plays the piano very <span class=indam>well</span>.&quot; [sound:rec1334407220.mp3]<br /><br /></span><br><span style=''><i>well (adv.) - хорошо, отлично</i></span>","INFO":null,"STT":43},
{"FRONT":"<span style='font-size: 28px; '>&quot;Everything happened very <span class=indam>qui_____</span><span style='color:#000000;'>!</span>&quot; <i>(fast)</i>[sound:rec1334407197.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste99mjlh.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Everything happened very <span class=indam>quickly</span>!&quot;[sound:rec1334407205.mp3]<br /><br /></span><br><span style=''><i>quickly (adv.) - быстро</i></span>","INFO":null,"STT":23},
{"FRONT":"<span style='font-size: 28px; '>&quot;Is there any ice cream in the <span class=indam>f_____</span>?&quot;[sound:rec1334408254.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastempbywy.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Is there any ice cream in the <span class=indam>freezer</span>?&quot;[sound:rec1334408259.mp3]<br /></span><br><span style=''><i>a freezer - морозилка</i></span>","INFO":null,"STT":64},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'd like to go to Japan, but I don't like <span class=indam>____</span>.&quot; <b>(fly)</b>[sound:rec1334407038.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexl9vl7.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'd like to go to Japan, but I don't like <span class=indam>flying</span>.&quot;[sound:rec1334407044.mp3]<br /><br /></span><br><span style=''><i>like + (verb)-ing</i></span>","INFO":null,"STT":68},
{"FRONT":"<span style='font-size: 28px; '>Tigers are much more dangerous than <span class=indam>m____</span>.[sound:rec1334405889.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepokonk.png' /></span>","BACK":"<span style='font-size: 28px; '>Tigers are more dangerous than <span class=indam>mice</span>.[sound:rec1334405894.mp3]<br /><br /></span><br><span style=''><i>a </i><span style='font-weight:600; font-style:italic;'>mouse</span><i>; 2 </i><span style='font-weight:600; font-style:italic;'>mice</span><br><i>a mouse - мышь</i></span>","INFO":null,"STT":31},
{"FRONT":"<span style='font-size: 28px; '>Water is <span class=indam>_____</span> than beer. <b>(healthy)</b>[sound:rec1334406031.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemkkspl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Water is <span class=indam>healthier</span> than beer.[sound:rec1334406043.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>healthy - healthier</span><br /><i>healthier - полезнее</i></span>","INFO":null,"STT":73},
{"FRONT":"<span style='font-size: 28px; '>Russia is <span class=indam>______</span> than Britain. <b>(cold)</b>[sound:rec1334406053.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteisncez.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Russia is <span class=indam>colder</span> than Britain.[sound:rec1334406059.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>cold - colder</span><br /><i>colder - холоднее</i></span>","INFO":null,"STT":99},
{"FRONT":"<span style='font-size: 28px; '>What does the road <span class=indam>s___</span> say?[sound:rec1334408431.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegp_du2.jpg' /></span>","BACK":"<span style='font-size: 28px; '>What does the road <span class=indam>sign</span> say?[sound:rec1334408438.mp3]<br /><br /><br /></span><br><span style=''><i>a sign - знак</i></span>","INFO":null,"STT":106},
{"FRONT":"<span style='font-size: 28px; '>Did you know that Denmark is <span class=indam>___ _____</span> country in the world? <b>(safe)</b>[sound:rec1334406717.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexfkepu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Did you know that Denmark is <span class=indam>the safest</span> country in the world?[sound:rec1334406724.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>safe - the safest</span><br /><i>the safest - самый безопасный</i></span>","INFO":null,"STT":33},
{"FRONT":"<span style='font-size: 28px; '>&quot;She drives very <span class=indam>b____</span>.&quot; <i>(the opposite of 'well')</i>[sound:rec1334407290.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejgeawq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;She drives very <span class=indam>badly</span>.&quot;[sound:rec1334407296.mp3]<br /><br /></span><br><span style=''><i>badly (adv.) - плохо</i></span>","INFO":null,"STT":65},
{"FRONT":"<span style='font-size: 28px; '><i>in a restaurant:</i><br />&quot;Excuse me, please can we have <span class=indam>[...]</span> bill?&quot;[sound:rec1334408064.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekn7__s.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Excuse me, please can we have <span class=indam>the</span> bill?&quot;[sound:rec1334408087.mp3]<br><i>or </i><br>&quot;Excuse me, please can we have <span class=indam>our</span> bill?&quot;<br /></span><br><span style=''></span>","INFO":null,"STT":66},
{"FRONT":"<span style='font-size: 28px; '>In the Atacama desert it <span class=indam>h____ e___</span> rains. <i>(very rarely)</i>[sound:rec1334408561.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesvklde.png' /></span>","BACK":"<span style='font-size: 28px; '>In the Atacama desert it <span class=indam>hardly ever</span> rains.[sound:rec1334408568.mp3]<br /></span><br><span style=''><i>hardly ever - очень редко</i></span>","INFO":null,"STT":57},
{"FRONT":"<span style='font-size: 28px; '>&quot;Last night we sat on the <span class=indam>r____</span> for an hour.&quot; <i>(top of a house)</i>[sound:rec1334408301.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetazpjv.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>&quot;Last night we sat on the <span class=indam>roof</span> for an hour.&quot;[sound:rec1334408308.mp3]<br /></span><br><span style=''><i>a roof - крыша</i></span>","INFO":null,"STT":105},
{"FRONT":"<span style='font-size: 28px; '>&quot;I <span class=indam>d____</span> about being a sportsman.&quot; <i>(I want to be a sportsman a lot)</i>[sound:rec1334407687.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehw1jzo.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I <span class=indam>dream</span> about being a sportsman.&quot;[sound:rec1334407710.mp3]<br /><br /></span><br><span style=''><i>to dream </i><span style='font-weight:600; font-style:italic;'>about</span><i> sth. - мечтать о чем-л.</i></span>","INFO":null,"STT":76},
{"FRONT":"<span style='font-size: 28px; '>&quot;There were lots of people - the train was very <span class=indam>cr______</span>.&quot;[sound:rec1334407671.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezlxg1g.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;There were lots of people - the train was very <span class=indam>crowded</span>.&quot;[sound:rec1334407678.mp3]<br /></span><br><span style=''><i>crowded (adj.) - переполненный, многолюдный, битком набитый</i></span>","INFO":null,"STT":109},
{"FRONT":"<span style='font-size: 28px; '>The Atacama desert is <span class=indam>___ _____</span> place in the world. <b>(dry)</b>[sound:rec1334406701.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekzpa0z.png' /></span>","BACK":"<span style='font-size: 28px; '>The Atacama desert is <span class=indam>the driest</span> place in the world.[sound:rec1334406708.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>dry - the driest</span><br /><i>the driest - самый сухой</i></span>","INFO":null,"STT":10},
{"FRONT":"<span style='font-size: 28px; '>&quot;When I arrived, the taxi driver <span class=indam>m___</span> me at the airport.&quot;[sound:rec1334408578.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteotyod4.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;When I arrived, the taxi driver <span class=indam>met</span> me at the airport.&quot;[sound:rec1334408587.mp3]<br /><br /></span><br><span style=''><i>to meet - встречать</i></span>","INFO":null,"STT":61},
{"FRONT":"<span style='font-size: 28px; '>&quot;Oh dear! They have a <span class=indam>se___</span> problem!&quot; <i>(big)</i>[sound:rec1334408344.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteracwad.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Oh dear! They have a <span class=indam>serious</span> problem!&quot;[sound:rec1334408351.mp3]<br /><br /></span><br><span style=''><i>serious (adj.) - серьезный</i></span>","INFO":null,"STT":41},
{"FRONT":"<span style='font-size: 28px; '>He is much <span class=indam>ol____</span> than his wife. [sound:rec1334406320.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqkrh6n.png' /></span>","BACK":"<span style='font-size: 28px; '>He is much <span class=indam>older</span> than his wife.[sound:rec1334406327.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>old - older</span><br /><i>older - старше</i></span>","INFO":null,"STT":42},
{"FRONT":"<span style='font-size: 28px; '>The best time <span class=indam>[...]</span> year to visit is the spring.[sound:rec1334408504.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq5xctm.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>The best time <span class=indam>of</span> year to visit is the spring.[sound:rec1334408526.mp3]<br /><br /></span><br><span style=''></span>","INFO":null,"STT":103},
{"FRONT":"<span style='font-size: 28px; '>A blue whale is much <span class=indam>____</span> than an elephant. <b>(big)</b>[sound:rec1334405954.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexqtv7a.png' /></span>","BACK":"<span style='font-size: 28px; '>A blue whale is much <span class=indam>bigger</span> than an elephant.[sound:rec1334405970.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>big - bigger</span><br /><i>bigger - больше</i></span>","INFO":null,"STT":8},
{"FRONT":"<span style='font-size: 28px; '>The jungle is <span class=indam>____</span> than the desert. <b>(wet)</b>[sound:rec1334406154.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefybqza.png' /></span>","BACK":"<span style='font-size: 28px; '>The jungle is <span class=indam>wetter</span> than the desert.[sound:rec1334406161.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>wet - wetter </span><br /><i>wetter - более влажный / сырой / дождливый</i></span>","INFO":null,"STT":101},
{"FRONT":"<span style='font-size: 28px; '>&quot;This is my son, he's very <span class=indam>s___</span>.&quot; <i>(doesn't like talking to new people)</i>[sound:rec1334407999.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetujoxb.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;This is my son, he's very <span class=indam>shy</span>.&quot;[sound:rec1334408005.mp3]</span><br><span style=''><i>shy (adj.) - стеснительный</i></span>","INFO":null,"STT":3},
{"FRONT":"<span style='font-size: 28px; '>Who's the <span class=indam>[...]</span> beautiful woman here?[sound:rec1334406750.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteapornp.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Who's the <span class=indam>most</span> beautiful woman here?<br /></span><br><span style=''><i>the most beautiful - самый красивый</i><br /></span>","INFO":null,"STT":75},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastekrmkqw.png' />[sound:rec1334406623.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>snake</span>.[sound:rec1334406627.mp3]</span><br><span style=''><i>a snake - змея</i><br></span>","INFO":null,"STT":13},
{"FRONT":"<span style='font-size: 28px; '>&quot;We went on holiday to Canada and <span class=indam>[...]</span> an <span style='color:#000000;'>adventure</span>!&quot;[sound:rec1334407526.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyzs8_i.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We went on holiday to Canada and <span class=indam>had</span> an <span style='color:#000000;'>adventure</span>!&quot;[sound:rec1334407533.mp3]<br /><br /></span><br><span style=''><i>to </i><span style='font-weight:600; font-style:italic;'>have</span><i> an adventure</i><br /><i>an adventure - приключение</i></span>","INFO":null,"STT":7},
{"FRONT":"<span style='font-size: 28px; '>The Earth is <span class=indam>bi____</span> than Mars.[sound:rec1334407951.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexd0jhx.png' /></span>","BACK":"<span style='font-size: 28px; '>The Earth is <span class=indam>bigger</span> than Mars.[sound:rec1334407944.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>big - bigger</span><br /><i>bigger - больше</i></span>","INFO":null,"STT":124},
{"FRONT":"<span style='font-size: 28px; '>&quot;I travel a lot; I often go <span class=indam>a_____</span>.&quot; <i>(to other countries)</i>[sound:rec1334407404.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8on3ud.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I travel a lot; I often go <span class=indam>abroad</span>.&quot;[sound:rec1334407411.mp3]<br /><br /></span><br><span style=''><i>to </i><span style='font-weight:600; font-style:italic;'>go</span><i> abroad - выезжать за границу</i></span>","INFO":null,"STT":12},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>___ ___ ____</span> a biscuit? <b>(you / like)</b>[sound:rec1334407077.mp3]<br />-No thanks.<br /><img class='center-block img-responsive hinhdep'  src='pastedyw2qy.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Would you like</span> a biscuit?[sound:rec1334407084.mp3]<br />-No thanks.</span><br><span style=''><i>Would you like ... ? - Не хотите ли ... ?</i></span>","INFO":null,"STT":118},
{"FRONT":"<span style='font-size: 28px; '>&quot;My cousin is a <span class=indam>ch___</span>.&quot; <i>(works in a restaurant and cooks food)</i>[sound:rec1334407612.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaypqto.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My cousin is a <span class=indam>chef</span>.&quot;[sound:rec1334407617.mp3]<br /><br /></span><br><span style=''><i>a chef - повар, шеф-повар</i><br></span>","INFO":null,"STT":15},
{"FRONT":"<span style='font-size: 28px; '>&quot;Lisa is very <span class=indam>g_____</span>.&quot; <i>(she often gives things)</i>[sound:rec1334408266.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9ukkn5.jpg' /> </span>","BACK":"<span style='font-size: 28px; '>&quot;Lisa is very <span class=indam>generous</span>.&quot; [sound:rec1334408271.mp3]</span><br><span style=''><i>generous (adj.) - щедрый</i></span>","INFO":null,"STT":49},
{"FRONT":"<span style='font-size: 28px; '>The ostrich is <span class=indam>___ _____</span> bird in the world. <b>(fast)</b>[sound:rec1334406524.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemw9sld.png' /></span>","BACK":"<span style='font-size: 28px; '>The ostrich is <span class=indam>the fastest</span> bird in the world.[sound:rec1334406531.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>fast - the fastest</span><br /><i>the fastest - самый быстрый</i></span>","INFO":null,"STT":78},
{"FRONT":"<span style='font-size: 28px; '>&quot;Cheetahs run very <span class=indam>f____</span>.&quot; <i>(the opposite of 'slowly')</i>[sound:rec1334407174.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_aj0fi.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Cheetahs run very <span class=indam>fast</span>.&quot;[sound:rec1334407188.mp3]<br /><br /></span><br><span style=''><i>fast (adv.) - быстро</i></span>","INFO":null,"STT":135},
{"FRONT":"<span style='font-size: 28px; '>Paris is <span class=indam>[...]</span> capital of France.[sound:rec1334407603.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteio3wqb.png' /></span>","BACK":"<span style='font-size: 28px; '>Paris is <span class=indam>the</span> capital of France.[sound:rec1334407588.mp3]<br /><br /></span><br><span style=''><i>use '</i><span style='font-weight:600; font-style:italic;'>the</span><i>' when there is only </i><span style='font-weight:600; font-style:italic;'>one</span><i> of something</i></span>","INFO":null,"STT":56},
{"FRONT":"<span style='font-size: 28px; '>Giraffes are <span class=indam>___ ______</span> animals in the world. <b>(tall)</b>[sound:rec1334406484.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenvmrek.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Giraffes are <span class=indam>the tallest</span> animals in the world.[sound:rec1334406492.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>tall - the tallest</span><br /><i>the tallest - самый высокий</i></span>","INFO":null,"STT":125},
{"FRONT":"<span style='font-size: 28px; '>Egypt is <span class=indam>______</span> than Poland. <b>(hot)</b>[sound:rec1334405742.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastey9l3_n.png' /></span>","BACK":"<span style='font-size: 28px; '>Egypt is <span class=indam>hotter</span> than Poland.[sound:rec1334405750.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>hot - hotter </span><br /><i>hotter - жарче</i></span>","INFO":null,"STT":77},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'm leaving now, please can you <span class=indam>c___</span> me a taxi?&quot;[sound:rec1334408683.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq0qa2g.jpg' /><br /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'm leaving now, please can you <span class=indam>call</span> me a taxi?&quot;[sound:rec1334408690.mp3]<br /><br /><br /></span><br><span style=''><i>to call a taxi - вызвать такси</i></span>","INFO":null,"STT":6},
{"FRONT":"<span style='font-size: 28px; '>&quot;Oh my God! That <span class=indam>r____ c____</span> was so exciting!&quot;[sound:rec1334408230.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesp1vaf.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Oh my God! That <span class=indam>roller coaster</span> was so exciting!&quot;[sound:rec1334408240.mp3]<br /></span><br><span style=''><i>roller coaster - американские горки</i></span>","INFO":null,"STT":67},
{"FRONT":"<span style='font-size: 28px; '>Chinese is one of <span class=indam>___ ____ difficult</span> languages to learn.[sound:rec1334406819.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezcfepr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Chinese is one of <span class=indam>the most difficult</span> languages to learn.[sound:rec1334406834.mp3]</span><br><span style=''><i>the most difficult - самый сложный</i></span>","INFO":null,"STT":71},
{"FRONT":"<span style='font-size: 28px; '>The sky is quite <span class=indam>cl____</span> today. <i>(there are lots of clouds)</i>[sound:rec1334408145.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastext1tra.png' /></span>","BACK":"<span style='font-size: 28px; '>The sky is quite <span class=indam>cloudy</span> today.[sound:rec1334408151.mp3]<br /></span><br><span style=''><i>cloudy (adj.) - облачный</i></span>","INFO":null,"STT":17},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please carry these eggs <span class=indam>care____</span>!&quot; <i>(with attention)</i>[sound:rec1334407306.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefbqefp.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please carry these eggs <span class=indam>carefully</span>!&quot;[sound:rec1334407313.mp3]<br /><br /></span><br><span style=''><i>carefully (adv.) - осторожно</i></span>","INFO":null,"STT":90},
{"FRONT":"<span style='font-size: 28px; '>She is much <span class=indam>yo____</span> than her husband.[sound:rec1334406282.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqkrh6n.png' /></span>","BACK":"<span style='font-size: 28px; '>She is much <span class=indam>younger</span> than her husband.[sound:rec1334406290.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>young - younger</span><br /><i>younger - младше</i></span>","INFO":null,"STT":93},
{"FRONT":"<span style='font-size: 28px; '>&quot;I love <span class=indam>br____</span> fresh air.&quot;[sound:rec1334408130.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastem5btuc.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I love <span class=indam>breathing</span> fresh air.&quot;[sound:rec1334408136.mp3]<br /><br /></span><br><span style=''><i>to breathe - дышать</i></span>","INFO":null,"STT":4},
{"FRONT":"<span style='font-size: 28px; '>The African <span class=indam>el____</span> is the biggest land animal in the world.[sound:rec1334406564.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten8pdoj.png' /></span>","BACK":"<span style='font-size: 28px; '>The African <span class=indam>elephant</span> is the biggest land animal in the world.[sound:rec1334406572.mp3]<br /></span><br><span style=''><i>an elephant - слон</i></span>","INFO":null,"STT":96},
{"FRONT":"<span style='font-size: 28px; '>There is lots of <span class=indam>cr___</span> in America. <i>(people doing illegal things)</i>[sound:rec1334407650.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezq863f.jpg' /><br /></span>","BACK":"<span style='font-size: 28px; '>There is lots of <span class=indam>crime</span> in America.[sound:rec1334407663.mp3]<br /></span><br><span style=''><i>crime (n.) - преступность</i><br></span>","INFO":null,"STT":39},
{"FRONT":"<span style='font-size: 28px; '>Pushkin is <span class=indam>___ ___ famous</span> Russian poet.[sound:rec1334406801.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemukbua.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Pushkin is <span class=indam>the most famous</span> Russian poet.[sound:rec1334406809.mp3]<br /></span><br><span style=''><i>the most famous - самый известный</i></span>","INFO":null,"STT":126},
{"FRONT":"<span style='font-size: 28px; '>The African elephant is <span class=indam>___ _____</span> land animal in the world. <b>(big)</b>[sound:rec1334406582.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten8pdoj.png' /></span>","BACK":"<span style='font-size: 28px; '>The African elephant is <span class=indam>the biggest</span> land animal in the world.[sound:rec1334406597.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>big - the biggest</span><br /><i>the biggest - самый большой</i></span>","INFO":null,"STT":117},
{"FRONT":"<span style='font-size: 28px; '>Who's <span class=indam>[...]</span> most beautiful woman here?[sound:rec1334406734.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteapornp.jpg' /><br /></span>","BACK":"<span style='font-size: 28px; '>Who's <span class=indam>the</span> most beautiful woman here?[sound:rec1334406740.mp3]<br /><br /></span><br><span style=''><i>the most beautiful - самый красивый</i></span>","INFO":null,"STT":112},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'm <span class=indam>le____</span> now, please can you call me a taxi?&quot; <i>(going)</i>[sound:rec1334408716.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5oso2g.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'm <span class=indam>leaving</span> now, please can you call me a taxi?&quot;[sound:rec1334408723.mp3]<br /><br /></span><br><span style=''><i>to leave - уезжать, уходить</i></span>","INFO":null,"STT":134},
{"FRONT":"<span style='font-size: 28px; '>-Bye. Thanks <span class=indam>[...]</span> everything.[sound:rec1334408636.mp3]<br />-Bye. Have a safe journey.<br /><img class='center-block img-responsive hinhdep'  src='pastebaslns.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Bye. Thanks <span class=indam>for</span> everything.[sound:rec1334408653.mp3]<br />-Bye. Have a safe journey.<br /></span><br><span style=''><i>thanks for ... - спасибо за ...</i></span>","INFO":null,"STT":70},
{"FRONT":"<span style='font-size: 28px; '>The desert is <span class=indam>[...]</span> than the jungle. <b>(dry)</b>[sound:rec1334406172.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteorylyb.png' /></span>","BACK":"<span style='font-size: 28px; '>The desert is <span class=indam>drier</span> than the jungle.[sound:rec1334406179.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>dry - drier</span><br /><i>drier - более сухой</i></span>","INFO":null,"STT":21},
{"FRONT":"<span style='font-size: 28px; '>&quot;I think that is <span class=indam>___ _____</span> cat I have ever seen!&quot; <b>(ugly)</b>[sound:rec1339664469.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaicxnh.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I think that is <span class=indam>the ugliest</span> cat I have ever seen!&quot;[sound:rec1339664487.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>ugly - the ugliest</span><br /><i>the ugliest - самый некрасивый</i></span>","INFO":null,"STT":122},
{"FRONT":"<span style='font-size: 28px; '>&quot;It's <span class=indam>eas___</span> to ride a bicycle!&quot;[sound:rec1334407374.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemkvpgk.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;It's <span class=indam>easy</span> to ride a bicycle!&quot;[sound:rec1334407379.mp3]<br /><br /></span><br><span style=''><i>easy (adj.) - легкий</i></span>","INFO":null,"STT":95},
{"FRONT":"<span style='font-size: 28px; '>&quot;It's dangerous - you can't walk <span class=indam>saf____</span> at night in this city.&quot;[sound:rec1334407345.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb_imve.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;It's dangerous - you can't walk <span class=indam>safely</span> at night in this city.&quot;[sound:rec1334407353.mp3]<br /><br /></span><br><span style=''><i>safely (adv.) - безопасно</i></span>","INFO":null,"STT":27},
{"FRONT":"<span style='font-size: 28px; '>&quot;That's a very useful <span class=indam>p_____</span>.&quot;[sound:rec1334408486.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteebakgk.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;That's a very useful <span class=indam>penknife</span>.&quot;[sound:rec1334408491.mp3]<br /><br /></span><br><span style=''><i>a penknife - перочинный ножик</i><br></span>","INFO":null,"STT":128},
{"FRONT":"<span style='font-size: 28px; '>&quot;Last night we sat on the roof <span class=indam>[...]</span> an hour.&quot;[sound:rec1334408316.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetazpjv.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Last night we sat on the roof <span class=indam>for</span> an hour.&quot;[sound:rec1334408323.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":74},
{"FRONT":"<span style='font-size: 28px; '>&quot;He'd like <span class=indam>[...]</span> learn German.&quot;[sound:rec1334407137.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteden7u8.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;He'd like <span class=indam>to</span> learn German.&quot;[sound:rec1334407143.mp3]<br /><br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>would like + to + infinitive</span><br /><i>I would like to ... - Я хотел бы ...</i></span>","INFO":null,"STT":110},
{"FRONT":"<span style='font-size: 28px; '>The <span class=indam>os_____</span> is the fastest bird in the world.[sound:rec1334406548.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemw9sld.png' /></span>","BACK":"<span style='font-size: 28px; '>The <span class=indam>ostrich</span> is the fastest bird in the world.[sound:rec1334406554.mp3]<br /><br /></span><br><span style=''><i>an ostrich - страус</i></span>","INFO":null,"STT":89},
{"FRONT":"<span style='font-size: 28px; '>&quot;I<span class=indam>__ ____</span> to go to Japan, but I don't like flying.&quot;[sound:rec1334406996.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_sae_c.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I<span class=indam>'d like</span> to go to Japan, but I don't like flying.&quot;[sound:rec1334407006.mp3]<br /><i>(I</i><span style='font-weight:600; font-style:italic; color:#0000ff;'>'d</span><i> = I </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>would</span><i>)</i></span><br><span style=''><i>I would like ... - Я хотел бы ...</i><br /><br /></span>","INFO":null,"STT":62},
{"FRONT":"<span style='font-size: 28px; '>Did you know that Denmark is the safest country <span class=indam>[...]</span> the world?[sound:rec1334406761.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexfkepu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Did you know that Denmark is the safest country <span class=indam>in</span> the world?[sound:rec1334406769.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":50},
{"FRONT":"<span style='font-size: 28px; '>Paris is the capital <span class=indam>[...]</span> France.[sound:rec1334407578.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteio3wqb.png' /></span>","BACK":"<span style='font-size: 28px; '>Paris is the capital <span class=indam>of</span> France.[sound:rec1334407588.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":81},
{"FRONT":"<span style='font-size: 28px; '>In the mountains there's lots of <span class=indam>s____</span>.[sound:rec1334408460.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteobpei8.jpg' /></span>","BACK":"<span style='font-size: 28px; '>In the mountains there's lots of <span class=indam>snow</span>.[sound:rec1334408466.mp3]<br /><br /></span><br><span style=''><i>snow (n.) - снег</i></span>","INFO":null,"STT":79},
{"FRONT":"<span style='font-size: 28px; '>Mosquitos are <span class=indam>the</span> <span class=indam>___ ______</span> insects in the world. <b>(dangerous)</b>[sound:rec1334406501.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetjwf00.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Mosquitos are <span class=indam>the</span> <span class=indam>most dangerous</span> insects in the world. [sound:rec1334406513.mp3]</span><br><span style=''><i>the most dangerous - самый опасный</i></span>","INFO":null,"STT":38},
{"FRONT":"<span style='font-size: 28px; '>&quot;My brother has a very <span class=indam>ag_____</span> dog.&quot; <i>(angry and unfriendly)</i>[sound:rec1334408026.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesgqesl.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My brother has a very <span class=indam>aggressive</span> dog.&quot;[sound:rec1334408032.mp3]<br /><br /></span><br><span style=''><i>aggressive (adj.) - агрессивный</i></span>","INFO":null,"STT":20},
{"FRONT":"<span style='font-size: 28px; '>&quot;That's a very <span class=indam>us____</span> penknife.&quot; <i>(you can use it easily)</i>[sound:rec1334408473.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteebakgk.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;That's a very <span class=indam>useful</span> penknife.&quot;[sound:rec1334408479.mp3]<br /><br /></span><br><span style=''><i>useful (adj.) - удобный</i></span>","INFO":null,"STT":88},
{"FRONT":"<span style='font-size: 28px; '>&quot;Look! It's <span class=indam>sn____</span>.&quot;[sound:rec1334408448.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_guiwk.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Look! It's <span class=indam>snowing</span>.&quot;[sound:rec1334408453.mp3]<br /><br /></span><br><span style=''><i>it's snowing - идёт снег</i><br></span>","INFO":null,"STT":116},
{"FRONT":"<span style='font-size: 28px; '>&quot;I often <span class=indam>d____</span> about chocolate cake.&quot;[sound:rec1334407733.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenmnhsl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I often <span class=indam>dream</span> about chocolate cake.&quot;[sound:rec1334407741.mp3]<br /><br /></span><br><span style=''><i>to dream </i><span style='font-weight:600; font-style:italic;'>about</span><i> sth. - мечтать о чем-л.</i></span>","INFO":null,"STT":63},
{"FRONT":"<span style='font-size: 28px; '>Tigers are much <span class=indam>[...]</span> dangerous than mice.[sound:rec1334405763.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepokonk.png' /></span>","BACK":"<span style='font-size: 28px; '>Tigers are much <span class=indam>more</span> dangerous than mice.[sound:rec1334405770.mp3]<br /></span><br><span style=''><i>more - более</i><br></span>","INFO":null,"STT":113},
{"FRONT":"<span style='font-size: 28px; '>This game isn't just for children - <span class=indam>a____</span> can play too! <i>(older people)</i>[sound:rec1334407491.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetriodp.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This game isn't just for children - <span class=indam>adults</span> can play too![sound:rec1334407498.mp3]<br /><br /></span><br><span style=''><i>an adult - взрослый человек</i></span>","INFO":null,"STT":120},
{"FRONT":"<span style='font-size: 28px; '>&quot;<span class=indam>C_____</span> the sentences.&quot; <i>(finish)</i>[sound:rec1334408182.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4cmdgg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;<span class=indam>Complete</span> the sentences.&quot;[sound:rec1334408187.mp3]<br /><br /></span><br><span style=''><i>to complete - заканчивать, завершать</i></span>","INFO":null,"STT":97},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'm <span class=indam>__ ____</span> pupil in the class.&quot; <b>(tall)</b>[sound:rec1334406842.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenturfu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'm <span class=indam>the tallest</span> pupil in the class.&quot;[sound:rec1334406849.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>tall - the tallest</span><br /><i>the tallest - самый высокий</i></span>","INFO":null,"STT":25},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteog9the.jpg' />[sound:rec1334407990.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>shark</span>.[sound:rec1334407984.mp3]</span><br><span style=''><i>a shark - акула</i></span>","INFO":null,"STT":28},
{"FRONT":"<span style='font-size: 28px; '>Scottish whisky is <span class=indam>___ ____</span> in the world. <b>(good)</b>[sound:rec1334406792.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyhrkff.png' /></span>","BACK":"<span style='font-size: 28px; '>Scottish whisky is <span class=indam>the best</span> in the world.<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>good - the best</span><br /><i>the best - самый лучший</i></span>","INFO":null,"STT":98},
{"FRONT":"<span style='font-size: 28px; '>&quot;I think the black chair is <span class=indam>more</span> <span class=indam>com_____</span> than the blue chair.&quot; <i>(nice to sit in)</i>[sound:rec1334406381.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejvada_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I think the black chair is <span class=indam>more</span> <span class=indam>comfortable</span> than the blue chair.&quot;[sound:rec1334406387.mp3]<br /></span><br><span style=''><i>more comfortable - более удобный</i></span>","INFO":null,"STT":58},
{"FRONT":"<span style='font-size: 28px; '>The python is <span class=indam>___ _____</span> snake in the world. <b>(long)</b>[sound:rec1334406606.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecumsjn.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The python is <span class=indam>the longest</span> snake in the world.[sound:rec1334406614.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>long - the longest</span><br /><i>the longest - самый длинный</i></span>","INFO":null,"STT":69},
{"FRONT":"<span style='font-size: 28px; '>Is Tokyo <span class=indam>__ _____</span> city in the world? <b>(noisy)</b>[sound:rec1334406675.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastej0mxrj.png' /></span>","BACK":"<span style='font-size: 28px; '>Is Tokyo <span class=indam>the noisiest</span> city in the world?[sound:rec1334406690.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>noisy - the noisiest</span><br /><i>the noisiest - самый шумный</i></span>","INFO":null,"STT":129},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please be <span class=indam>care___</span> with these eggs!&quot; [sound:rec1336839420.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefbqefp.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please be <span class=indam>careful</span> with these eggs!&quot;[sound:rec1336839426.mp3]<br /><br /><br /></span><br><span style=''><i>careful (adj.) - аккуратный, внимательный</i></span>","INFO":null,"STT":11},
{"FRONT":"<span style='font-size: 28px; '>&quot;I think Maths is <span class=indam>ha____</span> than English.&quot; <i>(more difficult)</i>[sound:rec1334406396.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehs1plh.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I think Maths is <span class=indam>harder</span> than English.&quot;[sound:rec1334406402.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>hard - harder</span><br /><i>harder - сложнее</i></span>","INFO":null,"STT":34},
{"FRONT":"<span style='font-size: 28px; '>&quot;I love looking at the <span class=indam>st____</span>.&quot;[sound:rec1334408547.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteal_jwd.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I love looking at the <span class=indam>stars</span>.&quot;[sound:rec1334408553.mp3]<br /><br /></span><br><span style=''><i>a star - звезда</i></span>","INFO":null,"STT":37},
{"FRONT":"<span style='font-size: 28px; '>&quot;He walks very <span class=indam>slo____</span>.&quot; <i>(the opposite of 'fast')</i>[sound:rec1334407154.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7uajes.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;He walks very <span class=indam>slowly</span>.&quot;[sound:rec1334407168.mp3]<br /><br /></span><br><span style=''><i>slowly (adv.) - медленно</i></span>","INFO":null,"STT":47},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>___ ____ ____</span> a cup of tea? <b>(you / like)</b>[sound:rec1334407092.mp3]<br />-Yes please!<br /><img class='center-block img-responsive hinhdep'  src='pastediuvuu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Would you like</span> a cup of tea?[sound:rec1334407101.mp3]<br />-Yes please!</span><br><span style=''><i>Would you like ... ? - Не хотите ли ... ?</i></span>","INFO":null,"STT":84},
{"FRONT":"<span style='font-size: 28px; '>&quot;Would you like <span class=indam>[...]</span> be famous?&quot;[sound:rec1334406980.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevaqeg8.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Would you like <span class=indam>to</span> be famous?&quot;[sound:rec1334406986.mp3]<br /><br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>would like + to + infinitive</span><br /><i>Would you like ... ? - Ты не хотел бы ... ?</i></span>","INFO":null,"STT":52},
{"FRONT":"<span style='font-size: 28px; '>&quot;It's very hot - let's turn on the <span class=indam>a___ c______</span>.&quot; <i>(a machine to make cold air)</i>[sound:rec1334407549.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezlbiqg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;It's very hot - let's turn on the <span class=indam>air conditioning</span>.&quot;[sound:rec1334407555.mp3]</span><br><span style=''><i>air conditioning - кондиционер</i></span>","INFO":null,"STT":94},
{"FRONT":"<span style='font-size: 28px; '>An elephant is much <span class=indam>_______</span> than a blue whale. <b>(small)</b>[sound:rec1334405980.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexqtv7a.png' /></span>","BACK":"<span style='font-size: 28px; '>An elephant is much <span class=indam>smaller</span> than a blue whale.[sound:rec1334405987.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>small - smaller</span><br /><i>smaller - меньше</i></span>","INFO":null,"STT":130},
{"FRONT":"<span style='font-size: 28px; '>An elephant is much smaller <span class=indam>[...]</span> a blue whale.[sound:rec1334405998.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexqtv7a.png' /></span>","BACK":"<span style='font-size: 28px; '>An elephant is much smaller <span class=indam>than</span> a blue whale.[sound:rec1334406007.mp3]<br /><br /></span><br><span style=''><i>than - чем</i></span>","INFO":null,"STT":107},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>T____</span> are much more dangerous than mice.[sound:rec1334405875.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepokonk.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Tigers</span> are much more dangerous than mice.[sound:rec1334405880.mp3]<br /><br /></span><br><span style=''><i>a tiger - тигр</i></span>","INFO":null,"STT":22},
{"FRONT":"<span style='font-size: 28px; '>Tigers are much more dangerous <span class=indam>[...]</span> mice.[sound:rec1334405803.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepokonk.png' /></span>","BACK":"<span style='font-size: 28px; '>Tigers are much more dangerous <span class=indam>than</span> mice.[sound:rec1334405810.mp3]<br /></span><br><span style=''><i>than - чем</i></span>","INFO":null,"STT":45},
{"FRONT":"<span style='font-size: 28px; '>&quot;When I'm happy I <span class=indam>j____</span>!&quot;[sound:rec1334407851.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepcax7i.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>&quot;When I'm happy I <span class=indam>jump</span>!&quot;[sound:rec1334407857.mp3]<br /><br /></span><br><span style=''><i>to jump - прыгать</i></span>","INFO":null,"STT":104},
{"FRONT":"<span style='font-size: 28px; '><i>in a restaurant:</i><br />&quot;Excuse me, please can we have <b>the</b> <span class=indam>b___</span>?&quot;[sound:rec1334408047.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekn7__s.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Excuse me, please can we have <b>the</b> <span class=indam>bill</span>?&quot;[sound:rec1334408054.mp3]<br /><br /><br /></span><br><span style=''><i>Please can we have the bill? - Принесите нам счет, пожалуйста.</i><br /><i>note: in American English 'the </i><span style='font-weight:600; font-style:italic;'>check</span><i>'</i></span>","INFO":null,"STT":36},
{"FRONT":"<span style='font-size: 28px; '>&quot;It isn't <span class=indam>saf__</span> to walk at night in this city.&quot;[sound:rec1334407322.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb_imve.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;It isn't <span class=indam>safe</span> to walk at night in this city.&quot;[sound:rec1334407335.mp3]<br /><br /></span><br><span style=''><i>safe (adj.) - безопасный</i><br></span>","INFO":null,"STT":72}]

if (localStorage.caumayEn_SG_8 == null) {
    localStorage.caumayEn_SG_8 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_8"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_8+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_8).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_8).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_8).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_8+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_8).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_8).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_8).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_8)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_8))
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
	cau = Number(localStorage.caumayEn_SG_8)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_8)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_8) >  0){
		localStorage.caumayEn_SG_8 = Number(localStorage.caumayEn_SG_8) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_8))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_8)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_8)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_8) < dulieu.length-1){
		localStorage.caumayEn_SG_8 = Number(localStorage.caumayEn_SG_8) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_8))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_8)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_8)].BACK
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
	var current_player = Number(localStorage.caumayEn_SG_8)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_8)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_8)].BACK
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
	cau = Number(localStorage.caumayEn_SG_8)
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
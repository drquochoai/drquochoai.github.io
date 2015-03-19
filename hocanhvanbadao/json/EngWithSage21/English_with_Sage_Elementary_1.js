$(document).ready(function(){
var dulieu = [{"FRONT":"What are these?[sound:rec1312403206.mp3]<br><span style=' '><br /><i>(pictures or words that tell us what to do)</i><br /><img class='center-block img-responsive hinhdep'  src='pastekv_8zg.png' /></span>","BACK":"They're <span style=' '><span class=indam>instr</span><span style='font-weight:600; color:#ff5500;'>u</span><span class=indam>ctions</span> [sound:rec1312403604.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>instructions - инструкции</span></span>","INFO":null,"STT":52},
{"FRONT":"<span style=' '>Where was Jean-Paul II from?[sound:rec1328957418.mp3]<br />He was from <span class=indam>Po____</span>.<br /><img class='center-block img-responsive hinhdep'  src='paste367jpa.png' /></span>","BACK":"<span style=' '>He was from <span class=indam>Poland.</span>[sound:rec1328957427.mp3]<br /><br /></span><br><span style=''><i>Poland (n.) - Польша</i><br /><i>Polish (adj.) - польский</i><br /></span>","INFO":null,"STT":36},
{"FRONT":"<span style=' '>His hand is in his <span class=indam>p_____</span>.[sound:rec1328960213.mp3]<br /><img class='center-block img-responsive hinhdep'  src='hand in pocket.jpg' /></span>","BACK":"<span style=' '>His hand is in his <span class=indam>pocket</span>.[sound:rec1328960220.mp3]<br /><br /></span><br><span style=''><i>a pocket - карман</i></span>","INFO":null,"STT":55},
{"FRONT":"<span style=' '>Look at that <span class=indam>t____</span>![sound:rec1329137625.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegupklv.jpg' /></span>","BACK":"<span style=' '>Look at that <span class=indam>tree</span>![sound:rec1329137629.mp3]<br /><br /></span><br><span style=''><i>a tree - дерево</i><br></span>","INFO":null,"STT":198},
{"FRONT":"<span style=' '>[sound:rec1328959291.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7bo6ma.png' /></span>","BACK":"<span style=' '><i>How do you say this number?</i><br /><br /><span class=indam>thirty</span><span style='color:#0000ff;'>-</span><span class=indam>seven</span>[sound:rec1312405855.mp3]</span><br><span style=''></span>","INFO":null,"STT":4},
{"FRONT":"<span style=' '>-What's the time?[sound:rec1329137335.mp3]<br />-Look at the <span class=indam>cl____</span>.<br /><img class='center-block img-responsive hinhdep'  src='clock.jpg' /></span>","BACK":"<span style=' '>-What's the time?<br />-Look at the <span class=indam>clock</span>.[sound:rec1329137340.mp3]<br /><br /></span><br><span style=''><i>a clock - часы (настенные, напольные и пр.)</i></span>","INFO":null,"STT":179},
{"FRONT":"<span style=' '>Let's buy a <span class=indam>ne____</span>.[sound:rec1329137231.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastengmthl.png' /></span>","BACK":"<span style=' '>Let's buy a <span class=indam>newspaper</span>.[sound:rec1329137236.mp3]<br /></span><br><span style=''><i>a newspaper - газета</i></span>","INFO":null,"STT":172},
{"FRONT":"<span style=' '>Do you have your <span class=indam>id____ c___</span>?[sound:rec1329137176.mp3]<br /><img class='center-block img-responsive hinhdep'  src='identity card.jpg' /></span>","BACK":"<span style=' '>Do you have your <span class=indam>identity card</span>?[sound:rec1329137181.mp3]<br /><br /></span><br><span style=''><i>an identity card - удостоверение личности</i></span>","INFO":null,"STT":169},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401756.mp3]</span>","BACK":"<span style=' '><i>Today's Thursday. What's tomorrow?</i><br /><br /><span class=indam>Friday</span>[sound:rec1312404375.mp3]</span><br><span style=''><i>Friday - пятница</i></span>","INFO":null,"STT":99},
{"FRONT":"<span style=' '>Look at the <span class=indam>b____</span>![sound:rec1329137557.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2_xcze.png' /></span>","BACK":"<span style=' '>Look at the <span class=indam>bird</span>![sound:rec1329137561.mp3]<br /><br /></span><br><span style=''><i>a bird - птица</i></span>","INFO":null,"STT":194},
{"FRONT":"<span style=' '>Where's my <span class=indam>k___</span>?[sound:rec1329137281.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesomrek.png' /></span>","BACK":"<span style=' '>Where's my <span class=indam>key</span>?[sound:rec1329137285.mp3]<br /><br /></span><br><span style=''><i>a key - ключ</i><br></span>","INFO":null,"STT":175},
{"FRONT":"<span style=' '>Where are they from?<br />They're from <span class=indam>It____</span>.[sound:rec1328957292.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesewvkz.png' /></span>","BACK":"<span style=' '>They're from <span class=indam>Italy.</span>[sound:rec1328957298.mp3]<br /></span><br><span style=''><i>Italy (n.) - Италия</i><br /><i>Italian (adj.) - итальянский</i></span>","INFO":null,"STT":32},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) Mike@info.de<br />b) Mike@info.da<br />[sound:rec1339663505.mp3]</span>","BACK":"<span style=' '><span class=indam>b) Mike@info.da</span>[sound:rec1339663505.mp3]</span><br><span style=''></span>","INFO":null,"STT":124},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401701.mp3]</span>","BACK":"<span style=' '><i>Today's Thursday. What was yesterday?</i><br /><br /><span class=indam>Wednesday</span>[sound:rec1312404416.mp3]</span><br><span style=''><i>Wednesday - среда</i></span>","INFO":null,"STT":104},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) Mr. G. Smith<br />b) Mr. J. Smith<br />[sound:rec1339663538.mp3]</span>","BACK":"<span style=' '><span class=indam>b) Mr. J. Smith</span>[sound:rec1339663538.mp3]</span><br><span style=''></span>","INFO":null,"STT":126},
{"FRONT":"<span style=' '>How many people are there?[sound:rec1336207662.mp3]<br /><span style='color:#000000;'>-There are</span><span class=indam> (30)</span><br /><img class='center-block img-responsive hinhdep'  src='pastecxgz9u.png' /></span>","BACK":"<span style=' '>How many people are there?<br /><span style='color:#000000;'>-There are</span><span class=indam> thirty.</span>[sound:rec1336207668.mp3]</span><br><span style=''></span>","INFO":null,"STT":3},
{"FRONT":"<span style=' '>Penelope Cruz isn't American, she's <span class=indam>Sp____</span>.[sound:rec1328957507.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasted4fyyu.png' /><img class='center-block img-responsive hinhdep'  src='pastev94cy3.png' /></span>","BACK":"<span style=' '>Penelope Cruz is <span class=indam>Spanish</span>.[sound:rec1328957512.mp3]<br /><br /></span><br><span style=''><i>Spanish (adj.) - испанский</i><br /><i>Spain (n.) - Испания</i></span>","INFO":null,"STT":39},
{"FRONT":"<span style=' '>'Michael' is his <span class=indam>f___ n____</span>.[sound:rec1328959235.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteljkyut.jpg' /><br /></span>","BACK":"<span style=' '>'Michael' is his <span class=indam>first name</span>.[sound:rec1312403871.mp3]</span><br><span style=''><i>first name - имя</i></span>","INFO":null,"STT":61},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) Where's he from?<br />b) Where's she from?<br />[sound:rec1312401976.mp3]</span>","BACK":"<span style=' '><span class=indam>a) Where's he from?</span>[sound:rec1312401976.mp3]</span><br><span style=''></span>","INFO":null,"STT":109},
{"FRONT":"<span style=' '>Do you have a <span class=indam>c_____</span>?[sound:rec1329137546.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastex_axmx.png' /></span>","BACK":"<span style=' '>Do you have a <span class=indam>computer</span>?[sound:rec1329137550.mp3]<br /></span><br><span style=''><i>a computer - компьютер</i></span>","INFO":null,"STT":193},
{"FRONT":"<span style=' '>How do you spell <span class=indam>_____</span>?[sound:rec1336208153.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetta2r_.png' /></span>","BACK":"<span style=' '><span class=indam>G-A-M-E</span>[sound:rec1336208160.mp3]</span><br><span style=''><i>a game - игра</i></span>","INFO":null,"STT":201},
{"FRONT":"<span style=' '>How do you spell <span class=indam>____</span> ?[sound:rec1320149565.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoregog.jpg' /></span>","BACK":"<span style=' '><span class=indam>W-R-I-T-E</span>[sound:rec1320149573.mp3]</span><br><span style=''><i>to write - писать</i></span>","INFO":null,"STT":147},
{"FRONT":"<span style=' '>The kangeroo is an <span class=indam>Aus_____</span> animal.[sound:rec1336212949.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteghh1qy.png' /></span>","BACK":"<span style=' '>The kangeroo is an <span class=indam>Austr</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>lian</span> animal.[sound:rec1336212955.mp3]<br /><br /></span><br><span style=''><i>Austr</i><span style='font-style:italic; color:#ff0909;'>a</span><i>lian (adj.) - австралийский</i><br><i>Austr</i><span style='font-style:italic; color:#ff0909;'>a</span><i>lia (n.) - Австралия</i><br /></span>","INFO":null,"STT":135},
{"FRONT":"What are these?[sound:rec1312403206.mp3]<br><span style=' '><br /><img class='center-block img-responsive hinhdep'  src='stamps.jpg' /></span>","BACK":"They're <span style=' '><span class=indam>stamps</span>[sound:rec1312403522.mp3]<br /></span><br><span style=''><i>a stamp - марка</i></span>","INFO":null,"STT":46},
{"FRONT":"<span style=' '>Are you French?<br /><span style='color:#000000;'>&quot;No, I'm not. I'm </span><span class=indam>Ger____</span><span style='color:#000000;'>.&quot;</span>[sound:rec1328957219.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepi9lqm.jpg' /></span>","BACK":"<span style=' '><span style='color:#000000;'>&quot;I'm </span><span class=indam>German</span><span style='color:#000000;'>.&quot;</span>[sound:rec1328957226.mp3]<br /><br /></span><br><span style=''><i>G</i><span style='font-style:italic; color:#ff5500;'>e</span><i>rman (adj.) - немецкий</i><br /><i>G</i><span style='font-style:italic; color:#ff5500;'>e</span><i>rmany (n.) - Германия</i></span>","INFO":null,"STT":29},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) Mike@info.de<br />b) Mike@info.da<br />[sound:rec1339663518.mp3]</span>","BACK":"<span style=' '><span class=indam>a) Mike@info.de</span>[sound:rec1339663518.mp3]<br /></span><br><span style=''><i>@ = 'at'<br />. = 'dot'</i></span>","INFO":null,"STT":123},
{"FRONT":"<span style=' '>[sound:rec1312405588.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezx1yak.jpg' /></span>","BACK":"<span style=' '><span class=indam>Braz</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>l</span>[sound:rec1312405629.mp3]<br /><br /></span><br><span style=''><i>Braz</i><span style='font-style:italic; color:#ff0909;'>i</span><i>l (n.) - Бразилия</i><br /><i>Braz</i><span style='font-style:italic; color:#ff0909;'>i</span><i>lian (adj.) - бразильский</i></span>","INFO":null,"STT":133},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) She's French.<br />b) She isn't French.<br />[sound:rec1339663298.mp3]</span>","BACK":"<span style=' '><span class=indam>a) She's French.</span><br />[sound:rec1339663298.mp3]</span><br><span style=''></span>","INFO":null,"STT":113},
{"FRONT":"<span style=' '>New York is a big <span class=indam>c____</span>.[sound:rec1329137729.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepxijm_.png' /></span>","BACK":"<span style=' '>New York is a big <span class=indam>city</span>.[sound:rec1329137737.mp3]</span><br><span style=''><i>a city - город</i></span>","INFO":null,"STT":50},
{"FRONT":"<span style=' '>-What flag is this?<br />-It's the <span class=indam>Can_____</span> flag.[sound:rec1328957672.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehfmqrx.jpg' /></span>","BACK":"<span style=' '>-It's the <span class=indam>Can</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>dian</span> flag.[sound:rec1328957678.mp3]<br /><br /></span><br><span style=''><i>Can</i><span style='font-style:italic; color:#ff0909;'>a</span><i>dian (adj.) - канадский</i><br /><i>C</i><span style='font-style:italic; color:#ff0909;'>a</span><i>nada (n.) - Канада</i><br /></span>","INFO":null,"STT":138},
{"FRONT":"<span style=' '>Please close the <span class=indam>d____</span>.[sound:rec1329137479.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezjvake.jpg' /></span>","BACK":"<span style=' '>Please close the <span class=indam>door</span>.[sound:rec1329137484.mp3]<br /><br /></span><br><span style=''><i>a door - дверь</i></span>","INFO":null,"STT":188},
{"FRONT":"<span style=' '>How do you spell <span class=indam>_____</span>?[sound:rec1336208291.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8rqqzc.png' /></span>","BACK":"<span style=' '><span class=indam>L-O-V-E</span>[sound:rec1336208297.mp3]</span><br><span style=''><i>love (n.) - любовь</i></span>","INFO":null,"STT":208},
{"FRONT":"<span style=' '>&quot;<span class=indam>___</span> names are Sue and Sally.&quot; <b>(they)</b>[sound:rec1328959776.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastem_dbza.png' /></span>","BACK":"<span style=' '>&quot;<span class=indam>Their</span> names are Sue and Sally.&quot;[sound:rec1328959770.mp3]<br /><br /><br /></span><br><span style=''><i>their names - их имена</i></span>","INFO":null,"STT":73},
{"FRONT":"<span style=' '>How do you spell <span class=indam>_____</span>?[sound:rec1336208233.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8fveq2.png' /></span>","BACK":"<span style=' '><span class=indam>Q-U-E-E-N</span>[sound:rec1336208251.mp3]</span><br><span style=''><i>queen - королева</i></span>","INFO":null,"STT":206},
{"FRONT":"<span style=' '>-<span class=indam>_____</span> from Australia?[sound:rec1329137801.mp3]<br />-No, he isn't. He's from New Zealand.<br /><img class='center-block img-responsive hinhdep'  src='crowe.jpg' /></span>","BACK":"<span style=' '>-<span class=indam>Is he</span> from Australia?[sound:rec1312404198.mp3]</span><br><span style=''><i>Is he from Australia? - Он из Австралии?</i></span>","INFO":null,"STT":85},
{"FRONT":"<span style=' '>Do you have any <span class=indam>m____</span>?[sound:rec1329137220.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteod1o9t.png' /></span>","BACK":"<span style=' '>Do you have any <span class=indam>matches</span>?[sound:rec1329137225.mp3]<br /><br /></span><br><span style=''><i>a match - спичка</i></span>","INFO":null,"STT":171},
{"FRONT":"<span style=' '>&quot;What<span class=indam>___</span> that?&quot;<br />&quot;It's a hotel.&quot;<br /><img class='center-block img-responsive hinhdep'  src='pasteffrwxu.png' /></span>","BACK":"<span style=' '>&quot;What<span class=indam>'s</span> that?&quot;<br />&quot;It's a hotel.&quot;[sound:rec1312404108.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":79},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401816.mp3]</span>","BACK":"<span style=' '><i>Today's Saturday. What's tomorrow?</i><br /><br /><span class=indam>Sunday</span>[sound:rec1312404382.mp3]</span><br><span style=''><i>Sunday - воскресенье</i></span>","INFO":null,"STT":101},
{"FRONT":"<span style=' '>&quot;Please look <span class=indam>____</span> the board!&quot;[sound:rec1329137949.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9cdgoi.png' /></span>","BACK":"<span style=' '>&quot;Please look <span class=indam>at</span> the board!&quot;[sound:rec1329137955.mp3]</span><br><span style=''><i>to look at sth. - смотреть на что-л.</i><br></span>","INFO":null,"STT":93},
{"FRONT":"<span style=' '>How many eggs are there?[sound:rec1336207614.mp3]<br />-There are <span class=indam>(20)</span><span style='color:#000000;'>.</span><br /><img class='center-block img-responsive hinhdep'  src='pastetjd7gs.png' /></span>","BACK":"<span style=' '>There are <span class=indam>twenty</span>.[sound:rec1336207624.mp3]</span><br><span style=''></span>","INFO":null,"STT":1},
{"FRONT":"<span style=' '>&quot;You have lots of bags. <span class=indam>C___</span> I help you?&quot;<br />-&quot;No thanks, it's okay.&quot;[sound:rec1315839977.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecfoxcw.jpg' /></span>","BACK":"<span style=' '><span class=indam>Can</span> I help you?[sound:rec1315839994.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>Can I help you? - Могу ли я вам помочь?</span></span>","INFO":null,"STT":142},
{"FRONT":"<span style=' '>-Are they from America?<br />-No, <span class=indam>_____</span>. They're from Britain.[sound:rec1329137861.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebz3zgl.jpg' /></span>","BACK":"<span style=' '>-No, <span class=indam>they aren't</span>. [sound:rec1312404221.mp3]</span><br><span style=''></span>","INFO":null,"STT":88},
{"FRONT":"<span style=' '>This is my <span class=indam>fo____</span> for English.[sound:rec1329137590.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegkiwxh.png' /></span>","BACK":"<span style=' '>This is my <span class=indam>folder</span> for English.[sound:rec1329137596.mp3]<br /><br /></span><br><span style=''><i>a folder - папка, скоросшиватель</i></span>","INFO":null,"STT":196},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) Mr. G. Smith<br />b) Mr. J. Smith<br />[sound:rec1339663528.mp3]</span>","BACK":"<span style=' '><span class=indam>a) Mr. G. Smith</span>[sound:rec1339663528.mp3]</span><br><span style=''></span>","INFO":null,"STT":125},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401685.mp3]</span>","BACK":"<span style=' '><i>Today's Tuesday. What's tomorrow?</i><br /><br /><span class=indam>Wednesday</span>[sound:rec1312404366.mp3]</span><br><span style=''><i>Wednesday - среда</i></span>","INFO":null,"STT":97},
{"FRONT":"<span style=' '>-What's your <span class=indam>a_____</span>?[sound:rec1328959808.mp3]<br />-20 Orange Street, London.<br /><img class='center-block img-responsive hinhdep'  src='pastephikgz.png' /></span>","BACK":"<span style=' '>-What's your <span class=indam>addr</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>ss</span>?[sound:rec1320149940.mp3]<br /></span><br><span style=''><i>an address - адрес</i></span>","INFO":null,"STT":162},
{"FRONT":"<span style=' '>Do you have <b>an</b> <span class=indam>um____</span>?[sound:rec1329137347.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiugq9y.png' /></span>","BACK":"<span style=' '>Do you have <b>an</b> <span class=indam>umbr</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>lla</span>?[sound:rec1329137352.mp3]<br /><br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>an</span><i> umbr</i><span style='font-style:italic; color:#ff5500;'>e</span><i>lla - зонт</i><br></span>","INFO":null,"STT":180},
{"FRONT":"<span style=' '>Please can I have some <span class=indam>ci_____</span>?[sound:rec1329136929.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste27ylyb.jpg' /></span>","BACK":"<span style=' '>Please can I have some <span class=indam>cigar</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>ttes</span>?[sound:rec1329136940.mp3]<br /><br /></span><br><span style=''><i>a cigar</i><span style='font-style:italic; color:#ff5500;'>e</span><i>tte - сигарета</i></span>","INFO":null,"STT":165},
{"FRONT":"<span style=' '>-What's your email address?[sound:rec1328961137.mp3]<br />-It's '<span class=indam>dave-2@gmail.com</span>'.</span>","BACK":"<span style=' '>-It's 'dave &quot;<span class=indam>dash</span>&quot; 2 &quot;<span class=indam>at</span>&quot; gmail &quot;<span class=indam>dot</span>&quot; com'.[sound:rec1328961187.mp3]</span><br><span style=''><i>@ = 'at'<br />. = 'dot'</i><br /><i>- = 'dash'</i></span>","INFO":null,"STT":161},
{"FRONT":"<span style=' '>Please can I have some <span class=indam>w____</span>?[sound:rec1329137506.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexslktz.jpg' /></span>","BACK":"<span style=' '>Please can I have some <span class=indam>water</span>?[sound:rec1329137510.mp3]<br /><br /></span><br><span style=''><i>water (n.) - вода</i></span>","INFO":null,"STT":190},
{"FRONT":"<span style=' '>Where's it from?[sound:rec1328957353.mp3]<br />It's from <span class=indam>Ja____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasted0xkd3.jpg' /></span>","BACK":"<span style=' '>It's from <span class=indam>Jap</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>n</span>.[sound:rec1328957361.mp3]<br /><br /></span><br><span style=''><i>Jap</i><span style='font-style:italic; color:#ff0909;'>a</span><i>n (n.) - Япония</i><br /><i>Japan</i><span style='font-style:italic; color:#ff0909;'>e</span><i>se (adj.) - японский</i></span>","INFO":null,"STT":34},
{"FRONT":"<span style=' '>Are they Polish?<br />-No, they aren't. They're <span class=indam>It_____</span>.[sound:rec1328957314.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesewvkz.png' /></span>","BACK":"<span style=' '>No, they aren't. They're <span class=indam>Italian</span>.[sound:rec1328957322.mp3]<br /><br /></span><br><span style=''><i>Italian (adj.) - итальянский</i><br /><i>Italy (n.) - Италия</i></span>","INFO":null,"STT":33},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401832.mp3]</span>","BACK":"<span style=' '><i>Today's Monday. What was yesterday?</i><br /><br /><span class=indam>Sunday</span>[sound:rec1312404429.mp3]</span><br><span style=''><i>Sunday - воскресенье</i></span>","INFO":null,"STT":108},
{"FRONT":"What are these?[sound:rec1312403206.mp3]<br><span style=' '><br /><img class='center-block img-responsive hinhdep'  src='glasses.jpg' /></span>","BACK":"They're <span style=' '><span class=indam>glasses</span>[sound:rec1312403386.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>glasses - очки</span></span>","INFO":null,"STT":45},
{"FRONT":"<span style=' '>Please open the <span class=indam>w____</span>.[sound:rec1329137516.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenogyqn.png' /></span>","BACK":"<span style=' '>Please open the <span class=indam>window</span>.[sound:rec1329137521.mp3]<br /><br /></span><br><span style=''><i>a window - окно</i></span>","INFO":null,"STT":191},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401573.mp3]</span>","BACK":"<span style=' '><i>Today's Sunday. What's tomorrow?</i><br /><br /><span class=indam>Monday</span>[sound:rec1312404359.mp3]</span><br><span style=''><i>Monday - понедельник</i></span>","INFO":null,"STT":95},
{"FRONT":"<span style=' '>Name: Tom&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[sound:rec1320149814.mp3]<br /><span class=indam>A___</span>: 20 <i>(he's 20 years old)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteu6vuon.png' /></span>","BACK":"<span style=' '>Name: Tom[sound:rec1320149821.mp3]<br /><span class=indam>Age</span>: 20<br /></span><br><span style=''><i>age (n.) -возраст</i></span>","INFO":null,"STT":158},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) Gate number 14<br />b) Gate number 40<br />[sound:rec1339663423.mp3]</span>","BACK":"<span style=' '><span class=indam>b) Gate number 40</span>[sound:rec1339663423.mp3]</span><br><span style=''></span>","INFO":null,"STT":122},
{"FRONT":"<span style=' '>There's some money in my <span class=indam>p____</span>.[sound:rec1329137656.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqo9ce1.jpg' /></span>","BACK":"<span style=' '>There's some money in my <span class=indam>purse</span>.[sound:rec1329137660.mp3]<br /><br /></span><br><span style=''><i>a purse (usually for women) - кошелек (обычно для женщин)</i></span>","INFO":null,"STT":200},
{"FRONT":"<span style=' '>I want two <span class=indam>ch____</span>.[sound:rec1329137466.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteooddrj.png' /></span>","BACK":"<span style=' '>I want two <span class=indam>chairs</span>.[sound:rec1329137472.mp3]<br /><br /></span><br><span style=''><i>a chair - стул</i></span>","INFO":null,"STT":187},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) He's from Italy.<br />b) She's from Italy.<br />[sound:rec1339663273.mp3]</span>","BACK":"<span style=' '><span class=indam>b) She's from Italy.</span>[sound:rec1339663273.mp3]</span><br><span style=''></span>","INFO":null,"STT":112},
{"FRONT":"<span style=' '>How do you spell <span class=indam>_____</span>?[sound:rec1336208272.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5zj7wg.jpg' /></span>","BACK":"<span style=' '><span class=indam>H-O-R-S-E</span>[sound:rec1336208281.mp3]</span><br><span style=''><i>a horse - лошадь</i></span>","INFO":null,"STT":207},
{"FRONT":"<span style=' '>How do you spell <span class=indam>____</span> ?[sound:rec1320149552.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuj4g9a.jpg' /></span>","BACK":"<span style=' '><span class=indam>B-E-D</span>[sound:rec1320149557.mp3]</span><br><span style=''><i>a bed - кровать, постель</i></span>","INFO":null,"STT":146},
{"FRONT":"<span style=' '>Please write on the <span class=indam>wh____</span>.[sound:rec1329137415.mp3]<br /><img class='center-block img-responsive hinhdep'  src='whiteboard.jpg' /></span>","BACK":"<span style=' '>Please write on the <span class=indam>whiteboard</span>.[sound:rec1329137421.mp3]<br /><br /></span><br><span style=''><i>a whiteboard - лекционная доска</i></span>","INFO":null,"STT":183},
{"FRONT":"<span style=' '>-Is he from Australia?<br />-No, <span class=indam>_____</span>. He's from New Zealand.[sound:rec1329137845.mp3]<br /><img class='center-block img-responsive hinhdep'  src='crowe.jpg' /></span>","BACK":"<span style=' '>-No, <span class=indam>he isn't</span>.[sound:rec1312404206.mp3]</span><br><span style=''></span>","INFO":null,"STT":86},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) Tuesday<br />b) Thursday<br />[sound:rec1339663572.mp3]</span>","BACK":"<span style=' '><span class=indam>b) Thursday</span>[sound:rec1339663572.mp3]</span><br><span style=''></span>","INFO":null,"STT":128},
{"FRONT":"<span style=' '>-<span class=indam>____</span> from Scotland?<br />-No, it isn't. It's from Ireland.<br /><img class='center-block img-responsive hinhdep'  src='paster98s0m.png' /></span>","BACK":"<span style=' '>-<span class=indam>Is it</span> from Scotland?[sound:rec1312404171.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":82},
{"FRONT":"<span style=' '>How many cats are there?[sound:rec1336207724.mp3]<br />-There are <span class=indam>(42)</span>.<br /><img class='center-block img-responsive hinhdep'  src='paste1knlqw.png' /></span>","BACK":"<span style=' '>How many cats are there?<br />-There are <span class=indam>forty-two</span>.[sound:rec1336207729.mp3]</span><br><span style=''></span>","INFO":null,"STT":6},
{"FRONT":"<span style=' '>Penelope Cruz is from <span class=indam>Sp____</span>.[sound:rec1328957493.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasted4fyyu.png' /><img class='center-block img-responsive hinhdep'  src='pastev94cy3.png' /></span>","BACK":"<span style=' '>Penelope Cruz is from <span class=indam>Spain</span>.[sound:rec1328957498.mp3]<br /><br /></span><br><span style=''><i>Spain (n.) - Испания</i><br><i>Spanish (adj.) - испанский</i></span>","INFO":null,"STT":38},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) 12 people<br />b) 20 people<br />[sound:rec1339663581.mp3]</span>","BACK":"<span style=' '><span class=indam>a) 20 people</span>[sound:rec1339663581.mp3]</span><br><span style=''></span>","INFO":null,"STT":129},
{"FRONT":"<span style=' '>Where's my <span class=indam>li____</span>?[sound:rec1329137291.mp3]<br /><img class='center-block img-responsive hinhdep'  src='lipstick.jpg' /></span>","BACK":"<span style=' '>Where's my <span class=indam>lipstick</span>?[sound:rec1329137295.mp3]<br /><br /><br /></span><br><span style=''><i>a lipstick - губная помада</i></span>","INFO":null,"STT":176},
{"FRONT":"<span style=' '>'Jackson' is his <span class=indam>s_____</span>.[sound:rec1328959197.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteljkyut.jpg' /></span>","BACK":"<span style=' '>'Jackson' is his <span class=indam>s</span><span style='font-weight:600; color:#ff5500;'>u</span><span class=indam>rname</span>.[sound:rec1312403889.mp3]</span><br><span style=''><i>surname - фамилия</i></span>","INFO":null,"STT":62},
{"FRONT":"<span style=' '>-<span class=indam>______</span> from America?<br />-No, they aren't. They're from Britain.<br /><img class='center-block img-responsive hinhdep'  src='pastebz3zgl.jpg' /></span>","BACK":"<span style=' '>-<span class=indam>Are they</span> from America?<br />[sound:rec1312404212.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>Are they</span><span style='font-style:italic; color:#000000;'> from America? - Они из Америки?</span></span>","INFO":null,"STT":87},
{"FRONT":"<span style=' '>The time from midday (12pm) to 6pm is called the <span class=indam>af_____</span>.[sound:rec1328960734.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteldauda.png' /></span>","BACK":"<span style=' '>The time from midday (12pm) to 6pm is called the <span class=indam>afternoon</span>.[sound:rec1312403547.mp3]</span><br><span style=''><i>the afternoon - время после полудня, послеобеденное время</i></span>","INFO":null,"STT":49},
{"FRONT":"<span style=' '>Please can I have a <span class=indam>p____</span>?[sound:rec1329137260.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewixqdu.png' /></span>","BACK":"<span style=' '>Please can I have a <span class=indam>pencil</span>?[sound:rec1329137247.mp3]<br /></span><br><span style=''><i>a pencil - карандаш</i></span>","INFO":null,"STT":173},
{"FRONT":"<span style=' '>We say one <span class=indam>person</span>, but lots of <span class=indam>p____</span>.[sound:rec1329137765.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteu7xiyu.png' /></span>","BACK":"<span style=' '>We say one <span class=indam>person</span>, but lots of <span class=indam>people</span>.[sound:rec1312403682.mp3]</span><br><span style=''><i>person - человек</i><br /><i>people - люди</i><br /></span>","INFO":null,"STT":54},
{"FRONT":"<span style=' '>This whiskey isn't English, it's <span class=indam>Sco____</span>.[sound:rec1329137714.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev81iy6.png' /><img class='center-block img-responsive hinhdep'  src='pasteumldl8.png' /></span>","BACK":"<span style=' '>This whiskey isn't English, it's <span class=indam>Scottish</span>.[sound:rec1329137719.mp3]<br /></span><br><span style=''><i>Scottish (adj.) - шотландский</i><br /><i>S</i><span style='font-style:italic; color:#000000;'>cotl</span><i>and (n.) - Шотландия</i></span>","INFO":null,"STT":41},
{"FRONT":"<span style=' '>-Is it from Scotland?[sound:rec1328960148.mp3]<br />-No, it isn't. <span class=indam>It___</span> from Ireland.<br /><img class='center-block img-responsive hinhdep'  src='paster98s0m.png' /></span>","BACK":"<span style=' '>-No, it isn't. <span class=indam>It's</span> from Ireland.[sound:rec1328960186.mp3]</span><br><span style=''></span>","INFO":null,"STT":83},
{"FRONT":"<span style=' '>I'm not Korean, I'm <span class=indam>Ch____</span>.[sound:rec1328957063.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb7o9rp.jpg' /></span>","BACK":"<span style=' '>I'm <span class=indam>Chinese</span>.[sound:rec1328957068.mp3]<br /><br /></span><br><span style=''><i>Chinese (adj.) - китайский</i><br /><i>China (n.) - Китай</i><br /></span>","INFO":null,"STT":23},
{"FRONT":"<span style=' '>[sound:rec1328959291.mp3]<img class='center-block img-responsive hinhdep'  src='pastehwd9pd.png' /></span>","BACK":"<span style=' '><i>How do you say this number?</i><br /><br /><span class=indam>sixty-seven</span>[sound:rec1312405890.mp3]</span><br><span style=''></span>","INFO":null,"STT":10},
{"FRONT":"<span style=' '>We <span class=indam>h___</span> English lessons on Mondays and Thursdays.[sound:rec1336677517.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_nmh0j.png' /></span>","BACK":"<span style=' '>We <span class=indam>have</span> English lessons on Mondays and Thursdays.[sound:rec1336677535.mp3]</span><br><span style=''><i>we have ... - у нас ...</i></span>","INFO":null,"STT":215},
{"FRONT":"What are these?[sound:rec1312403206.mp3]<br><span style=' '><br /><img class='center-block img-responsive hinhdep'  src='paste3ycfmp.png' /></span>","BACK":"They're <span style=' '><span class=indam>tissues</span>[sound:rec1312403535.mp3]<br /><br /></span><br><span style=''><i>a tissue - бумажный платок</i></span>","INFO":null,"STT":48},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401721.mp3]</span>","BACK":"<span style=' '><i>Today's Wednesday. What's tomorrow?</i><br /><br /><span class=indam>Thursday</span>[sound:rec1312404371.mp3]</span><br><span style=''><i>Thursday - четверг</i></span>","INFO":null,"STT":98},
{"FRONT":"<span style=' '>How do you spell <span class=indam>_____</span>?[sound:rec1336208170.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepj9r1k.png' /></span>","BACK":"<span style=' '><span class=indam>J-A-M</span>[sound:rec1336208177.mp3]</span><br><span style=''><i>jam (n.) - варенье</i></span>","INFO":null,"STT":202},
{"FRONT":"<span style=' '>[sound:rec1312405588.mp3]<img class='center-block img-responsive hinhdep'  src='paste3mfq5p.png' /></span>","BACK":"<span style=' '><span class=indam>Argent</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>na</span>[sound:rec1312406155.mp3]<br /><br /></span><br><span style=''><i>Argent</i><span style='font-style:italic; color:#ff0909;'>i</span><i>na (n.) - Аргентина</i><br /><i>Argent</i><span style='font-style:italic; color:#ff0909;'>i</span><i>nian (adj.) - аргентинский</i></span>","INFO":null,"STT":132},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) He's from Italy.<br />b) She's from Italy.<br />[sound:rec1339663262.mp3]</span>","BACK":"<span style=' '><span class=indam>a) He's from Italy.</span>[sound:rec1339663262.mp3]</span><br><span style=''></span>","INFO":null,"STT":111},
{"FRONT":"<span style=' '>Do you have a <span class=indam>m____ _____</span>?[sound:rec1329137310.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5ft0mb.png' /></span>","BACK":"<span style=' '>Do you have a <span class=indam>mobile phone</span>?[sound:rec1329137316.mp3]<br /></span><br><span style=''><i>a mobile phone - мобильный телефон</i></span>","INFO":null,"STT":177},
{"FRONT":"<span style=' '>-<span class=indam>W____</span> your surname?[sound:rec1320149654.mp3]<br />-Putin.<br /><img class='center-block img-responsive hinhdep'  src='pastepke3be.png' /></span>","BACK":"<span style=' '>-<span class=indam>What's</span> your surname?[sound:rec1320149661.mp3]<br />-Putin.<br /><br /></span><br><span style=''><i>what's = what is</i></span>","INFO":null,"STT":154},
{"FRONT":"<span style=' '>&quot;Nice <span class=indam>[...]</span> meet you.&quot;[sound:rec1329137907.mp3]<br /><img class='center-block img-responsive hinhdep'  src='meeting.jpg' /></span>","BACK":"<span style=' '>&quot;Nice <span class=indam>to</span> meet you.&quot;[sound:rec1329137914.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>Nice </span><span style='font-style:italic; color:#000000;'>to</span><span style='font-style:italic; color:#000000;'> meet you. - Приятно познакомиться.</span></span>","INFO":null,"STT":90},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) the credit card<br />b) the credit cards<br />[sound:rec1312402187.mp3]</span>","BACK":"<span style=' '><span class=indam>a) the credit card</span>[sound:rec1312402187.mp3]</span><br><span style=''></span>","INFO":null,"STT":117},
{"FRONT":"<span style=' '>How old are you?[sound:rec1336207696.mp3]<br />-I'm <span class=indam>(40)</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastegyw0_o.png' /></span>","BACK":"<span style=' '>How old are you?<br />-I'm <span class=indam>forty</span>.[sound:rec1336207702.mp3]</span><br><span style=''></span>","INFO":null,"STT":5},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) What's his name?<br />b) What's her name?<br />[sound:rec1339663345.mp3]</span>","BACK":"<span style=' '><span class=indam>a) What's his name?</span>[sound:rec1339663345.mp3]</span><br><span style=''></span>","INFO":null,"STT":115},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401662.mp3]</span>","BACK":"<span style=' '><i>Today's Wednesday. What was yesterday?</i><br /><br /><span class=indam>Tuesday</span>[sound:rec1312404413.mp3]</span><br><span style=''><i>Tuesday - вторник</i></span>","INFO":null,"STT":103},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401607.mp3]</span>","BACK":"<span style=' '><i>Today's Tuesday. What was yesterday?</i><br /><br /><span class=indam>Monday</span>[sound:rec1312404410.mp3]</span><br><span style=''><i>Monday - понедельник</i></span>","INFO":null,"STT":102},
{"FRONT":"<span style=' '>We say one <span class=indam>man</span>, but a group of <span class=indam>m____</span>.[sound:rec1339663823.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7hic1m.png' /></span>","BACK":"<span style=' '><span class=indam>men</span>[sound:rec1339663829.mp3]</span><br><span style=''><i>a man - мужчина</i><br /><i>men - мужчины</i></span>","INFO":null,"STT":66},
{"FRONT":"What are these?[sound:rec1312403206.mp3]<br><span style=' '><br /><img class='center-block img-responsive hinhdep'  src='pasteshcxie.jpg' /></span>","BACK":"They're <span style=' '><span class=indam>cigarettes</span>[sound:rec1320149515.mp3]<br /><br /></span><br><span style=''><i>a cigarette - сигарета</i></span>","INFO":null,"STT":144},
{"FRONT":"What's this?[sound:rec1312403031.mp3]<br><span style=' '><br /><img class='center-block img-responsive hinhdep'  src='pastejkggls.png' /></span>","BACK":"It's <span style=' '><span class=indam>an address book</span>[sound:rec1312403103.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>an address book - адресная книга, записная книжка для адресов</span></span>","INFO":null,"STT":42},
{"FRONT":"<span style=' '>How do you spell <span class=indam>_____</span>?[sound:rec1336208201.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2bkh9m.png' /></span>","BACK":"<span style=' '><span class=indam>G-R-A-N-N-Y</span>[sound:rec1336208261.mp3]</span><br><span style=''><i>granny - бабушка</i></span>","INFO":null,"STT":204},
{"FRONT":"<span style=' '>Where's she from?<br />-She's from <span class=indam>Br_____</span>.[sound:rec1328957019.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejxhsms.jpg' /></span>","BACK":"<span style=' '>She's from <span class=indam>Britain</span>.[sound:rec1328957026.mp3]<br /><br /></span><br><span style=''><i>Britain (n.) - Британия</i><br><i>British (adj.) - британский</i><br /><br /></span>","INFO":null,"STT":20},
{"FRONT":"<span style=' '>I'm Julie. I'm <span class=indam>(60)</span> years old.[sound:rec1336207757.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteldmki5.png' /></span>","BACK":"<span style=' '>I'm Julie. I'm <span class=indam>sixty</span> years old.[sound:rec1336207764.mp3]</span><br><span style=''></span>","INFO":null,"STT":9},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) Tuesday<br />b) Thursday<br />[sound:rec1339663563.mp3]</span>","BACK":"<span style=' '><span class=indam>a) Tuesday</span>[sound:rec1339663563.mp3]</span><br><span style=''></span>","INFO":null,"STT":127},
{"FRONT":"<span style=' '>How many euros is it?[sound:rec1336207881.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastem4nyd8.png' /></span>","BACK":"<span style=' '>It's <span class=indam>two hundred</span> euros.[sound:rec1336207887.mp3]</span><br><span style=''></span>","INFO":null,"STT":18},
{"FRONT":"<span style=' '>&quot;It<span class=indam>____</span> a cat.&quot;[sound:rec1328958120.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedzk_wq.png' /><br /></span>","BACK":"<span style=' '>&quot;It<span class=indam>'s</span> a cat.&quot;[sound:rec1312404024.mp3]<br /><i>(It </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>is</span><i> a cat)</i></span><br><span style=''></span>","INFO":null,"STT":69},
{"FRONT":"<span style=' '>How do you spell <span class=indam>____</span> ?[sound:rec1320149640.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastef3urdu.jpg' /></span>","BACK":"<span style=' '><span class=indam>H-O-T</span>[sound:rec1320149646.mp3]</span><br><span style=''><i>hot (adj.) - горячий</i></span>","INFO":null,"STT":153},
{"FRONT":"<span style=' '>Are you British?<br />&quot;No, we aren't. We're <span class=indam>Ir_____</span>.&quot;[sound:rec1328957256.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastej996gc.jpg' /><img class='center-block img-responsive hinhdep'  src='pastejcq6zo.png' /></span>","BACK":"<span style=' '>&quot;No, we aren't. We're <span class=indam>Irish</span>.&quot;[sound:rec1328957275.mp3]<br /><br /></span><br><span style=''><i>Irish (adj.) - ирландский</i><br><i>Ireland (n.) - Ирландия</i><br /></span>","INFO":null,"STT":31},
{"FRONT":"<span style=' '>Please can I have some <span class=indam>w___</span>?[sound:rec1329137529.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4ej7wo.png' /></span>","BACK":"<span style=' '>Please can I have some <span class=indam>wine</span>?[sound:rec1329137539.mp3]<br /><br /></span><br><span style=''><i>wine (n.) - вино</i></span>","INFO":null,"STT":192},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) page 13<br />b) page 30<br />[sound:rec1339663384.mp3]</span>","BACK":"<span style=' '><span class=indam>a) page 13</span>[sound:rec1339663384.mp3]</span><br><span style=''></span>","INFO":null,"STT":119},
{"FRONT":"<span style=' '>It's a <span class=indam>p____</span> of cigarettes.[sound:rec1312403031.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterpnvnm.jpg' /><br /></span>","BACK":"<span style=' '>It's a <span class=indam>packet</span> of cigarettes.[sound:rec1312403108.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>a packet - упаковка, пачка</span></span>","INFO":null,"STT":43},
{"FRONT":"<span style=' '>How many dollars is it?[sound:rec1336207861.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejkqrl9.jpg' /></span>","BACK":"<span style=' '>It's <span class=indam>a hundred</span> dollars.[sound:rec1336207873.mp3]<br /><i>or</i><br />It's <span class=indam>one hundred</span> dollars.</span><br><span style=''></span>","INFO":null,"STT":17},
{"FRONT":"<span style=' '>-What's your email address?<br />-It's '<span class=indam>sagehiggins@yahoo.co.uk</span>'.&nbsp;&nbsp;[sound:rec1329136859.mp3]</span>","BACK":"<span style=' '>sagehiggins &quot;<span class=indam>at</span>&quot; yahoo &quot;<span class=indam>dot</span>&quot; co &quot;<span class=indam>dot</span>&quot; uk[sound:rec1329136873.mp3]</span><br><span style=''><i>@ = 'at'<br />. = 'dot'</i></span>","INFO":null,"STT":160},
{"FRONT":"<span style=' '>There are 26 <span class=indam>lе____</span> in the alphabet.[sound:rec1328960637.mp3]<br /><img class='center-block img-responsive hinhdep'  src='alphabet-canvas.jpg' /><br /></span>","BACK":"<span style=' '>There are 26 <span class=indam>letters</span> in the alphabet. (A, B, C, etc.)[sound:rec1312403663.mp3]<br /><br /></span><br><span style=''><i>a letter - буква</i></span>","INFO":null,"STT":53},
{"FRONT":"<span style=' '>I often travel by <span class=indam>t____</span>.[sound:rec1329137578.mp3]<br /><img class='center-block img-responsive hinhdep'  src='train-image.jpg' /></span>","BACK":"<span style=' '>I often travel by <span class=indam>train</span>.[sound:rec1329137582.mp3]<br /><br /></span><br><span style=''><i>a train - поезд</i></span>","INFO":null,"STT":195},
{"FRONT":"What's this?[sound:rec1312403031.mp3]<br><span style=' '><br /><img class='center-block img-responsive hinhdep'  src='bicycle.jpg' /></span>","BACK":"It's <span style=' '><span class=indam>a b</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>cycle / a bike</span>[sound:rec1328960414.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>a bicycle / a bike - велосипед</span></span>","INFO":null,"STT":58},
{"FRONT":"<span style=' '>&quot;They<span class=indam>___</span> trains.&quot;[sound:rec1328958009.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteptluql.png' /></span>","BACK":"<span style=' '>&quot;They<span class=indam>'re</span> trains.&quot;[sound:rec1312404051.mp3]<br /><i>(They </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>are</span><i> trains)</i></span><br><span style=''></span>","INFO":null,"STT":72},
{"FRONT":"<span style=' '>It's <span class=indam>___</span> car. <b>(she)</b>[sound:rec1328958559.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteer7c6r.jpg' /></span>","BACK":"<span style=' '>It's <span class=indam>her</span> car.[sound:rec1328958564.mp3]<br /></span><br><span style=''><i>her car - её машина</i></span>","INFO":null,"STT":75},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401734.mp3]</span>","BACK":"<span style=' '><i>Today's Friday. What was yesterday?</i><br /><br /><span class=indam>Thursday</span>[sound:rec1312404419.mp3]</span><br><span style=''><i>Thursday - четверг</i></span>","INFO":null,"STT":105},
{"FRONT":"<span style=' '>[sound:rec1312405588.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezmcw6i.jpg' /></span>","BACK":"<span style=' '><span class=indam>Austr</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>lia</span>[sound:rec1312405635.mp3]<br /><br /></span><br><span style=''><i>Austr</i><span style='font-style:italic; color:#ff0909;'>a</span><i>lia (n.) - Австралия</i><br /><i>Austr</i><span style='font-style:italic; color:#ff0909;'>a</span><i>lian (adj.) - австралийский</i></span>","INFO":null,"STT":134},
{"FRONT":"<span style=' '>Was Jean-Paul II Italian?<br />-No, he wasn't. He was <span class=indam>P____</span>.[sound:rec1328957478.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste367jpa.png' /></span>","BACK":"<span style=' '>No, he wasn't. He was <span class=indam>Polish</span>.[sound:rec1328957484.mp3]<br /><br /></span><br><span style=''><i>Polish (adj.) - польский</i><br><i>Poland (n.) - Польша</i></span>","INFO":null,"STT":37},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401788.mp3]</span>","BACK":"<span style=' '><i>Today's Friday. What's tomorrow?</i><br /><br /><span class=indam>Saturday</span>[sound:rec1312404378.mp3]</span><br><span style=''><i>Saturday - суббота</i></span>","INFO":null,"STT":100},
{"FRONT":"<span style=' '>This is <span class=indam>___</span> dog. <b>(we)</b>[sound:rec1328957855.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevy4ode.jpg' /></span>","BACK":"<span style=' '>This is <span class=indam>our</span> dog.[sound:rec1328957861.mp3]<br /><br /></span><br><span style=''><i>our dog - наша собака</i></span>","INFO":null,"STT":74},
{"FRONT":"<span style=' '>&quot;This is my pet. <span class=indam>___</span> name is Peter.&quot; <b>(it)</b>[sound:rec1328958661.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebtyjki.png' /></span>","BACK":"<span style=' '>&quot;This is my pet. <span class=indam>Its</span> name is Peter.&quot;[sound:rec1328958669.mp3]<br /></span><br><span style=''><i>its name - его имя</i></span>","INFO":null,"STT":76},
{"FRONT":"<span style=' '>-What flag is this?<br />-It's the <span class=indam>Br_____</span> flag.[sound:rec1328957661.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastex0sff6.jpg' /></span>","BACK":"<span style=' '>-It's the <span class=indam>Braz</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>lian</span> flag.[sound:rec1328957666.mp3]<br /><br /></span><br><span style=''><i>Braz</i><span style='font-style:italic; color:#ff0909;'>i</span><i>lian (adj.) - бразильский</i><br><i>Braz</i><span style='font-style:italic; color:#ff0909;'>i</span><i>l (n.) - Бразилия</i><br /></span>","INFO":null,"STT":136},
{"FRONT":"<span style=' '>-How do you <span class=indam>sp____</span> 'horse'?<br />-H-O-R-S-E[sound:rec1320149536.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5zj7wg.jpg' /></span>","BACK":"<span style=' '>-How do you <span class=indam>spell</span> horse?[sound:rec1320149546.mp3]<br /><br /></span><br><span style=''><i>to spell - произносить или писать по буквам</i></span>","INFO":null,"STT":145},
{"FRONT":"What's this?[sound:rec1312403031.mp3]<br><span style=' '><br /><img class='center-block img-responsive hinhdep'  src='pastegupklv.jpg' /></span>","BACK":"It's <span style=' '><span class=indam>a tree</span>[sound:rec1312403934.mp3]</span><br><span style=''><i>a tree - дерево</i></span>","INFO":null,"STT":65},
{"FRONT":"<span style=' '>At school, pupils study in a <span class=indam>cl_____</span>.[sound:rec1329137746.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezdusha.png' /></span>","BACK":"<span style=' '>At school, pupils study in a <span class=indam>classroom</span>.[sound:rec1312403590.mp3]<br /></span><br><span style=''><i>a classroom - класс</i></span>","INFO":null,"STT":51},
{"FRONT":"<span style=' '>This is my <span class=indam>h____</span>.[sound:rec1329137602.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebhfxjr.png' /></span>","BACK":"<span style=' '>This is my <span class=indam>horse</span>.[sound:rec1329137607.mp3]<br /><br /></span><br><span style=''><i>a horse - лошадь</i></span>","INFO":null,"STT":197},
{"FRONT":"<span style=' '>What car is it?[sound:rec1328961055.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefoz8mz.png' /></span>","BACK":"<span style=' '>It's a <span class=indam>BMW</span>.[sound:rec1328961047.mp3]</span><br><span style=''></span>","INFO":null,"STT":149},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) the credit card<br />b) the credit cards<br />[sound:rec1312402204.mp3]</span>","BACK":"<span style=' '><span class=indam>b) the credit cards</span>[sound:rec1312402204.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":118},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) page 13<br />b) page 30<br />[sound:rec1339663393.mp3]</span>","BACK":"<span style=' '><span class=indam>b) page 30</span>[sound:rec1339663393.mp3]</span><br><span style=''></span>","INFO":null,"STT":120},
{"FRONT":"<span style=' '>Cambridge is a nice <span class=indam>t____</span>. <i>(a place smaller than a city)</i>[sound:rec1328959519.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecs1on4.jpg' /></span>","BACK":"<span style=' '>Cambridge is a nice <span class=indam>town</span>.[sound:rec1328959524.mp3]<br /><br /><br /></span><br><span style=''><i>a town - городок</i></span>","INFO":null,"STT":64},
{"FRONT":"<span style=' '>Where are they from?<br />They're from <span class=indam>En____</span>.[sound:rec1328957076.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteppij7h.jpg' /></span>","BACK":"<span style=' '>They're from <span class=indam>England</span>.[sound:rec1328957082.mp3]<br /><br /></span><br><span style=''><i>England (n.) - Англия</i><br><i>English (adj.) - английский</i><br /><br /></span>","INFO":null,"STT":24},
{"FRONT":"<span style=' '>Please can I have a <span class=indam>p___</span>?[sound:rec1329137260.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pen.jpg' /></span>","BACK":"<span style=' '>Please can I have a <span class=indam>pen</span>?[sound:rec1329137264.mp3]<br /></span><br><span style=''><i>a pen - ручка</i></span>","INFO":null,"STT":174},
{"FRONT":"<span style=' '>How do you spell <span class=indam>_____</span>?[sound:rec1336208185.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexs35ol.png' /></span>","BACK":"<span style=' '><span class=indam>D-U-C-K</span>[sound:rec1336208193.mp3]</span><br><span style=''><i>a duck - утка</i></span>","INFO":null,"STT":203},
{"FRONT":"<span style=' '>Is this your <span class=indam>c____ c____</span>?[sound:rec1329136993.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastel5malh.jpg' /></span>","BACK":"<span style=' '>Is this your <span class=indam>credit card</span>?[sound:rec1329137167.mp3]<br /><br /></span><br><span style=''><i>a credit card - кредитная карточка</i></span>","INFO":null,"STT":166},
{"FRONT":"<span style=' '>Where's this man from?[sound:rec1328957148.mp3]<br />He's from <span class=indam>Fr____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastelnqox6.png' /><img class='center-block img-responsive hinhdep'  src='pasten3hj8t.png' /></span>","BACK":"<span style=' '>He's from <span class=indam>France.</span>[sound:rec1328957165.mp3]<br /><br /></span><br><span style=''><i>France (n.) - Франция</i><br /><i>French (adj.) - французский</i><br /><br /></span>","INFO":null,"STT":26},
{"FRONT":"<span style=' '>What country is it?<br /><img class='center-block img-responsive hinhdep'  src='pastenopsnj.jpg' />[sound:rec1320149604.mp3]</span>","BACK":"<span style=' '>It's <b>the</b> <span class=indam>UK</span>.[sound:rec1320149609.mp3]</span><br><span style=''><i>the UK - Великобритания /&nbsp;&nbsp;Соединённое Королевство</i></span>","INFO":null,"STT":150},
{"FRONT":"<span style=' '>I don't have a <span class=indam>t_____</span>.[sound:rec1329137491.mp3]<br /><img class='center-block img-responsive hinhdep'  src='television.jpg' /></span>","BACK":"<span style=' '>I don't have a <span class=indam>television</span>.[sound:rec1329137498.mp3]<br /><i>or</i><br />I don't have a <span class=indam>T.V.</span>.</span><br><span style=''><i>a television / a T.V. - телевизор</i></span>","INFO":null,"STT":189},
{"FRONT":"<span style=' '>Look at the <span class=indam>a_____</span>![sound:rec1329137402.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqrqiyb.png' /></span>","BACK":"<span style=' '>Look at the <span style='font-weight:600; color:#ff5500;'>ai</span><span class=indam>rport</span>![sound:rec1329137407.mp3]</span><br><span style=''><i>an airport - аэропорт</i></span>","INFO":null,"STT":182},
{"FRONT":"<span style=' '>Children go to <span class=indam>s____</span>.[sound:rec1328959603.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewypg9j.png' /></span>","BACK":"<span style=' '>Children go to <span class=indam>school.</span>[sound:rec1328959607.mp3]</span><br><span style=''><i>a school - школа</i></span>","INFO":null,"STT":60},
{"FRONT":"What are these?[sound:rec1312403206.mp3]<br><span style=' '><br /><img class='center-block img-responsive hinhdep'  src='sunglasses.jpg' /></span>","BACK":"They're <span style=' '><span class=indam>s</span><span style='font-weight:600; color:#ff5500;'>u</span><span class=indam>nglasses</span>[sound:rec1312403527.mp3]</span><br><span style=''><i>s</i><span style='font-style:italic; color:#ff0909;'>u</span><i>nglasses - солнцезащитные очки</i></span>","INFO":null,"STT":47},
{"FRONT":"<span style=' '>What country is it?<br /><img class='center-block img-responsive hinhdep'  src='pasteouybpy.png' />[sound:rec1320149617.mp3]</span>","BACK":"<span style=' '>It's <b>the</b> <span class=indam>USA</span>.[sound:rec1320149623.mp3]</span><br><span style=''><i>the USA - США</i></span>","INFO":null,"STT":151},
{"FRONT":"<span style=' '>There are 26 letters in <b>the</b> <span class=indam>al_____</span>.[sound:rec1329136915.mp3]<br /><img class='center-block img-responsive hinhdep'  src='alphabet-canvas.jpg' /></span>","BACK":"<span style=' '>There are 26 letters in <b>the</b> <span class=indam>alphabet</span>.[sound:rec1329136921.mp3]<br /></span><br><span style=''><i>an alphabet - алфавит</i></span>","INFO":null,"STT":164},
{"FRONT":"<span style=' '>I want to buy some <span class=indam>b___</span>.[sound:rec1329137432.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegthevb.jpg' /></span>","BACK":"<span style=' '>I want to buy some <span class=indam>boots</span>.[sound:rec1329137436.mp3]<br /><br /></span><br><span style=''><i>a boot - ботинок, сапог</i></span>","INFO":null,"STT":184},
{"FRONT":"<span style=' '>&quot;Look at <span class=indam>___</span> new phone.&quot; <b>(I)</b>[sound:rec1328958786.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteocq5w0.jpg' /></span>","BACK":"<span style=' '>&quot;Look at <span class=indam>my</span> new phone.&quot;[sound:rec1328958792.mp3]<br /></span><br><span style=''><i>my - мой</i></span>","INFO":null,"STT":77},
{"FRONT":"<span style=' '>Where are you from?<br />&quot;I'm from <span class=indam>Ger___</span>.&quot;[sound:rec1328957189.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepi9lqm.jpg' /></span>","BACK":"<span style=' '>&quot;I'm from <span class=indam>Germany</span>.&quot;[sound:rec1328957209.mp3]<br /><br /></span><br><span style=''><i>G</i><span style='font-style:italic; color:#ff5500;'>e</span><i>rmany (n.) - Германия</i><br><i>G</i><span style='font-style:italic; color:#ff5500;'>e</span><i>rman (adj.) - немецкий</i><br /><br /></span>","INFO":null,"STT":28},
{"FRONT":"<span style=' '>I have a <span class=indam>c___</span>.[sound:rec1329137443.mp3]<br /><img class='center-block img-responsive hinhdep'  src='сф.jpg' /></span>","BACK":"<span style=' '>I have a <span class=indam>cat</span>.[sound:rec1329137448.mp3]<br /><br /></span><br><span style=''><i>a cat - кот, кошка</i></span>","INFO":null,"STT":185},
{"FRONT":"<span style=' '>-What's the time?[sound:rec1329137323.mp3]<br />-Look at my <span class=indam>w____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasteejcjjg.png' /></span>","BACK":"<span style=' '>-What's the time?<br />-Look at my <span class=indam>watch</span>.[sound:rec1329137328.mp3]<br /><br /></span><br><span style=''><i>a watch - часы (карманные, ручные)</i></span>","INFO":null,"STT":178},
{"FRONT":"<span style=' '>-What <span class=indam>[...]</span> these?[sound:rec1328957729.mp3]<br />-They'<span class=indam>[...]</span> coins.<br /><img class='center-block img-responsive hinhdep'  src='pastef8hl_a.png' /></span>","BACK":"<span style=' '>-What <span class=indam>are</span> these?[sound:rec1328957739.mp3]<br />-They'<span class=indam>re</span> coins.<br /></span><br><span style=''></span>","INFO":null,"STT":163},
{"FRONT":"<span style=' '>-<span class=indam>W____</span> your first name?<br />-Vladimir.[sound:rec1320150066.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepke3be.png' /></span>","BACK":"<span style=' '>-<span class=indam>What's</span> your first name?[sound:rec1320149745.mp3]<br />-Vladimir.<br /><br /></span><br><span style=''><i>what's = what is</i></span>","INFO":null,"STT":155},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) Gate number 14<br />b) Gate number 40<br />[sound:rec1339663410.mp3]</span>","BACK":"<span style=' '><span class=indam>a) Gate number 14</span>[sound:rec1339663410.mp3]</span><br><span style=''></span>","INFO":null,"STT":121},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401801.mp3]</span>","BACK":"<span style=' '><i>Today's Sunday. What was yesterday?</i><br /><br /><span class=indam>Saturday</span>[sound:rec1312404426.mp3]</span><br><span style=''><i>Saturday - суббота</i></span>","INFO":null,"STT":107},
{"FRONT":"<span style=' '>We say one <span class=indam>w</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>man</span>, but a group of <span class=indam>w____</span>.[sound:rec1328960026.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteekl7zp.png' /></span>","BACK":"<span style=' '>... a group of <span class=indam>w</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>men</span>.[sound:rec1312404006.mp3]</span><br><span style=''><i>a woman - женщина</i><br /><i>women - женщины</i></span>","INFO":null,"STT":67},
{"FRONT":"<span style=' '>How do you spell <span class=indam>____</span> ?[sound:rec1320149580.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiwprek.jpg' /></span>","BACK":"<span style=' '><span class=indam>C-A-K-E</span>[sound:rec1320149587.mp3]</span><br><span style=''><i>a cake - торт, пирожное</i></span>","INFO":null,"STT":148},
{"FRONT":"<span style=' '>&quot;Hello! I<span class=indam>___</span> Anna!&quot;<br /><img class='center-block img-responsive hinhdep'  src='girl smiling.jpg' /></span>","BACK":"<span style=' '>&quot;Hello! I<span class=indam>'m</span> Anna!&quot;[sound:rec1312404017.mp3]<br /><i>(I </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>am</span><i> Anna)</i></span><br><span style=''></span>","INFO":null,"STT":68},
{"FRONT":"<span style=' '>&quot;Are you ready, Yuri?&quot;<br />-&quot;Yes. <span class=indam>L___</span> <span class=indam>g__</span>!&quot;[sound:rec1328957700.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelufubf.png' /></span>","BACK":"<span style=' '><span class=indam>Let's go!</span>[sound:rec1315839648.mp3]</span><br><span style=''><i>Let's go! - Поехали!</i></span>","INFO":null,"STT":141},
{"FRONT":"<span style=' '>Give me your <span class=indam>w_____</span>![sound:rec1329137644.mp3]<br /><img class='center-block img-responsive hinhdep'  src='wallet.gif' /></span>","BACK":"<span style=' '>Give me your <span class=indam>wallet</span>![sound:rec1329137649.mp3]<br /><br /></span><br><span style=''><i>a wallet (usually for men) - бумажник (обычно для мужчин)</i></span>","INFO":null,"STT":199},
{"FRONT":"<span style=' '>It isn't Chinese. It's <span class=indam>Ja______</span>.[sound:rec1328957369.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasted0xkd3.jpg' /></span>","BACK":"<span style=' '>It's <span class=indam>Japan</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>se</span>.[sound:rec1328957408.mp3]<br /><br /></span><br><span style=''><i>Japan</i><span style='font-style:italic; color:#ff0909;'>e</span><i>se (adj.) - японский</i><br /><i>Jap</i><span style='font-style:italic; color:#ff0909;'>a</span><i>n (n.) - Япония</i></span>","INFO":null,"STT":35},
{"FRONT":"<span style=' '>Do you have <span class=indam>[...]</span> umbrella?[sound:rec1329137360.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiugq9y.png' /></span>","BACK":"<span style=' '>Do you have <span class=indam>an</span> umbrella?[sound:rec1329137380.mp3]<br /><br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>an</span><i> umbr</i><span style='font-style:italic; color:#ff5500;'>e</span><i>lla - зонт</i></span>","INFO":null,"STT":181},
{"FRONT":"<span style=' '>How do you spell <span class=indam>____</span> ?[sound:rec1320149628.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegu7hqa.png' /></span>","BACK":"<span style=' '><span class=indam>C-A-R</span>[sound:rec1320149634.mp3]</span><br><span style=''><i>a car - машина</i></span>","INFO":null,"STT":152},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) Where's he from?<br />b) Where's she from?<br />[sound:rec1312402002.mp3]</span>","BACK":"<span style=' '><span class=indam>b) Where's she from?</span>[sound:rec1312402002.mp3]</span><br><span style=''></span>","INFO":null,"STT":110},
{"FRONT":"<span style=' '>&quot;<span class=indam>W____</span> to England! How was your flight?&quot;[sound:rec1328959967.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten2fi8n.jpg' /></span>","BACK":"<span style=' '><span class=indam>Welcome</span> to England![sound:rec1328959976.mp3]</span><br><span style=''><i>Welcome! - Добро пожаловать!</i></span>","INFO":null,"STT":139},
{"FRONT":"<span style=' '>How do you spell <span class=indam>_____</span>?[sound:rec1336208219.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyafjwr.png' /></span>","BACK":"<span style=' '><span class=indam>P-E-N</span>[sound:rec1336208225.mp3]</span><br><span style=''><i>a pen - ручка</i></span>","INFO":null,"STT":205},
{"FRONT":"<span style=' '>She has received a <span class=indam>t___ m____</span>.[sound:rec1328960079.mp3]<br /><img class='center-block img-responsive hinhdep'  src='text message.jpg' /></span>","BACK":"<span style=' '> a <span class=indam>text message</span>.[sound:rec1312403913.mp3]</span><br><span style=''><i>a text message - текстовое сообщение, смс</i></span>","INFO":null,"STT":63},
{"FRONT":"<span style=' '>How old are you?[sound:rec1336207736.mp3]<br />-I'm <span class=indam>(50)</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastepyezsm.png' /></span>","BACK":"<span style=' '>How old are you?<br />-I'm <span class=indam>fifty</span>.[sound:rec1336207741.mp3]</span><br><span style=''></span>","INFO":null,"STT":7},
{"FRONT":"<span style=' '>-Are they from America?<br />-No, they aren't. <span class=indam>They_______</span> Britain.[sound:rec1329137892.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebz3zgl.jpg' /></span>","BACK":"<span style=' '>- They<span class=indam>'re from</span> Britain.[sound:rec1312404234.mp3]</span><br><span style=''></span>","INFO":null,"STT":89},
{"FRONT":"<span style=' '>Where are you from?<br />&quot;We're from <span class=indam>Ire___</span>.&quot;[sound:rec1328957240.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastej996gc.jpg' /><img class='center-block img-responsive hinhdep'  src='pastejcq6zo.png' /></span>","BACK":"<span style=' '>&quot;We're from <span class=indam>Ireland</span>.&quot;[sound:rec1328957246.mp3]<br /><br /></span><br><span style=''><i>Ireland (n.) - Ирландия</i><br /><i>Irish (adj.) - ирландский</i><br /></span>","INFO":null,"STT":30},
{"FRONT":"<span style=' '>&quot;What's 'носорог' <span class=indam>____</span> English?&quot;[sound:rec1329137923.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh68anw.jpg' /></span>","BACK":"<span style=' '>&quot;What's 'носорог' <span class=indam>in</span> English?&quot;[sound:rec1329137938.mp3]<br /></span><br><span style=''><i>in English - по-английски / на английском</i></span>","INFO":null,"STT":92},
{"FRONT":"<span style=' '>Where are you from?<br />I'm from <span class=indam>Ch___</span>.[sound:rec1328957049.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb7o9rp.jpg' /></span>","BACK":"<span style=' '>I'm from <span class=indam>China</span>.[sound:rec1328957055.mp3]<br /></span><br><span style=''><i>China (n.) - Китай</i><br><i>Chinese (adj.) - китайский</i><br /></span>","INFO":null,"STT":22},
{"FRONT":"<span style=' '>We have English <span class=indam>le_____</span> on Mondays and Thursdays. <i>(times when we study)</i>[sound:rec1336677483.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_nmh0j.png' /></span>","BACK":"<span style=' '>We have English <span class=indam>lessons</span> on Mondays and Thursdays.[sound:rec1336677490.mp3]<br /><br /></span><br><span style=''><i>a lesson - урок, занятие</i><br></span>","INFO":null,"STT":214},
{"FRONT":"<span style=' '>-Where's it <span class=indam>[...]</span>?[sound:rec1329137787.mp3]<br />-It's from Ireland.<br /><img class='center-block img-responsive hinhdep'  src='paster98s0m.png' /></span>","BACK":"<span style=' '>-Where's it <span class=indam>from</span>?[sound:rec1312404166.mp3]<br />-It's from Ireland.</span><br><span style=''></span>","INFO":null,"STT":81},
{"FRONT":"<span style=' '>This is Microsoft Windows <span class=indam>(98)</span>.[sound:rec1336207834.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteic4go3.png' /></span>","BACK":"<span style=' '>This is Microsoft Windows <span class=indam>ninety-eight</span>.[sound:rec1336207855.mp3]</span><br><span style=''></span>","INFO":null,"STT":16},
{"FRONT":"<span style=' '>-How <span class=indam>___</span> are you?[sound:rec1336207979.mp3]<br />-I'm 8.<br /><img class='center-block img-responsive hinhdep'  src='pastewqyz0p.png' /></span>","BACK":"<span style=' '>-How <span class=indam>old</span> are you?[sound:rec1328960381.mp3]<br />-I'm 8.<br /></span><br><span style=''><span style='font-style:italic; color:#000000;'>How old are you? - Сколько тебе / Вам лет?</span></span>","INFO":null,"STT":156},
{"FRONT":"<span style=' '>-Is it from Scotland?[sound:rec1317668993.mp3]<br />-No, it <span class=indam>____</span>. It's from Ireland.<br /><img class='center-block img-responsive hinhdep'  src='paster98s0m.png' /></span>","BACK":"<span style=' '>-No, it <span class=indam>isn't</span>. It's from Ireland.[sound:rec1312404189.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":84},
{"FRONT":"<span style=' '>This film is called '<span class=indam>(21) </span>grams'.[sound:rec1336207644.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7mvobe.png' /></span>","BACK":"<span style=' '>This film is called '<span class=indam>Twenty-one</span> grams'.[sound:rec1336207654.mp3]</span><br><span style=''></span>","INFO":null,"STT":2},
{"FRONT":"<span style=' '>&quot;I'm Anna. I'm 13 <span class=indam>y____</span> old.&quot;[sound:rec1336208018.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoq0tdp.jpg' /></span>","BACK":"<span style=' '>&quot;I'm Anna. I'm 13 <span class=indam>years</span> old.&quot;[sound:rec1336208025.mp3]<br /><br /><br /></span><br><span style=''><i>a year - год</i></span>","INFO":null,"STT":157},
{"FRONT":"<span style=' '>She isn't French, she's <span class=indam>Br____</span>![sound:rec1328957001.mp3]<br /><img class='center-block img-responsive hinhdep'  src='queen.jpg' /></span>","BACK":"<span style=' '>She's <span class=indam>British</span>.[sound:rec1328957007.mp3]<br /><br /></span><br><span style=''><i>British (adj.) - британский</i><br /><i>Britain (n.) - Британия</i></span>","INFO":null,"STT":21},
{"FRONT":"<span style=' '>&quot;We<span class=indam>___</span> students.&quot;[sound:rec1328958056.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuoqnkk.jpg' /><br /></span>","BACK":"<span style=' '>&quot;We<span class=indam>'re</span> students.&quot;[sound:rec1312404035.mp3]<br /><i>(We </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>are</span><i> students.)</i></span><br><span style=''></span>","INFO":null,"STT":71},
{"FRONT":"<span style=' '>&quot;Welcome to the hotel. You<span class=indam>[...]</span> in room 35.&quot;[sound:rec1328958244.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecycetz.png' /></span>","BACK":"<span style=' '>&quot;Welcome to the hotel. You<span class=indam>'re</span> in room 35.&quot;[sound:rec1328958253.mp3]<br /><i>(You </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>are</span><i> in room 35.)</i><br /></span><br><span style=''></span>","INFO":null,"STT":70},
{"FRONT":"<span style=' '>His <span class=indam>h____</span> is in his pocket.[sound:rec1328958984.mp3]<br /><img class='center-block img-responsive hinhdep'  src='hand in pocket.jpg' /></span>","BACK":"<span style=' '>His <span class=indam>hand</span> is in his pocket.[sound:rec1312403719.mp3]<br /><br /></span><br><span style=''><i>a hand - рука (кисть)</i></span>","INFO":null,"STT":56},
{"FRONT":"<span style=' '>This man isn't German, he's <span class=indam>Fr____</span>.[sound:rec1328957174.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelnqox6.png' /><img class='center-block img-responsive hinhdep'  src='pasten3hj8t.png' /></span>","BACK":"<span style=' '>He's <span class=indam>French</span>.[sound:rec1328957180.mp3]<br /></span><br><span style=''><i>French (adj.) - французский</i><br /><i>France (n.) - Франция</i></span>","INFO":null,"STT":27},
{"FRONT":"<span style=' '>This whiskey is from <span class=indam>Sco____</span>.[sound:rec1329137700.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev81iy6.png' /><img class='center-block img-responsive hinhdep'  src='pasteumldl8.png' /></span>","BACK":"<span style=' '>This whiskey is from <span class=indam>Sc</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>tland</span>.[sound:rec1329137706.mp3]<br /><br /></span><br><span style=''><i>S</i><span style='font-style:italic; color:#000000;'>cotl</span><i>and (n.) - Шотландия</i><br /><i>Scottish (adj.) - шотландский</i><br /></span>","INFO":null,"STT":40},
{"FRONT":"<span style=' '>This is my grandfather. He's <span class=indam>(89)</span> years old![sound:rec1336207802.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuqiihg.png' /></span>","BACK":"<span style=' '>This is my grandfather. He's <span class=indam>eighty-nine</span> years old![sound:rec1336207809.mp3]</span><br><span style=''></span>","INFO":null,"STT":14},
{"FRONT":"<span style=' '>-Where<span class=indam>___</span> it from?<br />-It's from Ireland.<br /><img class='center-block img-responsive hinhdep'  src='paster98s0m.png' /></span>","BACK":"<span style=' '>-Where<span class=indam>'s</span> it from?[sound:rec1312404161.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":80},
{"FRONT":"<span style=' '>&quot;How do you <span class=indam>s____</span> 'Llandaff'?&quot;[sound:rec1317669686.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqxcsmu.png' /></span>","BACK":"<span style=' '>&quot;How do you <span class=indam>say</span> it?&quot;[sound:rec1317669723.mp3]<br /><br /><i>(It's a place in Wales!)</i><br /></span><br><span style=''><i>How do you say ...? - Как сказать ...?</i></span>","INFO":null,"STT":91},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) 12 people<br />b) 20 people<br />[sound:rec1339663589.mp3]</span>","BACK":"<span style=' '><span class=indam>b) 12 people</span>[sound:rec1339663589.mp3]</span><br><span style=''></span>","INFO":null,"STT":130},
{"FRONT":"<span style=' '>Do you have a <span class=indam>li____</span>?[sound:rec1329137207.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastew0n1za.png' /></span>","BACK":"<span style=' '>Do you have a <span class=indam>lighter</span>?[sound:rec1329137212.mp3]<br /><br /></span><br><span style=''><i>a lighter - зажигалка</i></span>","INFO":null,"STT":170},
{"FRONT":"<span style=' '>&quot;You have lots of bags. Can I help you?&quot;[sound:rec1315840040.mp3]<br />-&quot;No thanks, it's <span class=indam>o____</span>.&quot;<br /><img class='center-block img-responsive hinhdep'  src='pastecfoxcw.jpg' /></span>","BACK":"<span style=' '>&quot;No thanks, it's <span class=indam>okay</span>.&quot;[sound:rec1315840051.mp3]<br /></span><br><span style=''><span style='font-style:italic; color:#000000;'>it's okay - ничего / все в порядке</span></span>","INFO":null,"STT":143},
{"FRONT":"<span style=' '>Where's the <span class=indam>___ _____</span>?[sound:rec1329137454.mp3]<br /><img class='center-block img-responsive hinhdep'  src='cd player.jpg' /></span>","BACK":"<span style=' '>Where's the <span class=indam>CD player</span>?[sound:rec1329137458.mp3]<br /><br /></span><br><span style=''><i>a CD player - сидиплеер, проигрыватель компакт-дисков</i></span>","INFO":null,"STT":186},
{"FRONT":"<span style=' '>They aren't Scottish, they're <span class=indam>En_____</span>.[sound:rec1328957092.mp3]<br /><img class='center-block img-responsive hinhdep'  src='england football team.jpg' /></span>","BACK":"<span style=' '>They're <span class=indam>English</span>.[sound:rec1328957105.mp3]<br /><br /><br /></span><br><span style=''><i>English (adj.) - английский</i><br /><i>England (n.) - Англия</i></span>","INFO":null,"STT":25},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1315837949.mp3]</span>","BACK":"<span style=' '><i>Today's Monday. What's tomorrow?</i><br /><br /><span class=indam>Tuesday</span>[sound:rec1312404363.mp3]</span><br><span style=''><i>Tuesday - вторник</i></span>","INFO":null,"STT":96},
{"FRONT":"<span style=' '>&quot;Let's get a taxi to the city centre.&quot;<br />-&quot;How <span class=indam>f___</span> is it?&quot;<br />&quot;About 30 minutes.&quot;[sound:rec1315839506.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesofapf.jpg' /></span>","BACK":"<span style=' '>&quot;How <span class=indam>far</span> is it?&quot;[sound:rec1315839519.mp3]<br /><br /></span><br><span style=''><i>how far ...? - как далеко ...?</i></span>","INFO":null,"STT":140},
{"FRONT":"<span style=' '>Please can you <span class=indam>c____</span> the door? <i>(the opposite of 'open')</i>[sound:rec1336208353.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3x5uvw.png' /></span>","BACK":"<span style=' '>Please can you <span class=indam>close</span> the door?[sound:rec1336208451.mp3]<br /><br /></span><br><span style=''><i>to close sth. - закрывать что-л.</i></span>","INFO":null,"STT":212},
{"FRONT":"<span style=' '>How do you spell <span class=indam>____</span> ?[sound:rec1320149858.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehcakhu.png' /></span>","BACK":"<span style=' '><span class=indam>F-L-Y</span>[sound:rec1320149863.mp3]</span><br><span style=''><i>to fly -&nbsp;&nbsp;летать</i></span>","INFO":null,"STT":159},
{"FRONT":"<span style=' '>How many roubles is it?[sound:rec1336207894.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste6mhmc_.png' /></span>","BACK":"<span style=' '>It's <span class=indam>a thousand</span> roubles.[sound:rec1336207909.mp3]<br /><i>or</i><br />It's <span class=indam>one thousand</span> roubles.</span><br><span style=''></span>","INFO":null,"STT":19},
{"FRONT":"<span style=' '>Next Tuesday? Let me look in my <span class=indam>d___</span>.[sound:rec1329137013.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep0jred.png' /></span>","BACK":"<span style=' '>Next Tuesday? Let me look in my <span class=indam>diary</span>.[sound:rec1329137018.mp3]<br /></span><br><span style=''><i>a diary - дневник, ежеднивник</i></span>","INFO":null,"STT":167},
{"FRONT":"<span style=' '>Please can you <span class=indam>o____</span> the window? <i>(the opposite of 'close')</i>[sound:rec1336208423.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8ututk.png' /></span>","BACK":"<span style=' '>Please can you <span class=indam>open</span> the window?[sound:rec1336208434.mp3]</span><br><span style=''><i>to open sth. - открывать что-л.</i></span>","INFO":null,"STT":213},
{"FRONT":"<span style=' '>Is this your <span class=indam>d_____</span>?[sound:rec1329137144.mp3]<br /><img class='center-block img-responsive hinhdep'  src='dictionary1.jpg' /></span>","BACK":"<span style=' '>Is this your <span class=indam>dictionary</span>?[sound:rec1329137150.mp3]<br /><br /><br /></span><br><span style=''><i>a dictionary - словарь</i></span>","INFO":null,"STT":168},
{"FRONT":"<span style=' '>&quot;Please switch <span class=indam>____</span> your mobile phones!&quot;[sound:rec1312404343.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegx7sdc.png' /></span>","BACK":"<span style=' '>&quot;Please switch <span class=indam>off</span> your mobile phones!&quot;[sound:rec1312404334.mp3]</span><br><span style=''><i>to switch off sth. - выключать что-л.</i></span>","INFO":null,"STT":94},
{"FRONT":"<span style=' '>&quot;What's <span class=indam>t___</span>?&quot;<br />-&quot;It's a hotel.&quot;<br /><img class='center-block img-responsive hinhdep'  src='pasteffrwxu.png' /></span>","BACK":"<span style=' '>&quot;What's <span class=indam>that</span>?&quot;<br />-&quot;It's a hotel.&quot;[sound:rec1312404108.mp3]</span><br><span style=''></span>","INFO":null,"STT":78},
{"FRONT":"<span style=' '>[sound:rec1328959291.mp3]<img class='center-block img-responsive hinhdep'  src='pasted6yijb.png' /></span>","BACK":"<span style=' '><i>How do you say this number?</i><br /><br /><span class=indam>eighty</span>[sound:rec1312405901.mp3]</span><br><span style=''></span>","INFO":null,"STT":13},
{"FRONT":"What are these?[sound:rec1312403206.mp3]<br><span style=' '><br /><img class='center-block img-responsive hinhdep'  src='pasteofx5ri.png' /></span>","BACK":"They're <span style=' '><span class=indam>magazines</span>[sound:rec1312403379.mp3]<br /><br /></span><br><span style=''><i>a magazine - журнал</i></span>","INFO":null,"STT":44},
{"FRONT":"<span style=' '>[sound:rec1328959291.mp3]<img class='center-block img-responsive hinhdep'  src='pastet_3cmo.png' /></span>","BACK":"<span style=' '><i>How do you say this number?</i><br /><br /><span class=indam>seventy-five</span>[sound:rec1312405898.mp3]</span><br><span style=''></span>","INFO":null,"STT":12},
{"FRONT":"<span style=' '><br />How do you spell <span class=indam>_____</span>?[sound:rec1336208305.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecpunpd.png' /></span>","BACK":"<span style=' '><span class=indam>F-O-X</span>[sound:rec1336208311.mp3]</span><br><span style=''><i>a fox - лиса, лис</i></span>","INFO":null,"STT":209},
{"FRONT":"<span style=' '>We say one <span class=indam>child</span>, but lots of <span class=indam>ch_____</span>.[sound:rec1329137775.mp3]<br /><img class='center-block img-responsive hinhdep'  src='children-jump.jpg' /></span>","BACK":"<span style=' '>We say one <span class=indam>child</span>, but lots of <span class=indam>children</span>.[sound:rec1312403816.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>a child - ребенок</span><br /><i>children - дети</i></span>","INFO":null,"STT":59},
{"FRONT":"<span style=' '>The tango is an <span class=indam>Arg_____</span> dance.[sound:rec1312405717.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetteknr.jpg' /><img class='center-block img-responsive hinhdep'  src='paster10flr.png' /></span>","BACK":"<span style=' '>The tango is an <span class=indam>Argent</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>nian</span> dance.[sound:rec1312406030.mp3]<br /><br /></span><br><span style=''><i>Argent</i><span style='font-style:italic; color:#ff0909;'>i</span><i>nian (adj.) - аргентинский</i><br><i>Argent</i><span style='font-style:italic; color:#ff0909;'>i</span><i>na (n.) - Аргентина</i><br /></span>","INFO":null,"STT":137},
{"FRONT":"<span style=' '>Meat from a cow is called <span class=indam>b____</span>.[sound:rec1315838853.mp3]<br /><img class='center-block img-responsive hinhdep'  src='beef.jpg' /></span>","BACK":"<span style=' '>Meat from a cow is called <span class=indam>beef</span><span style='color:#000000;'>.</span>[sound:rec1315838859.mp3]</span><br><span style=''><i>beef (n.) - говядина</i></span>","INFO":null,"STT":57},
{"FRONT":"<span style=' '>-<span class=indam>[...]</span> old are you?[sound:rec1336208337.mp3]<br />-I'm 8.<br /><img class='center-block img-responsive hinhdep'  src='pastewqyz0p.png' /></span>","BACK":"<span style=' '>-<span class=indam>How</span> old are you?<br />-I'm 8.[sound:rec1336208344.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>How old are you? - Сколько тебе / Вам лет?</span></span>","INFO":null,"STT":211},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) What's his name?<br />b) What's her name?<br />[sound:rec1339663356.mp3]</span>","BACK":"<span style=' '><span class=indam>b) What's her name?</span>[sound:rec1339663356.mp3]</span><br><span style=''></span>","INFO":null,"STT":116},
{"FRONT":"<span style=' '>This is my grandmother. She's <span class=indam>(90)</span> years old.[sound:rec1336207819.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteddzsgt.jpg' /></span>","BACK":"<span style=' '>This is my grandmother. She's <span class=indam>ninety</span> years old.[sound:rec1336207827.mp3]</span><br><span style=''></span>","INFO":null,"STT":15},
{"FRONT":"<span style=' '>[sound:rec1328959291.mp3]<img class='center-block img-responsive hinhdep'  src='pastemkciel.png' /></span>","BACK":"<span style=' '><i>How do you say this number?</i><br /><br /><span class=indam>fifty-three</span>[sound:rec1312405873.mp3]</span><br><span style=''></span>","INFO":null,"STT":8},
{"FRONT":"<span style=' '>LISTEN! Which day of the week is it?<br />[sound:rec1312401770.mp3]</span>","BACK":"<span style=' '><i>Today's Saturday. What was yesterday?</i><br /><br /><span class=indam>Friday</span>[sound:rec1312404423.mp3]</span><br><span style=''><i>Friday - пятница</i></span>","INFO":null,"STT":106},
{"FRONT":"<span style=' '>How do you spell <span class=indam>_____</span>?[sound:rec1336208318.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeahzuc.png' /></span>","BACK":"<span style=' '><span class=indam>Z-E-B-R-A</span>[sound:rec1336208326.mp3]</span><br><span style=''><i>a zebra</i></span>","INFO":null,"STT":210},
{"FRONT":"<span style=' '>LISTEN! What does he say?<br /><br />a) She's French.<br />b) She isn't French.<br />[sound:rec1339663309.mp3]</span>","BACK":"<span style=' '><span class=indam>b) She isn't French.</span>[sound:rec1339663309.mp3]</span><br><span style=''></span>","INFO":null,"STT":114},
{"FRONT":"<span style=' '>[sound:rec1312405588.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paster93usd.png' /></span>","BACK":"<span style=' '><span class=indam>C</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>nada</span>[sound:rec1312405583.mp3]<br /><br /></span><br><span style=''><i>C</i><span style='font-style:italic; color:#ff0909;'>a</span><i>nada (n.) - Канада</i><br /><i>Can</i><span style='font-style:italic; color:#ff0909;'>a</span><i>dian (adj.) - канадский</i></span>","INFO":null,"STT":131},
{"FRONT":"<span style=' '>How many dogs are there?[sound:rec1336207776.mp3]<br />-There are <span class=indam>(70)</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastehj2os1.png' /></span>","BACK":"<span style=' '>There are <span class=indam>seventy</span>.[sound:rec1336207781.mp3]</span><br><span style=''></span>","INFO":null,"STT":11}]

if (localStorage.caumayEn_SG_1 == null) {
    localStorage.caumayEn_SG_1 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_1"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_1+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_1).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_1).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_1).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_1+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_1).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_1).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_1).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_1)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_1))
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
	cau = Number(localStorage.caumayEn_SG_1)
	$("#preloadimg").html("")
	for (i = cau-4; i <= cau+4; i++) {
		if( i >=0 && i < dulieu.length){
			var l = linksoundimg(dulieu[i].FRONT)
			$("#preloadimg").append("<img src='" +host+l.img+ "'></img>")
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_1)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_1) >  0){
		localStorage.caumayEn_SG_1 = Number(localStorage.caumayEn_SG_1) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_1))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_1)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_1)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_1) < dulieu.length-1){
		localStorage.caumayEn_SG_1 = Number(localStorage.caumayEn_SG_1) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_1))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_1)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_1)].BACK
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
	var current_player = Number(localStorage.caumayEn_SG_1)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_1)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_1)].BACK
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
	cau = Number(localStorage.caumayEn_SG_1)
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
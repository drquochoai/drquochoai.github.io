$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '>I want to eat!<b> I'm </b><span class=indam>h_____</span><b>!</b>[sound:rec1340632489.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesbikw2.png' /></span>","BACK":"<span style='font-size: 28px; '>I want to eat! <b>I'm </b><span class=indam>hungry</span><b>!</b>[sound:rec1340632493.mp3]</span><br><span style=''><i>hungry (adj.) - голодный</i></span>","STT":0},
{"FRONT":"<span style='font-size: 28px; '>Last week some leaves <span class=indam>____</span> on my neighbour's car.<b> (</b><span style='font-weight:600; color:#000000;'>fall</span><b>)</b>[sound:rec1361876815.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemvfyt8.png' /></span>","BACK":"<span style='font-size: 28px; '>Last week some leaves <span class=indam>fell</span> on my neighbour's car. [sound:rec1361876830.mp3]<br /></span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>fall - fell - fallen</span><br /><i>to fall - падать </i></span>","STT":1},
{"FRONT":"<span style='font-size: 28px; '>When I was in India <b>I </b><span class=indam>____</span><b> calm</b>. <b>(</b><span style='font-weight:600; color:#000000;'>feel</span><b>)</b>[sound:rec1361876842.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexxdfhm.jpg' /></span>","BACK":"<span style='font-size: 28px; '>When I was in India <b>I </b><span class=indam>felt</span><b> calm</b>.[sound:rec1361876863.mp3]<br /></span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>feel - felt - felt</span><br /><i>to feel - чувствовать (себя)</i></span>","STT":2},
{"FRONT":"<span style='font-size: 28px; '>She doesn't usually <span class=indam>ring</span> him, but yesterday <b>she </b><span class=indam>r____</span><b> him</b>.<i>(called; phoned)</i>[sound:rec1361876872.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehf8xnd.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Yesterday <b>she </b><span class=indam>r____</span><b> him.</b>[sound:rec1361876883.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>ring - rang - rung</span><br /><i>to ring sb. - звонить кому-л.</i></span>","STT":3},
{"FRONT":"<span style='font-size: 28px; '>In Britain, children usually <span class=indam>s____</span> school when they are 5. <i>(begin)</i>[sound:rec1346511442.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexfldue.png' /></span>","BACK":"<span style='font-size: 28px; '>In Britain, children usually <span class=indam>start</span> school when they are 5.[sound:rec1346511449.mp3]</span><br><span style=''><i>to start - начинать</i></span>","STT":4},
{"FRONT":"<span style='font-size: 28px; '>Ow! <b>My tooth </b><span class=indam>h____</span><b>.</b> <i>(it gives me pain)</i>[sound:rec1359366429.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezidqyl.png' /></span>","BACK":"<span style='font-size: 28px; '>Ow!<b> My tooth </b><span class=indam>hurts</span><b>.</b>[sound:rec1359366434.mp3]</span><br><span style=''></span><br><span style=''><i>to hurt - болеть</i><br></span>","STT":5},
{"FRONT":"<span style='font-size: 28px; '>Ow! <b>I have a </b><span class=indam>head____</span><b>.</b>[sound:rec1359366448.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7laf6w.png' /></span>","BACK":"<span style='font-size: 28px; '><b>I have a </b><span class=indam>headache</span><b>.</b>[sound:rec1359366452.mp3]</span><br><span style=''></span><br><span style=''><i>I have a headache. - У меня болит голова.</i></span>","STT":6},
{"FRONT":"<span style='font-size: 28px; '>I always <span class=indam>s____</span> wine before I drink it. <i>(feel with my nose) </i>[sound:rec1359366472.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteymyk5g.png' /></span>","BACK":"<span style='font-size: 28px; '>I always <span class=indam>smell</span> wine before I drink it.[sound:rec1359366478.mp3]</span><br><span style=''></span><br><span style=''><i>to smell sth. - нюхать, чувствовать запах</i><br /></span>","STT":7},
{"FRONT":"<span style='font-size: 28px; '>This how I <span class=indam>k____</span> his head. <i>(hit with my foot)</i>[sound:rec1359366610.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoeepgq.png' /></span>","BACK":"<span style='font-size: 28px; '>This how I <span class=indam>kick</span> his head.[sound:rec1359366616.mp3]</span><br><span style=''></span><br><span style=''><i>to kick sth. - ударить ногой</i></span>","STT":8},
{"FRONT":"<span style='font-size: 28px; '>Ow! <b>Please don't </b><span class=indam>b___</span><b> my nose! </b><i>(cut with your teeth)</i>[sound:rec1359366634.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0c16fs.png' /></span>","BACK":"<span style='font-size: 28px; '>Ow! <b>Please don't </b><span class=indam>bite</span><b> my nose!</b>[sound:rec1359366638.mp3]</span><br><span style=''></span><br><span style=''><i>to bite sth. - кусать(ся)</i></span>","STT":9},
{"FRONT":"<span style='font-size: 28px; '>The shop <span class=indam>o____</span> at 9am every day except for Sunday. <i>(starts work)</i>[sound:rec1359367265.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqstotm.png' /></span>","BACK":"<span style='font-size: 28px; '>The shop <span class=indam>opens</span> at 9am every day except for Sunday.[sound:rec1359367272.mp3]</span><br><span style=''></span><br><span style=''><i>to open - открывать(ся)</i></span>","STT":10},
{"FRONT":"<span style='font-size: 28px; '>On Fridays the shop <span class=indam>c_____</span> at 4pm. <i>(finishes work)</i>[sound:rec1359367281.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqstotm.png' /></span>","BACK":"<span style='font-size: 28px; '>On Fridays the shop <span class=indam>closes</span> at 4pm.[sound:rec1359367287.mp3]</span><br><span style=''></span><br><span style=''><i>to close - закрывать(ся)</i></span>","STT":11},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>______</span> are things <span style='color:#000000;'>which</span> you use to cut paper with.[sound:rec1359368311.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexxjh2c.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Scissors</span> are things <span style='color:#000000;'>which</span> you use to cut paper with.[sound:rec1359368317.mp3]</span><br><span style=''></span><br><span style=''><i>scissors (n.) - ножницы</i></span>","STT":12},
{"FRONT":"<span style='font-size: 28px; '>Lipstick is something which women <span class=indam>p___</span> on their lips.[sound:rec1359368410.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegnjcwm.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Lipstick is something which women <span class=indam>put</span> on their lips.[sound:rec1359368416.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>put - put - put</span><br /><i>to put - ставить, класть, покрывать, наносить</i></span>","STT":13},
{"FRONT":"<span style='font-size: 28px; '>A <span class=indam>health</span> <span class=indam>s___</span> is a place where you relax and feel good.[sound:rec1359368424.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastek7frh0.jpg' /></span>","BACK":"<span style='font-size: 28px; '>A <span class=indam>health</span> <span class=indam>spa</span> is a place where you relax and feel good.[sound:rec1359368431.mp3]</span><br><span style=''></span><br><span style=''><i>a health spa - санаторий, оздоровительный центр</i></span>","STT":14},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359368523.mp3]<b>I'm waiting at the </b><span class=indam>s_____</span><b>.</b><br /><img class='center-block img-responsive hinhdep'  src='pastehzak0t.png' /></span>","BACK":"<span style='font-size: 28px; '><b>I'm waiting at the </b><span class=indam>station</span><b>.</b>[sound:rec1359368530.mp3]</span><br><span style=''></span><br><span style=''><i>a (train) station - вокзал</i><br></span>","STT":15},
{"FRONT":"<span style='font-size: 28px; '>Welcome to America. <b>It's great to see you </b><span class=indam>a____</span><b>. </b><i>(=we've met before)</i>[sound:rec1359368820.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemahs1a.png' /></span>","BACK":"<span style='font-size: 28px; '>Welcome to America. <b>It's great to see you </b><span class=indam>again</span><b>.</b>[sound:rec1359368825.mp3]</span><br><span style=''></span><br><span style=''><i>again - снова, еще раз</i></span>","STT":16},
{"FRONT":"<span style='font-size: 28px; '>He likes talking to people and having fun. <b>He's an </b><span class=indam>ex____</span><b>.</b>[sound:rec1359369941.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4sndyq.png' /></span>","BACK":"<span style='font-size: 28px; '>He likes talking to people and having fun. <b>He's an </b><span class=indam>extrovert</span><b>.</b>[sound:rec1359369947.mp3]</span><br><span style=''></span><br><span style=''><i>an extrovert - экстраверт, общительный человек</i></span>","STT":17},
{"FRONT":"<span style='font-size: 28px; '>She's shy and prefers being alone. <b>She's an </b><span class=indam>int_____</span><b>.</b>[sound:rec1359369956.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefygvgd.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She's shy and prefers being alone. <b>She's an </b><span class=indam>introvert</span><b>.</b>[sound:rec1359369969.mp3]</span><br><span style=''></span><br><span style=''><i>an introvert - интраверт, застенчивый человек</i></span>","STT":18},
{"FRONT":"<span style='font-size: 28px; '>Bye!<b> I </b><span class=indam>h____</span><b> to see you soon. </b><i>(I want...)</i>[sound:rec1359370262.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehgzs45.png' /></span>","BACK":"<span style='font-size: 28px; '>Bye! <b>I </b><span class=indam>hope</span><b> to see you soon.</b>[sound:rec1359370266.mp3]</span><br><span style=''></span><br><span style=''><i>to hope to do sth. - надеяться</i></span>","STT":19},
{"FRONT":"<span style='font-size: 28px; '>Bye!<b> I hope </b><span class=indam>[...]</span><b> see you soon.</b>[sound:rec1359370262.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehgzs45.png' /></span>","BACK":"<span style='font-size: 28px; '>Bye!<b> I hope </b><span class=indam>to</span><b> see you soon.</b>[sound:rec1359370266.mp3]</span><br><span style=''></span><br><span style=''><i>to hope to do sth. - надеяться</i></span>","STT":20},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359824379.mp3]<span style='font-weight:600; color:#000000;'>I think we'll go </span><span class=indam>s______</span><span style='font-weight:600; color:#000000;'>.</span><br /><img class='center-block img-responsive hinhdep'  src='pastevvt6cv.png' /></span>","BACK":"<span style='font-size: 28px; '><span style='font-weight:600; color:#000000;'>I think we'll go </span><span class=indam>swimming</span><span style='font-weight:600; color:#000000;'>.</span>[sound:rec1359824410.mp3]</span><br><span style=''></span><br><span style=''><i>to go swimming - пойти купаться, плавать</i><br></span>","STT":21},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359824423.mp3]<span style='font-weight:600; color:#000000;'>I think we'll </span><span class=indam>___</span><span style='font-weight:600; color:#000000;'> swimming.</span><br /><img class='center-block img-responsive hinhdep'  src='pastevvt6cv.png' /></span>","BACK":"<span style='font-size: 28px; '><span style='font-weight:600; color:#000000;'>I think we'll </span><span class=indam>go</span><span style='font-weight:600; color:#000000;'> swimming.</span>[sound:rec1359824430.mp3]</span><br><span style=''></span><br><span style=''><i>to go swimming - пойти купаться, плавать</i></span>","STT":22},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359824423.mp3]<b>I think we'll go </b><span class=indam>s______</span><b>.</b><br /><img class='center-block img-responsive hinhdep'  src='pastevnkqhd.png' /></span>","BACK":"<span style='font-size: 28px; '><b>I think we'll go </b><span class=indam>sailing</span><b>.</b>[sound:rec1359824490.mp3]</span><br><span style=''></span><br><span style=''><i>to go sailing - плавать под парусом</i></span>","STT":23},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359824423.mp3]<b>I think we'll </b><span class=indam>___</span><b> sailing.</b><br /><img class='center-block img-responsive hinhdep'  src='pastevnkqhd.png' /></span>","BACK":"<span style='font-size: 28px; '><b>I think we'll </b><span class=indam>go</span><b> sailing.</b>[sound:rec1359824490.mp3]</span><br><span style=''></span><br><span style=''><i>to go sailing - плавать под парусом</i></span>","STT":24},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359824525.mp3] <b>We went </b><span class=indam>s______</span><b>.</b><br /><img class='center-block img-responsive hinhdep'  src='pastece2kgf.jpg' /></span>","BACK":"<span style='font-size: 28px; '><b>We went </b><span class=indam>s</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>ghtseeing</span><b>.</b>[sound:rec1359824546.mp3]</span><br><span style=''></span><br><span style=''><i>to go s</i><span style='font-style:italic; color:#ff5500;'>i</span><i>ghtseeing - осматривать достопримечательности</i></span>","STT":25},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359824525.mp3]<b>We </b><span class=indam>___</span><b> sightseeing.</b><br /><img class='center-block img-responsive hinhdep'  src='pastece2kgf.jpg' /></span>","BACK":"<span style='font-size: 28px; '><b>We </b><span class=indam>went</span><b> sightseeing.</b>[sound:rec1359824546.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>go - went - gone</span><br /><i>to go sightseeing - осматривать достопримечательности</i></span>","STT":26},
{"FRONT":"<span style='font-size: 28px; '>Last year I went <span class=indam>c_____</span> with my friends in Siberia. <i>(on holiday, sleeping in tents)</i>[sound:rec1359824580.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb6hgjs.png' /></span>","BACK":"<span style='font-size: 28px; '>Last year I went <span class=indam>camping</span> with my friends in Siberia.[sound:rec1359824617.mp3]</span><br><span style=''></span><br><span style=''><i>to go camping - отдыхать на природе, жить в палатках</i></span>","STT":27},
{"FRONT":"<span style='font-size: 28px; '>Last year I <span class=indam>___</span> camping with my friends in Siberia.[sound:rec1359824604.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb6hgjs.png' /></span>","BACK":"<span style='font-size: 28px; '>Last year I <span class=indam>went</span> camping with my friends in Siberia.[sound:rec1359824617.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>go - went - gone</span><br /><i>to go camping - отдыхать на природе, жить в палатках</i></span>","STT":28},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359824630.mp3]<b>We went </b><span class=indam>[...]</span><b> train.</b><br /><img class='center-block img-responsive hinhdep'  src='pasternfpzz.png' /></span>","BACK":"<span style='font-size: 28px; '><b>We went </b><span class=indam>by</span><b> train.</b>[sound:rec1359824636.mp3]</span><br><span style=''></span><br><span style=''><i>by train - поездом</i></span>","STT":29},
{"FRONT":"<span style='font-size: 28px; '>In the summer we go to <span class=indam>the b_____</span> every day.[sound:rec1359824670.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteydjzql.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>In the summer we go to <span class=indam>the beach</span> every day.[sound:rec1359824684.mp3]</span><br><span style=''></span><br><span style=''><i>a beach - пляж</i><br /><i>to go to </i><span style='font-weight:600; font-style:italic;'>the</span><i> beach - ходить на пляж</i></span>","STT":30},
{"FRONT":"<span style='font-size: 28px; '>Last night we <span class=indam>___</span> to the cinema.[sound:rec1359824694.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec9eedg.png' /></span>","BACK":"<span style='font-size: 28px; '>Last night we <span class=indam>went</span> to the cinema.[sound:rec1359824700.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>go - went - gone </span><br /><i>to go to </i><span style='font-weight:600; font-style:italic;'>the</span><i> cinema - ходить в кино</i></span>","STT":31},
{"FRONT":"<span style='font-size: 28px; '>Last night we went <b>to the </b><span class=indam>c_____</span><b>. </b><i>(a place where you can watch films) </i>[sound:rec1359824732.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec9eedg.png' /></span>","BACK":"<span style='font-size: 28px; '>Last night we went <b>to the </b><span class=indam>cinema</span><b>.</b>[sound:rec1359824737.mp3]</span><br><span style=''></span><br><span style=''><i>to go to </i><span style='font-weight:600; font-style:italic;'>the</span><i> cinema - ходить в кино</i></span>","STT":32},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359824746.mp3]<b>If the weather's good we'll </b><span class=indam>___</span><b> </b><span class=indam>f__</span><b> </b><span class=indam>___</span><b> walk in the park.</b><br /><img class='center-block img-responsive hinhdep'  src='pastes3ps0q.png' /></span>","BACK":"<span style='font-size: 28px; '><b>If the weather's good we'll </b><span class=indam>go</span><b> </b><span class=indam>for a</span><b> walk in the park</b>.[sound:rec1359824778.mp3]</span><br><span style=''></span><br><span style=''><i>to go for a walk - пойти на прогулку, прогуляться</i></span>","STT":33},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359824770.mp3]<b>If the weather's good we'll </b><span class=indam>___ for a w___</span><b> in the park.</b><br /><img class='center-block img-responsive hinhdep'  src='pastes3ps0q.png' /></span>","BACK":"<span style='font-size: 28px; '><b>If the weather's good we'll </b><span class=indam>go for a</span><b> </b><span class=indam>walk</span><b> in the park</b>.[sound:rec1359824778.mp3]</span><br><span style=''></span><br><span style=''><i>to go for a walk - пойти на прогулку, прогуляться</i></span>","STT":34},
{"FRONT":"<span style='font-size: 28px; '>When we were on holiday, <b>we </b><span class=indam>s_____</span><b> at a lovely hotel. </b><i>(lived for a short time)</i>[sound:rec1361876893.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejpdnoq.png' /></span>","BACK":"<span style='font-size: 28px; '>When we were on holiday, <b>we </b><span class=indam>stayed</span><b> at a lovely hotel.</b>[sound:rec1361876919.mp3]</span><br><span style=''></span><br><span style=''><i>to stay swh. - останавливаться, пожить где-л.</i></span>","STT":35},
{"FRONT":"<span style='font-size: 28px; '>I brought some nice <span class=indam>s_____</span> back from London. <i>(small presents from a different place)</i>[sound:rec1359824804.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevrluqz.png' /></span>","BACK":"<span style='font-size: 28px; '>I brought some nice <span class=indam>souvenirs</span> back from London.[sound:rec1359824987.mp3]</span><br><span style=''></span><br><span style=''><i>a souvenir - сувенир, подарок на память</i><br></span>","STT":36},
{"FRONT":"<span style='font-size: 28px; '>When I was on holiday <b>I </b><span class=indam>s_______</span><b> on the beach a lot. </b><i>(lay in the sunshine to get a suntan)</i>[sound:rec1359824815.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5b7amu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>When I was on holiday <b>I </b><span class=indam>s</span><span style='font-weight:600; color:#ff5500;'>u</span><span class=indam>nbathed</span><b> on the beach a lot.</b>[sound:rec1359824821.mp3]</span><br><span style=''></span><br><span style=''><i>to s</i><span style='font-style:italic; color:#ff5500;'>u</span><i>nbathe - принимать солнечные ванны, жариться на солнце</i></span>","STT":37},
{"FRONT":"<span style='font-size: 28px; '>When I was on holiday <b>I sunbathed </b><span class=indam>[...]</span><b> the beach a lot.</b>[sound:rec1359824815.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5b7amu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>When I was on holiday <b>I sunbathed </b><span class=indam>on</span><b> the beach a lot.</b>[sound:rec1359824821.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":38},
{"FRONT":"<span style='font-size: 28px; '>It was a great holiday but very expensive - <b>we </b><span class=indam>s____</span><b> a lot of money.</b>[sound:rec1359824846.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9m5su7.png' /></span>","BACK":"<span style='font-size: 28px; '>It was a great holiday but very expensive - <b>we </b><span class=indam>spent</span><b> a lot of money.</b>[sound:rec1359824863.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>spend - spent - spent</span><br /><i>to spend (money) - тратить (деньги)</i></span>","STT":39},
{"FRONT":"<span style='font-size: 28px; '>We went on holiday to London but <span class=indam>unf______</span> it rained a lot, so we spent most of the time inside. <i>(it was a bad thing) </i>[sound:rec1359824882.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteujwgoq.png' /></span>","BACK":"<span style='font-size: 28px; '>We went on holiday to London but <span class=indam>unf</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>rtunately</span> it rained a lot, so we spent most of the time inside.[sound:rec1359824901.mp3]</span><br><span style=''></span><br><span style=''><i>unf</i><span style='font-style:italic; color:#ff5500;'>o</span><i>rtunately - к сожалению, к несчастью</i></span>","STT":40},
{"FRONT":"<span style='font-size: 28px; '>We went on holiday to London but unfortunately it rained a lot, <b>so we </b><span class=indam>s_____</span><b> most of the time inside.</b>[sound:rec1359824920.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteujwgoq.png' /></span>","BACK":"<span style='font-size: 28px; '>We went on holiday to London but unfortunately it rained a lot, <b>so we </b><span class=indam>spent</span><b> most of the time inside.</b>[sound:rec1359824929.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>spend - spent - spent</span><br /><i>to spend (time) - проводить время</i></span>","STT":41},
{"FRONT":"<span style='font-size: 28px; '>When we went on holiday to Spain we didn't stay at a hotel, <b>we </b><span class=indam>r_____</span><b> an apartment. </b><i>(paid money to have for a short time)</i>[sound:rec1359825012.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep1pkoj.png' /></span>","BACK":"<span style='font-size: 28px; '>When we went on holiday to Spain we didn't stay at a hotel, <b>we </b><span class=indam>rented</span><b> an apartment.</b>[sound:rec1359825031.mp3]</span><br><span style=''></span><br><span style=''><i>to rent sth. - снимать, брать в аренду</i></span>","STT":42},
{"FRONT":"<span style='font-size: 28px; '>Let's <span class=indam>h____ a car </span>so that we can drive to different places. <i>(pay money to take for a short time)</i>[sound:rec1359825053.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenw_smy.png' /></span>","BACK":"<span style='font-size: 28px; '>Let's <span class=indam>hire</span> <span class=indam>a car</span> so that we can drive to different places.[sound:rec1359825063.mp3]</span><br><span style=''></span><br><span style=''><i>to hire (a car) - брать напрокат (машину)</i><br></span>","STT":43},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359825076.mp3]<b>It's quite </b><span class=indam>w____</span><b>.</b><br /><img class='center-block img-responsive hinhdep'  src='pastecs9sfa.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's quite </b><span class=indam>windy</span><b>.</b>[sound:rec1359825082.mp3]</span><br><span style=''></span><br><span style=''><i>windy (adj.) - ветрено, ветреный</i></span>","STT":44},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359825089.mp3]<b>It's warm and </b><span class=indam>s____</span><b>.<br /></b><img class='center-block img-responsive hinhdep'  src='pasteysn50h.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's warm and </b><span class=indam>sunny</span>.[sound:rec1359825095.mp3]</span><br><span style=''></span><br><span style=''><i>sunny (adj.) - солнечно, солнечный</i></span>","STT":45},
{"FRONT":"<span style='font-size: 28px; '>It was difficult to drive <b>because it was very </b><span class=indam>f____</span>.[sound:rec1359825114.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9zrizk.png' /></span>","BACK":"<span style='font-size: 28px; '>It was difficult to drive <b>because</b> <b>it was very </b><span class=indam>foggy</span><b>.</b>[sound:rec1359825122.mp3]</span><br><span style=''></span><br><span style=''><i>foggy (adj.) - туманно, туманный</i></span>","STT":46},
{"FRONT":"<span style='font-size: 28px; '>It was difficult to drive <span class=indam>b_____</span><b> it was very foggy.</b>[sound:rec1359825132.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9zrizk.png' /></span>","BACK":"<span style='font-size: 28px; '>It was difficult to drive <span class=indam>because</span><b> it was very foggy.</b>[sound:rec1359825137.mp3]</span><br><span style=''></span><br><span style=''><i>because - потому что</i></span>","STT":47},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359825150.mp3]<b>It's </b><span class=indam>_______</span><b>.</b><br /><img class='center-block img-responsive hinhdep'  src='paste7ostou.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's </b><span class=indam>raining</span><b>.</b>[sound:rec1359825154.mp3]</span><br><span style=''></span><br><span style=''><i>it's raining - идёт дождь</i><br /><i>to rain - идти (о дожде), литься</i></span>","STT":48},
{"FRONT":"<span style='font-size: 28px; '>A person from 13-19 years old is<span class=indam> a ______</span>.[sound:rec1359825165.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepi5lka.png' /></span>","BACK":"<span style='font-size: 28px; '>A person from 13-19 years old is <span class=indam>a</span> <span class=indam>t</span><span style='font-weight:600; color:#ff5500;'>ee</span><span class=indam>nager</span>.[sound:rec1359825173.mp3]</span><br><span style=''></span><br><span style=''><i>a t</i><span style='font-style:italic; color:#ff5500;'>ee</span><i>nager - подросток, тинэйджер</i><br /><i>note: thir</i><span style='font-weight:600; font-style:italic;'>teen</span><i>, four</i><span style='font-weight:600; font-style:italic;'>teen</span><i> etc.</i></span>","STT":49},
{"FRONT":"<span style='font-size: 28px; '>-What's the <span class=indam>w_____</span> today?[sound:rec1359825187.mp3]<br />-Well, it's cloudy but it's dry.<br /><img class='center-block img-responsive hinhdep'  src='pastevwiqch.png' /></span>","BACK":"<span style='font-size: 28px; '>What's the <span class=indam>weather</span> today?[sound:rec1359825197.mp3]</span><br><span style=''></span><br><span style=''><i>weather (n.) - погода</i></span>","STT":50},
{"FRONT":"<span style='font-size: 28px; '>We went fishing this afternoon <b>and</b> <b>I </b><span class=indam>c____</span><b> a fish!</b>[sound:rec1359825248.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelxukoe.png' /></span>","BACK":"<span style='font-size: 28px; '>We went fishing this afternoon <b>and I </b><span class=indam>caught</span><b> a fish!</b>[sound:rec1359825261.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>catch - caught - caught</span><br /><i>to catch sth. - поймать, ловить что-л.</i></span>","STT":51},
{"FRONT":"<span style='font-size: 28px; '>Yesterday I dropped a wine glass <b>and it </b><span class=indam>b_____</span>.[sound:rec1359825277.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecxdoby.png' /></span>","BACK":"<span style='font-size: 28px; '>Yesterday I dropped a wine glass <b>and it</b> <span class=indam>broke</span>.[sound:rec1359825283.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>break - broke - broken</span><br /><i>to break (sth.) - сломать(ся), разбить(ся)</i></span>","STT":52},
{"FRONT":"<span style='font-size: 28px; '>Two days ago the postman <span class=indam>______</span> <b>me a letter.</b> <b>(bring)</b>[sound:rec1359825298.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehq6znd.png' /></span>","BACK":"<span style='font-size: 28px; '>Two days ago the postman <span class=indam>brought</span> <b>me a letter.</b>[sound:rec1359825303.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>bring - brought - brought</span><br /><i>to bring sb. sth. - приносить кому-л. что-л.</i></span>","STT":53},
{"FRONT":"<span style='font-size: 28px; '>My daughter had a birthday party and <b>all her friends</b> <span class=indam>c_____</span>. <i>(arrived; were at the party)</i>[sound:rec1359825361.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezjlzzt.png' /></span>","BACK":"<span style='font-size: 28px; '>My daughter had a birthday party and <b>all her friends </b><span class=indam>came</span>.[sound:rec1359825367.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>come - came - came</span><br /><i>to come - приходить</i></span>","STT":54},
{"FRONT":"<span style='font-size: 28px; '>It was difficult for Sarah; <b>she didn't know which man to </b><span class=indam>ch____</span><b>.</b>[sound:rec1359825387.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefhb_om.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It was difficult for Sarah; <b>she didn't know which man to </b><span class=indam>choose</span><b>.</b>[sound:rec1359825393.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>choose - chose - chosen</span><br /><i>to choose sb./sth. - выбирать</i></span>","STT":55},
{"FRONT":"<span style='font-size: 28px; '>I looked at lots of cars, and in the end<b> I </b><span class=indam>ch____</span><b> a Ford.</b> <i>(decided to take)</i>[sound:rec1359825408.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevwbtlq.png' /></span>","BACK":"<span style='font-size: 28px; '>I looked at lots of cars, and in the end<b> I </b><span class=indam>chose</span><b> a Ford.</b>[sound:rec1359825415.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>choose - chose - chosen</span><br /><i>to choose - выбирать</i></span>","STT":56},
{"FRONT":"<span style='font-size: 28px; '>Please can you <span class=indam>c___</span> some bread?[sound:rec1359825458.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteelp79c.png' /></span>","BACK":"<span style='font-size: 28px; '>Please can you <span class=indam>cut</span> some bread?[sound:rec1359825463.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>cut - cut - cut</span><br /><i>to cut sth. - отрезать, резать</i><br></span>","STT":57},
{"FRONT":"<span style='font-size: 28px; '>Wow! <b>You're </b><span class=indam>g_____</span><b> so fast! </b><i>(becoming bigger, taller)</i>[sound:rec1359825475.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexcw8ux.png' /></span>","BACK":"<span style='font-size: 28px; '>Wow! <b>You're </b><span class=indam>growing</span><b> so fast!</b>[sound:rec1359825495.mp3]</span><br><span style=''></span><br><span style=''><i>to grow - расти</i></span>","STT":58},
{"FRONT":"<span style='font-size: 28px; '>Last year I <span class=indam>_____</span> tomatoes at my dacha. <b>(grow)</b>[sound:rec1359825549.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1jivcz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Last year I <span class=indam>grew</span> tomatoes at my dacha.[sound:rec1359825557.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>grow - grew - grown</span><br /><i>to grow sth. - выращивать что-л.</i></span>","STT":59},
{"FRONT":"<span style='font-size: 28px; '>She was really angry <span class=indam>___</span><b> she hit her boyfriend.</b>[sound:rec1359825571.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteka8fno.png' /></span>","BACK":"<span style='font-size: 28px; '>She was really angry <span class=indam>so</span> <b>she hit her boyfriend.</b>[sound:rec1359825576.mp3]</span><br><span style=''></span><br><span style=''><i>so - поэтому</i></span>","STT":60},
{"FRONT":"<span style='font-size: 28px; '>She was really angry <b>so she </b><span class=indam>h___</span><b> her boyfriend. </b>[sound:rec1359825588.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteka8fno.png' /></span>","BACK":"<span style='font-size: 28px; '>She was really angry<b> so she </b><span class=indam>hit</span><b> her boyfriend.</b>[sound:rec1359825593.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>hit - hit - hit</span><br /><i>to hit sb. - ударять</i></span>","STT":61},
{"FRONT":"<span style='font-size: 28px; '>This is the cupboard <b>where I </b><span class=indam>k____</span><b> my clothes. </b><i>(have, store, put)</i>[sound:rec1359825657.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq9fii2.png' /></span>","BACK":"<span style='font-size: 28px; '>This is the cupboard <b>where I </b><span class=indam>keep</span><b> my clothes.</b>[sound:rec1359825662.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>keep - kept - kept</span><br /><i>to keep sth. sw. - держать, хранить что-л. где-л.</i></span>","STT":62},
{"FRONT":"<span style='font-size: 28px; '>I <span class=indam>l_____</span> to drive when I was 18. <i>(became able to)</i>[sound:rec1359825672.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste07bfdo.png' /></span>","BACK":"<span style='font-size: 28px; '>I <span class=indam>learnt</span> to drive when I was 18.[sound:rec1359825689.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>learn - learnt - learnt</span><br /><i>to learn sth. - учиться, изучать что-л.</i></span>","STT":63},
{"FRONT":"<span style='font-size: 28px; '>I had a problem with my credit card,<b> so a friend of mine </b><span class=indam>_____</span><b> me some money. (lend)</b>[sound:rec1359825706.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevirthe.png' /></span>","BACK":"<span style='font-size: 28px; '>I had a problem with my credit card, <b>so a friend of mine </b><span class=indam>lent</span><b> me some money.</b>[sound:rec1359825713.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>lend - lent - lent</span><br /><i>to lend sb. money - давать взаймы, одалживать деньги</i></span>","STT":64},
{"FRONT":"<span style='font-size: 28px; '>It was a boring book, <b>so she </b><span class=indam>_____</span><b> finish it.</b>[sound:rec1359825763.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteda23hw.png' /></span>","BACK":"<span style='font-size: 28px; '>It was a boring book,<b> so she </b><span class=indam>didn't</span><b> finish it.</b>[sound:rec1359825768.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":65},
{"FRONT":"<span style='font-size: 28px; '>He met his wife when <span class=indam>___________</span><b> in Japan.</b> <b>(he / work)</b>[sound:rec1359825832.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeertxi.png' /></span>","BACK":"<span style='font-size: 28px; '>He met his wife when <span class=indam>he was working</span><b> in Japan.</b>[sound:rec1359825837.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i></span>","STT":66},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>___________</span> for us when we arrived.<b> (they / wait)</b>[sound:rec1359825852.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8sym9v.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>They were waiting</span> for us when we arrived.[sound:rec1359825860.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i></span>","STT":67},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>________</span> a coat when she went out? <b>(she / wear)</b>[sound:rec1359825884.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepl1oc0.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Was she wearing</span> a coat when she went out?[sound:rec1359825890.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i></span>","STT":68},
{"FRONT":"<span style='font-size: 28px; '>What <span class=indam>_______</span> at 7.30 last night? <b>(you / do)</b>[sound:rec1359825956.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3hzda2.png' /></span>","BACK":"<span style='font-size: 28px; '>What <span class=indam>were you doing</span> at 7.30 last night?[sound:rec1359825962.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i><br></span>","STT":69},
{"FRONT":"<span style='font-size: 28px; '>Sorry, what do we have to do?<b> </b><span class=indam>____________</span> <b>when you gave the instructions. (I / not listen) </b>[sound:rec1359826071.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq4aw6x.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>I wasn't listening</span> <b>when you gave the instructions.</b>[sound:rec1359826087.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i></span>","STT":70},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>___________</span> when you phoned me. <b>(I / drive)</b>[sound:rec1359826099.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasted60glq.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>I was driving</span> when you phoned me.[sound:rec1359826104.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i></span>","STT":71},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>___________</span> when we woke up this morning. <b>(it / not rain)</b>[sound:rec1359826261.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastey1ppm8.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>It wasn't raining</span> when we woke up this morning.[sound:rec1359826266.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i></span>","STT":72},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> it snowing when you left the pub?<br />-Yes, it <span class=indam>[...]</span>.[sound:rec1359826279.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoypmme.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Was</span> it snowing when you left the pub?<br />-Yes, it <span class=indam>was</span>.[sound:rec1359826376.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i></span>","STT":73},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> you watching the football match when I called?<br />-No, I <span class=indam>[...]</span>.[sound:rec1359826391.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0ts2vq.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Were</span> you watching the football match when I called?<br />-No, I <span class=indam>wasn't</span>.[sound:rec1359826436.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i></span>","STT":74},
{"FRONT":"<span style='font-size: 28px; '>-When it started raining, <span class=indam>[...]</span> they playing football?[sound:rec1359826480.mp3][sound:rec1359826487.mp3]<br />-Yes, they <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastezh0mxg.png' /></span>","BACK":"<span style='font-size: 28px; '>-When it started raining, <span class=indam>were</span> they playing football?[sound:rec1359826494.mp3]<br />-Yes, they <span class=indam>were</span>.</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i></span>","STT":75},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> your father still working in Moscow in 1990?<br />-No, he <span class=indam>[...]</span>.[sound:rec1359826508.mp3]</span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Was</span> your father still working in Moscow in 1990?<br />-No, he <span class=indam>wasn't</span>.[sound:rec1359826531.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i></span>","STT":76},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> it was very cold, she wasn't wearing a coat.[sound:rec1359826543.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehrvjar.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Although</span> it was very cold, she wasn't wearing a coat.[sound:rec1359826550.mp3]</span><br><span style=''></span><br><span style=''><i>although - хотя, несмотря на то что</i></span>","STT":77},
{"FRONT":"<span style='font-size: 28px; '>I woke up in the night <span class=indam>[...]</span> <b>there was a noise.</b>[sound:rec1359826561.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteshnmlr.png' /></span>","BACK":"<span style='font-size: 28px; '>I woke up in the night <span class=indam>because</span> <b>there was a noise.</b>[sound:rec1359826567.mp3]</span><br><span style=''></span><br><span style=''><i>because - потому что</i></span>","STT":78},
{"FRONT":"<span style='font-size: 28px; '>I called him <span class=indam>[...]</span> <b>his mobile was turned off.</b>[sound:rec1359826588.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastealwrd_.png' /></span>","BACK":"<span style='font-size: 28px; '>I called him <span class=indam>but</span><b> his mobile was turned off.</b>[sound:rec1359826593.mp3]</span><br><span style=''></span><br><span style=''><i>but - но, а</i></span>","STT":79},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> she's very nice, she doesn't have many friends.[sound:rec1359826605.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_q9m8a.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Although</span> she's very nice, she doesn't have many friends.[sound:rec1359826622.mp3]</span><br><span style=''></span><br><span style=''><i>although - хотя, несмотря на то что</i></span>","STT":80},
{"FRONT":"<span style='font-size: 28px; '>There was nothing on TV <span class=indam>[...]</span><b> I went to bed.</b>[sound:rec1359826634.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste72xunh.png' /></span>","BACK":"<span style='font-size: 28px; '>There was nothing on TV <span class=indam>so</span> <b>I went to bed.</b>[sound:rec1359826638.mp3]</span><br><span style=''></span><br><span style=''><i>so - поэтому</i></span>","STT":81},
{"FRONT":"<span style='font-size: 28px; '>All the cafes were full <span class=indam>b____</span><b> it was a public holiday.</b>[sound:rec1359826650.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyxynal.png' /></span>","BACK":"<span style='font-size: 28px; '>All the cafes were full <span class=indam>because</span> <b>it was a public holiday.</b>[sound:rec1359826656.mp3]</span><br><span style=''></span><br><span style=''><i>because - потому что</i></span>","STT":82},
{"FRONT":"<span style='font-size: 28px; '>She wanted to be a doctor <span class=indam>[...]</span> <b>she failed her exams.</b>[sound:rec1359826667.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb6jwhm.png' /></span>","BACK":"<span style='font-size: 28px; '>She wanted to be a doctor <span class=indam>but</span> <b>she failed her exams.</b>[sound:rec1359826674.mp3]</span><br><span style=''></span><br><span style=''><i>but - но</i></span>","STT":83},
{"FRONT":"<span style='font-size: 28px; '>She wanted to be a doctor<b> but she </b><span class=indam>f_____</span><b> her exams.</b> <i>(did very badly; didn't pass)</i>[sound:rec1359826687.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh59eq4.png' /></span>","BACK":"<span style='font-size: 28px; '>She wanted to be a doctor <b>but she </b><span class=indam>failed</span><b> her exams.</b>[sound:rec1359826692.mp3]</span><br><span style=''></span><br><span style=''><i>to fail an exam - провалиться на экзамене, не сдать экзамен</i><br /><i>to pass an exam - сдать экзамен</i></span>","STT":84},
{"FRONT":"<span style='font-size: 28px; '>Who <span class=indam>________</span> the film <i>Resevoir Dogs</i>? <b>(direct)</b>[sound:rec1359826702.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebs9ccf.png' /></span>","BACK":"<span style='font-size: 28px; '>Who <span class=indam>dir</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>cted</span> the film <i>Resevoir Dogs</i>?[sound:rec1359826709.mp3]</span><br><span style=''></span><br><span style=''><i>to dir</i><span style='font-style:italic; color:#ff5500;'>e</span><i>ct (a film) - режиссировать (фильм)</i><br /><i>a (film) dir</i><span style='font-style:italic; color:#ff5500;'>e</span><i>ctor - режиссёр (фильма)</i></span>","STT":85},
{"FRONT":"<span style='font-size: 28px; '>Which US President <span class=indam>______</span> the Nobel Peace Prize in 2002? <b>(win)</b>[sound:rec1359826721.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemrxzlb.png' /></span>","BACK":"<span style='font-size: 28px; '>Which US President <span class=indam>won</span> the Nobel Peace Prize in 2002?[sound:rec1359826737.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>win - won - won</span><br /><i>to win - выиграть, победить</i></span>","STT":86},
{"FRONT":"<span style='font-size: 28px; '>Excuse me, <b>which bus </b><span class=indam>_____</span><b> to the airport?</b> <b>(go)</b>[sound:rec1359826762.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_8xjm1.png' /></span>","BACK":"<span style='font-size: 28px; '>Excuse me, <b>which bus </b><span class=indam>goes</span><b> to the airport?</b>[sound:rec1359826768.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":87},
{"FRONT":"<span style='font-size: 28px; '>Who <span class=indam>_____</span> the first atomic bomb? <b>(make)</b>[sound:rec1359826776.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemvb3tk.png' /></span>","BACK":"<span style='font-size: 28px; '>Who <span class=indam>made</span> the first atomic bomb?[sound:rec1359826781.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>make - made - made</span><br /><i>to make - делать, создавать</i></span>","STT":88},
{"FRONT":"<span style='font-size: 28px; '>The food didn't taste good <b>because I </b><span class=indam>p____</span><b> too much salt on it.</b> <i>(added)</i>[sound:rec1359826797.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec06cpc.png' /></span>","BACK":"<span style='font-size: 28px; '>The food didn't taste good <b>because I </b><span class=indam>put</span><b> too much salt on it.</b>[sound:rec1359826804.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>put - put - put</span><br /><i>to put sth. in/on sth. - класть, положить что-л. куда-л.</i></span>","STT":89},
{"FRONT":"<span style='font-size: 28px; '>The food didn't taste good <span class=indam>[...]</span> <b>I put too much salt on it</b>.[sound:rec1359826868.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec06cpc.png' /></span>","BACK":"<span style='font-size: 28px; '>The food didn't taste good <span class=indam>because</span> <b>I put too much salt on it.</b>[sound:rec1359826876.mp3]</span><br><span style=''></span><br><span style=''><i>because - потому что</i></span>","STT":90},
{"FRONT":"<span style='font-size: 28px; '>I was very late <span class=indam>[...]</span><b> I ran to work.</b>[sound:rec1359826889.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezfasgh.png' /></span>","BACK":"<span style='font-size: 28px; '>I was very late <span class=indam>so</span><b> I ran to work.</b>[sound:rec1359826895.mp3]</span><br><span style=''></span><br><span style=''><i>so - поэтому</i></span>","STT":91},
{"FRONT":"<span style='font-size: 28px; '>I was very late <b>so I </b><span class=indam>_____</span><b> to work. (run)</b>[sound:rec1359826889.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteix59im.png' /></span>","BACK":"<span style='font-size: 28px; '>I was very late<b> so I </b><span class=indam>ran</span><b> to work.</b>[sound:rec1359826895.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>run - ran - run</span><br /><i>to run - бежать</i></span>","STT":92},
{"FRONT":"<span style='font-size: 28px; '>Last week I <span class=indam>________</span> my old car to my colleague. <b>(sell)</b>[sound:rec1359826923.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexbiyz8.png' /></span>","BACK":"<span style='font-size: 28px; '>Last week I <span class=indam>sold</span> my old car to my colleague.[sound:rec1359826930.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>sell - sold - sold</span><br /><i>to sell sth. - продавать</i></span>","STT":93},
{"FRONT":"<span style='font-size: 28px; '>We all work together in the same company - <b>we're </b><span class=indam>col______</span><b>.</b>[sound:rec1359826942.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1b6hxl.png' /></span>","BACK":"<span style='font-size: 28px; '>We all work together in the same company - <b>we're </b><span class=indam>c</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>lleagues</span><b>.</b>[sound:rec1359826947.mp3]</span><br><span style=''></span><br><span style=''><i>a c</i><span style='font-style:italic; color:#ff5500;'>o</span><i>lleague - коллега, сослуживец</i></span>","STT":94},
{"FRONT":"<span style='font-size: 28px; '>Here's a picture of me on holiday;<b> </b><span class=indam>I'm</span><b> </b><span class=indam>st_____</span><b> next to a baby elephant.</b>[sound:rec1359826965.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteo6dsf7.png' /></span>","BACK":"<span style='font-size: 28px; '>Here's a picture of me on holiday; <span class=indam>I'm</span><b> </b><span class=indam>standing</span><b> next to a baby elephant.</b>[sound:rec1359826972.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>stand - stood - stood</span><br /><i>to stand - стоять</i><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for actions or processes </i><span style='font-weight:600; font-style:italic;'>at this moment</span></span>","STT":95},
{"FRONT":"<span style='font-size: 28px; '>Here's a picture of me on holiday; <b>I'm standing </b><span class=indam>n___ ___</span><b> a baby elephant.</b>[sound:rec1359826965.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteo6dsf7.png' /></span>","BACK":"<span style='font-size: 28px; '>Here's a picture of me on holiday; <b>I'm standing </b><span class=indam>next to</span><b> a baby elephant</b>.[sound:rec1359826972.mp3]</span><br><span style=''></span><br><span style=''><i>next to - рядом с </i><br></span>","STT":96},
{"FRONT":"<span style='font-size: 28px; '>I <span class=indam>was f_____</span> really happy so I stood on the roof of the car. <i>(I had that emotion)</i>[sound:rec1359827065.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteisimyw.png' /></span>","BACK":"<span style='font-size: 28px; '>I <span class=indam>was feeling</span> really happy so I stood on the roof of the car.[sound:rec1359827075.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>past continuous</span><i> for an action </i><span style='font-weight:600; font-style:italic;'>in progress</span><i> at a </i><span style='font-weight:600; font-style:italic;'>specific moment</span><i> in the past</i></span>","STT":97},
{"FRONT":"<span style='font-size: 28px; '>I was feeling really happy <b>so I </b><span class=indam>______</span><b> on the roof of the car</b>. <b>(stand)</b>[sound:rec1359827082.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteisimyw.png' /></span>","BACK":"<span style='font-size: 28px; '>I was feeling really happy <b>so I </b><span class=indam>stood</span><b> on the roof of the car.</b>[sound:rec1359827088.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>stand - stood - stood</span><br /><i>to stand - стоять, вставать</i></span>","STT":98},
{"FRONT":"<span style='font-size: 28px; '>When I was a student I went to Africa<b> and </b><span class=indam>_____</span><b> children English. (teach) </b>[sound:rec1359827102.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepyu5uq.png' /></span>","BACK":"<span style='font-size: 28px; '>When I was a student I went to Africa <b>and </b><span class=indam>taught</span><b> children English.</b>[sound:rec1359827110.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>teach - taught - taught</span><br /><i>to teach sb. - учить, преподавать</i></span>","STT":99},
{"FRONT":"<span style='font-size: 28px; '>What a lot of <span class=indam>metal</span> <span class=indam>p_____</span>![sound:rec1359827129.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebgzztu.png' /></span>","BACK":"<span style='font-size: 28px; '>What a lot of <span class=indam>metal</span> <span class=indam>pipes</span>![sound:rec1359827135.mp3]</span><br><span style=''></span><br><span style=''><i>a pipe - труба, трубка</i></span>","STT":100},
{"FRONT":"<span style='font-size: 28px; '>I don't like it. <b>He always </b><span class=indam>p_____</span><b> at me and laughs. </b><i>(makes a gesture with his finger)</i>[sound:rec1359827172.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexpwkvv.png' /></span>","BACK":"<span style='font-size: 28px; '><b>He always </b><span class=indam>points</span><b> at me and laughs.</b>[sound:rec1359827179.mp3]</span><br><span style=''></span><br><span style=''><i>to point at sb. / sth. - показывать, указывать на кого-л. / что-л.</i></span>","STT":101},
{"FRONT":"<span style='font-size: 28px; '>I told a funny joke and everyone <span class=indam>la______</span>. <i>(made a 'ha-ha' noise)</i>[sound:rec1359827243.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteifa764.png' /></span>","BACK":"<span style='font-size: 28px; '>I told a funny joke and everyone <span class=indam>laughed</span>.[sound:rec1359827249.mp3]</span><br><span style=''></span><br><span style=''><i>to laugh - смеяться</i></span>","STT":102},
{"FRONT":"<span style='font-size: 28px; '>I felt tired, <b>so we </b><span class=indam>_____</span><b> go to the cinema.</b>[sound:rec1359827286.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexuqgjc.png' /></span>","BACK":"<span style='font-size: 28px; '>I felt tired, <b>so we </b><span class=indam>didn't</span><b> go to the cinema.</b>[sound:rec1359827292.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":103},
{"FRONT":"<span style='font-size: 28px; '>The sea was cold <b>so we </b><span class=indam>_____</span><b> swim.</b>[sound:rec1359827301.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetm8oiv.png' /></span>","BACK":"<span style='font-size: 28px; '>The sea was cold <b>so we </b><span class=indam>didn't</span><b> swim</b>.[sound:rec1359827320.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":104},
{"FRONT":"<span style='font-size: 28px; '>They <span class=indam>_____</span> walk to the pub; they took the bus.[sound:rec1359827340.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste92tzpb.png' /></span>","BACK":"<span style='font-size: 28px; '>They <span class=indam>didn't</span> walk to the pub; they took the bus.[sound:rec1359827349.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":105},
{"FRONT":"<span style='font-size: 28px; '>When you went to France, <span class=indam>___</span><b> you stay at a campsite?</b>[sound:rec1359827456.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuptfqh.png' /></span>","BACK":"<span style='font-size: 28px; '>When you went to France, <span class=indam>did</span> <b>you stay at a campsite?</b>[sound:rec1359827461.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":106},
{"FRONT":"<span style='font-size: 28px; '>Did you go to school in Moscow <b>when you </b><span class=indam>____</span><b> a child</b>?[sound:rec1361876956.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4ttdtg.png' /> </span>","BACK":"<span style='font-size: 28px; '>Did you go to school in Moscow <b>when you </b><span class=indam>were</span><b> a child</b>?[sound:rec1361876969.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>be - was/were - been</span></span>","STT":107},
{"FRONT":"<span style='font-size: 28px; '>When you were a child, <span class=indam>____</span><b> you go to school in Moscow?</b>[sound:rec1361876997.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4ttdtg.png' /> </span>","BACK":"<span style='font-size: 28px; '>When you were a child, <span class=indam>did</span> <b>you go to school in Moscow?</b>[sound:rec1361877005.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":108},
{"FRONT":"<span style='font-size: 28px; '>What <span class=indam>h____</span> to 'The Beatles' in 1970? <i>(took place, was)</i>[sound:rec1359827623.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_jldbg.png' /></span>","BACK":"<span style='font-size: 28px; '>What <span class=indam>happened</span> to 'The Beatles' in 1970?[sound:rec1359827630.mp3]</span><br><span style=''></span><br><span style=''><i>to h</i><span style='font-style:italic; color:#ff5500;'>a</span><i>ppen - случаться, происходить</i></span>","STT":109},
{"FRONT":"<span style='font-size: 28px; '>Sometimes big storms <span class=indam>h_____</span> in our city. <i>(take place, are)</i>[sound:rec1359827642.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemiokdm.png' /></span>","BACK":"<span style='font-size: 28px; '>Sometimes big storms <span class=indam>happen</span> in our city.[sound:rec1359827650.mp3]</span><br><span style=''></span><br><span style=''><i>to h</i><span style='font-style:italic; color:#ff5500;'>a</span><i>ppen - случаться, происходить</i></span>","STT":110},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>H___ l___</span> did you live in Germany?[sound:rec1359827682.mp3]<br />-I lived there for 3 years. </span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>How</span> <span class=indam>long</span> did you live in Germany?[sound:rec1359827698.mp3]<br />-I lived there for 3 years. </span><br><span style=''></span><br><span style=''><i>how long ...? - сколько...? / как долго...?</i></span>","STT":111},
{"FRONT":"<span style='font-size: 28px; '>What do you think,<b> who </b><span class=indam>k____</span><b> JFK? </b><i>(made him die)</i>[sound:rec1359827710.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4rirgq.png' /></span>","BACK":"<span style='font-size: 28px; '>What do you think,<b> who </b><span class=indam>killed</span><b> JFK?</b>[sound:rec1359827723.mp3]</span><br><span style=''></span><br><span style=''><i>to kill sb. - убивать</i><br></span>","STT":112},
{"FRONT":"<span style='font-size: 28px; '>It's a new kind of cheese, <b>do you want to </b><span class=indam>tr___</span><b> it? </b><i>(have a small piece to see if you like it)</i>[sound:rec1359827804.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefnxvq3.png' /></span>","BACK":"<span style='font-size: 28px; '>It's a new kind of cheese, <b>do you want to </b><span class=indam>try</span><b> it?</b>[sound:rec1359827843.mp3]</span><br><span style=''></span><br><span style=''><i>to try sth. - попробовать что-л.</i></span>","STT":113},
{"FRONT":"<span style='font-size: 28px; '>Good morning. <b>Did you sleep </b><span class=indam>____</span><b>? (good)</b>[sound:rec1359827874.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefg1si0.png' /></span>","BACK":"<span style='font-size: 28px; '>Good morning. <b>Did you sleep </b><span class=indam>well</span><b>?</b>[sound:rec1359827885.mp3]</span><br><span style=''></span><br><span style=''><i>good (adj.) - хороший</i><br /><i>well (adv.) - хорошо</i></span>","STT":114},
{"FRONT":"<span style='font-size: 28px; '>-Hi Kevin. <span class=indam>How are t____</span><b>?</b>[sound:rec1359827906.mp3]<br />-Fine thanks.<br /><img class='center-block img-responsive hinhdep'  src='pasteoojahc.png' /></span>","BACK":"<span style='font-size: 28px; '>-Hi Kevin. <span class=indam>How are things</span><b>?</b>[sound:rec1359827913.mp3]<br />-Fine thanks.</span><br><span style=''></span><br><span style=''><i>How are things? - Как дела?</i></span>","STT":115},
{"FRONT":"<span style='font-size: 28px; '>My sister really loves <b>walking</b> <b>in the </b><span class=indam>m_____</span>. <i>(high areas of land)</i>[sound:rec1359828013.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejd6txg.png' /></span>","BACK":"<span style='font-size: 28px; '>My sister really loves <b>walking</b> <b>in the</b> <span class=indam>mountains</span>.[sound:rec1359828019.mp3]</span><br><span style=''></span><br><span style=''><i>a mountain - гора</i><br /><i>in the mountains - в горах</i></span>","STT":116},
{"FRONT":"<span style='font-size: 28px; '>We stayed in a lovely flat with <span class=indam>a</span> <span class=indam>b_____</span>.[sound:rec1359828044.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejxtfbo.png' /></span>","BACK":"<span style='font-size: 28px; '>We stayed in a lovely flat with <span class=indam>a</span> <span class=indam>balcony</span>.[sound:rec1359828038.mp3]</span><br><span style=''></span><br><span style=''><i>a balcony - балкон</i></span>","STT":117},
{"FRONT":"<span style='font-size: 28px; '>Every morning I had breakfast <span class=indam>[...]</span><b> the balcony.</b>[sound:rec1359828058.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewru2vh.png' /></span>","BACK":"<span style='font-size: 28px; '>Every morning I had breakfast<b> </b><span class=indam>on</span><b> the balcony.</b>[sound:rec1359828063.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":118},
{"FRONT":"<span style='font-size: 28px; '>On the weekend we went out to a great <span class=indam>n_____</span>. <i>(a disco; a place where you can dance)</i>[sound:rec1359828073.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexnwush.png' /></span>","BACK":"<span style='font-size: 28px; '>On the weekend we went out to a great <span class=indam>nightclub</span>.[sound:rec1359828078.mp3]</span><br><span style=''></span><br><span style=''><i>a nightclub - ночной клуб</i></span>","STT":119},
{"FRONT":"<span style='font-size: 28px; '>It was a beautiful beach with white <span class=indam>s____</span>.[sound:rec1359828127.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2p5vp0.png' /></span>","BACK":"<span style='font-size: 28px; '>It was a beautiful beach with white <span class=indam>sand</span>.[sound:rec1359828132.mp3]</span><br><span style=''></span><br><span style=''><i>sand (n.) - песок</i></span>","STT":120},
{"FRONT":"<span style='font-size: 28px; '>We found some interesting <span class=indam>st____</span> on the beach. <i>(small pieces of rock)</i>[sound:rec1359828140.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekz6bhr.png' /></span>","BACK":"<span style='font-size: 28px; '>We found some interesting <span class=indam>stones</span> on the beach.[sound:rec1359828146.mp3]</span><br><span style=''></span><br><span style=''><i>a stone - камень</i><br></span>","STT":121},
{"FRONT":"<span style='font-size: 28px; '>We went for a walk and it <span class=indam>s______</span> <b>started raining.</b> <i>(quickly, unexpectedly)</i>[sound:rec1359828156.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste31irmm.png' /></span>","BACK":"<span style='font-size: 28px; '>We went for a walk and it <span class=indam>suddenly</span> <b>started raining.</b>[sound:rec1359828163.mp3]</span><br><span style=''></span><br><span style=''><i>suddenly - внезапно, неожиданно</i></span>","STT":122},
{"FRONT":"<span style='font-size: 28px; '>They live on the tenth floor, <b>let's take the </b><span class=indam>l____</span><b>. </b>[sound:rec1359828174.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7nk77y.png' /></span>","BACK":"<span style='font-size: 28px; '>They live on the tenth floor, <b>let's take the </b><span class=indam>lift</span><b>.</b>[sound:rec1359828179.mp3]</span><br><span style=''></span><br><span style=''><i>a lift - лифт</i><br /><i>note: (Am. E.) an elevator</i></span>","STT":123},
{"FRONT":"<span style='font-size: 28px; '>Where are you? <b>Are you </b><span class=indam>[...]</span><b> home or </b><span class=indam>[...]</span><b> work?</b>[sound:rec1359828216.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastei63pcu.png' /></span>","BACK":"<span style='font-size: 28px; '>Where are you?<b> Are you </b><span class=indam>at</span><b> home or </b><span class=indam>at</span><b> work?</b>[sound:rec1359828228.mp3]</span><br><span style=''></span><br><span style=''><i>at home - дома</i><br /><i>at work - на работе</i></span>","STT":124},
{"FRONT":"<span style='font-size: 28px; '>My birthday is <span class=indam>[...]</span> 8th September.[sound:rec1359828268.mp3]</span>","BACK":"<span style='font-size: 28px; '>My birthday is <span class=indam>on</span> 8th September.[sound:rec1359828276.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":125},
{"FRONT":"<span style='font-size: 28px; '>We have an English class <span class=indam>[...]</span> 4pm tomorrow.[sound:rec1359828284.mp3]</span>","BACK":"<span style='font-size: 28px; '>We have an English class <span class=indam>at</span> 4pm tomorrow.[sound:rec1359828291.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":126},
{"FRONT":"<span style='font-size: 28px; '>John Kennedy became US president <span class=indam>[...]</span> 1961.[sound:rec1359828300.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteotsajd.png' /></span>","BACK":"<span style='font-size: 28px; '>John Kennedy became US president <span class=indam>in</span> 1961.[sound:rec1359828307.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":127},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> you watch the football match on TV yesterday?[sound:rec1359828317.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste47qmd8.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Did</span> you watch the football match on TV yesterday?[sound:rec1359828324.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":128},
{"FRONT":"<span style='font-size: 28px; '>Did you watch the football match <span class=indam>[...]</span> TV yesterday?[sound:rec1359828332.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste47qmd8.png' /></span>","BACK":"<span style='font-size: 28px; '>Did you watch the football match <span class=indam>on</span> TV yesterday?[sound:rec1359828337.mp3]</span><br><span style=''></span><br><span style=''><i>on TV - по телевизору</i></span>","STT":129},
{"FRONT":"<span style='font-size: 28px; '>Good morning.<b> </b><span class=indam>[...]</span><b> you sleep well?</b>[sound:rec1359828367.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefg1si0.png' /></span>","BACK":"<span style='font-size: 28px; '>Good morning. <span class=indam>Did</span><b> you sleep well?</b>[sound:rec1359828356.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":130},
{"FRONT":"<span style='font-size: 28px; '>What <span class=indam>[...]</span> you have for breakfast this morning?[sound:rec1359828376.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteblhd08.png' /></span>","BACK":"<span style='font-size: 28px; '>What <span class=indam>did</span> you have for breakfast this morning?[sound:rec1359828383.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":131},
{"FRONT":"<span style='font-size: 28px; '>A bank is a place <b>where you </b><span class=indam>k____</span><b> your money. </b><i>(have, store, put)</i>[sound:rec1359444082.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9iolbk.jpg' /></span>","BACK":"<span style='font-size: 28px; '>A bank is a place <b>where you </b><span class=indam>keep</span><b> your money.</b>[sound:rec1359444087.mp3]</span><br><span style=''></span><br><span style=''><i>to keep - хранить</i></span>","STT":132},
{"FRONT":"<span style='font-size: 28px; '>When we arrived in Britain,<b> an </b><span class=indam>im______</span><b> officer checked our passports.</b>[sound:rec1359444109.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste538ksp.png' /></span>","BACK":"<span style='font-size: 28px; '>When we arrived in Britain, <b>an </b><span class=indam>immigr</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>tion</span><b> officer checked our passports.</b>[sound:rec1359444117.mp3]</span><br><span style=''></span><br><span style=''><i>an immigr</i><span style='font-style:italic; color:#ff5500;'>a</span><i>tion officer - сотрудник иммиграционной службы</i><br /><i>immigr</i><span style='font-style:italic; color:#ff5500;'>a</span><i>tion - имиграция</i></span>","STT":133},
{"FRONT":"<span style='font-size: 28px; '>-What's the purpose of your visit to the USA?[sound:rec1359444144.mp3]<br />-<b>I'm a </b><span class=indam>t_____</span><b>.</b> <i>(I'm on holiday)</i><br /><img class='center-block img-responsive hinhdep'  src='pastexmg2rp.png' /></span>","BACK":"<span style='font-size: 28px; '><b>-I'm a </b><span class=indam>tourist</span><b>.</b>[sound:rec1359444151.mp3]</span><br><span style=''></span><br><span style=''><i>a tourist - турист</i></span>","STT":134},
{"FRONT":"<span style='font-size: 28px; '>-What's the purpose of your visit to Brazil?[sound:rec1359444179.mp3]<br /><b>-I'm here on </b><span class=indam>b_____</span><b>. </b><i>(for work)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteupox1t.png' /></span>","BACK":"<span style='font-size: 28px; '><b>-I'm here on </b><span class=indam>business</span><b>.</b>[sound:rec1359444186.mp3]</span><br><span style=''></span><br><span style=''><i>on business - по работе, по делам</i></span>","STT":135},
{"FRONT":"<span style='font-size: 28px; '><span style='color:#000000;'>I live in St. Peterburg now, </span><span style='font-weight:600; color:#000000;'>but </span><span class=indam>[...]</span><span style='font-weight:600; color:#000000;'> two weeks I'm moving to Moscow.</span><span style='color:#000000;'> </span><span style='font-style:italic; color:#000000;'>(going to live)</span>[sound:rec1359444199.mp3]<span style='color:#000000;'><br /></span><img class='center-block img-responsive hinhdep'  src='pastesj39ir.png' /></span>","BACK":"<span style='font-size: 28px; '><span style='color:#000000;'>I live in St. Peterburg now, </span><span style='font-weight:600; color:#000000;'>but </span><span class=indam>in</span><span style='font-weight:600; color:#000000;'> two weeks I'm moving to Moscow. </span><span style='font-style:italic; color:#000000;'>(going to live)</span>[sound:rec1359444211.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":136},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>________ </span>to Aldershot tomorrow,<b> </b>here's my train ticket. <b>(I / go)</b>[sound:rec1361877107.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteedqmly.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>I'm going </span>to Aldershot tomorrow,<b> </b>here's my train ticket.[sound:rec1361877126.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for future </i><span style='font-weight:600; font-style:italic;'>arrangements</span></span>","STT":137},
{"FRONT":"<span style='font-size: 28px; '>I looked at lots of cars, <b>and</b> <span class=indam>[...] the end</span><b> I chose a Ford. </b>[sound:rec1361877143.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemsgfat.png' /></span>","BACK":"<span style='font-size: 28px; '>I looked at lots of cars, <b>and</b> <span class=indam>in the end</span><b> I chose a Ford. </b>[sound:rec1361877150.mp3]</span><br><span style=''></span><br><span style=''><i>in the end - в итоге, в конце концов</i></span>","STT":138},
{"FRONT":"<span style='font-size: 28px; '>It was a boring book, <span class=indam>[...]</span> <b>she didn't finish it.</b>[sound:rec1359828406.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteda23hw.png' /></span>","BACK":"<span style='font-size: 28px; '>It was a boring book, <span class=indam>so</span> <b>she didn't finish it.</b>[sound:rec1359828414.mp3]</span><br><span style=''></span><br><span style=''><i>so - поэтому</i></span>","STT":139},
{"FRONT":"<span style='font-size: 28px; '><span style='color:#000000;'>The food didn't taste good </span><span style='font-weight:600; color:#000000;'>because I put </span><span class=indam>[...]</span><span style='font-weight:600; color:#000000;'> much salt on it.</span><span style='color:#000000;'> </span><span style='font-style:italic; color:#000000;'>(I put a lot, and it was bad)</span>[sound:rec1359826845.mp3]<span style='color:#000000;'><br /></span><img class='center-block img-responsive hinhdep'  src='pastec06cpc.png' /></span>","BACK":"<span style='font-size: 28px; '><span style='color:#000000;'>The food didn't taste good </span><span style='font-weight:600; color:#000000;'>because I put </span><span class=indam>too</span><span style='font-weight:600; color:#000000;'> much salt on it.</span>[sound:rec1359826854.mp3]<span style='color:#000000;'><br /></span></span><br><span style=''></span><br><span style=''><i>too - слишком, очень</i></span>","STT":140},
{"FRONT":"<span style='font-size: 28px; '>They didn't walk to the pub; <b>they </b><span class=indam>t____</span><b> the bus</b>. <i>(went by)</i>[sound:rec1359828421.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejzdruj.png' /></span>","BACK":"<span style='font-size: 28px; '>They didn't walk to the pub; <b>they </b><span class=indam>took</span><b> the bus</b>.[sound:rec1359828425.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>take - took - taken</span><br /><i>to take (a bus) - поехать на автобусе</i></span>","STT":141},
{"FRONT":"<span style='font-size: 28px; '>When you went to France, did you stay at <span class=indam>a c_____</span>? <i>(a place for camping)</i>[sound:rec1359827513.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuptfqh.png' /></span>","BACK":"<span style='font-size: 28px; '>When you went to France, did you stay at<span class=indam> a</span> <span class=indam>campsite</span>?[sound:rec1359827519.mp3]</span><br><span style=''></span><br><span style=''><i>a campsite - место для разбивки лагеря</i><br></span>","STT":142},
{"FRONT":"<span style='font-size: 28px; '>When we saw the criminal, <b>we </b><span class=indam>im_____</span><b> contacted the police. </b><i>(without pause, without waiting)</i>[sound:rec1359827926.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqdt23j.jpg' /></span>","BACK":"<span style='font-size: 28px; '>When we saw the criminal,<b> we </b><span class=indam>imm</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>diately</span><b> contacted the police.</b> [sound:rec1359828437.mp3]</span><br><span style=''></span><br><span style=''><i>imm</i><span style='font-style:italic; color:#ff5500;'>e</span><i>diately - тотчас же, сразу же, немедленно</i></span>","STT":143},
{"FRONT":"<span style='font-size: 28px; '>Look. <b>Her lips are </b><span class=indam>d______</span><b> colours.</b>[sound:rec1361877162.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteovzf9l.png' /></span>","BACK":"<span style='font-size: 28px; '>Look. <b>Her lips are </b><span class=indam>different</span><b> colours.</b>[sound:rec1361877167.mp3]</span><br><span style=''></span><br><span style=''><i>different (adj.) - разный, различный</i></span>","STT":144},
{"FRONT":"<span style='font-size: 28px; '>We <span class=indam>u___</span> our ears to hear.[sound:rec1361877175.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteve4a0u.png' /></span>","BACK":"<span style='font-size: 28px; '>We <span class=indam>use</span> our ears to hear.[sound:rec1361877182.mp3]</span><br><span style=''></span><br><span style=''><i>to use sth. - пользоваться, использовать</i></span>","STT":145},
{"FRONT":"<span style='font-size: 28px; '>We <span class=indam>u___</span> our eyes to see.[sound:rec1361877209.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteujehvt.png' /></span>","BACK":"<span style='font-size: 28px; '>We <span class=indam>use</span> our eyes to see.[sound:rec1361877216.mp3]</span><br><span style=''></span><br><span style=''><i>to use sth. - пользоваться, использовать</i></span>","STT":146},
{"FRONT":"<span style='font-size: 28px; '>We <span class=indam>u___</span> our nose to smell.[sound:rec1361877223.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterodooz.png' /></span>","BACK":"<span style='font-size: 28px; '>We <span class=indam>use</span> our nose to smell.[sound:rec1361877229.mp3]</span><br><span style=''></span><br><span style=''><i>to use sth. - пользоваться, использовать</i></span>","STT":147},
{"FRONT":"<span style='font-size: 28px; '>On weekends I often go <span class=indam>_______</span> in the park.[sound:rec1367141570.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuqcgmn.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>On weekends I often go <span class=indam>ice-skating</span> in the park.[sound:rec1367141599.mp3]<br /></span><br><span style=''></span><br><span style=''><i>to go ice-skating</i><br></span>","STT":148},
{"FRONT":"<span style='font-size: 28px; '>Would you like <span class=indam>____</span> in your drink? <i>(frozen water)</i>[sound:rec1361877237.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenlu_0z.png' /></span>","BACK":"<span style='font-size: 28px; '>Would you like <span class=indam>ice</span> in your drink?[sound:rec1361877243.mp3]</span><br><span style=''></span><br><span style=''><i>ice (n.) - </i></span>","STT":149},
{"FRONT":"<span style='font-size: 28px; '>I'm going to Aldershot tomorrow,<b> here's my train </b><span class=indam>______</span><b>.</b>[sound:rec1361877072.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteedqmly.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm going to Aldershot tomorrow,<b> here's my train </b><span class=indam>ticket</span><b>.</b>[sound:rec1361877078.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":150}]

if (localStorage.caumayEn_SG_11 == null) {
    localStorage.caumayEn_SG_11 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_11"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_11+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_11).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_11).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_11).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_11+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_11).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_11).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_11).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_11)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_11))
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
	cau = Number(localStorage.caumayEn_SG_11)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_11)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_11) >  0){
		localStorage.caumayEn_SG_11 = Number(localStorage.caumayEn_SG_11) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_11))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_11)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_11)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_11) < dulieu.length-1){
		localStorage.caumayEn_SG_11 = Number(localStorage.caumayEn_SG_11) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_11))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_11)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_11)].BACK
	dapan = suahienthi(dapan,1).hienthi
	$(".thongbao").removeClass("dapandung")
	var tumoidanh = $("#nhapdapan").val().substr( $("#nhapdapan").val().length-1,1 )
	var nhapdapan = $("#nhapdapan").val().replace('<', "&#60;").toLowerCase()
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
	var current_player = Number(localStorage.caumayEn_SG_11)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_11)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_11)].BACK
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
	cau = Number(localStorage.caumayEn_SG_11)
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
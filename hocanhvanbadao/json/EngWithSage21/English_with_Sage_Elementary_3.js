$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='april.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>April</span>[sound:rec1318411950.mp3]</span><br><span style=''><i>April - апрель</i></span>","INFO":null,"STT":64},
{"FRONT":"<span style='font-size: 28px; '>We can often see the <span class=indam>m____</span> at night.[sound:rec1318413295.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyljuqa.jpg' /></span>","BACK":"<span style='font-size: 28px; '>We can often see the <span class=indam>moon</span> at night.[sound:rec1318413300.mp3]</span><br><span style=''><i>the moon - луна</i></span>","INFO":null,"STT":118},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) It's on the first of May.<br />b) It's on the third of May.[sound:rec1339664604.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) It's on the first of May.</span>[sound:rec1339664604.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":130},
{"FRONT":"<span style='font-size: 28px; '>This man isn't tall; he's very <span class=indam>sh____</span>.[sound:rec1336213823.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehoo19w.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This man isn't tall; he's very <span class=indam>short</span>.[sound:rec1336213832.mp3]</span><br><span style=''><i>short (adj.) - низкий</i></span>","INFO":null,"STT":25},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastemt1op2.jpg' />[sound:rec1318412090.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's half </span><span style='font-weight:600; text-decoration: underline; color:#0000ff;'>past</span><span class=indam> one.</span>[sound:rec1336215688.mp3]</span><br><span style=''></span>","INFO":null,"STT":87},
{"FRONT":"<span style='font-size: 28px; '>Tim is 7 years old today. He's having a <span class=indam>b____</span> party with his friends.[sound:rec1336216249.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2yustu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's having a <span class=indam>birthday</span> party with his friends.[sound:rec1336216258.mp3]</span><br><span style=''><i>a birthday - день рождения</i></span>","INFO":null,"STT":112},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteq20m3g.jpg' />[sound:rec1318412090.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's quarter </span><span style='font-weight:600; text-decoration: underline; color:#0000ff;'>past</span><span class=indam> two.</span><br /><br /><span style='font-style:italic; color:#000000;'>'a quarter' is '1/4'</span>[sound:rec1336215681.mp3]</span><br><span style=''><i>a quarter - четверть</i></span>","INFO":null,"STT":86},
{"FRONT":"<span style='font-size: 28px; '>At the end of the day people <span class=indam>f____</span> work and go home. <i>(end, stop)</i>[sound:rec1336214506.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeqmvuv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>At the end of the day people <span class=indam>finish</span> work and go home. [sound:rec1336214513.mp3]<br /><i><br /></i></span><br><span style=''><i>to finish sth. - заканчивать что-л.</i></span>","INFO":null,"STT":43},
{"FRONT":"<span style='font-size: 28px; '>Every Saturday they play chess. They play chess on <span class=indam>S____</span>.[sound:rec1336913791.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_akwvk.png' /></span>","BACK":"<span style='font-size: 28px; '>Every Saturday they play chess. They play chess on <span class=indam>Saturdays</span>.[sound:rec1336913807.mp3]</span><br><span style=''><i>on Saturdays - по субботам</i></span>","INFO":null,"STT":162},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>5 / 7 / 2005</span>[sound:rec1336216065.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's the fifth of July, two thousand </span><span style='font-weight:600; text-decoration: underline; color:#0000ff;'>and</span><span class=indam> five.</span>[sound:rec1318412667.mp3]</span><br><span style=''></span>","INFO":null,"STT":107},
{"FRONT":"<span style='font-size: 28px; '>San Francisco is next to the sea. It's on the <span class=indam>co____</span>. <i>(the part of land next to the sea)</i>[sound:rec1336216797.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb6r0sp.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's on the <span class=indam>coast</span>.[sound:rec1336216805.mp3]</span><br><span style=''><i>on the coast - на побережье</i></span>","INFO":null,"STT":142},
{"FRONT":"<span style='font-size: 28px; '>&quot;I don't feel well. I feel <span class=indam>i___</span>.&quot;[sound:rec1318413208.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb8muae.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I don't feel well. I feel <span class=indam>ill</span>.&quot;[sound:rec1318413201.mp3]</span><br><span style=''><i>ill (adj.) - больной</i></span>","INFO":null,"STT":115},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastemehgl_.jpg' />[sound:rec1339663927.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>black</span>.[sound:rec1339664063.mp3]<br /><br /><i>or: It's </i><span style='font-style:italic; text-decoration: underline;'>a</span><i> </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>black</span><i> phone.</i></span><br><span style=''><i>black (adj.) - черный</i></span>","INFO":null,"STT":5},
{"FRONT":"<span style='font-size: 28px; '>Elephants aren't small; they're <span class=indam>b____</span>.[sound:rec1336213276.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefhe_wg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Elephants aren't small; they're <span class=indam>big</span>.[sound:rec1336213287.mp3]</span><br><span style=''><i>big (adj.) - большой</i></span>","INFO":null,"STT":10},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='paste9yargg.jpg' />[sound:rec1339664016.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>brown</span>.[sound:rec1339664024.mp3]<br /><br /><i>or: She has </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>brown</span><i> hair.</i></span><br><span style=''><i>brown (adj.) - коричневый</i></span>","INFO":null,"STT":9},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>Ch_____</span> is on 25th December.[sound:rec1336214921.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetkvaxe.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Christmas </span>is on 25th December.[sound:rec1336214930.mp3]</span><br><span style=''><i>Christmas - Рождество</i></span>","INFO":null,"STT":55},
{"FRONT":"<span style='font-size: 28px; '>The opposite of difficult is <span class=indam>e____</span>.[sound:rec1336213888.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejzmems.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The opposite of difficult is <span class=indam>easy</span>.[sound:rec1336213893.mp3]</span><br><span style=''><i>easy (adj.) - легкий, простой</i></span>","INFO":null,"STT":28},
{"FRONT":"<span style='font-size: 28px; '>&quot;I want to sleep, I'm very <span class=indam>ti____</span>.&quot;[sound:rec1336216556.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegvztae.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I want to sleep, I'm very <span class=indam>tired</span>.&quot;[sound:rec1336216564.mp3]<br /><br /></span><br><span style=''><i>tired (adj.) - усталый</i></span>","INFO":null,"STT":122},
{"FRONT":"<span style='font-size: 28px; '>This motorbike isn't slow; it's <span class=indam>f_____</span>[sound:rec1336213434.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedzojyv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This motorbike isn't slow; it's <span class=indam>fast</span>.[sound:rec1336213441.mp3]</span><br><span style=''><i>fast (adj.) - быстрый</i></span>","INFO":null,"STT":14},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) Today's September 12th.<br />b) Today's September 20th.[sound:rec1339664633.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) Today's September 12th.</span><br />[sound:rec1339664633.mp3]</span><br><span style=''></span>","INFO":null,"STT":132},
{"FRONT":"<span style='font-size: 28px; '>-Do you have a break <span class=indam>[...]</span> lunchtime?[sound:rec1336216028.mp3]<br />-No, I don't.<br /><img class='center-block img-responsive hinhdep'  src='paste45gne2.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Do you have a break <span class=indam>at</span> lunchtime?[sound:rec1336216037.mp3]</span><br><span style=''><i>a break - перерыв</i></span>","INFO":null,"STT":102},
{"FRONT":"<span style='font-size: 28px; '>My mother lives in the same town as me. I live <span class=indam>n___</span> my mother. <i>(the opposite of 'far away')</i>[sound:rec1336216734.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevbzsuq.png' /></span>","BACK":"<span style='font-size: 28px; '>I live <span class=indam>near</span> my mother.[sound:rec1336216746.mp3]</span><br><span style=''><i>near - близко</i></span>","INFO":null,"STT":139},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='march.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>March</span>[sound:rec1318411947.mp3]</span><br><span style=''><i>March - март</i></span>","INFO":null,"STT":63},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='paste6yxpk4.jpg' />[sound:rec1339664009.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>green</span>.[sound:rec1339664083.mp3]<br /><br /><i>or: It's </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>green</span><i> grass.</i></span><br><span style=''><i>green (adj.) - зеленый</i></span>","INFO":null,"STT":8},
{"FRONT":"<span style='font-size: 28px; '>That isn't safe; it's <span class=indam>da______</span>.[sound:rec1336213506.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebdkb6w.jpg' /></span>","BACK":"<span style='font-size: 28px; '>That isn't safe; it's <span class=indam>d</span><span class=indam>a</span><span class=indam>ngerous</span>.[sound:rec1336213512.mp3]</span><br><span style=''><i>d</i><span style='font-style:italic; color:#ff0909;'>a</span><i>ngerous (adj.) - опасный</i></span>","INFO":null,"STT":17},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br /><br />a) I'm very angry.<br />b) I'm very hungry.[sound:rec1318413444.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) I'm very hungry.</span>[sound:rec1318413444.mp3]</span><br><span style=''></span>","INFO":null,"STT":125},
{"FRONT":"<span style='font-size: 28px; '>This woman doesn't have much money - she's <span class=indam>p____</span>.[sound:rec1336213664.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten6_a0z.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This woman doesn't have much money - she's <span class=indam>poor</span>.[sound:rec1336213670.mp3]</span><br><span style=''><i>poor (adj.) - бедный</i></span>","INFO":null,"STT":23},
{"FRONT":"<span style='font-size: 28px; '>The shops are usually <span class=indam>b___</span> at Christmas. <i>(there are lots of people)</i>[sound:rec1336216991.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexv3z2w.png' /></span>","BACK":"<span style='font-size: 28px; '>They're usually <span class=indam>busy</span> at Christmas.[sound:rec1336217002.mp3]</span><br><span style=''><i>busy (adj.) - там много народу</i></span>","INFO":null,"STT":155},
{"FRONT":"<span style='font-size: 28px; '>She usually <span class=indam>sl____</span> for 8 hours.[sound:rec1336214727.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterl60sv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She usually <span class=indam>sleeps</span> for 8 hours.[sound:rec1336214736.mp3]<br /><br /></span><br><span style=''><i>to sleep - спать</i></span>","INFO":null,"STT":49},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastebyertn.jpg' />[sound:rec1318412090.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's quarter </span><span style='font-weight:600; text-decoration: underline; color:#0000ff;'>to</span><span class=indam> eight.</span><br /><br /><span style='font-style:italic; color:#000000;'>'a quarter' is '1/4'</span>[sound:rec1336215667.mp3]</span><br><span style=''><i>a quarter - четверть</i></span>","INFO":null,"STT":85},
{"FRONT":"<span style='font-size: 28px; '>We go <span class=indam>sk____</span> in the winter.[sound:rec1336216606.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqmroiv.png' /></span>","BACK":"<span style='font-size: 28px; '>We go <span class=indam>skiing</span> in the winter.[sound:rec1336216612.mp3]</span><br><span style=''><i>to go skiing - кататься на лыжах</i></span>","INFO":null,"STT":134},
{"FRONT":"<span style='font-size: 28px; '>He isn't beautiful; he's <span class=indam>u____</span>.[sound:rec1336213526.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelmk2sg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He isn't beautiful; he's <span class=indam>ugly</span>.[sound:rec1336213531.mp3]</span><br><span style=''><i>ugly (adj.) - уродливый, некрасивый</i></span>","INFO":null,"STT":18},
{"FRONT":"<span style='font-size: 28px; '>Look at the beautiful <span class=indam>f_____</span>![sound:rec1336216753.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0jdnrv.png' /></span>","BACK":"<span style='font-size: 28px; '>Look at the beautiful <span class=indam>fountains</span>![sound:rec1336216757.mp3]<br /><br /></span><br><span style=''><i>a fountain - фонтан</i><br></span>","INFO":null,"STT":140},
{"FRONT":"<span style='font-size: 28px; '>Please <span class=indam>s____ u__</span>![sound:rec1336216923.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemrafdx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Please <span class=indam>stand up</span>![sound:rec1336216927.mp3]<br /><br /></span><br><span style=''><i>Stand up! - Встаньте!</i></span>","INFO":null,"STT":152},
{"FRONT":"<span style='font-size: 28px; '>It's often cold <span class=indam>[...]</span> January.[sound:rec1318412952.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemoot1b.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's often cold <span class=indam>in</span> January.[sound:rec1336216895.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":149},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='december.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>December</span>[sound:rec1318411974.mp3]</span><br><span style=''><i>December - декабрь</i></span>","INFO":null,"STT":72},
{"FRONT":"<span style='font-size: 28px; '>Please <span class=indam>s___ d____</span>![sound:rec1336216914.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedkwq6i.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Please <span class=indam>sit down</span>![sound:rec1336216918.mp3]<br /><br /></span><br><span style=''><i>Sit down! - Садитесь!</i></span>","INFO":null,"STT":151},
{"FRONT":"<span style='font-size: 28px; '>He isn't dry; he's <span class=indam>w____</span>.[sound:rec1336213642.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1cdfix.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He isn't dry; he's <span class=indam>wet</span>.[sound:rec1336213647.mp3]</span><br><span style=''><i>wet (adj.) - мокрый</i></span>","INFO":null,"STT":22},
{"FRONT":"<span style='font-size: 28px; '>He isn't poor; he's <span class=indam>r____</span>.[sound:rec1336213567.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexrhjwd.png' /></span>","BACK":"<span style='font-size: 28px; '>He isn't poor; he's <span class=indam>rich</span>.[sound:rec1336213572.mp3]</span><br><span style=''><i>rich (adj.) - богатый</i></span>","INFO":null,"STT":20},
{"FRONT":"<span style='font-size: 28px; '>They <span class=indam>n____</span> drive - they don't have a car. <i>(the opposite of 'always')</i>[sound:rec1336215724.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewmlz1k.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They <span class=indam>never</span> drive - they don't have a car.[sound:rec1336215730.mp3]</span><br><span style=''><i>never - никогда</i></span>","INFO":null,"STT":89},
{"FRONT":"<span style='font-size: 28px; '>In many countries shops are closed <span class=indam>[...]</span> Sundays.[sound:rec1336215942.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebxem_d.jpg' /></span>","BACK":"<span style='font-size: 28px; '>In many countries shops are closed <span class=indam>on</span> Sundays.[sound:rec1336215949.mp3]</span><br><span style=''></span>","INFO":null,"STT":97},
{"FRONT":"<span style='font-size: 28px; '>This <span class=indam>b___</span> is empty.[sound:rec1336216902.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqzgc8y.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This <span class=indam>box</span> is empty.[sound:rec1336216907.mp3]<br /><br /></span><br><span style=''><i>a box - коробка</i><br></span>","INFO":null,"STT":150},
{"FRONT":"<span style='font-size: 28px; '>I always <span class=indam>p___</span> food in the fridge.[sound:rec1336217041.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepf5db1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I always <span class=indam>put</span> food in the fridge.[sound:rec1336217053.mp3]<br /><br /></span><br><span style=''><i>to put sth. - класть, ставить</i></span>","INFO":null,"STT":158},
{"FRONT":"<span style='font-size: 28px; '>Coffee usually comes in three sizes:[sound:rec1318413776.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteckku_b.png' /><br />small&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;regular&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=indam>l_____</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>","BACK":"<span style='font-size: 28px; '><span class=indam>large</span>[sound:rec1318413803.mp3]</span><br><span style=''></span>","INFO":null,"STT":145},
{"FRONT":"<span style='font-size: 28px; '>She<span class=indam> g___ dr____</span> before she has breakfast. <i>(puts on her clothes)</i>[sound:rec1336214309.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteundj7v.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She<span class=indam> gets dressed</span> before she has breakfast. [sound:rec1336214320.mp3]<br /><br /></span><br><span style=''><i>to get dressed - одеваться</i></span>","INFO":null,"STT":38},
{"FRONT":"<span style='font-size: 28px; '>The Soviet Union ended <span class=indam>[...]</span> 1991.[sound:rec1336215277.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteihqoru.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It ended <span class=indam>in</span> 1991.[sound:rec1336215285.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":60},
{"FRONT":"<span style='font-size: 28px; '>They <span class=indam>g___</span> to work on the Underground every day.[sound:rec1336214428.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastem0w_i7.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They <span class=indam>go</span> to work on the Underground every day.[sound:rec1336214438.mp3]<br /><br /></span><br><span style=''><i>to go to work - ходить на работу</i></span>","INFO":null,"STT":41},
{"FRONT":"<span style='font-size: 28px; '>In Italy it's usually very hot <span class=indam>[...]</span> the summer.[sound:rec1336215921.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexgu2d5.jpg' /></span>","BACK":"<span style='font-size: 28px; '>In Italy it's usually very hot <span class=indam>in</span> the summer.[sound:rec1336215928.mp3]</span><br><span style=''></span>","INFO":null,"STT":96},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1339663896.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepvhxux.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They're <span class=indam>blue</span>.[sound:rec1339664038.mp3]<br /><br /><i>or: They're </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>blue</span><i> shoes.</i></span><br><span style=''><i>blue (adj.) - синий, голубой</i></span>","INFO":null,"STT":1},
{"FRONT":"<span style='font-size: 28px; '>We can often see the moon <span class=indam>[...]</span> night.[sound:rec1318412491.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyljuqa.jpg' /></span>","BACK":"<span style='font-size: 28px; '>We can often see the moon <span class=indam>at</span> night.[sound:rec1318412504.mp3]</span><br><span style=''></span>","INFO":null,"STT":100},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>E____</span> Saturday they play chess. They play chess on Saturdays.[sound:rec1336913759.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_akwvk.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Every</span> Saturday they play chess. They play chess on Saturdays.[sound:rec1336913769.mp3]</span><br><span style=''><i>every - каждый</i></span>","INFO":null,"STT":161},
{"FRONT":"<span style='font-size: 28px; '>Spring, summer, autumn and winter are the four <span class=indam>se_____</span>.[sound:rec1336215574.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteftye0x.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Spring, summer, autumn and winter are the four <span class=indam>seasons</span><span style='color:#000000;'>.</span>[sound:rec1336215582.mp3]<br /><br /></span><br><span style=''><i>a season - время года</i></span>","INFO":null,"STT":78},
{"FRONT":"<span style='font-size: 28px; '>&quot;I <span class=indam>g___ sh____</span> on Saturdays.&quot;[sound:rec1336214544.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteukotoy.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I <span class=indam>go shopping</span> on Saturdays.&quot;[sound:rec1336214550.mp3]<br /><i><br /></i></span><br><span style=''><i>to go shopping - ходить по магазинам, делать покупки</i></span>","INFO":null,"STT":45},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) It's on the first of May.<br />b) It's on the third of May.&nbsp;&nbsp;[sound:rec1339664615.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) It's on the third of May.</span>[sound:rec1339664615.mp3]</span><br><span style=''></span>","INFO":null,"STT":131},
{"FRONT":"<span style='font-size: 28px; '>Mount Everest isn't low; it's <span class=indam>h____</span>.[sound:rec1336213618.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasted71vfl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Mount Everest isn't low; it's <span class=indam>high</span>.[sound:rec1336213629.mp3]</span><br><span style=''><i>high (adj.) - высокий</i></span>","INFO":null,"STT":21},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> December 31st many people drink champagne at midnight.[sound:rec1336215809.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemp15dx.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>On</span> December 31st many people drink champagne at midnight.[sound:rec1336215817.mp3]</span><br><span style=''></span>","INFO":null,"STT":93},
{"FRONT":"<span style='font-size: 28px; '>I sleep only 4 hours a night. I <span class=indam>d___</span> sleep <span class=indam>very</span> <span class=indam>m____</span>.[sound:rec1336216775.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehr_oqc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I <span class=indam>don't</span> sleep <span class=indam>very much</span>.[sound:rec1336216787.mp3]</span><br><span style=''><i>not very much - не очень много</i></span>","INFO":null,"STT":141},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='november.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>November</span>[sound:rec1318411970.mp3]</span><br><span style=''><i>November - ноябрь</i></span>","INFO":null,"STT":71},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) It's quarter past ten.<br />b) It's quarter to ten.&nbsp;&nbsp;[sound:rec1318413465.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) It's quarter to ten.</span> [sound:rec1318413465.mp3]</span><br><span style=''></span>","INFO":null,"STT":127},
{"FRONT":"<span style='font-size: 28px; '>Traditionally, British people have a cup of tea <span class=indam>[...]</span> five o'clock.[sound:rec1336215982.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuzs1fb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Traditionally, British people have a cup of tea <span class=indam>at</span> five o'clock.[sound:rec1336215990.mp3]</span><br><span style=''></span>","INFO":null,"STT":99},
{"FRONT":"<span style='font-size: 28px; '>He often<span class=indam> g___ to sl____</span> in front of the TV.[sound:rec1336214632.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyjxlqi.png' /></span>","BACK":"<span style='font-size: 28px; '>He often<span class=indam> goes to sleep</span> in front of the TV.[sound:rec1336214697.mp3]<br /><i><br /></i></span><br><span style=''><i>to go to sleep - засыпать</i></span>","INFO":null,"STT":47},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>st____</span> work at 9:00am every morning. <i>(begins)</i>[sound:rec1336214485.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejhmz6k.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>starts</span> work at 9:00am every morning.[sound:rec1336214492.mp3]<br /><br /></span><br><span style=''><i>to start sth. - начинать что-л.</i><br></span>","INFO":null,"STT":42},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>4 / 3 / 2000</span>[sound:rec1336216065.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's the fourth of March, two thousand.</span>[sound:rec1318412659.mp3]</span><br><span style=''></span>","INFO":null,"STT":106},
{"FRONT":"<span style='font-size: 28px; '>Coffee usually comes in three <span class=indam>s____</span>:[sound:rec1318413810.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteckku_b.png' /><br />small&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;regular&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;large&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>","BACK":"<span style='font-size: 28px; '>three <span class=indam>sizes</span>[sound:rec1318413816.mp3]<br /><br /></span><br><span style=''><i>a size - размер</i></span>","INFO":null,"STT":146},
{"FRONT":"<span style='font-size: 28px; '>We usually <span class=indam>g___ to b____</span> at 9:00pm.[sound:rec1336214607.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemchjgu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>We usually <span class=indam>go to bed</span> at 9:00pm.[sound:rec1336214613.mp3]<br /><br /></span><br><span style=''><i>to go to bed - ложиться спать</i><br></span>","INFO":null,"STT":46},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='august.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>August</span>[sound:rec1318411961.mp3]</span><br><span style=''><i>August - август</i></span>","INFO":null,"STT":68},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastelhjmii.jpg' />[sound:rec1339663936.mp3]</span>","BACK":"<span style='font-size: 28px; '>They're <span class=indam>white</span>.[sound:rec1339664070.mp3]<br /><br /><i>or: They're </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>white</span><i> trousers.</i></span><br><span style=''><i>white (adj.) - белый</i></span>","INFO":null,"STT":6},
{"FRONT":"<span style='font-size: 28px; '>He often makes <span class=indam>m____</span>. <i>(does something wrong)</i>[sound:rec1336217023.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekmcy_e.png' /></span>","BACK":"<span style='font-size: 28px; '>He often makes <span class=indam>mistakes</span>.[sound:rec1336217029.mp3]<br /><br /></span><br><span style=''><i>a mistake - ошибка</i></span>","INFO":null,"STT":157},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='september.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>September</span>[sound:rec1318411964.mp3]</span><br><span style=''><i>September - сентябрь</i></span>","INFO":null,"STT":69},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='july.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>July</span>[sound:rec1318411958.mp3]</span><br><span style=''><i>July - июль</i></span>","INFO":null,"STT":67},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>w____ __</span> early every morning.[sound:rec1336214221.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewbb5u4.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>wakes up</span> early every morning.[sound:rec1336214229.mp3]<br /><br /></span><br><span style=''><i>to wake up - просыпаться</i></span>","INFO":null,"STT":35},
{"FRONT":"<span style='font-size: 28px; '>This problem isn't easy; it's <span class=indam>di______</span>.[sound:rec1336213360.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteobsnmt.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This problem isn't easy; it's <span class=indam>difficult</span>.[sound:rec1336213367.mp3]</span><br><span style=''><i>difficult (adj.) - сложный</i></span>","INFO":null,"STT":13},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasten6e5ik.jpg' />[sound:rec1318412090.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's three o'clock.</span>[sound:rec1318412108.mp3]</span><br><span style=''></span>","INFO":null,"STT":80},
{"FRONT":"<span style='font-size: 28px; '>She's got lots of <span class=indam>cl____</span>. <i>(things to wear) </i>[sound:rec1336216290.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevjo9rx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She's got lots of <span class=indam>clothes</span>. [sound:rec1336216296.mp3]</span><br><span style=''><i>clothes (n.) - одежда</i></span>","INFO":null,"STT":114},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='paste0473kw.jpg' />[sound:rec1318412090.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's twenty-five </span><span style='font-weight:600; text-decoration: underline; color:#0000ff;'>past</span><span class=indam> six.</span><br />[sound:rec1336215647.mp3]</span><br><span style=''></span>","INFO":null,"STT":82},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>3 / 8 / 1995</span>[sound:rec1336216065.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's the third of August, nineteen ninety-five.</span>[sound:rec1318412651.mp3]</span><br><span style=''></span>","INFO":null,"STT":105},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) Today's September 12th.<br />b) Today's September 20th.&nbsp;&nbsp;[sound:rec1339664645.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) Today's September 20th.</span>[sound:rec1339664645.mp3]</span><br><span style=''></span>","INFO":null,"STT":133},
{"FRONT":"<span style='font-size: 28px; '>&quot;Today is Friday <span class=indam>[...]</span> June.&quot;[sound:rec1336215145.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexn0lzs.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Today is Friday <span class=indam>21st</span> June.&quot;[sound:rec1336215152.mp3]<br /><br /></span><br><span style=''><i>we say: 'Friday </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>the</span><i> twenty-first </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>of</span><i> June'</i></span>","INFO":null,"STT":57},
{"FRONT":"<span style='font-size: 28px; '>He<span class=indam> g____ __</span> at 7:00am every day.[sound:rec1336214259.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqzptvr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He<span class=indam> gets up</span> at 7:00am every day.[sound:rec1336214267.mp3]<br /><br /></span><br><span style=''><i>to get up - вставать</i></span>","INFO":null,"STT":36},
{"FRONT":"<span style='font-size: 28px; '>We <span class=indam>us____</span> get up at 7.30am, except at weekends. <i>(most days) </i>[sound:rec1336215766.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3410se.jpg' /></span>","BACK":"<span style='font-size: 28px; '>We <span class=indam>usually</span> get up at 7.30am, except at weekends.[sound:rec1336215777.mp3]</span><br><span style=''><i>usually - обычно</i></span>","INFO":null,"STT":91},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1339663917.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9lo5yt.png' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>grey</span>.[sound:rec1339664056.mp3]<br /><br /><i>or: It's </i><span style='font-style:italic; text-decoration: underline;'>a</span><i> </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>grey</span><i> sky.</i></span><br><span style=''><i>grey (adj.) - серый</i></span>","INFO":null,"STT":4},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='june.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>June</span>[sound:rec1318411955.mp3]</span><br><span style=''><i>June - июнь</i></span>","INFO":null,"STT":66},
{"FRONT":"<span style='font-size: 28px; '>The year starts <span class=indam>[...]</span> 1st January.[sound:rec1336214881.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteacrelo.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It starts <span class=indam>on</span> 1st January.[sound:rec1336214893.mp3]<br /><br /></span><br><span style=''><i>we say: '</i><span style='font-weight:600; font-style:italic; color:#0000ff;'>the</span><i> first </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>of</span><i> January'</i></span>","INFO":null,"STT":53},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>Ea____</span> is a Christian festival in spring.[sound:rec1336215618.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefttzcu.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Easter </span>is a Christian festival in spring.[sound:rec1336215624.mp3]</span><br><span style=''><i>Easter - Пасха</i></span>","INFO":null,"STT":79},
{"FRONT":"<span style='font-size: 28px; '>In Spain many people have a siesta <span class=indam>[...]</span> the afternoon.[sound:rec1336215961.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2kyvuw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>In Spain many people have a siesta <span class=indam>in</span> the afternoon.[sound:rec1336215971.mp3]</span><br><span style=''></span>","INFO":null,"STT":98},
{"FRONT":"<span style='font-size: 28px; '>In Britain, children <span class=indam>b____</span> school when they are 5 years old. <i>(start)</i>[sound:rec1336216945.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteopyfct.png' /></span>","BACK":"<span style='font-size: 28px; '>In Britain, children <span class=indam>begin</span> school when they are 5 years old.[sound:rec1336216958.mp3]<br /><br /></span><br><span style=''><i>to begin sth. - начинать что-л.</i></span>","INFO":null,"STT":153},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>t____</span> her dog for a walk every afternoon.[sound:rec1336214825.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste44dhtg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>takes</span> her dog for a walk every afternoon.[sound:rec1336214832.mp3]<br /><br /></span><br><span style=''><i>to take a dog for a walk - выгуливать собаку</i></span>","INFO":null,"STT":50},
{"FRONT":"<span style='font-size: 28px; '>Today is Monday 21st July. On Monday 28th July I'm going to America. I'm going to America <span class=indam>[...]</span> one week.[sound:rec1318413615.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteexurku.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I'm going to America <span class=indam>in</span> one week.[sound:rec1336216664.mp3]<br /><br /></span><br><span style=''><i>in one week - через неделю</i></span>","INFO":null,"STT":137},
{"FRONT":"<span style='font-size: 28px; '>I don't do a lot of exercise but I <span class=indam>so____</span> go swimming. <i>(for example, once a month)</i>[sound:rec1336215791.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste6ypzvv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I don't do a lot of exercise but I <span class=indam>sometimes</span> go swimming.[sound:rec1336215799.mp3]</span><br><span style=''><i>sometimes - иногда</i></span>","INFO":null,"STT":92},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='february.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>February</span>[sound:rec1318411942.mp3]</span><br><span style=''><i>February - февраль</i></span>","INFO":null,"STT":62},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1339663902.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1un4bn.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>red</span>.[sound:rec1339664031.mp3]<br /><br /><i>or: It's </i><span style='font-style:italic; text-decoration: underline;'>a</span><i> </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>red</span><i> car.</i></span><br><span style=''><i>red (adj.) - красный</i><br></span>","INFO":null,"STT":0},
{"FRONT":"<span style='font-size: 28px; '>This man eats too much - he's very <span class=indam>f____</span>![sound:rec1336213913.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenez3zf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This man eats too much - he's very <span class=indam>fat</span>![sound:rec1336213920.mp3]</span><br><span style=''><i>fat (adj.) - жирный, толстый</i></span>","INFO":null,"STT":29},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='january.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>January</span>[sound:rec1318411938.mp3]</span><br><span style=''><i>January - январь</i><br></span>","INFO":null,"STT":61},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='october.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>October</span>[sound:rec1318411967.mp3]</span><br><span style=''><i>October - октябрь</i></span>","INFO":null,"STT":70},
{"FRONT":"<span style='font-size: 28px; '>The year starts on <span class=indam>[...]</span> January.[sound:rec1336215113.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteacrelo.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The year starts on <span class=indam>1st</span> January.[sound:rec1336215122.mp3]<br /><br /></span><br><span style=''><i>we say: '</i><span style='font-weight:600; font-style:italic; color:#0000ff;'>the</span><i> first </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>of</span><i> January'</i></span>","INFO":null,"STT":56},
{"FRONT":"<span style='font-size: 28px; '>He often goes to sleep <span class=indam>i__ f_____ o__</span> the TV.[sound:rec1336214709.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyjxlqi.png' /></span>","BACK":"<span style='font-size: 28px; '>He often goes to sleep <span class=indam>in front of</span> the TV.[sound:rec1336214716.mp3]</span><br><span style=''><i>in front of sth. - перед чем-л.</i></span>","INFO":null,"STT":48},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>h___ a sh____</span> every morning.[sound:rec1336214283.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebwlwz6.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>has a shower</span> every morning.[sound:rec1336214290.mp3]<br /><i><br /></i></span><br><span style=''><i>to have a shower - принимать душ</i></span>","INFO":null,"STT":37},
{"FRONT":"<span style='font-size: 28px; '>On December 31st many people drink champagne <span class=indam>[...]</span> midnight.[sound:rec1336215828.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemp15dx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>On December 31st many people drink champagne <span class=indam>at</span> midnight.[sound:rec1336215839.mp3]</span><br><span style=''></span>","INFO":null,"STT":94},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1339663888.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenaicrt.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>yellow</span>.[sound:rec1339664044.mp3]<br /><br /><i>or: It's </i><span style='font-style:italic; text-decoration: underline;'>a</span><i> </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>yellow</span><i> duckling.</i></span><br><span style=''><i>yellow (adj.) - желтый</i></span>","INFO":null,"STT":2},
{"FRONT":"<span style='font-size: 28px; '>It's 2060 <span class=indam>k____</span> to Chita.[sound:rec1336216458.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemcy22x.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's 2060 <span class=indam>kil</span><span class=indam>o</span><span class=indam>metres</span> to Chita.[sound:rec1336216464.mp3]</span><br><span style=''><i>a kilometre - километр</i></span>","INFO":null,"STT":120},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> the opposite of good?[sound:rec1318411157.mp3]<br />-Bad<br /><img class='center-block img-responsive hinhdep'  src='pasteoj3kur.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>What's</span> the opposite of good?[sound:rec1318411166.mp3]</span><br><span style=''></span>","INFO":null,"STT":148},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br><br /><br />a) It's quarter past ten.<br />b) It's quarter to ten.[sound:rec1318413456.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) It's quarter past ten.</span>[sound:rec1318413456.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":126},
{"FRONT":"<span style='font-size: 28px; '>These clothes aren't dirty; they're <span class=indam>cl____</span>.[sound:rec1336213478.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenftono.jpg' /></span>","BACK":"<span style='font-size: 28px; '>These clothes aren't dirty; they're <span class=indam>clean</span>.[sound:rec1336213486.mp3]</span><br><span style=''><i>clean (adj.) - чистый</i></span>","INFO":null,"STT":16},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>L____</span> become brown in autumn.[sound:rec1336216863.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezipxxy.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Leaves</span> become brown in autumn.<i> </i>[sound:rec1336216873.mp3]<br /><i><br /></i></span><br><span style=''><span style='font-style:italic; color:#000000;'>a leaf - лист</span><br></span>","INFO":null,"STT":147},
{"FRONT":"<span style='font-size: 28px; '>He often <span class=indam>m____</span> mistakes.[sound:rec1336217009.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekmcy_e.png' /></span>","BACK":"<span style='font-size: 28px; '>He often <span class=indam>makes</span> mistakes.[sound:rec1336217015.mp3]<br /><br /></span><br><span style=''><i>to make a mistake - сделать ошибку</i></span>","INFO":null,"STT":156},
{"FRONT":"<span style='font-size: 28px; '>He doesn't have a watch so he's <span class=indam>al____</span> late. <i>(the opposite of 'never')</i>[sound:rec1336215739.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4nuayx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He doesn't have a watch so he's <span class=indam>always</span> late.[sound:rec1336215746.mp3]</span><br><span style=''><i>always - всегда</i></span>","INFO":null,"STT":90},
{"FRONT":"<span style='font-size: 28px; '>It's often sunny in <span class=indam>su_____</span>. <i>(the season from June to August)</i>[sound:rec1336215349.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewdqohm.png' /></span>","BACK":"<span style='font-size: 28px; '>It's often sunny in <span class=indam>summer</span>. [sound:rec1336215357.mp3]</span><br><span style=''><i>summer - лето</i><br><i>in summer - летом</i></span>","INFO":null,"STT":75},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>1 / 11 / 1903</span>[sound:rec1336216065.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's the first of November, nineteen 'o' three.</span>[sound:rec1318412636.mp3]</span><br><span style=''></span>","INFO":null,"STT":103},
{"FRONT":"<span style='font-size: 28px; '>Coffee usually comes in three sizes:[sound:rec1318413776.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteckku_b.png' /><br />small&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=indam>r_____</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;large&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>","BACK":"<span style='font-size: 28px; '><span class=indam>regular</span>[sound:rec1318413789.mp3]</span><br><span style=''></span>","INFO":null,"STT":144},
{"FRONT":"<span style='font-size: 28px; '>Rolex watches aren't cheap, they're <span class=indam>ex____</span>.[sound:rec1336213303.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh4cdry.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Rolex watches aren't cheap, they're <span class=indam>expensive</span>.[sound:rec1336213309.mp3]</span><br><span style=''><i>expensive (adj.) - дорогой</i></span>","INFO":null,"STT":11},
{"FRONT":"<span style='font-size: 28px; '>It's 30 <span class=indam>m____</span> to London.[sound:rec1336216472.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehoty5c.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's 30 <span class=indam>m</span><span class=indam>i</span><span class=indam>les</span> to London.[sound:rec1336216477.mp3]<br /><br /></span><br><span style=''><i>a mile - миля</i><br /><i>(in the UK and the USA, people use </i><span style='font-weight:600; font-style:italic;'>miles</span><i>, not </i><span style='font-weight:600; font-style:italic;'>kilometres</span><i>)</i></span>","INFO":null,"STT":119},
{"FRONT":"<span style='font-size: 28px; '>She usually sleeps <span class=indam>[...]</span> 8 hours.[sound:rec1336214760.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterl60sv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She usually sleeps <span class=indam>for</span> 8 hours.[sound:rec1336214769.mp3]</span><br><span style=''></span>","INFO":null,"STT":159},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteez0ans.jpg' />[sound:rec1318412090.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's one o'clock.</span>[sound:rec1318412123.mp3]</span><br><span style=''></span>","INFO":null,"STT":81},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>2 / 5 / 1854</span>[sound:rec1336216065.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's the second of May, eighteen fifty-four.</span>[sound:rec1318412643.mp3]</span><br><span style=''></span>","INFO":null,"STT":104},
{"FRONT":"<span style='font-size: 28px; '>&quot;Thank you.&quot;<br />&quot;You're <span class=indam>w_____</span>.&quot;[sound:rec1336216579.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_dlz4k.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;You're <span class=indam>welcome</span>.&quot;[sound:rec1336216586.mp3]<br /><br /></span><br><span style=''><i>You're welcome. - Пожалуйста.</i><br /><i>the usual answer to 'thank you'</i></span>","INFO":null,"STT":123},
{"FRONT":"<span style='font-size: 28px; '>Leaves become brown <span class=indam>[...]</span> autumn.[sound:rec1336215549.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteufk_9j.png' /></span>","BACK":"<span style='font-size: 28px; '>Leaves become brown <span class=indam>in</span> autumn.[sound:rec1336215556.mp3]</span><br><span style=''></span>","INFO":null,"STT":160},
{"FRONT":"<span style='font-size: 28px; '>This woman has <span class=indam>bl_____</span> hair. <i>(light colour)</i>[sound:rec1336213967.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekjr5il.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This woman has <span class=indam>blonde</span> hair.[sound:rec1336213972.mp3]</span><br><span style=''><i>blonde (adj.) - белокурый, светлый</i></span>","INFO":null,"STT":31},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br><br>a) She gets home at five.<br />b) She goes home at five.[sound:rec1318413476.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) She gets home at five.</span>[sound:rec1318413476.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":128},
{"FRONT":"<span style='font-size: 28px; '>A piece of land with sea all around it is an <span class=indam>is____</span>.[sound:rec1336216378.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteywekr8.png' /></span>","BACK":"<span style='font-size: 28px; '>A piece of land with sea all around it is an <span class=indam>island</span>.[sound:rec1336216386.mp3]</span><br><span style=''><i>an island - остров</i></span>","INFO":null,"STT":116},
{"FRONT":"<span style='font-size: 28px; '>She doesn't have blonde hair - she has <span class=indam>d____</span> hair.[sound:rec1336214018.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebskorh.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She has <span class=indam>dark</span> hair.[sound:rec1336214032.mp3]</span><br><span style=''><i>dark (adj.) - темный</i></span>","INFO":null,"STT":32},
{"FRONT":"<span style='font-size: 28px; '>This man is <span class=indam>v____</span> tall.[sound:rec1336214045.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastennc8eu.png' /></span>","BACK":"<span style='font-size: 28px; '>This man is <span class=indam>very</span> tall.[sound:rec1336214054.mp3]</span><br><span style=''><i>very - очень</i></span>","INFO":null,"STT":33},
{"FRONT":"<span style='font-size: 28px; '>The First World War started <span class=indam>[...]</span> 1914.[sound:rec1336215251.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteg1clph.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It started <span class=indam>in</span> 1914.[sound:rec1336215259.mp3]</span><br><span style=''></span>","INFO":null,"STT":59},
{"FRONT":"<span style='font-size: 28px; '>Amelia's birthday is <span class=indam>[...]</span> 9th February.[sound:rec1336214858.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteck2s7g.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>on</span> 9th February.[sound:rec1336214866.mp3]<br /><br /><i><br /></i><br /></span><br><span style=''><i>we say: '</i><span style='font-weight:600; font-style:italic; color:#0000ff;'>the</span><i> ninth </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>of</span><i> February'</i></span>","INFO":null,"STT":52},
{"FRONT":"<span style='font-size: 28px; '>&quot;I <span class=indam>h____ e___</span> drink champagne - only at Christmas.&quot; <i>(the opposite of 'usually')</i>[sound:rec1336215707.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezx2ene.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I <span class=indam>hardly ever</span> drink champagne - only at Christmas.&quot;[sound:rec1336215715.mp3]</span><br><span style=''><i>hardly ever - очень редко</i><br></span>","INFO":null,"STT":88},
{"FRONT":"<span style='font-size: 28px; '>The shops are usually busy <span class=indam>[...]</span> Christmas.[sound:rec1336216965.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexv3z2w.png' /></span>","BACK":"<span style='font-size: 28px; '>They're usually busy <span class=indam>at</span> Christmas.[sound:rec1336216979.mp3]</span><br><span style=''><i>at Christmas - на Рождество</i></span>","INFO":null,"STT":154},
{"FRONT":"<span style='font-size: 28px; '>Tim is 7 years old today. He's having a birthday <span class=indam>p____</span> with his friends. <i>(a special celebration)</i>[sound:rec1336216271.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2yustu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's having a birthday <span class=indam>party</span> with his friends. [sound:rec1336216280.mp3]</span><br><span style=''><i>a party - вечеринка, праздник</i></span>","INFO":null,"STT":113},
{"FRONT":"<span style='font-size: 28px; '>The <span class=indam>opp_____</span> of good is bad.[sound:rec1336213862.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoj3kur.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The <span class=indam>opposite</span> of good is bad.[sound:rec1336213875.mp3]</span><br><span style=''><i>opposite (n.) - противоположность</i></span>","INFO":null,"STT":27},
{"FRONT":"<span style='font-size: 28px; '>&quot;Oh no! I always <span class=indam>s____</span> coffee on my desk!&quot;[sound:rec1336216639.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteryd7xh.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Oh no! I always <span class=indam>spill</span> coffee on my desk!&quot;[sound:rec1336216646.mp3]<br /><i><br /></i></span><br><span style=''><i>to spill sth. - проливать что-л.</i></span>","INFO":null,"STT":136},
{"FRONT":"<span style='font-size: 28px; '>We go skiing <span class=indam>[...]</span> the winter.[sound:rec1318413566.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqmroiv.png' /></span>","BACK":"<span style='font-size: 28px; '>We go skiing <span class=indam>in</span> <b>the</b> winter.[sound:rec1318413571.mp3]</span><br><span style=''></span>","INFO":null,"STT":135},
{"FRONT":"<span style='font-size: 28px; '>What time do you<span class=indam> h___ br_____</span>?[sound:rec1336214330.mp3]<br />-At 9:00am.<br /><img class='center-block img-responsive hinhdep'  src='pasteseypg6.png' /></span>","BACK":"<span style='font-size: 28px; '>What time do you<span class=indam> have breakfast</span>?[sound:rec1336214337.mp3]<br /><br /></span><br><span style=''><i>to have breakfast - завтракать</i></span>","INFO":null,"STT":39},
{"FRONT":"<span style='font-size: 28px; '>This car costs only $100! It's <span class=indam>ch____</span>! <i>(the opposite of 'expensive')</i>[sound:rec1336213778.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9loe7x.png' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>cheap</span>![sound:rec1336213793.mp3]</span><br><span style=''><i>cheap (adj.) - дешевый</i><br></span>","INFO":null,"STT":24},
{"FRONT":"<span style='font-size: 28px; '>There are lots of flowers in <span class=indam>sp____</span>!<i> (the season from March to May)</i>[sound:rec1336215324.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevmeyz5.jpg' /></span>","BACK":"<span style='font-size: 28px; '>There are lots of flowers in <span class=indam>spring</span>!<i> </i>[sound:rec1336215329.mp3]</span><br><span style=''><i>spring - весна</i><br /><i>in spring - весной</i></span>","INFO":null,"STT":73},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>6 / 10 / 2010</span>[sound:rec1336216065.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's the sixth of October, two thousand and ten.</span>[sound:rec1318412675.mp3]</span><br><span style=''></span>","INFO":null,"STT":108},
{"FRONT":"<span style='font-size: 28px; '>-What's the <span class=indam>tem_____</span>?[sound:rec1336217199.mp3]<br />-It's 42 degrees Celsius.<br /><img class='center-block img-responsive hinhdep'  src='paste3klcif.png' /></span>","BACK":"<span style='font-size: 28px; '>-What's the <span class=indam>t</span><span class=indam>e</span><span class=indam>mperature</span>?[sound:rec1336216519.mp3]</span><br><span style=''><i>a temperature - температура</i></span>","INFO":null,"STT":121},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteuudops.jpg' />[sound:rec1318412090.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's half </span><span style='font-weight:600; text-decoration: underline; color:#0000ff;'>past</span><span class=indam> four.</span>[sound:rec1336215660.mp3]</span><br><span style=''></span>","INFO":null,"STT":84},
{"FRONT":"<span style='font-size: 28px; '>In the USA they celebrate Independence Day <span class=indam>[...]</span> 4th July.[sound:rec1336215882.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedxfokj.png' /></span>","BACK":"<span style='font-size: 28px; '>In the USA they celebrate Independence Day <span class=indam>on</span> 4th July[sound:rec1336215892.mp3]<br /><br /></span><br><span style=''></span>","INFO":null,"STT":95},
{"FRONT":"<span style='font-size: 28px; '>Christmas is <span class=indam>[...]</span> 25th December.[sound:rec1336214905.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastew_ncft.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Christmas is <span class=indam>on</span> 25th December.[sound:rec1336214912.mp3]<br /><i><br /></i></span><br><span style=''><i>we say: '</i><span style='font-weight:600; font-style:italic; color:#0000ff;'>the</span><i> twenty-fifth </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>of</span><i> December'</i></span>","INFO":null,"STT":54},
{"FRONT":"<span style='font-size: 28px; '>This church isn't new, it's <span class=indam>o___</span>.[sound:rec1336213324.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehlcaww.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This church isn't new, it's <span class=indam>old</span>.[sound:rec1336213330.mp3]</span><br><span style=''><i>old (adj.) - старый</i></span>","INFO":null,"STT":12},
{"FRONT":"<span style='font-size: 28px; '>I live in Tokyo, but my family live in Brazil. I live <span class=indam>f___ a___</span> from my family. <i>(the opposite of 'near')</i>[sound:rec1336216697.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepo6z9z.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I live <span class=indam>far away from</span> my family.[sound:rec1336216707.mp3]</span><br><span style=''><i>far away - далеко</i></span>","INFO":null,"STT":138},
{"FRONT":"<span style='font-size: 28px; '>Sammy <span class=indam>in____</span> you to her birthday party. <i>(she asks you to come)</i>[sound:rec1336216409.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteect2qy.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Sammy <span class=indam>inv</span><span class=indam>i</span><span class=indam>tes</span> you to her birthday party.[sound:rec1336216422.mp3]<br /><br /></span><br><span style=''><i>to invite sb. - приглашать кого-л.</i></span>","INFO":null,"STT":117},
{"FRONT":"<span style='font-size: 28px; '>These boys aren't clean; they're <span class=indam>d_____</span>.[sound:rec1336213456.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetgyglf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>These boys aren't clean; they're <span class=indam>dirty</span>.[sound:rec1336213463.mp3]</span><br><span style=''><i>dirty (adj.) - грязный</i></span>","INFO":null,"STT":15},
{"FRONT":"<span style='font-size: 28px; '>-What's the date today?<br />I don't know. Look at the <span class=indam>ca______</span>.[sound:rec1336216812.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevxwxnx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I don't know. Look at the <span class=indam>c</span><span class=indam>a</span><span class=indam>lendar</span>.[sound:rec1336216833.mp3]</span><br><span style=''><i>a calendar - календарь</i></span>","INFO":null,"STT":143},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='paste5oagos.jpg' />[sound:rec1318412090.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>It's five </span><span style='font-weight:600; text-decoration: underline; color:#0000ff;'>past</span><span class=indam> ten.</span><br />[sound:rec1336215653.mp3]</span><br><span style=''></span>","INFO":null,"STT":83},
{"FRONT":"<span style='font-size: 28px; '>Leaves become brown in <span class=indam>au_____</span>.<i> (the season from September to November)</i>[sound:rec1336215491.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteufk_9j.png' /></span>","BACK":"<span style='font-size: 28px; '>Leaves become brown in <span class=indam>autumn</span>.[sound:rec1336215485.mp3]</span><br><span style=''><i>autumn - осень</i><br /><i>in autumn - осенью</i></span>","INFO":null,"STT":76},
{"FRONT":"<span style='font-size: 28px; '>This woman isn't short; she's <span class=indam>t____</span>.[sound:rec1336213846.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehoo19w.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This woman isn't short; she's <span class=indam>tall</span>.[sound:rec1336213852.mp3]</span><br><span style=''><i>tall (adj.) - высокий</i><br></span>","INFO":null,"STT":26},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1339663910.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1_cmzr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>o</span><span class=indam>range</span>.<br />[sound:rec1339664050.mp3]<br /><i>or: It's </i><span style='font-style:italic; text-decoration: underline;'>an</span><i> </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>orange</span><i> coat.</i></span><br><span style=''><i>orange (adj.) - оранжевый</i></span>","INFO":null,"STT":3},
{"FRONT":"<span style='font-size: 28px; '>He's wearing an orange <span class=indam>c___</span>.[sound:rec1336216128.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1_cmzr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's wearing an orange <span class=indam>coat</span>.[sound:rec1336216145.mp3]</span><br><span style=''><i>а coat - пальто, куртка</i></span>","INFO":null,"STT":109},
{"FRONT":"<span style='font-size: 28px; '>It usually snows in <span class=indam>wi____</span>. <i>(the season from December to February)</i>[sound:rec1336215337.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4amre2.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It usually snows in <span class=indam>winter</span>. [sound:rec1336215342.mp3]</span><br><span style=''><i>winter - зима</i><br /><i>in winter - зимой</i></span>","INFO":null,"STT":74},
{"FRONT":"<span style='font-size: 28px; '>This car costs $20,000. It isn't <i>very</i> expensive, but it's <span class=indam>qu___</span> expensive. <i>(a bit, in the middle)</i>[sound:rec1336214131.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4jnlc4.png' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>quite</span> expensive.[sound:rec1336214188.mp3]</span><br><span style=''><i>quite - достаточно</i></span>","INFO":null,"STT":34},
{"FRONT":"<span style='font-size: 28px; '>&quot;We <span class=indam>w____</span> to work every morning.&quot; <i>(go on foot)</i>[sound:rec1336214365.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterulgmg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We <span class=indam>walk</span> to work.&quot; [sound:rec1336214371.mp3]<br /><br /><br /></span><br><span style=''><i>to walk - ходить пешком</i></span>","INFO":null,"STT":40},
{"FRONT":"<span style='font-size: 28px; '>This box isn't full; it's <span class=indam>em_____</span>.[sound:rec1336213548.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqzgc8y.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This box isn't full; it's <span class=indam>empty</span>.[sound:rec1336213553.mp3]</span><br><span style=''><i>empty (adj.) - пустой</i></span>","INFO":null,"STT":19},
{"FRONT":"<span style='font-size: 28px; '>It's an old <span class=indam>ch____</span>. <i>(a place for Christians)</i>[sound:rec1336216176.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehlcaww.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's an old <span class=indam>church</span>.[sound:rec1336216182.mp3]</span><br><span style=''><i>a church - церковь</i></span>","INFO":null,"STT":111},
{"FRONT":"<span style='font-size: 28px; '>She has brown <span class=indam>h____</span>.[sound:rec1336216162.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9yargg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She has brown <span class=indam>hair</span>.[sound:rec1336216168.mp3]</span><br><span style=''><i>hair (n.) - волосы</i><br><i>note: </i><span style='font-weight:600; font-style:italic;'>not</span><i> '</i><i>hairs'</i></span>","INFO":null,"STT":110},
{"FRONT":"<span style='font-size: 28px; '>What's the opposite of fat?[sound:rec1336213947.mp3]<br />-<span class=indam>Th____</span>.<br /><img class='center-block img-responsive hinhdep'  src='paste9zog90.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Thin</span>.[sound:rec1336213953.mp3]</span><br><span style=''><i>thin (adj.) - худой</i></span>","INFO":null,"STT":30},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) I'm very angry.<br />b) I'm very hungry.<br />[sound:rec1318413433.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) I'm very angry.</span><br />[sound:rec1318413433.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":124},
{"FRONT":"<span style='font-size: 28px; '>When's Valentine's day?<br />-It's on <span class=indam>_________</span>.[sound:rec1336215168.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastespm6l5.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's on <span class=indam>14th February</span>.[sound:rec1336215179.mp3]<br /><br /></span><br><span style=''><i>we say: '</i><span style='font-weight:600; font-style:italic; color:#0000ff;'>the</span><i> fourteenth </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>of</span><i> February'</i></span>","INFO":null,"STT":58},
{"FRONT":"<span style='font-size: 28px; '>What did you do <span class=indam>[...]</span> the weekend?[sound:rec1336216001.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteylpxwt.png' /></span>","BACK":"<span style='font-size: 28px; '>What did you do <span class=indam>at</span> the weekend?[sound:rec1336216013.mp3]<br /><i>or</i><br />What did you do <span class=indam>on</span> the weekend?</span><br><span style=''></span>","INFO":null,"STT":101},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastewj4wxv.jpg' />[sound:rec1318414081.mp3]</span>","BACK":"<span style='font-size: 28px; '>He's <span class=indam>pink</span>.[sound:rec1339664088.mp3]<br /><br /><i>or: He's </i><span style='font-style:italic; text-decoration: underline;'>the</span><i> </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>Pink</span><i> Panther.</i></span><br><span style=''><i>pink (adj.) - розовый</i></span>","INFO":null,"STT":7},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='may.jpg' />[sound:rec1318414194.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>May</span>[sound:rec1318411952.mp3]</span><br><span style=''><i>May - май</i></span>","INFO":null,"STT":65},
{"FRONT":"<span style='font-size: 28px; '>At the end of the day people finish work and <span class=indam>g___</span> home.[sound:rec1336214525.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeqmvuv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>At the end of the day people finish work and <span class=indam>go</span> home.[sound:rec1336214532.mp3]<br /><br /></span><br><span style=''><i>to go home - идти домой</i></span>","INFO":null,"STT":44},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) She gets home at five.<br />b) She goes home at five.&nbsp;&nbsp;[sound:rec1318413484.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) She goes home at five.&nbsp;&nbsp;</span>[sound:rec1318413484.mp3]</span><br><span style=''></span>","INFO":null,"STT":129},
{"FRONT":"<span style='font-size: 28px; '>It usually snows <span class=indam>[...]</span> winter. [sound:rec1336215509.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4amre2.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It usually snows <span class=indam>in</span> winter.[sound:rec1336215523.mp3]<br /></span><br><span style=''><i>winter - зима</i><br><i>in winter - зимой</i></span>","INFO":null,"STT":77},
{"FRONT":"<span style='font-size: 28px; '>&quot;I go shopping <span class=indam>[...]</span> Saturdays.&quot;[sound:rec1336214840.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteukotoy.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I go shopping <span class=indam>on</span> Saturdays.&quot;[sound:rec1336214846.mp3]<br /></span><br><span style=''><i>on Saturdays - по субботам</i></span>","INFO":null,"STT":51}]

if (localStorage.caumayEn_SG_3 == null) {
    localStorage.caumayEn_SG_3 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_3"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_3+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_3).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_3).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_3).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_3+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_3).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_3).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_3).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_3)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_3))
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
	cau = Number(localStorage.caumayEn_SG_3)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_3)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_3) >  0){
		localStorage.caumayEn_SG_3 = Number(localStorage.caumayEn_SG_3) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_3))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_3)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_3)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_3) < dulieu.length-1){
		localStorage.caumayEn_SG_3 = Number(localStorage.caumayEn_SG_3) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_3))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_3)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_3)].BACK
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
	var current_player = Number(localStorage.caumayEn_SG_3)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_3)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_3)].BACK
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
	cau = Number(localStorage.caumayEn_SG_3)
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
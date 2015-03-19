$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '>He's in love with <span class=indam>[...]</span>, but she doesn't love him.[sound:rec1319883173.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewalcho.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's in love with <span class=indam>her</span>, but she doesn't love him.[sound:rec1319883183.mp3]<br /><br /><br /></span><br><span style=''><i>she - она</i><br /><i>her - её, ей</i></span>","INFO":null,"STT":56},
{"FRONT":"<span style='font-size: 28px; '>&quot;My daughter reads a lot - she's very <span class=indam>int_____</span>.&quot; <i>(clever)</i>[sound:rec1330340087.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteak5ye_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My daughter reads a lot - she's very <span class=indam>int</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>lligent</span>.&quot;[sound:rec1330340093.mp3] <br /><br /></span><br><span style=''><i>intelligent (adj.) - умный</i></span>","INFO":null,"STT":98},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'm sorry, I <span class=indam>c___</span> remember your name.&quot; [sound:rec1336675889.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh00hu5.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'm sorry, I <span class=indam>can't</span> remember your name.&quot;[sound:rec1336675921.mp3]</span><br><span style=''><i>I can't... - я не могу...</i></span>","INFO":null,"STT":6},
{"FRONT":"<span style='font-size: 28px; '>-Cool motorbike. Is it <span class=indam>yours</span><span style='color:#000000;'>?</span><br />-Yes, it's <span class=indam>(me)</span>?[sound:rec1319885012.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteptzcqi.png' /></span>","BACK":"<span style='font-size: 28px; '>-Yes, it's <span class=indam>mine</span>. [sound:rec1319885020.mp3]<br /><br /></span><br><span style=''><i>mine = my thing</i></span>","INFO":null,"STT":111},
{"FRONT":"<span style='font-size: 28px; '>&quot;It's a good film. Do you want to see <span class=indam>[...]</span>?&quot;[sound:rec1319883220.mp3]<br /><br /><img class='center-block img-responsive hinhdep'  src='pastehqx06m.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;It's a good film. Do you want to see <span class=indam>it</span>?&quot;[sound:rec1319883227.mp3]</span><br><span style=''><i>it - оно</i><br><i>it - его</i></span>","INFO":null,"STT":58},
{"FRONT":"<span style='font-size: 28px; '>-&quot;What <span class=indam>k___</span> of dog is this?&quot;<br />-&quot;It's a labrador.&quot;[sound:rec1330339979.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezhpezx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>What <span class=indam>kind</span> of dog is this?[sound:rec1330339987.mp3]</span><br><span style=''><i>a kind - вид</i></span>","INFO":null,"STT":92},
{"FRONT":"<span style='font-size: 28px; '>'Friends' is my favourite <span class=indam>TV</span> <span class=indam>pro_____</span>.[sound:rec1336676577.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteicth2r.png' /></span>","BACK":"<span style='font-size: 28px; '>'Friends' is my favourite <span class=indam>TV</span> <span class=indam>pr</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>gramme</span>.[sound:rec1336676590.mp3]<br /><br /></span><br><span style=''><i>a TV programme - телевизионная передача</i></span>","INFO":null,"STT":81},
{"FRONT":"<span style='font-size: 28px; '>-&quot;Would you like to have dinner with me tonight?&quot;<br />-&quot;I'm busy tonight, how <span class=indam>[...]</span> tomorrow?&quot;[sound:rec1319885091.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastea0kaqr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-&quot;I'm busy tonight, how <span class=indam>about</span> tomorrow?&quot;[sound:rec1336676801.mp3]<br /><br /><br /><br /></span><br><span style=''><i>how about tomorrow? = как насчет завтра?</i></span>","INFO":null,"STT":114},
{"FRONT":"<span style='font-size: 28px; '>-Whose dog is it?<br />-It's <span class=indam>(we)</span>.&nbsp;&nbsp;&nbsp;&nbsp;[sound:rec1330340654.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenyg6vc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>ours</span>.&nbsp;&nbsp;&nbsp;&nbsp;[sound:rec1319883350.mp3]<br /><br /></span><br><span style=''><i>ours = our thing</i></span>","INFO":null,"STT":64},
{"FRONT":"<span style='font-size: 28px; '>-&quot;<span class=indam>[...]</span> she like painting?&quot;[sound:rec1319882503.mp3]<br />-&quot;Yes, she <span class=indam>[...]</span>.&quot;<br /><img class='center-block img-responsive hinhdep'  src='pasteveickp.png' /></span>","BACK":"<span style='font-size: 28px; '>-&quot;<span class=indam>Does</span> she like painting?&quot;<br />-&quot;Yes, she <span class=indam>does</span>.&quot;[sound:rec1319882493.mp3]</span><br><span style=''></span>","INFO":null,"STT":34},
{"FRONT":"<span style='font-size: 28px; '>-Cool motorbike. Is it <span class=indam>(you)</span><span style='color:#000000;'>?</span>[sound:rec1336676353.mp3]<br />-Yes, it's <span class=indam>mine</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasteptzcqi.png' /></span>","BACK":"<span style='font-size: 28px; '>-Cool motorbike. Is it <span class=indam>yours</span><span style='color:#000000;'>?</span>[sound:rec1336676361.mp3]<br /><br /></span><br><span style=''><span style='font-style:italic; color:#000000;'>yours = your thing</span></span>","INFO":null,"STT":67},
{"FRONT":"<span style='font-size: 28px; '>&quot;We have a problem. Can you help <span class=indam>(we)</span>?&quot;[sound:rec1319883258.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastettw8dp.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We have a problem. Can you help <span class=indam>us</span>?&quot;[sound:rec1319883274.mp3]<br /><br /></span><br><span style=''><i>we - мы</i><br /><i>us - нас, нам</i></span>","INFO":null,"STT":60},
{"FRONT":"<span style='font-size: 28px; '>&quot;Quick! I really <span class=indam>n___</span> the toilet!&quot;[sound:rec1330339721.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste32pgdu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Quick! I really <span class=indam>need</span> the toilet!&quot;[sound:rec1330339728.mp3]<br /><i><br /></i></span><br><span style=''><i>to need sth. - нуждаться в чем-л.</i></span>","INFO":null,"STT":80},
{"FRONT":"<span style='font-size: 28px; '>&quot;These shoes cost $500. I think they're a <span class=indam>w___</span> of money.&quot; <i>(too expensive)</i>[sound:rec1330340194.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastel3cehc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I think they're a <span class=indam>waste</span> of money.[sound:rec1330340204.mp3]</span><br><span style=''><i>a waste - ненужная трата</i></span>","INFO":null,"STT":106},
{"FRONT":"<span style='font-size: 28px; '>&quot;I hate <span class=indam>ru____</span> for the bus.&quot; <i>(going fast) </i>[sound:rec1336676241.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten2g_ui.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I hate <span class=indam>running</span> for the bus.&quot; [sound:rec1336676247.mp3]<br /><i><br /></i></span><br><span style=''><i>to run - бежать, бегать</i></span>","INFO":null,"STT":43},
{"FRONT":"<span style='font-size: 28px; '>It's red <span class=indam>p____</span>.[sound:rec1336676833.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyvalqs.png' /></span>","BACK":"<span style='font-size: 28px; '>It's red <span class=indam>paint</span>.[sound:rec1336676843.mp3]</span><br><span style=''><i>paint (n.) - краска</i><br></span>","INFO":null,"STT":132},
{"FRONT":"<span style='font-size: 28px; '>Please <span class=indam>с___</span> we have a lesson on Friday?[sound:rec1336677275.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenl9qqx.png' /></span>","BACK":"<span style='font-size: 28px; '>Please <span class=indam>can</span> we have a lesson on Friday?[sound:rec1336677283.mp3]</span><br><span style=''></span>","INFO":null,"STT":139},
{"FRONT":"<span style='font-size: 28px; '>Sometimes it's difficult to <span class=indam>de___</span> what to do. <i>(choose)</i>[sound:rec1330339548.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemdgg9x.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Sometimes it's difficult to <span class=indam>decide</span> what to do.[sound:rec1330339557.mp3]<br /><i><br /></i></span><br><span style=''><i>to decide - решать</i></span>","INFO":null,"STT":70},
{"FRONT":"<span style='font-size: 28px; '>&quot;Sometimes I <span class=indam>l___</span> my glasses.&quot;<i> (I don't know where they are)</i>[sound:rec1336676097.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaafrcx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Sometimes I <span class=indam>lose</span> my glasses.&quot;<br />[sound:rec1336676104.mp3]<br /></span><br><span style=''><i>to lose sth. - терять что-л.</i><br></span>","INFO":null,"STT":29},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) Whose is it?[sound:rec1319885285.mp3]<br />b) Who is it?</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) Whose is it?</span>[sound:rec1319885285.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":128},
{"FRONT":"<span style='font-size: 28px; '>You <span class=indam>c___</span> take photographs here.[sound:rec1319881723.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiq0ysy.jpg' /></span>","BACK":"<span style='font-size: 28px; '>You <span class=indam>can't</span> take photographs here.[sound:rec1319881716.mp3]</span><br><span style=''></span>","INFO":null,"STT":18},
{"FRONT":"<span style='font-size: 28px; '>Please <span class=indam>_______</span> some milk? <b>(you / can / buy)</b>[sound:rec1330338704.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexl2rlg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Please <span class=indam>can you buy</span> some milk?[sound:rec1330338711.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>Сan you buy...? - Купи пожалуйста...</span></span>","INFO":null,"STT":15},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) Is the house theirs?<br />b) Is the house there?<br />[sound:rec1319885237.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) Is the house there?</span>[sound:rec1319885237.mp3]</span><br><span style=''></span>","INFO":null,"STT":123},
{"FRONT":"<span style='font-size: 28px; '>&quot;How many <span class=indam>ch____</span> do you have on your TV?&quot;[sound:rec1336676403.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterdk_yz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;How many <span class=indam>ch</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>nnels</span> do you have on your TV?&quot;[sound:rec1336676410.mp3]<br /><i><br /></i></span><br><span style=''><i>a ch</i><span style='font-style:italic; color:#ff5500;'>a</span><i>nnel - канал</i></span>","INFO":null,"STT":69},
{"FRONT":"<span style='font-size: 28px; '>&quot;Oh dear. Someone <span class=indam>h____</span> computers.&quot; <i>(doesn't like them a lot)</i>[sound:rec1330339206.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebxdxp6.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Oh dear. Someone <span class=indam>hates</span> computers.&quot;[sound:rec1330339213.mp3]<br /><i><br /></i></span><br><span style=''><i>to hate sth. - ненавидеть что-л.</i></span>","INFO":null,"STT":52},
{"FRONT":"<span style='font-size: 28px; '>&quot;Can you play a <span class=indam>m____</span> instrument?&quot;[sound:rec1336676654.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastet4ouaf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Can you play a <span class=indam>musical </span>instrument?&quot;[sound:rec1336676660.mp3]<br /><br /></span><br><span style=''><i>musical (adj.) - музыкальный</i></span>","INFO":null,"STT":100},
{"FRONT":"<span style='font-size: 28px; '>You <span class=indam>c___</span> eat here.[sound:rec1319881696.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteufgzaf.png' /></span>","BACK":"<span style='font-size: 28px; '>You <span class=indam>can</span> eat here.[sound:rec1319881701.mp3]</span><br><span style=''></span>","INFO":null,"STT":17},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> child is it?[sound:rec1330340239.mp3]<br />-It's theirs.<br /><img class='center-block img-responsive hinhdep'  src='pasteshmvgx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Whose</span> child is it?[sound:rec1330340255.mp3]<br />-It's theirs.<br /></span><br><span style=''><i>whose - чей, чья, чьё</i></span>","INFO":null,"STT":109},
{"FRONT":"<span style='font-size: 28px; '>&quot;My son <span class=indam>u___</span> a computer every day.&quot;[sound:rec1330339132.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paster0i_9w.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My son <span class=indam>uses</span> a computer every day.&quot;[sound:rec1330340453.mp3]<br /><i><br /></i></span><br><span style=''><i>to use sth. - пользоваться чем-л.</i></span>","INFO":null,"STT":49},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) Whose is it?<br />b) Who is it? [sound:rec1319885294.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) Who is it?</span> [sound:rec1319885294.mp3]</span><br><span style=''></span>","INFO":null,"STT":129},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>ph____</span> her husband every week.<i> </i>[sound:rec1330338780.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenlxusf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>phones</span> her husband every week. [sound:rec1330338787.mp3]<br /><i><br /></i></span><br><span style=''><i>to phone / call someone - звонить кому-л.</i></span>","INFO":null,"STT":21},
{"FRONT":"<span style='font-size: 28px; '>He <span class=indam>b___</span> a newspaper every day. <i>(gets)</i>[sound:rec1336676065.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastencslph.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He <span class=indam>buys</span> a newspaper every day. [sound:rec1336676072.mp3]<br /><br /></span><br><span style=''><i>to buy sth. - покупать что-л.</i></span>","INFO":null,"STT":20},
{"FRONT":"<span style='font-size: 28px; '>These bags are very heavy - please <span class=indam>c___</span> you help me?[sound:rec1319881494.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewhs3n5.png' /></span>","BACK":"<span style='font-size: 28px; '>Please <span class=indam>can</span> you help me?[sound:rec1319881508.mp3]</span><br><span style=''><i>Please, can you help me? - Помогите мне, пожалуйста.</i></span>","INFO":null,"STT":10},
{"FRONT":"<span style='font-size: 28px; '>&quot;I can sing, but I can't <span class=indam>d____</span>.&quot; [sound:rec1336675826.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewppmu3.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I can sing, but I can't <span class=indam>dance</span>.&quot; [sound:rec1336675840.mp3]<br /><i><br /></i></span><br><span style=''><i>to dance - танцевать</i></span>","INFO":null,"STT":0},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>th___</span> the ball, and I catch it.[sound:rec1336676865.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3gn72s.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>throws</span> the ball, and I catch it.[sound:rec1336676874.mp3]<br /><br /></span><br><span style=''><i>to throw sth. - бросать что-л.</i></span>","INFO":null,"STT":136},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) You can park here.<br />b) You can't park here.<br />[sound:rec1319885206.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) You can park here.</span><br />[sound:rec1319885206.mp3]</span><br><span style=''></span>","INFO":null,"STT":120},
{"FRONT":"<span style='font-size: 28px; '>Couples often <span class=indam>g__ m____</span> in summer. <i>(become husband and wife)</i>[sound:rec1330340069.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastephfppy.png' /></span>","BACK":"<span style='font-size: 28px; '>Couples often <span class=indam>get married</span> in summer.[sound:rec1330340077.mp3]<br /><i><br /></i></span><br><span style=''><i>to get married - жениться, заключать брак</i></span>","INFO":null,"STT":97},
{"FRONT":"<span style='font-size: 28px; '>You <span class=indam>c___</span> pay by credit card here.[sound:rec1330338721.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteceagle.png' /></span>","BACK":"<span style='font-size: 28px; '>You <span class=indam>can</span> pay by credit card here.[sound:rec1330338727.mp3]</span><br><span style=''></span>","INFO":null,"STT":19},
{"FRONT":"<span style='font-size: 28px; '>-Whose dog <span class=indam>__ __</span>?[sound:rec1336676751.mp3]<br />-It's ours.&nbsp;&nbsp;&nbsp;&nbsp;<br /><img class='center-block img-responsive hinhdep'  src='pastenyg6vc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Whose dog <span class=indam>is it</span>?[sound:rec1336676732.mp3]<br />-It's ours.&nbsp;&nbsp;&nbsp;&nbsp;<br /></span><br><span style=''></span>","INFO":null,"STT":108},
{"FRONT":"<span style='font-size: 28px; '>-&quot;What do you want to do this evening?&quot;[sound:rec1319884720.mp3]<br />-&quot;Let's watch a film on <span class=indam>____</span>.&quot;<br /><img class='center-block img-responsive hinhdep'  src='pastejmbjc4.jpg' /></span>","BACK":"<span style='font-size: 28px; '>on <span class=indam>DVD</span>[sound:rec1319884728.mp3]</span><br><span style=''></span>","INFO":null,"STT":93},
{"FRONT":"<span style='font-size: 28px; '>&quot;I write notes because I often <span class=indam>f___</span> things.&quot; <i>(the opposite of 'remember')</i>[sound:rec1330339621.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteluge9r.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I write notes because I often <span class=indam>forg</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>t</span> things.&quot;[sound:rec1319884157.mp3]<br /><i><br /></i></span><br><span style=''><i>to forget - забывать</i></span>","INFO":null,"STT":73},
{"FRONT":"<span style='font-size: 28px; '>-Whose child is it?[sound:rec1330339497.mp3]<br />-It's <span class=indam>(they)</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasteshmvgx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>theirs</span>.[sound:rec1330339502.mp3]<br /><br /></span><br><span style=''><i>theirs = their thing</i></span>","INFO":null,"STT":65},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) Can you turn on the TV?[sound:rec1319885257.mp3]<br />b) Can you turn off the TV?<br /> </span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) Can you turn off the TV?</span>[sound:rec1319885257.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":125},
{"FRONT":"<span style='font-size: 28px; '>-Do you like apples?<br />-I <span class=indam>d___ m___</span> them.<br /> <i>(I don't hate them or love them)</i>[sound:rec1330339290.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastef4vzbc.png' /></span>","BACK":"<span style='font-size: 28px; '>-I <span class=indam>don't mind</span> them.[sound:rec1330339298.mp3]</span><br><span style=''><i>I don't mind - мне всё равно</i></span>","INFO":null,"STT":54},
{"FRONT":"<span style='font-size: 28px; '>&quot;<span class=indam>C____</span> here little dog!&quot;[sound:rec1330338857.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_oghjs.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>&quot;Come</span> here!&quot;[sound:rec1330338863.mp3]<br /><i><br /></i></span><br><span style=''><i>Come here! - Иди сюда!</i></span>","INFO":null,"STT":23},
{"FRONT":"<span style='font-size: 28px; '>It's my ball!! It's <span class=indam>(me)</span>!![sound:rec1319883296.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebwr_67.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>mine</span>.[sound:rec1319883303.mp3]</span><br><span style=''><i>mine = my thing</i></span>","INFO":null,"STT":62},
{"FRONT":"<span style='font-size: 28px; '>I always <span class=indam>_____</span> <span class=indam>on</span> the TV at 5pm. <i>(make it work) </i>[sound:rec1336676315.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastel_xdqr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I always <span class=indam>turn on</span> the TV at 5pm. [sound:rec1336676325.mp3]<br /><i>or</i><br />I always <span class=indam>switch on</span> the TV at 5pm.<br /><i><br /></i></span><br><span style=''><i>to turn / switch sth. on - включить что-л.</i></span>","INFO":null,"STT":48},
{"FRONT":"<span style='font-size: 28px; '>She's a <span class=indam>de____</span>. She looks for criminals.[sound:rec1336676082.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenx74zg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She's a <span class=indam>det</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>ctive</span><span style='color:#000000;'>.</span>[sound:rec1336676089.mp3]</span><br><span style=''><i>a detective - детектив, сыщик</i></span>","INFO":null,"STT":27},
{"FRONT":"<span style='font-size: 28px; '>In the end, we all <span class=indam>d___</span>. <i>(stop living)</i>[sound:rec1336676419.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1qjux7.png' /></span>","BACK":"<span style='font-size: 28px; '>In the end, we all <span class=indam>die</span>. <i>(stop living)</i>[sound:rec1336676426.mp3]<br /><br /></span><br><span style=''><i>to die - умирать</i></span>","INFO":null,"STT":71},
{"FRONT":"<span style='font-size: 28px; '>-&quot;What kind of animal is it?&quot; <br />-&quot;It's a <span class=indam>rh____</span>.&quot;[sound:rec1330339886.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh0sdpa.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-&quot;It's a <span class=indam>rh</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>no</span>.&quot;[sound:rec1330339896.mp3]<br /><br /><i>or, a </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>rhin</span><span style='font-weight:600; font-style:italic; color:#ff5500;'>o</span><span style='font-weight:600; font-style:italic; color:#0000ff;'>ceros</span></span><br><span style=''><i>a rhino / rhinoceros - носорог</i></span>","INFO":null,"STT":90},
{"FRONT":"<span style='font-size: 28px; '>-Nice car. Whose is it?<br />-It's <span class=indam>(he)</span>. [sound:rec1319883318.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteamtqvu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>his</span>.[sound:rec1319883333.mp3]<br /><i><br /></i></span><br><span style=''><i>his = his thing</i></span>","INFO":null,"STT":63},
{"FRONT":"<span style='font-size: 28px; '>&quot;<span class=indam>W___</span> you like to have dinner with me tonight?&quot;[sound:rec1330340283.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastea0kaqr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;<span class=indam>Would</span> you like to have dinner with me tonight?&quot;[sound:rec1330340297.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":112},
{"FRONT":"<span style='font-size: 28px; '>She throws the ball, and I <span class=indam>c____</span> it.[sound:rec1336676882.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3gn72s.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She throws the ball, and I <span class=indam>catch</span> it.[sound:rec1336676888.mp3]<br /><br /></span><br><span style=''><i>to catch sth. - ловить что-л.</i></span>","INFO":null,"STT":137},
{"FRONT":"<span style='font-size: 28px; '>They look unhappy. Maybe they don't like <span class=indam>e___ o____</span>. <i>(the other person)</i>[sound:rec1330339258.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepo8cvl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Maybe they don't like<span class=indam> each other</span>.[sound:rec1330339270.mp3]</span><br><span style=''><i>each other - друг друга</i></span>","INFO":null,"STT":53},
{"FRONT":"<span style='font-size: 28px; '>The words of a pop-song are called <span class=indam>ly___</span>.[sound:rec1330339706.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0yju58.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The words of a pop-song are called <span class=indam>l</span><span style='font-weight:600; color:#ff5500;'>y</span><span class=indam>rics</span>.[sound:rec1330339712.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>lyrics - текст песни</span></span>","INFO":null,"STT":78},
{"FRONT":"<span style='font-size: 28px; '>-Does he <span class=indam>l____</span> school?[sound:rec1336676150.mp3]<br />-No, he doesn't.<br /><img class='center-block img-responsive hinhdep'  src='pastea0hj_c.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Does he <span class=indam>like</span> school?[sound:rec1336676164.mp3]<br /><br /></span><br><span style=''><i>note: we </i><span style='font-weight:600; font-style:italic;'>don't</span><i> say 'he doesn't love school'</i></span>","INFO":null,"STT":38},
{"FRONT":"<span style='font-size: 28px; '>My son likes <span class=indam>dr____</span>. <i>(making pictures)</i> [sound:rec1330338900.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexxzs4u.png' /></span>","BACK":"<span style='font-size: 28px; '>My son likes <span class=indam>drawing</span>. [sound:rec1319881883.mp3]<br /><i><br /></i></span><br><span style=''><i>to draw - рисовать (карандашом или ручкой)</i></span>","INFO":null,"STT":25},
{"FRONT":"<span style='font-size: 28px; '>These people are all <span class=indam>t___ s____</span>. <i>(the opposite of 'different')</i>[sound:rec1319884537.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterpsxa8.jpg' /></span>","BACK":"<span style='font-size: 28px; '>These people are all <span class=indam>the same</span>. [sound:rec1319884542.mp3]</span><br><span style=''><i>the same - одинаковый</i></span>","INFO":null,"STT":84},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='paste0knrvn.jpg' />[sound:rec1319882615.mp3]</span>","BACK":"<span style='font-size: 28px; '>I <span class=indam>hate</span> school![sound:rec1319882627.mp3]<br /><br /></span><br><span style=''><i>to hate sth. - ненавидеть что-л.</i></span>","INFO":null,"STT":39},
{"FRONT":"<span style='font-size: 28px; '>&quot;Don't move, <span class=indam>st___</span>.&quot;[sound:rec1330339825.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuxnnwa.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Don't move, <span class=indam>stay</span>.&quot;[sound:rec1330339830.mp3]<br /><i><br /></i></span><br><span style=''><i>to stay - оставаться</i></span>","INFO":null,"STT":86},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> they like talking?[sound:rec1336676175.mp3]<br />-Yes, they <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastehc4zvv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Do</span> they like talking?<br />-Yes, they <span class=indam>do</span>.[sound:rec1336676190.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":40},
{"FRONT":"<span style='font-size: 28px; '>She throws the <span class=indam>b___</span>, and I catch it.[sound:rec1336677047.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehr3ayz.png' /></span>","BACK":"<span style='font-size: 28px; '>She throws the <span class=indam>ball</span>, and I catch it.[sound:rec1336677052.mp3]<br /><br /></span><br><span style=''><i>a ball - мяч</i></span>","INFO":null,"STT":138},
{"FRONT":"<span style='font-size: 28px; '>&quot;How many languages can you <span class=indam>sp____</span>?&quot; <i>(talk in) </i>[sound:rec1336675981.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexte9ye.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;How many languages can you <span class=indam>speak</span>?&quot;[sound:rec1336675986.mp3]<br /><br /></span><br><span style=''><i>to speak English, Russian, etc. - разговаривать по-английски, по-русски, т.д.</i></span>","INFO":null,"STT":9},
{"FRONT":"<span style='font-size: 28px; '>His <span class=indam>tr____</span> are dirty.[sound:rec1330340161.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqhjpxi.png' /></span>","BACK":"<span style='font-size: 28px; '>His <span class=indam>trousers</span> are dirty.[sound:rec1330340167.mp3]</span><br><span style=''><i>trousers (n.) - штаны</i></span>","INFO":null,"STT":104},
{"FRONT":"<span style='font-size: 28px; '>I <span class=indam>t___</span> my sister all my secrets.[sound:rec1336676258.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev0sioj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I <span class=indam>tell</span> my sister all my secrets.[sound:rec1336676279.mp3]<br /><br /><br /></span><br><span style=''><i>to tell sb. - рассказывать кому-л.</i></span>","INFO":null,"STT":44},
{"FRONT":"<span style='font-size: 28px; '>Call a doctor. He needs <span class=indam>[...]</span> go to hospital.[sound:rec1336913489.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegwoh6g.png' /></span>","BACK":"<span style='font-size: 28px; '>Call a doctor. He needs <span class=indam>to</span> go to hospital.[sound:rec1336913472.mp3]</span><br><span style=''><i>to need - нуждаться</i></span>","INFO":null,"STT":148},
{"FRONT":"<span style='font-size: 28px; '>&quot;We've been married for 40 years and we are <span class=indam>st___</span> in love!&quot;[sound:rec1330339840.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5fakit.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We've been married for 40 years and we are <span class=indam>still</span> in love!&quot;[sound:rec1330339848.mp3]</span><br><span style=''><i>still - еще, до сих пор, по-прежнему</i><br></span>","INFO":null,"STT":87},
{"FRONT":"<span style='font-size: 28px; '>&quot;We <span class=indam>c___</span> play tennis on Saturday - I'm free.&quot;[sound:rec1330338642.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep1q8r0.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We <span class=indam>can</span> play tennis on Saturday - I'm free.&quot;[sound:rec1330338650.mp3]</span><br><span style=''><i>Мы сможем поиграть в теннис в субботу. </i></span>","INFO":null,"STT":4},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>s___</span> ice-creams. <i>(gives them to people for money)</i>[sound:rec1330339794.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevrxle8.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>sells</span> ice-creams.[sound:rec1330339800.mp3]<br /><br /></span><br><span style=''><i>to sell - продавать</i></span>","INFO":null,"STT":82},
{"FRONT":"<span style='font-size: 28px; '>-Do you like shopping?[sound:rec1330339422.mp3]<br />-Yes, I <span class=indam>lo___</span> it! <i>(I like it a lot)</i><br /><img class='center-block img-responsive hinhdep'  src='pastelvp12q.png' /></span>","BACK":"<span style='font-size: 28px; '>Yes, I <span class=indam>love</span> it![sound:rec1330339434.mp3]</span><br><span style=''><i>to love - любить</i></span>","INFO":null,"STT":55},
{"FRONT":"<span style='font-size: 28px; '>She has lots of <span class=indam>tо___</span>. <i>(things to play with)</i>[sound:rec1336676625.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste6wrexz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She has lots of <span class=indam>toys</span>.[sound:rec1336676630.mp3]<br /><br /></span><br><span style=''><i>a toy - игрушка</i></span>","INFO":null,"STT":89},
{"FRONT":"<span style='font-size: 28px; '>&quot;Are you afraid of <span class=indam>mo____</span>?&quot;[sound:rec1330338976.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteygm3kn.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Are you afraid of <span class=indam>monsters</span>?&quot;[sound:rec1319882002.mp3]<br /><i><br /></i></span><br><span style=''><i>a monster - монстр</i></span>","INFO":null,"STT":31},
{"FRONT":"<span style='font-size: 28px; '>Lady Gaga is a <span class=indam>p___ st____</span>. <i>(a famous singer) </i>[sound:rec1330339809.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezr2gp4.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Lady Gaga is a <span class=indam>pop star</span>.[sound:rec1330339814.mp3]</span><br><span style=''><i>a pop star - поп-звезда</i></span>","INFO":null,"STT":85},
{"FRONT":"<span style='font-size: 28px; '>-&quot;Does she like <span class=indam>p_____</span>?&quot;[sound:rec1330338997.mp3]<br />-&quot;Yes, she does.&quot;<br /><img class='center-block img-responsive hinhdep'  src='pasteveickp.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Does she like <span class=indam>painting</span>?&quot;[sound:rec1319882051.mp3]<br /><i><br /></i></span><br><span style=''><i>to paint - писать красками</i></span>","INFO":null,"STT":33},
{"FRONT":"<span style='font-size: 28px; '>She's a detective. She <span class=indam>lo____</span> <span class=indam>f___</span> criminals.[sound:rec1330338921.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenx74zg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>looks for</span> criminals.[sound:rec1330338935.mp3]<br /><i><br /></i></span><br><span style=''><i>to look for sth. - искать что-л.</i></span>","INFO":null,"STT":28},
{"FRONT":"<span style='font-size: 28px; '>I tell my sister all my <span class=indam>se____</span>. <i>(private information)</i>[sound:rec1336676288.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev0sioj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I tell my sister all my <span class=indam>s</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>crets</span>. [sound:rec1336676299.mp3]<br /><i><br /></i></span><br><span style=''><i>a secret - секрет</i></span>","INFO":null,"STT":45},
{"FRONT":"<span style='font-size: 28px; '>These bags are very heavy - please <span class=indam>_________</span> me?<b> (you / can / help</b>)[sound:rec1319881551.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewhs3n5.png' /></span>","BACK":"<span style='font-size: 28px; '>Please <span class=indam>can you help</span> me?[sound:rec1319881567.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>Please, can you help me? - Помогите мне, пожалуйста.</span></span>","INFO":null,"STT":12},
{"FRONT":"<span style='font-size: 28px; '>&quot;We can <span class=indam>p____ t_____</span> on Saturday - I'm free.&quot;[sound:rec1330338616.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep1q8r0.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We can <span class=indam>play tennis</span> on Saturday - I'm free.&quot;[sound:rec1330338625.mp3]<br /><i><br /></i></span><br><span style=''><i>to play tennis - играть в теннис</i><br></span>","INFO":null,"STT":3},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) She doesn't like him.<br />b) She doesn't like them.&nbsp;&nbsp;[sound:rec1319885275.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) She doesn't like them.</span>[sound:rec1319885275.mp3]</span><br><span style=''></span>","INFO":null,"STT":127},
{"FRONT":"<span style='font-size: 28px; '>Look at the <span class=indam>m___</span> of Russia.[sound:rec1336676455.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehc1shj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Look at the <span class=indam>map</span> of Russia.[sound:rec1336676460.mp3]<br /><br /></span><br><span style=''><i>a map - карта</i></span>","INFO":null,"STT":79},
{"FRONT":"<span style='font-size: 28px; '>&quot;So you went to Cuba last year, how <span class=indam>inte____</span>!&quot; [sound:rec1330339675.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2x_znj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;So you went to Cuba last year, how <span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>nteresting</span>!&quot; [sound:rec1330339681.mp3]<br /><br /></span><br><span style=''><i>interesting (adj.) - интересный</i></span>","INFO":null,"STT":77},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you <span class=indam>fo___</span> a leader?&quot;<i> (go after)</i>[sound:rec1330339591.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemzndo5.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you <span class=indam>follow</span> a leader?&quot;[sound:rec1330339596.mp3]<br /><br /></span><br><span style=''><i>to follow sb. - следовать / идти за кем-л. </i></span>","INFO":null,"STT":72},
{"FRONT":"<span style='font-size: 28px; '>-Nice car. Whose is it?<br />-It's <span class=indam>(she)</span>.[sound:rec1330339511.mp3]<br /><br /><img class='center-block img-responsive hinhdep'  src='pastekhqtss.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>hers</span>.[sound:rec1330339517.mp3]<br /><br /><br /><br /></span><br><span style=''><i>hers = her thing</i></span>","INFO":null,"STT":66},
{"FRONT":"<span style='font-size: 28px; '>-Nice car. <span class=indam>Wh___</span> is it?[sound:rec1319885495.mp3]<br />-It's hers.<br /><br /><img class='center-block img-responsive hinhdep'  src='pastekhqtss.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Nice car. <span class=indam>Whose</span> is it?[sound:rec1319885503.mp3]<br />-It's hers.<br /><br /></span><br><span style=''><i>whose - чей, чья, чьё</i></span>","INFO":null,"STT":133},
{"FRONT":"<span style='font-size: 28px; '>It's late - it's time to <span class=indam>____</span> <span class=indam>off</span> the TV and go to bed.[sound:rec1336677704.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejjdvtc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's late - it's time to <span class=indam>turn</span> <span class=indam>off</span> the TV and go to bed.[sound:rec1336677716.mp3]<br /><i>or</i><br />It's late - it's time to <span class=indam>switch</span> <span class=indam>off</span> the TV and go to bed.<br /><br /></span><br><span style=''><i>to switch / turn sth. off - выключать что-л.</i></span>","INFO":null,"STT":141},
{"FRONT":"<span style='font-size: 28px; '>&quot;Every night I <span class=indam>lo___ f___</span> monsters under the bed.&quot; <i>(try to find)</i>[sound:rec1330338948.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeeta2i.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I<span class=indam> look for</span> monsters.[sound:rec1330338956.mp3]<br /><i><br /></i></span><br><span style=''><i>to look for sth. - искать что-л.</i></span>","INFO":null,"STT":30},
{"FRONT":"<span style='font-size: 28px; '>It's dark in here - please can you switch <span class=indam>___</span> the light?[sound:rec1336677912.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteo7ndne.png' /></span>","BACK":"<span style='font-size: 28px; '>It's dark in here - please can you switch <span class=indam>on</span> the light?[sound:rec1336677920.mp3]</span><br><span style=''><i>to switch sth. on - включать что-л.</i></span>","INFO":null,"STT":142},
{"FRONT":"<span style='font-size: 28px; '>&quot;Sometimes I <span class=indam>f___</span> money on the street.&quot;[sound:rec1330338910.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste63iisj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Sometimes I <span class=indam>find</span> money on the street.&quot;[sound:rec1319881914.mp3]<br /><br /></span><br><span style=''><i>to find sth. - находить что-л.</i></span>","INFO":null,"STT":26},
{"FRONT":"<span style='font-size: 28px; '>Romeo and Juliet <span class=indam>fa___</span> in love.[sound:rec1330340019.mp3]<br /><br /><img class='center-block img-responsive hinhdep'  src='pastelbutjw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Romeo and Juliet <span class=indam>fall</span> in love.[sound:rec1330340030.mp3]<br /><i><br /></i></span><br><span style=''><i>to fall in love - влюбиться</i></span>","INFO":null,"STT":94},
{"FRONT":"<span style='font-size: 28px; '>-What <span class=indam>k___</span> of fruit is this? [sound:rec1330339913.mp3][sound:rec1330339926.mp3]<br />-It's a banana.<br /><img class='center-block img-responsive hinhdep'  src='pastea0_uek.jpg' /></span>","BACK":"<span style='font-size: 28px; '>What <span class=indam>kind</span> of fruit is this?[sound:rec1330339920.mp3]</span><br><span style=''><i>a kind - вид, сорт</i></span>","INFO":null,"STT":91},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please can you read us a <span class=indam>st____</span>?&quot;[sound:rec1330339866.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8qqpyj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please can you read us a <span class=indam>story</span>?&quot;[sound:rec1330339861.mp3]</span><br><span style=''><i>a story - рассказ, сказка</i></span>","INFO":null,"STT":88},
{"FRONT":"<span style='font-size: 28px; '>He wears a <span class=indam>j_____</span> every day.[sound:rec1330340102.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste6dw5i9.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He wears a <span class=indam>jacket</span> every day.[sound:rec1330340109.mp3]</span><br><span style=''><i>a jacket - пиджак</i></span>","INFO":null,"STT":99},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you <span class=indam>w____</span> time at work?&quot; <i>(do things which aren't useful)</i>[sound:rec1336676710.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelomaqr.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you <span class=indam>waste</span> time at work?&quot;[sound:rec1336676717.mp3]<br /><br /></span><br><span style=''><i>to waste sth. - напрасно тратить что-л.</i><br></span>","INFO":null,"STT":105},
{"FRONT":"<span style='font-size: 28px; '>-&quot;<span class=indam>[...]</span> he like school?&quot;[sound:rec1319882551.mp3]<br />-&quot;No, he <span class=indam>[...]</span>.&quot;<br /><img class='center-block img-responsive hinhdep'  src='pastea0hj_c.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-&quot;<span class=indam>Does</span> he like school?&quot;<br />-&quot;No, he <span class=indam>doesn't</span>.&quot;[sound:rec1319882561.mp3]</span><br><span style=''></span>","INFO":null,"STT":37},
{"FRONT":"<span style='font-size: 28px; '>Call a doctor. He <span class=indam>n____</span> to go to hospital.[sound:rec1336913464.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegwoh6g.png' /></span>","BACK":"<span style='font-size: 28px; '>Call a doctor. He <span class=indam>needs</span> to go to hospital.[sound:rec1336913472.mp3]</span><br><span style=''><i>to need - нуждаться</i></span>","INFO":null,"STT":147},
{"FRONT":"<span style='font-size: 28px; '>&quot;I usually <span class=indam>w___</span> home.&quot; <i>(go on foot)</i>[sound:rec1330339186.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevgtjar.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I usually <span class=indam>walk</span> home.&quot; [sound:rec1330339195.mp3]</span><br><span style=''><i>to walk - ходить (пешком)</i></span>","INFO":null,"STT":51},
{"FRONT":"<span style='font-size: 28px; '>It's <span class=indam>d___</span> in here - please can you switch on the light?[sound:rec1336677928.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteo7ndne.png' /></span>","BACK":"<span style='font-size: 28px; '>It's <span class=indam>dark</span> in here - please can you switch on the light?[sound:rec1336677939.mp3]<br /><br /></span><br><span style=''><i>dark (adj.) - темный</i></span>","INFO":null,"STT":143},
{"FRONT":"<span style='font-size: 28px; '>On 8th March every year, I <span class=indam>s___</span> my mother flowers.[sound:rec1336766174.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasted2mlrk.png' /></span>","BACK":"<span style='font-size: 28px; '>On 8th March every year, I <span class=indam>send</span> my mother flowers.[sound:rec1336766182.mp3]<br /><br /></span><br><span style=''><i>to send sb. sth. - посылать кому-л. что-л.</i><br></span>","INFO":null,"STT":145},
{"FRONT":"<span style='font-size: 28px; '>&quot;I often <span class=indam>wa___</span> for my girlfriend.&quot;[sound:rec1330340307.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterhai5o.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I often <span class=indam>wait</span> for my girlfriend.&quot;[sound:rec1330340322.mp3]<br /><br /></span><br><span style=''><i>to wait </i><span style='font-weight:600; font-style:italic;'>for</span><i> sb. - ждать кого-л.</i></span>","INFO":null,"STT":117},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>C___</span> a doctor. He needs to go to hospital. <i>(phone) </i>[sound:rec1336913514.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegwoh6g.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Call</span> a doctor. He needs to go to hospital.[sound:rec1336913520.mp3]</span><br><span style=''><i>to call sb. - звонить кому-л., вызывать кого-л.</i></span>","INFO":null,"STT":149},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) You can park here.<br />b) You can't park here.&nbsp;&nbsp;[sound:rec1319885215.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) You can't park here.</span> [sound:rec1319885215.mp3]</span><br><span style=''></span>","INFO":null,"STT":121},
{"FRONT":"<span style='font-size: 28px; '>&quot;They're nice people. Do you know <span class=indam>(they)</span>?&quot;[sound:rec1336676335.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteihn1nx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;They're nice people. Do you know <span class=indam>them</span>?&quot;[sound:rec1336676343.mp3]<br /><br /></span><br><span style=''><i>they - они</i><br /><i>them - их, им</i></span>","INFO":null,"STT":61},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) She doesn't like him.[sound:rec1319885266.mp3]<br />b) She doesn't like them.</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) She doesn't like him.</span>[sound:rec1319885266.mp3]</span><br><span style=''></span>","INFO":null,"STT":126},
{"FRONT":"<span style='font-size: 28px; '>These bags are very heavy - please can you <span class=indam>h___</span> me?[sound:rec1336676004.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewhs3n5.png' /></span>","BACK":"<span style='font-size: 28px; '>Please can you <span class=indam>help</span> me?[sound:rec1336676013.mp3]<br /><br /></span><br><span style=''><i>to help sb. - помогать кому-л.</i></span>","INFO":null,"STT":11},
{"FRONT":"<span style='font-size: 28px; '>This is an <span class=indam>ad____</span> for Mars.[sound:rec1336676370.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexmena_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This is an <span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>dvert</span> for Mars. [sound:rec1336676378.mp3]<br /><i>or,</i><br />This is an <span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>dvertisment</span> for Mars. </span><br><span style=''><i>an advert / an advertisment - реклама</i></span>","INFO":null,"STT":68},
{"FRONT":"<span style='font-size: 28px; '>-Nice car. Whose <span class=indam>__ __</span>?[sound:rec1319885512.mp3]<br />-It's hers.<br /><br /><img class='center-block img-responsive hinhdep'  src='pastekhqtss.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Nice car. Whose <span class=indam>is it</span>?[sound:rec1319885519.mp3]<br />-It's hers.<br /><br /></span><br><span style=''></span>","INFO":null,"STT":134},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you like <span class=indam>m____</span> new people?&quot;[sound:rec1336676112.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenfjfgd.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you like <span class=indam>meeting</span> new people?&quot;[sound:rec1336676119.mp3]<br /><i><br /></i></span><br><span style=''><i>to meet sb. - встречаться с кем-л.</i></span>","INFO":null,"STT":32},
{"FRONT":"<span style='font-size: 28px; '>-&quot;<span class=indam>C___</span> I smoke here?&quot;[sound:rec1319881376.mp3]<br />-&quot;No, you <span class=indam>c___</span>.&quot;<br /><img class='center-block img-responsive hinhdep'  src='pasteeqvzme.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-&quot;<span class=indam>Can</span> I smoke here?&quot;[sound:rec1319881385.mp3]<br />-&quot;No, you <span class=indam>can't</span>.&quot;</span><br><span style=''><i>Can I ...? - Можно я ...?</i></span>","INFO":null,"STT":5},
{"FRONT":"<span style='font-size: 28px; '>&quot;I can sing, but I <span class=indam>c____</span> dance.&quot; <br /><img class='center-block img-responsive hinhdep'  src='pastewppmu3.jpg' />[sound:rec1330338590.mp3]</span>","BACK":"<span style='font-size: 28px; '>&quot;I can sing, but I <span class=indam>can't</span> dance.&quot; [sound:rec1330338605.mp3]</span><br><span style=''><i>I can't - я не умею</i></span>","INFO":null,"STT":1},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'm sorry, I can't <span class=indam>re____</span> your name.&quot; <i>(I forgot it)</i>[sound:rec1336675952.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh00hu5.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'm sorry, I can't <span class=indam>remember</span> your name.&quot; [sound:rec1336675921.mp3]<br /><br /></span><br><span style=''><i>to remember - помнить</i></span>","INFO":null,"STT":7},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>ca___</span> her husband every week.[sound:rec1330338829.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenlxusf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>calls</span> her husband every week.[sound:rec1330338837.mp3]<br /><br /></span><br><span style=''><i>to call / phone someone - звонить кому-л.</i></span>","INFO":null,"STT":22},
{"FRONT":"<span style='font-size: 28px; '>&quot;Sorry, please repeat that, I can't <span class=indam>h____</span> you.&quot;[sound:rec1330338686.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteg3fhdj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Sorry, please repeat that, I can't <span class=indam>hear</span> you.&quot;[sound:rec1330338693.mp3]<br /><i><br /></i></span><br><span style=''><i>to hear sb./sth. - слышать кого-л. / что-л.</i><br></span>","INFO":null,"STT":14},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) Is the house theirs?<br />b) Is the house there?[sound:rec1319885227.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) Is the house theirs?</span>[sound:rec1319885227.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":122},
{"FRONT":"<span style='font-size: 28px; '>This is my <span class=indam>f____</span> toy. <i>(the one I like the most)</i>[sound:rec1336766200.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenbcbni.png' /></span>","BACK":"<span style='font-size: 28px; '>This is my <span class=indam>favourite</span> toy.[sound:rec1336766207.mp3]<br /><br /></span><br><span style=''><i>favourite (adj.) - любимый</i><br></span>","INFO":null,"STT":146},
{"FRONT":"<span style='font-size: 28px; '>He <span class=indam>w____</span> a jacket every day.[sound:rec1336676850.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste6dw5i9.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He <span class=indam>wears</span> a jacket every day.[sound:rec1336676857.mp3]<br /><br /></span><br><span style=''><i>to wear (clothes) - носить (одежду)</i></span>","INFO":null,"STT":135},
{"FRONT":"<span style='font-size: 28px; '>It's a <span class=indam>paintb____</span>.[sound:rec1336676822.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteozqe5p.png' /></span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>paintbrush</span>.[sound:rec1336676827.mp3]</span><br><span style=''><i>a paintbrush -&nbsp;&nbsp;кисть</i></span>","INFO":null,"STT":131},
{"FRONT":"<span style='font-size: 28px; '>&quot;Can you <span class=indam>p____</span> a musical instrument?&quot;[sound:rec1336676682.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastet4ouaf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Can you <span class=indam>play</span> a musical instrument?&quot;[sound:rec1336676660.mp3]<br /><br /><br /></span><br><span style=''><i>to play a musical instrument - играть на музыкальном инструменте</i></span>","INFO":null,"STT":101},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> dog is it?[sound:rec1336676726.mp3]<br />-It's ours.&nbsp;&nbsp;&nbsp;&nbsp;<br /><img class='center-block img-responsive hinhdep'  src='pastenyg6vc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Whose</span> dog is it?[sound:rec1336676732.mp3]<br />-It's ours.&nbsp;&nbsp;&nbsp;&nbsp;<br /></span><br><span style=''><i>whose - чей, чья, чьё</i></span>","INFO":null,"STT":107},
{"FRONT":"<span style='font-size: 28px; '>&quot;My dad sometimes <span class=indam>g___</span> angry!&quot;[sound:rec1330340040.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterhlhle.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My dad sometimes <span class=indam>gets</span> angry!&quot;[sound:rec1330340057.mp3]<br /><i><br /></i></span><br><span style=''><i>to get angry - сердиться</i></span>","INFO":null,"STT":95},
{"FRONT":"<span style='font-size: 28px; '>These are road <span class=indam>s____</span>. <i>(they show us something) </i>[sound:rec1336676809.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9ul5q3.png' /></span>","BACK":"<span style='font-size: 28px; '>These are road <span class=indam>signs</span>.[sound:rec1336676815.mp3]<br /><br /></span><br><span style=''><i>a sign - знак</i></span>","INFO":null,"STT":130},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which phrase does he say?<br /><br />a) Can you turn on the TV?[sound:rec1319885248.mp3]<br />b) Can you turn off the TV?<br /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) Can you turn on the TV?</span>[sound:rec1319885248.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":124},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you like travelling <span class=indam>[...]</span> plane?&quot; <i>(going)</i>[sound:rec1330339114.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastea8fkgg.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you like travelling <span class=indam>by</span> plane?&quot;[sound:rec1330339122.mp3]</span><br><span style=''></span>","INFO":null,"STT":47},
{"FRONT":"<span style='font-size: 28px; '>&quot;I think he likes <span class=indam>ri____</span> a bike.&quot;[sound:rec1330339050.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelbbexz.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I think he likes <span class=indam>riding</span> a bike.&quot;[sound:rec1330339056.mp3]<br /><i><br /></i></span><br><span style=''><i>to ride a bike - кататься на велосипеде</i><br></span>","INFO":null,"STT":42},
{"FRONT":"<span style='font-size: 28px; '>&quot;I often wait <span class=indam>[...]</span> my girlfriend.&quot;[sound:rec1330340331.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterhai5o.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I often wait <span class=indam>for</span> my girlfriend.&quot;[sound:rec1330340338.mp3]<br /><br /></span><br><span style=''><i>to wait </i><span style='font-weight:600; font-style:italic;'>for</span><i> sb. - ждать кого-л.</i><br></span>","INFO":null,"STT":118},
{"FRONT":"<span style='font-size: 28px; '>We all die, <span class=indam>[...]</span> the end.[sound:rec1330339658.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1qjux7.png' /></span>","BACK":"<span style='font-size: 28px; '>We all die, <span class=indam>in</span> the end.[sound:rec1330339664.mp3]<br /><br /></span><br><span style=''><i>in the end - в конце концов</i></span>","INFO":null,"STT":76},
{"FRONT":"<span style='font-size: 28px; '>You <span class=indam>c___</span> park here.[sound:rec1336676050.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedgzl7u.jpg' /></span>","BACK":"<span style='font-size: 28px; '>You <span class=indam>can't</span> park here.[sound:rec1336676057.mp3]</span><br><span style=''></span>","INFO":null,"STT":16},
{"FRONT":"<span style='font-size: 28px; '>&quot;It's cold, I think you need to wear a <span class=indam>sw____</span>.&quot;[sound:rec1335123864.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehmdmcx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;It's cold, I think you need to wear a <span class=indam>sweater</span>.&quot;[sound:rec1319884891.mp3]</span><br><span style=''><i>a sweater - свитер</i><br></span>","INFO":null,"STT":103},
{"FRONT":"<span style='font-size: 28px; '>&quot;That's a colourful <span class=indam>sh___</span>!!&quot;[sound:rec1336676691.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteytg4ps.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;That's a colourful <span class=indam>shirt</span>!!&quot;[sound:rec1336676702.mp3]</span><br><span style=''><i>a shirt - рубашка</i></span>","INFO":null,"STT":102},
{"FRONT":"<span style='font-size: 28px; '>&quot;Would you like <span class=indam>[...]</span> have dinner with me tonight?&quot;[sound:rec1319885073.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastea0kaqr.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Would you like <span class=indam>to</span> have dinner with me tonight?&quot;[sound:rec1336676764.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":113},
{"FRONT":"<span style='font-size: 28px; '>Sorry, please speak louder - I <span class=indam>c____</span> hear you.[sound:rec1336676026.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteg3fhdj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Sorry, please speak louder - I <span class=indam>сan't</span> hear you.[sound:rec1336676035.mp3]</span><br><span style=''><i>I can't... - я не могу...</i></span>","INFO":null,"STT":13},
{"FRONT":"<span style='font-size: 28px; '>&quot;You speak very quickly. I can't understand <span class=indam>[...]</span>.&quot;[sound:rec1319883238.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste17lekl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;You speak very quickly. I can't understand <span class=indam>you</span>.&quot;[sound:rec1330340499.mp3]</span><br><span style=''><i>you - ты, вы</i><br><i>you - тебя, вас</i></span>","INFO":null,"STT":59},
{"FRONT":"<span style='font-size: 28px; '>He's in love with her, but she doesn't love <span class=indam>[...]</span>.[sound:rec1330339461.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewalcho.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's in love with her, but she doesn't love <span class=indam>him</span>.[sound:rec1330339467.mp3]<br /><br /></span><br><span style=''><i>he - он</i><br /><i>him - его</i></span>","INFO":null,"STT":57},
{"FRONT":"<span style='font-size: 28px; '>&quot;I can <span class=indam>s____</span>, but I can't dance.&quot; [sound:rec1336675855.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteogn_j9.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I can <span class=indam>sing</span>, but I can't dance.&quot;<br />[sound:rec1336675868.mp3]<br /></span><br><span style=''><i>to sing - петь</i></span>","INFO":null,"STT":2},
{"FRONT":"<span style='font-size: 28px; '>I'm going away on Wednesday - we <span class=indam>c___</span> have a lesson. <i>(it isn't possible)</i>[sound:rec1336677337.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenl9qqx.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm going away on Wednesday - we <span class=indam>can't</span> have a lesson.[sound:rec1336677344.mp3]</span><br><span style=''></span>","INFO":null,"STT":140},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastetoynsn.jpg' />[sound:rec1319885130.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>Happy</span> Birthday![sound:rec1319885143.mp3]</span><br><span style=''></span>","INFO":null,"STT":116},
{"FRONT":"<span style='font-size: 28px; '>This is an advert <span class=indam>[...]</span> Mars.[sound:rec1330340264.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexmena_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This is an advert <span class=indam>for</span> Mars.[sound:rec1330340270.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":110},
{"FRONT":"<span style='font-size: 28px; '>-&quot;Would you like to have dinner with me tonight?&quot;<br />-&quot;I'm busy tonight, <span class=indam>[...]</span> about tomorrow?&quot;[sound:rec1319885113.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteln3zls.png' /></span>","BACK":"<span style='font-size: 28px; '>-&quot;I'm busy tonight, <span class=indam>how</span> about tomorrow?&quot;[sound:rec1319885122.mp3]<br /><br /></span><br><span style=''><i>how about tomorrow? = как насчет завтра?</i></span>","INFO":null,"STT":115},
{"FRONT":"<span style='font-size: 28px; '>&quot;My dad sometimes gets <span class=indam>ang____</span>!&quot;[[sound:rec1336676638.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterhlhle.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My dad sometimes gets <span class=indam>angry</span>!&quot;[sound:rec1336676645.mp3]<br /><i><br /></i></span><br><span style=''><i>to get angry - сердиться</i></span>","INFO":null,"STT":96},
{"FRONT":"<span style='font-size: 28px; '>&quot;I love <span class=indam>dan____</span>.&quot;[sound:rec1330338878.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemuywv1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I love <span class=indam>dancing</span>.&quot;[sound:rec1319881865.mp3]<br /><i><br /></i></span><br><span style=''><i>to dance - танцевать</i></span>","INFO":null,"STT":24},
{"FRONT":"<span style='font-size: 28px; '>&quot;I write <span class=indam>n____</span> because I often forget things.&quot; <i>(small pieces of paper) </i>[sound:rec1330339649.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteluge9r.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I write <span class=indam>notes</span> because I often forget things.&quot;[sound:rec1319884188.mp3]<br /><i><br /></i></span><br><span style=''><i>a note - заметка</i><br></span>","INFO":null,"STT":74},
{"FRONT":"<span style='font-size: 28px; '>Look! Her <span class=indam>h___</span> is empty.[sound:rec1336676435.mp3]<br /><br /><img class='center-block img-responsive hinhdep'  src='pastehp8eel.png' /></span>","BACK":"<span style='font-size: 28px; '>Look! Her <span class=indam>head</span> is empty.[sound:rec1319884211.mp3]<br /><br /></span><br><span style=''><i>a head - голова</i></span>","INFO":null,"STT":75},
{"FRONT":"<span style='font-size: 28px; '>My dog <span class=indam>lo____</span> swimming. <i>(he likes it a lot)</i>[sound:rec1336676128.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiyoxhg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He <span class=indam>loves</span> swimming.[sound:rec1336676133.mp3]</span><br><span style=''><i>to love - любить</i></span>","INFO":null,"STT":36},
{"FRONT":"<span style='font-size: 28px; '>Romeo falls <span class=indam>[...]</span> love <span class=indam>[...]</span> Juliet.[sound:rec1330340370.mp3]<br /><br /><img class='center-block img-responsive hinhdep'  src='pastelbutjw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Romeo falls <span class=indam>in</span> love <span class=indam>with</span> Juliet.[sound:rec1330340378.mp3]<br /><br /></span><br><span style=''><i>to fall </i><span style='font-weight:600; font-style:italic;'>in</span><i> love </i><span style='font-weight:600; font-style:italic;'>with</span><i> someone - влюбиться в кого-л.</i></span>","INFO":null,"STT":119},
{"FRONT":"<span style='font-size: 28px; '>&quot;How many languages <span class=indam>c___</span> you speak?&quot;[sound:rec1330338667.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexte9ye.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;How many languages <span class=indam>can</span> you speak?&quot;[sound:rec1330338675.mp3]</span><br><span style=''><i>can - уметь</i></span>","INFO":null,"STT":8},
{"FRONT":"<span style='font-size: 28px; '>&quot;Do you like <span class=indam>tr____</span> by plane?&quot; <i>(going)</i>[sound:rec1330339064.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastea8fkgg.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Do you like <span class=indam>travelling</span> by plane?&quot; [sound:rec1330339071.mp3]<br /><i><br /></i></span><br><span style=''><i>to travel -&nbsp;&nbsp;путешествовать</i></span>","INFO":null,"STT":46},
{"FRONT":"<span style='font-size: 28px; '>Their clothes are <span class=indam>si____</span> but not the same. [sound:rec1336676611.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteatdx_o.png' /></span>","BACK":"<span style='font-size: 28px; '>Their clothes are <span class=indam>similar</span> but not the same. [sound:rec1336676618.mp3]<br /><br /></span><br><span style=''><i>similar (adj.) - похожий</i><br></span>","INFO":null,"STT":83},
{"FRONT":"<span style='font-size: 28px; '>&quot;We always<span class=indam> w___ f___</span> the bus.&quot;[sound:rec1330339169.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexuacya.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We always<span class=indam> wait for</span> the bus.&quot;<br />[sound:rec1330339177.mp3]<br /></span><br><span style=''><i>to wait for sth. / smb. - ждать что-л. / кого-л.</i></span>","INFO":null,"STT":50},
{"FRONT":"<span style='font-size: 28px; '>&quot;My dog loves <span class=indam>sw____</span>.&quot;[sound:rec1330339007.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiyoxhg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My dog loves <span class=indam>swimming</span>.&quot;[sound:rec1319882520.mp3]<br /><i><br /></i></span><br><span style=''><i>to swim - плавать</i></span>","INFO":null,"STT":35},
{"FRONT":"<span style='font-size: 28px; '>I think he <span class=indam>li___</span> riding a bike.[sound:rec1336676199.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelbbexz.png' /></span>","BACK":"<span style='font-size: 28px; '>I think he <span class=indam>likes</span> riding a bike.[sound:rec1336676222.mp3]<br /></span><br><span style=''><i>he likes - ему нравится</i></span>","INFO":null,"STT":41},
{"FRONT":"<span style='font-size: 28px; '>It's late - it's time to switch <span class=indam>___</span> the TV and go to bed.[sound:rec1336677872.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejjdvtc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's late - it's time to switch <span class=indam>off</span> the TV and go to bed.[sound:rec1336677880.mp3]<br /><br /></span><br><span style=''><i>to switch / turn sth. off - выключать что-л.</i></span>","INFO":null,"STT":144}]

if (localStorage.caumayEn_SG_4 == null) {
    localStorage.caumayEn_SG_4 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_4"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_4+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_4).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_4).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_4).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_4+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_4).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_4).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_4).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_4)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_4))
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
	cau = Number(localStorage.caumayEn_SG_4)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_4)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_4) >  0){
		localStorage.caumayEn_SG_4 = Number(localStorage.caumayEn_SG_4) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_4))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_4)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_4)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_4) < dulieu.length-1){
		localStorage.caumayEn_SG_4 = Number(localStorage.caumayEn_SG_4) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_4))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_4)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_4)].BACK
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
	var current_player = Number(localStorage.caumayEn_SG_4)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_4)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_4)].BACK
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
	cau = Number(localStorage.caumayEn_SG_4)
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
$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '>He always listens <span class=indam>t__ t___ r____</span>.[sound:rec1315842627.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteamghww.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He always listens <span class=indam>to the radio</span>.[sound:rec1336210739.mp3]<br /><br /></span><br><span style=''><i>to listen to </i><span style='font-weight:600; font-style:italic;'>the</span><i> radio - слушать радио</i></span>","INFO":null,"STT":52},
{"FRONT":"<span style='font-size: 28px; '>The flowers are in a <span class=indam>v____</span>.[sound:rec1315843490.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejfcxgh.png' /></span>","BACK":"<span style='font-size: 28px; '>The flowers are in a <span class=indam>vase</span>.[sound:rec1315843509.mp3]</span><br><span style=''><i>a vase - ваза</i><br></span>","INFO":null,"STT":101},
{"FRONT":"<span style='font-size: 28px; '>Does he <span class=indam>s____</span>?<br />-Yes, he does.[sound:rec1336212058.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewyqp5z.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Does he <span class=indam>smoke?</span>[sound:rec1336212065.mp3]<br /><br /></span><br><span style=''><i>to smoke - курить</i></span>","INFO":null,"STT":139},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> you drink alcohol?[sound:rec1336212705.mp3]<br />-No, I <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='paste1tbzfx.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Do</span> you drink alcohol?[sound:rec1336212715.mp3]<br />-No, I <span class=indam>don't</span>.</span><br><span style=''></span>","INFO":null,"STT":74},
{"FRONT":"<span style='font-size: 28px; '>Her company pays her lots of money. She <span class=indam>e____</span> a lot of money. <i>(gets money for working)</i>[sound:rec1336210068.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelcla1v.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>earns</span> a lot of money.[sound:rec1336210086.mp3]<br /><br /></span><br><span style=''><span style='font-style:italic; color:#000000;'>to earn (money) - зарабатывать (деньги)</span></span>","INFO":null,"STT":114},
{"FRONT":"<span style='font-size: 28px; '>They're <span class=indam>musicians</span>. They <span class=indam>p____</span> in an orchestra.[sound:rec1336210647.mp3] <i>(make music)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteyo5hsc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They <span class=indam>play </span><span style='color:#000000;'>in an orchestra.</span>[sound:rec1336210694.mp3]<br /><br /></span><br><span style=''><i>to play - играть</i></span>","INFO":null,"STT":16},
{"FRONT":"<span style='font-size: 28px; '>She works in a shop. She's a <span class=indam>s___ a_____</span>. [sound:rec1336209889.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteagytjl.png' /></span>","BACK":"<span style='font-size: 28px; '>She's a <span class=indam>shop assistant</span>.[sound:rec1336209902.mp3]</span><br><span style=''><i>a shop assistant - продавец</i></span>","INFO":null,"STT":27},
{"FRONT":"<span style='font-size: 28px; '>This is my brother. He plays <span class=indam>[...]</span> guitar.[sound:rec1336208764.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh8nmma.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He plays <span class=indam>the</span> guitar.[sound:rec1336208770.mp3]<br /><br /></span><br><span style=''><i>to play </i><span style='font-weight:600; font-style:italic;'>the</span><i> guitar - играть на гитаре</i></span>","INFO":null,"STT":57},
{"FRONT":"<span style='font-size: 28px; '>They are boyfriend and <span class=indam>g_____</span>.[sound:rec1315843114.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewukacz.png' /></span>","BACK":"<span style='font-size: 28px; '>They are boyfriend and <span class=indam>g</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>rlfriend</span>.[sound:rec1315843118.mp3]</span><br><span style=''><i>a girlfriend - девушка, подружка</i><br></span>","INFO":null,"STT":77},
{"FRONT":"<span style='font-size: 28px; '>Do they have a pet?<br />-Yes, they do. They have a <span class=indam>m_____</span>.[sound:rec1336209203.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8idc8m.png' /></span>","BACK":"<span style='font-size: 28px; '>They have a <span class=indam>monkey</span>.[sound:rec1315843512.mp3]</span><br><span style=''><i>a monkey - обезьяна</i></span>","INFO":null,"STT":102},
{"FRONT":"<span style='font-size: 28px; '>She's a <span class=indam>secretary</span>. She answers <span class=indam>_____</span> phone and arranges meetings.[sound:rec1336211349.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteu8hstr.png' /></span>","BACK":"<span style='font-size: 28px; '>She answers <span class=indam>the</span> phone and arranges meetings.[sound:rec1336211340.mp3]</span><br><span style=''></span>","INFO":null,"STT":25},
{"FRONT":"<span style='font-size: 28px; '>She's a <span class=indam>housewife</span>. She stays at home and <span class=indam>______</span> the housework.[sound:rec1315841738.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepakzym.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She stays at home and <span class=indam>does</span> the housework.[sound:rec1315841753.mp3]<br /><br /></span><br><span style=''><i>to do sth. - делать что-л.</i></span>","INFO":null,"STT":9},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> he have a pet?<br />-Yes, he <span class=indam>[...]</span>. He has a cat.[sound:rec1322505091.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegizwjd.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Does</span> he have a pet?<br />-Yes, he <span class=indam>does</span>.[sound:rec1315843449.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":97},
{"FRONT":"<span style='font-size: 28px; '>She's a <span class=indam>secretary</span>. She answers the phone and arranges <span class=indam>m_____</span>. <i>(when people meet)</i>[sound:rec1315842115.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteu8hstr.png' /><br></span>","BACK":"<span style='font-size: 28px; '>She answers the phone and arranges <span class=indam>meetings</span>.[sound:rec1336211995.mp3]<br /><br /></span><br><span style=''><i>a meeting - встреча</i></span>","INFO":null,"STT":26},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='west.PNG' />[sound:rec1322505583.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>West</span>[sound:rec1315843313.mp3]</span><br><span style=''><i>West - запад</i></span>","INFO":null,"STT":89},
{"FRONT":"<span style='font-size: 28px; '>Does your father work?[sound:rec1336212256.mp3]<br />-No, he doesn't. He <span class=indam>st____</span> at home.<br /><img class='center-block img-responsive hinhdep'  src='pastemem0zh.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He <span class=indam>stays</span> at home.[sound:rec1336212266.mp3]<br /><br /></span><br><span style=''><i>to stay at home - оставаться дома, сидеть дома</i></span>","INFO":null,"STT":72},
{"FRONT":"<span style='font-size: 28px; '>Brad Pitt is Angelina Jolie<span class=indam>[...]</span> husband.[sound:rec1336211131.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebtevpc.png' /></span>","BACK":"<span style='font-size: 28px; '>Brad Pitt is Angelina Jolie<span class=indam>'s</span> husband.[sound:rec1336211141.mp3]</span><br><span style=''></span>","INFO":null,"STT":34},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteerbnq_.png' />[sound:rec1315843346.mp3]</span>","BACK":"<span style='font-size: 28px; '>a <span class=indam>b</span><span style='font-weight:600; color:#ff5500;'>u</span><span class=indam>rger</span><span style='color:#000000;'> or a</span><span class=indam> h</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>mburger</span>[sound:rec1317668247.mp3]</span><br><span style=''><i>a b</i><span style='font-style:italic; color:#ff0909;'>u</span><i>rger / a h</i><span style='font-style:italic; color:#ff0909;'>a</span><i>mburger - гамбургер</i></span>","INFO":null,"STT":91},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which member of the family is it?<br />[sound:rec1315853962.mp3]</span>","BACK":"<span style='font-size: 28px; '>My mother's sister is my <span class=indam>aunt</span>.[sound:rec1315854005.mp3]</span><br><span style=''><i>aunt - тетя</i></span>","INFO":null,"STT":127},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='north.PNG' />[sound:rec1322505583.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>North</span>[sound:rec1315843299.mp3]</span><br><span style=''><i>North - север</i></span>","INFO":null,"STT":86},
{"FRONT":"<span style='font-size: 28px; '>&quot;I usually <span class=indam>h___</span> a sandwich for lunch.&quot;[sound:rec1336209713.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeuoh_k.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I usually <span class=indam>have</span> a sandwich for lunch.&quot;[sound:rec1336209722.mp3]<br /><br /></span><br><span style=''><i>to </i><i>have</i><i> sth. </i><i>for</i><i> </i><i>breakfast / lunch / etc. - есть что-л. на завтрак / обед / т.д.</i></span>","INFO":null,"STT":50},
{"FRONT":"<span style='font-size: 28px; '>Does she <span class=indam>p___</span> the piano?[sound:rec1315842942.mp3]<br />-No, she doesn't. She <span class=indam>p___</span> the violin.<br /><img class='center-block img-responsive hinhdep'  src='pastenk81bw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Does she <span class=indam>play</span> the piano?<br />-No, she doesn't. She <span class=indam>play</span><span style='font-weight:600; text-decoration: underline; color:#0000ff;'>s</span> the violin.[sound:rec1315842931.mp3]</span><br><span style=''><i>to play </i><span style='font-weight:600; font-style:italic;'>the</span><i> piano - играть на пианино</i></span>","INFO":null,"STT":69},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastezawn_u.png' />[sound:rec1315843178.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>glass.</span>[sound:rec1315843182.mp3]</span><br><span style=''><i>a glass - стакан</i><br></span>","INFO":null,"STT":80},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which member of the family is it?<br />[sound:rec1315854048.mp3]</span>","BACK":"<span style='font-size: 28px; '>My mother's father is my <span class=indam>grandfather</span>.[sound:rec1315854052.mp3]</span><br><span style=''><i>grandfather - дедушка</i></span>","INFO":null,"STT":130},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> you have a car?<br />-No, I <span class=indam>[...]</span>. I have a bicycle.[sound:rec1336212458.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezkp1ng.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Do</span> you have a car?[sound:rec1336212468.mp3]<br />-No, I <span class=indam>don't</span>. I have a bicycle.</span><br><span style=''></span>","INFO":null,"STT":66},
{"FRONT":"<span style='font-size: 28px; '>&quot;We live in a <span class=indam>f_____</span>.&quot;[sound:rec1336210769.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4wmf0k.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We live in a <span class=indam>flat</span>.&quot;[sound:rec1336210774.mp3]<br /><br /></span><br><span style=''><i>a flat - квартира</i><br /><i>American English: 'an apartment'</i></span>","INFO":null,"STT":54},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>h____</span> lots of children.[sound:rec1336208701.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastess5jyg.png' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>has</span> lots of children.[sound:rec1336211262.mp3]<br /><br /></span><br><span style=''><i>to have children - иметь детей</i></span>","INFO":null,"STT":49},
{"FRONT":"<span style='font-size: 28px; '>He's old and doesn't work anymore. He's <span class=indam>re_____</span>. [sound:rec1336211497.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastet8bapy.png' /></span>","BACK":"<span style='font-size: 28px; '>He's <span class=indam>ret</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>red</span>.[sound:rec1336211490.mp3]<br /><br /></span><br><span style=''><i>retired (adj.) - ушедший на пенсию</i></span>","INFO":null,"STT":116},
{"FRONT":"<span style='font-size: 28px; '>Every day he wears a <span class=indam>t___</span>.[sound:rec1315843639.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedmrhg1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Every day he wears a <span class=indam>tie</span>.[sound:rec1315843643.mp3]</span><br><span style=''><i>a tie - галстук</i></span>","INFO":null,"STT":109},
{"FRONT":"<span style='font-size: 28px; '>He <span class=indam>c____</span> dinner every day.[sound:rec1336209076.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefxf5ow.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He <span class=indam>cooks</span> dinner every day.[sound:rec1336209082.mp3]<br /></span><br><span style=''><span style='font-style:italic; color:#000000;'>to cook dinner, lunch, etc. - готовить обед, ленч, т.д.</span></span>","INFO":null,"STT":44},
{"FRONT":"<span style='font-size: 28px; '>-What's Kate Winslet's job?[sound:rec1315841570.mp3]<br />-She's <span class=indam>________</span>.<br /><img class='center-block img-responsive hinhdep'  src='paste_yfdne.png' /></span>","BACK":"<span style='font-size: 28px; '>-She's <span class=indam>an actress</span>.[sound:rec1336209134.mp3]</span><br><span style=''><i>an actress - актриса</i></span>","INFO":null,"STT":1},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteb1vasy.jpg' />[sound:rec1315843093.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>cap</span>.[sound:rec1315843097.mp3]</span><br><span style=''><i>a cap - кепка</i></span>","INFO":null,"STT":75},
{"FRONT":"<span style='font-size: 28px; '><i>(she isn't a nurse!)</i><br /><img class='center-block img-responsive hinhdep'  src='pastemxa3qh.jpg' />[sound:rec1315841607.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>She's a doctor.</span>[sound:rec1315841611.mp3]</span><br><span style=''><i>a doctor - доктор</i><br /></span>","INFO":null,"STT":3},
{"FRONT":"<span style='font-size: 28px; '>Who's Chelsea Clinton?[sound:rec1336208942.mp3]<br />She's Bill Clinton<span class=indam>[...]</span> daughter.<br /><img class='center-block img-responsive hinhdep'  src='pastevpfflb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She's Bill Clinton<span class=indam>'s</span> daughter.[sound:rec1336208969.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":38},
{"FRONT":"<span style='font-size: 28px; '>IBM is my employer. I work <span class=indam>___</span> IBM.[sound:rec1322504296.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste18pdkt.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I work <span class=indam>for</span> IBM.[sound:rec1336209184.mp3]</span><br><span style=''></span>","INFO":null,"STT":118},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br /><span style='color:#000000;'>a) Yes, I do.</span>[sound:rec1315853824.mp3]<span style='color:#000000;'><br />b) Yes, they do.</span></span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) Yes, I do.</span>[sound:rec1315853824.mp3]</span><br><span style=''></span>","INFO":null,"STT":119},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='paste5etkpa.jpg' />[sound:rec1315843191.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>hat</span>.[sound:rec1315843195.mp3]</span><br><span style=''><i>a hat - шляпа</i></span>","INFO":null,"STT":81},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='south.PNG' />[sound:rec1322505583.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>South</span>[sound:rec1315843308.mp3]</span><br><span style=''><i>South - юг</i></span>","INFO":null,"STT":88},
{"FRONT":"<span style='font-size: 28px; '>Does your father <span class=indam>w____</span>?[sound:rec1315842993.mp3]<br />-No, he doesn't. He stays at home.<br /><img class='center-block img-responsive hinhdep'  src='pastemem0zh.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Does your father <span class=indam>work</span>?[sound:rec1315843001.mp3]</span><br><span style=''><i>to work - работать</i></span>","INFO":null,"STT":71},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) Yes, I do.<br />b) Yes, they do.[sound:rec1315853834.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) Yes, they do.</span>[sound:rec1315853834.mp3]</span><br><span style=''></span>","INFO":null,"STT":120},
{"FRONT":"<span style='font-size: 28px; '>Do they have a pet?<br />-Yes, they do. They have a <span class=indam>s____</span>.[sound:rec1315843528.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqol7si.png' /></span>","BACK":"<span style='font-size: 28px; '>They have a <span class=indam>snake</span>.[sound:rec1315843533.mp3]</span><br><span style=''><i>a snake - змея</i></span>","INFO":null,"STT":104},
{"FRONT":"<span style='font-size: 28px; '>She's a <span class=indam>housewife</span>. She stays at home and does the <span class=indam>h______</span>. <i>(cleaning, washing etc.)</i>[sound:rec1315841771.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepakzym.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She stays at home and does the <span class=indam>h</span><span style='font-weight:600; color:#ff5500;'>ou</span><span class=indam>sework</span>.[sound:rec1315841778.mp3]</span><br><span style=''><i>h</i><span style='font-style:italic; color:#ff0909;'>ou</span><i>sework (n.) - работа по дому</i></span>","INFO":null,"STT":10},
{"FRONT":"<span style='font-size: 28px; '>My sister has lots of <span class=indam>s_____</span>.[sound:rec1336210524.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoyfvdi.png' /></span>","BACK":"<span style='font-size: 28px; '>My sister has lots of <span class=indam>shoes</span>.[sound:rec1315843270.mp3]</span><br><span style=''><i>shoes (n.) - обувь</i></span>","INFO":null,"STT":84},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> you have a bicycle?<br />-Yes, I <span class=indam>[...]</span>.[sound:rec1322504783.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezkp1ng.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Do</span> you have a bicycle?[sound:rec1317668795.mp3]<br />-Yes, I <span class=indam>do</span>.</span><br><span style=''></span>","INFO":null,"STT":138},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='waiter 2.jpg' />[sound:rec1315842215.mp3]</span>","BACK":"<span style='font-size: 28px; '>He's a <span class=indam>waiter</span>.[sound:rec1315842222.mp3]</span><br><span style=''><i>a waiter - официант</i><br></span>","INFO":null,"STT":29},
{"FRONT":"<span style='font-size: 28px; '>What subject <span class=indam>___</span> you <span class=indam>study</span>?[sound:rec1322504659.mp3]<br />-I study economics.<br /><img class='center-block img-responsive hinhdep'  src='paste0khqzo.png' /></span>","BACK":"<span style='font-size: 28px; '>What subject <span class=indam>do </span>you <span class=indam>study</span>?[sound:rec1315842817.mp3]</span><br><span style=''><i>to study sth. - изучать что-л.</i><br></span>","INFO":null,"STT":62},
{"FRONT":"<span style='font-size: 28px; '>Having too much work is <span class=indam>st_____</span>. <i>(the opposite of relaxing)</i>[sound:rec1315843625.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevh6u8j.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Having too much work is <span class=indam>str</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>ssful</span>.[sound:rec1315843630.mp3]<br /><br /></span><br><span style=''><i>stressful (adj.) - напряжённый, стрессовый</i></span>","INFO":null,"STT":108},
{"FRONT":"<span style='font-size: 28px; '>He's a <span class=indam>j______</span>. He writes articles for newspapers.[sound:rec1336211892.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejoq6sv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's a <span class=indam>journalist</span>.[sound:rec1336211884.mp3]</span><br><span style=''><i>a journalist - журналист</i></span>","INFO":null,"STT":11},
{"FRONT":"<span style='font-size: 28px; '>She's a <span class=indam>________</span>. She stays at home and does the housework.[sound:rec1315841721.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepakzym.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span style='color:#000000;'>She's a</span><span class=indam> housewife</span><span style='color:#000000;'>.</span>[sound:rec1315841702.mp3]</span><br><span style=''><i>a housewife - домохозяйка</i></span>","INFO":null,"STT":8},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteep6o0a.png' />[sound:rec1315843283.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>c</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>mpass</span>.[sound:rec1315843289.mp3]</span><br><span style=''><i>a c</i><span style='font-style:italic; color:#ff0909;'>o</span><i>mpass - компас</i></span>","INFO":null,"STT":85},
{"FRONT":"<span style='font-size: 28px; '>He's a <span class=indam>s____</span>. He sings in a rock band.[sound:rec1336211859.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastet9sx1h.png' /></span>","BACK":"<span style='font-size: 28px; '>He's a <span class=indam>singer</span>. [sound:rec1336211866.mp3]<br /></span><br><span style=''><i>a singer - певец</i></span>","INFO":null,"STT":144},
{"FRONT":"<span style='font-size: 28px; '>She's a <span class=indam>se_____</span>. She answers the phone and arranges meetings.[sound:rec1315842051.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteu8hstr.png' /></span>","BACK":"<span style='font-size: 28px; '>She's a <span class=indam>s</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>cretary</span>. <span class=indam> </span><br />[sound:rec1315842058.mp3]</span><br><span style=''><i>a s</i><span style='font-style:italic; color:#ff0909;'>e</span><i>cretary - секретарь</i></span>","INFO":null,"STT":23},
{"FRONT":"<span style='font-size: 28px; '>He's a <span class=indam>journalist</span>. He <span class=indam>w______</span> articles for newspapers. [sound:rec1336209385.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejoq6sv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He <span class=indam>writes</span> articles for newspapers. [sound:rec1336209394.mp3]</span><br><span style=''><i>to write - писать</i></span>","INFO":null,"STT":12},
{"FRONT":"<span style='font-size: 28px; '>A couple's daughter's husband is called their <span class=indam>s_______</span>.[sound:rec1317667319.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaknv9a.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>son-in-law</span>[sound:rec1315854948.mp3]</span><br><span style=''><i>son-in-law - зять, муж дочери</i></span>","INFO":null,"STT":135},
{"FRONT":"<span style='font-size: 28px; '>What's Tom Cruise's job?[sound:rec1315841552.mp3]<br />-He's <span class=indam>_________</span>.<br /><img class='center-block img-responsive hinhdep'  src='paste0d8woa.png' /></span>","BACK":"<span style='font-size: 28px; '>-He's <span class=indam>an actor</span>.[sound:rec1315841558.mp3]</span><br><span style=''><i>an actor - актер</i></span>","INFO":null,"STT":0},
{"FRONT":"<span style='font-size: 28px; '>They are <span class=indam>b______</span> and girlfriend.[sound:rec1315843103.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewukacz.png' /></span>","BACK":"<span style='font-size: 28px; '>They are <span class=indam>b</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>yfriend</span> and girlfriend.[sound:rec1315843109.mp3]</span><br><span style=''><i>a boyfriend - парень, бойфренд</i></span>","INFO":null,"STT":76},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which member of the family is it?<br />[sound:rec1315854097.mp3]</span>","BACK":"<span style='font-size: 28px; '>My brother's daughter is my <span class=indam>niece</span>.[sound:rec1315854101.mp3]</span><br><span style=''><i>niece - племянница</i></span>","INFO":null,"STT":132},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> he smoke?[sound:rec1336210369.mp3]<br />-Yes, he <span class=indam>[...]</span>. He smokes a packet a day.<br /><img class='center-block img-responsive hinhdep'  src='pastewyqp5z.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Does</span> he smoke?[sound:rec1336210461.mp3]<br />-Yes, he <span class=indam>does</span>.</span><br><span style=''></span>","INFO":null,"STT":67},
{"FRONT":"<span style='font-size: 28px; '>Who's Prince William?<br />-He's Prince Charles<span class=indam>[...]</span> son.[sound:rec1336208911.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteryeg9s.png' /></span>","BACK":"<span style='font-size: 28px; '>He's Prince Charles<span class=indam>'s</span> son.[sound:rec1336209502.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":36},
{"FRONT":"<span style='font-size: 28px; '>This is my boss. She works <span class=indam>h____</span>. <i>(she works a lot)</i>[sound:rec1336209346.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteidpwku.png' /></span>","BACK":"<span style='font-size: 28px; '>She works <span class=indam>hard</span>.[sound:rec1315843709.mp3]</span><br><span style=''><i>She works hard. - Она много работает.</i></span>","INFO":null,"STT":113},
{"FRONT":"<span style='font-size: 28px; '>We go to school by <span class=indam>b___</span>.[sound:rec1336210099.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezaecio.png' /></span>","BACK":"<span style='font-size: 28px; '>We go to school by <span class=indam>bus</span>.[sound:rec1336210106.mp3]<br /><br /></span><br><span style=''><i>a bus - автобус</i></span>","INFO":null,"STT":149},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> they have a pet?[sound:rec1322504872.mp3]<br />-Yes, they <span class=indam>[...]</span>. They have a snake.<br /><img class='center-block img-responsive hinhdep'  src='pasteqol7si.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Do</span> they have a pet?<br />-Yes, they <span class=indam>do</span>.[sound:rec1315843539.mp3]</span><br><span style=''></span>","INFO":null,"STT":105},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) I'm a teacher.&nbsp;&nbsp;<br />b) I teach her.[sound:rec1336210940.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) I'm a teacher</span>.[sound:rec1336210940.mp3]</span><br><span style=''></span>","INFO":null,"STT":124},
{"FRONT":"<span style='font-size: 28px; '>Chelsea Clinton is Bill Clinton's <span class=indam>d_____</span>. <i>(female child) </i>[sound:rec1336212569.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevpfflb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Chelsea Clinton is Bill Clinton's <span class=indam>daughter</span>.[sound:rec1336212575.mp3]</span><br><span style=''><i>a daughter - дочь</i></span>","INFO":null,"STT":37},
{"FRONT":"<span style='font-size: 28px; '>Angelina Jolie is Brad Pitt<span class=indam>[...]</span> wife.[sound:rec1336211009.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebtevpc.png' /></span>","BACK":"<span style='font-size: 28px; '>Angelina Jolie is Brad Pitt<span class=indam>'s</span> wife.[sound:rec1336211001.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":32},
{"FRONT":"<span style='font-size: 28px; '>They work in a hospital. They're <span class=indam>n_____</span>. <i>(and they're not doctors!)</i>[sound:rec1336211685.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexhmghz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They're <span class=indam>nurses</span>. [sound:rec1336211694.mp3]</span><br><span style=''><i>a nurse - медсестра</i></span>","INFO":null,"STT":17},
{"FRONT":"<span style='font-size: 28px; '>He's a singer. He <span class=indam>s____</span> in a rock band.[sound:rec1336209222.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastet9sx1h.png' /></span>","BACK":"<span style='font-size: 28px; '>He's a singer. He <span class=indam>sings</span> in a rock band.[sound:rec1336209230.mp3]<br /><br /></span><br><span style=''><i>to sing - петь</i></span>","INFO":null,"STT":145},
{"FRONT":"<span style='font-size: 28px; '>&quot;We're school children. We're <span class=indam>[...]</span> school.&quot;[sound:rec1322505536.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesq7zpg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We're school children. We're <span class=indam>at</span> school.&quot;[sound:rec1317668496.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":137},
{"FRONT":"<span style='font-size: 28px; '>He's Nick Clegg. He works in the British government. He's a <span class=indam>po_____</span>.[sound:rec1336211721.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteacq_vx.png' /></span>","BACK":"<span style='font-size: 28px; '>He's a <span class=indam>politician</span>.[sound:rec1315841993.mp3]</span><br><span style=''><i>a politician - политик</i></span>","INFO":null,"STT":20},
{"FRONT":"<span style='font-size: 28px; '>What subject do you <span class=indam>s_____</span>?[sound:rec1336210851.mp3]<br />-I <span class=indam>s_____</span> economics.<br /><img class='center-block img-responsive hinhdep'  src='paste0khqzo.png' /></span>","BACK":"<span style='font-size: 28px; '>What subject do you <span class=indam>study</span>?[sound:rec1336210911.mp3]<br />-I <span class=indam>study</span> economics.<br /><br /></span><br><span style=''><i>to study sth. - изучать что-л.</i><br></span>","INFO":null,"STT":61},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) It's on page 40.<br />b) It's on page 14.[sound:rec1339663744.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) It's on page 14.</span>[sound:rec1339663744.mp3]</span><br><span style=''></span>","INFO":null,"STT":125},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1315841585.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaexe7a.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>He's a b</span><span style='font-weight:600; color:#ff5500;'>ui</span><span class=indam>lder.</span>[sound:rec1336211767.mp3]</span><br><span style=''><i>a b</i><span style='font-style:italic; color:#ff0909;'>ui</span><i>lder - строитель</i><br></span>","INFO":null,"STT":2},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastexqpvot.png' />[sound:rec1315841676.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>She's a h</span><span style='font-weight:600; color:#ff5500;'>ai</span><span class=indam>rdresser.</span>[sound:rec1315841682.mp3]</span><br><span style=''><i>a h</i><span style='font-style:italic; color:#ff0909;'>ai</span><i>rdresser - парикмахер</i></span>","INFO":null,"STT":7},
{"FRONT":"<span style='font-size: 28px; '>&quot;Bye! <span class=indam>H____</span> a good journey!&quot;[sound:rec1336211424.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3hlztc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;<span class=indam>Have</span> a good journey!&quot;[sound:rec1336211432.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>Have a good journey! -&nbsp;&nbsp;Приятного путешествия!</span><br /><span style='font-style:italic; color:#000000;'>Have a ... - Желаю ...</span></span>","INFO":null,"STT":110},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'm a student. I'm <span class=indam>[...] </span>university.&quot;[sound:rec1322505004.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehlvxho.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span style='color:#000000;'>I'm</span><span class=indam> at</span> university.[sound:rec1322505029.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":117},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which member of the family is it?<br />[sound:rec1315854026.mp3]</span>","BACK":"<span style='font-size: 28px; '>My father's mother is my <span class=indam>grandmother</span>.[sound:rec1315854031.mp3]</span><br><span style=''><i>grandmother - бабушка</i></span>","INFO":null,"STT":129},
{"FRONT":"<span style='font-size: 28px; '>A <span class=indam>f_____</span> is a place where people make things.[sound:rec1336211929.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeqcpdd.jpg' /></span>","BACK":"<span style='font-size: 28px; '>A <span class=indam>factory</span> is a place where people make things.[sound:rec1336211920.mp3]</span><br><span style=''><i>a factory - фабрика, завод</i></span>","INFO":null,"STT":78},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) It's on TV.&nbsp;&nbsp;<br />b) It's a TV.[sound:rec1315853859.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) It's on TV.</span>[sound:rec1315853859.mp3]</span><br><span style=''></span>","INFO":null,"STT":122},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> you have a pet?<br />-Yes, I <span class=indam>[...]</span>. I have a dog.[sound:rec1322505692.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastermsg5j.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Do</span> you have a pet?[sound:rec1315843424.mp3]<br />-Yes, I <span class=indam>do</span>.<br /></span><br><span style=''></span>","INFO":null,"STT":95},
{"FRONT":"<span style='font-size: 28px; '>He's a <span class=indam>p____</span>. He flies an aeroplane.[sound:rec1315841945.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq7ulli.png' /></span>","BACK":"<span style='font-size: 28px; '>He's a <span class=indam>pilot</span>.[sound:rec1315841950.mp3]</span><br><span style=''><i>a pilot - пилот</i></span>","INFO":null,"STT":18},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> your father work?<br />-No, he <span class=indam>[...]</span>. He stays at home.[sound:rec1322505650.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemem0zh.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Does</span> your father work?[sound:rec1315842978.mp3]<br />-No, he <span class=indam>doesn't</span>.<br /><br /></span><br><span style=''></span>","INFO":null,"STT":70},
{"FRONT":"<span style='font-size: 28px; '>The Queen is Prince Charles's <span class=indam>m_____</span>.[sound:rec1315842427.mp3] (<i>Mum)</i><br /><img class='center-block img-responsive hinhdep'  src='pastexaepqo.png' /></span>","BACK":"<span style='font-size: 28px; '>The Queen is Prince Charles's <span class=indam>mother</span>.[sound:rec1315842433.mp3]</span><br><span style=''><i>a mother - мама</i></span>","INFO":null,"STT":40},
{"FRONT":"<span style='font-size: 28px; '>The father of a person's husband or wife is called his/her <span class=indam>f________</span>.[sound:rec1317667258.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq6amr3.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>father-in-law</span>[sound:rec1315854938.mp3]</span><br><span style=''><i>father-in-law - тесть, свёкор</i></span>","INFO":null,"STT":134},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> they have a pet?<br />-Yes, they <span class=indam>[...]</span>. They have a monkey.[sound:rec1322504920.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8idc8m.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Do</span> they have a pet?<br />-Yes, they <span class=indam>do</span>.[sound:rec1315843519.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":103},
{"FRONT":"<span style='font-size: 28px; '>Does she have a pet?<br />-Yes, she does. She has a <span class=indam>c______</span>.[sound:rec1315843459.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyinjnu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She has a <span class=indam>chicken</span>.[sound:rec1315843466.mp3]</span><br><span style=''><i>a chicken - цыпленок, курица</i></span>","INFO":null,"STT":98},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteknpirs.jpg' />[sound:rec1315842231.mp3]</span>","BACK":"<span style='font-size: 28px; '>She's a <span class=indam>waitress</span>.[sound:rec1315842237.mp3]</span><br><span style=''><i>a waitress - официантка</i></span>","INFO":null,"STT":30},
{"FRONT":"<span style='font-size: 28px; '>They <span class=indam>g____</span> to the cinema once a week.[sound:rec1336208670.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7pofmh.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They <span class=indam>go</span> to the cinema once a week.[sound:rec1336208687.mp3]<br /><br /></span><br><span style=''><i>to go to </i><span style='font-weight:600; font-style:italic;'>the</span><i> cinema - ходить в кино</i></span>","INFO":null,"STT":48},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) It's on page 40.<br />b) It's on page 14.&nbsp;&nbsp;[sound:rec1315853932.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>a) It's on page 40.</span>[sound:rec1315853932.mp3]</span><br><span style=''></span>","INFO":null,"STT":126},
{"FRONT":"<span style='font-size: 28px; '>She smokes a <span class=indam>p____</span> every day.[sound:rec1336210331.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetvdp6z.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She smokes a <span class=indam>pipe</span> every day.[sound:rec1315842756.mp3]</span><br><span style=''><i>a pipe - трубка</i></span>","INFO":null,"STT":59},
{"FRONT":"<span style='font-size: 28px; '>Brad Pitt and Angelina Jolie are <span class=indam>m_____</span>. They're husband and wife.[sound:rec1315842484.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev2btuz.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Brad Pitt and Angelina Jolie are <span class=indam>married</span>. [sound:rec1315842494.mp3]<br /><br /></span><br><span style=''><i>to be married - быть женатым, быть замужем</i></span>","INFO":null,"STT":43},
{"FRONT":"<span style='font-size: 28px; '>Having a bath is very <span class=indam>rel_____</span>. <span style='font-style:italic; color:#000000;'>(the opposite of 'stressful') </span>[sound:rec1336210203.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastektl8iv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Having a bath is very <span class=indam>rel</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>xing</span>. [sound:rec1336210214.mp3]<br /><br /></span><br><span style=''><i>relaxing (adj.) - расслабляющий</i></span>","INFO":null,"STT":107},
{"FRONT":"<span style='font-size: 28px; '>The mother of a person's husband or wife is called his/her <span class=indam>m________</span>.[sound:rec1317667244.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuqrczh.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>mother-in-law</span>[sound:rec1315854942.mp3]</span><br><span style=''><i>mother-in-law - теща</i><br></span>","INFO":null,"STT":133},
{"FRONT":"<span style='font-size: 28px; '>Prince Charles is Prince William's <span class=indam>f____</span>.[sound:rec1315842469.mp3] <i>(dad)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteryeg9s.png' /></span>","BACK":"<span style='font-size: 28px; '>Prince Charles is Prince William's <span class=indam>father</span>.[sound:rec1315842474.mp3]</span><br><span style=''><i>a father - отец, папа</i></span>","INFO":null,"STT":42},
{"FRONT":"<span style='font-size: 28px; '>My sister has <span class=indam>l____ __</span> shoes.<i> (many)</i>[sound:rec1336211629.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7wuyq8.png' /></span>","BACK":"<span style='font-size: 28px; '>My sister has <span class=indam>lots of</span> shoes.[sound:rec1336211649.mp3]<br /><i>or</i><br />My sister has <span class=indam>a lot of</span> shoes.</span><br><span style=''><i>lots of / a lot of - куча, много</i></span>","INFO":null,"STT":83},
{"FRONT":"<span style='font-size: 28px; '>On Thursdays they <span class=indam>p___</span> tennis.[sound:rec1336210710.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastey7khr_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>On Thursdays they <span class=indam>play</span> tennis.<br />[sound:rec1336210716.mp3]<br /></span><br><span style=''><i>to play tennis - играть в теннис</i></span>","INFO":null,"STT":55},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteexirin.png' />[sound:rec1315843374.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>lorry </span>or <span class=indam>a truck.</span>[sound:rec1315843380.mp3]</span><br><span style=''><i>a lorry / a truck - грузовик</i><br></span>","INFO":null,"STT":92},
{"FRONT":"<span style='font-size: 28px; '>The Queen is Prince Charles<span class=indam>[...]</span> mother.[sound:rec1336209002.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexaepqo.png' /></span>","BACK":"<span style='font-size: 28px; '>The Queen is Prince Charles<span class=indam>'s</span> mother.[sound:rec1336209020.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":39},
{"FRONT":"<span style='font-size: 28px; '>Does he have a pet?<br />-Yes, he does. He has a <span class=indam>____</span>.[sound:rec1315843434.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegizwjd.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He has a <span class=indam>cat</span>.[sound:rec1315843441.mp3]</span><br><span style=''><i>a cat - кот, кошка</i></span>","INFO":null,"STT":96},
{"FRONT":"<span style='font-size: 28px; '>We go to school <span class=indam>[...]</span> bus.[sound:rec1336209428.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezaecio.png' /></span>","BACK":"<span style='font-size: 28px; '>We go to school <span class=indam>by</span> bus.[sound:rec1336209436.mp3]</span><br><span style=''><i>by bus - автобусом, на автобусе</i><br></span>","INFO":null,"STT":150},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>s____</span> a pipe every day.[sound:rec1336208782.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetvdp6z.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>smokes</span> a pipe every day.[sound:rec1336208787.mp3]<br /><br /></span><br><span style=''><i>to smoke - курить</i></span>","INFO":null,"STT":58},
{"FRONT":"<span style='font-size: 28px; '>Every Saturday they play <span class=indam>c_____</span>.[sound:rec1336212414.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepuijdt.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Every Saturday they play <span class=indam>chess</span>.[sound:rec1336212421.mp3]</span><br><span style=''><i>chess (n.) - шахматы</i></span>","INFO":null,"STT":93},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which member of the family is it?<br />[sound:rec1315854070.mp3]</span>","BACK":"<span style='font-size: 28px; '>He's my sister's son is my <span class=indam>nephew</span>.[sound:rec1315854075.mp3]</span><br><span style=''><i>nephew - племянник</i></span>","INFO":null,"STT":131},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastegp2wgy.jpg' />[sound:rec1315841964.mp3]</span>","BACK":"<span style='font-size: 28px; '>He's a <span class=indam>policeman</span> / <span class=indam>police officer</span>.[sound:rec1315841971.mp3]</span><br><span style=''><i>a policeman / police officer - полицейский</i></span>","INFO":null,"STT":19},
{"FRONT":"<span style='font-size: 28px; '>They do <span class=indam>ex_____</span> at the weekend. <br /><i>(for example sport, running, swimming, going to the gym) </i>[sound:rec1336209954.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebzepud.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They do <span class=indam>exercise</span> on the weekend. [sound:rec1336209107.mp3]<br /><br /></span><br><span style=''><i>to do exercise - тренироваться, заниматься спортом</i></span>","INFO":null,"STT":45},
{"FRONT":"<span style='font-size: 28px; '>This is Bill. He <span class=indam>d____</span> a BMW.[sound:rec1336210010.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetnpzkc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He <span class=indam>drives</span> a BMW.[sound:rec1336210018.mp3]<br /><br /></span><br><span style=''><i>to drive (a car) - водить (машину)</i></span>","INFO":null,"STT":46},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>E_____</span> <span class=indam>me</span>, do you speak English?[sound:rec1336210269.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteelfnzb.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Excuse</span> <span class=indam>me</span>, do you speak English?[sound:rec1336210277.mp3]<br /><br /></span><br><span style=''><i>&quot;Excuse me, ...?&quot; - &quot;Простите, ...?&quot; / &quot;Извините, ...?&quot;</i></span>","INFO":null,"STT":148},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='east.PNG' />[sound:rec1322505583.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>East</span>[sound:rec1315843305.mp3]</span><br><span style=''><i>East - восток</i></span>","INFO":null,"STT":87},
{"FRONT":"<span style='font-size: 28px; '>He always <span class=indam>l____</span> to the radio.[sound:rec1336209287.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteamghww.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He always <span class=indam>listens</span> to the radio.[sound:rec1336209294.mp3]<br /><br /></span><br><span style=''><i>to listen to </i><span style='font-weight:600; font-style:italic;'>the</span><i> radio - слушать радио</i></span>","INFO":null,"STT":51},
{"FRONT":"<span style='font-size: 28px; '>She's running fast, maybe she's late. She's <span class=indam>in a</span> <span class=indam>h_____</span>.[sound:rec1336211214.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteovqqsc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She's <span class=indam>in a</span> <span class=indam>hurry</span>.[sound:rec1336211207.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>She's in a hurry. - Она спешит.</span><br /><span style='font-style:italic; color:#000000;'>in a hurry - в спешке, второпях</span><br /></span>","INFO":null,"STT":115},
{"FRONT":"<span style='font-size: 28px; '>Excuse me, do you <span class=indam>s____</span> English?[sound:rec1336212389.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteelfnzb.png' /></span>","BACK":"<span style='font-size: 28px; '>Excuse me, do you <span class=indam>speak</span> English?[sound:rec1336211835.mp3]</span><br><span style=''><i>to speak English - говорить по-английски</i></span>","INFO":null,"STT":146},
{"FRONT":"<span style='font-size: 28px; '>&quot;We <span class=indam>l___</span> in a flat.&quot;[sound:rec1336210752.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4wmf0k.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;We <span class=indam>live</span> in a flat.&quot;[sound:rec1336210762.mp3]<br /><br /></span><br><span style=''><i>to live in a flat - жить в квартире</i></span>","INFO":null,"STT":53},
{"FRONT":"<span style='font-size: 28px; '>Excuse me, <span class=indam>____________</span> English? <b>(you / speak)</b>[sound:rec1336211842.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteelfnzb.png' /></span>","BACK":"<span style='font-size: 28px; '>Excuse me, <span class=indam>do you speak</span><b> </b>English?[sound:rec1336211835.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>Do you speak English? - Вы говорите по-английски?</span></span>","INFO":null,"STT":147},
{"FRONT":"<span style='font-size: 28px; '>'<span class=indam>T_____</span> <span class=indam>up</span>' means 'great'![sound:rec1336211233.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteow2wbi.png' /></span>","BACK":"<span style='font-size: 28px; '>'<span class=indam>Thumbs</span> <span class=indam>up</span>' means 'great'![sound:rec1336211240.mp3]<br /></span><br><span style=''><i>a thumb - большой палец</i></span>","INFO":null,"STT":106},
{"FRONT":"<span style='font-size: 28px; '>He's a <span class=indam>l_____</span>. He works in court.[sound:rec1336209582.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehyfopv.png' /></span>","BACK":"<span style='font-size: 28px; '>He's a <span class=indam>lawyer</span>. [sound:rec1336209589.mp3]</span><br><span style=''><i>a lawyer - юрист, адвокат</i></span>","INFO":null,"STT":13},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) I'm a teacher.<br />b) I teach her.[sound:rec1339663769.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) I teach her.</span>[sound:rec1339663769.mp3]</span><br><span style=''></span>","INFO":null,"STT":123},
{"FRONT":"<span style='font-size: 28px; '>Prince William is Prince Charle's <span class=indam>s____</span>.[sound:rec1315842324.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteryeg9s.png' /></span>","BACK":"<span style='font-size: 28px; '>Prince William is Prince Charle's <span class=indam>son</span>.[sound:rec1315842330.mp3]</span><br><span style=''><i>a son - сын</i></span>","INFO":null,"STT":35},
{"FRONT":"<span style='font-size: 28px; '>He's an <span class=indam>engineer</span>. He <span class=indam>d______</span> bridges and buildings.[sound:rec1336209532.mp3] <i>(makes plans for)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteipomhr.png' /></span>","BACK":"<span style='font-size: 28px; '>He <span class=indam>designs</span> bridges and buildings.[sound:rec1336209543.mp3]<br /><br /></span><br><span style=''><i>to design sth. - проектировать что-л.</i></span>","INFO":null,"STT":5},
{"FRONT":"<span style='font-size: 28px; '>He <span class=indam>w_____</span> television in the evening.[sound:rec1315842824.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteixqhqw.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He <span class=indam>watches</span> television in the evening.[sound:rec1315842828.mp3]<br /><br /></span><br><span style=''><span style='font-style:italic; color:#000000;'>to watch television - смотреть телевизор</span></span>","INFO":null,"STT":63},
{"FRONT":"<span style='font-size: 28px; '>He's a pilot. He <span class=indam>f____</span> an aeroplane.[sound:rec1336211450.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq7ulli.png' /></span>","BACK":"<span style='font-size: 28px; '>He's a pilot. He <span class=indam>flies</span> an aeroplane.[sound:rec1336211457.mp3]<br /><br /></span><br><span style=''><i>to fly (an aeroplane) - летать (на самолете)</i></span>","INFO":null,"STT":143},
{"FRONT":"<span style='font-size: 28px; '>She's a <span class=indam>receptionist. </span>She works in a hotel and <span class=indam>we_____</span> visitors.[sound:rec1336211389.mp3] <i>(says 'hello' etc.)</i> <br /><img class='center-block img-responsive hinhdep'  src='paste4j9zp1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>welcomes </span><span style='color:#000000;'>visitors.</span>[sound:rec1336211380.mp3]<br /><br /></span><br><span style=''><i>to welcome sb. - приветствовать / встречать кого-л.</i></span>","INFO":null,"STT":22},
{"FRONT":"<span style='font-size: 28px; '>How do you feel?[sound:rec1322504951.mp3]<br />-<span class=indam>Fan_____</span>! <i>(very good)</i><br /><img class='center-block img-responsive hinhdep'  src='pastegqeqbb.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Fant</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>stic! </span>[sound:rec1315843172.mp3]</span><br><span style=''><i>Fantastic! - Потрясающе!</i></span>","INFO":null,"STT":79},
{"FRONT":"<span style='font-size: 28px; '>He doesn't have a job - he's <span class=indam>une______</span>.[sound:rec1315843674.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehzbq9n.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's <span class=indam>unempl</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>yed</span>.[sound:rec1315843681.mp3]</span><br><span style=''><i>unemployed (adj.) - безработный</i></span>","INFO":null,"STT":111},
{"FRONT":"<span style='font-size: 28px; '>She's a <span class=indam>shop assistant</span>. She <span class=indam>w____</span> in a shop.[sound:rec1336210544.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteagytjl.png' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>works</span> in a shop.[sound:rec1336210583.mp3]<br /><br /></span><br><span style=''><i>to work - работать</i></span>","INFO":null,"STT":28},
{"FRONT":"<span style='font-size: 28px; '><br /><img class='center-block img-responsive hinhdep'  src='paste6ckrch.png' />[sound:rec1315843480.mp3]</span>","BACK":"<span style='font-size: 28px; '><span style='color:#000000;'>They're</span><span class=indam> flowers</span>[sound:rec1315843484.mp3].<br /><br /></span><br><span style=''><i>a flower - цветок</i></span>","INFO":null,"STT":100},
{"FRONT":"<span style='font-size: 28px; '>Brad Pitt is Angelina Jolie's <span class=indam>h______</span>.[sound:rec1315842289.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebtevpc.png' /></span>","BACK":"<span style='font-size: 28px; '>Brad Pitt is Angelina Jolie's <span class=indam>husband</span>.[sound:rec1315842295.mp3]</span><br><span style=''><i>a husband - муж</i></span>","INFO":null,"STT":33},
{"FRONT":"<span style='font-size: 28px; '>He's a builder. He <span class=indam>b_____</span> houses. <i>(makes)</i>[sound:rec1336212302.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaexe7a.png' /></span>","BACK":"<span style='font-size: 28px; '>He's a builder. He <span class=indam>builds</span> houses.[sound:rec1336212310.mp3]<br /><br /></span><br><span style=''><i>to build - строить</i></span>","INFO":null,"STT":140},
{"FRONT":"<span style='font-size: 28px; '>How do you feel?<br />-<span class=indam>Tе_____</span>! <i>(very bad)</i>[sound:rec1336209740.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejit4jr.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Terrible!</span> [sound:rec1315843341.mp3]</span><br><span style=''><i>Terrible! - Ужасно!</i></span>","INFO":null,"STT":90},
{"FRONT":"<span style='font-size: 28px; '>He's a <span class=indam>m_____</span>. He tells people what to do.[sound:rec1315841854.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegi7gpj.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's a <span class=indam>manager</span>. [sound:rec1315841860.mp3]</span><br><span style=''><i>a manager - руководитель, менеджер</i></span>","INFO":null,"STT":14},
{"FRONT":"<span style='font-size: 28px; '>A couple's son's wife is called their <span class=indam>d_____</span>.[sound:rec1317667345.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelwu5i4.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>daughter-in-law</span>[sound:rec1315854913.mp3]</span><br><span style=''><i>daughter-in-law - невестка, сноха, жена сына</i></span>","INFO":null,"STT":136},
{"FRONT":"<span style='font-size: 28px; '>Do you have a pet?[sound:rec1315843409.mp3]<br />-Yes, I do. I have a <span class=indam>_____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastermsg5j.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I have a <span class=indam>dog</span>.[sound:rec1315843415.mp3]</span><br><span style=''><i>a dog - собака</i></span>","INFO":null,"STT":94},
{"FRONT":"<span style='font-size: 28px; '>This is my friend. He <span class=indam>s____</span> English.[sound:rec1336210612.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewzfmfc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He <span class=indam>speaks</span> English.[sound:rec1336210606.mp3]<br /><br /></span><br><span style=''><i>to speak English - говорить по-английски</i></span>","INFO":null,"STT":60},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> she play the piano?<br />-No, she <span class=indam>[...]</span>. She plays the violin.[sound:rec1322505172.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenk81bw.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Does</span> she play the piano?[sound:rec1336210312.mp3]<br />-No, she <span class=indam>doesn't</span>.<br /></span><br><span style=''></span>","INFO":null,"STT":68},
{"FRONT":"<span style='font-size: 28px; '>Aunts, uncles, nephews, nieces, cousins, etc. are <span class=indam>re_____</span>.[sound:rec1315843205.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewmbcjx.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>r</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>latives </span><span style='color:#000000;'>or</span><span class=indam> r</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>lations</span>[sound:rec1315843224.mp3]</span><br><span style=''><i>relatives / relations - родственники</i></span>","INFO":null,"STT":82},
{"FRONT":"<span style='font-size: 28px; '>He's a fisherman. He <span class=indam>c____</span> fish.[sound:rec1336211286.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepbprnt.png' /></span>","BACK":"<span style='font-size: 28px; '>He's a fisherman. He <span class=indam>catches</span> fish.[sound:rec1336211294.mp3]<br /><br /></span><br><span style=''><i>to catch sth. - ловить что-л.</i></span>","INFO":null,"STT":142},
{"FRONT":"<span style='font-size: 28px; '>Who's Prince Charles?<br>-He's Prince William<span class=indam>[...]</span> father.[sound:rec1336209044.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteryeg9s.png' /></span>","BACK":"<span style='font-size: 28px; '>He's Prince William<span class=indam>'s</span> father.[sound:rec1336209051.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":41},
{"FRONT":"<span style='font-size: 28px; '>-Do you have a <span class=indam>p___</span>? <i>(an animal at home)</i>[sound:rec1336210483.mp3]<br />-Yes, I do. I have a dog.<br /><img class='center-block img-responsive hinhdep'  src='pastermsg5j.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Do you have a <span class=indam>pet</span>?[sound:rec1336210492.mp3]</span><br><span style=''><i>a pet - домашнее животное</i></span>","INFO":null,"STT":151},
{"FRONT":"<span style='font-size: 28px; '>She's a <span class=indam>secretary</span>. She <span class=indam>a____</span> the phone and arranges meetings.[sound:rec1336209258.mp3] <i>(talks when people call)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteu8hstr.png' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>answers</span> the phone.[sound:rec1315842077.mp3]<br /><br /></span><br><span style=''><i>to answer </i><span style='font-weight:600; font-style:italic;'>the</span><i> phone - отвечать на звонки</i></span>","INFO":null,"STT":24},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1336210145.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteipomhr.png' /></span>","BACK":"<span style='font-size: 28px; '>He's an <span class=indam>engin</span><span style='font-weight:600; color:#ff5500;'>ee</span><span class=indam>r</span>.[sound:rec1336210164.mp3]</span><br><span style=''><i>an engin</i><span style='font-style:italic; color:#ff0909;'>ee</span><i>r - инженер</i></span>","INFO":null,"STT":4},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which member of the family is it?<br />[sound:rec1315853992.mp3]</span>","BACK":"<span style='font-size: 28px; '>My mother's brother is my <span class=indam>uncle</span>.[sound:rec1315854000.mp3]</span><br><span style=''><i>uncle - дядя</i></span>","INFO":null,"STT":128},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteme_mzh.jpg' />[sound:rec1315841662.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>He's a f</span><span style='font-weight:600; color:#ff5500;'>oo</span><span class=indam>tballer.</span>[sound:rec1315841668.mp3]</span><br><span style=''><i>a f</i><span style='font-style:italic; color:#ff0909;'>oo</span><i>tballer - футболист</i></span>","INFO":null,"STT":6},
{"FRONT":"<span style='font-size: 28px; '>She works in a hotel and welcomes visitors. She's a <span class=indam>rec_______</span>.[sound:rec1336212110.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4j9zp1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She's a <span class=indam>receptionist</span>.[sound:rec1315842014.mp3]</span><br><span style=''><i>a receptionist - портье, администратор</i></span>","INFO":null,"STT":21},
{"FRONT":"<span style='font-size: 28px; '>This is my brother. He <span class=indam>p____</span> the guitar.[sound:rec1336208747.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh8nmma.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This is my brother. He <span class=indam>plays</span> the guitar.[sound:rec1336208753.mp3]<br /><br /></span><br><span style=''><i>to play </i><span style='font-weight:600; font-style:italic;'>the</span><i> guitar - играть на гитаре</i></span>","INFO":null,"STT":56},
{"FRONT":"<span style='font-size: 28px; '>This is my little cousin. He <span class=indam>w___</span> glasses.[sound:rec1336209781.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4gnclb.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He <span class=indam>wears</span> glasses.[sound:rec1336209789.mp3]<br /><br /></span><br><span style=''><i>to wear glasses / clothes / etc. - носить очки / одежду / т.д.</i></span>","INFO":null,"STT":64},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> she have a pet?<br />-Yes, she <span class=indam>[...]</span>. She has a chicken.[sound:rec1322504485.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyinjnu.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Does</span> she have a pet?<br />-Yes, she <span class=indam>does</span>.[sound:rec1315843474.mp3]<br /></span><br><span style=''></span>","INFO":null,"STT":99},
{"FRONT":"<span style='font-size: 28px; '>I'm a manager. I <span class=indam>w___</span> in an office.[sound:rec1336209810.mp3]<br /><img class='center-block img-responsive hinhdep'  src='in-the-office.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I <span class=indam>work</span> in an office.[sound:rec1336209819.mp3]</span><br><span style=''><i>to work (in an office) - работать (в офисе)</i></span>","INFO":null,"STT":65},
{"FRONT":"<span style='font-size: 28px; '>He's a <span class=indam>f_____</span>. He catches fish.[sound:rec1336209689.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepbprnt.png' /></span>","BACK":"<span style='font-size: 28px; '>He's a <span class=indam>fisherman</span>. He catches fish.[sound:rec1336209696.mp3]</span><br><span style=''><i>a fisherman - рыбак</i><br></span>","INFO":null,"STT":141},
{"FRONT":"<span style='font-size: 28px; '>How do you say the name of this film?[sound:rec1315843687.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetvchmm.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Nine and </span><span style='font-weight:600; text-decoration: underline; color:#0000ff;'>a</span><span class=indam> half</span> weeks[sound:rec1315843692.mp3]</span><br><span style=''></span>","INFO":null,"STT":112},
{"FRONT":"<span style='font-size: 28px; '>LISTEN! Which one does he say?<br /><br />a) It's on TV.<br />b) It's a TV.[sound:rec1315853851.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>b) It's a TV.</span>[sound:rec1315853851.mp3]</span><br><span style=''></span>","INFO":null,"STT":121},
{"FRONT":"<span style='font-size: 28px; '>They often <span class=indam>e___</span> fast food.[sound:rec1336210789.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteryqhiy.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They often <span class=indam>eat</span> fast food.<span class=indam> </span>[sound:rec1336210795.mp3]<br /><br /></span><br><span style=''><i>to eat (food) - есть (еду)</i><br></span>","INFO":null,"STT":47},
{"FRONT":"<span style='font-size: 28px; '>I <span class=indam>____ </span><span style='color:#000000;'>like</span> school.[sound:rec1336212036.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2jux4j.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I <span class=indam>don't </span><span style='color:#000000;'>like</span> school.[sound:rec1317668683.mp3]</span><br><span style=''></span>","INFO":null,"STT":73},
{"FRONT":"<span style='font-size: 28px; '>Angelina Jolie is Brad Pitt's <span class=indam>w____</span>.[sound:rec1315842259.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebtevpc.png' /></span>","BACK":"<span style='font-size: 28px; '>Angelina Jolie is Brad Pitt's <span class=indam>wife</span>.<br />[sound:rec1315842264.mp3]</span><br><span style=''><i>a wife - жена</i></span>","INFO":null,"STT":31},
{"FRONT":"<span style='font-size: 28px; '>They're <span class=indam>m______</span>. They play in an orchestra.[sound:rec1315841868.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyo5hsc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They're <span class=indam>musicians</span>.[sound:rec1315841874.mp3]</span><br><span style=''><i>a musician - музыкант</i><br></span>","INFO":null,"STT":15},
{"FRONT":"<span style='font-size: 28px; '>I sometimes work <span class=indam>o____</span>. <i>(the opposite of 'inside')</i>[sound:rec1336211960.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezy589p.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I sometimes work <span class=indam>outside</span>.[sound:rec1336211966.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>outside - на воздухе, на улице</span></span>","INFO":null,"STT":152}]

if (localStorage.caumayEn_SG_2 == null) {
    localStorage.caumayEn_SG_2 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_2"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_2+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_2).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_2).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_2).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_2+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_2).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_2).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_2).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_2)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_2))
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
	cau = Number(localStorage.caumayEn_SG_2)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_2)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_2) >  0){
		localStorage.caumayEn_SG_2 = Number(localStorage.caumayEn_SG_2) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_2))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_2)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_2)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_2) < dulieu.length-1){
		localStorage.caumayEn_SG_2 = Number(localStorage.caumayEn_SG_2) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_2))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_2)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_2)].BACK
	dapan = suahienthi(dapan,1).hienthi.replace('&quot;', "")
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
	var current_player = Number(localStorage.caumayEn_SG_2)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_2)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_2)].BACK
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
	cau = Number(localStorage.caumayEn_SG_2)
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
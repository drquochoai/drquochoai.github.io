$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359370297.mp3]<b>He's in a meeting </b><span class=indam>__ the m_____</span>. <i>(now)</i><br /><img class='center-block img-responsive hinhdep'  src='pastequk1cy.png' /></span>","BACK":"<span style='font-size: 28px; '><b>He's in a meeting</b> <span class=indam>at the moment</span>.[sound:rec1359370323.mp3]</span><br><span style=''></span><br><span style=''><i>at the moment - в данный момент</i><br></span>","STT":134},
{"FRONT":"<span style='font-size: 28px; '>Are you a <span class=indam>pr____</span> person? <i>(good at doing things)</i>[sound:rec1359446837.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteerjjs_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Are you a <span class=indam>pr</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>ctical</span> person? [sound:rec1359446843.mp3]<br /></span><br><span style=''></span><br><span style=''><i>pr</i><span style='font-style:italic; color:#ff5500;'>a</span><i>ctical (adj.) - практичный</i></span>","STT":2},
{"FRONT":"<span style='font-size: 28px; '>What a beautiful little <span class=indam>_____</span>![sound:rec1359366028.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexdrzhj.png' /></span>","BACK":"<span style='font-size: 28px; '>What a beautiful little <span class=indam>hand</span>![sound:rec1359366033.mp3]</span><br><span style=''></span><br><span style=''><i>a hand - рука</i><br /><i>note: 'hand' means only the part near the fingers, not the whole arm</i></span>","STT":28},
{"FRONT":"<span style='font-size: 28px; '>Don't eat that -<b> it's very </b><span class=indam>__healthy</span><b> food. </b><i>(the opposite of 'healthy')</i>[sound:rec1359367093.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenjik69.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Don't eat that - <b>it's very </b><span class=indam>unhealthy</span><b> food.</b>[sound:rec1359367104.mp3]</span><br><span style=''></span><br><span style=''><i>unhealthy (adj.) - нездоровый, вредный</i></span>","STT":72},
{"FRONT":"<span style='font-size: 28px; '>My cousin Anna <span class=indam>t_____</span> Spanish.[sound:rec1359367309.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterf_wpb.png' /></span>","BACK":"<span style='font-size: 28px; '>My cousin Anna <span class=indam>teaches</span> Spanish.[sound:rec1359367315.mp3]</span><br><span style=''></span><br><span style=''><i>to teach sth. - преподавать что-л.</i></span>","STT":81},
{"FRONT":"<span style='font-size: 28px; '>He's a lazy person -<b> he </b><span class=indam>______</span><b> work much.</b>[sound:rec1359443872.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7l8xu5.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's a lazy person - <b>he </b><span class=indam>doesn't</span><b> work much.</b>[sound:rec1359443877.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present simple </span><i>for </i><span style='font-weight:600; font-style:italic;'>general</span><i> statements</i></span>","STT":138},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359365908.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegkqfwc.png' /></span>","BACK":"<span style='font-size: 28px; '>It's an <span class=indam>arm</span>.[sound:rec1359365915.mp3]</span><br><span style=''></span><br><span style=''><i>an arm - рука</i></span>","STT":24},
{"FRONT":"<span style='font-size: 28px; '>Thomas danced <span class=indam>in the m____</span> of the dancefloor! <i>(centre)</i>[sound:rec1359367198.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewwuh2w.png' /></span>","BACK":"<span style='font-size: 28px; '>Thomas danced <span class=indam>in the</span> <span class=indam>middle</span> of the dancefloor![sound:rec1359367204.mp3]</span><br><span style=''></span><br><span style=''><i>middle (n.) - середина</i></span>","STT":76},
{"FRONT":"<span style='font-size: 28px; '>Great to see you. <b>I'm so </b><span class=indam>pl_____</span><b> that you came to America.</b> <i>(happy, glad)</i>[sound:rec1359368807.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemahs1a.png' /></span>","BACK":"<span style='font-size: 28px; '>Great to see you.<b> I'm so </b><span class=indam>pleased</span><b> that you came to America.</b>[sound:rec1359368812.mp3]</span><br><span style=''></span><br><span style=''><i>pleased (adj.) - рад, счастлив</i><br></span>","STT":124},
{"FRONT":"<span style='font-size: 28px; '>What are you doing this afternoon? <b>Would you like to go to an </b><span class=indam>a___ g_____</span><b> with me?</b> <i>(a place where you can see paintings, sculpture etc.)</i>[sound:rec1359370087.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexf07fv.png' /></span>","BACK":"<span style='font-size: 28px; '>What are you doing this afternoon?<b> Would you like to go to an </b><span class=indam>art gallery</span><b> with me?</b>[sound:rec1359370102.mp3]</span><br><span style=''></span><br><span style=''><i>an art gallery - картинная галерея, музей исскуства</i></span>","STT":130},
{"FRONT":"<span style='font-size: 28px; '>Don't put your pen in your <span class=indam>____</span>![sound:rec1359366094.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteswak4v.png' /></span>","BACK":"<span style='font-size: 28px; '>Don't put your pen in your <span class=indam>mouth</span>![sound:rec1359366099.mp3]</span><br><span style=''></span><br><span style=''><i>a mouth - рот</i></span>","STT":30},
{"FRONT":"<span style='font-size: 28px; '>This is our house. <b>We live far away </b><span class=indam>[...]</span><b> a city.</b>[sound:rec1359366993.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteif2scv.png' /> </span>","BACK":"<span style='font-size: 28px; '>This is our house. <b>We live far away </b><span class=indam>from</span><b> a city.</b>[sound:rec1359366998.mp3]<br /></span><br><span style=''></span><br><span style=''><i>far away from - далеко от</i></span>","STT":67},
{"FRONT":"<span style='font-size: 28px; '>They aren't going to win. <b>They </b><span class=indam>______</span><b> well today.</b> <b>(not play)</b>[sound:rec1359367497.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemaybhj.png' /></span>","BACK":"<span style='font-size: 28px; '>They aren't going to win.<b> They </b><span class=indam>aren't playing</span><b> well today.</b>[sound:rec1359367503.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for actions or processes </i><span style='font-weight:600; font-style:italic;'>at this moment</span></span>","STT":86},
{"FRONT":"<span style='font-size: 28px; '>Excuse me, <b>what </b><span class=indam>___</span><b> 'fabulous' mean?</b>[sound:rec1359368831.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5qrwki.png' /></span>","BACK":"<span style='font-size: 28px; '>Excuse me, <b>what </b><span class=indam>does</span><b> 'fabulous' mean?</b>[sound:rec1359368838.mp3]</span><br><span style=''></span><br><span style=''><i>what does sth. mean? - что значит...?</i></span>","STT":125},
{"FRONT":"<span style='font-size: 28px; '>A bookshop is a place <span class=indam>w____</span><b> you can buy books.</b>[sound:rec1359368253.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteistcbp.png' /></span>","BACK":"<span style='font-size: 28px; '>A bookshop is a place <span class=indam>where</span> <b>you can buy books.</b>[sound:rec1359368260.mp3]</span><br><span style=''></span><br><span style=''><i>where - где, который (про место)</i></span>","STT":110},
{"FRONT":"<span style='font-size: 28px; '><i>At immigration:</i><br /><span class=indam>___</span> this your first visit to Britain?[sound:rec1359368711.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecaykj9.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Is</span> this your first visit to Britain?[sound:rec1359368718.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":120},
{"FRONT":"<span style='font-size: 28px; '>I'm going to book my holiday at this <span class=indam>t____ a_____</span>.[sound:rec1359368538.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiiqlv6.png' />]]</span>","BACK":"<span style='font-size: 28px; '>I'm going to book my holiday at this <span class=indam>travel agent's</span>.[sound:rec1359368548.mp3]</span><br><span style=''></span><br><span style=''><i>a travel agent's - турфирма</i><br></span>","STT":113},
{"FRONT":"<span style='font-size: 28px; '><i>At immigration:</i><br /><span class=indam>____</span> long are you staying in Britain?[sound:rec1359368698.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecaykj9.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>How</span> long are you staying in Britain?[sound:rec1359368704.mp3]</span><br><span style=''></span><br><span style=''><i>how long...? - как долго...?</i></span>","STT":119},
{"FRONT":"<span style='font-size: 28px; '>My parents live in the city, <b>they </b><span class=indam>_____</span><b> live in the countryside.</b>[sound:rec1359443896.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecwwiwq.png' /></span>","BACK":"<span style='font-size: 28px; '>My parents live in the city, <b>they </b><span class=indam>don't</span><b> live in the countryside.</b>[sound:rec1359443917.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present simple </span><i>for </i><span style='font-weight:600; font-style:italic;'>general</span><i> statements</i></span>","STT":140},
{"FRONT":"<span style='font-size: 28px; '>An ipod is something <span class=indam>w____</span><b> you listen to music with.</b>[sound:rec1359368152.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebvvgyp.png' /></span>","BACK":"<span style='font-size: 28px; '>An ipod is something <span class=indam>which</span><b> you listen to music with.</b>[sound:rec1359368163.mp3]</span><br><span style=''></span><br><span style=''><i>which - который (про предмет)</i></span>","STT":108},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359370297.mp3] <b>He's </b><span class=indam>[...]</span><b> a meeting at the moment.</b><br /><img class='center-block img-responsive hinhdep'  src='pastequk1cy.png' /></span>","BACK":"<span style='font-size: 28px; '><b>He's </b><span class=indam>in</span><b> a meeting at the moment.</b>[sound:rec1359370323.mp3]</span><br><span style=''></span><br><span style=''><i>meeting - встреча, собрание</i></span>","STT":135},
{"FRONT":"<span style='font-size: 28px; '>He has lots of money but he never gives any to anyone -<b> he's </b><span class=indam>m____</span><b>.</b> <i>(selfish; the opposite of 'generous')</i>[sound:rec1359366822.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevwexxs.png' /></span>","BACK":"<span style='font-size: 28px; '>He has lots of money but he never gives any to anyone -<b> he's </b><span class=indam>mean</span><b>.</b>[sound:rec1359366833.mp3]</span><br><span style=''></span><br><span style=''><i>mean (adj.) - жадный</i></span>","STT":60},
{"FRONT":"<span style='font-size: 28px; '>Excuse me, <span class=indam>____</span><b> do you say &quot;самолет&quot; in English? </b>[sound:rec1359365654.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastes_vm2v.png' /></span>","BACK":"<span style='font-size: 28px; '>Excuse me, <span class=indam>how</span><b> do you say &quot;самолет&quot; in English? </b>[sound:rec1359365692.mp3]</span><br><span style=''></span><br><span style=''><i>how do you say ... ? - как сказать ... ?</i></span>","STT":12},
{"FRONT":"<span style='font-size: 28px; '>We use our <span class=indam>b____</span> to think. <i>(the organ in our head)</i>[sound:rec1359368571.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenzryuv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>We use our <span class=indam>brain</span> to think.[sound:rec1359368576.mp3]</span><br><span style=''></span><br><span style=''><i>a brain - мозг</i></span>","STT":115},
{"FRONT":"<span style='font-size: 28px; '>Matches are things <span class=indam>w____</span><b> you use to light a fire.</b>[sound:rec1359367979.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesifbhi.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Matches are things <span class=indam>which</span><b> you use to light a fire.</b>[sound:rec1359367990.mp3]</span><br><span style=''></span><br><span style=''><i>which - который (про предмет)</i></span>","STT":101},
{"FRONT":"<span style='font-size: 28px; '>The joke was very funny and<b> I </b><span class=indam>l_____</span><b> a lot</b>. <i>(made a noise like 'ha-ha!')</i>[sound:rec1359366655.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastes8ipe0.png' /></span>","BACK":"<span style='font-size: 28px; '>The joke was very funny and<b> I </b><span class=indam>laughed</span><b> a lot</b>.[sound:rec1359366660.mp3]</span><br><span style=''></span><br><span style=''><i>to laugh - смеяться</i></span>","STT":51},
{"FRONT":"<span style='font-size: 28px; '>A bank is a <span class=indam>p____</span> where you keep your money.[sound:rec1359444069.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9iolbk.jpg' /></span>","BACK":"<span style='font-size: 28px; '>A bank is a <span class=indam>place</span> where you keep your money.[sound:rec1359444075.mp3]</span><br><span style=''></span><br><span style=''><i>a place - место</i></span>","STT":149},
{"FRONT":"<span style='font-size: 28px; '>The <span class=indam>op_____</span> of 'up' is 'down'.[sound:rec1359367228.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecpn978.png' /></span>","BACK":"<span style='font-size: 28px; '>The <span class=indam>opposite</span> of 'up' is 'down'.[sound:rec1359367234.mp3]</span><br><span style=''></span><br><span style=''><i>opposite (n.) - противоположность</i></span>","STT":78},
{"FRONT":"<span style='font-size: 28px; '>This is the switch <span class=indam>w____</span><b> controls the lights.</b>[sound:rec1359444236.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuxihl2.png' /></span>","BACK":"<span style='font-size: 28px; '>This is the switch<b> </b><span class=indam>which</span><b> controls the lights.</b>[sound:rec1359444242.mp3]</span><br><span style=''></span><br><span style=''><i>which - который (про предмет)</i></span>","STT":151},
{"FRONT":"<span style='font-size: 28px; '>Excuse me, <span style='font-weight:600; color:#000000;'>how</span><b> do you </b><span class=indam>s____</span><b> &quot;самолет&quot; in English? </b>[sound:rec1359365672.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastes_vm2v.png' /></span>","BACK":"<span style='font-size: 28px; '>Excuse me, <span style='font-weight:600; color:#000000;'>how</span><b> do you </b><span class=indam>say</span><b> &quot;самолет&quot; in English? </b>[sound:rec1359365692.mp3]</span><br><span style=''></span><br><span style=''><i>to say sth. - сказать что-л.</i></span>","STT":13},
{"FRONT":"<span style='font-size: 28px; '>You're a student too! <b>What university do you </b><span class=indam>____</span><b> to?</b>[sound:rec1359365449.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexxqemu.jpg' /></span>","BACK":"<span style='font-size: 28px; '><b>What university do you </b><span class=indam>go</span><b> to?</b>[sound:rec1359365470.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":5},
{"FRONT":"<span style='font-size: 28px; '>This is our house. <b>We live </b><span class=indam>f___</span><b> </b><span class=indam>away</span><b> from a city</b>. <i>(the opposite of 'near')</i>[sound:rec1359366974.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteif2scv.png' /> </span>","BACK":"<span style='font-size: 28px; '>This is our house. <b>We live </b><span class=indam>far</span><b> </b><span class=indam>away</span><b> from a city.</b>[sound:rec1359366987.mp3]<br /></span><br><span style=''></span><br><span style=''><i>far away from - далеко от</i></span>","STT":66},
{"FRONT":"<span style='font-size: 28px; '>Are you lazy or are you <span class=indam>___-working</span>? <i>(the opposite of 'lazy')</i>[sound:rec1359366798.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesaqyne.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Are you lazy or are you <span class=indam>hard-working</span>?[sound:rec1359366802.mp3]</span><br><span style=''></span><br><span style=''><i>hard-working (adj.) - трудолюбивый</i></span>","STT":59},
{"FRONT":"<span style='font-size: 28px; '>The waiter in the restaurant was very <span class=indam>__friendly</span>. <i>(the opposite of 'friendly')</i>[sound:rec1359366900.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekt4a6t.png' /> </span>","BACK":"<span style='font-size: 28px; '>The waiter in the restaurant was very <span class=indam>unfr</span><span style='font-weight:600; color:#ff5500;'>ie</span><span class=indam>ndly</span>.[sound:rec1359366909.mp3]</span><br><span style=''></span><br><span style=''><i>unfri</i><span style='font-style:italic; color:#ff5500;'>e</span><i>ndly (adj.) - недружелюбный, недружественный</i></span>","STT":63},
{"FRONT":"<span style='font-size: 28px; '><i>At immigration:</i><br />So, <span class=indam>w____</span><b> the purpose of your visit to Britain?</b>[sound:rec1359368668.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecaykj9.png' /></span>","BACK":"<span style='font-size: 28px; '>So, <span class=indam>what's</span><b> the purpose of your visit to Britain?</b>[sound:rec1359368674.mp3]</span><br><span style=''></span><br><span style=''><i>what's the purpose of...? - какова цель...?</i></span>","STT":117},
{"FRONT":"<span style='font-size: 28px; '>Tell me about yourself. <b>Where </b><span class=indam>____</span><b> you live?</b>[sound:rec1359365421.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7t005w.png' /></span>","BACK":"<span style='font-size: 28px; '><b>Where </b><span class=indam>do</span><b> you live?</b>[sound:rec1359365426.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":4},
{"FRONT":"<span style='font-size: 28px; '>That's not polite - <b>it's very </b><span class=indam>r____</span><b>!</b>[sound:rec1359367046.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegcan01.png' /></span>","BACK":"<span style='font-size: 28px; '>That's not polite -<b> it's very </b><span class=indam>rude</span><b>!</b>[sound:rec1359367058.mp3]</span><br><span style=''></span><br><span style=''><i>rude (adj.) - грубый</i></span>","STT":69},
{"FRONT":"<span style='font-size: 28px; '>Tell me about yourself. <b>Where </b><span class=indam>____</span><b> you come from?</b>[sound:rec1359443995.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7t005w.png' /></span>","BACK":"<span style='font-size: 28px; '><b>Where </b><span class=indam>do</span><b> you come from?</b>[sound:rec1359444000.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":145},
{"FRONT":"<span style='font-size: 28px; '>He's carrying his son on his <span class=indam>s______</span>.[sound:rec1359366175.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesumhw9.png' /></span>","BACK":"<span style='font-size: 28px; '>He's carrying his son on his <span class=indam>shoulders</span>.[sound:rec1359366181.mp3]</span><br><span style=''></span><br><span style=''><i>a shoulder - плечо</i></span>","STT":33},
{"FRONT":"<span style='font-size: 28px; '>Oh dear. The beach is <b>really </b><span class=indam>c______</span><b> today</b>. <i>(busy, with lots of people)</i>[sound:rec1359366953.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteau7pio.png' /></span>","BACK":"<span style='font-size: 28px; '>Oh dear. The beach is <b>really </b><span class=indam>crowded</span><b> today.</b>[sound:rec1359366966.mp3]</span><br><span style=''></span><br><span style=''><i>crowded (adj.) - переполненный, людный</i></span>","STT":65},
{"FRONT":"<span style='font-size: 28px; '><i>At immigration:</i><br />-<span class=indam>E____</span> your stay in Britain. <i>('have a good stay')</i>[sound:rec1359368730.mp3]<br />-Thank you.<br /><img class='center-block img-responsive hinhdep'  src='pastemrl3db.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Enjoy</span> your stay in Britain.[sound:rec1359368738.mp3]<br />-Thank you.</span><br><span style=''></span><br><span style=''><i>to enjoy sth. -&nbsp;&nbsp;наслаждаться чем-л., нравиться</i></span>","STT":121},
{"FRONT":"<span style='font-size: 28px; '>I work at home; <b>I </b><span class=indam>_____</span><b> work in an office.</b>[sound:rec1359443924.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastethhhkp.png' /></span>","BACK":"<span style='font-size: 28px; '>I work at home; <b>I </b><span class=indam>don't</span><b> work in an office.</b>[sound:rec1359443929.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present simple </span><i>for </i><span style='font-weight:600; font-style:italic;'>general</span><i> statements</i></span>","STT":141},
{"FRONT":"<span style='font-size: 28px; '>Please work in <span class=indam>p____</span>. <i>(groups of two)</i> [sound:rec1359365641.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastek6uhf1.png' /></span>","BACK":"<span style='font-size: 28px; '>Please work in <span class=indam>pairs</span>. [sound:rec1359365645.mp3]</span><br><span style=''></span><br><span style=''><i>a pair - пара</i></span>","STT":11},
{"FRONT":"<span style='font-size: 28px; '>My wife usually <span class=indam>______</span> make-up. <b>(wear)</b>[sound:rec1359367550.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebnrnns.jpg' /></span>","BACK":"<span style='font-size: 28px; '>My wife usually <span class=indam>wears</span> make-up.[sound:rec1359367556.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present simple </span><i>for </i><span style='font-weight:600; font-style:italic;'>general</span><i> statements</i><br /><span style='font-weight:600; font-style:italic;'>wear - wore - worn</span><br /><i>to wear sth. - носить что-л.</i><br /><i>to wear make-up - пользоваться косметикой</i></span>","STT":88},
{"FRONT":"<span style='font-size: 28px; '>I don't like this sofa; <b>it's very </b><span class=indam>__comfortable</span>. <i>(the opposite of 'comfortable')</i>[sound:rec1359367076.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteki3eux.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I don't like this sofa; <b>it's very </b><span class=indam>unc</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>mfortable</span>.[sound:rec1359367082.mp3]</span><br><span style=''></span><br><span style=''><i>unc</i><span style='font-style:italic; color:#ff0909;'>o</span><i>mfortable (adj.) - неудобный</i></span>","STT":71},
{"FRONT":"<span style='font-size: 28px; '>He's carrying his father on his <span class=indam>b____</span>.[sound:rec1359366209.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegu31az.png' /></span>","BACK":"<span style='font-size: 28px; '>He's carrying his father on his <span class=indam>back</span>.[sound:rec1359366214.mp3]</span><br><span style=''></span><br><span style=''><i>a back - спина</i></span>","STT":35},
{"FRONT":"<span style='font-size: 28px; '>Do you have a healthy <span class=indam>_____</span>?[sound:rec1359366311.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehbl65b.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Do you have a healthy <span class=indam>heart</span>?[sound:rec1359366315.mp3]</span><br><span style=''></span><br><span style=''><i>a heart - сердце</i></span>","STT":41},
{"FRONT":"<span style='font-size: 28px; '>Look outside. <b>It </b><span class=indam>_______</span><b> hard.</b> <b>(rain)</b>[sound:rec1359367651.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedr5apn.png' /></span>","BACK":"<span style='font-size: 28px; '>Look outside. <b>It</b><span class=indam>'s raining</span><b> hard.</b>[sound:rec1359367656.mp3]<br /></span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for actions or processes </i><span style='font-weight:600; font-style:italic;'>at this moment</span></span>","STT":92},
{"FRONT":"<span style='font-size: 28px; '>Oh dear! <b>I </b><span class=indam>______</span><b> any money at the moment. (not have)</b>[sound:rec1359367666.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2cdnn4.png' /></span>","BACK":"<span style='font-size: 28px; '><b>I </b><span class=indam>don't have</span><b> any money at the moment.</b>[sound:rec1359445925.mp3]</span><br><span style=''></span><br><span style=''><i>some verbs </i><span style='font-weight:600; font-style:italic;'>can't</span><i> be used in </i><span style='font-weight:600; font-style:italic;'>-ing</span><i> forms</i><br /><i>it's </i><span style='font-weight:600; font-style:italic;'>wrong</span><i> to say 'I'm not having any money.'</i></span>","STT":93},
{"FRONT":"<span style='font-size: 28px; '>He's a clown - <b>he's very </b><span class=indam>f_____</span><b>!</b>[sound:rec1359366735.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3qthpc.png' /></span>","BACK":"<span style='font-size: 28px; '>He's a clown - <b>he's very </b><span class=indam>funny</span><b>!</b>[sound:rec1359366739.mp3]</span><br><span style=''></span><br><span style=''><i>funny (adj.) - смешной</i></span>","STT":56},
{"FRONT":"<span style='font-size: 28px; '>My cat died. <b>I </b><span class=indam>f____</span><b> sad now.</b>[sound:rec1359366564.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2wpgvg.png' /></span>","BACK":"<span style='font-size: 28px; '>My cat died. <b>I </b><span class=indam>feel</span><b> sad now.</b>[sound:rec1359366571.mp3]</span><br><span style=''></span><br><span style=''><i>to feel - чувствовать себя</i><br></span>","STT":49},
{"FRONT":"<span style='font-size: 28px; '>Pinocchio has a long <span class=indam>____</span>.[sound:rec1359366124.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebqw9u9.png' /></span>","BACK":"<span style='font-size: 28px; '>Pinocchio has a long <span class=indam>nose</span>.[sound:rec1359366129.mp3]</span><br><span style=''></span><br><span style=''><i>a nose - нос</i></span>","STT":32},
{"FRONT":"<span style='font-size: 28px; '>My girlfriend said she loved me then<b> </b><span class=indam>k_____</span><b> me on the lips</b>.[sound:rec1359366510.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedkfocs.png' /></span>","BACK":"<span style='font-size: 28px; '>My girlfriend said she loved me then <span class=indam>kissed</span><b> me on the lips.</b>[sound:rec1359366516.mp3]</span><br><span style=''></span><br><span style=''><i>to kiss sb. - целовать кого-л.</i></span>","STT":46},
{"FRONT":"<span style='font-size: 28px; '>Look! <b>He has very hairy </b><span class=indam>_____</span><b>!</b>[sound:rec1359366224.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste892gex.png' /></span>","BACK":"<span style='font-size: 28px; '>Look! <b>He has very hairy </b><span class=indam>feet</span><b>!</b>[sound:rec1359366230.mp3]</span><br><span style=''></span><br><span style=''><i>a foot / feet - нога (ступня) / ноги (ступни)</i><br /><i>note: 'foot' means only the bottom part of the leg</i></span>","STT":36},
{"FRONT":"<span style='font-size: 28px; '>What's the weather going to be tomorrow? <b>I </b><span class=indam>h____</span><b> that it doesn't rain. </b><i>(I want)</i>[sound:rec1359370252.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezgb7wh.png' /></span>","BACK":"<span style='font-size: 28px; '>What's the weather going to be tomorrow? <b>I </b><span class=indam>hope</span><b> that it doesn't rain.</b>[sound:rec1359445278.mp3]</span><br><span style=''></span><br><span style=''><i>to hope that sth. - надеяться, что...</i></span>","STT":133},
{"FRONT":"<span style='font-size: 28px; '>These are my grandparents. They're retired - <b>they </b><span class=indam>__________</span><b>. (not work) </b>[sound:rec1359367242.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteygyub7.png' /></span>","BACK":"<span style='font-size: 28px; '>These are my grandparents. They're retired - <b>they </b><span class=indam>don't</span><b> </b><span class=indam>work</span><b>.</b>[sound:rec1359367249.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present simple </span><i>for </i><span style='font-weight:600; font-style:italic;'>general</span><i> statements</i></span>","STT":79},
{"FRONT":"<span style='font-size: 28px; '>Ow! <b>My </b><span class=indam>t____</span><b> hurts.</b>[sound:rec1359366338.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezidqyl.png' /></span>","BACK":"<span style='font-size: 28px; '>Ow! <b>My </b><span class=indam>tooth</span><b> hurts.</b>[sound:rec1359366342.mp3]</span><br><span style=''></span><br><span style=''><i>a tooth / teeth - зуб / зубы</i></span>","STT":43},
{"FRONT":"<span style='font-size: 28px; '>A composer is someone<b> </b><span class=indam>w____</span><b> writes music.</b>[sound:rec1359445496.mp3]<b><br /></b><img class='center-block img-responsive hinhdep'  src='pasterviejv.png' /></span>","BACK":"<span style='font-size: 28px; '>A composer is someone<b> </b><span class=indam>who</span><b> writes music.</b>[sound:rec1359445509.mp3]</span><br><span style=''></span><br><span style=''><i>who - кто, который (про человека)</i></span>","STT":107},
{"FRONT":"<span style='font-size: 28px; '>I have one <span class=indam>____</span> bigger than the other.[sound:rec1359366252.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehqr4pk.png' /></span>","BACK":"<span style='font-size: 28px; '>I have one <span class=indam>foot</span> bigger than the other.[sound:rec1359366259.mp3]</span><br><span style=''></span><br><span style=''><i>a foot / feet - нога (ступня) / ноги (ступни)</i><br /><i>note: 'foot' means only the bottom part of the leg</i></span>","STT":38},
{"FRONT":"<span style='font-size: 28px; '>A receptionist is someone <span class=indam>w____</span><b> answers the phone and meets visitors.</b>[sound:rec1359368072.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepngbti.jpg' /></span>","BACK":"<span style='font-size: 28px; '>A receptionist is someone <span class=indam>who</span><b> answers the phone and meets visitors.</b>[sound:rec1359368078.mp3]</span><br><span style=''></span><br><span style=''><i>who - кто, который (про человека)</i></span>","STT":105},
{"FRONT":"<span style='font-size: 28px; '>A cap is something <span class=indam>w____</span><b> you wear on your head.</b>[sound:rec1359368020.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste99puem.png' /></span>","BACK":"<span style='font-size: 28px; '>A cap is something <span class=indam>which</span><b> you wear on your head.</b>[sound:rec1359368025.mp3]</span><br><span style=''></span><br><span style=''><i>which - который (про предмет)</i></span>","STT":103},
{"FRONT":"<span style='font-size: 28px; '>A cap is something which you <span class=indam>w____</span><b> on your head.</b>[sound:rec1359368052.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste99puem.png' /></span>","BACK":"<span style='font-size: 28px; '>A cap is something which you <span class=indam>wear</span><b> on your head.</b>[sound:rec1359368058.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>wear - wore - worn</span><br /><i>to wear sth. - носить, одевать что-л.</i></span>","STT":104},
{"FRONT":"<span style='font-size: 28px; '>This is my family. <b>I'm on the </b><span class=indam>_____</span><b>.</b>[sound:rec1359444042.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastex3rjbt.png' /></span>","BACK":"<span style='font-size: 28px; '>This is my family. <b>I'm on the </b><span class=indam>right</span><b>.</b>[sound:rec1359444048.mp3]</span><br><span style=''></span><br><span style=''><i>on the right - справа</i></span>","STT":147},
{"FRONT":"<span style='font-size: 28px; '>Tell me about yourself. <b>Where </b><span class=indam>___</span><b> you from?</b>[sound:rec1359365408.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7t005w.png' /></span>","BACK":"<span style='font-size: 28px; '><b>Where </b><span class=indam>are</span><b> you from?</b>[sound:rec1359365413.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":3},
{"FRONT":"<span style='font-size: 28px; '>That child has beautiful green <span class=indam>____</span>.[sound:rec1359365886.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejxzvby.png' /></span>","BACK":"<span style='font-size: 28px; '>That child has beautiful green <span class=indam>eyes</span>.[sound:rec1359365892.mp3]</span><br><span style=''></span><br><span style=''><i>an eye - глаз</i></span>","STT":23},
{"FRONT":"<span style='font-size: 28px; '>I'm smiling because <b>I </b><span class=indam>f____</span><b> happy today!</b>[sound:rec1359366548.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9w1lbx.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm smiling because<b> I </b><span class=indam>feel</span><b> happy today!</b>[sound:rec1359366552.mp3]</span><br><span style=''></span><br><span style=''><i>to feel sth. - чувствовать себя</i></span>","STT":48},
{"FRONT":"<span style='font-size: 28px; '>Ow!<b> My </b><span class=indam>_____</span><b> hurts.</b>[sound:rec1359366268.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste74iwfh.png' /></span>","BACK":"<span style='font-size: 28px; '>Ow! <b>My </b><span class=indam>knee</span><b> hurts.</b>[sound:rec1359366272.mp3]</span><br><span style=''></span><br><span style=''><i>a knee - колено</i></span>","STT":39},
{"FRONT":"<span style='font-size: 28px; '>A zoo is a place <span class=indam>____</span><b> animals live.</b>[sound:rec1359368103.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqyszud.png' /></span>","BACK":"<span style='font-size: 28px; '>A zoo is a place <span class=indam>where</span><b> animals live.</b>[sound:rec1359368098.mp3]</span><br><span style=''></span><br><span style=''><i>where - где, который (про место)</i><br></span>","STT":106},
{"FRONT":"<span style='font-size: 28px; '>Well done. <b>That's the </b><span class=indam>r_____</span><b> answer. </b><i>(correct, true)</i>[sound:rec1359366675.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecwiy3d.png' /></span>","BACK":"<span style='font-size: 28px; '><b>That's the </b><span class=indam>right</span><b> answer.</b>[sound:rec1359366679.mp3]</span><br><span style=''></span><br><span style=''><i>right (adj.) - правильный</i><br></span>","STT":52},
{"FRONT":"<span style='font-size: 28px; '>Ow! <b>My </b><span class=indam>f____</span><b> hurts.</b>[sound:rec1359365945.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteg7f5r8.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Ow!<b> My </b><span class=indam>finger</span><b> hurts.</b>[sound:rec1359365951.mp3]</span><br><span style=''></span><br><span style=''><i>a finger - палец</i></span>","STT":26},
{"FRONT":"<span style='font-size: 28px; '>Bill lives in Chicago -<b> he </b><span class=indam>________</span><b> in New York. (not live)</b>[sound:rec1359367345.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejrslqy.png' /></span>","BACK":"<span style='font-size: 28px; '>Bill lives in Chicago -<b> he </b><span class=indam>doesn't</span><b> </b><span class=indam>live</span><b> in New York.</b>[sound:rec1359367350.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present simple </span><i>for </i><span style='font-weight:600; font-style:italic;'>general</span><i> statements</i></span>","STT":83},
{"FRONT":"<span style='font-size: 28px; '>Hey!<b> You </b><span class=indam>_______</span><b> on my foot!</b> <b>(stand)</b>[sound:rec1359367477.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8rtigx.png' /></span>","BACK":"<span style='font-size: 28px; '>Hey! <b>You</b><span class=indam>'re standing</span><b> on my foot!</b>[sound:rec1359367482.mp3]<br /></span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for actions or processes </i><span style='font-weight:600; font-style:italic;'>at this moment</span></span>","STT":85},
{"FRONT":"<span style='font-size: 28px; '>I felt sad and <b>she </b><span class=indam>t_____</span><b> my arm.</b>[sound:rec1359366533.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste627kgv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I felt sad and <b>she </b><span class=indam>touched</span><b> my arm.</b>[sound:rec1359366538.mp3]</span><br><span style=''></span><br><span style=''><i>to touch sth. / sb. - трогать что-л. / кого-л.</i></span>","STT":47},
{"FRONT":"<span style='font-size: 28px; '>Scissors are things <span class=indam>w____</span><b> you use to cut paper with.</b>[sound:rec1359368284.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexxjh2c.png' /></span>","BACK":"<span style='font-size: 28px; '>Scissors are things <span class=indam>which</span> <b>you use to cut paper with.</b>[sound:rec1359368289.mp3]</span><br><span style=''></span><br><span style=''><i>which - который (про предмет)</i></span>","STT":111},
{"FRONT":"<span style='font-size: 28px; '>Lipstick is something <span class=indam>w____</span><b> women put on their lips</b>.[sound:rec1359368386.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegnjcwm.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Lipstick is something <span class=indam>which</span><b> women put on their lips.</b>[sound:rec1359368391.mp3]</span><br><span style=''></span><br><span style=''><i>which - который (про предмет)</i></span>","STT":112},
{"FRONT":"<span style='font-size: 28px; '>My sister spends hours on the phone - <b>she's very </b><span class=indam>t_______</span><b>. </b><i>(she talks a lot)</i>[sound:rec1359366772.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecpw2lh.png' /></span>","BACK":"<span style='font-size: 28px; '>My sister spends hours on the phone - <b>she's very </b><span class=indam>t</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>lkative</span><b>.</b>[sound:rec1359366779.mp3]</span><br><span style=''></span><br><span style=''><i>t</i><span style='font-style:italic; color:#ff5500;'>a</span><i>lkative (adj.) - разговорчивый</i></span>","STT":58},
{"FRONT":"<span style='font-size: 28px; '>A library is a place <span class=indam>w____</span><b> you borrow books.</b>[sound:rec1359367789.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeyhakj.png' /></span>","BACK":"<span style='font-size: 28px; '>A library is a place <span class=indam>where</span><b> you borrow books.</b>[sound:rec1359367794.mp3]</span><br><span style=''></span><br><span style=''><i>where - где, который (про место)</i></span>","STT":98},
{"FRONT":"<span style='font-size: 28px; '>This is a new word for me. <b>What does &quot;imagine&quot; </b><span class=indam>m____</span><b>?</b>[sound:rec1359365734.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastei4qnop.png' /></span>","BACK":"<span style='font-size: 28px; '>This is a new word for me. <b>What does &quot;imagine&quot; </b><span class=indam>mean</span><b>?</b>[sound:rec1359365739.mp3]</span><br><span style=''></span><br><span style=''><i>to mean - значить</i></span>","STT":15},
{"FRONT":"<span style='font-size: 28px; '>I live in St. Peterburg now, but in two weeks <b>I'm </b><span class=indam>m_____</span><b> to Moscow.</b> <i>(going to live)</i>[sound:rec1359370167.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesj39ir.png' /></span>","BACK":"<span style='font-size: 28px; '>I live in St. Peterburg now, but in two weeks <b>I'm </b><span class=indam>moving</span><b> to Moscow.</b>[sound:rec1359370141.mp3]</span><br><span style=''></span><br><span style=''><i>to move to (a city, country etc.) - переехать куда-л.</i><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for the </i><span style='font-weight:600; font-style:italic;'>near future</span></span>","STT":132},
{"FRONT":"<span style='font-size: 28px; '>My wife usually wears <span class=indam>m_____</span>. <i>(mascara, lipstick, etc.)</i>[sound:rec1359367563.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebnrnns.jpg' /></span>","BACK":"<span style='font-size: 28px; '>My wife usually wears <span class=indam>make-up</span>.[sound:rec1359367586.mp3]</span><br><span style=''></span><br><span style=''><i>make-up - косметика, макияж</i></span>","STT":89},
{"FRONT":"<span style='font-size: 28px; '>Look! <b>He's got big </b><span class=indam>_____</span><b>.</b>[sound:rec1359365851.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb57iwx.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Look! <b>He's got big </b><span class=indam>ears</span><b>.</b>[sound:rec1359365868.mp3]<br /></span><br><span style=''></span><br><span style=''><i>an ear - ухо</i></span>","STT":22},
{"FRONT":"<span style='font-size: 28px; '>Show me your <span class=indam>_____</span>![sound:rec1359366379.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehbzbjd.png' /></span>","BACK":"<span style='font-size: 28px; '>Show me your <span class=indam>tongue</span>![sound:rec1359366395.mp3]</span><br><span style=''></span><br><span style=''><i>a tongue - язык</i></span>","STT":45},
{"FRONT":"<span style='font-size: 28px; '>Please <span class=indam>a____</span> Emily the questions.[sound:rec1359365508.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterswqfk.png' /></span>","BACK":"<span style='font-size: 28px; '>Please <span class=indam>ask</span> Emily the questions.[sound:rec1359365514.mp3]</span><br><span style=''></span><br><span style=''><i>to ask (a question) - задавать вопрос</i></span>","STT":7},
{"FRONT":"<span style='font-size: 28px; '>Wow! <b>What strange </b><span class=indam>_____</span><b>!</b>[sound:rec1359366361.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiyedcf.png' /></span>","BACK":"<span style='font-size: 28px; '><b>What strange </b><span class=indam>toes</span><b>!</b>[sound:rec1359366372.mp3]</span><br><span style=''></span><br><span style=''><i>a toe - палец ноги</i></span>","STT":44},
{"FRONT":"<span style='font-size: 28px; '>Excuse me, <b>what does 'fabulous' </b><span class=indam>m____</span><b>?</b>[sound:rec1359368847.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5qrwki.png' /></span>","BACK":"<span style='font-size: 28px; '>Excuse me, <b>what does 'fabulous' </b><span class=indam>mean</span><b>?</b>[sound:rec1359368852.mp3]</span><br><span style=''></span><br><span style=''><i>to mean sth. - значить</i></span>","STT":126},
{"FRONT":"<span style='font-size: 28px; '>Do you want tea <span class=indam>[...]</span> sugar?[sound:rec1359443971.mp3][sound:rec1359443986.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec2aydj.png' /></span>","BACK":"<span style='font-size: 28px; '>Do you want tea <span class=indam>with</span> sugar?</span><br><span style=''></span><br><span style=''><i>with - c</i></span>","STT":144},
{"FRONT":"<span style='font-size: 28px; '>Please <span class=indam>a______</span> the questions that the teacher asks.[sound:rec1359365551.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteel_nfk.png' /></span>","BACK":"<span style='font-size: 28px; '>Please <span class=indam>answer</span> the questions that the teacher asks.[sound:rec1359365564.mp3]</span><br><span style=''></span><br><span style=''><i>to answer (a question) - отвечать (на вопрос)</i></span>","STT":8},
{"FRONT":"<span style='font-size: 28px; '>A builder is a person<b> </b><span class=indam>w____</span><b> builds houses.</b>[sound:rec1359367773.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterixlqf.png' /></span>","BACK":"<span style='font-size: 28px; '>A builder is a person<b> </b><span class=indam>who</span><b> builds houses.</b>[sound:rec1359367781.mp3]</span><br><span style=''></span><br><span style=''><i>who - кто, который (про человека)</i><br></span>","STT":97},
{"FRONT":"<span style='font-size: 28px; '>Look. <b>Someone has drawn a </b><span class=indam>f____</span><b> on the sand.</b>[sound:rec1359365930.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastef0lhai.png' /></span>","BACK":"<span style='font-size: 28px; '>Look. <b>Someone has drawn a </b><span class=indam>face</span><b> on the sand.</b>[sound:rec1359365937.mp3]</span><br><span style=''></span><br><span style=''><i>a face - лицо</i></span>","STT":25},
{"FRONT":"<span style='font-size: 28px; '>He's got very white <span class=indam>_____</span>.[sound:rec1359366326.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevndnpq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's got very white <span class=indam>teeth</span>.[sound:rec1359366330.mp3]</span><br><span style=''></span><br><span style=''><i>a tooth / teeth - зуб / зубы</i></span>","STT":42},
{"FRONT":"<span style='font-size: 28px; '>Look at Lisa! <b>She </b><span class=indam>_____</span><b> a mess again.</b> <b>(make)</b>[sound:rec1359367709.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetahpto.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Look at Lisa! <b>She</b><span class=indam>'s making</span><b> a mess again.</b>[sound:rec1359367714.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for actions or processes </i><span style='font-weight:600; font-style:italic;'>at this moment</span></span>","STT":95},
{"FRONT":"<span style='font-size: 28px; '>I don't understand. <b>Please can you </b><span class=indam>r_____</span><b> that? </b><i>(say it again)</i>[sound:rec1359368937.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehvyg4s.png' /></span>","BACK":"<span style='font-size: 28px; '>I don't understand. <b>Please can you </b><span class=indam>repeat</span><b> that?</b>[sound:rec1359368942.mp3]</span><br><span style=''></span><br><span style=''><i>to repeat sth. - повторять что-л.</i></span>","STT":129},
{"FRONT":"<span style='font-size: 28px; '>Bye, <span class=indam>h___</span><b> a good weekend.</b>[sound:rec1359365764.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste922g2n.png' /></span>","BACK":"<span style='font-size: 28px; '>Bye,<b> </b><span class=indam>have</span><b> a good weekend.</b>[sound:rec1359365770.mp3]</span><br><span style=''></span><br><span style=''><i>Have a good weekend. - Хороших выходных.</i></span>","STT":17},
{"FRONT":"<span style='font-size: 28px; '>Matches are things which you use <b>to </b><span class=indam>l_____</span><b> a fire.</b>[sound:rec1359368004.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejx7kta.png' /></span>","BACK":"<span style='font-size: 28px; '>Matches are things which you use <b>to </b><span class=indam>light</span><b> a fire.</b>[sound:rec1359368010.mp3]</span><br><span style=''></span><br><span style=''><i>to light (a fire) - зажигать</i></span>","STT":102},
{"FRONT":"<span style='font-size: 28px; '>Nice to see you, Chuck! <b>How was your </b><span class=indam>f_____</span><b>?</b> <i>(journey by aeroplane)</i>[sound:rec1359368772.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteea1yeo.png' /></span>","BACK":"<span style='font-size: 28px; '>Nice to see you, Chuck! <b>How was your </b><span class=indam>flight</span><b>?</b>[sound:rec1359368776.mp3]</span><br><span style=''></span><br><span style=''><i>a flight - полет</i><br /><i>to fly - летать</i></span>","STT":122},
{"FRONT":"<span style='font-size: 28px; '>That's the shop <span class=indam>____</span><b> my sister bought her dress.</b>[sound:rec1359444219.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh5t8ie.png' /></span>","BACK":"<span style='font-size: 28px; '>That's the shop <span class=indam>where</span> <b>my sister bought her dress.</b>[sound:rec1359444224.mp3]</span><br><span style=''></span><br><span style=''><i>where - где (о месте)</i></span>","STT":150},
{"FRONT":"<span style='font-size: 28px; '>He drinks tea - <b>he </b><span class=indam>_____</span><b> drink coffee.</b>[sound:rec1359443883.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteavg9ly.png' /></span>","BACK":"<span style='font-size: 28px; '>He drinks tea - <b>he </b><span class=indam>doesn't</span><b> drink coffee.</b>[sound:rec1359443888.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present simple </span><i>for </i><span style='font-weight:600; font-style:italic;'>general</span><i> statements</i></span>","STT":139},
{"FRONT":"<span style='font-size: 28px; '>In Britain, lots of people drink tea <span class=indam>w____</span> sugar. <i>(the opposite of 'with')</i>[sound:rec1359443953.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2egxhx.png' /></span>","BACK":"<span style='font-size: 28px; '>In Britain, lots of people drink tea <span class=indam>without</span> sugar.[sound:rec1359443962.mp3]</span><br><span style=''></span><br><span style=''><i>without - без</i><br></span>","STT":143},
{"FRONT":"<span style='font-size: 28px; '><i>At immigration:</i><br />So, <b>what's the </b><span class=indam>p_____</span><b> of your visit to Britain?</b> <i>(reason)</i>[sound:rec1359368602.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecaykj9.png' /></span>","BACK":"<span style='font-size: 28px; '>So, <b>what's the </b><span class=indam>purpose</span><b> of your visit to Britain?</b>[sound:rec1359368618.mp3]</span><br><span style=''></span><br><span style=''><i>purpose (n.) - причина, цель</i></span>","STT":116},
{"FRONT":"<span style='font-size: 28px; '>He hates waiting; <b>he's </b><span class=indam>__patient</span><b>.</b>[sound:rec1359367110.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejnppis.png' /></span>","BACK":"<span style='font-size: 28px; '>He hates waiting;<b> he's </b><span class=indam>impatient</span><b>.</b>[sound:rec1359367123.mp3]</span><br><span style=''></span><br><span style=''><i>impatient (adj.) - нетерпиливый</i></span>","STT":73},
{"FRONT":"<span style='font-size: 28px; '>A bank is a place <span class=indam>w____</span><b> you keep your money.</b>[sound:rec1359367915.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9iolbk.jpg' /></span>","BACK":"<span style='font-size: 28px; '>A bank is a place <span class=indam>where</span><b> you keep your money.</b>[sound:rec1359367920.mp3]<b><br /></b></span><br><span style=''></span><br><span style=''><i>where - где, который (про место)</i></span>","STT":100},
{"FRONT":"<span style='font-size: 28px; '>Do you have long or short <span class=indam>_____</span>?[sound:rec1359366016.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepz5ooq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Do you have long or short <span class=indam>hair</span>?[sound:rec1359366020.mp3]</span><br><span style=''></span><br><span style=''><i>hair (n.) - волосы</i><br /><i>note: 'hair' is an uncountable noun</i></span>","STT":27},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>Cr____</span> people like to make things and use their imagination. [sound:rec1330339527.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteangror.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Cre</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>tive</span> people like to make things and use their imagination.[sound:rec1330339534.mp3]</span><br><span style=''></span><br><span style=''><i>creative (adj.) - творческий</i></span>","STT":0},
{"FRONT":"<span style='font-size: 28px; '>He doesn't want to talk because <b>he's </b><span class=indam>s_____</span><b>.</b> <i>(quiet; nervous of new people)</i>[sound:rec1359366759.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaubof1.png' /></span>","BACK":"<span style='font-size: 28px; '>He doesn't want to talk because <b>he's </b><span class=indam>shy</span><b>.</b>[sound:rec1359366763.mp3]</span><br><span style=''></span><br><span style=''><i>shy (adj.) - застенчивый, робкий, стеснительный</i></span>","STT":57},
{"FRONT":"<span style='font-size: 28px; '>How do you <span class=indam>p______</span> this word? <i>(say, make the correct sound)</i>[sound:rec1359365713.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterwkrhn.jpg' /></span>","BACK":"<span style='font-size: 28px; '>How do you <span class=indam>pron</span><span style='font-weight:600; color:#ff5500;'>ou</span><span class=indam>nce</span> this word?[sound:rec1359365721.mp3]</span><br><span style=''></span><br><span style=''><i>to pron</i><span style='font-style:italic; color:#ff5500;'>ou</span><i>nce sth. - произносить, выговаривать&nbsp;&nbsp;что-л.</i></span>","STT":14},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359368862.mp3]<b>It </b><span class=indam>m____</span><b> 'very good' or 'wonderful'.</b><br /><img class='center-block img-responsive hinhdep'  src='pastec4hdjc.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It </b><span class=indam>means</span><b> 'very good' or 'wonderful'.</b>[sound:rec1359368871.mp3]</span><br><span style=''></span><br><span style=''><i>to mean sth. - значить</i></span>","STT":127},
{"FRONT":"<span style='font-size: 28px; '>For this task, <span class=indam>c____</span> <span class=indam>out</span><b> the wrong word.</b>[sound:rec1359365802.mp3]<br /><br /><img class='center-block img-responsive hinhdep'  src='pastee0l1y2.jpg' /></span>","BACK":"<span style='font-size: 28px; '>For this task, <span class=indam>cross</span> <span class=indam>out</span><b> the wrong word.</b>[sound:rec1359365806.mp3]</span><br><span style=''></span><br><span style=''><i>to cross sth. out - вычеркнуть что-л.</i></span>","STT":19},
{"FRONT":"<span style='font-size: 28px; '>Next week we're going to <span class=indam>m_____</span> house. <i>(we're going to live in a different place)</i>[sound:rec1359370111.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelrotiz.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>Next week we're going to <span class=indam>move</span> house.[sound:rec1359370117.mp3]<br /></span><br><span style=''></span><br><span style=''><i>to move house - переехать (на другую квартиру)</i></span>","STT":131},
{"FRONT":"<span style='font-size: 28px; '>Look! <b>It's Einstein's </b><span class=indam>_____</span><b>!</b>[sound:rec1359366290.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetw9uq0.png' /></span>","BACK":"<span style='font-size: 28px; '>Look! <b>It's Einstein's </b><span class=indam>brain</span><b>!</b>[sound:rec1359366300.mp3]</span><br><span style=''></span><br><span style=''><i>a brain - мозг</i></span>","STT":40},
{"FRONT":"<span style='font-size: 28px; '>How annoying! <b>My computer </b><span class=indam>_________</span><b>! (not work)</b>[sound:rec1359367454.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesahrfb.png' /></span>","BACK":"<span style='font-size: 28px; '>How annoying! <b>My computer </b><span class=indam>isn't</span><b> </b><span class=indam>working</span><b>!</b>[sound:rec1359367465.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for actions or processes </i><span style='font-weight:600; font-style:italic;'>at this moment</span><br></span>","STT":84},
{"FRONT":"<span style='font-size: 28px; '>Let's go home.<b> This film is really </b><span class=indam>b____</span><b>.</b> <i>(the opposite of 'interesting')</i>[sound:rec1359366933.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenrxxix.png' /></span>","BACK":"<span style='font-size: 28px; '>Let's go home.<b> This film is really </b><span class=indam>boring</span><b>.</b>[sound:rec1359366938.mp3]</span><br><span style=''></span><br><span style=''><i>boring (adj.) - скучный</i><br></span>","STT":64},
{"FRONT":"<span style='font-size: 28px; '>Wait a minute! <b>That's </b><span class=indam>______</span><b>!</b> <i>(not possible)</i>[sound:rec1359446748.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyhbjjr.png' /></span>","BACK":"<span style='font-size: 28px; '>Wait a minute! <b>That's</b> <span class=indam>imp</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>ssible</span>![sound:rec1359446756.mp3]</span><br><span style=''></span><br><span style=''><i>impossible (adj.) - невозможный</i><br></span>","STT":1},
{"FRONT":"<span style='font-size: 28px; '>Look! <b>Her </b><span class=indam>____</span><b> are different colours.</b>[sound:rec1359366074.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejwf79s.png' /></span>","BACK":"<span style='font-size: 28px; '>Look!<b> Her </b><span class=indam>lips</span><b> are different colours.</b>[sound:rec1359366086.mp3]</span><br><span style=''></span><br><span style=''><i>a lip - губа</i></span>","STT":29},
{"FRONT":"<span style='font-size: 28px; '>Wait a minute. <b>I </b><span class=indam>n____</span><b> to buy some cigarettes. </b><i>(strongly want to)</i>[sound:rec1359367683.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastentkmyy.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Wait a minute.<b> I </b><span class=indam>need</span><b> to buy some cigarettes.</b>[sound:rec1359367688.mp3]</span><br><span style=''></span><br><span style=''><i>some verbs </i><span style='font-weight:600; font-style:italic;'>can't</span><i> be used in </i><span style='font-weight:600; font-style:italic;'>-ing</span><i> forms</i><br /><i>it's </i><span style='font-weight:600; font-style:italic;'>wrong</span><i> to say 'I'm not having any money.'</i></span>","STT":94},
{"FRONT":"<span style='font-size: 28px; '><i>At immigration:</i><br /><span class=indam>W____</span> are you arriving from?[sound:rec1359368681.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecaykj9.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Where</span> are you arriving from?[sound:rec1359368690.mp3]</span><br><span style=''></span><br><span style=''><i>where - где, откуда, куда</i></span>","STT":118},
{"FRONT":"<span style='font-size: 28px; '>Tell me about yourself. <b>Where </b><span class=indam>_____</span><b> you born?</b>[sound:rec1359365483.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7t005w.png' /></span>","BACK":"<span style='font-size: 28px; '><b>Where </b><span class=indam>were</span><b> you born?</b>[sound:rec1359365498.mp3]</span><br><span style=''></span><br><span style=''><i>to be born - родиться</i></span>","STT":6},
{"FRONT":"<span style='font-size: 28px; '>He has a big fat <span class=indam>s_____</span>![sound:rec1359366188.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteijgtp3.png' /></span>","BACK":"<span style='font-size: 28px; '>He has a big fat <span class=indam>stomach</span>![sound:rec1359366192.mp3]</span><br><span style=''></span><br><span style=''><i>a stomach - живот, желудок</i><br></span>","STT":34},
{"FRONT":"<span style='font-size: 28px; '>She loves reading and doesn't talk much - <b>she's a </b><span class=indam>q____</span><b> person.</b> <i>(the opposite of 'loud')</i>[sound:rec1359366852.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1vdwea.png' /></span>","BACK":"<span style='font-size: 28px; '>She loves reading and doesn't talk much - <b>she's a </b><span class=indam>quiet</span><b> person.</b>[sound:rec1359366859.mp3]</span><br><span style=''></span><br><span style=''><i>quiet (adj.) - тихий, робкий</i></span>","STT":61},
{"FRONT":"<span style='font-size: 28px; '>Ollie, it's winter - <b>why </b><span class=indam>________</span><b> sunglasses?</b> <b>(you / wear)</b>[sound:rec1359367633.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoxm5tc.png' /></span>","BACK":"<span style='font-size: 28px; '>Ollie, it's winter - <b>why </b><span class=indam>are you wearing</span><b> sunglasses?</b>[sound:rec1359445122.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for actions or processes </i><span style='font-weight:600; font-style:italic;'>at this moment</span></span>","STT":91},
{"FRONT":"<span style='font-size: 28px; '>This is us in Paris. <b>We're standing </b><span class=indam>__ f____ __</span><b> the Eiffel Tower.</b>[sound:rec1359367154.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteldazid.png' /></span>","BACK":"<span style='font-size: 28px; '>This is us in Paris. <b>We're standing </b><span class=indam>in front of</span><b> the Eiffel Tower.</b>[sound:rec1359367160.mp3]</span><br><span style=''></span><br><span style=''><i>in front of - перед</i><br></span>","STT":75},
{"FRONT":"<span style='font-size: 28px; '>Yakutia is a very cold <span class=indam>p_____</span>. <i>(region, area)</i>[sound:rec1359443860.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste81ordu.png' /></span>","BACK":"<span style='font-size: 28px; '>Yakutia is a very cold <span class=indam>place</span>.[sound:rec1359443865.mp3]</span><br><span style=''></span><br><span style=''><i>a place - место</i></span>","STT":137},
{"FRONT":"<span style='font-size: 28px; '>She plays golf even though she only has one <span class=indam>____</span>.[sound:rec1359366239.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekmnvp9.png' /></span>","BACK":"<span style='font-size: 28px; '>She plays golf even though she only has one <span class=indam>leg</span>.[sound:rec1359366245.mp3]</span><br><span style=''></span><br><span style=''><i>a leg - нога</i></span>","STT":37},
{"FRONT":"<span style='font-size: 28px; '>Excuse me, <b>which </b><span class=indam>p____</span><b> is it?</b>[sound:rec1359365746.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehfyt5b.png' /></span>","BACK":"<span style='font-size: 28px; '>Excuse me, <b>which </b><span class=indam>page</span><b> is it?</b>[sound:rec1359365750.mp3]</span><br><span style=''></span><br><span style=''><i>a page - страница</i></span>","STT":16},
{"FRONT":"<span style='font-size: 28px; '>My dog isn't dangerous. <b>He </b><span class=indam>_______</span><b>.</b> <b>(not bite)</b>[sound:rec1359367597.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteua27an.jpg' /><br /></span>","BACK":"<span style='font-size: 28px; '>My dog isn't dangerous. <b>He </b><span class=indam>doesn't bite</span><b>.</b>[sound:rec1359367613.mp3]<br /></span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present simple </span><i>for </i><span style='font-weight:600; font-style:italic;'>general</span><i> statements</i></span>","STT":90},
{"FRONT":"<span style='font-size: 28px; '>Tell me <span class=indam>[...]</span> yourself. Where do you come from?[sound:rec1359444022.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7t005w.png' /></span>","BACK":"<span style='font-size: 28px; '>Tell me <span class=indam>about</span> yourself. [sound:rec1359444030.mp3]</span><br><span style=''></span><br><span style=''><i>to tell sb. about sth. - рассказывать кому-л. о чем-л.</i></span>","STT":146},
{"FRONT":"<span style='font-size: 28px; '>The opposite of happy is <span class=indam>__happy</span>.[sound:rec1359367065.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9ekumo.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The opposite of happy is <span class=indam>unhappy</span>.[sound:rec1359367069.mp3]</span><br><span style=''></span><br><span style=''><i>unhappy - несчастливый, несчастный</i></span>","STT":70},
{"FRONT":"<span style='font-size: 28px; '>For this task, <span class=indam>t___</span><b> the right answer.</b>[sound:rec1359365819.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejlcovc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>For this task,<b> </b><span class=indam>tick</span><b> the right answer.</b>[sound:rec1359365830.mp3]</span><br><span style=''></span><br><span style=''><i>to tick sth. - ставить галочку</i><br /><i>a tick - галочка</i></span>","STT":20},
{"FRONT":"<span style='font-size: 28px; '>Dubai is a very <span class=indam>m____</span> city. <i>(new, original, hi-technology)</i>[sound:rec1359367006.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7lzzyn.png' /></span>","BACK":"<span style='font-size: 28px; '>Dubai is a very <span class=indam>modern</span> city.[sound:rec1359367012.mp3]</span><br><span style=''></span><br><span style=''><i>modern (adj.) - современный</i></span>","STT":68},
{"FRONT":"<span style='font-size: 28px; '>He doesn't work much - <b>he's a </b><span class=indam>l____</span><b> person. </b><i>(the opposite of 'hard-working')</i>[sound:rec1359366724.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7l8xu5.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He doesn't work much - <b>he's a </b><span class=indam>lazy</span><b> person.</b>[sound:rec1359366729.mp3]</span><br><span style=''></span><br><span style=''><i>lazy (adj.) - ленивый</i></span>","STT":55},
{"FRONT":"<span style='font-size: 28px; '>He's a manager; <b>he </b><span class=indam>____</span><b> a doctor.</b>[sound:rec1359443937.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepwxn9e.png' /></span>","BACK":"<span style='font-size: 28px; '>He's a manager;<b> he </b><span class=indam>isn't</span><b> a doctor.</b>[sound:rec1359443942.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present simple </span><i>for </i><span style='font-weight:600; font-style:italic;'>general</span><i> statements</i></span>","STT":142},
{"FRONT":"<span style='font-size: 28px; '>Please can you repeat that?<b> I don't </b><span class=indam>u______</span><b>. </b>[sound:rec1359368926.mp3]<b><br /></b><img class='center-block img-responsive hinhdep'  src='pastehvyg4s.png' /></span>","BACK":"<span style='font-size: 28px; '>Please can you repeat that?<b> I don't </b><span class=indam>understand</span><b>. </b>[sound:rec1359368930.mp3]</span><br><span style=''></span><br><span style=''><i>to understand sth. - понимать</i></span>","STT":128},
{"FRONT":"<span style='font-size: 28px; '>Try again.<b> That's the </b><span class=indam>w____</span><b> answer. </b><i>(incorrect, false)</i>[sound:rec1359366701.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8ld9ey.png' /></span>","BACK":"<span style='font-size: 28px; '><b>That's the </b><span class=indam>wrong</span><b> answer. </b>[sound:rec1359366705.mp3]</span><br><span style=''></span><br><span style=''><i>wrong (adj.) - неправильный</i></span>","STT":53},
{"FRONT":"<span style='font-size: 28px; '>For this task, <span class=indam>u_____</span><b> the word that's different.</b>[sound:rec1359365838.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexmra_r.jpg' /></span>","BACK":"<span style='font-size: 28px; '>For this task, <span class=indam>underline</span><b> the word that's different.</b>[sound:rec1359365875.mp3]</span><br><span style=''></span><br><span style=''><i>to underline sth. - подчеркнуть что-л.</i></span>","STT":21},
{"FRONT":"<span style='font-size: 28px; '>What are you doing? <b>Don't </b><span class=indam>s_____</span><b> Russian!</b>[sound:rec1359365628.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastert5hni.png' /></span>","BACK":"<span style='font-size: 28px; '><b>Don't </b><span class=indam>speak</span><b> Russian!</b>[sound:rec1359365634.mp3]</span><br><span style=''></span><br><span style=''><i>to speak - говорить </i></span>","STT":10},
{"FRONT":"<span style='font-size: 28px; '>I'm going to Aldershot tomorrow,<b> here's my </b><span class=indam>t____</span>.[sound:rec1359368558.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteedqmly.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm going to Aldershot tomorrow, <b>here's my</b> <span class=indam>ticket</span>.[sound:rec1359368563.mp3]</span><br><span style=''></span><br><span style=''><i>a (train) ticket - билет</i></span>","STT":114},
{"FRONT":"<span style='font-size: 28px; '>Look at the teacher. <b>Please don't </b><span class=indam>w_____</span><b>.</b>[sound:rec1359365574.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejovxg5.png' /></span>","BACK":"<span style='font-size: 28px; '><b>Please don't </b><span class=indam>write</span><b>.</b>[sound:rec1359365579.mp3]</span><br><span style=''></span><br><span style=''><i>to write - писать</i></span>","STT":9},
{"FRONT":"<span style='font-size: 28px; '>A hairdresser is someone <span class=indam>w____</span><b> cuts your hair.</b>[sound:rec1359367805.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegmmkpm.png' /></span>","BACK":"<span style='font-size: 28px; '>A hairdresser is someone <span class=indam>who</span><b> cuts your hair.</b>[sound:rec1359367810.mp3]<br /></span><br><span style=''></span><br><span style=''><i>who - кто, который (про человека)</i></span>","STT":99},
{"FRONT":"<span style='font-size: 28px; '>For this task, <span class=indam>c_____</span><b> the right answer.</b>[sound:rec1359365780.mp3]<br /><br /><img class='center-block img-responsive hinhdep'  src='pastedi5kfn.jpg' /></span>","BACK":"<span style='font-size: 28px; '>For this task,<b> </b><span class=indam>choose</span><b> the right answer.</b>[sound:rec1359365788.mp3]<br /></span><br><span style=''></span><br><span style=''><i>to choose sth. - выбирать что-л.</i></span>","STT":18},
{"FRONT":"<span style='font-size: 28px; '>A journalist is a person <span class=indam>w____</span><b> writes articles for a newspaper or magazine.</b>[sound:rec1359368179.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteprvod6.png' /></span>","BACK":"<span style='font-size: 28px; '>A journalist is a person <span class=indam>who</span><b> writes articles for a newspaper or magazine.</b>[sound:rec1359368186.mp3]</span><br><span style=''></span><br><span style=''><i>who - кто, который (про человека)</i></span>","STT":109},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359367722.mp3] <b>I </b><span class=indam>______</span><b> my husband. (meet)</b><br /><img class='center-block img-responsive hinhdep'  src='pastevl4iqs.jpg' /></span>","BACK":"<span style='font-size: 28px; '><b>I</b><span class=indam>'m meeting</span><b> my husband.</b>[sound:rec1359367735.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for the </i><span style='font-weight:600; font-style:italic;'>near future</span></span>","STT":96},
{"FRONT":"<span style='font-size: 28px; '>What <span class=indam>_______</span> at the moment? <b>(you / study) </b>[sound:rec1359367511.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec1oxz_.png' /></span>","BACK":"<span style='font-size: 28px; '>What <span class=indam>are you studying</span> at the moment?[sound:rec1359367517.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for actions or processes </i><span style='font-weight:600; font-style:italic;'>at this moment</span></span>","STT":87},
{"FRONT":"<span style='font-size: 28px; '>In my work I often need to wait for a long time, but it's okay because <b>I'm a </b><span class=indam>p_____</span><b> person.</b> <i>(I can wait calmly, I don't hurry)</i>[sound:rec1359367137.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1mrzc5.png' /></span>","BACK":"<span style='font-size: 28px; '>In my work I often need to wait for a long time, but it's okay because <b>I'm a </b><span class=indam>patient</span><b> person.</b>[sound:rec1359367147.mp3]</span><br><span style=''></span><br><span style=''><i>patient (adj.) - терпиливый</i></span>","STT":74},
{"FRONT":"<span style='font-size: 28px; '>You had a long flight. <b>You </b><span class=indam>m____</span><b> be tired.</b>[sound:rec1359368790.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetouain.jpg' /></span>","BACK":"<span style='font-size: 28px; '>You had a long flight. <b>You </b><span class=indam>must</span><b> be tired.</b>[sound:rec1359368795.mp3]</span><br><span style=''></span><br><span style=''><i>You must be tired. - Наверняка ты устала. </i></span>","STT":123},
{"FRONT":"<span style='font-size: 28px; '>This is my family. <b>I'm </b><span class=indam>[...]</span><b> the right.</b>[sound:rec1359367216.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastex3rjbt.png' /></span>","BACK":"<span style='font-size: 28px; '>This is my family. <b>I'm </b><span class=indam>on</span><b> the right.</b>[sound:rec1359367221.mp3]</span><br><span style=''></span><br><span style=''><i>on the right - справа</i></span>","STT":77},
{"FRONT":"<span style='font-size: 28px; '>My husband often gives me presents - <b>he's very </b><span class=indam>g_____</span><b>.</b>[sound:rec1359366712.mp3]<b><br /></b><img class='center-block img-responsive hinhdep'  src='pastecgj4t9.png' /></span>","BACK":"<span style='font-size: 28px; '>My husband often gives me presents - <b>he's very </b><span class=indam>generous</span><b>.</b>[sound:rec1359366717.mp3]</span><br><span style=''></span><br><span style=''><i>generous (adj.) - щедрый</i></span>","STT":54},
{"FRONT":"<span style='font-size: 28px; '>This is my family.<b> I'm on the </b><span class=indam>____</span><b>.</b>[sound:rec1359444042.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefjjoqw.png' /></span>","BACK":"<span style='font-size: 28px; '>This is my family.<b> I'm on the </b><span class=indam>left</span><b>.</b>[sound:rec1359444060.mp3]</span><br><span style=''></span><br><span style=''><i>on the left - слева</i><br></span>","STT":148},
{"FRONT":"<span style='font-size: 28px; '>My girlfriend <span class=indam>d____</span> yoga every morning.[sound:rec1359367296.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebijtfu.png' /></span>","BACK":"<span style='font-size: 28px; '>My girlfriend <span class=indam>does</span> yoga every morning.[sound:rec1359367302.mp3]</span><br><span style=''></span><br><span style=''><i>to do yoga - заниматься йогой</i></span>","STT":80},
{"FRONT":"<span style='font-size: 28px; '>She studies a lot and doesn't like parties - <b>she's a </b><span class=indam>s____</span><b> person.</b>[sound:rec1359366876.mp3]<b><br /></b><img class='center-block img-responsive hinhdep'  src='pastes5jcuo.png' /></span>","BACK":"<span style='font-size: 28px; '>She studies a lot and doesn't like parties - <b>she's a </b><span class=indam>serious</span><b> person.</b>[sound:rec1359366889.mp3]</span><br><span style=''></span><br><span style=''><i>serious (adj.) -&nbsp;&nbsp;серьезный</i></span>","STT":62},
{"FRONT":"<span style='font-size: 28px; '>I'm <span class=indam>s_____</span> because I feel happy today![sound:rec1359366580.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9w1lbx.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm <span class=indam>smiling</span> because I feel happy today![sound:rec1359366586.mp3]</span><br><span style=''></span><br><span style=''><i>to smile - улибаться</i></span>","STT":50},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359443804.mp3]<b>They're sports which we do in winter, </b><span class=indam>___ ex_____</span><b> skiing.<br /></b><img class='center-block img-responsive hinhdep'  src='pasteax31ta.png' /></span>","BACK":"<span style='font-size: 28px; '><b>They're sports which we do in winter, </b><span class=indam>for example</span><b> skiing</b>.[sound:rec1359443841.mp3]</span><br><span style=''></span><br><span style=''><i>for example - например</i></span>","STT":136},
{"FRONT":"<span style='font-size: 28px; '>A giraffe has a long <span class=indam>_____</span>.[sound:rec1359366114.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5xbbfe.png' /></span>","BACK":"<span style='font-size: 28px; '>A giraffe has a long <span class=indam>neck</span>.[sound:rec1359366118.mp3]</span><br><span style=''></span><br><span style=''><i>a neck - шея</i><br></span>","STT":31},
{"FRONT":"<span style='font-size: 28px; '>Look. People <span class=indam>s____</span> Portuguese in lots of countries.[sound:rec1359367325.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesdn7ew.png' /></span>","BACK":"<span style='font-size: 28px; '>Look. People <span class=indam>speak</span> Portuguese in lots of countries.[sound:rec1359367334.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>speak - spoke - spoken</span><br /><i>to speak - говорить </i></span>","STT":82}]

if (localStorage.caumayEn_SG_10 == null) {
    localStorage.caumayEn_SG_10 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_10"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_10+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_10).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_10).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_10).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_10+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_10).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_10).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_10).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_10)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_10))
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
	cau = Number(localStorage.caumayEn_SG_10)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_10)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_10) >  0){
		localStorage.caumayEn_SG_10 = Number(localStorage.caumayEn_SG_10) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_10))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_10)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_10)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_10) < dulieu.length-1){
		localStorage.caumayEn_SG_10 = Number(localStorage.caumayEn_SG_10) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_10))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_10)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_10)].BACK
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
	var current_player = Number(localStorage.caumayEn_SG_10)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_10)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_10)].BACK
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
	cau = Number(localStorage.caumayEn_SG_10)
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
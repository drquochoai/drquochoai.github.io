$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '>This shirt is too small for me. <b>I'm going to </b><span class=indam>take</span><b> it </b><span class=indam>b___</span><b> to the shop.</b>[sound:rec1361879049.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5e08jd.png' /></span><br>","BACK":"<span style='font-size: 28px; '>This shirt is too small for me. <b>I'm going to </b><span class=indam>take</span><b> it </b><span class=indam>back</span><b> to the shop.</b>[sound:rec1361879055.mp3]</span><br><span style=''></span><br><span style=''><i>to take sth. back - возвращать, брать обратно</i></span>","STT":111},
{"FRONT":"<span style='font-size: 28px; '>We want to go away this weekend.<b> Could you </b><span class=indam>look</span><b> </b><span class=indam>[...]</span><b> our dog? </b>[sound:rec1361877608.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteo9ahib.png' /></span><br>","BACK":"<span style='font-size: 28px; '>We want to go away this weekend. <b>Could you </b><span class=indam>look</span><b> </b><span class=indam>after</span><b> our dog?</b>[sound:rec1361877613.mp3]</span><br><span style=''></span><br><span style=''><i>to look after sth. - беречь, заботиться о чем-л.</i></span>","STT":48},
{"FRONT":"<span style='font-size: 28px; '>-Where are we <span class=indam>h_____</span> lunch?[sound:rec1361878010.mp3]<br />-I've booked a table at a restaurant.<br /><img class='center-block img-responsive hinhdep'  src='pastexgx4ra.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-Where are we <span class=indam>having</span> lunch?[sound:rec1361878030.mp3]<br />-I've booked a table at a restaurant.</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":67},
{"FRONT":"<span style='font-size: 28px; '>Is your sister <span class=indam>________</span> buy a new flat?[sound:rec1361877855.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezmqyzi.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Is your sister <span class=indam>going to</span> buy a new flat?[sound:rec1361877862.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>be + going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span></span>","STT":60},
{"FRONT":"<span style='font-size: 28px; '>When I was walking in the forest, <b>I saw an </b><span class=indam>_____</span><b>.</b>[sound:rec1361879178.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteybfaex.png' /></span><br>","BACK":"<span style='font-size: 28px; '>When I was walking in the forest, <b>I saw an </b><span class=indam>owl</span><b>.</b>[sound:rec1361879183.mp3]</span><br><span style=''></span><br><span style=''><i>an owl - сова</i></span>","STT":117},
{"FRONT":"<span style='font-size: 28px; '>At the end of the meal we left a <span class=indam>_____</span> for the waitress. <i>(some extra money)</i>[sound:rec1361879875.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev52udm.png' /></span><br>","BACK":"<span style='font-size: 28px; '>At the end of the meal we left a <span class=indam>tip</span> for the waitress.[sound:rec1361879881.mp3]</span><br><span style=''></span><br><span style=''><i>a tip - деньги на чай</i></span>","STT":140},
{"FRONT":"<span style='font-size: 28px; '>If you don't do your homework, <b>then</b> <b>I won't </b><span class=indam>l____</span><b> you go to the cinema</b> <b>tomorrow</b>. <i>(allow, permit)</i>[sound:rec1359825221.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenxobaf.png' /></span>","BACK":"<span style='font-size: 28px; '>If you don't do your homework, <b>then I won't </b><span class=indam>let</span><b> you go to the cinema tomorrow.</b>[sound:rec1359825232.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>let - let - let</span><br /><i>to let sb. do sth. - разрешать, позволять делать что-л.</i></span>","STT":22},
{"FRONT":"<span style='font-size: 28px; '>-We're getting married next month.[sound:rec1361878533.mp3]<br />-<span class=indam>Co______</span>! I'm sure it'll be a wonderful day.<br /><img class='center-block img-responsive hinhdep'  src='pastecj_m0q.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-We're getting married next month.<br />-<span class=indam>Congratulations</span>! I'm sure it'll be a wonderful day.[sound:rec1361878542.mp3]</span><br><span style=''></span><br><span style=''><i>Congratulations! - Поздравляю!</i></span>","STT":87},
{"FRONT":"<span style='font-size: 28px; '>My car was damaged,<b> but the mechanic </b><span class=indam>r_____</span><b> it. </b><i>(fixed, made it okay)</i>[sound:rec1361879779.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteftzr3i.png' /></span><br>","BACK":"<span style='font-size: 28px; '>My car was damaged, <b>but the mechanic </b><span class=indam>repaired</span><b> it.</b>[sound:rec1361879784.mp3]</span><br><span style=''></span><br><span style=''><i>to repair sth. - чинить</i><br /></span>","STT":135},
{"FRONT":"<span style='font-size: 28px; '>The exam's going to be very difficult. <b>I'm not looking </b><span class=indam>[...]</span><b> to it</b>.[sound:rec1361877761.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastef4y4st.jpg' /></span><br>","BACK":"<span style='font-size: 28px; '>The exam's going to be very difficult. <b>I'm not looking </b><span class=indam>forward</span><b> to it</b>.[sound:rec1361877768.mp3]</span><br><span style=''></span><br><span style=''><i>to look forward to sth. - ждать с нетерпением</i></span>","STT":55},
{"FRONT":"<span style='font-size: 28px; '>He's very funny - <b>he's a </b><span class=indam>c____</span><b>!</b>[sound:rec1359366745.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3qthpc.png' /></span>","BACK":"<span style='font-size: 28px; '>He's very funny - <b>he's a </b><span class=indam>clown</span><b>!</b>[sound:rec1359366749.mp3]</span><br><span style=''></span><br><span style=''><i>a clown - клоун</i></span>","STT":8},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1361878954.mp3]<b>She's a </b><span class=indam>s_____</span><b>.</b><br /><img class='center-block img-responsive hinhdep'  src='pastespkvbo.png' /></span><br>","BACK":"<span style='font-size: 28px; '><b>She's a </b><span class=indam>scientist</span><b>.</b>[sound:rec1361878961.mp3]</span><br><span style=''></span><br><span style=''><i>a scientist - ученный (в сфере наук), научный работник</i></span>","STT":106},
{"FRONT":"<span style='font-size: 28px; '>Although he was really tired, <b>Jim </b><span class=indam>k____</span><b> running.</b> <i>(continued, didn't stop)</i>[sound:rec1361876928.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezsxjyn.png' /></span>","BACK":"<span style='font-size: 28px; '>Although he was really tired, <b>Jim </b><span class=indam>kept</span><b> running.</b>[sound:rec1361876933.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>keep - kept - kept</span><br /><i>to keep doing sth. - продолжать делать что-л.</i></span>","STT":34},
{"FRONT":"<span style='font-size: 28px; '>Today's Thursday. <b>Saturday is</b> <b>the day </b><span class=indam>_____</span><b> tomorrow.</b>[sound:rec1361877693.mp3]</span><br>","BACK":"<span style='font-size: 28px; '>Today's Thursday. <b>Saturday is</b> <b>the day </b><span class=indam>after</span><b> tomorrow.</b>[sound:rec1361877702.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":52},
{"FRONT":"<span style='font-size: 28px; '>I want something to drink. I'm <span class=indam>th____</span>.[sound:rec1361878770.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastealndyp.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I want something to drink. I'm <span class=indam>thirsty</span>.[sound:rec1361878774.mp3]</span><br><span style=''></span><br><span style=''><i>thirsty (adj.) - испытывающий жажду / хотеть пить</i></span>","STT":96},
{"FRONT":"<span style='font-size: 28px; '>I can predict the future. <b>I'm a </b><span class=indam>f_____ t_____</span><b>!</b>[sound:rec1361879421.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehxvsl3.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I can predict the future.<b> I'm a </b><span class=indam>fortune teller</span><b>!</b>[sound:rec1361879427.mp3]</span><br><span style=''></span><br><span style=''><i>a fortune teller - гадалка</i></span>","STT":128},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1361878336.mp3]<b>He's </b><span class=indam>p_____</span><b> the door.</b><br /><img class='center-block img-responsive hinhdep'  src='pastesooqgz.jpg' /></span><br>","BACK":"<span style='font-size: 28px; '><b>He's </b><span class=indam>pushing</span><b> the door.</b>[sound:rec1361878342.mp3]</span><br><span style=''></span><br><span style=''><i>to push sth. - толкать</i></span>","STT":79},
{"FRONT":"<span style='font-size: 28px; '>Tomorrow we're going to <span class=indam>v____</span> mum in hospital. <i>(see)</i>[sound:rec1361877714.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteu1zi4c.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Tomorrow we're going to <span class=indam>v</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>sit</span> mum in hospital.[sound:rec1361877719.mp3]</span><br><span style=''></span><br><span style=''><i>to v</i><span style='font-style:italic; color:#ff5500;'>i</span><i>sit sb. - посещать, приходить в гости</i></span>","STT":53},
{"FRONT":"<span style='font-size: 28px; '>I really like doing <span class=indam>p_____</span> with my children.[sound:rec1359370016.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4ydh3p.png' /></span>","BACK":"<span style='font-size: 28px; '>I really like doing <span class=indam>puzzles</span> with my children.[sound:rec1359370021.mp3]</span><br><span style=''></span><br><span style=''><i>a puzzle - пазл</i><br></span>","STT":19},
{"FRONT":"<span style='font-size: 28px; '>It was my birthday last week, <b>so our parents </b><span class=indam>____</span><b> us go to the cinema.</b> <b>(let)</b>[sound:rec1359825732.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastes8eolr.png' /></span>","BACK":"<span style='font-size: 28px; '>It was my birthday last week, <b>so our parents </b><span class=indam>let</span><b> us go to the cinema.</b>[sound:rec1359825745.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>let - let - let</span><br /><i>to let sb. do sth. - разрешать, позволять делать что-л.</i></span>","STT":23},
{"FRONT":"<span style='font-size: 28px; '>I'm going to take a language course because <b>I want to </b><span class=indam>i______</span><b> my English. </b><i>(make it better)</i>[sound:rec1361879829.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelnl_wf.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I'm going to take a language course because<b> I want to </b><span class=indam>impr</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>ve</span><b> my English.</b>[sound:rec1361879836.mp3]</span><br><span style=''></span><br><span style=''><i>to impr</i><span style='font-style:italic; color:#ff5500;'>o</span><i>ve (sth.) - улушать</i></span>","STT":137},
{"FRONT":"<span style='font-size: 28px; '>-I'm a bit depressed today.[sound:rec1361878559.mp3]<br />-<span class=indam>Ch____ ___</span>! I'm sure you'll feel better later.<br /><img class='center-block img-responsive hinhdep'  src='pastewaiubk.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-I'm a bit depressed today.<br />-<span class=indam>Cheer up</span>! I'm sure you'll feel better later.[sound:rec1361878569.mp3]</span><br><span style=''></span><br><span style=''><i>Cheer up! - Выше нос! Не унывай!</i></span>","STT":88},
{"FRONT":"<span style='font-size: 28px; '>I'm not <span class=indam>trav_____</span> to France, I'm <span class=indam>trav_____</span> to South America.[sound:rec1361878152.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepqu9ao.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I'm not <span class=indam>travelling</span> to France, I'm <span class=indam>travelling</span> to South America.[sound:rec1361878159.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":72},
{"FRONT":"<span style='font-size: 28px; '>Scientists do <span class=indam>r______</span> to discover new things.[sound:rec1361878914.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteng2zlh.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Scientists do <span class=indam>research</span> to discover new things.[sound:rec1361878947.mp3]</span><br><span style=''></span><br><span style=''><i>research (n.) - исследование</i></span>","STT":105},
{"FRONT":"<span style='font-size: 28px; '>Quick, if we don't run <b>we </b><span class=indam>w____</span><b> catch the train!</b>[sound:rec1361878462.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste473p8j.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Quick, if we don't run <b>we </b><span class=indam>won't</span><b> catch the train!</b>[sound:rec1361878469.mp3]</span><br><span style=''></span><br><span style=''><i>won't = will not</i><br /><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>predictions</span></span>","STT":83},
{"FRONT":"<span style='font-size: 28px; '>Please can you help me?<b> I want to </b><span class=indam>m_____</span><b> the sofa. </b><i>(take from one place to another)</i>[sound:rec1359370220.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteg_hepj.png' /></span>","BACK":"<span style='font-size: 28px; '>Please can you help me? <b>I want to </b><span class=indam>move</span><b> the sofa.</b>[sound:rec1359370225.mp3]</span><br><span style=''></span><br><span style=''><i>to move sth. - двигать, передвигать что-л.</i></span>","STT":21},
{"FRONT":"<span style='font-size: 28px; '>-I left my wallet at home.[sound:rec1361878812.mp3]<br />-Never mind. I<span class=indam>___</span> lend you some money.</span><br>","BACK":"<span style='font-size: 28px; '>-I left my wallet at home.<br />-Never mind. I<span class=indam>'ll</span> lend you some money.[sound:rec1361878829.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>offers</span></span>","STT":99},
{"FRONT":"<span style='font-size: 28px; '>I forgot my wallet. <b>Please can you </b><span class=indam>l____</span><b> me some money?</b>[sound:rec1361878837.mp3][sound:rec1361878844.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedewhw9.jpg' /></span><br>","BACK":"<span style='font-size: 28px; '>I forgot my wallet. <b>Please can you </b><span class=indam>lend</span><b> me some money?</b>[sound:rec1361878850.mp3]</span><br><span style=''></span><br><span style=''><i>to lend sb. money -&nbsp;&nbsp;давать на время</i></span>","STT":100},
{"FRONT":"<span style='font-size: 28px; '>Ussain Bolt is <span class=indam>d_____</span> the fastest runner in the world. <i>(I'm 100% sure)</i>[sound:rec1361878694.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteocj7qz.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Ussain Bolt is <span class=indam>d</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>finitely</span> the fastest runner in the world.[sound:rec1361878704.mp3]</span><br><span style=''></span><br><span style=''><i>d</i><span style='font-style:italic; color:#ff5500;'>e</span><i>finitely - определенно, несомненно</i></span>","STT":92},
{"FRONT":"<span style='font-size: 28px; '>What did you dream <span class=indam>[...]</span> last night?[sound:rec1361879536.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten5xusg.png' /></span><br>","BACK":"<span style='font-size: 28px; '>What did you dream <span class=indam>about</span> last night?[sound:rec1361879569.mp3]<br /><i>or,</i><br />What did you dream <span class=indam>of</span> last night?</span><br><span style=''></span><br><span style=''><i>to dream - сниться</i></span>","STT":119},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1359368503.mp3]<b>I'm waiting </b><span class=indam>[...]</span><b> the station.</b><br /><img class='center-block img-responsive hinhdep'  src='pastehzak0t.png' /></span>","BACK":"<span style='font-size: 28px; '><b>I'm waiting </b><span class=indam>at</span><b> the station</b>.[sound:rec1359368509.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":14},
{"FRONT":"<span style='font-size: 28px; '>I arrived just in time <b>and </b><span class=indam>c____</span><b> the train.</b>[sound:rec1361877433.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevunwms.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I arrived just in time <b>and </b><span class=indam>caught</span><b> the train.</b>[sound:rec1361877438.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>catch - caught - caught </span><br /><i>to catch (a train) - ловить</i></span>","STT":28},
{"FRONT":"<span style='font-size: 28px; '>I arrived at the house and <span class=indam>k_____</span><b> on the door.</b>[sound:rec1359827744.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3zb3v2.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I arrived at the house and <span class=indam>knocked</span> <b>on the door.</b>[sound:rec1359827749.mp3]</span><br><span style=''></span><br><span style=''><i>to knock on sth. - стучать</i></span>","STT":37},
{"FRONT":"<span style='font-size: 28px; '>There was a problem with the pipe, <b>so I called a</b> <span class=indam>p_____</span>. <i>(a professional who repairs water pipes, baths, etc.)</i>[sound:rec1361878901.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenuetq6.png' /></span><br>","BACK":"<span style='font-size: 28px; '>There was a problem with the pipe, <b>so I called a</b> <span class=indam>plumber</span>.[sound:rec1361878906.mp3]</span><br><span style=''></span><br><span style=''><i>a plumber - сантехник</i></span>","STT":104},
{"FRONT":"<span style='font-size: 28px; '>-I don't feel very well.[sound:rec1361878869.mp3]<br />-<span class=indam>S___</span><b> I take you home?</b><br /><img class='center-block img-responsive hinhdep'  src='pastek40agq.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-I don't feel very well.<br />-<span class=indam>Shall</span> <b>I take you home?</b>[sound:rec1361878876.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>shall</span><i> is used for </i><span style='font-weight:600; font-style:italic;'>offers</span></span>","STT":102},
{"FRONT":"<span style='font-size: 28px; '>-I want to play with this toy![sound:rec1361879112.mp3]<br />-<b>But it's my toy, </b><span class=indam>give</span><b> it </b><span class=indam>b____</span><b>!</b><br /><img class='center-block img-responsive hinhdep'  src='pasteblys2o.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-I want to play with this toy!<br />-<b>But it's my toy, </b><span class=indam>give</span><b> it </b><span class=indam>back</span><b>!</b>[sound:rec1361879120.mp3]</span><br><span style=''></span><br><span style=''><i>to give sth. back - возвращать</i></span>","STT":114},
{"FRONT":"<span style='font-size: 28px; '>We arrived late and unfortunately <b>we </b><span class=indam>m____</span><b> the train.</b>[sound:rec1361877416.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefzfowo.png' /></span><br>","BACK":"<span style='font-size: 28px; '>We arrived late and unfortunately<b> we </b><span class=indam>missed</span><b> the train.</b>[sound:rec1361877422.mp3]</span><br><span style=''></span><br><span style=''><i>to miss - пропустить</i><br /></span>","STT":27},
{"FRONT":"<span style='font-size: 28px; '>-We're getting married next month.[sound:rec1361878646.mp3]<br />-<b>Congratulations! I'm sure it</b><span class=indam>___</span><b> be a wonderful day.</b><br /><img class='center-block img-responsive hinhdep'  src='pastecj_m0q.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-We're getting married next month.<br />-<b>Congratulations! I'm sure it</b><span class=indam>'ll</span><b> be a wonderful day.</b>[sound:rec1361878654.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>predictions</span></span>","STT":90},
{"FRONT":"<span style='font-size: 28px; '>This is my daughter. <b>I think she</b><span class=indam>__</span><b> be a good musician one day. </b><i>(in the future)</i>[sound:rec1361878428.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqdm89i.png' /></span><br>","BACK":"<span style='font-size: 28px; '><b>I think she</b><span class=indam>'ll</span><b> be a good musician one day.</b>[sound:rec1361878440.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>predictions</span></span>","STT":82},
{"FRONT":"<span style='font-size: 28px; '>Why are you sad? <b>What's the </b><span class=indam>m_____</span><b>? </b>[sound:rec1359368887.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste52rtsv.png' /></span>","BACK":"<span style='font-size: 28px; '>Why are you sad?<b> What's the </b><span class=indam>matter</span><b>?&nbsp;&nbsp;</b>[sound:rec1359368892.mp3]</span><br><span style=''></span><br><span style=''><i>What's the matter? - Что случилось? </i></span>","STT":17},
{"FRONT":"<span style='font-size: 28px; '>Did you know that Manchester United <span class=indam>___ p_____</span><b> Zenit tomorrow evening?</b>[sound:rec1361878284.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_t1qpv.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Did you know that Manchester United <span class=indam>are playing</span><b> Zenit tomorrow evening?</b>[sound:rec1361878290.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":76},
{"FRONT":"<span style='font-size: 28px; '>What's the opposite of 'question'?[sound:rec1361877480.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehttz6u.png' /></span><br>","BACK":"<span style='font-size: 28px; '>What's the opposite of 'question'?<br /><span class=indam>Answer</span>.[sound:rec1361877484.mp3]</span><br><span style=''></span><br><span style=''><i>an answer - ответ</i></span>","STT":31},
{"FRONT":"<span style='font-size: 28px; '>I don't like it. <b>He always points </b><span class=indam>[...]</span><b> me and laughs.</b>[sound:rec1359827172.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexpwkvv.png' /></span>","BACK":"<span style='font-size: 28px; '><b>He always points </b><span class=indam>at</span><b> me and laughs.</b>[sound:rec1359827179.mp3]</span><br><span style=''></span><br><span style=''><i>to point at sb. / sth. - показывать, указывать на кого-л. / что-л.</i></span>","STT":32},
{"FRONT":"<span style='font-size: 28px; '>-Can you lend me some money please?[sound:rec1361879130.mp3]<br />-<b>Okay, but when will you </b><span class=indam>p___</span><b> me </b><span class=indam>____</span><b>?</b><br /><img class='center-block img-responsive hinhdep'  src='pastet4fjy1.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-Can you lend me some money please?<br />-<b>Okay, but when will you </b><span class=indam>pay</span><b> me </b><span class=indam>back</span><b>?</b>[sound:rec1361879148.mp3]</span><br><span style=''></span><br><span style=''><i>to pay sth. back - возвращать (деньги)</i></span>","STT":115},
{"FRONT":"<span style='font-size: 28px; '>I arrived <span class=indam>j____</span> <span class=indam>in time</span> and caught the train.[sound:rec1361877446.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevunwms.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I arrived <span class=indam>just</span> <span class=indam>in time</span> and caught the train.[sound:rec1361877452.mp3]</span><br><span style=''></span><br><span style=''><i>just in time - как раз вовремя</i></span>","STT":29},
{"FRONT":"<span style='font-size: 28px; '>Excuse me, <b>are you ready to </b><span class=indam>o_____</span><b>?</b> <i>(tell me what you want)</i>[sound:rec1361879924.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenjvyqi.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Excuse me, <b>are you ready to </b><span class=indam>order</span><b>?</b>[sound:rec1361879929.mp3]</span><br><span style=''></span><br><span style=''><i>to order sth. - заказать</i></span>","STT":142},
{"FRONT":"<span style='font-size: 28px; '>Look, they're playing badly.<b> They </b><span class=indam>w___</span><b> win the match. </b>[sound:rec1361878480.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4qix44.png' /></span><br>","BACK":"<span style='font-size: 28px; '><b>They </b><span class=indam>won't</span><b> win the match.</b>[sound:rec1361878485.mp3]</span><br><span style=''></span><br><span style=''><i>won't = will not</i><br /><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>predictions</span></span>","STT":84},
{"FRONT":"<span style='font-size: 28px; '>There was a terrible <span class=indam>plane</span> <span class=indam>c____</span>. Lots of people died. <i>(accident) </i>[sound:rec1359370000.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterghof6.png' /></span>","BACK":"<span style='font-size: 28px; '>There was a terrible <span class=indam>plane</span> <span class=indam>crash</span>. Lots of people died.[sound:rec1359370007.mp3]</span><br><span style=''></span><br><span style=''><i>a plane crash - авиакатастрофа</i></span>","STT":18},
{"FRONT":"<span style='font-size: 28px; '>Some people think that fortune tellers can <span class=indam>pre____</span> the future. <i>(say what will happen)</i>[sound:rec1361879401.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehxvsl3.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Some people think that fortune tellers can <span class=indam>pred</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>ct</span> the future.[sound:rec1361879407.mp3]</span><br><span style=''></span><br><span style=''><i>to pred</i><span style='font-style:italic; color:#ff5500;'>i</span><i>ct sth. - предсказывать</i></span>","STT":127},
{"FRONT":"<span style='font-size: 28px; '>Why are you sad?<b> </b><span class=indam>W____</span><b> the matter? </b>[sound:rec1359368887.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste52rtsv.png' /></span>","BACK":"<span style='font-size: 28px; '>Why are you sad? <span class=indam>What's</span><b> the matter? </b>[sound:rec1359368892.mp3]</span><br><span style=''></span><br><span style=''><i>What's the matter? - Что случилось? </i></span>","STT":15},
{"FRONT":"<span style='font-size: 28px; '>When he saw his new car, <b>Harry was very </b><span class=indam>su_____</span><b>.</b>[sound:rec1359827607.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7ufq57.png' /></span>","BACK":"<span style='font-size: 28px; '>When he saw his new car, <b>Harry was very </b><span class=indam>surprised</span><b>.</b>[sound:rec1359827614.mp3]</span><br><span style=''></span><br><span style=''><i>surprised (adj.) - удивлённый, изумлённый</i></span>","STT":36},
{"FRONT":"<span style='font-size: 28px; '>What's the opposite of 'push'?[sound:rec1361877461.mp3]<br /><span class=indam>_____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastevi91us.png' /></span><br>","BACK":"<span style='font-size: 28px; '>What's the opposite of 'push'?<br /><span class=indam>Pull</span>.[sound:rec1361877468.mp3]</span><br><span style=''></span><br><span style=''><i>to pull - тянуть</i></span>","STT":30},
{"FRONT":"<span style='font-size: 28px; '>Water <span class=indam>b___</span> at 100 degrees Celsius. <i>(begins to become a gas)</i>[sound:rec1330340002.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehy5k7y.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Water <span class=indam>boils</span> at 100 degrees Celsius.[sound:rec1330340009.mp3]<br /></span><br><span style=''></span><br><span style=''><i>to boil -         кипятить, варить </i><br></span>","STT":6},
{"FRONT":"<span style='font-size: 28px; '>That's a good idea, <b>but I don't agree </b><span class=indam>[...]</span><b> you.</b>[sound:rec1361879632.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqtmvfq.png' /></span><br>","BACK":"<span style='font-size: 28px; '>That's a good idea, <b>but I don't agree </b><span class=indam>with</span><b> you.</b>[sound:rec1361879637.mp3]</span><br><span style=''></span><br><span style=''><i>to agree with sb. - согласиться</i></span>","STT":122},
{"FRONT":"<span style='font-size: 28px; '>Nostradamus made lots of <span class=indam>pre_____</span>.[sound:rec1361879382.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexdkncq.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Nostradamus made lots of <span class=indam>predictions</span>.[sound:rec1361879388.mp3]</span><br><span style=''></span><br><span style=''><i>a prediction - прогнозирование</i></span>","STT":118},
{"FRONT":"<span style='font-size: 28px; '>What do you think? <b>How long </b><span class=indam>w___</span><b> Putin be the Russian President?</b>[sound:rec1361879483.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedpp8_l.png' /></span><br>","BACK":"<span style='font-size: 28px; '>What do you think? <b>How long </b><span class=indam>will</span><b> Putin be the Russian President?</b>[sound:rec1361879468.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>predictions</span></span>","STT":143},
{"FRONT":"<span style='font-size: 28px; '>The doctor gave me some <span class=indam>m_____</span>. <i>(something you take if you are ill)</i>[sound:rec1361878979.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8lf65m.png' /></span><br>","BACK":"<span style='font-size: 28px; '>The doctor gave me some <span class=indam>medicine</span>.[sound:rec1361878973.mp3]</span><br><span style=''></span><br><span style=''><i>medicine (n.) - лекарство</i></span>","STT":107},
{"FRONT":"<span style='font-size: 28px; '>I <span class=indam>no_____</span> go to the gym on Saturdays. <i>(usually)</i>[sound:rec1361879736.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteucbkqt.png' /><br /></span><br>","BACK":"<span style='font-size: 28px; '>I <span class=indam>n</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>rmally</span> go to the gym on Saturdays.[sound:rec1361879741.mp3]<br /></span><br><span style=''></span><br><span style=''><i>n</i><span style='font-style:italic; color:#ff5500;'>o</span><i>rmally - обычно</i></span>","STT":130},
{"FRONT":"<span style='font-size: 28px; '>I <span class=indam>p_____</span> my exam and was very happy![sound:rec1361877352.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekukf3h.png' /><br /></span><br>","BACK":"<span style='font-size: 28px; '>I <span class=indam>passed</span> my exam and was very happy![sound:rec1361877360.mp3]<br /><br /></span><br><span style=''></span><br><span style=''><i>to pass (an exam) - сдать экзамен</i></span>","STT":24},
{"FRONT":"<span style='font-size: 28px; '>We went to the cinema and watched the new James Bond film;<b> it was very</b> <span class=indam>ex_____</span>. <i>(interesting and with energy; the opposite of 'boring')</i>[sound:rec1359367032.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteimsfwd.jpg' /></span>","BACK":"<span style='font-size: 28px; '>We went to the cinema and watched the new James Bond film;<b> it was very</b> <span class=indam>exciting</span>.[sound:rec1359367039.mp3]<br /></span><br><span style=''></span><br><span style=''><i>exciting (adj.) - захватывающий, волнующий</i></span>","STT":10},
{"FRONT":"<span style='font-size: 28px; '>-What are you <span class=indam>p_____</span> to do in Spain?[sound:rec1361877513.mp3]<br />-We're going to relax and see some friends.<br /><img class='center-block img-responsive hinhdep'  src='paste9wzj0g.png' /><br /></span><br>","BACK":"<span style='font-size: 28px; '>-What are you <span class=indam>planning</span> to do in Spain?[sound:rec1361877522.mp3]<br />-We're going to relax and see some friends.</span><br><span style=''></span><br><span style=''><i>to plan to do sth. - планировать, собираться</i></span>","STT":45},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> your sister going to buy a new flat?[sound:rec1361877840.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezmqyzi.png' /></span><br>","BACK":"<span style='font-size: 28px; '><span class=indam>Is</span> your sister going to buy a new flat?[sound:rec1361877847.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>be + going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span></span>","STT":59},
{"FRONT":"<span style='font-size: 28px; '>Yoga is good for our <span class=indam>ph____</span> health and our mental health. <br /><i>(of our body)</i>[sound:rec1336676492.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoxif2n.png' /></span>","BACK":"<span style='font-size: 28px; '>Yoga is good for our <span class=indam>ph</span><span style='font-weight:600; color:#ff5500;'>y</span><span class=indam>sical</span> health and our mental health.&nbsp;&nbsp;[sound:rec1336676502.mp3]</span><br><span style=''></span><br><span style=''><i>physical (adj.) - физический</i></span>","STT":4},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>I__ p_____</span> <b>football as usual.</b>[sound:rec1361878176.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteajf3cj.png' /></span><br>","BACK":"<span style='font-size: 28px; '><span class=indam>I'm playing</span> <b>football as usual.</b>[sound:rec1361878184.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":73},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> you going to a restaurant later?[sound:rec1361878106.mp3]<br />-No, we <span class=indam>[...]</span>. We're going to a nightclub.<br /><img class='center-block img-responsive hinhdep'  src='pasteqadkfb.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Are</span> you going to a restaurant later?[sound:rec1361878118.mp3][sound:rec1361878125.mp3]<br />-No, we <span class=indam>aren't</span>. We're going to a nightclub.</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":70},
{"FRONT":"<span style='font-size: 28px; '>At the party last week we drank <span class=indam>ch_____</span>.[sound:rec1361879158.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebqfcf9.png' /></span><br>","BACK":"<span style='font-size: 28px; '>At the party last week we drank <span class=indam>champ</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>gne</span>.[sound:rec1361879164.mp3]</span><br><span style=''></span><br><span style=''><i>champagne - шампанское</i></span>","STT":116},
{"FRONT":"<span style='font-size: 28px; '>Okay everyone, take a blank <span class=indam>p____</span> of paper.[sound:rec1361879851.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegi4pbq.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Okay everyone, take a blank <span class=indam>piece</span> of paper.[sound:rec1361879856.mp3]</span><br><span style=''></span><br><span style=''><i>a piece of paper - лист</i></span>","STT":138},
{"FRONT":"<span style='font-size: 28px; '>This child is <span class=indam>asl____</span>.[sound:rec1321717656.mp3] <i>(sleeping)</i><br /><img class='center-block img-responsive hinhdep'  src='pastemjhads.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This child is <span class=indam>asl</span><span style='font-weight:600; color:#ff5500;'>ee</span><span class=indam>p</span>.[sound:rec1321717661.mp3]<br /></span><br><span style=''></span><br><span style=''><i>asleep (adj.) - спящий</i><br /><i>to sleep (v.) - спать</i></span>","STT":7},
{"FRONT":"<span style='font-size: 28px; '>What do you think?<b> How </b><span class=indam>____</span><b> people live in 100 years time</b>?[sound:rec1361879491.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastechxlzh.png' /></span><br>","BACK":"<span style='font-size: 28px; '>What do you think? <b>How </b><span class=indam>will</span><b> people live in 100 years time?</b>[sound:rec1361879500.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>predictions</span></span>","STT":144},
{"FRONT":"<span style='font-size: 28px; '>It was difficult,<b> but she </b><span class=indam>t____</span><b> hard. </b><i>(put in lots of effort)</i>[sound:rec1359827779.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetvdmpo.png' /></span>","BACK":"<span style='font-size: 28px; '>It was difficult, <b>but she </b><span class=indam>tried</span><b> hard.</b>[sound:rec1359827784.mp3]</span><br><span style=''></span><br><span style=''><i>to try - пробовать, пытаться, стараться</i></span>","STT":39},
{"FRONT":"<span style='font-size: 28px; '>Yoga is good for our physical health and our <span class=indam>m____</span> health. [sound:rec1336676519.mp3]<br /><i>(of our mind)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteoxif2n.png' /></span>","BACK":"<span style='font-size: 28px; '>Yoga is good for our physical health and our <span class=indam>m</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>ntal</span> health.[sound:rec1336676526.mp3]</span><br><span style=''></span><br><span style=''><i>mental health - психическое здоровье, душевное здоровье</i></span>","STT":5},
{"FRONT":"<span style='font-size: 28px; '>Our house is a bit too small. <b>We're </b><span class=indam>looking</span><b> </b><span class=indam>[...]</span><b> a new one.</b>[sound:rec1361877624.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezikghz.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Our house is a bit too small. <b>We're </b><span class=indam>looking</span><b> </b><span class=indam>for</span><b> a new one.</b>[sound:rec1361877630.mp3]</span><br><span style=''></span><br><span style=''><i>to look for sth. - искать</i></span>","STT":49},
{"FRONT":"<span style='font-size: 28px; '>He always believes that something bad will happen - <b>he's a </b><span class=indam>p______</span><b>.</b>[sound:rec1361878317.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiiwqn5.png' /></span><br>","BACK":"<span style='font-size: 28px; '>He always believes that something bad will happen - <b>he's a </b><span class=indam>p</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>ssimist</span><b>.</b>[sound:rec1361878331.mp3]</span><br><span style=''></span><br><span style=''><i>a pessimist - пессимист</i></span>","STT":78},
{"FRONT":"<span style='font-size: 28px; '>Wow! I can't believe it! <span class=indam>I__ g_____</span><b> married today!</b>[sound:rec1361878046.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexmzhng.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Wow! I can't believe it!<b> </b><span class=indam>I'm getting</span><b> married today!</b>[sound:rec1361878051.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":68},
{"FRONT":"<span style='font-size: 28px; '>-I don't feel very well.[sound:rec1361878869.mp3]<br />-<b>Shall I </b><span class=indam>t____</span><b> you home?</b><br /><img class='center-block img-responsive hinhdep'  src='pastek40agq.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-I don't feel very well.<br />-<b>Shall I </b><span class=indam>take</span><b> you home?</b>[sound:rec1361878876.mp3]</span><br><span style=''></span><br><span style=''><i>to take sb. (home) - проводить / провозить до дома</i></span>","STT":103},
{"FRONT":"<span style='font-size: 28px; '>I don't like this language school. <b>I'm not </b><span class=indam>_________</span><b> study here next year.</b>[sound:rec1361877882.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehkkzzi.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I don't like this language school. <b>I'm not </b><span class=indam>going to</span><b> study here next year.</b>[sound:rec1361877888.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>be + going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span></span>","STT":61},
{"FRONT":"<span style='font-size: 28px; '>He always believes that something good will happen - <b>he's an </b><span class=indam>o______</span><b>.</b>[sound:rec1361878302.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenydxai.png' /></span><br>","BACK":"<span style='font-size: 28px; '>He always believes that something good will happen - <b>he's an </b><span class=indam>optimist</span><b>.</b>[sound:rec1361878308.mp3]</span><br><span style=''></span><br><span style=''><i>an optimist - оптимист</i></span>","STT":77},
{"FRONT":"<span style='font-size: 28px; '>Mmm.<b> This cake is </b><span class=indam>d____</span><b>! </b><i>(very tasty)</i>[sound:rec1359828108.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeyyklh.png' /></span>","BACK":"<span style='font-size: 28px; '>Mmm. <b>This cake is </b><span class=indam>delicious</span><b>!</b>[sound:rec1359828113.mp3]</span><br><span style=''></span><br><span style=''><i>delicious (adj.) - восхитительный, вкусный</i></span>","STT":42},
{"FRONT":"<span style='font-size: 28px; '>-It's cold in here.[sound:rec1361878793.mp3]<br />-<span class=indam>S____</span> <b>I shut the window?</b><br><img class='center-block img-responsive hinhdep'  src='paste0rsocd.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-It's cold in here.<br />-<span class=indam>Shall</span><b> I shut the window?</b>[sound:rec1361878798.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>shall</span><i> is used for </i><span style='font-weight:600; font-style:italic;'>offers</span></span>","STT":98},
{"FRONT":"<span style='font-size: 28px; '>-I'm hungry.[sound:rec1361878781.mp3]<br />-<span class=indam>S____</span> I make you a sandwich?</span><br>","BACK":"<span style='font-size: 28px; '>-I'm hungry.<br />-<span class=indam>Shall</span> I make you a sandwich?[sound:rec1361878786.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>shall</span><i> is used for </i><span style='font-weight:600; font-style:italic;'>offers</span></span>","STT":97},
{"FRONT":"<span style='font-size: 28px; '>I'm really sorry. <b>I </b><span class=indam>p_____</span><b> I won't do it again. </b><i>(I give my word)</i>[sound:rec1361878747.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastew5efy1.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I'm really sorry.<b> I </b><span class=indam>promise</span><b> I won't do it again.</b>[sound:rec1361878762.mp3]</span><br><span style=''></span><br><span style=''><i>to promise - обещать</i></span>","STT":95},
{"FRONT":"<span style='font-size: 28px; '>What's the opposite of 'winner'?[sound:rec1361877367.mp3]<br /><span class=indam>_______</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastedy751m.png' /></span><br>","BACK":"<span style='font-size: 28px; '>What's the opposite of 'winner'?[sound:rec1361877387.mp3]<br /><span class=indam>Loser</span>.</span><br><span style=''></span><br><span style=''><i>winner - победитель</i><br /><i>loser - проигравший</i></span>","STT":25},
{"FRONT":"<span style='font-size: 28px; '>When we went to London, <b>we </b><span class=indam>v_____</span><b> Buckingham Palace.</b><i> (went to, saw)</i>[sound:rec1361877797.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekzlcup.png' /></span><br>","BACK":"<span style='font-size: 28px; '>When we went to London,<b> we </b><span class=indam>v</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>sited</span><b> Buckingham Palace.</b>[sound:rec1361877801.mp3]</span><br><span style=''></span><br><span style=''><i>to v</i><span style='font-style:italic; color:#ff5500;'>i</span><i>sit swh. - посещать, бывать</i></span>","STT":57},
{"FRONT":"<span style='font-size: 28px; '>Are you afraid of <span class=indam>d____</span>? <i>(the opposite of 'life')</i>[sound:rec1330339691.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez0nb30.png' /></span>","BACK":"<span style='font-size: 28px; '>Are you afraid of <span class=indam>death</span>?[sound:rec1330339696.mp3]</span><br><span style=''></span><br><span style=''><i>death (n.) - смерть</i></span>","STT":3},
{"FRONT":"<span style='font-size: 28px; '>I arrived at the house and <b>knocked </b><span class=indam>[...]</span><b> the door.</b>[sound:rec1359827763.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3zb3v2.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I arrived at the house and<b> knocked </b><span class=indam>on</span><b> the door.</b>[sound:rec1359827767.mp3]</span><br><span style=''></span><br><span style=''><i>to knock on sth. - стучать</i></span>","STT":38},
{"FRONT":"<span style='font-size: 28px; '>What do you think? <b>How will people live </b><span class=indam>[...]</span><b> 100 years time</b>? <i>(in the future)</i>[sound:rec1361879491.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastechxlzh.png' /></span><br>","BACK":"<span style='font-size: 28px; '>What do you think? <b>How will people live </b><span class=indam>in</span><b> 100 years time</b>?[sound:rec1361879500.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":145},
{"FRONT":"<span style='font-size: 28px; '>-How long are you going to spend in France?<br />-<b>I'm going there </b><span class=indam>[...]</span><b> 5 weeks.</b>[sound:rec1361877493.mp3]</span><br>","BACK":"<span style='font-size: 28px; '>-How long are you going to spend in France?<br />-<b>I'm going there </b><span class=indam>for</span><b> 5 weeks.</b>[sound:rec1361877502.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":44},
{"FRONT":"<span style='font-size: 28px; '>I don't like this language school.<b> </b><span class=indam>I______</span><b> going to study here next year.</b>[sound:rec1361877900.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehkkzzi.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I don't like this language school. <span class=indam>I'm not</span><b> going to study here next year.</b>[sound:rec1361877908.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>be + going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span></span>","STT":62},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1361877958.mp3]<b>He</b><span class=indam>___</span><b> taking me to the cinema.</b><br /><img class='center-block img-responsive hinhdep'  src='pastetbqlnq.png' /></span><br>","BACK":"<span style='font-size: 28px; '><b>He</b><span class=indam>'s</span><b> taking me to the cinema.</b>[sound:rec1361877966.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":65},
{"FRONT":"<span style='font-size: 28px; '>-I'm in a meeting. <b>I'll </b><span class=indam>call</span><b> you </b><span class=indam>____</span><b> later.</b>[sound:rec1361879065.mp3]</span><br>","BACK":"<span style='font-size: 28px; '>-I'm in a meeting. <b>I'll </b><span class=indam>call</span><b> you </b><span class=indam>back</span><b> later.</b>[sound:rec1361879070.mp3]</span><br><span style=''></span><br><span style=''><i>to call sb. back - перезвонить</i></span>","STT":112},
{"FRONT":"<span style='font-size: 28px; '>Okay everyone, take a <span class=indam>b____</span> piece of paper. <i>(empty, clean)</i>[sound:rec1361879862.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegi4pbq.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Okay everyone, take a <span class=indam>blank</span> piece of paper.[sound:rec1361879868.mp3]</span><br><span style=''></span><br><span style=''><i>blank (adj.) - пустой, чистый</i></span>","STT":139},
{"FRONT":"<span style='font-size: 28px; '>-I'm a bit depressed today.[sound:rec1361878675.mp3]<br />-<b>Cheer up! I'm </b><span class=indam>s___</span><b> you'll feel better later. </b><i>(I strongly think)</i><br /><img class='center-block img-responsive hinhdep'  src='pastewaiubk.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-I'm a bit depressed today.<br />-<b>Cheer up! I'm </b><span class=indam>sure</span><b> you'll feel better later.</b>[sound:rec1361878684.mp3]</span><br><span style=''></span><br><span style=''><i>I'm sure... - Я уверен...</i></span>","STT":91},
{"FRONT":"<span style='font-size: 28px; '>Look at those clouds.<b> It </b><span class=indam>____</span><b> probably rain.</b>[sound:rec1361878379.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemeipsp.png' /></span><br>","BACK":"<span style='font-size: 28px; '><b>It </b><span class=indam>will</span><b> probably rain.</b><br><i>or,</i><br><b>It</b><span class=indam>'ll</span><b> probably rain.</b>[sound:rec1361878385.mp3][sound:rec1361878398.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>predictions</span></span>","STT":81},
{"FRONT":"<span style='font-size: 28px; '>I can't find my keys. <b>Can you help me </b><span class=indam>look</span><b> </b><span class=indam>[...]</span><b> them?</b>[sound:rec1361877741.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste36gsmi.jpg' /></span><br>","BACK":"<span style='font-size: 28px; '>I can't find my keys. <b>Can you help me </b><span class=indam>look</span><b> </b><span class=indam>for</span><b> them?</b>[sound:rec1361877746.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":54},
{"FRONT":"<span style='font-size: 28px; '>Anna is a good friend.<b> I see her quite</b> <span class=indam>fr______</span>. <i>(often)</i>[sound:rec1361879718.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastea7dfc1.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Anna is a good friend. <b>I see her quite </b><span class=indam>fr</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>quently</span>.[sound:rec1361879724.mp3]</span><br><span style=''></span><br><span style=''><i>frequently - часто</i></span>","STT":129},
{"FRONT":"<span style='font-size: 28px; '>My boyfriend's very funny.<b> He has a great </b><span class=indam>s_____</span><b> </b><span class=indam>of h_____</span><b>.</b>[sound:rec1359370052.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefzj6l_.png' /></span>","BACK":"<span style='font-size: 28px; '>My boyfriend's very funny. <b>He has a great </b><span class=indam>sense</span><b> </b><span class=indam>of humour</span><b>.</b>[sound:rec1359370058.mp3]</span><br><span style=''></span><br><span style=''><i>a (great) sense of humour - (хороший) чувство юмера</i></span>","STT":20},
{"FRONT":"<span style='font-size: 28px; '>-Where <span class=indam>___</span> we having lunch?[sound:rec1361877975.mp3]<br />-I've booked a table at a restaurant.[sound:rec1361877981.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexgx4ra.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-Where <span class=indam>are</span> we having lunch?[sound:rec1361878030.mp3]<br />-I've booked a table at a restaurant.</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":66},
{"FRONT":"<span style='font-size: 28px; '>We went out to a restaurant and <b>had a </b><span class=indam>r_____</span><b> meal. </b><i>(beautiful, about love)</i>[sound:rec1359828201.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewykdjm.png' /></span>","BACK":"<span style='font-size: 28px; '>We went out to a restaurant and<b> had a </b><span class=indam>romantic</span><b> meal.</b>[sound:rec1359828207.mp3]</span><br><span style=''></span><br><span style=''><i>romantic (adj.) - романтический</i></span>","STT":43},
{"FRONT":"<span style='font-size: 28px; '>-That was a lovely dinner.[sound:rec1361879664.mp3]<br />-I'm <span class=indam>g____</span> that you enjoyed it. <i>(happy)</i><br /><img class='center-block img-responsive hinhdep'  src='pastexnjjen.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-I'm <span class=indam>glad</span> that you enjoyed it.[sound:rec1361879670.mp3]</span><br><span style=''></span><br><span style=''><i>glad (adj.) - рад</i></span>","STT":124},
{"FRONT":"<span style='font-size: 28px; '>-I have an important exam tomorrow.[sound:rec1361878492.mp3]<br />-<span class=indam>G___ l____</span>! <b>I'm sure you'll pass.</b><br /><img class='center-block img-responsive hinhdep'  src='pastenqnv10.jpg' /></span><br>","BACK":"<span style='font-size: 28px; '>-I have an important exam tomorrow.<br />-<span class=indam>Good</span> <span class=indam>luck</span>! <b>I'm sure you'll pass.</b>[sound:rec1361878509.mp3]</span><br><span style=''></span><br><span style=''><i>Good luck! - Удачи!</i></span>","STT":85},
{"FRONT":"<span style='font-size: 28px; '>-What <span class=indam>___ you d_____</span> after class?[sound:rec1361878203.mp3]<br />-I'm playing football as usual.<br /><img class='center-block img-responsive hinhdep'  src='pasteajf3cj.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-What <span class=indam>are you doing</span> after class?[sound:rec1361878220.mp3]<br />-I'm playing football as usual.</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":74},
{"FRONT":"<span style='font-size: 28px; '>What radio station do you normally <b>listen</b> <span class=indam>[...]</span>?[sound:rec1361879599.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteafe7r8.png' /></span><br>","BACK":"<span style='font-size: 28px; '>What radio station do you normally <b>listen</b> <span class=indam>to</span>?[sound:rec1361879605.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":120},
{"FRONT":"<span style='font-size: 28px; '>-This exercise is hard.[sound:rec1361878857.mp3]<br />-<b>I</b><span class=indam>___</span><b> help you to do it.</b><br /><img class='center-block img-responsive hinhdep'  src='pastethetyl.jpg' /></span><br>","BACK":"<span style='font-size: 28px; '>-This exercise is hard.<br />-<b>I</b><span class=indam>'ll</span><b> help you to do it.</b>[sound:rec1361878862.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>offers</span></span>","STT":101},
{"FRONT":"<span style='font-size: 28px; '>-What <span class=indam>___</span> you doing this weekend?[sound:rec1361878254.mp3]<br />-Nothing special, I<span class=indam>___</span> just staying at home.</span><br>","BACK":"<span style='font-size: 28px; '>-What <span class=indam>are</span> you doing this weekend?[sound:rec1361878267.mp3]<br />-Nothing special, I<span class=indam>'m</span> just staying at home.</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":75},
{"FRONT":"<span style='font-size: 28px; '>Today's Wednesday. <b>Monday was</b> <b>the day </b><span class=indam>_____</span><b> yesterday.</b>[sound:rec1361879896.mp3]</span><br>","BACK":"<span style='font-size: 28px; '>Today's Wednesday. <b>Monday was</b> <b>the day </b><span class=indam>before</span><b> yesterday.</b>[sound:rec1361879914.mp3]</span><br><span style=''></span><br><span style=''><i>before - перед, до</i></span>","STT":141},
{"FRONT":"<span style='font-size: 28px; '>When we saw the criminal, <b>we immediately </b><span class=indam>con_____</span><b> the police. </b><i>(called, sent a message to)</i>[sound:rec1359827926.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqdt23j.jpg' /></span>","BACK":"<span style='font-size: 28px; '>When we saw the criminal, <b>we immediately </b><span class=indam>contacted</span><b> the police.</b>[sound:rec1359827951.mp3]</span><br><span style=''></span><br><span style=''><i>to contact sb. - связаться с кем-л.</i></span>","STT":41},
{"FRONT":"<span style='font-size: 28px; '>Would you like <span class=indam>an_____</span> cup of coffee? <i>(one more)</i>[sound:rec1361879703.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexuynav.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Would you like <span class=indam>another</span> cup of coffee?[sound:rec1361879708.mp3]</span><br><span style=''></span><br><span style=''><i>another - еще</i></span>","STT":126},
{"FRONT":"<span style='font-size: 28px; '>I parked my car here, <b>and somebody </b><span class=indam>d_____</span><b> it</b>. <i>(harmed, spoiled)</i>[sound:rec1361879759.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevgrysa.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I parked my car here, <b>and somebody </b><span class=indam>damaged</span><b> it.</b>[sound:rec1361879769.mp3]</span><br><span style=''></span><br><span style=''><i>to damage sth. - вредить</i></span>","STT":134},
{"FRONT":"<span style='font-size: 28px; '>-Can I talk to you for a moment?[sound:rec1361879085.mp3]<br />-<b>Sorry, I'm busy. Please can you </b><span class=indam>come</span><b> </b><span class=indam>____</span><b> in ten minutes</b>? <i>(return)</i></span><br>","BACK":"<span style='font-size: 28px; '>-Can I talk to you for a moment?<br />-<b>Sorry, I'm busy. Please can you </b><span class=indam>come</span><b> </b><span class=indam>back</span><b> in ten minutes</b>?[sound:rec1361879094.mp3]</span><br><span style=''></span><br><span style=''><i>to come back - возвращаться</i></span>","STT":113},
{"FRONT":"<span style='font-size: 28px; '>I took my son to the doctor and he had <b>an</b> <span class=indam>in_____</span>.[sound:rec1361878997.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemtv7jf.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I took my son to the doctor and he had <b>an</b> <span class=indam>inj</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>ction</span>.[sound:rec1361879003.mp3]</span><br><span style=''></span><br><span style=''><i>an inj</i><span style='font-style:italic; color:#ff5500;'>e</span><i>ction - укол</i></span>","STT":108},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1361878133.mp3]<b>No, we aren't. </b><span class=indam>We_______</span><b> to a nightclub.</b><br /><img class='center-block img-responsive hinhdep'  src='pasteqadkfb.png' /></span><br>","BACK":"<span style='font-size: 28px; '>[sound:rec1361878141.mp3]<br /><b>No, we aren't. </b><span class=indam>We're going</span><b> to a nightclub.</b></span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":71},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>L_____</span> is something which women put on their lips.[sound:rec1359368377.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegnjcwm.jpg' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Lipstick</span> is something which women put on their lips.[sound:rec1359368330.mp3]</span><br><span style=''></span><br><span style=''><i>lipstick (n.) - помада</i></span>","STT":12},
{"FRONT":"<span style='font-size: 28px; '>That's a good idea, <b>but I don't </b><span class=indam>a____</span><b> with you</b>. <i>(I have a different opinion)</i>[sound:rec1361879646.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqtmvfq.png' /></span><br>","BACK":"<span style='font-size: 28px; '>That's a good idea,<b> but I don't </b><span class=indam>agree</span><b> with you.</b>[sound:rec1361879657.mp3]</span><br><span style=''></span><br><span style=''><i>to agree with sb. - согласиться</i></span>","STT":123},
{"FRONT":"<span style='font-size: 28px; '>A health spa is a place where you <span class=indam>r____</span> and feel good. <i>(be calm, rest, the opposite of 'be stressed')</i>[sound:rec1359368486.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefvhpmh.png' /></span>","BACK":"<span style='font-size: 28px; '>A health spa is a place where you <span class=indam>relax</span> and feel good.[sound:rec1359368493.mp3]</span><br><span style=''></span><br><span style=''><i>to relax - отдыхать, расслабляться</i></span>","STT":13},
{"FRONT":"<span style='font-size: 28px; '>What's the opposite of 'loser'? [sound:rec1361877394.mp3]<br /><span class=indam>______</span>.<br /><img class='center-block img-responsive hinhdep'  src='paste_vluug.png' /></span><br>","BACK":"<span style='font-size: 28px; '>What's the opposite of 'loser'<br /><span class=indam>Winner</span>.[sound:rec1361877400.mp3]</span><br><span style=''></span><br><span style=''><i>winner - победитель</i><br /><i>loser - проигравший</i></span>","STT":26},
{"FRONT":"<span style='font-size: 28px; '>Some Chinese cities are very <span class=indam>p_____</span>. <i>(there is lots of dirt, smoke and rubbish)</i>[sound:rec1359367019.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenp9f_w.png' /></span>","BACK":"<span style='font-size: 28px; '>Some Chinese cities are very <span class=indam>polluted</span>.[sound:rec1359367024.mp3]<br /></span><br><span style=''></span><br><span style=''><i>polluted (adj.) - загрязненный</i></span>","STT":9},
{"FRONT":"<span style='font-size: 28px; '>This is the switch <b>which </b><span class=indam>c_____</span><b> the lights. </b><i>(turns on and off)</i>[sound:rec1359444236.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuxihl2.png' /></span>","BACK":"<span style='font-size: 28px; '>This is the switch <b>which </b><span class=indam>controls</span><b> the lights.</b>[sound:rec1359444242.mp3]</span><br><span style=''></span><br><span style=''><i>to control - контролировать; регулировать</i></span>","STT":132},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> she going to school today?[sound:rec1361878063.mp3]<br />-Yes, she <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasteplj_bv.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Is</span> she going to school today?[sound:rec1361878072.mp3]<br />-Yes, she <span class=indam>is</span>.<br /></span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":69},
{"FRONT":"<span style='font-size: 28px; '>We had a great holiday, the hotel even <span class=indam>or______</span> an elephant ride. <i>(arranged, planned)</i>[sound:rec1361877824.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste255b7s.png' /></span><br>","BACK":"<span style='font-size: 28px; '>We had a great holiday, the hotel even <span class=indam>organised</span> an elephant ride.[sound:rec1361877832.mp3]</span><br><span style=''></span><br><span style=''><i>to organise sth. - устроить, организовать</i></span>","STT":58},
{"FRONT":"<span style='font-size: 28px; '>He's going to New York next month. <b>He's really looking </b><span class=indam>____ ___</span><b> it.</b>[sound:rec1361877650.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenuijml.png' /></span><br>","BACK":"<span style='font-size: 28px; '>He's going to New York next month. <b>He's really looking </b><span class=indam>forward to</span><b> it.</b>[sound:rec1361877656.mp3]</span><br><span style=''></span><br><span style=''><i>to look forward to sth. - ждать с нетерпением</i></span>","STT":50},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1361879790.mp3]<b>He's an </b><span class=indam>e_______</span><b>.</b><br /><img class='center-block img-responsive hinhdep'  src='pasteazmjmn.png' /></span><br>","BACK":"<span style='font-size: 28px; '><b>He's an </b><span class=indam>electr</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>cian</span><b>.</b>[sound:rec1361879797.mp3]</span><br><span style=''></span><br><span style=''><i>an electr</i><span style='font-style:italic; color:#ff5500;'>i</span><i>cian - электрик</i></span>","STT":136},
{"FRONT":"<span style='font-size: 28px; '>-What would you like?[sound:rec1361879036.mp3]<br />-I<span class=indam>___</span> have pasta please.<br /><img class='center-block img-responsive hinhdep'  src='pastetfyzf6.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-What would you like?<br />-I<span class=indam>'ll</span> have pasta please.[sound:rec1361879041.mp3]</span><br><span style=''></span><br><span style=''><i>I'll have ... - </i><br /><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>decisions</span></span>","STT":110},
{"FRONT":"<span style='font-size: 28px; '>-I have an important exam tomorrow.[sound:rec1361878517.mp3]<br />-<b>Good luck! I'm sure you</b><span class=indam>__</span><b> pass.</b><br /><img class='center-block img-responsive hinhdep'  src='pastenqnv10.jpg' /></span><br>","BACK":"<span style='font-size: 28px; '>-I have an important exam tomorrow.<br />-<b>Good luck! I'm sure you</b><span class=indam>'ll</span><b> pass.</b>[sound:rec1361878524.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>predictions</span></span>","STT":86},
{"FRONT":"<span style='font-size: 28px; '>I'm really sorry. <b>I promise I </b><span class=indam>_____</span><b> do it again.</b>[sound:rec1361878733.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastew5efy1.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I'm really sorry.<b> I promise I </b><span class=indam>won't</span><b> do it again.</b>[sound:rec1361878738.mp3]</span><br><span style=''></span><br><span style=''><i>won't = will not</i><br /><i>use </i><span style='font-weight:600; font-style:italic;'>will + infinitive </span><i>for </i><span style='font-weight:600; font-style:italic;'>promises</span></span>","STT":94},
{"FRONT":"<span style='font-size: 28px; '>Wow! You're teacher of the year! <span class=indam>W___ d____</span>![sound:rec1359827851.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelqx7e8.png' /></span>","BACK":"<span style='font-size: 28px; '>Wow! You're teacher of the year! <span class=indam>Well done</span>![sound:rec1359827857.mp3]</span><br><span style=''></span><br><span style=''><i>Well done! - Молодец!</i></span>","STT":40},
{"FRONT":"<span style='font-size: 28px; '>-That was a lovely dinner.[sound:rec1361879686.mp3]<br />-I'm glad that you <span class=indam>en____</span> it. <i>(liked)</i><br /><img class='center-block img-responsive hinhdep'  src='pastexnjjen.png' /></span><br>","BACK":"<span style='font-size: 28px; '>-I'm glad that you <span class=indam>enjoyed</span> it.[sound:rec1361879695.mp3]</span><br><span style=''></span><br><span style=''><i>to enjoy sth. - наслаждаться</i></span>","STT":125},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1361877939.mp3] <b>He's </b><span class=indam>t_____</span><b> me to the cinema.</b><br /><img class='center-block img-responsive hinhdep'  src='pastetbqlnq.png' /></span><br>","BACK":"<span style='font-size: 28px; '><b>He's </b><span class=indam>taking</span><b> me to the cinema.</b>[sound:rec1361877948.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":64},
{"FRONT":"<span style='font-size: 28px; '>Last weekend I went to my friends' <span class=indam>we_____</span>. <i>(a party where a couple get married)</i>[sound:rec1340735747.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewh87r8.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Last weekend I went to my friends' <span class=indam>wedding</span>. [sound:rec1340735756.mp3]</span><br><span style=''></span><br><span style=''><i>a wedding - свадьба</i></span>","STT":2},
{"FRONT":"<span style='font-size: 28px; '>A nurse is a person <b>who </b><span class=indam>looks</span><b> </b><span class=indam>[...]</span><b> people who are ill.</b>[sound:rec1361877548.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastem2teio.png' /></span><br>","BACK":"<span style='font-size: 28px; '>A nurse is a person <b>who </b><span class=indam>looks</span><b> </b><span class=indam>after</span><b> people who are ill.</b>[sound:rec1361877561.mp3]</span><br><span style=''></span><br><span style=''><i>to look after sb. - беречь, заботиться о ком-л.</i></span>","STT":47},
{"FRONT":"<span style='font-size: 28px; '>A journalist is a person who writes <span class=indam>a______</span> for a newspaper or magazine.[sound:rec1359368218.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8famrm.png' /></span>","BACK":"<span style='font-size: 28px; '>A journalist is a person who writes <span class=indam>articles</span> for a newspaper or magazine.[sound:rec1359368226.mp3]</span><br><span style=''></span><br><span style=''><i>an article - статья</i></span>","STT":11},
{"FRONT":"<span style='font-size: 28px; '>Look! <b>One of the windows is </b><span class=indam>b____</span><b>.</b>[sound:rec1359827587.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehqwryu.png' /></span>","BACK":"<span style='font-size: 28px; '>Look! <b>One of the windows is </b><span class=indam>broken</span><b>.</b>[sound:rec1359827592.mp3]</span><br><span style=''></span><br><span style=''><i>broken (adj.) - разбитый, сломаный</i></span>","STT":35},
{"FRONT":"<span style='font-size: 28px; '>Can you pour me a <span class=indam>g___</span> of water please?[sound:rec1340218887.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7abm1t.jpg' /></span><br>","BACK":"<span style='font-size: 28px; '>Can you pour me a <span class=indam>glass </span>of water please?[sound:rec1340218892.mp3]</span><br><span style=''></span><br><span style=''><i>a glass - стакан</i></span>","STT":1},
{"FRONT":"<span style='font-size: 28px; '>I don't like bananas and I don't like oranges <span class=indam>e____</span>! <i>(too)</i>[sound:rec1361879015.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelhmsu6.png' /></span><br>","BACK":"<span style='font-size: 28px; '>I don't like bananas and I don't like oranges <span class=indam>either</span>![sound:rec1361879022.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":109},
{"FRONT":"<span style='font-size: 28px; '>Today is Monday. On Thursday I'm going to see my grandparents. <b>I'm going to see my grandparents </b><span class=indam>[...]</span><b> 3 days.</b>[sound:rec1361877672.mp3]</span><br>","BACK":"<span style='font-size: 28px; '>Today is Monday. On Thursday I'm going to see my grandparents. <b>I'm going to see my grandparents </b><span class=indam>in</span><b> 3 days.</b>[sound:rec1361877684.mp3]</span><br><span style=''></span><br><span style=''><i>in 3 days - через 3 дня</i></span>","STT":51},
{"FRONT":"<span style='font-size: 28px; '>Don't do this! <b>Don't </b><span class=indam>le____</span><b> your clothes on the floor! </b><i>(put)</i>[sound:rec1361877195.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteffbnyk.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Don't do this! <b>Don't </b><span class=indam>leave</span><b> your clothes on the floor!</b>[sound:rec1361877201.mp3]</span><br><span style=''></span><br><span style=''><i>to leave sth. - оставлять, бросать</i></span>","STT":133},
{"FRONT":"<span style='font-size: 28px; '>My son and I<b> talked </b><span class=indam>[...]</span><b> football</b>.[sound:rec1361879611.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehwos0m.png' /></span><br>","BACK":"<span style='font-size: 28px; '>My son and<b> I talked </b><span class=indam>about</span><b> football.</b>[sound:rec1361879619.mp3]</span><br><span style=''></span><br><span style=''><i>to talk about sth. - говорить, беседовать</i></span>","STT":121},
{"FRONT":"<span style='font-size: 28px; '>When I was a child we had a really nice <span class=indam>__ p____</span> from Germany.<i> (a nanny, usually young and not a professional)</i>[sound:rec1361877779.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehg9hdt.png' /><br /></span><br>","BACK":"<span style='font-size: 28px; '>When I was a child we had a really nice <span class=indam>au pair</span> from Germany.[sound:rec1361877786.mp3]</span><br><span style=''></span><br><span style=''><i>an au pair - няня, гувернантка (не профессиональный)</i></span>","STT":56},
{"FRONT":"<span style='font-size: 28px; '>-What are you planning to do in Spain?[sound:rec1361877528.mp3]<br />-<b>We</b><span class=indam>_________</span><b> and see some friends.</b> <b>(relax)</b><br /><img class='center-block img-responsive hinhdep'  src='paste9wzj0g.png' /></span><br>","BACK":"<span style='font-size: 28px; '><span style='color:#000000;'>-</span><span style='font-weight:600; color:#000000;'>We</span><span class=indam>'re going to relax</span><span style='font-weight:600; color:#000000;'> and see some friends.</span>[sound:rec1361877538.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>be + going to + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>plans</span></span>","STT":46},
{"FRONT":"<span style='font-size: 28px; '>This is the <span class=indam>s____</span> which controls the lights.[sound:rec1359444264.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuxihl2.png' /></span>","BACK":"<span style='font-size: 28px; '>This is the <span class=indam>switch</span> which controls the lights.[sound:rec1359444271.mp3]</span><br><span style=''></span><br><span style=''><i>a switch - включатель</i></span>","STT":131},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1361878358.mp3]<b>He's </b><span class=indam>p_____</span><b> the door.</b><br /><img class='center-block img-responsive hinhdep'  src='pastec244ro.jpg' /></span><br>","BACK":"<span style='font-size: 28px; '><b>He's </b><span class=indam>pulling</span><b> the door.</b>[sound:rec1361878371.mp3]</span><br><span style=''></span><br><span style=''><i>to pull sth. - тянуть</i></span>","STT":80},
{"FRONT":"<span style='font-size: 28px; '>I don't like it. <b>He always points at </b><span class=indam>(I)</span><b> and laughs.</b>[sound:rec1359827172.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexpwkvv.png' /></span>","BACK":"<span style='font-size: 28px; '><b>He always points at </b><span class=indam>me</span><b> and laughs.</b>[sound:rec1359827179.mp3]</span><br><span style=''></span><br><span style=''><i>to point at sb. / sth. - показывать, указывать на кого-л. / что-л.</i></span>","STT":33},
{"FRONT":"<span style='font-size: 28px; '>Look at those clouds. <b>It will </b><span class=indam>p_____</span><b> rain. </b><i>(I think so, but I'm not 100% sure)</i>[sound:rec1361878712.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemeipsp.png' /></span><br>","BACK":"<span style='font-size: 28px; '>Look at those clouds. <b>It will </b><span class=indam>probably</span><b> rain.</b>[sound:rec1361878717.mp3]</span><br><span style=''></span><br><span style=''><i>probably - наверно</i></span>","STT":93},
{"FRONT":"<span style='font-size: 28px; '>-I can't go out tonight. I don't have any money.[sound:rec1361878625.mp3]<br />-<span class=indam>D___ w____</span>.<b> I'll lend you some.</b></span><br>","BACK":"<span style='font-size: 28px; '>-I can't go out tonight. I don't have any money.<br />-<span class=indam>Don't worry</span>. <b>I'll lend you some.</b>[sound:rec1361878635.mp3]</span><br><span style=''></span><br><span style=''><i>Don't worry! - Не волнуйтесь! Не расстраивайся!</i></span>","STT":89},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1361877924.mp3]<b>I'm </b><span class=indam>s_____</span><b> my boyfriend. </b><i>(meeting)</i><br /><img class='center-block img-responsive hinhdep'  src='pastetbqlnq.png' /><br /></span><br>","BACK":"<span style='font-size: 28px; '><b>I'm </b><span class=indam>seeing</span><b> my boyfriend.</b>[sound:rec1361877930.mp3]<br /></span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present continuous</span><i> for</i><span style='font-weight:600; font-style:italic;'> future arrangements</span><i> (already planned events)</i></span>","STT":63},
{"FRONT":"<span style='font-size: 28px; '>What's the matter? <span class=indam>W___</span><b> are you sad?</b>[sound:rec1359368900.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste52rtsv.png' /></span>","BACK":"<span style='font-size: 28px; '>What's the matter? <span class=indam>Why</span><b> are you sad?</b>[sound:rec1359368904.mp3]</span><br><span style=''></span><br><span style=''><i>why...? - почему...?</i></span>","STT":16},
{"FRONT":"<span style='font-size: 28px; '>This <span class=indam>p_____</span> is dirty.[sound:rec1340218874.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefxorsm.png' /></span><br>","BACK":"<span style='font-size: 28px; '><span style='color:#000000;'>This </span><span class=indam>plate</span><span style='color:#000000;'> is dirty.</span>[sound:rec1340218878.mp3]</span><br><span style=''></span><br><span style=''><i>a plate - тарелка</i></span>","STT":0}]

if (localStorage.caumayEn_SG_12 == null) {
    localStorage.caumayEn_SG_12 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_12"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_12+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_12).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_12).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_12).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_12+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_12).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_12).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_12).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_12)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_12))
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
	cau = Number(localStorage.caumayEn_SG_12)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_12)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_12) >  0){
		localStorage.caumayEn_SG_12 = Number(localStorage.caumayEn_SG_12) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_12))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_12)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_12)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_12) < dulieu.length-1){
		localStorage.caumayEn_SG_12 = Number(localStorage.caumayEn_SG_12) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_12))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_12)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_12)].BACK
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
	var current_player = Number(localStorage.caumayEn_SG_12)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_12)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_12)].BACK
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
	cau = Number(localStorage.caumayEn_SG_12)
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
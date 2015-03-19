$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '>She's <span class=indam>w_____</span> a green skirt and orange tights.[sound:rec1362766001.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteedh2wz.png' /></span>","BACK":"<span style='font-size: 28px; '>She's <span class=indam>wearing</span> a green skirt and orange tights.[sound:rec1362766007.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>wear - wore - worn</span><br /><i>to wear - носить</i></span>","STT":23},
{"FRONT":"<span style='font-size: 28px; '>Oh no! <b>I forgot my </b><span class=indam>s_____</span>.[sound:rec1362765794.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1kkte6.png' /></span>","BACK":"<span style='font-size: 28px; '>Oh no!<b> I forgot my</b> <span class=indam>scarf</span>.[sound:rec1362765802.mp3]</span><br><span style=''></span><br><span style=''><i>a scarf - шарф</i></span>","STT":12},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>___________</span> your homework yet? <b>(you / finish)</b>[sound:rec1362766962.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiwnbaw.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Have you finished</span> your homework yet?[sound:rec1362766969.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for </i><span style='font-weight:600; font-style:italic;'>unfinished</span><i> actions</i></span>","STT":55},
{"FRONT":"<span style='font-size: 28px; '>Those shoes cost $10,000! <b>They're </b><span class=indam>______</span><b> shoes she's ever bought.</b> <b>(expensive)</b>[sound:rec1362767998.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexhejma.png' /></span>","BACK":"<span style='font-size: 28px; '>Those shoes cost $10,000! <b>They're </b><span class=indam>the most expensive</span><b> shoes she's ever bought.</b>[sound:rec1362768006.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>expensive - more expensive - the most expensive</span></span>","STT":88},
{"FRONT":"<span style='font-size: 28px; '>This team are playing really well. <span class=indam>_________</span><b> all their matches so far this season.</b> <b>(they / win)</b>[sound:rec1362766799.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1sx1f3.png' /></span>","BACK":"<span style='font-size: 28px; '>This team are playing really well. <span class=indam>They've won</span><b> all their matches so far this season.</b>[sound:rec1362766835.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>win - won - won</span><br><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for actions that </i><span style='font-weight:600; font-style:italic;'>might be continued</span></span>","STT":51},
{"FRONT":"<span style='font-size: 28px; '>This sign means <b>'turn </b><span class=indam>____</span><b>'.</b>[sound:rec1362769310.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteylrrhs.png' /></span>","BACK":"<span style='font-size: 28px; '>This sign means <b>'turn </b><span class=indam>right</span><b>'.</b>[sound:rec1362769346.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":140},
{"FRONT":"<span style='font-size: 28px; '>People today sleep <span class=indam>____</span> than people in the past. <i>(the opposite of 'more')</i>[sound:rec1362768537.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefxdjjc.png' /></span>","BACK":"<span style='font-size: 28px; '>People today sleep <span class=indam>less</span> than people in the past.[sound:rec1362768545.mp3]</span><br><span style=''></span><br><span style=''><i>less - менее</i></span>","STT":107},
{"FRONT":"<span style='font-size: 28px; '>It was very <span class=indam>s______</span> and Andrew fell over on the street.[sound:rec1362768808.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastestitfm.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It was very <span class=indam>slippery</span> and Andrew fell over on the street.[sound:rec1362768815.mp3]</span><br><span style=''></span><br><span style=''><i>slippery (adj.) - скольский</i></span>","STT":118},
{"FRONT":"<span style='font-size: 28px; '>Every morning <b>I </b><span class=indam>m____</span><b> the bed.</b>[sound:rec1362768380.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5bo8sf.png' /></span>","BACK":"<span style='font-size: 28px; '>Every morning <b>I </b><span class=indam>make</span><b> the bed.</b>[sound:rec1362768384.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>make - made - made</span><br /><i>to make </i><span style='font-weight:600; font-style:italic;'>the</span><i> bed - поправлять постель</i></span>","STT":100},
{"FRONT":"<span style='font-size: 28px; '>Children are good learners. <b>Adults don't learn </b><span class=indam>[...]</span><b> fast </b><span class=indam>[...]</span><b> children.</b>[sound:rec1362767566.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehk2sjg.jpg' /></span>","BACK":"<span style='font-size: 28px; '><b>Adults don't learn </b><span class=indam>as</span><b> fast </b><span class=indam>as</span><b> children.</b>[sound:rec1362767572.mp3]</span><br><span style=''></span><br><span style=''><i>as... as... - так... как...</i></span>","STT":76},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>___________</span> the new metro station yet? <b>(they / build)</b>[sound:rec1362766978.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastej4fbvg.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Have they built</span> the new metro station yet?[sound:rec1362766994.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>build - built - built</span><br><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for </i><span style='font-weight:600; font-style:italic;'>unfinished</span><i> actions</i></span>","STT":56},
{"FRONT":"<span style='font-size: 28px; '>-Have you sent me that email?[sound:rec1362767049.mp3]<br />-<b>Yes, </b><span class=indam>_______</span><b> it. (I / just / send)</b><br /><img class='center-block img-responsive hinhdep'  src='pasteeqdcuq.png' /></span>","BACK":"<span style='font-size: 28px; '>-Have you sent me that email?<br />-<b>Yes, </b><span class=indam>I've just sent</span><b> it.</b>[sound:rec1362767054.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>send - sent - sent</span><br /><i>to send sth. - послать, отправить</i><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect </span><i>for </i><span style='font-weight:600; font-style:italic;'>recent</span><i> actions (when you don't say when)</i></span>","STT":58},
{"FRONT":"<span style='font-size: 28px; '>In 2004, <b>my dad took part </b><span class=indam>[...]</span><b> the London marathon.</b>[sound:rec1362766748.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqyq3iw.png' /></span>","BACK":"<span style='font-size: 28px; '>In 2004, <b>my dad took part </b><span class=indam>in</span><b> the London marathon.</b>[sound:rec1362766753.mp3]</span><br><span style=''></span><br><span style=''><i>to take part </i><span style='font-weight:600; font-style:italic;'>in </span><i>sth. - участвовать</i><br></span>","STT":50},
{"FRONT":"<span style='font-size: 28px; '><b>This is the most exciting book </b><span class=indam>________</span><b>! (we / ever / read) </b><i>(in our lives so far)</i>[sound:rec1362768186.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevwiiga.png' /></span>","BACK":"<span style='font-size: 28px; '><b>This is the most exciting book </b><span class=indam>we've ever read</span><b>!</b>[sound:rec1362768191.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>read [reed] - read [red] - read [red]</span><br><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":93},
{"FRONT":"<span style='font-size: 28px; '>-What does this word mean?[sound:rec1362768871.mp3]<br />-<b>Look it up in the dictionary and </b><span class=indam>f____ ____</span><b>! </b><i>(learn sth. new, discover)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteszs90u.png' /></span>","BACK":"<span style='font-size: 28px; '>-<b>Look it up in the dictionary and </b><span class=indam>find out</span><b>!</b>[sound:rec1362768896.mp3]</span><br><span style=''></span><br><span style=''><i>to find sth. out - узнать</i><br></span>","STT":123},
{"FRONT":"<span style='font-size: 28px; '>What do you think of my new <span class=indam>b____</span>? <i>(a shirt for women)</i>[sound:rec1362765827.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastes2q8r9.png' /></span>","BACK":"<span style='font-size: 28px; '>What do you think of my new <span class=indam>blouse</span>?[sound:rec1362765831.mp3]</span><br><span style=''></span><br><span style=''><i>a blouse - блузка</i></span>","STT":14},
{"FRONT":"<span style='font-size: 28px; '>-Have you ever been to Croatia?[sound:rec1362766420.mp3]<br />-<b>Yes, I have. </b><span class=indam>_______</span><b> there twice. (be)</b><br /><img class='center-block img-responsive hinhdep'  src='paste7nnzab.png' /></span>","BACK":"<span style='font-size: 28px; '>-Have you ever been to Croatia?<br />-<b>Yes, I have. </b><span class=indam>I've been</span><b> there twice.</b>[sound:rec1362766427.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":38},
{"FRONT":"<span style='font-size: 28px; '>He's afraid because <span class=indam>_____ never _____</span> <b>before</b>. <b>(he / fly)</b>[sound:rec1362766527.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuq30s6.jpg' /></span>","BACK":"<span style='font-size: 28px; '>He's afraid because <span class=indam>he's never flown</span> <b>before</b>.[sound:rec1362766537.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>fly - flew - flown</span><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":42},
{"FRONT":"<span style='font-size: 28px; '>In summer <b>I like wearing </b><span class=indam>_____</span><b>.</b>[sound:rec1362765877.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5mjkfr.png' /></span>","BACK":"<span style='font-size: 28px; '>In summer <b>I like wearing </b><span class=indam>shorts</span><b>.</b>[sound:rec1362765882.mp3]</span><br><span style=''></span><br><span style=''><i>shorts - шорты</i></span>","STT":17},
{"FRONT":"<span style='font-size: 28px; '>Where are you? <b>We're </b><span class=indam>a_____</span><b> here.</b>[sound:rec1362767179.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastew65xss.png' /></span>","BACK":"<span style='font-size: 28px; '>Where are you? <b>We're </b><span class=indam>already</span><b> here.</b>[sound:rec1362767210.mp3]</span><br><span style=''></span><br><span style=''><i>already - уже</i></span>","STT":64},
{"FRONT":"<span style='font-size: 28px; '>This sign means<b> '</b><span class=indam>t____</span><b> left'.</b> <i>(change directions, go)</i>[sound:rec1362769310.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteibcuyx.png' /></span>","BACK":"<span style='font-size: 28px; '>This sign means <b>'</b><span class=indam>turn</span><b> left'.</b>[sound:rec1362769314.mp3]</span><br><span style=''></span><br><span style=''><i>to turn - повернуть</i></span>","STT":138},
{"FRONT":"<span style='font-size: 28px; '>Here's a difficult question. <b>How </b><span class=indam>____</span><b> was the Titanic?</b>[sound:rec1362767769.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3ftxfi.png' /></span>","BACK":"<span style='font-size: 28px; '><b>How </b><span class=indam>long</span><b> was the Titanic?</b>[sound:rec1362767774.mp3]</span><br><span style=''></span><br><span style=''><i>long (adj.) - длинный</i></span>","STT":83},
{"FRONT":"<span style='font-size: 28px; '>What about South Korea? <b>Have you ever </b><span class=indam>_____</span><b> there?</b>[sound:rec1362766267.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemp5nol.png' /></span>","BACK":"<span style='font-size: 28px; '><b>Have you ever </b><span class=indam>been</span><b> there?</b>[sound:rec1362766280.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>be - was / were - been</span><br><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":33},
{"FRONT":"<span style='font-size: 28px; '>People in Africa have <span class=indam>____</span> money than people in the West. <i>(they are poorer)</i>[sound:rec1362768555.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteirzhxc.png' /></span>","BACK":"<span style='font-size: 28px; '>People in Africa have <span class=indam>less</span> money than people in the West.[sound:rec1362768562.mp3]</span><br><span style=''></span><br><span style=''><i>less - менее</i></span>","STT":108},
{"FRONT":"<span style='font-size: 28px; '>Switzerland is the most beautiful country <span class=indam>_______</span> <span style='font-weight:600; color:#000000;'>to</span>. <b>(I / ever / be)</b>[sound:rec1362767968.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewlpe7w.png' /></span>","BACK":"<span style='font-size: 28px; '>Switzerland is the most beautiful country <span class=indam>I've ever been</span> <b>to</b>.[sound:rec1362767974.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":87},
{"FRONT":"<span style='font-size: 28px; '>The green suitcase <b>isn't </b><span class=indam>[...]</span><b> heavy </b><span class=indam>[...]</span><b> the brown one.</b><i>(the brown one is heavier)</i>[sound:rec1362767464.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqjl5mu.png' /></span>","BACK":"<span style='font-size: 28px; '>The green suitcase <b>isn't </b><span class=indam>as</span><b> heavy </b><span class=indam>as</span><b> the brown one.</b>[sound:rec1362767470.mp3]</span><br><span style=''></span><br><span style=''><i>as... as... - так... как...</i></span>","STT":72},
{"FRONT":"<span style='font-size: 28px; '>When you buy these Kit-kats you get <b>60% </b><span class=indam>_____</span><b> free.</b> <i>(more, bonus)</i>[sound:rec1362768857.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemqxy6p.png' /></span>","BACK":"<span style='font-size: 28px; '>When you buy these Kit-kats you get <b>60% </b><span class=indam>extra</span><b> free.</b>[sound:rec1362768864.mp3]<br /></span><br><span style=''></span><br><span style=''><i>extra (adj.) - дополнительный</i></span>","STT":121},
{"FRONT":"<span style='font-size: 28px; '>Wait a minute. <b>I haven't finished </b><span class=indam>____</span><b>. </b><i>(at this time)</i>[sound:rec1362768971.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterlbhh5.png' /></span>","BACK":"<span style='font-size: 28px; '>Wait a minute. <b>I haven't finished </b><span class=indam>yet</span><b>.</b>[sound:rec1362768979.mp3]</span><br><span style=''></span><br><span style=''><i>yet - пока, до сих пор, уже</i></span>","STT":128},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>c_____</span> her flat once a week.[sound:rec1362768392.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelgbx03.png' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>cleans</span> her flat once a week.[sound:rec1362768396.mp3]</span><br><span style=''></span><br><span style=''><i>to clean sth. - чистить</i></span>","STT":101},
{"FRONT":"<span style='font-size: 28px; '>This is a terrible job. <b>It's probably </b><span class=indam>______</span><b> job he's ever had.</b> <b>(boring)</b>[sound:rec1362768041.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez2kxsb.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's probably </b><span class=indam>the most boring</span><b> job he's ever had.</b>[sound:rec1362768048.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>boring - more boring - the most boring</span></span>","STT":90},
{"FRONT":"<span style='font-size: 28px; '>There are going to be new houses here, but at the moment it's just a <span class=indam>building _____</span>. <i>(a place where something is being built)</i>[sound:rec1362769167.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejrjykc.png' /></span>","BACK":"<span style='font-size: 28px; '>There are going to be new houses here, but at the moment it's just a <span class=indam>building site</span>.[sound:rec1362769175.mp3]</span><br><span style=''></span><br><span style=''><i>a building site - постройка</i><br></span>","STT":136},
{"FRONT":"<span style='font-size: 28px; '>She's wearing a green skirt and orange <span class=indam>t_____</span>.[sound:rec1362765979.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteedh2wz.png' /></span>","BACK":"<span style='font-size: 28px; '>She's wearing a green skirt and orange <span class=indam>tights</span>.[sound:rec1362765985.mp3]</span><br><span style=''></span><br><span style=''><i>tights - колготки</i></span>","STT":22},
{"FRONT":"<span style='font-size: 28px; '>Oh no! <b>I forgot my </b><span class=indam>g____</span><b>.</b>[sound:rec1362766111.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev6y2s1.png' /></span>","BACK":"<span style='font-size: 28px; '>Oh no! <b>I forgot my </b><span class=indam>gloves</span><b>.</b>[sound:rec1362766116.mp3]</span><br><span style=''></span><br><span style=''><i>a glove - перчатки</i><br /><i>a pair of gloves - пара перчаток</i></span>","STT":28},
{"FRONT":"<span style='font-size: 28px; '>This is our favourite book. <b>It's </b><span class=indam>__________</span><b> book we've ever read!</b> <b>(exciting)</b>[sound:rec1362768172.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevwiiga.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's </b><span class=indam>the most exciting</span><b> book we've ever read!</b>[sound:rec1362768179.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>exciting - more exciting - the most exciting</span></span>","STT":92},
{"FRONT":"<span style='font-size: 28px; '>He's a great guy. <b>I think he's the nicest guy </b><span class=indam>__________</span><b>.</b>[sound:rec1362767798.mp3] <b>(I / ever / meet)</b><br /><img class='center-block img-responsive hinhdep'  src='pasteqexvhq.png' /></span>","BACK":"<span style='font-size: 28px; '><b>I think he's the </b><span style='font-weight:600; color:#000000;'>nicest</span><b> guy </b><span class=indam>I've ever met</span><b>.</b>[sound:rec1362767829.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>meet - met - met</span><br><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":85},
{"FRONT":"<span style='font-size: 28px; '>Adults <span class=indam>_____</span> learn as fast as children. <i>(children learn faster)</i>[sound:rec1362767538.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehk2sjg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Adults <span class=indam>don't</span> learn as fast as children.[sound:rec1362767544.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":75},
{"FRONT":"<span style='font-size: 28px; '>-Excuse me. <b>How </b><span class=indam>____</span><b> is my bag?</b>[sound:rec1362767733.mp3]<br />-It's 23kg.<br /><img class='center-block img-responsive hinhdep'  src='paste_lczw8.png' /></span>","BACK":"<span style='font-size: 28px; '>-Excuse me. <b>How </b><span class=indam>heavy</span><b> is my bag?</b>[sound:rec1362767739.mp3]<br />-It's 23kg.</span><br><span style=''></span><br><span style=''><i>heavy (adj.) - тяжелый</i></span>","STT":82},
{"FRONT":"<span style='font-size: 28px; '>My granny made this <span class=indam>j_____</span> for me![sound:rec1362765520.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9taqoo.png' /></span>","BACK":"<span style='font-size: 28px; '>My granny made this <span class=indam>jumper</span> for me![sound:rec1362765526.mp3]</span><br><span style=''></span><br><span style=''><i>a jumper - джемрер</i></span>","STT":6},
{"FRONT":"<span style='font-size: 28px; '>I feel hot; <b>I'm going to </b><span class=indam>t____ ____</span><b> my sweater. </b><i>(remove, stop wearing)</i>[sound:rec1362766044.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7yppsu.png' /></span>","BACK":"<span style='font-size: 28px; '>I feel hot; <b>I'm going to </b><span class=indam>take off</span><b> my sweater.</b>[sound:rec1362766049.mp3]</span><br><span style=''></span><br><span style=''><i>to take sth. off - снимать</i></span>","STT":25},
{"FRONT":"<span style='font-size: 28px; '>My uncle loves running. <span class=indam>_______</span> <b>more than 20 marathons!</b> <b>(he / run)</b>[sound:rec1362766676.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebn4isv.png' /></span>","BACK":"<span style='font-size: 28px; '>My uncle loves running. <span class=indam>He's run</span> <b>more than 20 marathons!</b>[sound:rec1362766689.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>run - ran - run</span><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for actions that </i><span style='font-weight:600; font-style:italic;'>might be continued</span></span>","STT":47},
{"FRONT":"<span style='font-size: 28px; '>Do you <span class=indam>s____</span> money every month? <i>(keep for the future)</i>[sound:rec1362768692.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepptcod.png' /></span>","BACK":"<span style='font-size: 28px; '>Do you <span class=indam>save</span> money every month?[sound:rec1362768708.mp3]</span><br><span style=''></span><br><span style=''><i>to save sth. - копить деньги</i></span>","STT":113},
{"FRONT":"<span style='font-size: 28px; '>They returned <span class=indam>[...]</span> their holiday yesterday.[sound:rec1362768906.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegob_j5.png' /></span>","BACK":"<span style='font-size: 28px; '>They returned <span class=indam>from</span> their holiday yesterday.[sound:rec1362768912.mp3]</span><br><span style=''></span><br><span style=''><i>to return from swh. - возвращаться</i></span>","STT":124},
{"FRONT":"<span style='font-size: 28px; '>I travel a lot for my work: <b>last week I went to Rome, </b><span class=indam>_____</span><b> </b><span class=indam>week</span><b> I'm in New York and next week I'm going to Moscow.</b>[sound:rec1362768617.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedc44fk.png' /></span>","BACK":"<span style='font-size: 28px; '>I travel a lot for my work: <b>last week I went to Rome, </b><span class=indam>this</span><b> </b><span class=indam>week</span><b> I'm in New York and next week I'm going to Moscow.</b>[sound:rec1362768652.mp3]</span><br><span style=''></span><br><span style=''><i>this week - на этой неделе</i></span>","STT":111},
{"FRONT":"<span style='font-size: 28px; '>She's wearing a black dress and a wide <span class=indam>b____</span>.[sound:rec1362765306.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqfatrc.png' /></span>","BACK":"<span style='font-size: 28px; '>She's wearing a black dress and a wide <span class=indam>belt</span>.[sound:rec1362765313.mp3]</span><br><span style=''></span><br><span style=''><i>a belt - ремень</i></span>","STT":3},
{"FRONT":"<span style='font-size: 28px; '>You won't get cold in that <span class=indam>____ hat</span>! <i>(made from an animal)</i>[sound:rec1362768291.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevgo3fy.png' /></span>","BACK":"<span style='font-size: 28px; '>You won't get cold in that <span class=indam>fur hat</span>![sound:rec1362768296.mp3]</span><br><span style=''></span><br><span style=''><i>a fur hat - меховая шапка</i></span>","STT":97},
{"FRONT":"<span style='font-size: 28px; '>-Where's Ali?[sound:rec1362769276.mp3]<br /><b>-He's working </b><span class=indam>[...]</span><b> the building site.</b><br /><img class='center-block img-responsive hinhdep'  src='pastearqtbn.png' /></span>","BACK":"<span style='font-size: 28px; '>-Where's Ali?<br /><b>-He's working </b><span class=indam>on</span><b> the building site.</b>[sound:rec1362769281.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":142},
{"FRONT":"<span style='font-size: 28px; '>Switzerland is number 1. <b>It's </b><span class=indam>_______</span><b> country I've ever been to.</b> <b>(beautiful)</b>[sound:rec1362767933.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewlpe7w.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's </b><span class=indam>the most beautiful</span><b> country I've ever been to.</b>[sound:rec1362767947.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>beautiful - more beautiful - the most beautiful</span></span>","STT":86},
{"FRONT":"<span style='font-size: 28px; '>It's her first time, <span class=indam>_____ never ______</span><b> a horse before</b>. <b>(she / ride)</b>[sound:rec1362766567.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_8sz8y.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It's her first time, <span class=indam>she's never ridden</span> <b>a horse before</b>.[sound:rec1362766573.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>ride - rode - ridden</span><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":44},
{"FRONT":"<span style='font-size: 28px; '>Do you prefer working <span class=indam>_____</span> or inside?[sound:rec1362769113.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevkampu.png' /></span>","BACK":"<span style='font-size: 28px; '>Do you prefer working <span class=indam>outside</span> or inside?[sound:rec1362769126.mp3]<br /><i>also,</i><br />Do you prefer working <b>outdoors</b> or <b>indoors</b>.</span><br><span style=''></span><br><span style=''><i>outside, outdoors - на улице</i></span>","STT":134},
{"FRONT":"<span style='font-size: 28px; '>Have you ever been to <span class=indam>a</span> <span class=indam>f_____ show</span>?[sound:rec1362768321.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyyo9if.png' /></span>","BACK":"<span style='font-size: 28px; '>Have you ever been to <span class=indam>a</span> <span class=indam>fashion show</span>?[sound:rec1362768328.mp3]</span><br><span style=''></span><br><span style=''><i>fashion (n.) - мода</i></span>","STT":98},
{"FRONT":"<span style='font-size: 28px; '>I love <span class=indam>g_____</span>. It's my favourite hobby. <i>(working in the garden)</i>[sound:rec1362768770.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqhovvx.png' /></span>","BACK":"<span style='font-size: 28px; '>I love <span class=indam>gardening</span>. It's my favourite hobby.[sound:rec1362768776.mp3]</span><br><span style=''></span><br><span style=''><i>gardening - садоводство; работа в саду</i></span>","STT":116},
{"FRONT":"<span style='font-size: 28px; '>Do you think this <span class=indam>s_____</span> looks good on me?[sound:rec1362765505.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetpd723.png' /></span>","BACK":"<span style='font-size: 28px; '>Do you think this <span class=indam>sweater</span> looks good on me?[sound:rec1362765511.mp3]</span><br><span style=''></span><br><span style=''><i>a sweater - свитер</i></span>","STT":5},
{"FRONT":"<span style='font-size: 28px; '>I'm too busy! <b>I don't have</b><span class=indam> e_____</span><b> time to do everything!</b>[sound:rec1362768728.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaafw6d.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm too busy! <b>I don't have </b><span class=indam>enough</span><b> time to do everything!</b>[sound:rec1362768734.mp3]</span><br><span style=''></span><br><span style=''><i>enough - достаточно</i></span>","STT":114},
{"FRONT":"<span style='font-size: 28px; '>What does it say? <span class=indam>__________</span> <b>the newspaper yet today</b>? <b>(I / not read)</b>[sound:rec1362766883.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemjgsmr.png' /></span>","BACK":"<span style='font-size: 28px; '>What does it say? <span class=indam>I haven't read</span> <b>the newspaper yet today</b>?[sound:rec1362766892.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>read - read [red] - read [red]</span><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for actions that </i><span style='font-weight:600; font-style:italic;'>might be continued</span></span>","STT":52},
{"FRONT":"<span style='font-size: 28px; '>I travel a lot for my work: <b>last week I went to Rome, this week I'm in New York and </b><span class=indam>____</span><b> </b><span class=indam>week</span><b> I'm going to Moscow.</b>[sound:rec1362768617.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedc44fk.png' /></span>","BACK":"<span style='font-size: 28px; '>I travel a lot for my work: <b>last week I went to Rome, this week I'm in New York and </b><span class=indam>next</span><b> </b><span class=indam>week</span><b> I'm going to Moscow.</b>[sound:rec1362768652.mp3]</span><br><span style=''></span><br><span style=''><i>next week - на следующей неделе</i></span>","STT":112},
{"FRONT":"<span style='font-size: 28px; '>He's a great guy. <b>I think he's the </b><span class=indam>_____</span><b> guy I've ever met.</b> <b>(nice)</b>[sound:rec1362767798.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqexvhq.png' /></span>","BACK":"<span style='font-size: 28px; '><b>I think he's the </b><span class=indam>nicest</span><b> guy I've ever met.</b>[sound:rec1362767829.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>nice - nicer - nicest</span><br /><i>nice (adj.) - приятный, добрый, хороший</i></span>","STT":84},
{"FRONT":"<span style='font-size: 28px; '>Have you ever been to <span class=indam>_____</span>?[sound:rec1362766450.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastengrwks.png' /></span>","BACK":"<span style='font-size: 28px; '>Have you ever been to <span class=indam>Egypt</span>?[sound:rec1362766445.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":39},
{"FRONT":"<span style='font-size: 28px; '>-What does this word mean?[sound:rec1362768871.mp3]<br />-<span class=indam>L____ </span><span style='font-weight:600; color:#000000;'>it</span><span class=indam> ___</span><b> in the dictionary and find out!</b><br /><img class='center-block img-responsive hinhdep'  src='pasteszs90u.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Look</span><b> it </b><span class=indam>up</span><b> in the dictionary and find out!</b>[sound:rec1362768879.mp3]</span><br><span style=''></span><br><span style=''><i>to look sth. up (in the dictionary) - искать (в словаре)</i></span>","STT":122},
{"FRONT":"<span style='font-size: 28px; '>After we have dinner, my husband always <span class=indam>____</span><b> the washing up.</b>[sound:rec1362768432.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehyhrgx.png' /></span>","BACK":"<span style='font-size: 28px; '>After we have dinner, my husband always <span class=indam>does</span><b> the washing up.</b>[sound:rec1362768438.mp3]</span><br><span style=''></span><br><span style=''><i>to do the washing up - помыть посуду</i><br></span>","STT":103},
{"FRONT":"<span style='font-size: 28px; '>Those shoes cost $10,000! They've the most expensive shoes <span class=indam>________</span>. <b>(she / ever / buy)</b>[sound:rec1362767998.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexhejma.png' /></span>","BACK":"<span style='font-size: 28px; '>Those shoes cost $10,000! They've the most expensive shoes <span class=indam>she's ever bought</span>.[sound:rec1362768006.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":89},
{"FRONT":"<span style='font-size: 28px; '>Look at the map. <b>Manchester is further from London </b><span class=indam>[...]</span><b> Oxford.</b>[sound:rec1362767614.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste68zfuz.png' /></span>","BACK":"<span style='font-size: 28px; '><b>Manchester is further from London </b><span class=indam>than</span><b> Oxford.</b>[sound:rec1362767620.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":78},
{"FRONT":"<span style='font-size: 28px; '>I'm going to give my brother these Adidas <span class=indam>t_____</span> for his birthday. [sound:rec1362765915.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteys5ccl.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm going to give my brother these Adidas <span class=indam>trainers</span> for his birthday.[sound:rec1362765938.mp3]</span><br><span style=''></span><br><span style=''><i>trainers - кроссовки</i></span>","STT":20},
{"FRONT":"<span style='font-size: 28px; '>-Have you ever been to <span class=indam>_____</span>?[sound:rec1362766376.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7nnzab.png' /></span>","BACK":"<span style='font-size: 28px; '>-Have you ever been to <span class=indam>Croatia</span>?[sound:rec1362766381.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":36},
{"FRONT":"<span style='font-size: 28px; '>I want to have a shower; <b>please can you give me </b><span class=indam>a ______</span><b>?</b>[sound:rec1362768414.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekmbrsj.png' /></span>","BACK":"<span style='font-size: 28px; '>I want to have a shower; <b>please can you give me </b><span class=indam>a towel</span><b>?</b>[sound:rec1362768419.mp3]</span><br><span style=''></span><br><span style=''><i>a towel - полотенце</i></span>","STT":102},
{"FRONT":"<span style='font-size: 28px; '>It was very slippery and <b>Andrew </b><span class=indam>f____ ____</span><b> on the street.</b>[sound:rec1362768791.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastestitfm.jpg' /></span>","BACK":"<span style='font-size: 28px; '>It was very slippery and <b>Andrew </b><span class=indam>fell over</span><b> on the street.</b>[sound:rec1362768799.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>fall - fell - fallen</span><br /><i>to fall over - упасть</i></span>","STT":117},
{"FRONT":"<span style='font-size: 28px; '>Alice, those are really cool <span class=indam>_____</span>.[sound:rec1362765900.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep4i5j9.png' /></span>","BACK":"<span style='font-size: 28px; '>Alice, those are really cool <span class=indam>boots</span>.[sound:rec1362765905.mp3]</span><br><span style=''></span><br><span style=''><i>boots - ботинки, сапоги</i></span>","STT":19},
{"FRONT":"<span style='font-size: 28px; '>In Russia <span class=indam>f___</span> <span class=indam>c____</span> are very popular.[sound:rec1362765561.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewij4ye.png' /></span>","BACK":"<span style='font-size: 28px; '>In Russia <span class=indam>fur</span> <span class=indam>coats</span> are very popular.[sound:rec1362765730.mp3]</span><br><span style=''></span><br><span style=''><i>a fur coat - шуба</i><br></span>","STT":8},
{"FRONT":"<span style='font-size: 28px; '>I always wear <span class=indam>a</span> <span class=indam>____</span> to work.[sound:rec1362765547.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyjmepc.png' /></span>","BACK":"<span style='font-size: 28px; '>I always wear <span class=indam>a</span> <span class=indam>suit</span> to work.[sound:rec1362765552.mp3]</span><br><span style=''></span><br><span style=''><i>a suit - костюм</i></span>","STT":7},
{"FRONT":"<span style='font-size: 28px; '>Before we went to the church, <b>we </b><span class=indam>___ d_____</span><b> in the hotel.</b> <i>(put on our clothes, prepared)</i>[sound:rec1362766019.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7sbsc4.png' /></span>","BACK":"<span style='font-size: 28px; '>Before we went to the church, <b>we </b><span class=indam>got dressed</span><b> in the hotel.</b>[sound:rec1362766030.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>get - got - got</span><br /><i>to get dressed - одеваться</i></span>","STT":24},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> you ever been to Egypt?[sound:rec1362766483.mp3]<br />-No, I <span class=indam>[...]</span>. I've never been there.<br /><img class='center-block img-responsive hinhdep'  src='pastezayqds.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Have</span> you ever been to Egypt?[sound:rec1362766494.mp3]<br />-No, I <span class=indam>haven't</span>. I've never been there.</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":40},
{"FRONT":"<span style='font-size: 28px; '>Lisa studies a lot. <b>Homer doesn't work </b><span class=indam>[...]</span><b> hard </b><span class=indam>[...]</span><b> Lisa.</b>[sound:rec1362767665.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevieoui.png' /></span>","BACK":"<span style='font-size: 28px; '><b>Homer doesn't work </b><span class=indam>as</span><b> hard </b><span class=indam>as</span><b> Lisa.</b>[sound:rec1362767671.mp3]</span><br><span style=''></span><br><span style=''><i>as... as... - так... как...</i></span>","STT":80},
{"FRONT":"<span style='font-size: 28px; '>Have you ever worn '<span class=indam>f____ d____</span>'? <i>(a special costume for a party)</i>[sound:rec1362766159.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteunnp7g.png' /></span>","BACK":"<span style='font-size: 28px; '>Have you ever worn '<span class=indam>fancy dress</span>'?[sound:rec1362766164.mp3]</span><br><span style=''></span><br><span style=''><i>fancy dress - маскарадный костюм</i></span>","STT":30},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1362769094.mp3]<b>It's a </b><span class=indam>_______</span><b>.</b><br /><img class='center-block img-responsive hinhdep'  src='pastes7_8qc.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's a </b><span class=indam>hammer</span><b>.</b>[sound:rec1362769101.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":133},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>_____</span> you ever been to Croatia?[sound:rec1362766396.mp3]<br />-Yes, I <span class=indam>_____</span>. I've been there twice.<br /><img class='center-block img-responsive hinhdep'  src='paste7nnzab.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Have</span> you ever been to Croatia?[sound:rec1362766408.mp3]<br />-Yes, I <span class=indam>have</span>. I've been there twice.</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":37},
{"FRONT":"<span style='font-size: 28px; '>This is a terrible job. <b>It's probably the most boring job </b><span class=indam>_______</span><b>.</b> <b>(he / ever / have) </b><i>(in his life so far)</i>[sound:rec1362768041.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez2kxsb.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's probably the most boring job </b><span class=indam>he's ever had</span><b>.</b>[sound:rec1362768048.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>have - had - had</span><br><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":91},
{"FRONT":"<span style='font-size: 28px; '>He's wearing a pink <span class=indam>_____</span>.[sound:rec1362765264.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqfragg.png' /></span>","BACK":"<span style='font-size: 28px; '>He's wearing a pink <span class=indam>shirt</span>.[sound:rec1362765269.mp3]</span><br><span style=''></span><br><span style=''><i>a shirt - рубашка</i></span>","STT":1},
{"FRONT":"<span style='font-size: 28px; '>There's a famous childrens' song called '<b>Bananas in </b><span class=indam>p_____</span>'! <i>(clothes for sleeping in)</i>[sound:rec1362765846.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejab161.png' /></span>","BACK":"<span style='font-size: 28px; '>There's a famous childrens' song called '<b>Bananas in </b><span class=indam>pyjamas</span>'![sound:rec1362765852.mp3]</span><br><span style=''></span><br><span style=''><i>pyjamas - рижама</i></span>","STT":15},
{"FRONT":"<span style='font-size: 28px; '>Hi, Rebecca! <b>How </b><span class=indam>____</span><b> are you</b>? <i>(what's your height?)</i>[sound:rec1362767692.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0cgn_g.png' /></span>","BACK":"<span style='font-size: 28px; '>Hi, Rebecca! <b>How </b><span class=indam>tall</span><b> are you</b>?[sound:rec1362767697.mp3]</span><br><span style=''></span><br><span style=''><i>tall - высокий</i></span>","STT":81},
{"FRONT":"<span style='font-size: 28px; '>In 2004, my dad took part in the London <span class=indam>m______</span>. <i>(a 26 mile / 42km running race)</i>[sound:rec1362766728.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqyq3iw.png' /></span>","BACK":"<span style='font-size: 28px; '>In 2004, my dad took part in the London <span class=indam>m</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>rathon</span>.[sound:rec1362766737.mp3]</span><br><span style=''></span><br><span style=''><i>a m</i><span style='font-style:italic; color:#ff5500;'>a</span><i>rathon - марафон</i></span>","STT":49},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>_____ ever ______</span> 'fancy dress' before? <b>(you / wear)</b>[sound:rec1362766146.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteunnp7g.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Have you ever worn</span> 'fancy dress' before?[sound:rec1362766152.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>wear - wore - worn</span><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":29},
{"FRONT":"<span style='font-size: 28px; '>In Britain, <b>tennis isn't </b><span class=indam>[...]</span><b> popular </b><span class=indam>[...]</span><b> football. </b><i>(football is more popular) </i>[sound:rec1362767386.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesps0bf.png' /></span>","BACK":"<span style='font-size: 28px; '>In Britain, <b>tennis isn't </b><span class=indam>as</span><b> popular </b><span class=indam>as</span><b> football.</b>[sound:rec1362767400.mp3]</span><br><span style=''></span><br><span style=''><i>as... as... - так... как...</i></span>","STT":69},
{"FRONT":"<span style='font-size: 28px; '>How dangerous! <b>What a </b><span class=indam>n_____</span><b> road! </b><i>(thin, the opposite of 'wide')</i>[sound:rec1362769033.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezfah6v.png' /></span>","BACK":"<span style='font-size: 28px; '>How dangerous! <b>What a </b><span class=indam>narrow</span><b> road!</b>[sound:rec1362769068.mp3]</span><br><span style=''></span><br><span style=''><i>narrow (adj.) - узкий</i></span>","STT":131},
{"FRONT":"<span style='font-size: 28px; '>She's wearing a black dress and a <span class=indam>w___</span> belt. <i>(the opposite of 'narrow')</i>[sound:rec1362765283.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevrry6a.png' /></span>","BACK":"<span style='font-size: 28px; '>She's wearing a black dress and a <span class=indam>wide</span> belt.[sound:rec1362765296.mp3]</span><br><span style=''></span><br><span style=''><i>wide (adj.) - широкий#</i><br></span>","STT":2},
{"FRONT":"<span style='font-size: 28px; '>My girlfriend wants to buy that <span class=indam>s____</span>.[sound:rec1362765249.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9ldcll.png' /></span>","BACK":"<span style='font-size: 28px; '>My girlfriend wants to buy that <span class=indam>skirt</span>.[sound:rec1362765255.mp3]</span><br><span style=''></span><br><span style=''><i>a skirt - юбка</i></span>","STT":0},
{"FRONT":"<span style='font-size: 28px; '>You're too late.<b> The shop </b><span class=indam>__________</span><b>. (already / close)</b>[sound:rec1362767164.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9gszpy.png' /></span>","BACK":"<span style='font-size: 28px; '>You're too late. <b>The shop </b><span class=indam>has already closed</span><b>.</b>[sound:rec1362767169.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect </span><i>for </i><span style='font-weight:600; font-style:italic;'>recent</span><i> actions (when you don't say when)</i></span>","STT":63},
{"FRONT":"<span style='font-size: 28px; '>They're lawyers; they often work in <span class=indam>c____</span>. <i>(a place where judges and lawyers work, where legal decisions are made)</i>[sound:rec1362768488.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiy6rqh.png' /></span>","BACK":"<span style='font-size: 28px; '>They're lawyers; they often work in <span class=indam>court</span>.[sound:rec1362768493.mp3]</span><br><span style=''></span><br><span style=''><i>a court - суд</i></span>","STT":106},
{"FRONT":"<span style='font-size: 28px; '>The brown suitcase is <span class=indam>_______</span> than the green one. <b>(heavy)</b>[sound:rec1362767508.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqjl5mu.png' /></span>","BACK":"<span style='font-size: 28px; '>The brown suitcase is <span class=indam>heavier</span> than the green one.[sound:rec1362767513.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>heavy - heavier - heaviest</span><br><i>heavy (adj.) - тяжелый</i></span>","STT":74},
{"FRONT":"<span style='font-size: 28px; '>Lisa studies a lot. <b>Homer </b><span class=indam>______</span><b> work as hard as Lisa.</b>[sound:rec1362767644.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevieoui.png' /></span>","BACK":"<span style='font-size: 28px; '><b>Homer </b><span class=indam>doesn't</span><b> work as hard as Lisa.</b>[sound:rec1362767651.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":79},
{"FRONT":"<span style='font-size: 28px; '>I'm not as stong as <span class=indam>(he)</span>![sound:rec1362767418.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexfyj9w.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm not as stong as <span class=indam>him</span>![sound:rec1362767427.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":70},
{"FRONT":"<span style='font-size: 28px; '>-Would you like a coffee?[sound:rec1362767002.mp3]<br /><b>-No thanks.</b> <span class=indam>__________</span><b> one. (I / just / have)</b></span>","BACK":"<span style='font-size: 28px; '>-Would you like a coffee?<br /><b>-No thanks</b>. <span class=indam>I've just had</span> <b>one.</b>[sound:rec1362767009.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>have - had - had</span><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect </span><i>for </i><span style='font-weight:600; font-style:italic;'>recent</span><i> actions (when you don't say when)</i></span>","STT":57},
{"FRONT":"<span style='font-size: 28px; '>-Oh dear. <b>I think </b><span class=indam>________</span><b> an argument. (they / just / have)</b>[sound:rec1362767217.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteph2unc.png' /></span>","BACK":"<span style='font-size: 28px; '>-Oh dear. <b>I think </b><span class=indam>they've just had</span><b> an argument.</b>[sound:rec1362767222.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>have - had - had</span><br /><i>to have an argument - спорить</i></span>","STT":65},
{"FRONT":"<span style='font-size: 28px; '>I travel a lot for my work: <span class=indam>____</span><b> </b><span class=indam>week</span><b> I went to Rome, this week I'm in New York and next week I'm going to Moscow.</b>[sound:rec1362768617.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedc44fk.png' /></span>","BACK":"<span style='font-size: 28px; '>I travel a lot for my work: <span class=indam>last</span><b> </b><span class=indam>week</span><b> I went to Rome, this week I'm in New York and next week I'm going to Moscow.</b>[sound:rec1362768652.mp3]</span><br><span style=''></span><br><span style=''><i>last week - на прошлой неделе</i></span>","STT":110},
{"FRONT":"<span style='font-size: 28px; '>Which phone is better? <b>Let's </b><span class=indam>c______</span><b> them. </b><i>(discuss the differences)</i>[sound:rec1362768275.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterb9x6n.png' /></span>","BACK":"<span style='font-size: 28px; '>Which phone is better? <b>Let's </b><span class=indam>compare</span><b> them.</b>[sound:rec1362768279.mp3]</span><br><span style=''></span><br><span style=''><i>to compare sth. - сравнивать</i></span>","STT":96},
{"FRONT":"<span style='font-size: 28px; '>I can't buy a new car because <b>I don't have </b><span class=indam>e_____</span><b> money.</b> <i>(I have less than I need)</i>[sound:rec1362768754.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepyigli.png' /></span>","BACK":"<span style='font-size: 28px; '>I can't buy a new car because<b> I don't have </b><span class=indam>enough</span><b> money.</b>[sound:rec1362768760.mp3]</span><br><span style=''></span><br><span style=''><i>enough - достаточно</i></span>","STT":115},
{"FRONT":"<span style='font-size: 28px; '>This is what I say: <b>work </b><span class=indam>____</span><b>; play more; enjoy life!</b>[sound:rec1362768569.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteahjpof.png' /></span>","BACK":"<span style='font-size: 28px; '>This is what I say: <b>work </b><span class=indam>less</span><b>; play more; enjoy life!</b>[sound:rec1362768577.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehynx6y.png' /></span><br><span style=''></span><br><span style=''><i>less - менее</i></span>","STT":109},
{"FRONT":"<span style='font-size: 28px; '>Peter, I don't like your new <span class=indam>____</span>![sound:rec1362765777.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste6mwxul.png' /></span>","BACK":"<span style='font-size: 28px; '>Peter, I don't like your new <span class=indam>tie</span>![sound:rec1362765783.mp3]</span><br><span style=''></span><br><span style=''><i>a tie - галстук</i></span>","STT":11},
{"FRONT":"<span style='font-size: 28px; '>Look at this guy! <b>I'm not </b><span class=indam>[...]</span><b> stong </b><span class=indam>[...]</span><b> him!</b>[sound:rec1362767434.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexfyj9w.png' /></span>","BACK":"<span style='font-size: 28px; '><b>I'm not </b><span class=indam>as</span><b> stong </b><span class=indam>as</span><b> him!</b>[sound:rec1362767439.mp3]</span><br><span style=''></span><br><span style=''><i>as... as... - так... как...</i></span>","STT":71},
{"FRONT":"<span style='font-size: 28px; '>That man <span class=indam>_____</span> <b>as tall as his girlfriend</b>. <i>(she's taller than him) </i>[sound:rec1362767305.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesopmud.png' /></span>","BACK":"<span style='font-size: 28px; '>That man <span class=indam>isn't</span> <b>as tall as his girlfriend.</b>[sound:rec1362767312.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":66},
{"FRONT":"<span style='font-size: 28px; '>After we have dinner, my husband always <b>does</b> <span class=indam>___ w______ ___</span>. <i>(cleans the plates etc.)</i>[sound:rec1362768432.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehyhrgx.png' /></span>","BACK":"<span style='font-size: 28px; '>After we have dinner, my husband always <b>does</b> <span class=indam>the washing up</span>.[sound:rec1362768438.mp3]</span><br><span style=''></span><br><span style=''><i>to do the washing up - помыть посуду</i></span>","STT":104},
{"FRONT":"<span style='font-size: 28px; '>Have you finished your homework <span class=indam>_____</span>? <i>(by now)</i>[sound:rec1362768936.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiwnbaw.png' /></span>","BACK":"<span style='font-size: 28px; '>Have you finished your homework <span class=indam>yet</span>?[sound:rec1362768941.mp3]</span><br><span style=''></span><br><span style=''><i>yet - пока, до сих пор, уже</i></span>","STT":126},
{"FRONT":"<span style='font-size: 28px; '>What's going on? Why is everyone just in their <span class=indam>u______</span>? <i>(clothes that you wear close to your skin, for example pants, bra etc.)</i>[sound:rec1362769357.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelo8wem.jpg' /><br /></span>","BACK":"<span style='font-size: 28px; '>What's going on? Why is everyone just in their <span class=indam>underwear</span>?[sound:rec1362769364.mp3]<br /></span><br><span style=''></span><br><span style=''><i>underwear - нижнее белье</i><br></span>","STT":141},
{"FRONT":"<span style='font-size: 28px; '>-James looks tired.<br />-<b>Yes, </b><span class=indam>__________</span><b>. (he / just / wake up)</b>[sound:rec1362767061.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastealu574.png' /></span>","BACK":"<span style='font-size: 28px; '>-James looks tired.<br />-<b>Yes, </b><span class=indam>he's just woken up</span><b>.</b>[sound:rec1362767068.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>wake up - woke up - woken up</span><br /><i>to wake up - просыпаться</i><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect </span><i>for </i><span style='font-weight:600; font-style:italic;'>recent</span><i> actions (when you don't say when)</i></span>","STT":59},
{"FRONT":"<span style='font-size: 28px; '>Do you prefer working outside or <span class=indam>______</span>?[sound:rec1362769134.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevkampu.png' /></span>","BACK":"<span style='font-size: 28px; '>Do you prefer working outside or <span class=indam>inside</span>?[sound:rec1362769142.mp3]<br /><i>also,</i><br />Do you prefer working <b>outdoors</b> or <b>indoors</b>.</span><br><span style=''></span><br><span style=''><i>inside, indoors - в помещении</i><br></span>","STT":135},
{"FRONT":"<span style='font-size: 28px; '>Manchester is <span class=indam>______</span> from London than Oxford. <b>(far)</b>[sound:rec1362767581.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste68zfuz.png' /></span>","BACK":"<span style='font-size: 28px; '>Manchester is <span class=indam>further</span> from London than Oxford.[sound:rec1362767589.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>far - further - the furthest</span><br><i>far - далекий</i></span>","STT":77},
{"FRONT":"<span style='font-size: 28px; '>They've never done anything like this before. <b>This is </b><span class=indam>_________</span><b> thing they've ever done.</b> <b>(dangerous)</b>[sound:rec1362768236.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevohere.png' /></span>","BACK":"<span style='font-size: 28px; '><b>This is </b><span class=indam>the most dangerous</span><b> thing they've ever done.</b>[sound:rec1362768244.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>dangerous - more dangerous - the most dangerous</span></span>","STT":94},
{"FRONT":"<span style='font-size: 28px; '>The green suitcase <span class=indam>____</span> <b>as heavy as the brown one</b>. <i>(the brown one is heavier) </i>[sound:rec1362767294.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqjl5mu.png' /></span>","BACK":"<span style='font-size: 28px; '>The green suitcase <span class=indam>isn't</span> <b>as heavy as the brown one</b>.[sound:rec1362767299.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":67},
{"FRONT":"<span style='font-size: 28px; '>-Have you ever been to South Korea?<br />-<b>Yes, I have. I </b><span class=indam>____</span><b> there when I was a child.</b> <b>(go)</b>[sound:rec1362766310.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemp5nol.png' /></span>","BACK":"<span style='font-size: 28px; '>-Have you ever been to South Korea?<br />-<b>Yes, I have. I </b><span class=indam>went</span><b> there when I was a child.</b>[sound:rec1362766317.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>go - went - gone</span><br /><i>use </i><span style='font-weight:600; font-style:italic;'>past simple </span><i>when you say </i><span style='font-weight:600; font-style:italic;'>when</span><i> a past event happened </i></span>","STT":34},
{"FRONT":"<span style='font-size: 28px; '>What's this band? <span class=indam>____ never _____</span><b> them before. </b><b>(I / hear)</b>[sound:rec1362766629.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiij8bl.png' /></span>","BACK":"<span style='font-size: 28px; '>What's this band? <span class=indam>I've never heard</span><b> them before.</b>[sound:rec1362766652.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>hear - heard - heard</span><br><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":46},
{"FRONT":"<span style='font-size: 28px; '>-Do you want to watch this film?<br />-<b>No, </b><span class=indam>__________</span><b> it three times. (I / already / see)</b>[sound:rec1362767103.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevtd33n.png' /></span>","BACK":"<span style='font-size: 28px; '>-Do you want to watch this film?<br />-<b>No, </b><span class=indam>I've already seen</span><b> it three times.</b>[sound:rec1362767111.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>see - saw - seen</span><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":61},
{"FRONT":"<span style='font-size: 28px; '>I hope this tastes good - <span class=indam>____ never _____</span><b> sushi before</b>. <b>(I / eat)</b>[sound:rec1362766549.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1mkzww.png' /></span>","BACK":"<span style='font-size: 28px; '>I hope this tastes good - <span class=indam>I've never eaten</span> <b>sushi before</b>.[sound:rec1362766555.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>eat - ate - eaten</span><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":43},
{"FRONT":"<span style='font-size: 28px; '>These <span class=indam>______</span> are really warm.[sound:rec1362765957.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejmfw4s.png' /></span>","BACK":"<span style='font-size: 28px; '>These <span class=indam>socks</span> are really warm.[sound:rec1362765962.mp3]</span><br><span style=''></span><br><span style=''><i>a sock - носки</i><br /><i>a pair of socks - пара носков</i></span>","STT":21},
{"FRONT":"<span style='font-size: 28px; '>Hi, Rebecca!<b> </b><span class=indam>____</span><b> tall are you?</b>[sound:rec1362769084.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0cgn_g.png' /></span>","BACK":"<span style='font-size: 28px; '>Hi, Rebecca! <span class=indam>How</span><b> tall are you?</b>[sound:rec1362769088.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":132},
{"FRONT":"<span style='font-size: 28px; '>When I play football <b>I wear a </b><span class=indam>_____suit</span><b>.</b>[sound:rec1362765814.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevjjdqa.png' /></span>","BACK":"<span style='font-size: 28px; '>When I play football <b>I wear a </b><span class=indam>tracksuit</span><b>.</b>[sound:rec1362765819.mp3]</span><br><span style=''></span><br><span style=''><i>a tracksuit - тренировочный костюм</i></span>","STT":13},
{"FRONT":"<span style='font-size: 28px; '>Please don't wear <span class=indam>j_____</span> to work![sound:rec1362765860.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetczxre.png' /></span>","BACK":"<span style='font-size: 28px; '>Please don't wear <span class=indam>jeans</span> to work![sound:rec1362765866.mp3]</span><br><span style=''></span><br><span style=''><i>jeans - джинсы</i></span>","STT":16},
{"FRONT":"<span style='font-size: 28px; '>-Where's Alexander?[sound:rec1362767139.mp3]<br />-<b>He's not here.</b> <span class=indam>___________</span> <b>home. (he / already / go)</b><br /><img class='center-block img-responsive hinhdep'  src='pastenhivak.png' /></span>","BACK":"<span style='font-size: 28px; '>-<b>He's not here. </b><span class=indam>He's already gone</span> <b>home.</b>[sound:rec1362767156.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>go - went - gone</span><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect </span><i>for </i><span style='font-weight:600; font-style:italic;'>recent</span><i> actions (when you don't say when)</i></span>","STT":62},
{"FRONT":"<span style='font-size: 28px; '>Her new <span class=indam>_____</span> is very fashionable.[sound:rec1362765741.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastea_lwoq.png' /></span>","BACK":"<span style='font-size: 28px; '>Her new <span class=indam>coat</span> is very fashionable.[sound:rec1362765746.mp3]</span><br><span style=''></span><br><span style=''><i>a coat - пальто, куртка</i></span>","STT":9},
{"FRONT":"<span style='font-size: 28px; '>Her new coat is very <span class=indam>f_____</span>. <i>(it's in fashion, expensive, popular)</i>[sound:rec1362765754.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastea_lwoq.png' /></span>","BACK":"<span style='font-size: 28px; '>Her new coat is very <span class=indam>fashionable</span>.[sound:rec1362765759.mp3]</span><br><span style=''></span><br><span style=''><i>fashionable (adj.) - модный, </i></span>","STT":10},
{"FRONT":"<span style='font-size: 28px; '>This programme's boring; <b>I'm going to </b><span class=indam>_____</span><b> the channel. </b><i>(watch a different channel)</i>[sound:rec1362768472.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8pyzdl.png' /></span>","BACK":"<span style='font-size: 28px; '>This programme's boring;<b> I'm going to </b><span class=indam>change</span><b> the channel.</b>[sound:rec1362768478.mp3]</span><br><span style=''></span><br><span style=''><i>to change sth. - изменять</i></span>","STT":105},
{"FRONT":"<span style='font-size: 28px; '>I need to buy some <span class=indam>tea ____</span>.[sound:rec1362768836.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteawjyef.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>I need to buy some <span class=indam>tea bags</span>.[sound:rec1362768840.mp3]<br /></span><br><span style=''></span><br><span style=''><i>a tea bag - чайный пакетик</i></span>","STT":120},
{"FRONT":"<span style='font-size: 28px; '>He's looking for a job <b>but </b><span class=indam>_________</span><b> one yet</b>. <b>(he / not find)</b>[sound:rec1362766939.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekxfqej.png' /></span>","BACK":"<span style='font-size: 28px; '>He's looking for a job <b>but </b><span class=indam>he hasn't found</span><b> one yet.</b>[sound:rec1362766954.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for actions that </i><span style='font-weight:600; font-style:italic;'>might be continued</span></span>","STT":54},
{"FRONT":"<span style='font-size: 28px; '>This is my favourite <span class=indam>_____</span> <span class=indam>shop</span>.[sound:rec1362765888.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8mirwq.png' /></span>","BACK":"<span style='font-size: 28px; '>This is my favourite <span class=indam>shoe</span> <span class=indam>shop</span>.[sound:rec1362765892.mp3]</span><br><span style=''></span><br><span style=''><i>shoes - обувь, туфли</i></span>","STT":18},
{"FRONT":"<span style='font-size: 28px; '>He's looking for a job and he hasn't found one <span class=indam>_____</span>. <i>(by now)</i>[sound:rec1362768950.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekxfqej.png' /></span>","BACK":"<span style='font-size: 28px; '>He's looking for a job and he hasn't found one <span class=indam>yet</span>.[sound:rec1362768963.mp3]</span><br><span style=''></span><br><span style=''><i>yet - пока, до сих пор, уже</i></span>","STT":127},
{"FRONT":"<span style='font-size: 28px; '>This sign means<b> 'turn </b><span class=indam>_____</span><b>'.</b>[sound:rec1362769310.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteibcuyx.png' /></span>","BACK":"<span style='font-size: 28px; '>This sign means<b> 'turn </b><span class=indam>left</span><b>'.</b>[sound:rec1362769314.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":139},
{"FRONT":"<span style='font-size: 28px; '>The green suitcase isn't as <span class=indam>h____</span> as the brown one.[sound:rec1362767491.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqjl5mu.png' /></span>","BACK":"<span style='font-size: 28px; '>The green suitcase isn't as <span class=indam>heavy</span> as the brown one.[sound:rec1362767497.mp3]</span><br><span style=''></span><br><span style=''><i>heavy (adj.) - тяжелый</i></span>","STT":73},
{"FRONT":"<span style='font-size: 28px; '>That Nike <span class=indam>______</span> is quite expensive.[sound:rec1362765322.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_ysbwv.png' /></span>","BACK":"<span style='font-size: 28px; '>That Nike <span class=indam>T-shirt</span> is quite expensive.[sound:rec1362765332.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":4},
{"FRONT":"<span style='font-size: 28px; '>Amy <span class=indam>t____ ___</span> the dress in the shop, but she didn't buy it. <i>(wore it for a short time to see if she liked it)</i>[sound:rec1362766064.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9rnlkw.png' /></span>","BACK":"<span style='font-size: 28px; '>Amy <span class=indam>tried on</span> the dress in the shop, but she didn't buy it.[sound:rec1362766071.mp3]</span><br><span style=''></span><br><span style=''><i>to try sth. on - применять</i></span>","STT":26},
{"FRONT":"<span style='font-size: 28px; '>-They look suntanned!<br />-<b>I know, </b><span class=indam>____________</span><b> from their holiday.</b> <b>(they / just / return)</b>[sound:rec1362767083.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegob_j5.png' /></span>","BACK":"<span style='font-size: 28px; '>-They look suntanned!<br />-<b>I know, </b><span class=indam>they've just returned</span><b> from their holiday.</b>[sound:rec1362767093.mp3]</span><br><span style=''></span><br><span style=''><i>to return from swh. - возвращаться</i><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect </span><i>for </i><span style='font-weight:600; font-style:italic;'>recent</span><i> actions (when you don't say when)</i></span>","STT":60},
{"FRONT":"<span style='font-size: 28px; '>Stockholm isn't <span class=indam>[...]</span> big <span class=indam>[...]</span> Moscow. <i>(Moscow is bigger)</i>[sound:rec1362767350.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebwew8a.png' /></span>","BACK":"<span style='font-size: 28px; '>Stockholm isn't <span class=indam>as</span> big <span class=indam>as</span> Moscow.[sound:rec1362767355.mp3]</span><br><span style=''></span><br><span style=''><i>as... as... - так... как...</i></span>","STT":68},
{"FRONT":"<span style='font-size: 28px; '>In 2004, <b>my dad </b><span class=indam>____ part</span><b> in the London marathon. (take)</b>[sound:rec1362766711.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqyq3iw.png' /></span>","BACK":"<span style='font-size: 28px; '>In 2004, <b>my dad </b><span class=indam>took part</span><b> in the London marathon.</b>[sound:rec1362766718.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>take - took - taken</span><br /><i>to take part - принять участвие</i></span>","STT":48},
{"FRONT":"<span style='font-size: 28px; '>-Have you ever been to Egypt?[sound:rec1362766508.mp3]<br />-<b>No, I haven't. </b><span class=indam>____ never ____</span><b> there. (I / be)</b><br /><img class='center-block img-responsive hinhdep'  src='pastejd9zve.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Have you ever been to Egypt?<br />-<b>No, I haven't. </b><span class=indam>I've never been</span><b> there.</b>[sound:rec1362766514.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":41},
{"FRONT":"<span style='font-size: 28px; '>This sign means <b>'go </b><span class=indam>s____ a_____</span><b>'.</b>[sound:rec1362769296.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenc5ucu.png' /></span>","BACK":"<span style='font-size: 28px; '>This sign means <b>'go </b><span class=indam>straight ahead</span><b>'.</b>[sound:rec1362769301.mp3]</span><br><span style=''></span><br><span style=''><i>straight ahead - прямо</i></span>","STT":137},
{"FRONT":"<span style='font-size: 28px; '>Have you ever been to <span class=indam>_____ _____</span>?[sound:rec1362766370.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemp5nol.png' /></span>","BACK":"<span style='font-size: 28px; '>Have you ever been to <span class=indam>South Korea</span>?[sound:rec1362766365.mp3]</span><br><span style=''></span><br><span style=''></span>","STT":35},
{"FRONT":"<span style='font-size: 28px; '>My sister's a writer. <span class=indam>___________</span> <b>seven novels so far.</b> <b>(she / write)</b>[sound:rec1362766602.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehesvke.png' /></span>","BACK":"<span style='font-size: 28px; '>My sister's a writer. <span class=indam>She's written</span> <b>seven novels so far.</b>[sound:rec1362766617.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>write - wrote - written</span><br><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for actions that </i><span style='font-weight:600; font-style:italic;'>might be continued</span></span>","STT":45},
{"FRONT":"<span style='font-size: 28px; '>Look! <b>I can </b><span class=indam>p____ ___</span><b> my socks by myself. </b><i>(start wearing)</i>[sound:rec1362766095.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastex63qra.png' /></span>","BACK":"<span style='font-size: 28px; '>Look!<b> I can </b><span class=indam>put on</span><b> my socks by myself.</b>[sound:rec1362766101.mp3]</span><br><span style=''></span><br><span style=''><i>to put sth. on - надевать</i></span>","STT":27},
{"FRONT":"<span style='font-size: 28px; '>Have they built the new metro station <span class=indam>____</span>?[sound:rec1362768924.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastej4fbvg.png' /></span>","BACK":"<span style='font-size: 28px; '>Have they built the new metro station <span class=indam>yet</span>?[sound:rec1362768930.mp3]</span><br><span style=''></span><br><span style=''><i>yet - пока, до сих пор, уже</i></span>","STT":125},
{"FRONT":"<span style='font-size: 28px; '>Wait a minute. <span class=indam>____________</span> <b>yet</b>. <b>(I / not finish)</b>[sound:rec1362766916.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterlbhh5.png' /></span>","BACK":"<span style='font-size: 28px; '>Wait a minute. <span class=indam>I haven't finished</span><b> yet.</b>[sound:rec1362766920.mp3]</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for actions that </i><span style='font-weight:600; font-style:italic;'>might be continued</span></span>","STT":53},
{"FRONT":"<span style='font-size: 28px; '>I like this chair - <b>it's really </b><span class=indam>co______</span><b>.</b> <i>(easy to sit in, soft, relaxing)</i>[sound:rec1362768825.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3575ot.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>I like this chair - <b>it's really </b><span class=indam>c</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>mfortable</span><b>.</b>[sound:rec1362768830.mp3]<br /></span><br><span style=''></span><br><span style=''><i>c</i><span style='font-style:italic; color:#ff5500;'>o</span><i>mfortable (adj.) - удобный</i></span>","STT":119},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1362768354.mp3]<b>She's </b><span class=indam>t____ ___</span><b> his trousers. </b><i>(removing)</i><br /><img class='center-block img-responsive hinhdep'  src='paste92vlhe.png' /></span>","BACK":"<span style='font-size: 28px; '><b>She's </b><span class=indam>taking off</span><b> his trousers.</b>[sound:rec1362768364.mp3]</span><br><span style=''></span><br><span style=''><i>to take sth. off - снимать</i></span>","STT":99},
{"FRONT":"<span style='font-size: 28px; '>Oh no! <b>I think </b><span class=indam>________</span><b> my keys! (I / just / lose)</b>[sound:rec1362768988.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepeuebu.png' /></span>","BACK":"<span style='font-size: 28px; '>Oh no! <b>I think </b><span class=indam>I've just lost</span><b> my keys!</b>[sound:rec1362769004.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>lose - lost - lost</span><br /><i>to lose sth. - терять</i></span>","STT":129},
{"FRONT":"<span style='font-size: 28px; '>This is the most dangerous thing <span class=indam>__________</span>. <b>(they / ever / do) </b><i>(in their lives so far)</i>[sound:rec1362768258.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevohere.png' /></span>","BACK":"<span style='font-size: 28px; '>This is the most dangerous thing <span class=indam>they've ever done</span>.[sound:rec1362768263.mp3]<br /></span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>do - did - done</span><br><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":95},
{"FRONT":"<span style='font-size: 28px; '>She's a very good teacher. <b>In fact, I think she's </b><span class=indam>_______</span><b> I've ever had.</b>[sound:rec1362769015.mp3] <b>(good)</b><br /><img class='center-block img-responsive hinhdep'  src='pasteehveiv.png' /></span>","BACK":"<span style='font-size: 28px; '>She's a very good teacher. <b>In fact, I think she's </b><span class=indam>the</span><b> </b><span class=indam>best</span><b> I've ever had.</b>[sound:rec1362769023.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>good - better - best</span></span>","STT":130},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>_____</span> you ever been to South Korea?<br />-Yes, I <span class=indam>_____</span>. I went there when I was a child.[sound:rec1362766199.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemp5nol.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Have</span> you ever been to South Korea?[sound:rec1362766211.mp3]<br />-Yes, I <span class=indam>have</span>. I went there when I was a child.</span><br><span style=''></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span><br></span>","STT":32},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>_____ ever _____</span> clothes from that shop before? <b>(you / buy)</b>[sound:rec1362766176.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemnet5v.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Have you ever bought</span> clothes from that shop before?[sound:rec1362766184.mp3]</span><br><span style=''></span><br><span style=''><span style='font-weight:600; font-style:italic;'>buy - bought - bought</span><br /><i>use </i><span style='font-weight:600; font-style:italic;'>present perfect</span><i> for experiences in a living person's </i><span style='font-weight:600; font-style:italic;'>whole life</span></span>","STT":31}]

if (localStorage.caumayEn_SG_13 == null) {
    localStorage.caumayEn_SG_13 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_13"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_13+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_13).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_13).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_13).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_13+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_13).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_13).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_13).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_13)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_13))
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
	cau = Number(localStorage.caumayEn_SG_13)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_13)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_13) >  0){
		localStorage.caumayEn_SG_13 = Number(localStorage.caumayEn_SG_13) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_13))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_13)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_13)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_13) < dulieu.length-1){
		localStorage.caumayEn_SG_13 = Number(localStorage.caumayEn_SG_13) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_13))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_13)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_13)].BACK
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
	var current_player = Number(localStorage.caumayEn_SG_13)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_13)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_13)].BACK
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
	cau = Number(localStorage.caumayEn_SG_13)
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
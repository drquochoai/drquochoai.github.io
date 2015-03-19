$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '>The plane flew very low <span class=indam>[...]</span> the beach.[sound:rec1367145776.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastej54rnw.png' /></span>","BACK":"<span style='font-size: 28px; '>The plane flew very low <span class=indam>over</span> the beach.[sound:rec1367145782.mp3]</span><br><span style=''><i>over - над</i></span>","STT":117},
{"FRONT":"<span style='font-size: 28px; '>In football, two <span class=indam>t____</span> play against each other.[sound:rec1367145134.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9c2qwm.png' /></span>","BACK":"<span style='font-size: 28px; '>In football, two <span class=indam>teams</span> play against each other.[sound:rec1367145142.mp3]</span><br><span style=''><i>a team - команда</i></span>","STT":89},
{"FRONT":"<span style='font-size: 28px; '>When my grandmother was 80<b> she stopped </b><span class=indam>(drive)</span><b>.</b>[sound:rec1367143365.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuupzfy.png' /></span>","BACK":"<span style='font-size: 28px; '>When my grandmother was 80<b> she stopped </b><span class=indam>driving</span>.[sound:rec1367143375.mp3]</span><br><span style=''><i>to stop + -ing</i></span>","STT":42},
{"FRONT":"<span style='font-size: 28px; '>Every day I walk <span class=indam>[...]</span> Waterloo Bridge.[sound:rec1367145369.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastex4hvfj.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>Every day I walk <span class=indam>over</span> Waterloo Bridge.[sound:rec1367145382.mp3]<br /></span><br><span style=''><i>over - над</i></span>","STT":100},
{"FRONT":"<span style='font-size: 28px; '>I walked <span class=indam>[...]</span> the cafe, but I didn't go inside.[sound:rec1367145857.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekzpwdb.png' /></span>","BACK":"<span style='font-size: 28px; '>I walked <span class=indam>past</span> the cafe, but I didn't go inside.[sound:rec1367145863.mp3]</span><br><span style=''><i>past - мимо</i></span>","STT":120},
{"FRONT":"<span style='font-size: 28px; '>In Switzerland we drove through a long <span class=indam>t____</span>.[sound:rec1367145310.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenkxgxa.png' /></span>","BACK":"<span style='font-size: 28px; '>In Switzerland we drove through a long <span class=indam>tunnel</span>.[sound:rec1367145318.mp3]</span><br><span style=''><i>a tunnel - туннель</i></span>","STT":98},
{"FRONT":"<span style='font-size: 28px; '>Look! Some ducks are <span class=indam>c____</span> the road. <i>(going across)</i>[sound:rec1367145398.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_p4249.png' /></span>","BACK":"<span style='font-size: 28px; '>Look! Some ducks are <span class=indam>crossing</span> the road.[sound:rec1367145404.mp3]</span><br><span style=''><i>to cross sth. - переходить</i></span>","STT":101},
{"FRONT":"<span style='font-size: 28px; '>I felt so tired that <b>it was hard </b><span class=indam>(not fall)</span><b> asleep.</b>[sound:rec1367142481.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyqenii.png' /></span>","BACK":"<span style='font-size: 28px; '>I felt so tired that <b>it was hard </b><span class=indam>not to fall</span><b> asleep.</b>[sound:rec1367142494.mp3]</span><br><span style=''><i>adjective + to + infinitive</i></span>","STT":20},
{"FRONT":"<span style='font-size: 28px; '>I hate this. <span class=indam>(Go)</span> <b>shopping makes me really stressed.</b>[sound:rec1367143553.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehvr8bs.png' /></span>","BACK":"<span style='font-size: 28px; '>I hate this. <span class=indam>Going</span> <b>shopping makes me really stressed.</b>[sound:rec1367143560.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>-ing</span><i> as the </i><span style='font-weight:600; font-style:italic;'>subject</span><i> of a sentence</i></span>","STT":51},
{"FRONT":"<span style='font-size: 28px; '>Films are okay. <b>I don't mind </b><span class=indam>(go)</span><b> to the cinema, but I don't love it</b>.[sound:rec1367143238.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste6xouxq.png' /></span>","BACK":"<span style='font-size: 28px; '>Films are okay.<b> I don't mind </b><span class=indam>going</span><b> to the cinema, but I don't love it.</b>[sound:rec1367143259.mp3]</span><br><span style=''><i>don't mind + -ing</i></span>","STT":39},
{"FRONT":"<span style='font-size: 28px; '>Would you like to go to <span class=indam>a</span> <span class=indam>k____</span> <span class=indam>bar</span> this evening? <i>(a place where guests can sing)</i>[sound:rec1367143454.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteco8da2.png' /></span>","BACK":"<span style='font-size: 28px; '>Would you like to go to <span class=indam>a</span> <span class=indam>karaoke</span> <span class=indam>bar</span> this evening?[sound:rec1367143460.mp3]</span><br><span style=''></span>","STT":45},
{"FRONT":"<span style='font-size: 28px; '>She isn't clever. In fact, <b>she's incredibly </b><span class=indam>s_____</span><b>.</b>[sound:rec1367144965.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5yitoq.png' /></span>","BACK":"<span style='font-size: 28px; '>She isn't clever. In fact, <b>she's incredibly </b><span class=indam>stupid</span><b>.</b>[sound:rec1367144971.mp3]</span><br><span style=''><i>stupid - глупый</i></span>","STT":81},
{"FRONT":"<span style='font-size: 28px; '>We walked <span class=indam>[...]</span> the forest for 3 days.[sound:rec1367145760.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehxh5oa.png' /></span>","BACK":"<span style='font-size: 28px; '>We walked <span class=indam>through</span> the forest for 3 days.[sound:rec1367145766.mp3]</span><br><span style=''><i>through - по</i></span>","STT":116},
{"FRONT":"<span style='font-size: 28px; '>Did you know that Elton John is really <span class=indam>p_____</span> in Russia? <i>(lots of people like him)</i>[sound:rec1367147485.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewg9qdz.png' /></span>","BACK":"<span style='font-size: 28px; '>Did you know that Elton John is really <span class=indam>p</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>pular</span> in Russia?[sound:rec1367147497.mp3]</span><br><span style=''><i>popular (adj.) - популярный</i></span>","STT":141},
{"FRONT":"<span style='font-size: 28px; '>In tennis you have to hit the ball over the <span class=indam>n____</span>.[sound:rec1367145553.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0go0av.png' /></span>","BACK":"<span style='font-size: 28px; '>In tennis you have to hit the ball over the <span class=indam>net</span>.[sound:rec1367145558.mp3]</span><br><span style=''><i>a net - сеть</i></span>","STT":109},
{"FRONT":"<span style='font-size: 28px; '>The cars drove <span class=indam>[...]</span> the track 12 times.[sound:rec1367145741.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastea7vbvx.png' /></span>","BACK":"<span style='font-size: 28px; '>The cars drove <span class=indam>around</span> the track 12 times.[sound:rec1367145749.mp3]<br /><i>or,</i><br />The cars drove <span class=indam>round</span> the track 12 times.</span><br><span style=''><i>around, round - вокруг</i></span>","STT":115},
{"FRONT":"<span style='font-size: 28px; '>I stood still and she <b>walked </b><span class=indam>t____</span><b> me very slowly</b>.[sound:rec1367145891.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewqcenq.png' /></span>","BACK":"<span style='font-size: 28px; '>I stood still and she <b>walked </b><span class=indam>towards</span><b> me very slowly.</b>[sound:rec1367145900.mp3]</span><br><span style=''><i>towards - к (движение)</i></span>","STT":121},
{"FRONT":"<span style='font-size: 28px; '>We aren't happy with our lives in England. <b>We dream of </b><span class=indam>(move)</span><b> to Australia.</b>[sound:rec1367143088.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0xtl4p.png' /></span>","BACK":"<span style='font-size: 28px; '>We aren't happy with our lives in England. <b>We dream of </b><span class=indam>moving</span><b> to Australia.</b>[sound:rec1367143106.mp3]</span><br><span style=''><i>dream of + -ing</i></span>","STT":35},
{"FRONT":"<span style='font-size: 28px; '>Look at this!<b> I think we need </b><span class=indam>(buy)</span><b> some food!</b>[sound:rec1367142568.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten_ohx9.png' /></span>","BACK":"<span style='font-size: 28px; '><b>I think we need </b><span class=indam>to buy</span><b> some food!</b>[sound:rec1367142574.mp3]</span><br><span style=''><i>need + to + infinitive</i></span>","STT":22},
{"FRONT":"<span style='font-size: 28px; '>On Saturday I went for a walk <span class=indam>in the</span> <span class=indam>f_____</span>. <i>(a place where there are lots of trees)</i>[sound:rec1367142925.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteskt120.png' /></span>","BACK":"<span style='font-size: 28px; '>On Saturday I went for a walk <span class=indam>in the forest</span>.[sound:rec1367142930.mp3]</span><br><span style=''><i>a forest - лес</i></span>","STT":29},
{"FRONT":"<span style='font-size: 28px; '>Last night a dangerous criminal <b>escaped </b><span class=indam>[...]</span><b> prison</b>.[sound:rec1367142043.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5fbskt.png' /></span>","BACK":"<span style='font-size: 28px; '>Last night a dangerous criminal <b>escaped </b><span class=indam>from</span><b> prison</b>.[sound:rec1367142054.mp3]</span><br><span style=''></span>","STT":11},
{"FRONT":"<span style='font-size: 28px; '>I go <span class=indam>jo____</span> every morning before going to work. <i>(running for exercise)</i>[sound:rec1367143914.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4w2ae3.png' /></span>","BACK":"<span style='font-size: 28px; '>I go <span class=indam>jogging</span> every morning before going to work.[sound:rec1367143921.mp3]</span><br><span style=''><i>to go jogging - заниматься бегом</i></span>","STT":148},
{"FRONT":"<span style='font-size: 28px; '>She isn't clever. <span class=indam>In f___</span>,<b> she's incredibly stupid.</b>[sound:rec1367147626.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5yitoq.png' /></span>","BACK":"<span style='font-size: 28px; '>She isn't clever. <span class=indam>In fact</span>, <b>she's incredibly stupid.</b>[sound:rec1367147644.mp3]</span><br><span style=''><i>in fact - на самом деле</i></span>","STT":147},
{"FRONT":"<span style='font-size: 28px; '>I want Russia to win! <b>I'm a football </b><span class=indam>f____</span><b>. </b><i>(a person who supports a team)</i>[sound:rec1367145175.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesfwi9z.png' /></span>","BACK":"<span style='font-size: 28px; '>I want Russia to win! <b>I'm a football </b><span class=indam>fan</span><b>.</b>[sound:rec1367145192.mp3]<br /></span><br><span style=''></span>","STT":91},
{"FRONT":"<span style='font-size: 28px; '>We had a great holiday in Canada.<b> The </b><span class=indam>n_____</span><b> there is really beautiful.</b> <i>(things not made by people, for example forests, lakes, animals)</i>[sound:rec1367142938.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesycwm2.png' /></span>","BACK":"<span style='font-size: 28px; '>We had a great holiday in Canada.<b> The </b><span class=indam>nature</span><b> there is really beautiful.</b>[sound:rec1367142959.mp3]</span><br><span style=''><i>nature (n.) - природа</i><br></span>","STT":30},
{"FRONT":"<span style='font-size: 28px; '>She ran <span class=indam>[...]</span> the hill very fast. <i>(from top to bottom)</i>[sound:rec1367145911.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqg3fzq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She ran <span class=indam>down</span> the hill very fast.[sound:rec1367145928.mp3]</span><br><span style=''></span>","STT":122},
{"FRONT":"<span style='font-size: 28px; '>This is great. <span class=indam>(Do)</span> <b>exercise makes me feel healthy.</b>[sound:rec1367143582.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastel8cyqp.png' /></span>","BACK":"<span style='font-size: 28px; '>This is great. <span class=indam>Doing</span> <b>exercise makes me feel healthy.</b>[sound:rec1367143576.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>-ing</span><i> as the </i><span style='font-weight:600; font-style:italic;'>subject</span><i> of a sentence</i></span>","STT":52},
{"FRONT":"<span style='font-size: 28px; '>Look! He's reading a book <b>while </b><span class=indam>(ride)</span><b> a bicycle</b>.[sound:rec1367143970.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteu4wiw_.png' /></span>","BACK":"<span style='font-size: 28px; '>Look! He's reading a book <b>while </b><span class=indam>riding</span><b> a bicycle.</b>[sound:rec1367143964.mp3]</span><br><span style=''><i>preposition + -ing</i></span>","STT":56},
{"FRONT":"<span style='font-size: 28px; '>Some English words are difficult <span class=indam>to</span> <span class=indam>p_____</span>.[sound:rec1367144522.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteo1kawv.png' /></span>","BACK":"<span style='font-size: 28px; '>Some English words are difficult <span class=indam>to</span> <span class=indam>pron</span><span style='font-weight:600; color:#ff5500;'>ou</span><span class=indam>nce</span>.[sound:rec1367144531.mp3]</span><br><span style=''><i>to pronounce sth. - произносить</i><br></span>","STT":73},
{"FRONT":"<span style='font-size: 28px; '>She walked along the street and down the <span class=indam>s____</span>.[sound:rec1367145445.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste6yvb2q.png' /></span>","BACK":"<span style='font-size: 28px; '>She walked along the street and down the <span class=indam>steps</span>.[sound:rec1367145451.mp3]</span><br><span style=''><i>a step - ступень</i></span>","STT":104},
{"FRONT":"<span style='font-size: 28px; '>We had a party <b>to </b><span class=indam>c______</span><b> Christmas. </b><i>(mark a positive event)</i>[sound:rec1367141683.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenohxlt.png' /></span>","BACK":"<span style='font-size: 28px; '>We had a party <b>to </b><span class=indam>celebrate</span><b> Christmas.</b>[sound:rec1367141702.mp3]</span><br><span style=''><i>to celebrate sth. - праздновать</i></span>","STT":1},
{"FRONT":"<span style='font-size: 28px; '>Those children are really good <span class=indam>[...]</span> dancing.[sound:rec1367143400.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekbot0t.png' /></span>","BACK":"<span style='font-size: 28px; '>Those children are really good <span class=indam>at</span> dancing.[sound:rec1367143407.mp3]</span><br><span style=''><i>to be good, bad, etc. </i><span style='font-weight:600; font-style:italic;'>at -ing</span></span>","STT":43},
{"FRONT":"<span style='font-size: 28px; '>There's so much to do and <b>I hate </b><span class=indam>(do)</span><b> housework.</b>[sound:rec1367143017.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastern3rik.png' /></span>","BACK":"<span style='font-size: 28px; '>There's so much to do and <b>I hate </b><span class=indam>doing</span><b> housework.</b>[sound:rec1367143023.mp3]</span><br><span style=''><i>hate + -ing</i></span>","STT":33},
{"FRONT":"<span style='font-size: 28px; '>To get to the house we had to<b> go </b><span class=indam>[...]</span><b> the lake.</b>[sound:rec1367145275.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegudhxw.png' /></span>","BACK":"<span style='font-size: 28px; '>To get to the house we had to <b>go </b><span class=indam>round</span><b> the lake.</b>[sound:rec1367145284.mp3]<br /><i>or,</i><br />To get to the house we had to <b>go </b><span class=indam>around</span><b> the lake.</b></span><br><span style=''><i>around, round - вокруг</i></span>","STT":96},
{"FRONT":"<span style='font-size: 28px; '>At the party I had an interesting <span class=indam>co______</span> with Claire. <i>(talk)</i>[sound:rec1367142074.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejka3xn.png' /></span>","BACK":"<span style='font-size: 28px; '>At the party I had an interesting <span class=indam>conversation</span> with Claire.[sound:rec1367142081.mp3]</span><br><span style=''><i>a conversation - разговор</i></span>","STT":12},
{"FRONT":"<span style='font-size: 28px; '>Okay everyone. Read this text <b>without </b><span class=indam>(use)</span><b> a dictionary.</b>[sound:rec1367142972.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegf9vvf.png' /></span>","BACK":"<span style='font-size: 28px; '>Okay everyone. Read this text <b>without </b><span class=indam>using</span><b> a dictionary.</b>[sound:rec1367142979.mp3]</span><br><span style=''><i>preposition + -ing</i></span>","STT":31},
{"FRONT":"<span style='font-size: 28px; '>In Britain you <span class=indam>d___ h____ ___</span> wear a helmet on a bicycle. <i>(there isn't a rule, it's not obligatory) </i>[sound:rec1367144271.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq0bk5z.png' /></span>","BACK":"<span style='font-size: 28px; '>In Britain you <span class=indam>don't have to</span> wear a helmet on a bicycle.[sound:rec1367144279.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>don't have to</span><i> for something that </i><span style='font-weight:600; font-style:italic;'>isn't necessary </span><i>(i.e. there isn't a rule)</i></span>","STT":66},
{"FRONT":"<span style='font-size: 28px; '>We went to the travel agent's <span class=indam>[...]</span><b> book our holiday.</b>[sound:rec1367142647.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq48buy.png' /></span>","BACK":"<span style='font-size: 28px; '>We went to the travel agent's<b> </b><span class=indam>to</span><b> book our holiday.</b>[sound:rec1367142652.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>to + infinitive </span><i>to say why you do something</i></span>","STT":24},
{"FRONT":"<span style='font-size: 28px; '>I don't want to do this! <b>It's too difficult </b><span class=indam>(learn)</span><b> Chinese</b>.[sound:rec1367142321.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegch2_u.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's difficult </b><span class=indam>to</span><b> </b><span class=indam>learn</span><b> Chinese.</b>[sound:rec1367142328.mp3]</span><br><span style=''><i>adjective + to + infinitive</i></span>","STT":15},
{"FRONT":"<span style='font-size: 28px; '>I'm a full-time mother. <b>I spend a lot of time </b><span class=indam>(look after)</span><b> my baby.</b>[sound:rec1367143168.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesekzsd.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm a full-time mother. <b>I spend a lot of time </b><span class=indam>looking after</span><b> my baby.</b>[sound:rec1367143175.mp3]</span><br><span style=''><i>spend + -ing</i></span>","STT":37},
{"FRONT":"<span style='font-size: 28px; '>Look! He's reading a book<b> </b><span class=indam>w___</span><b> riding a bicycle.</b>[sound:rec1367143970.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteu4wiw_.png' /></span>","BACK":"<span style='font-size: 28px; '>Look! He's reading a book <span class=indam>while</span><b> riding a bicycle.</b>[sound:rec1367143964.mp3]</span><br><span style=''><i>while - в то время как</i></span>","STT":55},
{"FRONT":"<span style='font-size: 28px; '>A football match usually <span class=indam>la____</span> 90 minutes. <i>(has a time of, continues for)</i>[sound:rec1367145965.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastek2yqnt.png' /></span>","BACK":"<span style='font-size: 28px; '>A football match usually <span class=indam>lasts</span> 90 minutes.[sound:rec1367145971.mp3]</span><br><span style=''><i>to last (time) - длиться</i></span>","STT":124},
{"FRONT":"<span style='font-size: 28px; '>In America there are houses in many different <span class=indam>s_____</span>.[sound:rec1367142174.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefpitvj.png' /></span>","BACK":"<span style='font-size: 28px; '>In America there are houses in many different <span class=indam>styles</span>.[sound:rec1367142179.mp3]</span><br><span style=''><i>a style - стиль</i></span>","STT":14},
{"FRONT":"<span style='font-size: 28px; '>In the library <b>you </b><span class=indam>_______</span><b> be quiet.</b>[sound:rec1367144090.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepclevs.png' /></span>","BACK":"<span style='font-size: 28px; '>In the library <b>you </b><span class=indam>have to</span><b> be quiet.</b>[sound:rec1367144102.mp3]<br /><i>or</i><br />In the library<b> you </b><span class=indam>must</span><b> be quiet.</b></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>must(n't)</span><i> or </i><span style='font-weight:600; font-style:italic;'>have to</span><i> for </i><span style='font-weight:600; font-style:italic;'>rules</span></span>","STT":60},
{"FRONT":"<span style='font-size: 28px; '>There are 11 <span class=indam>pl______</span> in a football team. <i>(people, sportsmen)</i>[sound:rec1367147183.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteboqwiu.png' /></span>","BACK":"<span style='font-size: 28px; '>There are 11 <span class=indam>players</span> in a football team.[sound:rec1367147189.mp3]</span><br><span style=''></span>","STT":130},
{"FRONT":"<span style='font-size: 28px; '>I <span class=indam>a_____</span> at the house and knocked on the door.[sound:rec1367141917.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemdxxw1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I <span class=indam>arrived</span> at the house and knocked on the door.[sound:rec1367141923.mp3]</span><br><span style=''><i>to arrive swh. - приходить, приездить</i></span>","STT":7},
{"FRONT":"<span style='font-size: 28px; '>When you're a child life is very <span class=indam>s_____</span>. <i>(the opposite of 'complicated')</i>[sound:rec1367145581.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteulozur.png' /></span>","BACK":"<span style='font-size: 28px; '>When you're a child life is very <span class=indam>simple</span>.[sound:rec1367145586.mp3]</span><br><span style=''><i>simple (adj.) - простой</i></span>","STT":111},
{"FRONT":"<span style='font-size: 28px; '>Look at your room! <b>I think you need to </b><span class=indam>t_____</span><b> it</b>! <i>(put everything in the right place; make it look good)</i>[sound:rec1367142895.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastead1cw3.png' /></span>","BACK":"<span style='font-size: 28px; '>Look at your room!<b> I think you need to </b><span class=indam>tidy</span><b> it!</b>[sound:rec1367142900.mp3]</span><br><span style=''><i>to tidy sth. - прибирать</i><br></span>","STT":28},
{"FRONT":"<span style='font-size: 28px; '>If you want to be good at the piano, <b>you have to </b><span class=indam>pr_____</span><b> every day.</b> <i>(do exercises, play, study)</i>[sound:rec1367147588.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4jhdhi.png' /></span>","BACK":"<span style='font-size: 28px; '>If you want to be good at the piano, <b>you have to </b><span class=indam>practise</span><b> every day.</b>[sound:rec1367147598.mp3]</span><br><span style=''><i>to practise (sth.) - тренироваться</i><br></span>","STT":145},
{"FRONT":"<span style='font-size: 28px; '>He's right. I agree with him <span class=indam>com______</span>. <i>(100%)</i>[sound:rec1367141810.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecxbnb2.png' /></span>","BACK":"<span style='font-size: 28px; '>He's right. I agree with him <span class=indam>compl</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>tely</span>.[sound:rec1367141826.mp3]</span><br><span style=''><i>completely - совсем</i></span>","STT":3},
{"FRONT":"<span style='font-size: 28px; '>-Why did you go to Manchester?[sound:rec1367142813.mp3]<br><b>-We went there </b><span class=indam>[...]</span><b> visit grandad.</b><br /><img class='center-block img-responsive hinhdep'  src='pastec9wpwp.png' /></span>","BACK":"<span style='font-size: 28px; '>-Why did you go to Manchester?<br><b>-We went there </b><span class=indam>to</span><b> visit grandad.</b>[sound:rec1367142819.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>to + infinitive </span><i>to say why you do something</i></span>","STT":26},
{"FRONT":"<span style='font-size: 28px; '>When you went to Poland, <span class=indam>d___ you h____ __</span> <b>get a visa</b>? <i>(is there a rule?)</i>[sound:rec1367144855.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paster643cb.png' /></span>","BACK":"<span style='font-size: 28px; '>When you went to Poland, <span class=indam>did you have to</span> <b>get a visa</b>?[sound:rec1367144867.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>must(n't)</span><i> or </i><span style='font-weight:600; font-style:italic;'>have to</span><i> for </i><span style='font-weight:600; font-style:italic;'>rules </span><i>(you can't use </i><span style='font-weight:600; font-style:italic;'>must </span><i>in the past)</i></span>","STT":78},
{"FRONT":"<span style='font-size: 28px; '>If you want to go to China, <b>you </b><span class=indam>______ </span><b>get a visa </b><i>(there's no choice, it's a rule)</i>[sound:rec1367144453.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb4wqin.png' /></span>","BACK":"<span style='font-size: 28px; '>If you want to go to China, <b>you </b><span class=indam>have to </span><b>get a visa.</b>[sound:rec1367144470.mp3]<br /><i>or,</i><br />If you want to go to China, <b>you </b><span class=indam>must </span><b>get a visa.</b></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>must(n't)</span><i> or </i><span style='font-weight:600; font-style:italic;'>have to</span><i> for </i><span style='font-weight:600; font-style:italic;'>rules</span></span>","STT":71},
{"FRONT":"<span style='font-size: 28px; '>These noodles are easy to prepare - <b>you just have to </b><span class=indam>a____</span><b> hot water.</b> <i>(put in something extra)</i>[sound:rec1367147081.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecjgmjy.png' /></span>","BACK":"<span style='font-size: 28px; '>These noodles are easy to prepare - <b>you just have to </b><span class=indam>add</span><b> hot water.</b>[sound:rec1367147088.mp3]</span><br><span style=''><i>to add sth. - добавлять</i></span>","STT":125},
{"FRONT":"<span style='font-size: 28px; '>What time in the morning <span class=indam>___ you h___ __</span> be in your office? <i>(what time is it necessary?)</i>[sound:rec1367144746.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecekixe.png' /></span>","BACK":"<span style='font-size: 28px; '>What time in the morning <span class=indam>do you have to</span> be in your office?[sound:rec1367144751.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>must(n't)</span><i> or </i><span style='font-weight:600; font-style:italic;'>have to</span><i> for </i><span style='font-weight:600; font-style:italic;'>rules</span></span>","STT":77},
{"FRONT":"<span style='font-size: 28px; '>When I was at school I sang in <span class=indam>a</span> <span class=indam>c_____</span>. <i>(a group of singers)</i>[sound:rec1367143473.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec0vchr.png' /></span>","BACK":"<span style='font-size: 28px; '>When I was at school I sang in <span class=indam>a</span> <span class=indam>choir</span>.[sound:rec1367143478.mp3]</span><br><span style=''><i>a choir - хор</i></span>","STT":46},
{"FRONT":"<span style='font-size: 28px; '>Those roads are very <span class=indam>com_____</span>. <i>(the opposite of 'simple')</i>[sound:rec1367145010.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebne2nu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Those roads are very <span class=indam>c</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>mplicated</span>.[sound:rec1367145023.mp3]</span><br><span style=''><i>complicated (adj.) - сложный</i></span>","STT":83},
{"FRONT":"<span style='font-size: 28px; '>I go jogging every morning <b>before </b><span class=indam>(go)</span><b> to work.</b>[sound:rec1367143842.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4w2ae3.png' /></span>","BACK":"<span style='font-size: 28px; '>I go jogging every morning <b>before </b><span class=indam>going</span><b> to work.</b>[sound:rec1367143852.mp3]</span><br><span style=''><i>preposition + -ing</i></span>","STT":54},
{"FRONT":"<span style='font-size: 28px; '>Look at the sign.<b> You </b><span class=indam>m____</span><b> drive down there.</b>[sound:rec1367144190.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5hyjop.png' /></span>","BACK":"<span style='font-size: 28px; '>Look at the sign. <b>You </b><span class=indam>mustn't</span><b> drive down there.</b>[sound:rec1367144203.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>must(n't)</span><i> or </i><span style='font-weight:600; font-style:italic;'>have to</span><i> for </i><span style='font-weight:600; font-style:italic;'>rules</span></span>","STT":64},
{"FRONT":"<span style='font-size: 28px; '>My computer isn't working. <b>How </b><span class=indam>a______</span><b>! </b><i>(it makes me feel bad or angry)</i>[sound:rec1367147327.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehpu3dh.png' /></span>","BACK":"<span style='font-size: 28px; '>My computer isn't working. <b>How </b><span class=indam>ann</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>ying</span><b>!</b>[sound:rec1367147340.mp3]</span><br><span style=''><i>annoying (adj.) - раздражающий</i></span>","STT":137},
{"FRONT":"<span style='font-size: 28px; '>Most children find it easy <span class=indam>(learn)</span><b> to ride a bicycle.</b>[sound:rec1367142272.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegtgwnv.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Most children find it easy <span class=indam>to learn</span> <b>to ride a bicycle.</b>[sound:rec1367142278.mp3]</span><br><span style=''><i>adjective + to + infinitive</i></span>","STT":16},
{"FRONT":"<span style='font-size: 28px; '>In Switzerland <b>we drove </b><span class=indam>[...]</span><b> a long tunnel.</b>[sound:rec1367145295.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenkxgxa.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>In Switzerland<b> we drove </b><span class=indam>through</span><b> a long tunnel.</b>[sound:rec1367145300.mp3]<br /></span><br><span style=''><i>through - по, через</i></span>","STT":97},
{"FRONT":"<span style='font-size: 28px; '>There were lots of cows <b>going </b><span class=indam>[...]</span><b> the road.</b>[sound:rec1367145258.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemzv3ig.png' /></span>","BACK":"<span style='font-size: 28px; '>There were lots of cows <b>going </b><span class=indam>along</span><b> the road.</b>[sound:rec1367145263.mp3]</span><br><span style=''><i>along - вдоль</i><br></span>","STT":95},
{"FRONT":"<span style='font-size: 28px; '>In yesterday's match our team <span class=indam>s_____</span> <b>3 goals. </b><i>(got, made)</i>[sound:rec1367147204.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteozjdkd.png' /></span>","BACK":"<span style='font-size: 28px; '>In yesterday's match our team <span class=indam>scored</span> <b>3 goals.</b>[sound:rec1367147212.mp3]</span><br><span style=''><i>to score (a goal) - забить (гол)</i></span>","STT":131},
{"FRONT":"<span style='font-size: 28px; '>Those children are really good at <span class=indam>(dance)</span>.[sound:rec1367143431.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekbot0t.png' /></span>","BACK":"<span style='font-size: 28px; '>Those children are really good at <span class=indam>dancing</span>.[sound:rec1367143436.mp3]</span><br><span style=''><i>good at + -ing</i></span>","STT":44},
{"FRONT":"<span style='font-size: 28px; '>In golf you have to hit the ball into a small <span class=indam>h____</span>.[sound:rec1367145567.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastem7v8ds.png' /></span>","BACK":"<span style='font-size: 28px; '>In golf you have to hit the ball into a small <span class=indam>hole</span>.[sound:rec1367145573.mp3]</span><br><span style=''><i>a hole - яма</i></span>","STT":110},
{"FRONT":"<span style='font-size: 28px; '>Last night we watched the <span class=indam>football</span> <span class=indam>m____</span> on T.V. <i>(game)</i>[sound:rec1367145209.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastex9yafy.png' /></span>","BACK":"<span style='font-size: 28px; '>Last night we watched the <span class=indam>football</span> <span class=indam>match</span> on T.V.[sound:rec1367145216.mp3]</span><br><span style=''><i>a (football) match - (футбольный) матч</i></span>","STT":92},
{"FRONT":"<span style='font-size: 28px; '>Tomorrow we have an important <span class=indam>e____</span>. <i>(a big test at school or university)</i>[sound:rec1367144052.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8_0za5.png' /></span>","BACK":"<span style='font-size: 28px; '>Tomorrow we have an important <span class=indam>exam</span>.[sound:rec1367144064.mp3]</span><br><span style=''><i>an exam - экзамен</i></span>","STT":59},
{"FRONT":"<span style='font-size: 28px; '>She went to bed <b>after </b><span class=indam>(do)</span><b> her homework.</b>[sound:rec1367143824.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteag28xo.png' /></span>","BACK":"<span style='font-size: 28px; '>She went to bed <b>after </b><span class=indam>doing</span><b> her homework.</b>[sound:rec1367143829.mp3]</span><br><span style=''><i>preposition + -ing</i></span>","STT":53},
{"FRONT":"<span style='font-size: 28px; '>We watched the train <b>going </b><span class=indam>[...]</span><b> the bridge.</b>[sound:rec1367145243.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaysj7o.png' /></span>","BACK":"<span style='font-size: 28px; '>We watched the train <b>going </b><span class=indam>under</span><b> the bridge.</b>[sound:rec1367145248.mp3]</span><br><span style=''><i>under - под</i></span>","STT":94},
{"FRONT":"<span style='font-size: 28px; '>Look at that!<b> It's really a </b><span class=indam>p____</span><b> beach. </b><i>(ideal, good in every way)</i>[sound:rec1367143502.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastequvofq.png' /></span>","BACK":"<span style='font-size: 28px; '>Look at that! <b>It's really a </b><span class=indam>perfect</span><b> beach.</b>[sound:rec1367143507.mp3]</span><br><span style=''><i>perfect (adj.) - совершенный</i><br></span>","STT":48},
{"FRONT":"<span style='font-size: 28px; '>She walked along the street <b>and </b><span class=indam>[...]</span><b> the steps.</b>[sound:rec1367145432.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste6yvb2q.png' /></span>","BACK":"<span style='font-size: 28px; '>She walked along the street <b>and </b><span class=indam>down</span><b> the steps.</b>[sound:rec1367145437.mp3]</span><br><span style=''><i>down - вниз</i></span>","STT":103},
{"FRONT":"<span style='font-size: 28px; '>Today's Saturday so<b> I </b><span class=indam>___ h___ __</span><b>go to work. </b><i>(it isn't necessary)</i>[sound:rec1367144368.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuuzuwa.png' /></span>","BACK":"<span style='font-size: 28px; '>Today's Saturday so <b>I </b><span class=indam>don't have to</span><b> go to work.</b>[sound:rec1367144373.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>don't have to</span><i> for something that </i><span style='font-weight:600; font-style:italic;'>isn't necessary </span><i>(i.e. there isn't a rule)</i></span>","STT":68},
{"FRONT":"<span style='font-size: 28px; '>On Saturdays I play <span class=indam>g_____</span>.[sound:rec1367145481.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5y3lxb.png' /></span>","BACK":"<span style='font-size: 28px; '>On Saturdays I play <span class=indam>golf</span>.[sound:rec1367145484.mp3]</span><br><span style=''></span>","STT":106},
{"FRONT":"<span style='font-size: 28px; '>This is my sister. <b>She absolutely loves </b><span class=indam>(read)</span><b>.</b>[sound:rec1367143038.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paster7jg17.png' /></span>","BACK":"<span style='font-size: 28px; '>This is my sister. <b>She absolutely loves </b><span class=indam>reading</span><b>.</b>[sound:rec1367143044.mp3]</span><br><span style=''><i>love + -ing</i></span>","STT":34},
{"FRONT":"<span style='font-size: 28px; '>-Why did you come to St. Petersburg?[sound:rec1367142876.mp3]<br>-<b>First of all I came here </b><span class=indam>[...]</span><b> learn Russian.</b><br /><img class='center-block img-responsive hinhdep'  src='pastep9zqe8.png' /></span>","BACK":"<span style='font-size: 28px; '>-Why did you come to St. Petersburg?<br>-<b>First of all I came here </b><span class=indam>to</span><b> learn Russian.</b>[sound:rec1367142882.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>to + infinitive </span><i>to say why you do something</i></span>","STT":27},
{"FRONT":"<span style='font-size: 28px; '>English <span class=indam>pro_____</span> can be very complicated. <i>(how you say words)</i>[sound:rec1367145039.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedkimcc.png' /><img class='center-block img-responsive hinhdep'  src='pastecidhgr.png' /></span>","BACK":"<span style='font-size: 28px; '>English <span class=indam>pronunci</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>tion</span> can be very complicated.[sound:rec1367145046.mp3]</span><br><span style=''><i>pronunciation (n.) - произношение</i></span>","STT":84},
{"FRONT":"<span style='font-size: 28px; '>My English teacher at school was very <span class=indam>s____</span>. <i>(unfriendly; she punished us; there were lots of rules)</i>[sound:rec1367147544.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedrzdd6.png' /></span>","BACK":"<span style='font-size: 28px; '>My English teacher at school was very <span class=indam>strict</span>.[sound:rec1367147549.mp3]</span><br><span style=''><i>strict (adj.) - строгий</i></span>","STT":143},
{"FRONT":"<span style='font-size: 28px; '>Take it easy! <b>Be careful </b><span class=indam>(not drive)</span><b> too fast!</b>[sound:rec1367142629.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewzfafe.png' /></span>","BACK":"<span style='font-size: 28px; '><b>Be careful </b><span class=indam>not to drive</span><b> too fast!</b>[sound:rec1367142635.mp3]</span><br><span style=''><i>adjective + to + infinitive</i></span>","STT":23},
{"FRONT":"<span style='font-size: 28px; '>-Why did you call James?[sound:rec1367142765.mp3]<br><b>-I called him </b><span class=indam>[...]</span><b> tell him where we are.</b><br /><img class='center-block img-responsive hinhdep'  src='pastez5p_az.png' /></span>","BACK":"<span style='font-size: 28px; '>-Why did you call James?<br><b>-I called him </b><span class=indam>to</span><b> tell him where we are.</b>[sound:rec1367142772.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>to + infinitive </span><i>to say why you do something</i></span>","STT":25},
{"FRONT":"<span style='font-size: 28px; '><b>She's </b><span class=indam>h____</span><b> the ball.</b>[sound:rec1367145089.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteevliq5.png' /></span>","BACK":"<span style='font-size: 28px; '><b>She's </b><span class=indam>hitting</span><b> the ball.</b>[sound:rec1367145094.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>hit - hit - hit</span><br /><i>to hit sth. - ударить</i></span>","STT":86},
{"FRONT":"<span style='font-size: 28px; '>It was a beautiful evening and <b>I walked 5km </b><span class=indam>[...]</span><b> the beach.</b>[sound:rec1367145724.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebexfvf.png' /></span>","BACK":"<span style='font-size: 28px; '>It was a beautiful evening and <b>I walked 5km </b><span class=indam>along</span><b> the beach.</b>[sound:rec1367145731.mp3]</span><br><span style=''><i>along - вдоль</i></span>","STT":114},
{"FRONT":"<span style='font-size: 28px; '>Wait a minute.<b> We need to go </b><span class=indam>[...]</span><b> this shop.</b>[sound:rec1367145327.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastengt6wm.png' /></span>","BACK":"<span style='font-size: 28px; '>Wait a minute. <b>We need to go </b><span class=indam>into</span><b> this shop.</b>[sound:rec1367145347.mp3]</span><br><span style=''><i>into - в (движение)</i></span>","STT":99},
{"FRONT":"<span style='font-size: 28px; '><b>He's </b><span class=indam>th_____</span><b> the ball.</b>[sound:rec1367145103.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevdra9c.png' /></span>","BACK":"<span style='font-size: 28px; '><b>He's </b><span class=indam>throwing</span><b> the ball.</b>[sound:rec1367145108.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>throw - threw - thrown</span><br /><i>to throw sth. - бросать</i></span>","STT":87},
{"FRONT":"<span style='font-size: 28px; '><b>He's </b><span class=indam>sh_____</span><b> ducks.</b> <i>(using a gun to kill)</i>[sound:rec1367145115.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste65ugbu.png' /></span>","BACK":"<span style='font-size: 28px; '><b>He's </b><span class=indam>shooting</span><b> ducks.</b>[sound:rec1367145122.mp3]</span><br><span style=''><i>to shoot sth. - стрелять</i><br></span>","STT":88},
{"FRONT":"<span style='font-size: 28px; '>Russia had lots of problems <b>in </b><span class=indam>[...]</span><b> 90s.</b>[sound:rec1367144008.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelvslis.png' /></span>","BACK":"<span style='font-size: 28px; '>Russia had lots of problems <b>in </b><span class=indam>the</span><b> 90s.</b>[sound:rec1367144027.mp3]</span><br><span style=''></span>","STT":58},
{"FRONT":"<span style='font-size: 28px; '>Look at the sign. <b>You </b><span class=indam>m_____</span><b> smoke in here.</b>[sound:rec1367144172.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteexphzn.png' /></span>","BACK":"<span style='font-size: 28px; '><b>You </b><span class=indam>mustn't</span><b> smoke in here.</b>[sound:rec1367144152.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>must(n't)</span><i> or </i><span style='font-weight:600; font-style:italic;'>have to</span><i> for </i><span style='font-weight:600; font-style:italic;'>rules</span></span>","STT":62},
{"FRONT":"<span style='font-size: 28px; '>Lots of men think that Scarlett Johansson is <span class=indam>at______</span>. <i>(beautiful)</i>[sound:rec1367147467.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteam_va4.png' /></span>","BACK":"<span style='font-size: 28px; '>Lots of men think that Scarlett Johansson is <span class=indam>attr</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>ctive</span>.[sound:rec1367147472.mp3]</span><br><span style=''><i>attractive (adj.) - привлекательный</i></span>","STT":140},
{"FRONT":"<span style='font-size: 28px; '>Even though she's 73 years old <b>she walked </b><span class=indam>[...]</span><b> the mountain.</b>[sound:rec1367145797.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemylwws.png' /></span>","BACK":"<span style='font-size: 28px; '>Even though she's 73 years old<b> she walked </b><span class=indam>up</span><b> the mountain.</b>[sound:rec1367145804.mp3]</span><br><span style=''></span>","STT":118},
{"FRONT":"<span style='font-size: 28px; '>The first person to cross <span class=indam>the</span> <span class=indam>f____ l____</span> is the winner.[sound:rec1367145506.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecutj57.png' /></span>","BACK":"<span style='font-size: 28px; '>The first person to cross <span class=indam>the</span> <span class=indam>finish line</span> is the winner.[sound:rec1367145513.mp3]</span><br><span style=''><i>the finish line - финишная черта</i><br></span>","STT":107},
{"FRONT":"<span style='font-size: 28px; '>In 2006 Italy were the world <span class=indam>ch_____</span> at football. <i>(the best, the winners)</i>[sound:rec1367146161.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelqtzig.png' /></span>","BACK":"<span style='font-size: 28px; '>In 2006 Italy were the world <span class=indam>champions</span> at football.[sound:rec1367146169.mp3]</span><br><span style=''><i>a champion - чемпион</i></span>","STT":126},
{"FRONT":"<span style='font-size: 28px; '>I'm a full-time mother. I <span class=indam>s____</span> a lot of time looking after my baby.[sound:rec1367143150.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesekzsd.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm a full-time mother. I <span class=indam>spend</span> a lot of time looking after my baby.[sound:rec1367143158.mp3]</span><br><span style=''><i>to spend (time) - проводить время</i></span>","STT":36},
{"FRONT":"<span style='font-size: 28px; '>Last night I worked late. <b>I stayed in the office </b><span class=indam>[...]</span><b> 10pm.</b>[sound:rec1367141786.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteucbcoz.png' /></span>","BACK":"<span style='font-size: 28px; '>Last night I worked late. <b>I stayed in the office </b><span class=indam>until</span><b> 10pm.</b>[sound:rec1367141794.mp3]</span><br><span style=''><i>until (prep.) - до</i></span>","STT":2},
{"FRONT":"<span style='font-size: 28px; '>I enjoyed the party.<b> It was nice </b><span class=indam>(meet)</span><b> new people.</b>[sound:rec1367142454.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastea17gbu.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It was nice </b><span class=indam>to meet</span><b> new people.</b>[sound:rec1367142460.mp3]</span><br><span style=''><i>adjective + to + infinitive</i></span>","STT":19},
{"FRONT":"<span style='font-size: 28px; '>-What <span class=indam>s____</span> is it?[sound:rec1367147247.mp3]<br />-It's an extra large.<br /><img class='center-block img-responsive hinhdep'  src='pasteoml0gk.png' /></span>","BACK":"<span style='font-size: 28px; '>-What <span class=indam>size</span> is it?[sound:rec1367147259.mp3]<br />-It's an extra large.</span><br><span style=''><i>a size - размер</i></span>","STT":134},
{"FRONT":"<span style='font-size: 28px; '>Okay, let's decide. <b>What do you want </b><span class=indam>(do)</span><b> this evening</b>?[sound:rec1367142545.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_ccfrk.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Okay, let's decide.<b> What do you want </b><span class=indam>to do</span><b> this evening?</b>[sound:rec1367142538.mp3]</span><br><span style=''><i>want + to + infinitive</i><br></span>","STT":21},
{"FRONT":"<span style='font-size: 28px; '>This is Wembly, a famous football <span class=indam>s_____</span> in London. <i>(a big building where sport is played)</i>[sound:rec1367147129.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelsnfmn.png' /></span>","BACK":"<span style='font-size: 28px; '>This is Wembly, a famous football <span class=indam>stadium</span> in London.[sound:rec1367147136.mp3]</span><br><span style=''><i>a stadium</i></span>","STT":128},
{"FRONT":"<span style='font-size: 28px; '>-I left my wallet at home![sound:rec1367147372.mp3]<br />-<span class=indam>N___ m____</span>.<b> I can lend you some money. </b><i>(it doesn't matter; don't worry)</i><br /><img class='center-block img-responsive hinhdep'  src='pastexq0wtv.png' /></span>","BACK":"<span style='font-size: 28px; '>-I left my wallet at home!<br />-<span class=indam>Never mind</span>. <b>I can lend you some money.</b>[sound:rec1367147382.mp3]</span><br><span style=''><i>never mind - ничего, не важно</i></span>","STT":139},
{"FRONT":"<span style='font-size: 28px; '>Films are okay. I <span class=indam>d___ m____</span> going to the cinema, but I don't love it. <i>(I don't hate it or love it) </i>[sound:rec1367143196.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste6xouxq.png' /></span>","BACK":"<span style='font-size: 28px; '>Films are okay. I <span class=indam>don't mind</span> going to the cinema, but I don't love it.[sound:rec1367143213.mp3]</span><br><span style=''><i>I don't mind - мне все равно</i></span>","STT":38},
{"FRONT":"<span style='font-size: 28px; '>If you want to be professional, <b>it's important </b><span class=indam>(not be)</span><b> late.</b>[sound:rec1367142368.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekgunzr.png' /></span>","BACK":"<span style='font-size: 28px; '>If you want to be professional, <b>it's important </b><span class=indam>not to be</span><b> late.</b>[sound:rec1367142384.mp3]</span><br><span style=''><i>adjective + to + infinitive</i></span>","STT":18},
{"FRONT":"<span style='font-size: 28px; '>The concert's free so <b>we </b><span class=indam>___ h___ __</span><b> pay. </b><i>there isn't a rule, it's not obligatory)</i>[sound:rec1367144495.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefcm9gf.png' /></span>","BACK":"<span style='font-size: 28px; '>The concert's free so <b>we </b><span class=indam>don't have to</span><b> pay.</b>[sound:rec1367144501.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>don't have to</span><i> for something that </i><span style='font-weight:600; font-style:italic;'>isn't necessary </span><i>(i.e. there isn't a rule)</i><br><span style=' font-style:italic;'></span></span>","STT":72},
{"FRONT":"<span style='font-size: 28px; '>In Russia young men <span class=indam>_____</span><b> serve in the army. </b><i>(they don't have a choice)</i>[sound:rec1367144404.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebkvx7d.jpg' /></span>","BACK":"<span style='font-size: 28px; '>In Russia young men <span class=indam>must</span> <b>serve in the army.</b>[sound:rec1367144422.mp3]<br /><i>or,</i><br />In Russia young men <span class=indam>have to</span> <b>serve in the army.</b></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>must(n't)</span><i> or </i><span style='font-weight:600; font-style:italic;'>have to</span><i> for </i><span style='font-weight:600; font-style:italic;'>rules</span></span>","STT":69},
{"FRONT":"<span style='font-size: 28px; '>-Which country is bigger, Russia or Canada?[sound:rec1367147510.mp3]<br />-<b>Well, that's easy, </b><span class=indam>ob_____</span><b> it's Russia.</b> <i>(everybody knows that, it's easy to see)</i></span>","BACK":"<span style='font-size: 28px; '>-Which country is bigger, Russia or Canada?<br />-<b>Well, that's easy, </b><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>bviously</span><b> it's Russia.</b>[sound:rec1367147528.mp3]</span><br><span style=''><i>obviously (adv.) - очевидно</i></span>","STT":142},
{"FRONT":"<span style='font-size: 28px; '>He spoke very fast and <b>I </b><span class=indam>______</span><b> understand.</b> <b>(not can)</b>[sound:rec1367144936.mp3]</span>","BACK":"<span style='font-size: 28px; '>He spoke very fast and <b>I </b><span class=indam>couldn't</span><b> understand.</b>[sound:rec1367144944.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>can - could</span></span>","STT":80},
{"FRONT":"<span style='font-size: 28px; '>In music, <b>this </b><span class=indam>n___</span><b> is called 'C'.</b>[sound:rec1367143518.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesuu6cd.png' /></span>","BACK":"<span style='font-size: 28px; '>In music, <b>this </b><span class=indam>note</span><b> is called 'C'.</b>[sound:rec1367143524.mp3]</span><br><span style=''><i>a note - нота</i></span>","STT":49},
{"FRONT":"<span style='font-size: 28px; '>We went down the hill and <b>walked </b><span class=indam>[...]</span><b> the road.</b>[sound:rec1367145227.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezhixtd.png' /></span>","BACK":"<span style='font-size: 28px; '>We went down the hill and <b>walked </b><span class=indam>across</span><b> the road.</b>[sound:rec1367145233.mp3]</span><br><span style=''><i>across - через</i></span>","STT":93},
{"FRONT":"<span style='font-size: 28px; '>Here are some useful <span class=indam>t____</span> for learning a language: <i>(small pieces of advice)</i>[sound:rec1367141899.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqwikjs.png' /></span>","BACK":"<span style='font-size: 28px; '>Here are some useful <span class=indam>tips</span> for learning a language:[sound:rec1367141907.mp3]</span><br><span style=''><i>a tip - намек, совет</i><br></span>","STT":6},
{"FRONT":"<span style='font-size: 28px; '>Small mountains are called <span class=indam>h____</span>.[sound:rec1367147232.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasterrmnnc.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Small mountains are called <span class=indam>hills</span>.[sound:rec1367147236.mp3]</span><br><span style=''><i>a hill - холм</i></span>","STT":133},
{"FRONT":"<span style='font-size: 28px; '>In Russia young men have to <span class=indam>s____</span> in the army. <i>(be, work)</i>[sound:rec1367144435.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebkvx7d.jpg' /></span>","BACK":"<span style='font-size: 28px; '>In Russia young men have to <span class=indam>serve</span> in the army.[sound:rec1367144441.mp3]</span><br><span style=''><i>to serve - </i></span>","STT":70},
{"FRONT":"<span style='font-size: 28px; '>Our office is very relaxed. <b>We </b><span class=indam>____ h___ __</span><b> wear a suit.</b> <i>(there isn't a rule, it's not obligatory)</i>[sound:rec1367144215.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteo8rowq.png' /></span>","BACK":"<span style='font-size: 28px; '>Our office is very relaxed.<b> We </b><span class=indam>don't have to</span><b> wear a suit.</b>[sound:rec1367144231.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>don't have to</span><i> for something that </i><span style='font-weight:600; font-style:italic;'>isn't necessary </span><i>(i.e. there isn't a rule)</i></span>","STT":65},
{"FRONT":"<span style='font-size: 28px; '>When I was at school <b>I </b><span class=indam>_____</span><b> in a choir. (sing)</b>[sound:rec1367143488.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec0vchr.png' /></span>","BACK":"<span style='font-size: 28px; '>When I was at school <b>I </b><span class=indam>sang</span><b> in a choir.</b>[sound:rec1367143492.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>sing - sang - sung</span><br /><i>to sing - петь</i></span>","STT":47},
{"FRONT":"<span style='font-size: 28px; '>Last night a dangerous criminal <span class=indam>e_____</span> <b>from prison</b>. <i>(ran away from, got out of)</i>[sound:rec1367142043.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5fbskt.png' /></span>","BACK":"<span style='font-size: 28px; '>Last night a dangerous criminal <span class=indam>escaped</span> <b>from prison</b>.[sound:rec1367142054.mp3]</span><br><span style=''><i>to escape from swh. - убежать, сбежать</i><br></span>","STT":10},
{"FRONT":"<span style='font-size: 28px; '>Last year I built <span class=indam>a w___</span> in my garden.[sound:rec1367145530.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecahsl2.png' /></span>","BACK":"<span style='font-size: 28px; '>Last year I built<span class=indam> a wall</span> in my garden.[sound:rec1367145543.mp3]</span><br><span style=''><i>a wall - стена</i></span>","STT":108},
{"FRONT":"<span style='font-size: 28px; '>When my grandmother was 80 <b>she </b><span class=indam>s_____</span><b> driving.</b> <i>(she didn't do it any more)</i>[sound:rec1367143365.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteuupzfy.png' /></span>","BACK":"<span style='font-size: 28px; '>When my grandmother was 80<b> she </b><span class=indam>stopped</span><b> driving</b>.[sound:rec1367143375.mp3]</span><br><span style=''><i>to stop - прекратить, перестать</i></span>","STT":41},
{"FRONT":"<span style='font-size: 28px; '>I like shopping online because <b>I </b><span class=indam>___ h___ __</span><b> leave my house. </b><i>(it isn't necessary)</i>[sound:rec1367144351.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh2splv.png' /></span>","BACK":"<span style='font-size: 28px; '>I like shopping online because <b>I </b><span class=indam>don't have to</span><b> leave my house.</b>[sound:rec1367144357.mp3]<b><br /></b></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>don't have to</span><i> for something that </i><span style='font-weight:600; font-style:italic;'>isn't necessary </span><i>(i.e. there isn't a rule)</i></span>","STT":67},
{"FRONT":"<span style='font-size: 28px; '>Here are some of the <span class=indam>r____</span> at our school. <i>(things we must and mustn't do)</i>[sound:rec1367144543.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevduxsp.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Here are some of the <span class=indam>rules</span> at our school.[sound:rec1367144549.mp3]</span><br><span style=''><i>a rule - правило</i></span>","STT":74},
{"FRONT":"<span style='font-size: 28px; '>We had <span class=indam>a</span> <span class=indam>p____</span> to celebrate Christmas. <i>(a fun and sociable meeting)</i>[sound:rec1367141848.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenohxlt.png' /></span>","BACK":"<span style='font-size: 28px; '>We had <span class=indam>a</span> <span class=indam>party</span> to celebrate Christmas.[sound:rec1367141854.mp3]</span><br><span style=''><i>a party - вечеринка, тусовка</i></span>","STT":4},
{"FRONT":"<span style='font-size: 28px; '>Let me <span class=indam>in______</span> you. Anna, this is Svetlana. Svetlana, this is Anna.[sound:rec1367141979.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1aq207.png' /></span>","BACK":"<span style='font-size: 28px; '>Let me <span class=indam>introduce</span> you. Anna, this is Svetlana. Svetlana this is Anna.[sound:rec1367141989.mp3]</span><br><span style=''><i>to introduce sb. - представить</i></span>","STT":9},
{"FRONT":"<span style='font-size: 28px; '>In Singapore there's <span class=indam>a</span> <span class=indam>l___</span> against spitting. <i>(a rule made by the government)</i>[sound:rec1367144908.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetwfcds.png' /></span>","BACK":"<span style='font-size: 28px; '>In Singapore there's <span class=indam>a</span> <span class=indam>law</span> against spitting.[sound:rec1367144918.mp3]</span><br><span style=''><i>a law - закон</i></span>","STT":79},
{"FRONT":"<span style='font-size: 28px; '>-What are you going to do this weekend?[sound:rec1367143270.mp3]<br /><b>-We're thinking of </b><span class=indam>(visit)</span><b> a museum.</b><br /><img class='center-block img-responsive hinhdep'  src='paste0q70s4.png' /></span>","BACK":"<span style='font-size: 28px; '>-What are you going to do this weekend?<br /><b>-We're thinking of </b><span class=indam>visiting</span><b> a museum.</b>[sound:rec1367143352.mp3]</span><br><span style=''><i>think of + -ing</i></span>","STT":40},
{"FRONT":"<span style='font-size: 28px; '>We ran to the sea and <b>jumped </b><span class=indam>[...]</span><b> the water.</b>[sound:rec1367145670.mp3]<br><img class='center-block img-responsive hinhdep'  src='pasterg8qxc.png' /></span>","BACK":"<span style='font-size: 28px; '>We ran to the sea and <b>jumped </b><span class=indam>into</span><b> the water.</b>[sound:rec1367145678.mp3]<br /><i>or</i><br />We ran to the sea and <b>jumped </b><span class=indam>in</span><b> the water.</b></span><br><span style=''></span>","STT":112},
{"FRONT":"<span style='font-size: 28px; '>You shouldn't do that - <span class=indam>(smoke)</span> <b>is bad for you!</b>[sound:rec1367143538.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev3vmkt.png' /></span>","BACK":"<span style='font-size: 28px; '>You shouldn't do that - <span class=indam>smoking</span><b> is bad for you!</b>[sound:rec1367143543.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>-ing</span><i> as the </i><span style='font-weight:600; font-style:italic;'>subject</span><i> of a sentence</i></span>","STT":50},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1367145060.mp3]<b>He's </b><span class=indam>k____</span><b> the ball.</b> <i>(hitting with his foot)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteagiweu.png' /></span>","BACK":"<span style='font-size: 28px; '><b>He's </b><span class=indam>kicking</span><b> the ball.</b>[sound:rec1367145076.mp3]</span><br><span style=''><i>to kick sth. - пнуть</i></span>","STT":85},
{"FRONT":"<span style='font-size: 28px; '>The Channel Tunnel goes <span class=indam>[...]</span> the sea between England and France.[sound:rec1367145699.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteep3asg.png' /></span>","BACK":"<span style='font-size: 28px; '>The Channel Tunnel goes <span class=indam>under</span> the sea between England and France.[sound:rec1367145706.mp3]</span><br><span style=''><i>under - под</i></span>","STT":113},
{"FRONT":"<span style='font-size: 28px; '>We had a tour of London and our bus <b>drove </b><span class=indam>[...]</span><b> Big Ben.</b>[sound:rec1367145838.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemwfvw3.png' /></span>","BACK":"<span style='font-size: 28px; '>We had a tour of London and our bus<b> drove </b><span class=indam>past</span><b> Big Ben.</b>[sound:rec1367145845.mp3]</span><br><span style=''><i>past - мимо</i><br></span>","STT":119},
{"FRONT":"<span style='font-size: 28px; '>In the film 'Life of Pi', a boy <span class=indam>s_____</span> in a boat with a tiger. <i>(lives in a dangerous situation)</i>[sound:rec1367141668.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedkk06g.png' /></span>","BACK":"<span style='font-size: 28px; '>In the film 'Life of Pi', a boy <span class=indam>survives</span> in a boat with a tiger.[sound:rec1367141676.mp3]<br /></span><br><span style=''><i>to survive - выживать</i><br></span>","STT":0},
{"FRONT":"<span style='font-size: 28px; '>When you were a child <span class=indam>___ you h___ __</span><b> do lots of homework?</b><i>(was there a rule)</i>[sound:rec1367144596.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehajro3.png' /></span>","BACK":"<span style='font-size: 28px; '>When you were a child <span class=indam>did you have to</span><b> do lots of homework?</b>[sound:rec1367144602.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>must(n't)</span><i> or </i><span style='font-weight:600; font-style:italic;'>have to</span><i> for </i><span style='font-weight:600; font-style:italic;'>rules </span><i>(you can't use </i><span style='font-weight:600; font-style:italic;'>must </span><i>in the past)</i></span>","STT":75},
{"FRONT":"<span style='font-size: 28px; '>She's a teacher so she <span class=indam>h___ ___</span> get up early every day. <i>(she doesn't have a choice)</i>[sound:rec1367144120.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekxljyz.png' /></span>","BACK":"<span style='font-size: 28px; '>She's a teacher so she <span class=indam>has to</span> get up early every day.[sound:rec1367144128.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>must(n't)</span><i> or </i><span style='font-weight:600; font-style:italic;'>have to</span><i> for </i><span style='font-weight:600; font-style:italic;'>rules</span></span>","STT":61},
{"FRONT":"<span style='font-size: 28px; '>There are <span class=indam>p_____</span> to stop people parking here.[sound:rec1367147611.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqahxku.png' /></span>","BACK":"<span style='font-size: 28px; '>There are <span class=indam>posts</span> to stop people parking here.[sound:rec1367147617.mp3]</span><br><span style=''><i>a post - столб</i></span>","STT":146},
{"FRONT":"<span style='font-size: 28px; '>A friend of mine works as <span class=indam>a</span> <span class=indam>football</span> <span class=indam>r_____</span>. <i>(a judge who controls the game)</i>[sound:rec1367147157.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteugjary.png' /></span>","BACK":"<span style='font-size: 28px; '>A friend of mine works as <span class=indam>a</span> <span class=indam>football</span> <span class=indam>referee</span>.[sound:rec1367147172.mp3]</span><br><span style=''><i>a (football) referee - футбольный арбитр, судя</i></span>","STT":129},
{"FRONT":"<span style='font-size: 28px; '>I didn't like the CD, so I took it back to the shop and got <span class=indam>a</span> <span class=indam>r____</span>. <i>(I gave back the CD and received my money again)</i>[sound:rec1367147288.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastergyjze.png' /></span>","BACK":"<span style='font-size: 28px; '>I didn't like the CD, so I took it back to the shop and got <span class=indam>a</span> <span class=indam>refund</span>.[sound:rec1367147299.mp3]</span><br><span style=''><i>a refund - возврат (денег)</i></span>","STT":135},
{"FRONT":"<span style='font-size: 28px; '>Grant doesn't look happy. <b>What's he </b><span class=indam>an_____</span><b> about?</b> <i>(a bit angry)</i>[sound:rec1367147353.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejt25k0.png' /></span>","BACK":"<span style='font-size: 28px; '>Grant doesn't look happy. <b>What's he </b><span class=indam>ann</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>yed</span><b> about?</b>[sound:rec1367147358.mp3]</span><br><span style=''><i>annoyed (adj.) - раздраженный</i></span>","STT":138},
{"FRONT":"<span style='font-size: 28px; '>Look at the sign. <b>You </b><span class=indam>m_____</span><b> take food or drink in here.</b>[sound:rec1367144161.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3r4lbg.png' /></span>","BACK":"<span style='font-size: 28px; '><b>You </b><span class=indam>mustn't</span><b> take food or drink in here.</b>[sound:rec1367144180.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>must(n't)</span><i> or </i><span style='font-weight:600; font-style:italic;'>have to</span><i> for </i><span style='font-weight:600; font-style:italic;'>rules</span></span>","STT":63},
{"FRONT":"<span style='font-size: 28px; '>When we arrived Amir <b>got </b><span class=indam>__ __</span><b> the swimming pool.</b>[sound:rec1367145939.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebrw026.png' /></span>","BACK":"<span style='font-size: 28px; '>When we arrived Amir <b>got </b><span class=indam>out of</span><b> the swimming pool.</b>[sound:rec1367145956.mp3]</span><br><span style=''><i>out of - из (движение)</i></span>","STT":123},
{"FRONT":"<span style='font-size: 28px; '>If you want a refund you have to show your <span class=indam>r_____</span>. [sound:rec1367147308.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedfxjaj.png' /></span>","BACK":"<span style='font-size: 28px; '>If you want a refund you have to show your <span class=indam>rec</span><span style='font-weight:600; color:#ff5500;'>ei</span><span class=indam>pt</span>.[sound:rec1367147316.mp3]</span><br><span style=''><i>a receipt - чек</i><br></span>","STT":136},
{"FRONT":"<span style='font-size: 28px; '>I arrived <span class=indam>[...]</span> the house and knocked on the door.[sound:rec1367141941.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemdxxw1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I arrived <span class=indam>at</span> the house and knocked on the door.[sound:rec1367141949.mp3]</span><br><span style=''></span>","STT":8},
{"FRONT":"<span style='font-size: 28px; '>I didn't like the film. <b>I didn't watch it </b><span class=indam>u___</span><b> the end.</b>[sound:rec1367141877.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastens65jv.png' /></span>","BACK":"<span style='font-size: 28px; '>I didn't like the film. <b>I didn't watch it </b><span class=indam>until</span><b> the end.</b>[sound:rec1367141888.mp3]</span><br><span style=''><i>until - до</i></span>","STT":5},
{"FRONT":"<span style='font-size: 28px; '>In football, two teams <b>play </b><span class=indam>[...]</span><b> each other.</b>[sound:rec1367145151.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9c2qwm.png' /></span>","BACK":"<span style='font-size: 28px; '>In football, two teams <b>play </b><span class=indam>against</span><b> each other.</b>[sound:rec1367145157.mp3]</span><br><span style=''><i>against - против</i></span>","STT":90},
{"FRONT":"<span style='font-size: 28px; '>We saw the train <b>coming </b><span class=indam>[...]</span><b> the platform.</b> <i>(approaching)</i>[sound:rec1367145416.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejfgfqj.png' /></span>","BACK":"<span style='font-size: 28px; '>We saw the train <b>coming </b><span class=indam>towards</span><b> the platform.</b>[sound:rec1367145420.mp3]</span><br><span style=''><i>towards - к (движение)</i></span>","STT":102},
{"FRONT":"<span style='font-size: 28px; '>Lisa paid for her shopping and <b>walked </b><span class=indam>__ __ </span><b>the shop.</b>[sound:rec1367145468.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedkrknm.png' /></span>","BACK":"<span style='font-size: 28px; '>Lisa paid for her shopping and <b>walked </b><span class=indam>out of </span><b>the shop.</b>[sound:rec1367145473.mp3]</span><br><span style=''><i>out of - из (движение)</i></span>","STT":105},
{"FRONT":"<span style='font-size: 28px; '>It must be difficult to play on that <span class=indam>football p_____</span>! <i>(field, place to play football)</i>[sound:rec1367147220.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteziku2q.png' /></span>","BACK":"<span style='font-size: 28px; '>It must be difficult to play on that <span class=indam>football pitch</span>![sound:rec1367147226.mp3]</span><br><span style=''><i>a (football) pitch - (футбольное) поле</i></span>","STT":132},
{"FRONT":"<span style='font-size: 28px; '>Look at me! <b>It's really fun </b><span class=indam>(ride)</span><b> a motorbike!</b>[sound:rec1367142350.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste22xpj2.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's really fun </b><span class=indam>to ride</span><b> a motorbike!</b>[sound:rec1367142356.mp3]</span><br><span style=''><i>adjective + to + infinitive</i></span>","STT":17},
{"FRONT":"<span style='font-size: 28px; '>There were lots of interesting clothes <b>in </b><span class=indam>[...]</span><b> 1960s.</b>[sound:rec1367143992.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehkpm5j.png' /></span>","BACK":"<span style='font-size: 28px; '>There were lots of interesting clothes <b>in </b><span class=indam>the</span><b> 1960s.</b>[sound:rec1367143997.mp3]</span><br><span style=''></span>","STT":57},
{"FRONT":"<span style='font-size: 28px; '>When you were a child <span class=indam>___ you h___ __</span><b> go to school on Saturdays?</b><i>(was there a rule)</i>[sound:rec1367147678.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepudhkw.png' /></span>","BACK":"<span style='font-size: 28px; '>When you were a child <span class=indam>did you have to</span><b> go to school on Saturdays?</b>[sound:rec1367147684.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>must(n't)</span><i> or </i><span style='font-weight:600; font-style:italic;'>have to</span><i> for </i><span style='font-weight:600; font-style:italic;'>rules </span><i>(you can't use </i><span style='font-weight:600; font-style:italic;'>must </span><i>in the past)</i></span>","STT":76},
{"FRONT":"<span style='font-size: 28px; '>In yesterday's match our team scored 3 <span class=indam>g____</span>. <i>(when the ball goes into the net) </i>[sound:rec1367147101.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteozjdkd.png' /></span>","BACK":"<span style='font-size: 28px; '>In yesterday's match our team scored 3 <span class=indam>goals</span>.[sound:rec1367147107.mp3]</span><br><span style=''><i>a goal - гол</i></span>","STT":127},
{"FRONT":"<span style='font-size: 28px; '>-I don't know where to go on holiday.[sound:rec1367142102.mp3]<br />-<b>Well, I </b><span class=indam>r_______</span><b> Bulgaria, because it's beautiful and not expensive. </b><i>(I think it's a good choice; I advise)</i><br /><img class='center-block img-responsive hinhdep'  src='pastee1mss5.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-I don't know where to go on holiday.<br />-<b>Well, I </b><span class=indam>recommend</span><b> Bulgaria, because it's beautiful and not expensive.</b>[sound:rec1367142112.mp3]</span><br><span style=''><i>to recommend sth. - рекомендовать</i></span>","STT":13},
{"FRONT":"<span style='font-size: 28px; '>She isn't clever. In fact,<b> she's </b><span class=indam>in____</span><b> stupid.</b> <i>(very, very)</i>[sound:rec1367144994.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5yitoq.png' /></span>","BACK":"<span style='font-size: 28px; '>She isn't clever. In fact, <b>she's </b><span class=indam>incredibly</span><b> stupid.</b>[sound:rec1367145000.mp3]</span><br><span style=''><i>incredibly -&nbsp;&nbsp;невероятно</i><br></span>","STT":82},
{"FRONT":"<span style='font-size: 28px; '>Okay everyone. Read this text <span class=indam>[...]</span><b> using a dictionary.</b> <i>(don't use a dictionary)</i>[sound:rec1367142998.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegf9vvf.png' /></span>","BACK":"<span style='font-size: 28px; '>Okay everyone. Read this text <span class=indam>without</span><b> using a dictionary.</b>[sound:rec1367143005.mp3]</span><br><span style=''><i>without - без</i></span>","STT":32},
{"FRONT":"<span style='font-size: 28px; '>Please don't watch that film, <b>it's </b><span class=indam>a____</span>! <i>(really bad)</i>[sound:rec1367147565.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekqfkpn.png' /></span>","BACK":"<span style='font-size: 28px; '>Please don't watch that film,<b> it's </b><span class=indam>awful</span><b>!</b>[sound:rec1367147570.mp3]</span><br><span style=''><i>awful (adj.) - ужасный</i></span>","STT":144}]

if (localStorage.caumayEn_SG_14 == null) {
    localStorage.caumayEn_SG_14 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_14"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_14+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_14).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_14).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_14).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_14+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_14).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_14).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_14).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_14)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_14))
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
	cau = Number(localStorage.caumayEn_SG_14)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_14)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_14) >  0){
		localStorage.caumayEn_SG_14 = Number(localStorage.caumayEn_SG_14) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_14))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_14)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_14)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_14) < dulieu.length-1){
		localStorage.caumayEn_SG_14 = Number(localStorage.caumayEn_SG_14) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_14))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_14)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_14)].BACK
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
	var current_player = Number(localStorage.caumayEn_SG_14)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_14)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_14)].BACK
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
	cau = Number(localStorage.caumayEn_SG_14)
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
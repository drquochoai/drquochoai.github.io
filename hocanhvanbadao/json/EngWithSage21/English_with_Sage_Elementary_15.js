$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '>-Which restaurant would you like to go to?[sound:rec1373295426.mp3]<br />-<b>I don't </b><span class=indam>m____</span><b>. You choose.</b> <i>(it doesn't matter for me, I'm okay with both options)</i></span>","BACK":"<span style='font-size: 28px; '>-Which restaurant would you like to go to?<br />-<b>I don't </b><span class=indam>mind</span><b>. You choose.</b>[sound:rec1373295434.mp3]</span><br><span style=''></span>","STT":154},
{"FRONT":"<span style='font-size: 28px; '>Tell me Jessica, is your friend Matt <span class=indam>s_____</span>? <i>(without a girlfriend or boyfriend)</i>[sound:rec1373292480.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelfag7_.png' /></span>","BACK":"<span style='font-size: 28px; '>Tell me Jessica, is your friend Matt <span class=indam>single</span>?[sound:rec1373292486.mp3]</span><br><span style=''><i>single (adj.) - один, без пары</i></span>","STT":52},
{"FRONT":"<span style='font-size: 28px; '>She's a bus driver. <b>She </b><span class=indam>e____</span><b> $2000 dollars a month.</b>[sound:rec1373292669.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste6umte1.png' /></span>","BACK":"<span style='font-size: 28px; '>She's a bus driver. <b>She </b><span class=indam>earns</span><b> $2000 dollars a month.</b>[sound:rec1373292675.mp3]</span><br><span style=''><i>to earn (money) - заработывать</i></span>","STT":62},
{"FRONT":"<span style='font-size: 28px; '>It's your mother's 50th birthday next week. <b>I think you </b><span class=indam>s_____</span><b> give her a nice present.</b>[sound:rec1373294147.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's your mother's 50th birthday next week. <b>I think you </b><span class=indam>should</span><b> give her a nice present.</b>[sound:rec1373294154.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":118},
{"FRONT":"<span style='font-size: 28px; '>If <span class=indam>_________</span>, then we'll eat all the cake. <b>(he / not come)</b>[sound:rec1373292775.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefnk069.png' /></span>","BACK":"<span style='font-size: 28px; '>If <span class=indam>he</span> <span class=indam>doesn't come</span>, then we'll eat all the cake.[sound:rec1373292790.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":67},
{"FRONT":"<span style='font-size: 28px; '>We watched an exciting <span class=indam>horse</span> <span class=indam>r____</span>.[sound:rec1373295383.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_qivla.png' /></span>","BACK":"<span style='font-size: 28px; '>We watched an exciting <span class=indam>horse</span> <span class=indam>race</span>.[sound:rec1373295393.mp3]</span><br><span style=''><i>a race - </i></span>","STT":152},
{"FRONT":"<span style='font-size: 28px; '>What would you do <b>if you were </b><span class=indam>a_____</span><b> by a shark?</b>[sound:rec1373292893.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteo72tl6.png' /></span>","BACK":"<span style='font-size: 28px; '>What would you do <b>if you were </b><span class=indam>attacked</span><b> by a shark?</b>[sound:rec1373292898.mp3]</span><br><span style=''><i>to attack sb. - атаковать</i></span>","STT":73},
{"FRONT":"<span style='font-size: 28px; '>If you do that again you won't watch T.V. all week. <b>I'm </b><span class=indam>w_____</span><b> you!</b>[sound:rec1373293032.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaz5l5o.png' /></span>","BACK":"<span style='font-size: 28px; '>If you do that again you won't watch T.V. all week. <b>I'm </b><span class=indam>warning</span><b> you!</b>[sound:rec1373293040.mp3]</span><br><span style=''><i>a warning (n.) - предупреждение</i><br><i>to warn sb. (v.) - предупреждать</i></span>","STT":79},
{"FRONT":"<span style='font-size: 28px; '>After the fight there was some <span class=indam>b____</span> on the street.[sound:rec1373295137.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteydcqds.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>After the fight there was some <span class=indam>blood</span> on the street.[sound:rec1373295143.mp3]<br /></span><br><span style=''><i>blood - кровь</i></span>","STT":141},
{"FRONT":"<span style='font-size: 28px; '>I wanted to buy a new iPhone. But after I saw the price<span class=indam> I </span><span class=indam>ch____ my m____</span>. <i>(made a different choice)</i>[sound:rec1373293433.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteeebj1n.png' /></span>","BACK":"<span style='font-size: 28px; '>I wanted to buy a new iPhone. But after I saw the price<span class=indam> I</span> <span class=indam>changed my mind</span>.[sound:rec1373293441.mp3]</span><br><span style=''><i>to change one's mind - передумать</i></span>","STT":95},
{"FRONT":"<span style='font-size: 28px; '>Yesterday I was bitten by <span class=indam>a </span><span class=indam>m_____</span>.[sound:rec1373291454.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5k7bcj.png' /></span>","BACK":"<span style='font-size: 28px; '>Yesterday I was bitten by <span class=indam>a mosquito</span>.[sound:rec1373291459.mp3]</span><br><span style=''><i>a mosquito</i></span>","STT":17},
{"FRONT":"<span style='font-size: 28px; '>If it rains tomorrow, <span class=indam>_______</span><b> at home. (I / stay)</b>[sound:rec1373292513.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastek4nwqd.png' /></span>","BACK":"<span style='font-size: 28px; '>If it rains tomorrow, <span class=indam>I'll stay</span><b> at home.</b>[sound:rec1373292517.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first condional </span><i>(if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":54},
{"FRONT":"<span style='font-size: 28px; '>We didn't go swimming because there was <span class=indam>a w_____ sign</span> about sharks. <i>(something that tells you about a danger)</i>[sound:rec1373293012.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekznx4t.png' /></span>","BACK":"<span style='font-size: 28px; '>We didn't go swimming because there was <span class=indam>a warning sign</span> about sharks.[sound:rec1373293019.mp3]</span><br><span style=''><i>a warning (n.) - предупреждение</i><br><i>to warn sb. (v.) - предупреждать</i></span>","STT":78},
{"FRONT":"<span style='font-size: 28px; '>I don't know what to do, I feel quite <span class=indam>c______</span>. <i>(uncertain, with mixed thoughts or emotions)</i>[sound:rec1373293827.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec_cpzd.png' /></span>","BACK":"<span style='font-size: 28px; '>I don't know what to do, I feel quite <span class=indam>conf</span><span style='font-weight:600; color:#ff5500;'>u</span><span class=indam>sed</span>.[sound:rec1373293836.mp3]</span><br><span style=''><i>conf</i><span style='font-style:italic; color:#ff5500;'>u</span><i>sed (adj.) - </i></span>","STT":105},
{"FRONT":"<span style='font-size: 28px; '>We saw a <span class=indam>h____</span> whale jumping out of the water. <i>(very big)</i>[sound:rec1373291617.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastej9fjyh.png' /></span>","BACK":"<span style='font-size: 28px; '>We saw a <span class=indam>huge</span> whale jumping out of the water.[sound:rec1373291631.mp3]</span><br><span style=''><i>huge (adj.) - оргомный</i><br></span>","STT":155},
{"FRONT":"<span style='font-size: 28px; '>I think you <span class=indam>s_____</span> spend more time with your girlfriend.[sound:rec1373294086.mp3]<br><img class='center-block img-responsive hinhdep'  src='pastef5eho5.png' /></span>","BACK":"<span style='font-size: 28px; '>I think you <span class=indam>should</span> spend more time with your girlfriend.[sound:rec1373294115.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":116},
{"FRONT":"<span style='font-size: 28px; '>My friend has a pet <span class=indam>m____</span>.[sound:rec1373291236.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastendlgie.png' /></span>","BACK":"<span style='font-size: 28px; '>My friend has a pet <span class=indam>mouse</span>.[sound:rec1373291241.mp3]</span><br><span style=''><i>a mouse - мышь </i><br /><i>2 mice</i></span>","STT":10},
{"FRONT":"<span style='font-size: 28px; '>Thomas, you need to tidy your room. <b>It's a </b><span class=indam>m____</span><b>! </b><i>(untidy, in a state of disorder) </i>[sound:rec1373293325.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqcgiro.png' /></span>","BACK":"<span style='font-size: 28px; '>Thomas, you need to tidy your room. <b>It's a </b><span class=indam>mess</span><b>!</b>[sound:rec1373293331.mp3]</span><br><span style=''><i>a mess - беспорядок</i><br /></span>","STT":91},
{"FRONT":"<span style='font-size: 28px; '>This website <span class=indam>c_____</span> prices from different supermarkets. <i>(shows differences) </i>[sound:rec1373293859.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoaoxtx.png' /></span>","BACK":"<span style='font-size: 28px; '>This website <span class=indam>compares</span> prices from different supermarkets.[sound:rec1373293866.mp3]</span><br><span style=''><i>to compare sth. - сравнивать</i><br></span>","STT":106},
{"FRONT":"<span style='font-size: 28px; '>I wouldn't buy that car <b>if I </b><span class=indam>____</span><b> you</b>. <b>(be)</b>[sound:rec1373293180.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste17g3gg.png' /></span>","BACK":"<span style='font-size: 28px; '>I wouldn't buy that car <b>if I </b><span class=indam>were</span><b> you.</b>[sound:rec1373293197.mp3]<b><br /></b><i>also</i><br />I wouldn't buy that car <b>if I </b><span class=indam>was</span><b> you.</b></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span><br /><i>note phrase: 'if I were you'</i></span>","STT":85},
{"FRONT":"<span style='font-size: 28px; '>-Are you going to the party tonight?[sound:rec1373293450.mp3]<br />-<b>I don't know. I'm not </b><span class=indam>s___</span><b>.</b><br /><img class='center-block img-responsive hinhdep'  src='pasteqgrd0y.png' /></span>","BACK":"<span style='font-size: 28px; '>-Are you going to the party tonight?<br />-<b>I don't know. I'm not </b><span class=indam>sure</span><b>.</b>[sound:rec1373293457.mp3]</span><br><span style=''><i>sure (adj.) - уверен(а)</i><br></span>","STT":96},
{"FRONT":"<span style='font-size: 28px; '>The Underground would be much better <b>if it </b><span class=indam>______</span><b> so crowded.</b> <b>(not be)</b>[sound:rec1373293233.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepdyi7f.png' /></span>","BACK":"<span style='font-size: 28px; '>The Underground would be much better <b>if it </b><span class=indam>wasn't</span><b> so crowded.</b>[sound:rec1373293244.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":87},
{"FRONT":"<span style='font-size: 28px; '>Three spoonfuls in my cup please. <b>I like </b><span class=indam>_____</span><b> coffee!</b> <i>(the opposite of 'weak')</i>[sound:rec1373292321.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteahukvu.png' /></span>","BACK":"<span style='font-size: 28px; '>Three spoonfuls in my cup please. <b>I like </b><span class=indam>strong</span><b> coffee!</b>[sound:rec1373292327.mp3]</span><br><span style=''><i>strong coffee - крепкий кофе</i></span>","STT":45},
{"FRONT":"<span style='font-size: 28px; '>Charlotte Rampling looks like she did when she was young.<b> Her face hasn't </b><span class=indam>c____</span><b> much.</b>[sound:rec1373292235.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep_mch5.png' /></span>","BACK":"<span style='font-size: 28px; '>Charlotte Rampling looks like she did when she was young. <b>Her face hasn't </b><span class=indam>changed</span><b> much.</b>[sound:rec1373292244.mp3]</span><br><span style=''><i>to change - изменяться</i></span>","STT":42},
{"FRONT":"<span style='font-size: 28px; '>It's cold outside, so you should <span class=indam>d__ ___</span><b> your coat. </b><i>(close)</i>[sound:rec1373294739.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoyfd9o.png' /></span>","BACK":"<span style='font-size: 28px; '>It's cold outside, so you should <span class=indam>do up</span><b> your coat.</b>[sound:rec1373294745.mp3]</span><br><span style=''><i>to do sth. up</i></span>","STT":131},
{"FRONT":"<span style='font-size: 28px; '>There was lots of water, so he <span class=indam>c____</span> the child in his hands. <i>(moved, transported)</i>[sound:rec1373293950.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev5ynoe.png' /></span>","BACK":"<span style='font-size: 28px; '>There was lots of water, so he <span class=indam>carried</span> the child in his hands.[sound:rec1373293958.mp3]</span><br><span style=''><i>to carry sth. - носить</i></span>","STT":109},
{"FRONT":"<span style='font-size: 28px; '>If you broke his computer, <b>I think you </b><span class=indam>s_____</span><b> buy him a new one.</b>[sound:rec1373294126.mp3]</span>","BACK":"<span style='font-size: 28px; '>If you broke his computer, <b>I think you </b><span class=indam>should</span><b> buy him a new one.</b>[sound:rec1373294132.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":117},
{"FRONT":"<span style='font-size: 28px; '>-I'm going to bed.[sound:rec1373295120.mp3]<br />-<span class=indam>G___ n____</span>.<b> Sweet dreams.</b></span>","BACK":"<span style='font-size: 28px; '>-I'm going to bed.<br />-<span class=indam>Good night</span>.<b> Sweet dreams.</b>[sound:rec1373295127.mp3]</span><br><span style=''></span>","STT":140},
{"FRONT":"<span style='font-size: 28px; '>If he doesn't come, <b>then </b><span class=indam>_________</span><b> all the cake.</b>[sound:rec1373292799.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefnk069.png' /></span>","BACK":"<span style='font-size: 28px; '>If he doesn't come, <b>then </b><span class=indam>we'll eat</span><b> all the cake.</b>[sound:rec1373292805.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":68},
{"FRONT":"<span style='font-size: 28px; '>Look at all the different <span class=indam>a_____</span>.[sound:rec1373291972.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0zhigu.png' /></span>","BACK":"<span style='font-size: 28px; '>Look at all the different <span class=indam>animals</span>.[sound:rec1373291977.mp3]</span><br><span style=''><i>an animal - животное</i></span>","STT":34},
{"FRONT":"<span style='font-size: 28px; '>If it <span class=indam>_____</span> tomorrow, I'll stay at home. <b>(rain)</b>[sound:rec1373292494.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastek4nwqd.png' /></span>","BACK":"<span style='font-size: 28px; '>If it <span class=indam>rains</span> tomorrow, I'll stay at home.[sound:rec1373292500.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first condional </span><i>(if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":53},
{"FRONT":"<span style='font-size: 28px; '>I think that this man is<span class=indam> a</span> <span class=indam>d____</span> <span class=indam>addict</span>.[sound:rec1373295213.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteefadjn.png' /></span>","BACK":"<span style='font-size: 28px; '>I think that this man is <span class=indam>a</span> <span class=indam>drug</span> <span class=indam>addict</span>.[sound:rec1373295217.mp3]</span><br><span style=''><i>drugs (n.) - наркотики</i><br /><i>drug addict - наркоман</i></span>","STT":146},
{"FRONT":"<span style='font-size: 28px; '>This table is made of <span class=indam>w____</span>.[sound:rec1373295149.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteljjipt.png' /></span>","BACK":"<span style='font-size: 28px; '>This table is made of <span class=indam>wood</span>.[sound:rec1373295153.mp3]</span><br><span style=''><i>wood (n.) - дерево</i><br></span>","STT":142},
{"FRONT":"<span style='font-size: 28px; '>What a beautiful <span class=indam>b_____</span>![sound:rec1373291429.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1jnldh.png' /></span>","BACK":"<span style='font-size: 28px; '>What a beautiful <span class=indam>butterfly</span>![sound:rec1373291433.mp3]</span><br><span style=''><i>a butterfly</i><br></span>","STT":16},
{"FRONT":"<span style='font-size: 28px; '>When we were in Egypt we rode <span class=indam>c_____</span>.[sound:rec1373291491.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteijil9d.png' /></span>","BACK":"<span style='font-size: 28px; '>When we were in Egypt we rode <span class=indam>camels</span>.[sound:rec1373291496.mp3]</span><br><span style=''><i>a camel</i></span>","STT":19},
{"FRONT":"<span style='font-size: 28px; '>On the beach we just wore our <span class=indam>s_______ _______</span>. <i>(clothes for swimming)</i>[sound:rec1373293107.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekyhkx5.png' /></span>","BACK":"<span style='font-size: 28px; '>On the beach we just wore our <span class=indam>swimming costumes</span>.[sound:rec1373293115.mp3]<br /><i>or</i><br />On the beach we just wore our <span class=indam>swimsuits</span>.</span><br><span style=''><i>a swimming costume, a swimsuit - купальник</i></span>","STT":83},
{"FRONT":"<span style='font-size: 28px; '>David Beckham was a really <span class=indam>b_____</span> footballer. <i>(very good)</i>[sound:rec1373293069.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0zamex.png' /></span>","BACK":"<span style='font-size: 28px; '>David Beckham was a really <span class=indam>brilliant</span> footballer.[sound:rec1373293075.mp3]</span><br><span style=''><i>brilliant (adj.) - блестящий </i></span>","STT":81},
{"FRONT":"<span style='font-size: 28px; '>Dad, I don't know what to do. Please can you give me some <span class=indam>a____</span>?[sound:rec1373293877.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemkr49e.png' /></span>","BACK":"<span style='font-size: 28px; '>Dad, I don't know what to do. Please can you give me some <span class=indam>advice</span>?[sound:rec1373293884.mp3]</span><br><span style=''><i>advice (n. - uncountable)</i></span>","STT":107},
{"FRONT":"<span style='font-size: 28px; '><b>It's </b><span class=indam>n____</span><b> 12 o'clock. </b><i>(almost)</i>[sound:rec1373293081.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyvshtc.png' /><br /></span>","BACK":"<span style='font-size: 28px; '><b>It's </b><span class=indam>nearly</span><b> 12 o'clock.</b>[sound:rec1373293096.mp3]<br /></span><br><span style=''><i>nearly - почти</i></span>","STT":82},
{"FRONT":"<span style='font-size: 28px; '>I didn't have enough money to pay, <b>so my friend </b><span class=indam>l____</span><b> me $100.</b> <i>(gave me for a time)</i>[sound:rec1373292065.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecicpvy.png' /></span>","BACK":"<span style='font-size: 28px; '>I didn't have enough money to pay, <b>so my friend </b><span class=indam>lent</span><b> me $100.</b>[sound:rec1373292072.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>lend - lent - lent</span><br /><i>to lend sb. sth. - одолжить кому-л. что-л. на время</i></span>","STT":37},
{"FRONT":"<span style='font-size: 28px; '>-How do you say this animal in English?[sound:rec1373291991.mp3]<br />-'<span style='color:#0000ff;'>_______</span>'.<br /><img class='center-block img-responsive hinhdep'  src='paste5dddxs.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-How do you say this animal in English?<br />-'<span class=indam>Rhinoceros</span>' or simply '<span class=indam>rhino</span>'.[sound:rec1373292003.mp3]</span><br><span style=''></span>","STT":35},
{"FRONT":"<span style='font-size: 28px; '>Don't swim here - <b>there are </b><span class=indam>c_____</span><b>.</b>[sound:rec1373291195.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez3wix7.png' /></span>","BACK":"<span style='font-size: 28px; '>Don't swim here - <b>there are </b><span class=indam>cr</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>codiles</span><b>.</b>[sound:rec1373291200.mp3]</span><br><span style=''><i>a cr</i><span style='font-style:italic; color:#ff5500;'>o</span><i>codile</i><br></span>","STT":8},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1373294688.mp3]<b>She's using the </b><span class=indam>p______</span><b>.</b><br /><img class='center-block img-responsive hinhdep'  src='pastedjucxo.png' /></span>","BACK":"<span style='font-size: 28px; '><b>She's using the </b><span class=indam>photocopier</span><b>.</b>[sound:rec1373294693.mp3]</span><br><span style=''></span>","STT":129},
{"FRONT":"<span style='font-size: 28px; '>-Why didn't he call me?[sound:rec1373293773.mp3]<br />-<b>Well, he </b><span class=indam>m____ not</span><b> like you.</b>[sound:rec1373293787.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteikopc4.png' /></span>","BACK":"<span style='font-size: 28px; '>-Why didn't he call me?<br />-<b>Well, he </b><span class=indam>might not</span><b> like you.</b><br /><i>or</i><br />-<b>Well, he </b><span class=indam>may not</span><b> like you.</b></span><br><span style=''></span>","STT":103},
{"FRONT":"<span style='font-size: 28px; '>Don't do that Harry. <b>You </b><span class=indam>s_____</span><b> take other people's things.</b>[sound:rec1373294249.mp3]<br><img class='center-block img-responsive hinhdep'  src='pasteijufqo.png' /></span>","BACK":"<span style='font-size: 28px; '>Don't do that Harry. <b>You </b><span class=indam>shouldn't</span><b> take other people's things.</b>[sound:rec1373294255.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":122},
{"FRONT":"<span style='font-size: 28px; '>Do you find it difficult to make <span class=indam>d______</span>? <i>(choices)</i>[sound:rec1373293356.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastes2ofcn.png' /></span>","BACK":"<span style='font-size: 28px; '>Do you find it difficult to make <span class=indam>dec</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>sions</span>?[sound:rec1373293349.mp3]</span><br><span style=''><i>a dec</i><span style='font-style:italic; color:#ff5500;'>i</span><i>sion (n.) - решение </i><br /><i>to dec</i><span style='font-style:italic; color:#ff5500;'>i</span><i>de (v.) - решить</i><br /><i>dec</i><span style='font-style:italic; color:#ff5500;'>i</span><i>sive (adj.) - решительный</i></span>","STT":92},
{"FRONT":"<span style='font-size: 28px; '>Honey is <span class=indam>_____</span> by bees. <b>(make)</b>[sound:rec1373291641.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteytwqzi.png' /></span>","BACK":"<span style='font-size: 28px; '>Honey is <span class=indam>made</span> by bees.[sound:rec1373291646.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>make - made - made</span><br /><i>to make</i></span>","STT":24},
{"FRONT":"<span style='font-size: 28px; '>If Jack <span class=indam>_________</span> then we'll arrive sooner. <b>(drive)</b>[sound:rec1373292815.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5b1dnp.png' /></span>","BACK":"<span style='font-size: 28px; '>If Jack <span class=indam>drives</span> then we'll arrive sooner.[sound:rec1373292821.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":69},
{"FRONT":"<span style='font-size: 28px; '>Let's buy a lottery ticket!<b> We </b><span class=indam>m____</span><b> win!</b>[sound:rec1373293568.mp3]<br><img class='center-block img-responsive hinhdep'  src='pasteacvv2r.png' /></span>","BACK":"<span style='font-size: 28px; '>Let's buy a lottery ticket!<b> We </b><span class=indam>might</span><b> win!</b>[sound:rec1373293575.mp3]<br /><i>or</i><br />Let's buy a lottery ticket! <b>We </b><span class=indam>may</span><b> win!</b></span><br><span style=''></span>","STT":99},
{"FRONT":"<span style='font-size: 28px; '>I hope you have a safe journey.<b> I'm looking forward </b><span class=indam>[...]</span><b> seeing you soon.</b>[sound:rec1373295313.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiap7lh.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>I hope you have a safe journey.<b> I'm looking forward </b><span class=indam>to</span><b> seeing you soon.</b>[sound:rec1373295320.mp3]<br /></span><br><span style=''></span>","STT":150},
{"FRONT":"<span style='font-size: 28px; '>I think Homer is completely <span class=indam>c____</span>! <i>(mad)</i>[sound:rec1373294659.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8ksgfv.png' /></span>","BACK":"<span style='font-size: 28px; '>I think Homer is completely <span class=indam>crazy</span>![sound:rec1373294663.mp3]</span><br><span style=''><i>crazy (adj.)</i></span>","STT":128},
{"FRONT":"<span style='font-size: 28px; '>A young dog is called <span class=indam>a _____</span>.[sound:rec1373295171.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5m2kmo.png' /></span>","BACK":"<span style='font-size: 28px; '>A young dog is called <span class=indam>a puppy</span>.[sound:rec1373295175.mp3]</span><br><span style=''></span>","STT":144},
{"FRONT":"<span style='font-size: 28px; '>This horse is ill because it was <span class=indam>t_____</span><b> badly by it's owners. </b><i>(the owners did bad things to it, they didn't look after it)</i>[sound:rec1373295975.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexy3msw.png' /></span>","BACK":"<span style='font-size: 28px; '>This horse is ill because it was <span class=indam>treated</span> <b>badly by it's owners.</b>[sound:rec1373295982.mp3]</span><br><span style=''><i>to treat sb. (badly) - плохо относятся, издеваться</i></span>","STT":113},
{"FRONT":"<span style='font-size: 28px; '>If it's sunny this weekend, <span class=indam>_____</span> <b>to the park. (we / go)</b>[sound:rec1373292554.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteubqxda.png' /></span>","BACK":"<span style='font-size: 28px; '>If it's sunny this weekend, <span class=indam>we'll go</span><b> to the park.</b>[sound:rec1373292559.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":56},
{"FRONT":"<span style='font-size: 28px; '>What <span class=indam>w___</span> you do if you saw a crocodile swimming towards you?[sound:rec1373291078.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2ezydn.png' /></span>","BACK":"<span style='font-size: 28px; '>What <span class=indam>would</span> you do if you saw a crocodile swimming towards you?[sound:rec1373291086.mp3]</span><br><span style=''><i>use the </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":3},
{"FRONT":"<span style='font-size: 28px; '>Help! There's <span class=indam>a</span> <span class=indam>s_____</span> on me![sound:rec1373291533.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteu0x2g9.png' /></span>","BACK":"<span style='font-size: 28px; '>Help! There's <span class=indam>a</span> <span class=indam>spider</span> on me![sound:rec1373291539.mp3]</span><br><span style=''><i>a spider</i></span>","STT":21},
{"FRONT":"<span style='font-size: 28px; '>It's a really good film. <b>I think you </b><span class=indam>s_____</span><b> watch it.</b>[sound:rec1373294030.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteesguol.png' /></span>","BACK":"<span style='font-size: 28px; '>It's a really good film. <b>I think you </b><span class=indam>should</span><b> watch it.</b>[sound:rec1373294035.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":115},
{"FRONT":"<span style='font-size: 28px; '>If I was rich <b>I </b><span class=indam>_________</span><b> a job. (not have)</b>[sound:rec1373293210.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefq2mx3.png' /></span>","BACK":"<span style='font-size: 28px; '>If I was rich <b>I </b><span class=indam>wouldn't have</span><b> a job.</b>[sound:rec1373293214.mp3]<br /></span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":86},
{"FRONT":"<span style='font-size: 28px; '>If you won a lot of money, <b>what </b><span class=indam>___</span><b> you do?</b>[sound:rec1373291162.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2aa_pr.png' /></span>","BACK":"<span style='font-size: 28px; '>If you won a lot of money, <b>what </b><span class=indam>would</span><b> you do?</b>[sound:rec1373291174.mp3]</span><br><span style=''><i>use the </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":7},
{"FRONT":"<span style='font-size: 28px; '>Did you know that <span class=indam>____</span> are quite intelligent animals?[sound:rec1373291666.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteu7wdqa.png' /></span>","BACK":"<span style='font-size: 28px; '>Did you know that <span class=indam>pigs</span> are quite intelligent animals?[sound:rec1373291672.mp3]</span><br><span style=''><i>a pig</i></span>","STT":26},
{"FRONT":"<span style='font-size: 28px; '>What would you do <span class=indam>[...]</span> <b>you won a lot of money?</b>[sound:rec1373291128.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2aa_pr.png' /></span>","BACK":"<span style='font-size: 28px; '>What would you do <span class=indam>if</span> <b>you won a lot of money?</b>[sound:rec1373291133.mp3]</span><br><span style=''><i>use the </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":5},
{"FRONT":"<span style='font-size: 28px; '>Look at that <span class=indam>e____</span>![sound:rec1373291465.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastev8lbir.png' /></span>","BACK":"<span style='font-size: 28px; '>Look at that <span class=indam>eagle</span>![sound:rec1373291469.mp3]</span><br><span style=''><i>an eagle</i></span>","STT":18},
{"FRONT":"<span style='font-size: 28px; '>If <span class=indam>_________</span>, you won't pass your exams. <b>(you / not study)</b>[sound:rec1373292714.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1l0end.png' /></span>","BACK":"<span style='font-size: 28px; '>If <span class=indam>you</span> <span class=indam>don't study</span>, you won't pass your exams.[sound:rec1373292726.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first condional </span><i>(if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":65},
{"FRONT":"<span style='font-size: 28px; '>We <span class=indam>m____</span> have a picnic tomorrow, but it depends on the weather.[sound:rec1373293468.mp3]</span>","BACK":"<span style='font-size: 28px; '>We <span class=indam>might</span> have a picnic tomorrow, but it depends on the weather.[sound:rec1373293477.mp3]<br /><i>or</i><br />We <span class=indam>may</span> have a picnic tomorrow, but it depends on the weather.</span><br><span style=''></span>","STT":97},
{"FRONT":"<span style='font-size: 28px; '>We're <span class=indam>h_____</span> our mother carry the shopping![sound:rec1373293900.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyqrle9.png' /></span>","BACK":"<span style='font-size: 28px; '>We're <span class=indam>helping</span> our mother carry the shopping![sound:rec1373293914.mp3]</span><br><span style=''><i>to help sb. </i></span>","STT":108},
{"FRONT":"<span style='font-size: 28px; '>I can't find my mobile. <b>I think I </b><span class=indam>le____</span><b> it on the beach.</b>[sound:rec1373292414.mp3]<b><br /></b><img class='center-block img-responsive hinhdep'  src='pastexlro3f.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I can't find my mobile. <b>I think I </b><span class=indam>left</span><b> it on the beach.</b>[sound:rec1373292420.mp3]</span><br><span style=''><i>to leave sth. - оставить что-л.</i></span>","STT":50},
{"FRONT":"<span style='font-size: 28px; '>Actually, <span class=indam>I've</span> <span class=indam>ch_____ my m____</span>. I don't want to go to MacDonald's. <i>(made a different decision)</i>[sound:rec1373293402.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehyoa5s.png' /></span>","BACK":"<span style='font-size: 28px; '>Actually, <span class=indam>I've </span><span class=indam>changed my mind</span>. I don't want to go to MacDonald's.[sound:rec1373293411.mp3]</span><br><span style=''><i>to change one's mind - передумать</i></span>","STT":94},
{"FRONT":"<span style='font-size: 28px; '>I know who ate the biscuits.<b> Stop </b><span class=indam>l____</span><b> and tell me the truth!</b> <i>(saying false, untrue things)</i>[sound:rec1373295407.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9hjhca.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>I know who ate the biscuits. <b>Stop </b><span class=indam>lying</span><b> and tell me the truth!</b>[sound:rec1373295414.mp3]<br /></span><br><span style=''><i>to lie - </i></span>","STT":153},
{"FRONT":"<span style='font-size: 28px; '>If you get that new job, <span class=indam>______</span> <b>more money?</b> <b>(you / earn)</b>[sound:rec1373292654.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezlqts7.png' /></span>","BACK":"<span style='font-size: 28px; '>If you get that new job, <span class=indam>will you earn</span> <b>more money?</b>[sound:rec1373292659.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":61},
{"FRONT":"<span style='font-size: 28px; '>Let's phone the restaurant. <b>It </b><span class=indam>m____</span><b> be full.</b>[sound:rec1373293751.mp3]</span>","BACK":"<span style='font-size: 28px; '>Let's phone the restaurant. <b>It </b><span class=indam>might</span><b> be full.</b>[sound:rec1373293758.mp3]<br /><i>or</i><br />Let's phone the restaurant. <b>It </b><span class=indam>may</span><b> be full.</b></span><br><span style=''></span>","STT":102},
{"FRONT":"<span style='font-size: 28px; '>During yesterday's meeting, <b>Darren </b><span class=indam>ex_____</span><b> the new strategy.</b>[sound:rec1373292849.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteos5pjd.png' /></span>","BACK":"<span style='font-size: 28px; '>During yesterday's meeting,<b> Darren </b><span class=indam>explained</span><b> the new strategy.</b>[sound:rec1373292855.mp3]</span><br><span style=''><i>to explain sth. - объяснить</i></span>","STT":71},
{"FRONT":"<span style='font-size: 28px; '>He reads a lot. <b>He's a very </b><span class=indam>c_____</span><b> boy. </b><i>(intelligent, smart)</i>[sound:rec1373294826.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez_lvsu.png' /></span>","BACK":"<span style='font-size: 28px; '>He reads a lot. <b>He's a very </b><span class=indam>clever</span><b> boy.</b>[sound:rec1373294831.mp3]</span><br><span style=''><i>clever (adj.)</i></span>","STT":136},
{"FRONT":"<span style='font-size: 28px; '>What a nice cat. <b>Is it male or </b><span class=indam>_____</span><b>?</b> <i>(a 'girl')</i>[sound:rec1373291940.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaokyxo.png' /></span>","BACK":"<span style='font-size: 28px; '>What a nice cat.<b> Is it male or </b><span class=indam>f</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>male</span><b>?</b>[sound:rec1373291946.mp3]</span><br><span style=''><i>f</i><span style='font-style:italic; color:#ff5500;'>e</span><i>male - женский</i></span>","STT":32},
{"FRONT":"<span style='font-size: 28px; '>I think you <span class=indam>s____</span> stop smoking and lose some weight.[sound:rec1373294493.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteqde01a.png' /></span>","BACK":"<span style='font-size: 28px; '>I think you <span class=indam>should</span> stop smoking and lose some weight.[sound:rec1373294595.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":125},
{"FRONT":"<span style='font-size: 28px; '>It's a strange film. <b>You </b><span class=indam>m____ not</span><b> like it.</b>[sound:rec1373293688.mp3]<br><img class='center-block img-responsive hinhdep'  src='pasteqftu_n.png' /></span>","BACK":"<span style='font-size: 28px; '>It's a strange film. <b>You </b><span class=indam>might not</span><b> like it.</b>[sound:rec1373293718.mp3]<br /><i>or</i><br />It's a strange film. <b>You </b><span class=indam>may not</span><b> like it.</b></span><br><span style=''></span>","STT":101},
{"FRONT":"<span style='font-size: 28px; '>What would you do <b>if you </b><span class=indam>____</span><b> a bear in the forest?</b> <b>(meet)</b>[sound:rec1373290962.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastete0wib.png' /></span>","BACK":"<span style='font-size: 28px; '>What would you do <b>if you </b><span class=indam>met</span><b> a bear in the forest</b>?[sound:rec1373290974.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>meet - met - met</span><br /><i>use the </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":2},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1373292921.mp3]<b>He's </b><span class=indam>c______</span><b> a tree.</b> <i>(going up)</i><br /><img class='center-block img-responsive hinhdep'  src='pastebhqu8y.png' /></span>","BACK":"<span style='font-size: 28px; '><b>He's </b><span class=indam>climbing</span><b> a tree.</b>[sound:rec1373292956.mp3]<br /><i>or</i><br /><b>He's </b><span class=indam>climbing</span><b> </b><span class=indam>up</span><b> a tree.</b></span><br><span style=''><i>to climb sth. - залезать, взбираться</i><br></span>","STT":75},
{"FRONT":"<span style='font-size: 28px; '>There might be a lot of traffic later so <b>we </b><span class=indam>s____</span><b> leave early.</b>[sound:rec1373294608.mp3]</span>","BACK":"<span style='font-size: 28px; '>There might be a lot of traffic later so <b>we </b><span class=indam>should</span><b> leave early.</b>[sound:rec1373294614.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":126},
{"FRONT":"<span style='font-size: 28px; '>I once travelled on a Russian train from Moscow to Yekaterinburg.<b> It was an interesting </b><span class=indam>j______</span>. <i>(when you travel from once place to another)</i>[sound:rec1373292045.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepbrjmm.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>I once travelled on a Russian train from Moscow to Yekaterinburg.<b> It was an interesting </b><span class=indam>journey</span><b>.</b>[sound:rec1373292035.mp3]</span><br><span style=''><i>a journey - поездка, путь</i></span>","STT":36},
{"FRONT":"<span style='font-size: 28px; '>I don't like it here, <b>I want to </b><span class=indam>c_____</span><b> my job. </b><i>(find a new one)</i>[sound:rec1373292143.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste8qq9hy.png' /></span>","BACK":"<span style='font-size: 28px; '>I don't like it here, <b>I want to </b><span class=indam>change</span><b> my job.</b>[sound:rec1373292148.mp3]</span><br><span style=''><i>to change sth. - поменять что-л.</i></span>","STT":40},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> it rains tomorrow, I'll stay at home.[sound:rec1373292830.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastek4nwqd.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>If</span> it rains tomorrow, I'll stay at home.[sound:rec1373292836.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":70},
{"FRONT":"<span style='font-size: 28px; '>Oh no! <b>I've </b><span class=indam>s____</span><b> red wine on my shirt.</b>[sound:rec1373292430.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecvgcrf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Oh no!<b> I've </b><span class=indam>spilt</span><b> red wine on my shirt.</b>[sound:rec1373292461.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>spill - spilt - spilt</span><br /><i>to spill sth. - пролить</i></span>","STT":51},
{"FRONT":"<span style='font-size: 28px; '>I wouldn't buy that car <span class=indam>[...]</span> <b>I were you.</b>[sound:rec1373293167.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste17g3gg.png' /></span>","BACK":"<span style='font-size: 28px; '>I wouldn't buy that car <span class=indam>if</span><b> I were you.</b>[sound:rec1373293149.mp3][sound:rec1373293171.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":84},
{"FRONT":"<span style='font-size: 28px; '>If you meet my daughter,<b> </b><span class=indam>______</span><b> in love with her.</b> <b>(you / fall)</b>[sound:rec1373292100.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste3zibqb.png' /></span>","BACK":"<span style='font-size: 28px; '>If you meet my daughter, <span class=indam>you'll fall</span> <b>in love with her.</b>[sound:rec1373292105.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first condional </span><i>(if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":39},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>A </span><span class=indam>b____</span> is a male cow.[sound:rec1373291904.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteo3ci_k.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>A</span> <span class=indam>bull</span> is a male cow.[sound:rec1373291908.mp3]</span><br><span style=''><i>a bull</i></span>","STT":30},
{"FRONT":"<span style='font-size: 28px; '>I think you're ill. You've got a high <span class=indam>t______</span>.[sound:rec1373295236.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewd4cya.png' /></span>","BACK":"<span style='font-size: 28px; '>I think you're ill. You've got a high <span class=indam>temperature</span>.[sound:rec1373295242.mp3]</span><br><span style=''></span>","STT":147},
{"FRONT":"<span style='font-size: 28px; '>-What's the weather going to be later?[sound:rec1373292989.mp3]<br /><b>-I don't know. It </b><span class=indam>m_____</span><b> rain. </b><i>(it's possible, but I'm not sure)</i><br /><img class='center-block img-responsive hinhdep'  src='pasteu_6oys.png' /></span>","BACK":"<span style='font-size: 28px; '><b>-I don't know. It </b><span class=indam>might</span><b> rain.</b>[sound:rec1373292999.mp3]<br /><i>or</i><br /><b>-I don't know. It </b><span class=indam>may</span><b> rain.</b></span><br><span style=''><span style='font-weight:600; font-style:italic;'>might</span><i> (or </i><span style='font-weight:600; font-style:italic;'>may</span><i>) - может</i></span>","STT":77},
{"FRONT":"<span style='font-size: 28px; '>I'm washing my hair with <span class=indam>sh_____</span>. <i>(soap for washing hair)</i>[sound:rec1373295182.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteybwklo.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm washing my hair with <span class=indam>shampoo</span>.[sound:rec1373295194.mp3]</span><br><span style=''></span>","STT":145},
{"FRONT":"<span style='font-size: 28px; '>It's 5 o'clock in the morning. It's already getting <span class=indam>l____</span>. <i>(the opposite of 'dark')</i>[sound:rec1373294761.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteueix1k.png' /></span>","BACK":"<span style='font-size: 28px; '>It's 5 o'clock in the morning. It's already getting <span class=indam>light</span>.[sound:rec1373294767.mp3]</span><br><span style=''><i>light (adj.) - свелтый</i></span>","STT":132},
{"FRONT":"<span style='font-size: 28px; '>If I lived in the centre of town <b>I </b><span class=indam>__________</span><b> a car. (not drive)</b>[sound:rec1373293311.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemexrzk.png' /></span>","BACK":"<span style='font-size: 28px; '>If I lived in the centre of town <b>I </b><span class=indam>wouldn't drive</span><b> a car.</b>[sound:rec1373293316.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":90},
{"FRONT":"<span style='font-size: 28px; '>Please put your rubbish in <span class=indam>the</span> <span class=indam>b____</span>.[sound:rec1373294880.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastektigar.png' /></span>","BACK":"<span style='font-size: 28px; '>Please put your rubbish in <span class=indam>the</span> <span class=indam>bin</span>.[sound:rec1373294892.mp3]</span><br><span style=''></span>","STT":138},
{"FRONT":"<span style='font-size: 28px; '>What would you do <b>if you </b><span class=indam>_____</span><b> a crocodile swimming towards you?</b> <b>(see)</b>[sound:rec1373291099.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2ezydn.png' /></span>","BACK":"<span style='font-size: 28px; '>What would you do <b>if you </b><span class=indam>saw</span><b> a crocodile swimming towards you?</b>[sound:rec1373291114.mp3]</span><br><span style=''><i>use the </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":4},
{"FRONT":"<span style='font-size: 28px; '>We might have a picnic tomorrow,<b> but it </b><span class=indam>d_____ __</span><b> the weather</b>. <i>(the weather is the important factor)</i>[sound:rec1373293800.mp3]</span>","BACK":"<span style='font-size: 28px; '>We might have a picnic tomorrow, <b>but it </b><span class=indam>depends on</span><b> the weather.</b>[sound:rec1373293814.mp3]</span><br><span style=''><i>to depend on sth. - зависить от чего-л.</i></span>","STT":104},
{"FRONT":"<span style='font-size: 28px; '>What <span class=indam>w___</span> you do if you met a bear in the forest?[sound:rec1373290896.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastete0wib.png' /></span>","BACK":"<span style='font-size: 28px; '>What <span class=indam>would</span> you do if you met a bear in the forest?[sound:rec1373290904.mp3]</span><br><span style=''><i>use the </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":1},
{"FRONT":"<span style='font-size: 28px; '>Try the shirt on.<b> It </b><span class=indam>m___ not</span><b> be your size.</b>[sound:rec1373293628.mp3]<br><img class='center-block img-responsive hinhdep'  src='pastedzhvpb.png' /></span>","BACK":"<span style='font-size: 28px; '>Try the shirt on. <b>It </b><span class=indam>might not</span><b> be your size.</b>[sound:rec1373293636.mp3]<br /><i>or</i><br />Try the shirt on.<b> It </b><span class=indam>may not</span><b> be your size.</b></span><br><span style=''></span>","STT":100},
{"FRONT":"<span style='font-size: 28px; '>When Timmy saw his mother, he was very <span class=indam>su______</span>. <i>(shocked by something unexpected)</i>[sound:rec1373292372.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaiptgz.png' /></span>","BACK":"<span style='font-size: 28px; '>When Timmy saw his mother, he was very <span class=indam>surpr</span><span style='font-weight:600; color:#ff5500;'>i</span><span class=indam>sed</span>.[sound:rec1373292378.mp3]</span><br><span style=''><i>surpr</i><span style='font-style:italic; color:#ff5500;'>i</span><i>sed (adj.) - удивлен</i></span>","STT":48},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1373291708.mp3]<b>It's a </b><span class=indam>f____</span><b>.</b><br /><img class='center-block img-responsive hinhdep'  src='pasteql9duy.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's a </b><span class=indam>fly</span><b>.</b>[sound:rec1373291716.mp3]</span><br><span style=''><i>a fly</i></span>","STT":28},
{"FRONT":"<span style='font-size: 28px; '>Gorillas can <span class=indam>b____</span> like humans.[sound:rec1373291412.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteivpg5c.png' /></span>","BACK":"<span style='font-size: 28px; '>Gorillas can <span class=indam>beh</span><span style='font-weight:600; color:#ff5500;'>a</span><span class=indam>ve</span> like humans.[sound:rec1373291417.mp3]</span><br><span style=''><i>to beh</i><span style='font-style:italic; color:#ff5500;'>a</span><i>ve - вести себя</i></span>","STT":15},
{"FRONT":"<span style='font-size: 28px; '>I usually <span class=indam>communicate __</span> Sasha using Facebook.[sound:rec1373295874.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste35braf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I usually <span class=indam>communicate with</span> Sasha using Facebook.[sound:rec1373295883.mp3]</span><br><span style=''><i>to communicate with sb. - общаться с кем-л.</i></span>","STT":156},
{"FRONT":"<span style='font-size: 28px; '>I'm going to visit your hometown. Can you <span class=indam>re_____</span> me some places to visit? <i>(give me some advice, tell me some good places)</i>[sound:rec1373295254.mp3]</span>","BACK":"<span style='font-size: 28px; '>I'm going to visit your hometown. Can you <span class=indam>recomm</span><span style='font-weight:600; color:#ff5500;'>e</span><span class=indam>nd</span> me some places to visit?[sound:rec1373295261.mp3]</span><br><span style=''><i>to recommend sb. sth.</i></span>","STT":148},
{"FRONT":"<span style='font-size: 28px; '>Honey is made by <span class=indam>____</span>.[sound:rec1373291653.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteytwqzi.png' /></span>","BACK":"<span style='font-size: 28px; '>Honey is made by <span class=indam>bees</span>.[sound:rec1373291657.mp3]</span><br><span style=''><i>a bee</i></span>","STT":25},
{"FRONT":"<span style='font-size: 28px; '>For lunch I had <span class=indam>a h___ sandwich</span>. <i>(meat from a pig)</i>[sound:rec1373294793.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteywaos9.png' /></span>","BACK":"<span style='font-size: 28px; '>For lunch I had <span class=indam>a ham sandwich</span>.[sound:rec1373294799.mp3]</span><br><span style=''></span>","STT":134},
{"FRONT":"<span style='font-size: 28px; '>On our farm we keep <span class=indam>____</span>.[sound:rec1373291248.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastek2gsgq.png' /></span>","BACK":"<span style='font-size: 28px; '>On our farm we keep <span class=indam>sheep</span>.[sound:rec1373291267.mp3]</span><br><span style=''><i>a sheep</i><br /><i>2 sheep</i></span>","STT":11},
{"FRONT":"<span style='font-size: 28px; '>If <span class=indam>______</span> her nicely, she'll help you. <b>(you / ask)</b>[sound:rec1373292684.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste87ylt1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>If <span class=indam>you ask</span> her nicely, she'll help you.[sound:rec1373292691.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":63},
{"FRONT":"<span style='font-size: 28px; '>If <span class=indam>____</span> sunny this weekend, we'll go to the park. <b>(it / be)</b>[sound:rec1373292528.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteubqxda.png' /></span>","BACK":"<span style='font-size: 28px; '>If <span class=indam>it's</span> sunny this weekend, we'll go to the park.[sound:rec1373292535.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":55},
{"FRONT":"<span style='font-size: 28px; '>Last weekend we went to <span class=indam>the ___</span> and saw some giraffes. <i>(a place where animals live in a city)</i>[sound:rec1373294809.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste9briul.png' /></span>","BACK":"<span style='font-size: 28px; '>Last weekend we went to <span class=indam>the zoo</span> and saw some giraffes.[sound:rec1373294816.mp3]</span><br><span style=''></span>","STT":135},
{"FRONT":"<span style='font-size: 28px; '>'Who wants to be a millionaire?' is a famous <span class=indam>q____-show</span>. <i>(a game or competition where people have to answer questions)</i>[sound:rec1373292867.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5ycddb.png' /></span>","BACK":"<span style='font-size: 28px; '>'Who wants to be a millionaire?' is a famous <span class=indam>quiz-show</span>.[sound:rec1373292879.mp3]</span><br><span style=''><i>a quiz - викторина</i></span>","STT":72},
{"FRONT":"<span style='font-size: 28px; '>If <span class=indam>______</span> this car, can we pay for it later? <b>(we / buy)</b>[sound:rec1373292603.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec1dxe5.png' /></span>","BACK":"<span style='font-size: 28px; '>If <span class=indam>we buy</span> this car, can we pay for it later?[sound:rec1373292611.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first condional </span><i>(if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":59},
{"FRONT":"<span style='font-size: 28px; '>If <span class=indam>______</span> that new job, will you earn more money? <b>(you / get)</b>[sound:rec1373292634.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezlqts7.png' /></span>","BACK":"<span style='font-size: 28px; '>If <span class=indam>you get</span> that new job, will you earn more money?[sound:rec1373292641.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":60},
{"FRONT":"<span style='font-size: 28px; '>My old T.V. didn't work, <b>so I </b><span class=indam>th___</span><b> it </b><span class=indam>a___</span><b>. </b><i>(got rid of it; put it in the rubbish)</i>[sound:rec1373292397.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastee_0dc2.png' /></span>","BACK":"<span style='font-size: 28px; '>My old T.V. didn't work, <b>so I </b><span class=indam>threw</span><b> it </b><span class=indam>away</span><b>.</b>[sound:rec1373292403.mp3]</span><br><span style=''><i>to throw sth. away - выбрасывать</i></span>","STT":49},
{"FRONT":"<span style='font-size: 28px; '>If you <span class=indam>_____</span> my daughter, you'll fall in love with her. <b>(meet)</b>[sound:rec1373292083.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteumqnih.png' /></span>","BACK":"<span style='font-size: 28px; '>If you <span class=indam>meet</span> my daughter, you'll fall in love with her.[sound:rec1373292089.mp3]</span><br><span style=''><i>to meet sb. - встретиться, познакомиться</i><br /><i>use </i><span style='font-weight:600; font-style:italic;'>first condional </span><i>(if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":38},
{"FRONT":"<span style='font-size: 28px; '>What <span class=indam>__________</span> if you were attacked by a shark? <b>(you / do)</b>[sound:rec1373292906.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteo72tl6.png' /></span>","BACK":"<span style='font-size: 28px; '>What <span class=indam>would you do</span> if you were attacked by a shark?[sound:rec1373292914.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":74},
{"FRONT":"<span style='font-size: 28px; '>George Clooney's hair has<b> </b><span class=indam>c_____</span><b> from brown to grey.</b> <i>(it was brown, now it's grey)</i>[sound:rec1373292265.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep7srsi.png' /></span>","BACK":"<span style='font-size: 28px; '>George Clooney's hair has <span class=indam>changed</span><b> from brown to grey.</b>[sound:rec1373292277.mp3]</span><br><span style=''><i>to change - поменяться</i></span>","STT":43},
{"FRONT":"<span style='font-size: 28px; '>Well, I don't know exactly what you need, but I <span class=indam>s____</span> having a look on the Internet. <i>(recommend, give the idea)</i>[sound:rec1373295935.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenyt5_l.png' /></span>","BACK":"<span style='font-size: 28px; '>Well, I don't know exactly what you need, but I <span class=indam>suggest</span> having a look on the Internet.[sound:rec1373295946.mp3]</span><br><span style=''><i>to suggest sth. - предлагать</i></span>","STT":112},
{"FRONT":"<span style='font-size: 28px; '>I have an exam tomorrow so<b> I </b><span class=indam>s_____</span><b> study tonight.</b>[sound:rec1373294637.mp3]</span>","BACK":"<span style='font-size: 28px; '>I have an exam tomorrow so <b>I </b><span class=indam>should</span><b> study tonight.</b>[sound:rec1373294643.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":127},
{"FRONT":"<span style='font-size: 28px; '>-Would you like to go on a boat trip today?[sound:rec1373295332.mp3]<br />-<b>That </b><span class=indam>s____</span><b> fantastic! </b><i>(I think it is fantastic)</i></span>","BACK":"<span style='font-size: 28px; '>-Would you like to go on a boat trip today?<br />-<b>That </b><span class=indam>sounds</span><b> fantastic!</b>[sound:rec1373295366.mp3]</span><br><span style=''><i>to sound + adj.</i></span>","STT":151},
{"FRONT":"<span style='font-size: 28px; '>Thanks for you email. It was great <b>to hear </b><span class=indam>[...]</span><b> you again.</b>[sound:rec1373295290.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteiap7lh.png' /></span>","BACK":"<span style='font-size: 28px; '>Thanks for you email. It was great <b>to hear </b><span class=indam>from</span><b> you again.</b>[sound:rec1373295296.mp3]</span><br><span style=''><i>to hear - услышать</i></span>","STT":149},
{"FRONT":"<span style='font-size: 28px; '>Take your rubbish home with you. <b>You </b><span class=indam>s_____</span><b> leave it here.</b>[sound:rec1373294311.mp3]<br><img class='center-block img-responsive hinhdep'  src='pastebzqsn4.png' /></span>","BACK":"<span style='font-size: 28px; '>Take your rubbish home with you.<b> You </b><span class=indam>shouldn't</span><b> leave it here.</b>[sound:rec1373294318.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":123},
{"FRONT":"<span style='font-size: 28px; '>Are you afraid of <span class=indam>w_____</span>?[sound:rec1373291545.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefyqgvs.png' /></span>","BACK":"<span style='font-size: 28px; '>Are you afraid of <span class=indam>wasps</span>?[sound:rec1373291550.mp3]</span><br><span style=''><i>a wasp - оса</i><br></span>","STT":22},
{"FRONT":"<span style='font-size: 28px; '>She finds it hard to make decisions -<b> she's </b><span class=indam>__de_____</span><b>.</b>[sound:rec1373293372.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteofyibr.png' /></span>","BACK":"<span style='font-size: 28px; '>She finds it hard to make decisions - <b>she's </b><span class=indam>indecisive</span><b>.</b>[sound:rec1373293377.mp3]</span><br><span style=''><i>a dec</i><span style='font-style:italic; color:#ff5500;'>i</span><i>sion (n.) - решение </i><br /><i>to dec</i><span style='font-style:italic; color:#ff5500;'>i</span><i>de (v.) - решить</i><br /><i>indec</i><span style='font-style:italic; color:#ff5500;'>i</span><i>sive (adj.) - нерешительный</i></span>","STT":93},
{"FRONT":"<span style='font-size: 28px; '>I have a problem at work. <b>What </b><span class=indam>s____</span><b> I do?</b>[sound:rec1373294164.mp3]</span>","BACK":"<span style='font-size: 28px; '>I have a problem at work. <b>What </b><span class=indam>should</span><b> I do?</b>[sound:rec1373294169.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":119},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>G_____</span> can behave like humans.[sound:rec1373291395.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteivpg5c.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Gorillas</span> can behave like humans.[sound:rec1373291404.mp3]</span><br><span style=''><i>a gorilla</i></span>","STT":14},
{"FRONT":"<span style='font-size: 28px; '>Their children spend all day watching <span class=indam>c______</span>. <i>(animations for children)</i>[sound:rec1373292970.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastensb2zt.png' /></span>","BACK":"<span style='font-size: 28px; '>Their children spend all day watching <span class=indam>cartoons</span>.[sound:rec1373292981.mp3]</span><br><span style=''><i>a cartoon - мультик</i></span>","STT":76},
{"FRONT":"<span style='font-size: 28px; '>A young cat is called <span class=indam>a _____</span>.[sound:rec1373295159.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastegiritm.png' /></span>","BACK":"<span style='font-size: 28px; '>A young cat is called <span class=indam>a kitten</span>.[sound:rec1373295163.mp3]</span><br><span style=''></span>","STT":143},
{"FRONT":"<span style='font-size: 28px; '>Every weekend we have <span class=indam>a</span> <span class=indam>s_____</span>.[sound:rec1373294782.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteq1pgzs.png' /></span>","BACK":"<span style='font-size: 28px; '>Every weekend we have <span class=indam>a</span> <span class=indam>sauna</span>.[sound:rec1373294787.mp3]</span><br><span style=''></span>","STT":133},
{"FRONT":"<span style='font-size: 28px; '>I think my boyfriend is becoming depressed. <b>What </b><span class=indam>s____</span><b> I do?</b>[sound:rec1373294179.mp3]<img class='center-block img-responsive hinhdep'  src='pasteekprip.png' /></span>","BACK":"<span style='font-size: 28px; '>I think my boyfriend is becoming depressed. <b>What </b><span class=indam>should</span><b> I do?</b>[sound:rec1373294209.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":120},
{"FRONT":"<span style='font-size: 28px; '>I want to keep a pet <span class=indam>r____</span>.[sound:rec1373291961.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastef2tbjl.png' /></span>","BACK":"<span style='font-size: 28px; '>I want to keep a pet <span class=indam>rabbit</span>.[sound:rec1373291966.mp3]</span><br><span style=''><i>a rabbit</i></span>","STT":33},
{"FRONT":"<span style='font-size: 28px; '>What would you do if you met <span class=indam>a</span> <span class=indam>b___</span> in the forest?[sound:rec1373291513.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastete0wib.png' /></span>","BACK":"<span style='font-size: 28px; '>What would you do if you met <span class=indam>a</span> <span class=indam>bear</span> in the forest?[sound:rec1373291519.mp3]</span><br><span style=''><i>a bear</i></span>","STT":20},
{"FRONT":"<span style='font-size: 28px; '>He's only a child. <b>He </b><span class=indam>s______</span><b> watch that film.</b>[sound:rec1373294419.mp3]<br><img class='center-block img-responsive hinhdep'  src='pastec4j8b3.png' /></span>","BACK":"<span style='font-size: 28px; '>He's only a child. <b>He </b><span class=indam>shouldn't</span><b> watch that film.</b>[sound:rec1373294424.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":124},
{"FRONT":"<span style='font-size: 28px; '>If you don't study, <b>you </b><span class=indam>_________</span><b> your exams. (pass)</b>[sound:rec1373292743.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste1l0end.png' /></span>","BACK":"<span style='font-size: 28px; '>If you don't study, <b>you </b><span class=indam>won't pass</span><b> your exams.</b>[sound:rec1373292748.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first condional </span><i>(if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":66},
{"FRONT":"<span style='font-size: 28px; '>[sound:rec1373292352.mp3]<b>They're </b><span class=indam>w_____</span><b> a car.</b><br /><img class='center-block img-responsive hinhdep'  src='pasteflvmu3.png' /></span>","BACK":"<span style='font-size: 28px; '><b>They're </b><span class=indam>washing</span><b> a car.</b>[sound:rec1373292362.mp3]</span><br><span style=''><i>to wash sth.</i><br></span>","STT":47},
{"FRONT":"<span style='font-size: 28px; '>Mmm, this is really <span class=indam>ex_____</span> beer. <i>(very good)</i>[sound:rec1373293053.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste68jlbz.png' /></span>","BACK":"<span style='font-size: 28px; '>Mmm, this is really <span class=indam>excellent</span> beer.[sound:rec1373293059.mp3]</span><br><span style=''><i>excellent (adj.) - отличный</i></span>","STT":80},
{"FRONT":"<span style='font-size: 28px; '>The animals I like most of all are <span class=indam>_____</span>.[sound:rec1373291278.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastel5gw4d.png' /></span>","BACK":"<span style='font-size: 28px; '>The animals I like most of all are <span class=indam>lions</span>.[sound:rec1373291284.mp3]</span><br><span style=''><i>a lion</i></span>","STT":12},
{"FRONT":"<span style='font-size: 28px; '>Booking flights, calling hotels, planning places to visit - there are a lot of things to do <b>to </b><span class=indam>o____</span><b> a holiday. </b><i>(plan, arrange)</i>[sound:rec1373295847.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemsl94z.png' /></span>","BACK":"<span style='font-size: 28px; '>Booking flights, calling hotels, planning places to visit - there are a lot of things to do <b>to </b><span class=indam>organise</span><b> a holiday.</b>[sound:rec1373295865.mp3]</span><br><span style=''><i>to organise sth.</i></span>","STT":110},
{"FRONT":"<span style='font-size: 28px; '>I <span class=indam>m_____</span> go to the party, but I'm not sure.[sound:rec1373293486.mp3]</span>","BACK":"<span style='font-size: 28px; '>I <span class=indam>might</span> go to the party, but I'm not sure.[sound:rec1373293496.mp3]<br /><i>or</i><br />I <span class=indam>may</span> go to the party, but I'm not sure.</span><br><span style=''></span>","STT":98},
{"FRONT":"<span style='font-size: 28px; '>We saw a huge <span class=indam>w____</span> jumping out of the water.[sound:rec1373291565.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastej9fjyh.png' /></span>","BACK":"<span style='font-size: 28px; '>We saw a huge <span class=indam>whale</span> jumping out of the water.[sound:rec1373291571.mp3]</span><br><span style=''><i>a whale</i></span>","STT":23},
{"FRONT":"<span style='font-size: 28px; '>George Clooney's hair has <b>changed </b><span class=indam>[...]</span><b> brown </b><span class=indam>[...]</span><b> grey. </b><i>(it was brown, now it's grey)</i>[sound:rec1373292265.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep7srsi.png' /></span>","BACK":"<span style='font-size: 28px; '>George Clooney's hair has <b>changed </b><span class=indam>from</span><b> brown </b><span class=indam>to</span><b> grey.</b>[sound:rec1373292277.mp3]</span><br><span style=''></span>","STT":44},
{"FRONT":"<span style='font-size: 28px; '>The <span class=indam>_____</span> has a very long neck.[sound:rec1373291292.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemjvryp.png' /></span>","BACK":"<span style='font-size: 28px; '>The <span class=indam>giraffe</span> has a very long neck.[sound:rec1373291298.mp3]</span><br><span style=''><i>a giraffe</i></span>","STT":13},
{"FRONT":"<span style='font-size: 28px; '>Wow! Look at your new living room! <b>You've </b><span class=indam>c_____</span><b> it a lot. </b><i>(made it different)</i>[sound:rec1373292201.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevc2y_g.png' /></span>","BACK":"<span style='font-size: 28px; '>Wow! Look at your new living room! <b>You've </b><span class=indam>changed</span><b> it a lot.</b>[sound:rec1373292175.mp3]</span><br><span style=''><i>to change - поменять</i></span>","STT":41},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>K_____</span> only live in Australia.[sound:rec1373291682.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezgprbl.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Kanger</span><span style='font-weight:600; color:#ff5500;'>oo</span><span class=indam>s</span> only live in Australia.[sound:rec1373291696.mp3]</span><br><span style=''><i>a kangeroo</i></span>","STT":27},
{"FRONT":"<span style='font-size: 28px; '>If you ask her nicely, <span class=indam>_______</span> <b>you</b>. <b>(she / help)</b>[sound:rec1373292700.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste87ylt1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>If you ask her nicely, <span class=indam>she'll help</span> <b>you</b>.[sound:rec1373292704.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":64},
{"FRONT":"<span style='font-size: 28px; '>A bull is a <span class=indam>m____</span> cow. <i>(a 'boy'; the opposite of 'female')</i>[sound:rec1373291925.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteo3ci_k.png' /></span>","BACK":"<span style='font-size: 28px; '>A bull is a <span class=indam>male</span> cow.[sound:rec1373291930.mp3]</span><br><span style=''><i>male - мужской</i></span>","STT":31},
{"FRONT":"<span style='font-size: 28px; '>I don't know what present to give Elaine. <span class=indam>S____</span><b> I get her flowers?</b>[sound:rec1373294231.mp3]</span>","BACK":"<span style='font-size: 28px; '>I don't know what present to give Elaine. <span class=indam>Should</span><b> I get her flowers?</b>[sound:rec1373294237.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>should(n't) + infinitive</span><i> for </i><span style='font-weight:600; font-style:italic;'>advice</span><i> and </i><span style='font-weight:600; font-style:italic;'>social rules</span></span>","STT":121},
{"FRONT":"<span style='font-size: 28px; '>We would have more free time <b>if we </b><span class=indam>_______</span><b> children</b>. <b>(not have)</b>[sound:rec1373293268.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelrtydp.png' /></span>","BACK":"<span style='font-size: 28px; '>We would have more free time <b>if we </b><span class=indam>didn't have</span><b> children.</b>[sound:rec1373293261.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":88},
{"FRONT":"<span style='font-size: 28px; '>I usually <span class=indam>co______</span> <span class=indam>with</span> Sasha using Facebook.[sound:rec1373295874.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste35braf.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I usually <span class=indam>communicate</span> <span class=indam>with</span> Sasha using Facebook.[sound:rec1373295883.mp3]</span><br><span style=''><i>to communicate with sb. - общаться с кем-л.</i></span>","STT":111},
{"FRONT":"<span style='font-size: 28px; '>I find it difficult to talk to my <span class=indam>____-wife</span>, even on the phone. <i>(former, old)</i>[sound:rec1373295024.mp3]<br><img class='center-block img-responsive hinhdep'  src='paste5_rci5.png' /></span>","BACK":"<span style='font-size: 28px; '>I find it difficult to talk to my <span class=indam>ex-wife</span>, even on the phone.[sound:rec1373295032.mp3]</span><br><span style=''><i>ex- - бывший</i></span>","STT":139},
{"FRONT":"<span style='font-size: 28px; '>Would you like <span class=indam>a p_____ bag</span>?[sound:rec1373294701.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste__cq4f.png' /></span>","BACK":"<span style='font-size: 28px; '>Would you like <span class=indam>a plastic bag</span>?[sound:rec1373294705.mp3]</span><br><span style=''><i>a plastic bag - пакет</i></span>","STT":130},
{"FRONT":"<span style='font-size: 28px; '>I closed the door <b>and </b><span class=indam>l_____</span><b> it.</b>[sound:rec1373293991.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemgd0ob.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I closed the door <b>and </b><span class=indam>locked</span><b> it.</b>[sound:rec1373293997.mp3]</span><br><span style=''><i>to lock sth. - закрыть на замок</i></span>","STT":114},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>_______</span> late for the meeting if you don't hurry. <b>(you / be)</b>[sound:rec1373292567.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastechocjx.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>You'll be</span> late for the meeting if you don't hurry.[sound:rec1373292578.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":57},
{"FRONT":"<span style='font-size: 28px; '>I'm not a very confident driver. I only drive <span class=indam>oc______</span>. <i>(sometimes, not often)</i>[sound:rec1373294841.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb6gim4.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I'm not a very confident driver. I only drive <span class=indam>occasionally</span>.[sound:rec1373294862.mp3]</span><br><span style=''></span>","STT":137},
{"FRONT":"<span style='font-size: 28px; '>We wouldn't have a dog <b>if we </b><span class=indam>______</span><b> in the countryside.</b> <b>(not live)</b>[sound:rec1373293287.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejzeyej.png' /></span>","BACK":"<span style='font-size: 28px; '>We wouldn't have a dog <b>if we </b><span class=indam>didn't live</span><b> in the countryside</b>.[sound:rec1373293297.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":89},
{"FRONT":"<span style='font-size: 28px; '>Look at the <span class=indam>_____</span> jumping![sound:rec1373291209.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paster2ynd3.png' /></span>","BACK":"<span style='font-size: 28px; '>Look at the <span class=indam>d</span><span style='font-weight:600; color:#ff5500;'>o</span><span class=indam>lphins</span> jumping![sound:rec1373291215.mp3]</span><br><span style=''><i>a d</i><span style='font-style:italic; color:#ff5500;'>o</span><i>lphin</i></span>","STT":9},
{"FRONT":"<span style='font-size: 28px; '>Don't leave the teabag in for long please. <b>I prefer </b><span class=indam>_____</span><b> tea.</b> <i>(the opposite of 'strong')</i>[sound:rec1373292339.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4nbilp.png' /></span>","BACK":"<span style='font-size: 28px; '>Don't leave the teabag in for long please. <b>I prefer </b><span class=indam>weak</span><b> tea.</b>[sound:rec1373292345.mp3]</span><br><span style=''><i>weak tea - некрепкий чай</i></span>","STT":46},
{"FRONT":"<span style='font-size: 28px; '><b>It's a </b><span class=indam>s____</span><b>.</b>[sound:rec1373291708.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepcad6m.png' /></span>","BACK":"<span style='font-size: 28px; '><b>It's a </b><span class=indam>swan</span><b>.</b>[sound:rec1373291890.mp3]</span><br><span style=''><i>a swan</i></span>","STT":29},
{"FRONT":"<span style='font-size: 28px; '>You'll be late for the meeting if <span class=indam>_______</span>. <b>(you / not hurry)</b>[sound:rec1373292589.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastechocjx.png' /></span>","BACK":"<span style='font-size: 28px; '>You'll be late for the meeting if <span class=indam>you don't hurry</span>.[sound:rec1373292594.mp3]</span><br><span style=''><i>use </i><span style='font-weight:600; font-style:italic;'>first conditional</span><i> (if + present simple, will + infinitive) for </i><span style='font-weight:600; font-style:italic;'>possible future situations</span></span>","STT":58},
{"FRONT":"<span style='font-size: 28px; '>What would you do <b>if you </b><span class=indam>____</span><b> a lot of money? (win)</b>[sound:rec1373291145.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2aa_pr.png' /></span>","BACK":"<span style='font-size: 28px; '>What would you do <b>if you </b><span class=indam>won</span><b> a lot of money?</b>[sound:rec1373291150.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>win - won - won</span><br /><i>use the </i><span style='font-weight:600; font-style:italic;'>second conditional</span><i> (if + past simple, would + infinitive) for </i><span style='font-weight:600; font-style:italic;'>imaginary situations</span></span>","STT":6}]

if (localStorage.caumayEn_SG_15 == null) {
    localStorage.caumayEn_SG_15 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_15"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_15+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_15).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_15).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_15).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_15+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_15).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_15).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_15).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_15)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_15))
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
	cau = Number(localStorage.caumayEn_SG_15)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_15)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_15) >  0){
		localStorage.caumayEn_SG_15 = Number(localStorage.caumayEn_SG_15) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_15))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_15)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_15)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_15) < dulieu.length-1){
		localStorage.caumayEn_SG_15 = Number(localStorage.caumayEn_SG_15) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_15))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_15)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_15)].BACK
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
	var current_player = Number(localStorage.caumayEn_SG_15)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_15)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_15)].BACK
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
	cau = Number(localStorage.caumayEn_SG_15)
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
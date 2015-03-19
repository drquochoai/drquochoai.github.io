$(document).ready(function(){
var dulieu = [{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='paster5f7zx.jpg' />[sound:rec1334483603.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>Asia</span>[sound:rec1334483692.mp3]</span><br><span style=''><i>Asia - Азия</i></span>","STT":7},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> you met his girlfriend?[sound:rec1334484718.mp3]<br />-Yes, we <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastevy3jsh.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Have</span> you met his girlfriend?<br />-Yes, we <span class=indam>have</span>.[sound:rec1334484738.mp3]<br /></span><br><span style=''></span>","STT":32},
{"FRONT":"<span style='font-size: 28px; '>Did you <span class=indam>en___</span> the concert yesterday? <i>(did you like it? did you have fun?)</i><br />-Yes, I did.[sound:rec1336838926.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesibyas.png' /></span>","BACK":"<span style='font-size: 28px; '>Did you <span class=indam>enjoy</span> the concert yesterday?[sound:rec1336838938.mp3]<br />-Yes, I did.</span><br><span style=''><i>to enjoy - наслаждаться, получать удовольствие</i></span>","STT":77},
{"FRONT":"<span style='font-size: 28px; '>&quot;It's very hot - let's turn on the <span class=indam>a___ c______</span>.&quot; <i>(a machine to make cold air)</i>[sound:rec1334407549.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezlbiqg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;It's very hot - let's turn on the <span class=indam>air conditioning</span>.&quot;[sound:rec1334407555.mp3]</span><br><span style=''><i>air conditioning - кондиционер</i></span>","STT":128},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> you enjoy the concert yesterday?[sound:rec1336839227.mp3]<br />-Yes, I <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastesibyas.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Did</span> you enjoy the concert yesterday?[sound:rec1336839237.mp3]<br />-Yes, I <span class=indam>did</span>.</span><br><span style=''></span>","STT":78},
{"FRONT":"<span style='font-size: 28px; '>I don't like <span class=indam>ge___ up</span> early.[sound:rec1334485684.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasted4pdlc.png' /></span>","BACK":"<span style='font-size: 28px; '>I don't like <span class=indam>getting up</span> early.[sound:rec1334485701.mp3]</span><br><span style=''><i>to get up - вставать</i></span>","STT":56},
{"FRONT":"<span style='font-size: 28px; '>&quot;I love looking at the <span class=indam>st____</span>.&quot;[sound:rec1334408547.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteal_jwd.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I love looking at the <span class=indam>stars</span>.&quot;[sound:rec1334408553.mp3]<br /><br /></span><br><span style=''><i>a star - звезда</i></span>","STT":124},
{"FRONT":"<span style='font-size: 28px; '>We're not <span class=indam>g____ __</span> have a holiday next year - we haven't got any money.[sound:rec1334485965.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteypnu2q.png' /></span>","BACK":"<span style='font-size: 28px; '>We're not <span class=indam>going to</span> have a holiday next year - we haven't got any money.[sound:rec1334485976.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>We're not going to ... - Мы не собираемся ...</span></span>","STT":64},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>W____</span> you like to fly a plane?[sound:rec1334485362.mp3]<br />-No, I <span class=indam>w____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastefz3q6f.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Would</span> you like to fly a plane?[sound:rec1334485371.mp3]<br />-No, I <span class=indam>wouldn't</span>.</span><br><span style=''></span>","STT":48},
{"FRONT":"<span style='font-size: 28px; '>-What's that?<br />-It's <span class=indam>[...]</span> identity card.[sound:rec1334485102.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste0jnju1.png' /></span>","BACK":"<span style='font-size: 28px; '>-What's that?<br />-It's <span class=indam>an</span> identity card.[sound:rec1334485097.mp3]</span><br><span style=''></span>","STT":41},
{"FRONT":"<span style='font-size: 28px; '>I have <span class=indam>__ lot __</span> brothers and sisters.[sound:rec1334485821.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste76bchk.png' /></span>","BACK":"<span style='font-size: 28px; '>I have <span class=indam>a lot of</span> brothers and sisters.[sound:rec1334485828.mp3]<br /><i>or</i><br />I have <span class=indam>lots of</span> brothers and sisters.[sound:rec1334485852.mp3]</span><br><span style=''><i>lots of / a lot of - много</i></span>","STT":60},
{"FRONT":"<span style='font-size: 28px; '>-Have you ever <span class=indam>____</span> to a famous actor? <b>(speak)</b>[sound:rec1334484779.mp3]<br />-Yes I have. I spoke to Jeremy Irons two years ago.<br /><img class='center-block img-responsive hinhdep'  src='pastejnxkkm.png' /></span>","BACK":"<span style='font-size: 28px; '>-Have you ever <span class=indam>spoken</span> to a famous actor?[sound:rec1334484795.mp3]<br />-Yes I have. I spoke to Jeremy Irons two years ago.<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>speak - spoke - spoken</span><br /><i>to speak - говорить, разговаривать</i></span>","STT":33},
{"FRONT":"<span style='font-size: 28px; '>They <span class=indam>________</span> to London, they got the train. <b>(not drive)</b>[sound:rec1334486043.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteho1sbq.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They <span class=indam>didn't drive</span> to London, they got the train.[sound:rec1334486051.mp3]</span><br><span style=''></span>","STT":67},
{"FRONT":"<span style='font-size: 28px; '><i>in a restaurant:</i><br />&quot;Excuse me, please can we have <b>the</b> <span class=indam>b___</span>?&quot;[sound:rec1334408047.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekn7__s.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Excuse me, please can we have <b>the</b> <span class=indam>bill</span>?&quot;[sound:rec1334408054.mp3]<br /><br /><br /></span><br><span style=''><i>Please can we have the bill? - Принесите нам счет, пожалуйста.</i><br /><i>note: in American English 'the </i><span style='font-weight:600; font-style:italic;'>check</span><i>'</i></span>","STT":134},
{"FRONT":"<span style='font-size: 28px; '>-What's the time?[sound:rec1334483718.mp3]<br />-It's <span class=indam>ex___</span> ten to two. <i>(precisely)</i><br /><img class='center-block img-responsive hinhdep'  src='pastei4sms3.png' /></span>","BACK":"<span style='font-size: 28px; '>-What's the time?<br />-It's <span class=indam>exactly</span> ten to two.[sound:rec1334483724.mp3]<br /></span><br><span style=''><i>exactly - точно, как раз</i></span>","STT":9},
{"FRONT":"<span style='font-size: 28px; '>Is Tokyo <span class=indam>__ _____</span> city in the world? <b>(noisy)</b>[sound:rec1334406675.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastej0mxrj.png' /></span>","BACK":"<span style='font-size: 28px; '>Is Tokyo <span class=indam>the noisiest</span> city in the world?[sound:rec1334406690.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>noisy - the noisiest</span><br /><i>the noisiest - самый шумный</i></span>","STT":121},
{"FRONT":"<span style='font-size: 28px; '>They <span class=indam>_____</span> like the film - they left after 10 minutes.[sound:rec1334485630.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedrxo1o.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They <span class=indam>didn't</span> like the film - they left after 10 minutes.[sound:rec1334485638.mp3]</span><br><span style=''></span>","STT":53},
{"FRONT":"<span style='font-size: 28px; '>We had a great holiday in Turkey. I really <span class=indam>en_____</span> it.[sound:rec1336916932.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefirkm4.png' /></span>","BACK":"<span style='font-size: 28px; '>We had a great holiday in Turkey. I really <span class=indam>enjoyed</span> it.[sound:rec1336916939.mp3]</span><br><span style=''><i>to enjoy sth. - наслаждаться чем-л.</i></span>","STT":84},
{"FRONT":"<span style='font-size: 28px; '>I spoke to him on the phone ten minutes <span class=indam>____</span>. <i>(before now)</i>[sound:rec1334485646.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemckalu.png' /></span>","BACK":"<span style='font-size: 28px; '>I spoke to him on the phone ten minutes <span class=indam>ago</span>.[sound:rec1334485653.mp3]</span><br><span style=''><i>ago - тому назад</i></span>","STT":54},
{"FRONT":"<span style='font-size: 28px; '>&quot;That's a very useful <span class=indam>p_____</span>.&quot;[sound:rec1334408486.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteebakgk.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;That's a very useful <span class=indam>penknife</span>.&quot;[sound:rec1334408491.mp3]<br /><br /></span><br><span style=''><i>a penknife - перочинный ножик</i><br></span>","STT":100},
{"FRONT":"<span style='font-size: 28px; '>&quot;It's dangerous - you can't walk <span class=indam>saf____</span> at night in this city.&quot;[sound:rec1334407345.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb_imve.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;It's dangerous - you can't walk <span class=indam>safely</span> at night in this city.&quot;[sound:rec1334407353.mp3]<br /><br /></span><br><span style=''><i>safely (adv.) - безопасно</i></span>","STT":99},
{"FRONT":"<span style='font-size: 28px; '>My sister's listening to music <span class=indam>at the</span> <span class=indam>m_____</span>. <i>(now)</i>[sound:rec1334485937.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastef_xfbp.png' /></span>","BACK":"<span style='font-size: 28px; '>My sister's listening to music <span class=indam>at the</span> <span class=indam>moment</span>.[sound:rec1334485951.mp3]</span><br><span style=''><i>at the moment - в данную минуту, сейчас</i></span>","STT":63},
{"FRONT":"<span style='font-size: 28px; '>Do you <span class=indam>pr____</span> BMW or Mercedes? <i>(like more)</i>[sound:rec1334483949.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastey_sr0k.png' /></span>","BACK":"<span style='font-size: 28px; '>Do you <span class=indam>prefer</span> BMW or Mercedes?[sound:rec1334483957.mp3]<br /><br /></span><br><span style=''><i>to prefer sth. - предпочитать что-л.</i></span>","STT":12},
{"FRONT":"<span style='font-size: 28px; '>&quot;I think Maths is <span class=indam>ha____</span> than English.&quot; <i>(more difficult)</i>[sound:rec1334406396.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehs1plh.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I think Maths is <span class=indam>harder</span> than English.&quot;[sound:rec1334406402.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>hard - harder</span><br /><i>harder - сложнее</i></span>","STT":123},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> you ever been to Mexico?[sound:rec1334484999.mp3]<br />-Yes, I <span class=indam>[...]</span>. I went there last year.<br /><img class='center-block img-responsive hinhdep'  src='pasteudmtg1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Have</span> you ever been to Mexico?[sound:rec1334485012.mp3]<br />-Yes, I <span class=indam>have</span>. I went there last year.<br /></span><br><span style=''></span>","STT":38},
{"FRONT":"<span style='font-size: 28px; '>I usually get up late <span class=indam>[...]</span> Sundays.[sound:rec1334485148.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastelbqrpb.png' /></span>","BACK":"<span style='font-size: 28px; '>I usually get up late <span class=indam>on</span> Sundays.[sound:rec1334485155.mp3]</span><br><span style=''><i>on Sundays - по воскресеньям</i></span>","STT":43},
{"FRONT":"<span style='font-size: 28px; '>&quot;My brother has a very <span class=indam>ag_____</span> dog.&quot; <i>(angry and unfriendly)</i>[sound:rec1334408026.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesgqesl.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;My brother has a very <span class=indam>aggressive</span> dog.&quot;[sound:rec1334408032.mp3]<br /><br /></span><br><span style=''><i>aggressive (adj.) - агрессивный</i></span>","STT":109},
{"FRONT":"<span style='font-size: 28px; '>Tigers are much <span class=indam>[...]</span> dangerous than mice.[sound:rec1334405763.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepokonk.png' /></span>","BACK":"<span style='font-size: 28px; '>Tigers are much <span class=indam>more</span> dangerous than mice.[sound:rec1334405770.mp3]<br /></span><br><span style=''><i>more - более</i><br></span>","STT":113},
{"FRONT":"<span style='font-size: 28px; '>&quot;It isn't <span class=indam>saf__</span> to walk at night in this city.&quot;[sound:rec1334407322.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteb_imve.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;It isn't <span class=indam>safe</span> to walk at night in this city.&quot;[sound:rec1334407335.mp3]<br /><br /></span><br><span style=''><i>safe (adj.) - безопасный</i><br></span>","STT":135},
{"FRONT":"<span style='font-size: 28px; '>When we got married, he gave me a gold <span class=indam>r___</span>.[sound:rec1334483980.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastebnl2yj.png' /></span>","BACK":"<span style='font-size: 28px; '>When we got married, he gave me a gold <span class=indam>ring</span>.[sound:rec1334483987.mp3]<br /><br /></span><br><span style=''><i>a ring - кольцо</i><br></span>","STT":13},
{"FRONT":"<span style='font-size: 28px; '>Tom <span class=indam>____</span> never been to South Africa.[sound:rec1334484600.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetjcv8v.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Tom <span class=indam>has</span> never been to South Africa.[sound:rec1334484611.mp3]<br /><i>or,</i><br />Tom<span class=indam>'s</span> never been to South Africa.</span><br><span style=''></span>","STT":28},
{"FRONT":"<span style='font-size: 28px; '>She's my <span class=indam>childre___</span> teacher.[sound:rec1334485660.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexkatth.jpg' /></span>","BACK":"<span style='font-size: 28px; '>She's my <span class=indam>children's</span> teacher.[sound:rec1334485667.mp3]</span><br><span style=''></span>","STT":55},
{"FRONT":"<span style='font-size: 28px; '>Lots of people want his <span class=indam>au_____</span>. <i>(when he writes his name)</i>[sound:rec1334483536.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepfgq0u.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Lots of people want his <span class=indam>autograph</span>.[sound:rec1334483541.mp3]<br /><br /></span><br><span style=''><i>an autograph - автограф</i></span>","STT":1},
{"FRONT":"<span style='font-size: 28px; '>They didn't like like the film - they <span class=indam>____</span> after 10 minutes. <b>(leave)</b>[sound:rec1334486184.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedrxo1o.jpg' /></span>","BACK":"<span style='font-size: 28px; '>They didn't like like the film - they <span class=indam>left</span> after 10 minutes.[sound:rec1334486194.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>leave - left - left</span><br /><i>to leave - уходить</i></span>","STT":73},
{"FRONT":"<span style='font-size: 28px; '>She <span class=indam>____</span> seen the new Harry Potter film four times.[sound:rec1334484671.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesp2ktc.png' /></span>","BACK":"<span style='font-size: 28px; '>She <span class=indam>has</span> seen the new Harry Potter film four times.[sound:rec1334484681.mp3]<br /><i>or,</i><br />She<span class=indam>'s</span> seen the new Harry Potter film four times.<br /><br /></span><br><span style=''><i>she's (here) = she has</i></span>","STT":30},
{"FRONT":"<span style='font-size: 28px; '>Did you know that Denmark is the safest country <span class=indam>[...]</span> the world?[sound:rec1334406761.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexfkepu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Did you know that Denmark is the safest country <span class=indam>in</span> the world?[sound:rec1334406769.mp3]<br /></span><br><span style=''></span>","STT":105},
{"FRONT":"<span style='font-size: 28px; '>&quot;Would you like <span class=indam>[...]</span> be famous?&quot;[sound:rec1334406980.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastevaqeg8.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Would you like <span class=indam>to</span> be famous?&quot;[sound:rec1334406986.mp3]<br /><br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>would like + to + infinitive</span><br /><i>Would you like ... ? - Ты не хотел бы ... ?</i></span>","STT":127},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'm <span class=indam>le____</span> now, please can you call me a taxi?&quot; <i>(going)</i>[sound:rec1334408716.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste5oso2g.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'm <span class=indam>leaving</span> now, please can you call me a taxi?&quot;[sound:rec1334408723.mp3]<br /><br /></span><br><span style=''><i>to leave - уезжать, уходить</i></span>","STT":94},
{"FRONT":"<span style='font-size: 28px; '>My brother <span class=indam>___</span> never been to an opera.[sound:rec1334484262.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetozutq.png' /></span>","BACK":"<span style='font-size: 28px; '>My brother <span class=indam>has</span> never been to an opera.[sound:rec1334484368.mp3]<br /><i>or</i><br />My brother<span class=indam>'s</span> never been to an opera.<br /></span><br><span style=''></span>","STT":27},
{"FRONT":"<span style='font-size: 28px; '>-Is <span class=indam>_____</span> any milk in the fridge?[sound:rec1334485240.mp3]<br />-Yes, <span class=indam>_____</span> is.<br /><img class='center-block img-responsive hinhdep'  src='pastecpahrp.png' /></span>","BACK":"<span style='font-size: 28px; '>-Is <span class=indam>there</span> any milk in the fridge?[sound:rec1334485250.mp3]<br />-Yes, <span class=indam>there</span> is.</span><br><span style=''></span>","STT":46},
{"FRONT":"<span style='font-size: 28px; '>Simon <span class=indam>_____</span> at work yesterday. <b>(not be)</b>[sound:rec1334485860.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyld4as.png' /></span>","BACK":"<span style='font-size: 28px; '>Simon <span class=indam>wasn't</span> at work yesterday.[sound:rec1334485866.mp3]</span><br><span style=''></span>","STT":61},
{"FRONT":"<span style='font-size: 28px; '>There <span class=indam>____</span> lots of people in the cinema last night.[sound:rec1334485416.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejuhvnx.png' /></span>","BACK":"<span style='font-size: 28px; '>There <span class=indam>were</span> lots of people in the cinema last night.[sound:rec1334485424.mp3]</span><br><span style=''><i>there were - было</i></span>","STT":76},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>_____</span> were lots of people in the cinema last night.[sound:rec1334485385.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejuhvnx.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>There</span> were lots of people in the cinema last night.[sound:rec1334485392.mp3]</span><br><span style=''><i>there were - было</i></span>","STT":49},
{"FRONT":"<span style='font-size: 28px; '>&quot;I think that is <span class=indam>___ _____</span> cat I have ever seen!&quot; <b>(ugly)</b>[sound:rec1339664469.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteaicxnh.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I think that is <span class=indam>the ugliest</span> cat I have ever seen!&quot;[sound:rec1339664487.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>ugly - the ugliest</span><br /><i>the ugliest - самый некрасивый</i></span>","STT":97},
{"FRONT":"<span style='font-size: 28px; '>I don't have <span class=indam>___</span> money. <i>(I have no money)</i>[sound:rec1334485707.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesa6g_c.png' /></span>","BACK":"<span style='font-size: 28px; '>I don't have <span class=indam>any</span> money.[sound:rec1334485713.mp3]</span><br><span style=''></span>","STT":57},
{"FRONT":"<span style='font-size: 28px; '>An elephant is much smaller <span class=indam>[...]</span> a blue whale.[sound:rec1334405998.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexqtv7a.png' /></span>","BACK":"<span style='font-size: 28px; '>An elephant is much smaller <span class=indam>than</span> a blue whale.[sound:rec1334406007.mp3]<br /><br /></span><br><span style=''><i>than - чем</i></span>","STT":130},
{"FRONT":"<span style='font-size: 28px; '>-Have you ever <span class=indam>____</span> to Thailand? <b>(be)</b>[sound:rec1334484122.mp3]<br />-Yes, I have.<br /><img class='center-block img-responsive hinhdep'  src='pastetmv2kc.png' /></span>","BACK":"<span style='font-size: 28px; '>-Have you ever <span class=indam>been</span> to Thailand?[sound:rec1334484130.mp3]<br />-Yes, I have.<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>be - was/were - been </span><br /><i>to be - быть</i></span>","STT":20},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> you a 'Beatles' fan?[sound:rec1336838543.mp3]<br />-Yes, I <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasteng3g3e.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Are</span> you a 'Beatles' fan?[sound:rec1336838565.mp3]<br />-Yes, I <span class=indam>am</span>.</span><br><span style=''></span>","STT":81},
{"FRONT":"<span style='font-size: 28px; '>&quot;Look! It's <span class=indam>sn____</span>.&quot;[sound:rec1334408448.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_guiwk.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Look! It's <span class=indam>snowing</span>.&quot;[sound:rec1334408453.mp3]<br /><br /></span><br><span style=''><i>it's snowing - идёт снег</i><br></span>","STT":111},
{"FRONT":"<span style='font-size: 28px; '>I've never been to Paris, but we're going <span class=indam>th___</span> next month.[sound:rec1336916953.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep24mrf.png' /></span>","BACK":"<span style='font-size: 28px; '>I've never been to Paris, but we're going <span class=indam>there</span> next month.[sound:rec1336916961.mp3]</span><br><span style=''><i>there - там, туда</i><br></span>","STT":85},
{"FRONT":"<span style='font-size: 28px; '>An elephant is much <span class=indam>_______</span> than a blue whale. <b>(small)</b>[sound:rec1334405980.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexqtv7a.png' /></span>","BACK":"<span style='font-size: 28px; '>An elephant is much <span class=indam>smaller</span> than a blue whale.[sound:rec1334405987.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>small - smaller</span><br /><i>smaller - меньше</i></span>","STT":129},
{"FRONT":"<span style='font-size: 28px; '>The python is <span class=indam>___ _____</span> snake in the world. <b>(long)</b>[sound:rec1334406606.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecumsjn.jpg' /></span>","BACK":"<span style='font-size: 28px; '>The python is <span class=indam>the longest</span> snake in the world.[sound:rec1334406614.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>long - the longest</span><br /><i>the longest - самый длинный</i></span>","STT":120},
{"FRONT":"<span style='font-size: 28px; '>Steve isn't here at the moment, but he's coming back <span class=indam>[...]</span> one hour. <i>(in the future)</i>[sound:rec1336917077.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteurqizx.png' /></span>","BACK":"<span style='font-size: 28px; '>Steve isn't here at the moment, but he's coming back <span class=indam>in</span> one hour.[sound:rec1336917086.mp3]</span><br><span style=''><i>in one hour - через час</i></span>","STT":87},
{"FRONT":"<span style='font-size: 28px; '>&quot;Last night we sat on the roof <span class=indam>[...]</span> an hour.&quot;[sound:rec1334408316.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetazpjv.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Last night we sat on the roof <span class=indam>for</span> an hour.&quot;[sound:rec1334408323.mp3]<br /></span><br><span style=''></span>","STT":101},
{"FRONT":"<span style='font-size: 28px; '>Are you a 'Beatles' <span class=indam>f___</span>? <i>(someone who likes something a lot)</i><br />-Yes, I am.[sound:rec1336838526.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteng3g3e.png' /></span>","BACK":"<span style='font-size: 28px; '>Are you a 'Beatles' <span class=indam>fan</span>?[sound:rec1336838533.mp3]<br />-Yes, I am.</span><br><span style=''><i>a fan - фанат, поклонник</i></span>","STT":80},
{"FRONT":"<span style='font-size: 28px; '>They didn't drive to London, they <span class=indam>_____</span> the train. <b>(get)</b>[sound:rec1334486060.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_gjhwc.png' /></span>","BACK":"<span style='font-size: 28px; '>They didn't drive to London, they <span class=indam>got</span> the train.[sound:rec1334486067.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>get - got - got</span><br><i>to get the train - ехать поездом</i></span>","STT":68},
{"FRONT":"<span style='font-size: 28px; '>There is lots of <span class=indam>cr___</span> in America. <i>(people doing illegal things)</i>[sound:rec1334407650.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastezq863f.jpg' /><br /></span>","BACK":"<span style='font-size: 28px; '>There is lots of <span class=indam>crime</span> in America.[sound:rec1334407663.mp3]<br /></span><br><span style=''><i>crime (n.) - преступность</i><br></span>","STT":90},
{"FRONT":"<span style='font-size: 28px; '>I'm taller <span class=indam>[...]</span> my brother.[sound:rec1334485329.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteu9e9rw.png' /></span>","BACK":"<span style='font-size: 28px; '>I'm taller <span class=indam>than</span> my brother.[sound:rec1334485335.mp3]</span><br><span style=''><i>than - чем</i></span>","STT":47},
{"FRONT":"<span style='font-size: 28px; '>There are seven <span class=indam>co_____</span>: Asia, Africa, Europe, North America, South America, Australia and Antarctica.[sound:rec1334483575.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_uunzd.png' /></span>","BACK":"<span style='font-size: 28px; '>There are seven <span class=indam>continents</span>: Asia, Africa, Europe, North America, South America, Australia and Antarctica.[sound:rec1334483582.mp3]<br /><br /></span><br><span style=''><i>a continent - материк, континент</i></span>","STT":2},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> you seen 'The Godfather'?[sound:rec1334484061.mp3]<br />-No, I <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastegzt4x8.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Have</span> you seen 'The Godfather'?[sound:rec1334484072.mp3]<br />-No, I <span class=indam>haven't</span>.<br /><br /></span><br><span style=''><i>haven't = have not</i></span>","STT":17},
{"FRONT":"<span style='font-size: 28px; '>-Have you <span class=indam>____</span> 'The Godfather'? <b>(sее)</b>[sound:rec1334484091.mp3]<br />-No, I haven't.<br /><img class='center-block img-responsive hinhdep'  src='pastegzt4x8.png' /></span>","BACK":"<span style='font-size: 28px; '>-Have you <span class=indam>seen</span> 'The Godfather'?[sound:rec1334484100.mp3]<br />-No, I haven't.<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>see - saw - seen</span><br /><i>to see - видеть, смотреть</i></span>","STT":18},
{"FRONT":"<span style='font-size: 28px; '>Who <span class=indam>_____</span> the three greatest politicians of the twentieth century? <b>(be)</b>[sound:rec1334486076.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesfgimf.png' /></span>","BACK":"<span style='font-size: 28px; '>Who <span class=indam>were</span> the three greatest politicians of the twentieth century?[sound:rec1334486089.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>be - was/were - been </span><br></span>","STT":69},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> you ever spoken to a famous actor?[sound:rec1336839157.mp3]<br />-Yes, I <span class=indam>[...]</span>. I spoke to Jeremy Irons two years ago.<br /><img class='center-block img-responsive hinhdep'  src='pastejnxkkm.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Have</span> you ever spoken to a famous actor?[sound:rec1336839174.mp3]<br />-Yes, I <span class=indam>have</span>. I spoke to Jeremy Irons two years ago.<br /></span><br><span style=''></span>","STT":34},
{"FRONT":"<span style='font-size: 28px; '>The African <span class=indam>el____</span> is the biggest land animal in the world.[sound:rec1334406564.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten8pdoj.png' /></span>","BACK":"<span style='font-size: 28px; '>The African <span class=indam>elephant</span> is the biggest land animal in the world.[sound:rec1334406572.mp3]<br /></span><br><span style=''><i>an elephant - слон</i></span>","STT":89},
{"FRONT":"<span style='font-size: 28px; '>I <span class=indam>____</span> sing, but I can play the guitar.[sound:rec1334485165.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesd8ezb.png' /></span>","BACK":"<span style='font-size: 28px; '>I <span class=indam>can't</span> sing, but I can play the guitar.[sound:rec1334485171.mp3]</span><br><span style=''></span>","STT":44},
{"FRONT":"<span style='font-size: 28px; '>I <span class=indam>___________</span> to France. Is it nice? <b>(not be) </b>[sound:rec1334486023.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste93sxvg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I <span class=indam>haven't been</span> to France. Is it nice?[sound:rec1336839189.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>be - was/were - been </span></span>","STT":66},
{"FRONT":"<span style='font-size: 28px; '>Tom has never been <span class=indam>[...]</span> South Africa.[sound:rec1334484621.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetjcv8v.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Tom has never been <span class=indam>to</span> South Africa.[sound:rec1334484629.mp3]<br /></span><br><span style=''></span>","STT":29},
{"FRONT":"<span style='font-size: 28px; '>I<span class=indam>___</span> never driven a car![sound:rec1334484245.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez0brrs.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I<span class=indam>'ve</span> never driven a car![sound:rec1334484251.mp3]<br /><br /></span><br><span style=''><i>I've = I have</i></span>","STT":26},
{"FRONT":"<span style='font-size: 28px; '>Can we meet <span class=indam>[...]</span> Monday evening?[sound:rec1334485729.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastekr4zjq.png' /></span>","BACK":"<span style='font-size: 28px; '>Can we meet <span class=indam>on</span> Monday evening?[sound:rec1334485736.mp3]</span><br><span style=''></span>","STT":58},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteaw3mqj.jpg' />[sound:rec1334483603.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>South America</span>[sound:rec1334483663.mp3]</span><br><span style=''><i>South America - Южная Америка</i></span>","STT":4},
{"FRONT":"<span style='font-size: 28px; '>&quot;He walks very <span class=indam>slo____</span>.&quot; <i>(the opposite of 'fast')</i>[sound:rec1334407154.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste7uajes.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;He walks very <span class=indam>slowly</span>.&quot;[sound:rec1334407168.mp3]<br /><br /></span><br><span style=''><i>slowly (adv.) - медленно</i></span>","STT":125},
{"FRONT":"<span style='font-size: 28px; '>&quot;He'd like <span class=indam>[...]</span> learn German.&quot;[sound:rec1334407137.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteden7u8.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;He'd like <span class=indam>to</span> learn German.&quot;[sound:rec1334407143.mp3]<br /><br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>would like + to + infinitive</span><br /><i>I would like to ... - Я хотел бы ...</i></span>","STT":102},
{"FRONT":"","BACK":"","STT":88},
{"FRONT":"<span style='font-size: 28px; '>-Have your parents ever <span class=indam>____</span> to Britain? <b>(be)</b>[sound:rec1334484210.mp3]<br />-No, they haven't.<br /><img class='center-block img-responsive hinhdep'  src='pastecexznz.png' /></span>","BACK":"<span style='font-size: 28px; '>-Have your parents ever <span class=indam>been</span> to Britain?[sound:rec1334484223.mp3]<br />-No, they haven't.<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>be - was/were - been </span></span>","STT":24},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>_______ </span><span style='color:#000000;'>ever</span><span class=indam> _____</span> your leg? <b>(you / break) </b>[sound:rec1334485984.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastewetuvb.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Have you </span><span style='color:#000000;'>ever</span><span class=indam> broken</span> your leg?[sound:rec1336839133.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>break - broke - broken</span><br /><i>to break - ломать</i></span>","STT":65},
{"FRONT":"<span style='font-size: 28px; '>My friend sent me an email. I need to <span class=indam>re____</span> to it. <i>(send an email back, answer)</i>[sound:rec1334483999.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh0hbk5.png' /></span>","BACK":"<span style='font-size: 28px; '>My friend sent me an email. I need to <span class=indam>reply</span> to it.[sound:rec1334484008.mp3]<br /><br /></span><br><span style=''><i>to reply </i><span style='font-weight:600; font-style:italic;'>to</span><i> sth. - отвечать на что-л.</i></span>","STT":14},
{"FRONT":"<span style='font-size: 28px; '>-Have you ever spoken to a famous actor?[sound:rec1334484830.mp3]<br />-Yes I have. I <span class=indam>[...]</span> to Jeremy Irons two years ago. <b>(speak)</b><br /><img class='center-block img-responsive hinhdep'  src='pastejnxkkm.png' /></span>","BACK":"<span style='font-size: 28px; '>-Have you ever spoken to a famous actor?[sound:rec1334484841.mp3]<br />-Yes I have. I <span class=indam>spoke</span> to Jeremy Irons two years ago.<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>speak - spoke - spoken</span><br /><i>to speak - говорить, разговаривать</i></span>","STT":35},
{"FRONT":"<span style='font-size: 28px; '>&quot;I think the black chair is <span class=indam>more</span> <span class=indam>com_____</span> than the blue chair.&quot; <i>(nice to sit in)</i>[sound:rec1334406381.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastejvada_.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I think the black chair is <span class=indam>more</span> <span class=indam>comfortable</span> than the blue chair.&quot;[sound:rec1334406387.mp3]<br /></span><br><span style=''><i>more comfortable - более удобный</i></span>","STT":119},
{"FRONT":"<span style='font-size: 28px; '>&quot;<span class=indam>C_____</span> the sentences.&quot; <i>(finish)</i>[sound:rec1334408182.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste4cmdgg.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;<span class=indam>Complete</span> the sentences.&quot;[sound:rec1334408187.mp3]<br /><br /></span><br><span style=''><i>to complete - заканчивать, завершать</i></span>","STT":115},
{"FRONT":"<span style='font-size: 28px; '>&quot;I<span class=indam>__ ____</span> to go to Japan, but I don't like flying.&quot;[sound:rec1334406996.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste_sae_c.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I<span class=indam>'d like</span> to go to Japan, but I don't like flying.&quot;[sound:rec1334407006.mp3]<br /><i>(I</i><span style='font-weight:600; font-style:italic; color:#0000ff;'>'d</span><i> = I </i><span style='font-weight:600; font-style:italic; color:#0000ff;'>would</span><i>)</i></span><br><span style=''><i>I would like ... - Я хотел бы ...</i><br /><br /></span>","STT":104},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>T____</span> are much more dangerous than mice.[sound:rec1334405875.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepokonk.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Tigers</span> are much more dangerous than mice.[sound:rec1334405880.mp3]<br /><br /></span><br><span style=''><i>a tiger - тигр</i></span>","STT":131},
{"FRONT":"<span style='font-size: 28px; '>In the mountains there's lots of <span class=indam>s____</span>.[sound:rec1334408460.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteobpei8.jpg' /></span>","BACK":"<span style='font-size: 28px; '>In the mountains there's lots of <span class=indam>snow</span>.[sound:rec1334408466.mp3]<br /><br /></span><br><span style=''><i>snow (n.) - снег</i></span>","STT":107},
{"FRONT":"<span style='font-size: 28px; '>Who's <span class=indam>[...]</span> most beautiful woman here?[sound:rec1334406734.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteapornp.jpg' /><br /></span>","BACK":"<span style='font-size: 28px; '>Who's <span class=indam>the</span> most beautiful woman here?[sound:rec1334406740.mp3]<br /><br /></span><br><span style=''><i>the most beautiful - самый красивый</i></span>","STT":93},
{"FRONT":"<span style='font-size: 28px; '><span class=indam>[...]</span> you smoke?[sound:rec1336838461.mp3]<br />-No, I <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastelpoeby.png' /></span>","BACK":"<span style='font-size: 28px; '><span class=indam>Do</span> you smoke?<br />-No, I <span class=indam>don't</span>.[sound:rec1336838516.mp3]</span><br><span style=''></span>","STT":79},
{"FRONT":"<span style='font-size: 28px; '>-How much coffee do you drink?<br />-Quite a <span class=indam>____</span>.[sound:rec1334485608.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemmv3w4.png' /></span>","BACK":"<span style='font-size: 28px; '>-How much coffee do you drink?[sound:rec1334485614.mp3]<br />-Quite a <span class=indam>lot</span>.</span><br><span style=''><i>quite a lot - достаточно много</i><br></span>","STT":52},
{"FRONT":"<span style='font-size: 28px; '>-Bye. Thanks <span class=indam>[...]</span> everything.[sound:rec1334408636.mp3]<br />-Bye. Have a safe journey.<br /><img class='center-block img-responsive hinhdep'  src='pastebaslns.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Bye. Thanks <span class=indam>for</span> everything.[sound:rec1334408653.mp3]<br />-Bye. Have a safe journey.<br /></span><br><span style=''><i>thanks for ... - спасибо за ...</i></span>","STT":95},
{"FRONT":"<span style='font-size: 28px; '>-Have you <span class=indam>____</span> his girlfriend? <b>(meet)</b>[sound:rec1334484699.mp3]<br />-Yes, we have.<br /><img class='center-block img-responsive hinhdep'  src='pastevy3jsh.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Have you <span class=indam>met</span> his girlfriend?[sound:rec1334484708.mp3]<br />-Yes, we have.<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>meet - met - met</span><br><i>to meet - встречать</i></span>","STT":31},
{"FRONT":"<span style='font-size: 28px; '>It's great! It's the <span class=indam>____</span> interesting book I've ever read.[sound:rec1334485526.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteggkcff.png' /></span>","BACK":"<span style='font-size: 28px; '>It's great! It's the <span class=indam>most</span> interesting book I've ever read.[sound:rec1334485535.mp3]</span><br><span style=''><i>the most interesting - самый интересный</i></span>","STT":51},
{"FRONT":"<span style='font-size: 28px; '>How often <span class=indam>________</span> your mobile? <b>(you / use)</b>[sound:rec1334486099.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepo6rkk.png' /></span>","BACK":"<span style='font-size: 28px; '>How often <span class=indam>do</span> <span class=indam>you use</span> your mobile?[sound:rec1336839212.mp3]</span><br><span style=''><i>to use - пользоваться, использовать</i></span>","STT":70},
{"FRONT":"<span style='font-size: 28px; '>The African elephant is <span class=indam>___ _____</span> land animal in the world. <b>(big)</b>[sound:rec1334406582.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasten8pdoj.png' /></span>","BACK":"<span style='font-size: 28px; '>The African elephant is <span class=indam>the biggest</span> land animal in the world.[sound:rec1334406597.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>big - the biggest</span><br /><i>the biggest - самый большой</i></span>","STT":92},
{"FRONT":"<span style='font-size: 28px; '>Scottish whisky is <span class=indam>___ ____</span> in the world. <b>(good)</b>[sound:rec1334406792.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteyhrkff.png' /></span>","BACK":"<span style='font-size: 28px; '>Scottish whisky is <span class=indam>the best</span> in the world.<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>good - the best</span><br /><i>the best - самый лучший</i></span>","STT":118},
{"FRONT":"<span style='font-size: 28px; '>This bag's <span class=indam>[...]</span>. Look! It's got my name on it.[sound:rec1334485222.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastehj0brk.png' /></span>","BACK":"<span style='font-size: 28px; '>This bag's <span class=indam>mine</span>. Look! It's got my name on it.[sound:rec1334485229.mp3]</span><br><span style=''><span style='font-style:italic; color:#000000;'>mine - моё</span></span>","STT":45},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='paste3iuffl.jpg' />[sound:rec1334483603.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>Antarctica</span>[sound:rec1334483710.mp3]</span><br><span style=''><i>Antarctica - Антарктида</i></span>","STT":8},
{"FRONT":"<span style='font-size: 28px; '>&quot;That's a very <span class=indam>us____</span> penknife.&quot; <i>(you can use it easily)</i>[sound:rec1334408473.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteebakgk.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;That's a very <span class=indam>useful</span> penknife.&quot;[sound:rec1334408479.mp3]<br /><br /></span><br><span style=''><i>useful (adj.) - удобный</i></span>","STT":110},
{"FRONT":"<span style='font-size: 28px; '>&quot;I often <span class=indam>d____</span> about chocolate cake.&quot;[sound:rec1334407733.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenmnhsl.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I often <span class=indam>dream</span> about chocolate cake.&quot;[sound:rec1334407741.mp3]<br /><br /></span><br><span style=''><i>to dream </i><span style='font-weight:600; font-style:italic;'>about</span><i> sth. - мечтать о чем-л.</i></span>","STT":112},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pasteog9the.jpg' />[sound:rec1334407990.mp3]</span>","BACK":"<span style='font-size: 28px; '>It's a <span class=indam>shark</span>.[sound:rec1334407984.mp3]</span><br><span style=''><i>a shark - акула</i></span>","STT":117},
{"FRONT":"<span style='font-size: 28px; '>I've never <span class=indam>____</span> a car! <b>(drive)</b>[sound:rec1334484231.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastez0brrs.jpg' /></span>","BACK":"<span style='font-size: 28px; '>I've never <span class=indam>driven</span> a car![sound:rec1334484237.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>drive - drove - driven</span><br /><i>to drive - водить</i></span>","STT":25},
{"FRONT":"<span style='font-size: 28px; '>I hardly <span class=indam>[...]</span> watch TV at the weekend. <i>(not often)</i>[sound:rec1334485443.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastektri9y.png' /></span>","BACK":"<span style='font-size: 28px; '>I hardly <span class=indam>ever</span> watch TV at the weekend.[sound:rec1334485451.mp3]</span><br><span style=''><i>hardly ever - очень редко</i></span>","STT":50},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>____</span> your teacher live in London?[sound:rec1334485119.mp3]<br />-Yes, she <span class=indam>____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastexkatth.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Does</span> your teacher live in London?[sound:rec1334485139.mp3]<br />-Yes, she <span class=indam>does</span>.</span><br><span style=''></span>","STT":42},
{"FRONT":"<span style='font-size: 28px; '>The <span class=indam>os_____</span> is the fastest bird in the world.[sound:rec1334406548.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemw9sld.png' /></span>","BACK":"<span style='font-size: 28px; '>The <span class=indam>ostrich</span> is the fastest bird in the world.[sound:rec1334406554.mp3]<br /><br /></span><br><span style=''><i>an ostrich - страус</i></span>","STT":103},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> you read 'The Lord of the Rings'?[sound:rec1334484035.mp3]<br />-Yes, I <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pasteyxdw8c.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Have</span> you read 'The Lord of the Rings'?[sound:rec1334484046.mp3]<br />-Yes, I <span class=indam>have</span>.<br /></span><br><span style=''></span>","STT":16},
{"FRONT":"<span style='font-size: 28px; '>-Have you ever <span class=indam>____</span> to Mexico? <b>(be)</b>[sound:rec1334484964.mp3]<br />-Yes, I have. I went there last year.<br /><img class='center-block img-responsive hinhdep'  src='pasteudmtg1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Have you ever <span class=indam>been</span> to Mexico?[sound:rec1336838714.mp3]<br />-Yes, I have. I went there last year.<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>be - was/were - been </span><br /><i>to be - быть</i></span>","STT":36},
{"FRONT":"<span style='font-size: 28px; '>This game isn't just for children - <span class=indam>a____</span> can play too! <i>(older people)</i>[sound:rec1334407491.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetriodp.jpg' /></span>","BACK":"<span style='font-size: 28px; '>This game isn't just for children - <span class=indam>adults</span> can play too![sound:rec1334407498.mp3]<br /><br /></span><br><span style=''><i>an adult - взрослый человек</i></span>","STT":114},
{"FRONT":"<span style='font-size: 28px; '>Do you <span class=indam>pr___</span> tea or coffee? <i>(like more)</i>[sound:rec1334483746.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastedxcefj.jpg' /><br /></span>","BACK":"<span style='font-size: 28px; '>Do you <span class=indam>prefer</span> tea or coffee?[sound:rec1334483764.mp3]<br /><br /></span><br><span style=''><i>to prefer sth. - предпочитать что-л.</i></span>","STT":11},
{"FRONT":"<span style='font-size: 28px; '>Emma wrote him a letter two days <span class=indam>_____</span>. <i>(before now)</i>[sound:rec1334486164.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexqydpj.png' /></span>","BACK":"<span style='font-size: 28px; '>Emma wrote him a letter two days <span class=indam>ago</span>.[sound:rec1334486172.mp3]</span><br><span style=''><i>ago - тому назад</i></span>","STT":72},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastesqtkad.jpg' />[sound:rec1334483603.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>Europe</span>[sound:rec1334483685.mp3]</span><br><span style=''><i>Europe - Европа</i></span>","STT":6},
{"FRONT":"<span style='font-size: 28px; '>My father's <span class=indam>[...]</span> doctor.[sound:rec1334485794.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastec4diao.png' /></span>","BACK":"<span style='font-size: 28px; '>My father's <span class=indam>a</span> doctor.[sound:rec1334485800.mp3]</span><br><span style=''></span>","STT":59},
{"FRONT":"<span style='font-size: 28px; '>-Have you ever been to Mexico?[sound:rec1336916916.mp3]<br />-Yes, I have. I went <span class=indam>th____</span> last year.<br /><img class='center-block img-responsive hinhdep'  src='pasteudmtg1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Have you ever been to Mexico?<br />-Yes, I have. I went <span class=indam>there</span> last year.[sound:rec1336916922.mp3]</span><br><span style=''><i>there - там, туда</i></span>","STT":83},
{"FRONT":"<span style='font-size: 28px; '>Mosquitos are <span class=indam>the</span> <span class=indam>___ ______</span> insects in the world. <b>(dangerous)</b>[sound:rec1334406501.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastetjwf00.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Mosquitos are <span class=indam>the</span> <span class=indam>most dangerous</span> insects in the world. [sound:rec1334406513.mp3]</span><br><span style=''><i>the most dangerous - самый опасный</i></span>","STT":108},
{"FRONT":"<span style='font-size: 28px; '>The desert is <span class=indam>[...]</span> than the jungle. <b>(dry)</b>[sound:rec1334406172.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteorylyb.png' /></span>","BACK":"<span style='font-size: 28px; '>The desert is <span class=indam>drier</span> than the jungle.[sound:rec1334406179.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>dry - drier</span><br /><i>drier - более сухой</i></span>","STT":96},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='pastetbfmxx.jpg' />[sound:rec1334483603.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>North America</span>[sound:rec1334483651.mp3]</span><br><span style=''><i>North America - Северная Америка</i><br /></span>","STT":3},
{"FRONT":"<span style='font-size: 28px; '>I need to reply <span class=indam>[...]</span> my friend's email.[sound:rec1334484016.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteh0hbk5.png' /></span>","BACK":"<span style='font-size: 28px; '>I need to reply <span class=indam>to</span> my friend's email.[sound:rec1334484024.mp3]<br /><br /></span><br><span style=''><i>to reply </i><span style='font-weight:600; font-style:italic;'>to</span><i> sth. - отвечать на что-л.</i></span>","STT":15},
{"FRONT":"<span style='font-size: 28px; '>We <span class=indam>____</span> British, we're American![sound:rec1334485042.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepzuy_j.png' /></span>","BACK":"<span style='font-size: 28px; '>We <span class=indam>aren't</span> British, we're American![sound:rec1334485056.mp3]</span><br><span style=''></span>","STT":40},
{"FRONT":"<span style='font-size: 28px; '>&quot;When I'm happy I <span class=indam>j____</span>!&quot;[sound:rec1334407851.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepcax7i.png' /><br /></span>","BACK":"<span style='font-size: 28px; '>&quot;When I'm happy I <span class=indam>jump</span>!&quot;[sound:rec1334407857.mp3]<br /><br /></span><br><span style=''><i>to jump - прыгать</i></span>","STT":133},
{"FRONT":"<span style='font-size: 28px; '>Emma <span class=indam>______</span> him a letter two days ago. <b>(write)</b>[sound:rec1334486142.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastexqydpj.png' /></span>","BACK":"<span style='font-size: 28px; '>Emma <span class=indam>wrote</span> him a letter two days ago.[sound:rec1334486149.mp3]</span><br><span style=''><span style='font-weight:600; font-style:italic;'>write - wrote - written</span><br /><i>to write - писать</i></span>","STT":71},
{"FRONT":"<span style='font-size: 28px; '>These are holiday <span class=indam>br____</span>. <i>(small books which advertise something)</i>[sound:rec1334483733.mp3]<br /><img class='center-block img-responsive hinhdep'  src='paste2ngu3i.png' /></span>","BACK":"<span style='font-size: 28px; '>These are holiday <span class=indam>brochures</span>.[sound:rec1334483738.mp3]<br /><br /></span><br><span style=''><i>a brochure - брошюра, рекламный проспект</i></span>","STT":10},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>____</span> you from Italy?[sound:rec1334485023.mp3]<br />-Yes, I <span class=indam>____</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastegwc9gl.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Are</span> you from Italy?[sound:rec1334485032.mp3]<br />-Yes, I <span class=indam>am</span>.</span><br><span style=''></span>","STT":39},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>___ ____ ____</span> a cup of tea? <b>(you / like)</b>[sound:rec1334407092.mp3]<br />-Yes please!<br /><img class='center-block img-responsive hinhdep'  src='pastediuvuu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Would you like</span> a cup of tea?[sound:rec1334407101.mp3]<br />-Yes please!</span><br><span style=''><i>Would you like ... ? - Не хотите ли ... ?</i></span>","STT":126},
{"FRONT":"<span style='font-size: 28px; '><img class='center-block img-responsive hinhdep'  src='paste8mjn7s.jpg' />[sound:rec1334483603.mp3]</span>","BACK":"<span style='font-size: 28px; '><span class=indam>Africa</span>[sound:rec1334483668.mp3]</span><br><span style=''><i>Africa - Африка</i></span>","STT":5},
{"FRONT":"<span style='font-size: 28px; '>-Have you <span class=indam>____</span> 'The Lord of the Rings'? <b>(read)</b>[sound:rec1334484109.mp3]<br />-Yes, I have.<br /><img class='center-block img-responsive hinhdep'  src='pasteyxdw8c.png' /></span>","BACK":"<span style='font-size: 28px; '>-Have you <span class=indam>read</span> 'The Lord of the Rings'?[sound:rec1336838500.mp3]<br />-Yes, I have.<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>read - read [red] - read [red]</span><br /><i>to read - читать</i></span>","STT":19},
{"FRONT":"<span style='font-size: 28px; '>&quot;Please be <span class=indam>care___</span> with these eggs!&quot; [sound:rec1336839420.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastefbqefp.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;Please be <span class=indam>careful</span> with these eggs!&quot;[sound:rec1336839426.mp3]<br /><br /><br /></span><br><span style=''><i>careful (adj.) - аккуратный, внимательный</i></span>","STT":122},
{"FRONT":"<span style='font-size: 28px; '>Paris is the capital <span class=indam>[...]</span> France.[sound:rec1334407578.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteio3wqb.png' /></span>","BACK":"<span style='font-size: 28px; '>Paris is the capital <span class=indam>of</span> France.[sound:rec1334407588.mp3]<br /></span><br><span style=''></span>","STT":106},
{"FRONT":"<span style='font-size: 28px; '>I can't sing, but I <span class=indam>____</span> play the guitar.[sound:rec1334485200.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastesd8ezb.png' /></span>","BACK":"<span style='font-size: 28px; '>I can't sing, but I <span class=indam>can</span> play the guitar.[sound:rec1334485208.mp3]<br /></span><br><span style=''></span>","STT":74},
{"FRONT":"<span style='font-size: 28px; '>-Have you ever been to Mexico?[sound:rec1334484979.mp3]<br />-Yes, I have. I <span class=indam>____</span> there last year. <b>(go)</b><br /><img class='center-block img-responsive hinhdep'  src='pasteudmtg1.jpg' /></span>","BACK":"<span style='font-size: 28px; '>-Have you ever been to Mexico?<br />-Yes, I have. I <span class=indam>went</span> there last year.[sound:rec1334484987.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>go - went - gone</span><br /><i>to go - ходить, ездить</i></span>","STT":37},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>___</span> there any milk in the fridge?<br />-Yes, there <span class=indam>___</span>.[sound:rec1334485306.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecpahrp.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Is</span> there any milk in the fridge?<br />-Yes, there <span class=indam>is</span>.[sound:rec1334485316.mp3]<br /></span><br><span style=''></span>","STT":75},
{"FRONT":"<span style='font-size: 28px; '>My sister <span class=indam>_____</span> to music at the moment. <b>(listen)</b>[sound:rec1334485874.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastef_xfbp.png' /></span>","BACK":"<span style='font-size: 28px; '>My sister <span class=indam>is listening</span> to music at the moment.[sound:rec1334485895.mp3]<br /><i>or</i><br />My sister<span class=indam>'s listening</span> to music at the moment.</span><br><span style=''><i>to listen - слушать</i></span>","STT":62},
{"FRONT":"<span style='font-size: 28px; '>&quot;It's <span class=indam>eas___</span> to ride a bicycle!&quot;[sound:rec1334407374.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemkvpgk.png' /></span>","BACK":"<span style='font-size: 28px; '>&quot;It's <span class=indam>easy</span> to ride a bicycle!&quot;[sound:rec1334407379.mp3]<br /><br /></span><br><span style=''><i>easy (adj.) - легкий</i></span>","STT":98},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> you ever been to Thailand?[sound:rec1334484147.mp3]<br />-Yes, I <span class=indam>[...]</span>.<br /><img class='center-block img-responsive hinhdep'  src='pastetmv2kc.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Have</span> you ever been to Thailand?[sound:rec1334484157.mp3]<br />-Yes, I <span class=indam>have</span>.<br /></span><br><span style=''></span>","STT":21},
{"FRONT":"<span style='font-size: 28px; '>&quot;I'm <span class=indam>__ ____</span> pupil in the class.&quot; <b>(tall)</b>[sound:rec1334406842.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastenturfu.jpg' /></span>","BACK":"<span style='font-size: 28px; '>&quot;I'm <span class=indam>the tallest</span> pupil in the class.&quot;[sound:rec1334406849.mp3]<br /></span><br><span style=''><span style='font-weight:600; font-style:italic;'>tall - the tallest</span><br /><i>the tallest - самый высокий</i></span>","STT":116},
{"FRONT":"<span style='font-size: 28px; '>Tigers are much more dangerous <span class=indam>[...]</span> mice.[sound:rec1334405803.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastepokonk.png' /></span>","BACK":"<span style='font-size: 28px; '>Tigers are much more dangerous <span class=indam>than</span> mice.[sound:rec1334405810.mp3]<br /></span><br><span style=''><i>than - чем</i></span>","STT":132},
{"FRONT":"<span style='font-size: 28px; '>This is my ipad. It's very <span class=indam>u___</span>. <i>(I can use it for lots of things; it helps me)</i>[sound:rec1336838577.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pasteoaojoo.png' /></span>","BACK":"<span style='font-size: 28px; '>This is my ipad. It's very <span class=indam>useful</span>.[sound:rec1336838584.mp3]<br /><br /></span><br><span style=''><i>useful (adj.) - полезный, удобный</i></span>","STT":82},
{"FRONT":"<span style='font-size: 28px; '>-Have your parents ever been <span class=indam>[...]</span> Britain?[sound:rec1334484190.mp3]<br />-No, they haven't.<br /><img class='center-block img-responsive hinhdep'  src='pastecexznz.png' /></span>","BACK":"<span style='font-size: 28px; '>-Have your parents ever been <span class=indam>to</span> Britain?[sound:rec1334484198.mp3]<br />-No, they haven't.<br /></span><br><span style=''></span>","STT":23},
{"FRONT":"<span style='font-size: 28px; '>Pushkin is <span class=indam>___ ___ famous</span> Russian poet.[sound:rec1334406801.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastemukbua.jpg' /></span>","BACK":"<span style='font-size: 28px; '>Pushkin is <span class=indam>the most famous</span> Russian poet.[sound:rec1334406809.mp3]<br /></span><br><span style=''><i>the most famous - самый известный</i></span>","STT":91},
{"FRONT":"<span style='font-size: 28px; '>-<span class=indam>[...]</span> your parents ever been to Britain?<br />-No, they <span class=indam>[...]</span>.[sound:rec1334484168.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastecexznz.png' /></span>","BACK":"<span style='font-size: 28px; '>-<span class=indam>Have</span> your parents ever been to Britain?<br />-No, they <span class=indam>haven't</span>.[sound:rec1334484179.mp3]<br /><br /></span><br><span style=''><i>haven't = have not</i></span>","STT":22},
{"FRONT":"<span style='font-size: 28px; '>The woman in the blue dress is <span class=indam>je____</span>. <i>(she feels angry because the other woman is with the man)</i>[sound:rec1334483521.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastethxs5_.png' /></span>","BACK":"<span style='font-size: 28px; '>The woman in the blue dress is <span class=indam>jealous</span>.[sound:rec1334483526.mp3]<br /></span><br><span style=''><i>jealous (adj.) - ревнивый</i></span>","STT":0},
{"FRONT":"<span style='font-size: 28px; '>I've never been to Paris, but we're going there <span class=indam>n___</span> month. <i>(the month after this one)</i>[sound:rec1336916971.mp3]<br /><img class='center-block img-responsive hinhdep'  src='pastep24mrf.png' /></span>","BACK":"<span style='font-size: 28px; '>I've never been to Paris, but we're going there <span class=indam>next</span> month.[sound:rec1336916984.mp3]</span><br><span style=''><i>next (adj.) - следующий</i></span>","STT":86}]

if (localStorage.caumayEn_SG_9 == null) {
    localStorage.caumayEn_SG_9 = "0"
}
localStorage.dang = "cauhoi"
var lopmay= "En_SG_9"

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
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_9+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_9).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_9).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_9).attr("src")
							})
						}
						doclai()
						break;
					case 'pauseresume':
						
						if( $("#jquery_jplayer_"+localStorage.caumayEn_SG_9+" audio").attr("src") != $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_9).attr("src") ){
							$("#jquery_jplayer_"+localStorage.caumayEn_SG_9).jPlayer("setMedia",{
								mp3: $("#jquery_jplayer_firstaudio_"+localStorage.caumayEn_SG_9).attr("src")
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
		var cau = Number(localStorage.caumayEn_SG_9)
		addplayer() // Thêm các audio đầu

//CÀI ĐẶT CÂU NÓI ĐẦU TIÊN
			doicau(Number(localStorage.caumayEn_SG_9))
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
	cau = Number(localStorage.caumayEn_SG_9)
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
	
	$("#titlebaiviet").html('<b>'+(Number(localStorage.caumayEn_SG_9)+1)+"/"+dulieu.length+'</b> Lớp: '+lopmay+'' )
	
	playsounddapan()
	preloadimg()
}
// 5 HAM KEY 1 2 3 4 5
function trolaicautruoc(){
	console.log("Trở lại câu trước.");
	if (Number(localStorage.caumayEn_SG_9) >  0){
		localStorage.caumayEn_SG_9 = Number(localStorage.caumayEn_SG_9) - 1
	}
	doicau(Number(localStorage.caumayEn_SG_9))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function doclai(){
	console.log("Đọc lại câu vừa nghe.");
	$("#jquery_jplayer_"+Number(localStorage.caumayEn_SG_9)).jPlayer("stop").jPlayer("play");
}
function pauseresume(){
	console.log("Pause/Resume câu đang đọc.");
		
	$("#jp_container_"+Number(localStorage.caumayEn_SG_9)+" .jp-play").trigger("click")
}
function savenext(){
	console.log("Save");
	quacauketiep()
}
function quacauketiep(){
	console.log("Qua câu mới.");
	if (Number(localStorage.caumayEn_SG_9) < dulieu.length-1){
		localStorage.caumayEn_SG_9 = Number(localStorage.caumayEn_SG_9) + 1
	}
	doicau(Number(localStorage.caumayEn_SG_9))
	localStorage.dang = "cauhoi"
	$("#nhapdapan").val("").removeAttr("disabled").focus()
	$(".thongbao").removeClass("dapandung")
	$(".thongbao").html("<b>bsquochoai@gmail.com</b> - <a href='https://youtube.com/bsquochoai' target='_blank'>https://youtube.com/bsquochoai</a>")
}
function playsound(src){
	var current_player = Number(localStorage.caumayEn_SG_9)
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_9)].BACK
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
	var current_player = Number(localStorage.caumayEn_SG_9)
	var lb = linksoundimg( dulieu[Number(localStorage.caumayEn_SG_9)].BACK )
	
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
	var dapan = dulieu[Number(localStorage.caumayEn_SG_9)].BACK
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
	cau = Number(localStorage.caumayEn_SG_9)
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
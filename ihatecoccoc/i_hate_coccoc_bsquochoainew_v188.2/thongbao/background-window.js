
$(function(){
	host = 'http://www.googledrive.com/host/0B01VnLY_sd58ZnpqX2o1SjRpN3c/'
	lichquayiframe = '<iframe src="https://www.google.com/calendar/embed?title=L%E1%BB%8Bch%20quay%20video%20c%E1%BB%A7a%20th%E1%BA%A7y&amp;showPrint=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=500&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=bsquochoai%40gmail.com&amp;color=%232952A3&amp;ctz=Asia%2FSaigon" style=" border-width:0 " width="500" height="500" frameborder="0" scrolling="no"></iframe>'
	
	$("#phienbanvatinhnang-tab").trigger("click")

	$("#maytinhcasio").click(function(){
		var w = Math.round(screen.width*80/100)
		var h =Math.round(screen.height*85/100)
		var l = Math.round((screen.width/2)-(w/2));
		var t = Math.round((screen.height/2)-(h/2));
		chrome.windows.create({
		 type: 'detached_panel',
		 url: "http://web2.0calc.com/",
		 width:w,
		 height: h,
		 left: l,
		 top: t
		}, function (newWindow) {
		});		
	})
	$("#tudahoc").click(function(){
		chrome.tabs.create({url: chrome.extension.getURL('nhungtudahoc.html')});
	})
	$("#tinhnang").click(function(){
		$("#phienbanvatinhnang-tab").trigger("click")
	})
	$("#mnhelp").click(function(){
		$("#help-tab").trigger("click")
	})
	$("#mngoiy").click(function(){
		$("#goiytinhnangmoi-tab").trigger("click")
	})
	if ( $("#liveshowchemgio iframe").attr("src") == '' ){
		$("#liveshowchemgio iframe").attr("src", host+"liveshowchemgio.html")
		
	}
	
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		 tabid = $(e.target).attr("aria-controls")
		 
		 if ( tabid == "lichquay") {
			if ( $( "#"+tabid+" iframe" ).length == 0 ) {
				$( "#"+tabid+" p" ).html(lichquayiframe)
			}
		 }
		 else if (tabid == "nhungtudahoc"){
			chrome.tabs.create({url: chrome.extension.getURL('nhungtudahoc.html')});
		 }
		 else {
			if ( $( "#"+tabid+" iframe" ).attr("src") == '' ) { // Nếu đã load rồi thì thôi, không load iframe lại nữa
				$( "#"+tabid+" iframe" ).attr("src", host+tabid+".html")
			}
		 }
		})
	//Thông báo coi đang sử dụng đọc theo kiểu ngôn ngữ gì
/* 	if (localStorage.cddoc == "cddocgt"){
		$("#caidatgiongnoi").prepend("<span style='color:rgb(228, 181, 81)'><b>Lưu ý</b>: em đã cài đặt cách đọc theo <b>kiểu Google Translate</b>. Mọi cài đặt trong phần <b><i>Đọc chuẩn người thật</i></b> sẽ được áp dụng khi em nhấp chuột phải và chọn sử dụng kiểu đọc đó</span>")
	} else {
		$("#caidatgiongnoi").prepend("<span style='color:rgb(228, 181, 81)'><b>Lưu ý</b>: em đã cài đặt cách đọc theo <b>Đọc chuẩn người thật (theo cài đặt)</b>. Mọi cài đặt trong phần <b><i>Google Translate</i></b> sẽ được áp dụng khi em nhấp chuột phải và chọn sử dụng kiểu đọc đó</span>")
	} */
	
	
	$("#chongiongnoi select").change(function(){
	var l = $(this).find("option:selected")
	var n =l.attr("data-lang").toString()
	var g = l.attr("data-gender").toString()
	localStorage.setItem("lang", n)
	localStorage.setItem("gender", g)
	switch (n+g){
    case "en-USfemale":
      speek("All my love from  American English, i'm bs walk why. I love you.")
      break; 
    case "en-GBmale":
        speek("All my love from United Kingdom, i'm bs walk why. I love you.")
        break; 
		  case "en-GBfemale":
        speek("All my love from United Kingdom, i'm bs walk why. I love you.")
        break; 
		  case "es-ESfemale":
        speek("Hola soy bs oc oai. te amo")
        break; 
		  case "fr-FRfemale":
        speek("Bonjour je suis bs oc oai. je te aime")
        break; 
		  case "it-ITfemale":
        speek("Ciao io sono bs oc oai. ti amo")
        break;
		  case "de-DEfemale":
        speek("Hallo ik ben bs uochoai. ik houd van u")
        break; 
		  case "ja-JPfemale":
        speek("私は勉強が大好き、私は私の先生が大好き")
        break; 
		  case "ko-KRfemale":
        speek("내 연구를 사랑, 나는 선생님을 사랑")
        break; 
		  case "zh-CNfemale":
        speek("我愛我的學習，我愛我的老師")
        break; 
	}
})

$("#chonnguontudien").change(function(){
	localStorage.cdnguondich = $(this).find("input:checked").val()
})
if(localStorage.cdnguondich =="cddichgt"){
	$("#chonnguontudien input[value='cddichgt']").attr("checked","checked")
} else if(localStorage.cdnguondich =="cddich123"){
	$("#chonnguontudien input[value='cddich123']").attr("checked","checked")
}

$("#chonnguondoc").change(function(){
	localStorage.cddoc = $(this).find("input:checked").val()
})
if(localStorage.cddoc =="cddocgt"){
	$("#chonnguondoc input[value='cddocgt']").attr("checked","checked")
} else if(localStorage.cddoc =="cddocchuan"){
	$("#chonnguondoc input[value='cddocchuan']").attr("checked","checked")
}


 $('[data-toggle="tooltip"]').tooltip()
	
	//Default setting event
	function lamtron10(){
		if ($("#rate").val() == 1) {mr = "1.0"}
		else if ($("#rate").val() == 2) {mr = "2.0"}
		else mr = $("#rate").val()
		return mr
	}
	$("#rate").val(localStorage.rate)
	$("#updaterate").text(lamtron10())
	$("#volume").val(localStorage.volume)
	$("#updatevolume").text(Math.round($("#volume").val()*100)+"%")
	
	$("#rate").mousemove(function(){
		var mr = lamtron10()
		$("#updaterate").text(mr)
		localStorage.setItem("rate", $("#rate").val())
	})
	$("#volume").mousemove(function(){
		$("#updatevolume").text(Math.round($("#volume").val()*100)+"%")
		localStorage.setItem("volume", $("#volume").val())
	})
	
	//Phần Google Translate cài đặt coi dịch ngôn ngữ nào
	var nn = [
		{n:"Tiếng Anh", c:"en"},
		{n:"Tiếng Việt", c:"vi"},
		{n:"Tiếng Hàn", c:"ko"},
		{n:"Tiếng Nga", c:"ru"},
		{n:"Tiếng Nhật", c:"ja"},
		{n:"Tiếng Pháp", c:"fr"},
		{n:"Tiếng Trung (Giản Thể)", c:"zh-CN"},
		{n:"Tiếng Trung (Phồn thể) - Đài loan", c:"zh-TW"},
		{n:"Tiếng Ðức", c:"de"},
		{n:"Tiếng Khmer", c:"km"},
		{n:"Esperanto", c:"eo"},
		{n:"Tiếng Ả-rập", c:"ar"},
		{n:"Tiếng Agiecbaigiăng", c:"az"},
		{n:"Tiếng Ai-len", c:"ga"},
		{n:"Tiếng Aixơlen", c:"is"},
		{n:"Tiếng An-ba-ni", c:"sq"},
		{n:"Tiếng Armenia", c:"hy"},
		{n:"Tiếng Ba Lan", c:"pl"},
		{n:"Tiếng Ba Tư", c:"fa"},
		{n:"Tiếng Bantu (Ðông Phi)", c:"sw"},
		{n:"Tiếng Basque", c:"eu"},
		{n:"Tiếng Bengali (Ấn Ðộ)", c:"bn"},
		{n:"Tiếng Bêlarút", c:"be"},
		{n:"Tiếng Bosnia", c:"bs"},
		{n:"Tiếng Bồ Ðào Nha", c:"pt"},
		{n:"Tiếng Bungary", c:"bg"},
		{n:"Tiếng Catalan", c:"ca"},
		{n:"Tiếng Cebuano", c:"ceb"},
		{n:"Tiếng Creole ở Haiti", c:"ht"},
		{n:"Tiếng Croatia", c:"hr"},
		{n:"Tiếng Ðan Mạch", c:"da"},
		{n:"Tiếng Do Thái", c:"iw"},
		{n:"Tiếng Dravidian", c:"kn"},
		{n:"Tiếng Extônia", c:"et"},
		{n:"Tiếng Galicia", c:"gl"},
		{n:"Tiếng George", c:"ka"},
		{n:"Tiếng Gujarat", c:"gu"},
		{n:"Tiếng Hà Lan", c:"nl"},
		{n:"Tiếng Hausa", c:"ha"},
		{n:"Tiếng Hin-đi (Ấn Ðộ)", c:"hi"},
		{n:"Tiếng Hmong", c:"hmn"},
		{n:"Tiếng Hungari", c:"hu"},
		{n:"Tiếng Hy Lạp", c:"el"},
		{n:"Tiếng Igbo", c:"ig"},
		{n:"Tiếng Indonesia", c:"id"},
		{n:"Tiếng Java", c:"jw"},
		{n:"Tiếng Lào", c:"lo"},
		{n:"Tiếng Latinh", c:"la"},
		{n:"Tiếng Latvia", c:"lv"},
		{n:"Tiếng Lituani", c:"lt"},
		{n:"Tiếng Mã Lai", c:"ms"},
		{n:"Tiếng Macedonia", c:"mk"},
		{n:"Tiếng Malta", c:"mt"},
		{n:"Tiếng Maori", c:"mi"},
		{n:"Tiếng Marathi", c:"mr"},
		{n:"Tiếng Mông Cổ", c:"mn"},
		{n:"Tiếng Na Uy", c:"no"},
		{n:"Tiếng Nam Phi", c:"af"},
		{n:"Tiếng Nepal", c:"ne"},
		{n:"Tiếng Phần Lan", c:"fi"},
		{n:"Tiếng Philippin", c:"tl"},
		{n:"Tiếng Punjab", c:"pa"},
		{n:"Tiếng Rumani", c:"ro"},
		{n:"Tiếng Séc", c:"cs"},
		{n:"Tiếng Slovak", c:"sk"},
		{n:"Tiếng Slovenia", c:"sl"},
		{n:"Tiếng Somali", c:"so"},
		{n:"Tiếng Tamil", c:"ta"},
		{n:"Tiếng Tây Ban Nha", c:"es"},
		{n:"Tiếng Telugu", c:"te"},
		{n:"Tiếng Thái", c:"th"},
		{n:"Tiếng Thổ Nhĩ Kỳ", c:"tr"},
		{n:"Tiếng Thụy Ðiển", c:"sv"},
		{n:"Tiếng Ukraina", c:"uk"},
		{n:"Tiếng Urdu", c:"ur"},
		{n:"Tiếng Xéc-bi", c:"sr"},
		{n:"Tiếng Xứ Wale", c:"cy"},
		{n:"Tiếng Ý", c:"it"},
		{n:"Tiếng Yiddish", c:"yi"},
		{n:"Tiếng Yoruba", c:"yo"},
		{n:"Tiếng Zulu", c:"zu"}
	]
	for (i = 0; i < nn.length ; i++) {
		$("#gtdocngonngu .form-control").append("<option value='"+nn[i].c+"'>"+nn[i].n+"</option>")
		$("#gttudien .form-control").append("<option value='"+nn[i].c+"'>"+nn[i].n+"</option>")
  }
  $("#gtdocngonngu select").change(function(){
		var l = $(this).find("option:selected")
		localStorage.setItem("gtdocngonngu", l.val() )
  })
  $("#gttudien select").change(function(){
		var l = $(this).find("option:selected")
		localStorage.setItem("gttudien", l.val() )
  })
  if (localStorage.gtdocngonngu == null ) {localStorage.gtdocngonngu = "en"}
  if (localStorage.gttudien == null ) {localStorage.gttudien = "vi"}
  $("#gtdocngonngu select").val(localStorage.gtdocngonngu)
  $("#gttudien select").val(localStorage.gttudien)
})
chrome.tts.getVoices(
          function(voices) {
            for (var i = 0; i < voices.length; i++) {
					var v =voices[i]
					if (v.gender == "female") {gender = "Nữ" }
					else gender = "Nam"
					if ( v.voiceName != "native" ){
						if( v.gender == localStorage.gender &&  v.lang == localStorage.lang ){
						$("#chongiongnoi select").append("<option data-lang='"+v.lang+"' data-name='"+v.voiceName+"' data-gender='"+v.gender+"' class='chosevoice' selected>"+v.voiceName+" ("+v.lang+" - "+gender+")</option>")
						} else {
						$("#chongiongnoi select").append("<option data-lang='"+v.lang+"' data-name='"+v.voiceName+"' data-gender='"+v.gender+"' class='chosevoice' >"+v.voiceName+" ("+v.lang+" - "+gender+")</option>")
						}
					}
				}
});

function speek(t){
	chrome.tts.stop()
	var lang = localStorage.lang
	var gender = localStorage.gender
	var rate = Number(localStorage.rate)
	var volume = Number(localStorage.volume)
	chrome.tts.speak(t, {'gender':gender, 'lang':lang, 'rate': rate, 'volume':volume });
}
function x(x){console.log(x)}

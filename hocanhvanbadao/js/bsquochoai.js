$(function(){
	host = "http://drquochoai.github.io/hocanhvanbadao" // host giữ các file json, html
	hostSrc = "http://sd/"; //Host cho những file này
	homepage = {"href":"http://bsquochoai.ga", "title":"Trang chủ"}
	leftmenu = $("#bs_left_menu")
	huongdanHash = "huongdan"
	loadtruocmaycauhoi = 4 //Load trước mấy câu hỏi
	insert_content_to = $(".full-height-content-body")
	page_title = $(".page-title") // <h3 class="page-title">Sidebar Fixed Page <small>sidebar fixed page</small></h3>
	page_breadcrumb = $(".page-breadcrumb")
	NOSOUND = ""
	NOIMG = "http://image.mp3.zdn.vn/thumb/165_165/avatars/a/d/ad7bc863acc50ad3b747c51c2f85b431_1426668785.jpg"
	HUONGDANNHAPDAPAN = "Hãy nhập câu trả lời của em vào khung bên dưới"
	//gọi hàm check url và load đúng trang cần đến
	initPage()
	//_______________________________________LOAD LEFT MENU
	$.ajax({
	  url: host+"/json/leftmenu.json",
		success:function(r) {
			sobaiClasss = r.vars.sobaiClass
			availicons = r.vars.icon
			$.each(r, function(key, v){
				if (key != "vars") {
						icon = v.icon || randValueFromArray(availicons)
						href = v.href || "javascript:;"
						hiennewkhong = v.hiennewkhong || 0
						submenu = v.submenu || 0
						addSeperationAfter = v.addSeperationAfter || 0
						var menu = ""
						
								menu += "				<li class='start'>";
								menu += "					<a href='"+href+"'>";
								menu += "					<i class=icon-"+icon+"/>";
								menu += "					<span class='title'>"+v.title+"<\/span>";
								menu += "					<span class='selected'\/>";
								menu += "					<span class='arrow open'\/>";
								menu += "					<\/a>";
								if (submenu != 0) {
									menu += "					<ul class='sub-menu'>";
									//Loop
									for (i = 0; i <= submenu.sobai; i++){
										sobaiClass = randValueFromArray(sobaiClasss);
										if( i == 0 ){
											menu += "						<li>";
											menu += "							<a href='#"+key+"#"+huongdanHash+"'>";
											if(hiennewkhong != 0){
												menu += "							<span class='badge badge-roundless badge-"+sobaiClass+"'>"+hiennewkhong+"</span>"
											}
											menu += "Hướng dẫn<\/a>";
											menu += "						<\/li>";
										} else {
											socau = submenu.socau[i-1] || "150"
											menu += "						<li>";
											menu += "							<a href='#"+key+"#"+submenu.ma+i+"'>";
											menu += "							<span class='badge badge-roundless badge-"+sobaiClass+"'>"+socau+"</span>"+v.tenmoibai+" "+i+"<\/a>";
											menu += "						<\/li>";
										}
									}
									menu += "				<\/ul>"; //Close sub-menu
								}
						menu += "</li>";
						if(addSeperationAfter != 0){
							menu += '<li class="heading"><h3 class="uppercase">'+addSeperationAfter+'</h3></li>';
						}
				}
				leftmenu.append(menu)
			})
		}
	})
		//_______________________________________KHI MỘT LINK MENU ĐƯỢC ẤN VÀO______
	window.onhashchange = function(){
		initPage()
	}
	
	//Các hàm nút menu prev, next, save...
})


//___________________________________Các hàm
	//Hàm check xem trang nào và load các file cần thiết
function initPage(){
		curHash = window.location.hash.substring(1).split("#")
		if(curHash == "trangchu"){
			$.ajax({
				url: host+"/html/trangchu.html",
				success:function(r) {
					insert_content_to.html(r)
					initAll() //Đồng bộ lại website
				}
			})
			setPageTitle("Trang chủ", "tổng thông tin về các khóa học của em đang theo")
			setPageBreadcrumb()
		} else if (curHash.length == 2){
			//Nếu có 2 hash thì hash đầu là # bài học, hash sau là #mã bài học
			$.ajax({
				url: host+"/html/baihoc.html",
				success:function(r) {
					insert_content_to.html(r)
					initAll() //Đồng bộ lại website
					setupClass() //Cài đặt lớp học
				}
			})
			urlkhoahoc = curHash[0]
			urlbaihoc = curHash[1]
			titlelink = $("a[href='#"+urlkhoahoc+"#"+urlbaihoc+"']")
			socau = titlelink.find("span").text()
			title = titlelink.text().replace(socau, "")
			baihoclink = titlelink.parent().parent().parent().find("span.title").text()
			setPageTitle(title, "tổng cộng "+socau+" câu")
			setPageBreadcrumb({tenkhoahoc:{href: urlkhoahoc, title:baihoclink}, tenbaihoc:{href: urlbaihoc, title:title}})
		}
}
	//Cài đặt lớp học khi ở trang bài học
function setupClass(){
	curHash = window.location.hash
	l("s", "curHash", curHash)
	$.ajax({
		url: host+"/json/"+curHash.replace(/\#/g,"_").substring(1)+".json",
		success:function(baihoc) {
			baihocMAIN = baihoc
			saveThuTuCauHoi(baihoc.length-1)
			caidatplayer()
			caidatmenu()
			$("#menu_next").trigger("click")
			$("#menu_prev").trigger("click")
			addKeyShortCut()
		}
	})
}
function addKeyShortCut(){
	$(document).keyup(function(e){
		if (e.ctrlKey == true){
			//Ctrl+BACK
			if(e.keyCode == 37){
				 $("#menu_prev").trigger("click")
			}
			//Ctrl+Down
			else if(e.keyCode == 40 ){
				$("#menu_repeat").trigger("click")
			}
			//Ctrl+Next
			else if(e.keyCode == 39){
				$("#menu_next").trigger("click")
			}
			//Ctrl+Up
			else if(e.keyCode == 38){
				$("#menu_nghedapan").trigger("click")
			}
			//Ctrl+?
			else if(e.keyCode == 191){
				$("#menu_save").trigger("click")
			}
			//Ctrl+Enter
			else if(e.keyCode == 191){
				$("#menu_hiendapan").trigger("click")
			}
			return false
		}
	})
}
	//Hàm localStorage
function l(type, item, val){
	val = val || 0
	if(type == "g"){
		return localStorage.getItem(item)
	} else if (type == "s" ) {
		localStorage.setItem(item, val)
	}
}
	// 3 Hàm check và tạo ra một array lưu thứ tự câu hỏi của người học
function randomCauhoi(socau){
	var a=numberArray(socau);
	fy(a)
	return a
}
function numberArray(a){
 b=[];while(a--)b[a]=a;return b
}
function fy(a,b,c,d){c=a.length;while(c)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d}
	//Save thứ tự câu hỏi
function saveThuTuCauHoi(socau, forceSave){ //Buộc save thì cho forceSave = 1
	forceSave = forceSave || 0
	if( l("g", window.location.hash+"_thutucau") == null || forceSave == 1){
		l("s", window.location.hash+"_thutucau", randomCauhoi(socau).toString())
	}
}
	//Cài đặt trình chơi player cho nó lần đầu tiên load trang
function caidatplayer(){
	cauhoihientai = Number( l("g", window.location.hash+"_cauhoihientai") ) || 0
	if (cauhoihientai == 0) {l("s", window.location.hash+"_cauhoihientai", "0")}
	arrayRandomCauhoi = l("g", window.location.hash+"_thutucau").split(",")
	baihoc = window.baihocMAIN
	hostSource = baihoc[0].hostSrc || hostSrc
	l("s", window.location.hash+"_tongsocau", baihoc.length -1)
	for ( i = cauhoihientai - loadtruocmaycauhoi ; i <= cauhoihientai + loadtruocmaycauhoi; i++) {
		if ( i >= 0 && i < baihoc.length -1){
			thutucau = Number(arrayRandomCauhoi[i]) + 1
			curCau = baihoc[thutucau]
			sound = getSound(curCau.front) || 0
			if ( sound != 0 && $("#amthanh_"+thutucau).length == 0) {
				$("#bsquochoai_boaudio").append('	<audio preload="auto" controls class="hidden" id="amthanh_'+i+'">		<source src="'+hostSource+sound+'" />	</audio>')
				$( 'audio:not(audio[data-bsthemroi="1"])' ).audioPlayer();
				$(".audioplayer:has(.hidden)").hide()
			}
			img = getImg(curCau.front) || 0
			if ( img != 0 && $("#preload_img_"+thutucau).length == 0){
				$("#preload_img_src").append('<img src="'+hostSource+img+'" id="preload_img_'+i+'" class="img-responsive img-thumbnail" alt="bsquochoai.ga" >')
			}
		}
	}
}
function getCauhoiInfo(cau){
	front = cau.front
	back = cau.back
	if(getSound(back) != 0 ){
		soundB = window.hostSource+getSound(back)
	} else soundB = 0
	if(getImg(back) != 0 ){
		imgB = window.hostSource+getImg(back)
	} else imgB = 0
	
	hienthiB = back.replace(/\[sound:[^\]]*\]/g, "").replace(/<img[^>]*\/>/g,'').replace(/<br \/><br \/>/g,"<br>").replace(/28px;/g, "20px; font-weight: bold;").replace(/#0000ff/g, "#F6FD7F").replace(/<br>/g,"").replace(/<i>/g,"<br><i>")
	checkB = back.replace(/\[sound:[^\]]*\]/g, "").replace(/<i>.*<\/i>/g,'').replace(/<[^>]*>/g,'').replace(/^-/g, "").trim().toLowerCase()
	
	if(getSound(front) != 0 ){
		soundF = window.hostSource+getSound(front)
	} else soundF = 0
	if(getImg(front) != 0 ){
		imgF= window.hostSource+getImg(front)
	} else imgF = 0
	
	hienthiF= front.replace(/\[sound:[^\]]*\]/g, "").replace(/<img[^>]*\/>/g,'').replace(/<br \/><br \/>/g,"<br>").replace(/28px;/g, "20px; font-weight: bold;")
	return {front: {sound:soundF, img: imgF, hienthi:hienthiF}, back: {sound:soundB, img: imgB, hienthi:hienthiB, check: checkB} }
}
	function getSound(cauhoi){
		arrSrc =  cauhoi.match(/\[sound:[^\]]*/g) || 0
		if (arrSrc != 0){
			return arrSrc[0].substring(7)
		} else return 0;
	}
	function getImg(cauhoi){
		arrSrc = cauhoi.match(/<img[^>]*\/>/g) || 0
		if (arrSrc != 0){
			arrSrc = arrSrc[0].match(/src='[^']*/g) || 0
			arrSrc[0].substring(5)
			return arrSrc[0].substring(5)
		} else return 0;
	}
function caidatmenu(){
	$("#menu_prev").click(function(){
		menu_exe("prev")
		return false;
	})
	$("#menu_next").click(function(){
		menu_exe("next")
		return false;
	})
	$("#menu_save").click(function(){
		menu_save()
		return false;
	})
	$("#menu_nghedapan").click(function(){
		menu_nghedapan()
		return false;
	})
	$("#menu_repeat").click(function(){
		menu_repeat()
		return false;
	})
	$("#menu_hiendapan").click(function(){
		menu_hiendapan()
		return false;
	})
}
function menu_exe(type){
		cauhientai = Number(l("g",window.location.hash+"_cauhoihientai"))
		tongsocau = Number(l("g",window.location.hash+"_tongsocau"))
		if (type == "prev"){
			if (cauhientai > 0) {
				l("s", window.location.hash+"_cauhoihientai", cauhientai - 1)
				menuAmthanhHinhanh("prev")
			}
		} else if (type == "next"){
			if (cauhientai < tongsocau -1) {
				l("s", window.location.hash+"_cauhoihientai", cauhientai + 1)
				menuAmthanhHinhanh("next")
			}
		}
		addBaihocFront()
		return false;
}
	//Hàm thêm các phần vào bài học
function addBaihocFront(){
	cau =  getCauhoiHientai()
	$("#noidungcauhoi").html(cau.info.front.hienthi)
	if(cau.info.front.img != 0){
		$("#noidung_img img").attr("src", cau.info.front.img)
	} else {
		$("#noidung_img img").attr("src", window.NOIMG)
	}
}
function menuAmthanhHinhanh(menu){
	audiobaihoc = $("#bsquochoai_boaudio")
	cauhientai1 = Number(l("g",window.location.hash+"_cauhoihientai"))
	arrayRandomCauhoi = window.arrayRandomCauhoi || l("g", window.location.hash+"_thutucau").split(",")
	baihoc = window.baihocMAIN
	if (menu == "next"){
		audiobaihoc.find(".audioplayer").first().remove()
	}
	else if (menu == "prev"){
		audiobaihoc.find(".audioplayer").last().remove()
	}
	for ( i = cauhientai1 - loadtruocmaycauhoi ; i <= cauhientai1 + loadtruocmaycauhoi; i++) {
		tongsocau = Number(window.tongsocau) || Number(	l("g", window.location.hash+"_tongsocau"))
		if (i >=0 && i < tongsocau){
			if ( $("#amthanh_"+i).length == 0 ) {
					var cau = getInfoCauhoi(i)
					audiobaihoc.append('<audio preload="auto" controls class="hidden" id="amthanh_'+i+'"><source src="'+cau.front.sound+'" />	</audio>')
					$( '#amthanh_'+i ).audioPlayer();
			}
		}
	}
	audiobaihoc.find(".audioplayer").hide()
	audiobaihoc.find("#amthanh_"+cauhientai1)[0].currentTime = 0 
	audiobaihoc.find(".audioplayer-playing").find(".audioplayer-playpause").trigger("click")
	$("#amthanh_"+cauhientai1).parent().show().find(".audioplayer-playpause").trigger("click")
	//Add audio cho cauhientai1
	cauhientaiinfo = getInfoCauhoi(cauhientai1)
	$("#bsquochoai_audioketqua").html('<audio preload="auto" controls class="hidden" id="audio_ketqua"><source src="'+cauhientaiinfo.back.sound+'" />	</audio>')
	$( '#audio_ketqua' ).audioPlayer();
	//Cài đặt checkđáp án câu hỏi
	
	//RESET dap an cau hoi
	$("#bsquochoai_checkdapan").html(HUONGDANNHAPDAPAN).removeClass("dapandung")
	$("#bsquochoai_ketqua").prop('disabled', false);
	$('#bsquochoai_ketqua').focus().val("")
	
	dapancheck = cauhientaiinfo.back.check
	dapanhienthi = cauhientaiinfo.back.hienthi
	tumoinhaphoinay = ""
	$('#bsquochoai_ketqua').off().keyup(function(e){
		if (e.ctrlKey == false && e.keyCode != 17){
		inputDapan = $(this).val().replace(/"/g, '&quot;')
		tumoinhap = inputDapan.substring(inputDapan.length - 1)
		if(dapancheck.indexOf(inputDapan.toLowerCase()) == 0){
			$("#bsquochoai_checkdapan").html(inputDapan)
			if( dapancheck == inputDapan.toLowerCase() ){
				$("#bsquochoai_checkdapan").addClass("dapandung").html(dapanhienthi)
				$("#bsquochoai_ketqua").prop('disabled', true);
			}
		} else {
			if ($("#bsquochoai_checkdapan").text().indexOf(HUONGDANNHAPDAPAN) == 0 ){
				$("#bsquochoai_checkdapan").html("")
		}
			if( tumoinhaphoinay != tumoinhap && e.keyCode != 8){
				$("#bsquochoai_checkdapan").append("<bs>"+tumoinhap+"</bs>")
				tumoinhaphoinay = tumoinhap
			} else if (e.keyCode == 8){
				$("#bsquochoai_checkdapan bs").last().remove()
			}
		}
	}
	
	});

}
function getInfoCauhoi(x){
	cauthutu = window.arrayRandomCauhoi[x]
	infocau = window.baihocMAIN[Number(cauthutu)+1]
	return getCauhoiInfo(infocau)
}
function getCauhoiHientai(menu){
	menu = menu || 0
	cauhientai1 = Number(l("g",window.location.hash+"_cauhoihientai"))
	arrayRandomCauhoi = l("g", window.location.hash+"_thutucau").split(",")
	baihoc = window.baihocMAIN
	cauhientai = -1
	if(menu == 0) {
		cauhientai = arrayRandomCauhoi[cauhientai1]
	} else if (menu == "next"){ //Sẽ thêm số ký tự của nó vào
		tongsocau = Number(window.tongsocau) || Number(	l("g", window.location.hash+"_tongsocau"))
		if(cauhientai1 < tongsocau - loadtruocmaycauhoi){
			cauhientai = arrayRandomCauhoi[cauhientai1 + loadtruocmaycauhoi]
		}
	} else if (menu == "prev"){
		if(cauhientai1 >= loadtruocmaycauhoi){
			cauhientai = arrayRandomCauhoi[cauhientai1 - loadtruocmaycauhoi]
		}
	}
	if (cauhientai != -1){
		return {info: getCauhoiInfo( baihoc[Number(cauhientai) + 1] ), cauhientai:  arrayRandomCauhoi[cauhientai1], thutu: Number(cauhientai) + 1,  caunao: Number(cauhientai1), tongcau:  tongsocau}
	} else {
		tongsocau = Number(window.tongsocau) || Number(	l("g", window.location.hash+"_tongsocau"))
		return {info: "o ngoai ria", tongcau:  tongsocau, caunao: Number(cauhientai1)}
	}
}
	//hàm save menu câu hỏi
function menu_save(){
	var caccaudaluu =  l("g", window.location.hash+"_caccaudaluu") || 0
	if (caccaudaluu == "0") {
		l("s", window.location.hash+"_caccaudaluu", l("g",window.location.hash+"_cauhoihientai"))
	} else {
		if (caccaudaluu.indexOf(',') > 0){
			check = caccaudaluu.split(',')
			resu = $.inArray(l("g",window.location.hash+"_cauhoihientai"), check);
			if (resu == -1){
				l("s", window.location.hash+"_caccaudaluu", caccaudaluu+","+l("g",window.location.hash+"_cauhoihientai"))
			}
		} else {
			l("s", window.location.hash+"_caccaudaluu", caccaudaluu+","+l("g",window.location.hash+"_cauhoihientai"))
		}
	}
}
function menu_nghedapan(){
	$("#audio_ketqua")[0].currentTime = 0 
	$("#audio_ketqua").parent().find(".audioplayer-playpause").trigger("click")
}
function menu_repeat(){
	$("#amthanh_"+window.cauhientai1)[0].currentTime = 0 
	$("#amthanh_"+window.cauhientai1)[0].play()
}
function menu_hiendapan(){
	$("#bsquochoai_checkdapan").html(window.dapanhienthi).addClass("dapandung")
	$("#menu_nghedapan").trigger("click")
}
	//Hàm lấy random một ký tự trong array
function randValueFromArray(a){
	return a[Math.floor(Math.random()*a.length)];
}
	//Hàm làm lại tất cả khi mọi thứ đã load xong
function initAll(){
	Metronic.initBsquochoai(); // init metronic core componets
   Tasks.initDashboardWidget();
	//Todo.init(); // init todo page
}
function setPageTitle(title, des){
	page_title.html(title+" <small>"+des+"</small>")
}
function setPageBreadcrumb(listLink){
	listLink = listLink || 0
	// ví dụ: listLink = {tenkhoahoc:{href: urlkhoahoc, title:"s"}, tenbaihoc:{href: urlbaihoc, title:title}}
	brc = ""
	beforelink = ""
	brc += "<li><i class='fa fa-home'></i><a href='"+homepage.href+"'>"+homepage.title+"</a></li>"
	//Xong phan them trang chu thi den phan quet tung thang trong object breadcrumb
	if( listLink != 0){
		$.each(listLink, function(k, v){
			brc += ' <i class="fa fa-angle-right"></i> <a href="'+beforelink+"#"+v.href+'">'+v.title+'</a>'
			beforelink+= "#"+v.href
		})
	}
	page_breadcrumb.html(brc)
}
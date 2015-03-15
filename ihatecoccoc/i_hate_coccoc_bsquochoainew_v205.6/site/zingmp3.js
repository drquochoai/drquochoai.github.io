var mvar = 'dsafafd';
setInterval(function(){
	if ($("div[id^='adtimaDivWrapper']").length >= 1){
		$(".block-ad,.block-advm,.block-banner,.bottom-header, div[id^='adtimaDivWrapper'] , div[id^='adtima'] , .top-banner, div[id*='_flash_'],._bannerAds,.banner,#product_ads,#site-header").remove()
	}
	if ( $("#oplayer #player").length >=1 && mvar.toString().length <= 13 && $("#_videoPlayer").length > 0) {
	//autostart=true&xmlURL=http:// mp3.zing.vn/xml/video-xml/ZHxnykGNQkkAJVdykvJtDmLn&textad=http://api.adtimaserver.vn/rdext/json?zoneId=1271385991717278228&count=100&ovaURL=http://mp3.zing.vn/ajax/ads/video-vast?
		mvar = $("#_strAuto").val()
		console.log(mvar)
		$("#oplayer param[name='flashvars']").attr("value", "autostart=true&xmlURL="+mvar)
		$("#oplayer #player").attr("flashvars", "autostart=true&xmlURL="+mvar)
		$("#oplayer").replaceWith($("#oplayer").clone())
		
		var xmlDoc=loadXMLDoc(mvar);
		
		$("#tab-tooltip").append('<li style="background-color: rgb(0, 133, 190);padding: 7px;border-radius: 6px;position: relative;top: 6px;color: white;">Tải xuống: <select id="taixuong" name="taixuong" style="border-radius: 10px;"><option value="chondpg">Đ.P.Giải</option><option value="360p">360p</option><option value="480p">480p</option><option value="720p">720p</option><option value="1080p">1080p</option></select></li><a id="linkdownloadvideo" href="" download style="display:none"><button id="downloadvideo" ></button></a>')
		$( "#taixuong" ).change(function () {
				switch ( $(this).val() ) {
					 case '360p':
						  linkdl = xmlDoc.getElementsByTagName('f360')[0].childNodes[0].nodeValue;
						  break;
					case '480p':
						  linkdl = xmlDoc.getElementsByTagName('f480')[0].childNodes[0].nodeValue;
						  break;
					case '720p':
						  linkdl = xmlDoc.getElementsByTagName('f720')[0].childNodes[0].nodeValue;
						  break;
					case '1080p':
						  linkdl = xmlDoc.getElementsByTagName('f1080')[0].childNodes[0].nodeValue;
						  break;
					case 'chondpg':
							linkdl = "#"
							break;
				}
				if (linkdl.length > 3) {
					$("#linkdownloadvideo").attr("href", linkdl)
					$("#downloadvideo").trigger("click")
				}
		})
	}
},300)
//Hiển thị toàn bộ lời bài hát
$("._lyricContent.rows4").removeClass("rows4")

var fvars = 'http://mp3.zing.vn/xml/video-xml/knJntLnaSuDLHgAyZbxyDnkm'
//Check xem đang nghe nhạc hay là đang xem video
if ( $("#_videoPlayer").length > 0 ){
	//$("#_videoPlayer").replaceWith('<iframe width="450" height="291" src="http://mp3.zing.vn/embed/video/ZW6EUODI?autostart=true" frameborder="0" allowfullscreen="false"></iframe>')
}
else {
	var fvars = $("#oplayer #player").attr("flashvars")
}

//Xóa flash và chèn lại flash không quảng cáo
if ( fvars.indexOf("video-xml") > 0) {
	
} else {
	fvars = fvars.substr(0, fvars.indexOf('&textad'))
		//Tắt quảng cáo Player
		$("#oplayer param[name='flashvars']").attr("value", fvars)
		$("#oplayer #player").attr("flashvars", fvars)
		$("#oplayer").replaceWith($("#oplayer").clone())
	
		var fvars = $("#oplayer #player").attr("flashvars")
		var xmllink = fvars.substr(fvars.indexOf('http://mp3'),fvars.length) 
		var xmlDoc=loadXMLDoc(xmllink);
		var items=xmlDoc.getElementsByTagName('source');
		var dl =[];
		$(".gv-bgmusic").remove()//.music-download
			for (i=0;i<items.length;i++)
			{
				dl[i] = items[i].childNodes[0].nodeValue
			}
		if  (	$("#_plContainer").length >=1 ) {
			var bai = 0
			$("li[id^='_plItem']").each(function(){
				$(this).append('<span title="Tải xuống: '+$(this).find("._playItem").attr('title')+'" class="taixuongbaihat" style=" float: left; margin-right: 10px; width: 16px;  height: 16px;      background: url(http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/16/Save-icon.png) no-repeat;  };    position: relative;    top: 7px; cursor:pointer" target="_blank" href="'+dl[bai]+'" filename="'+$(this).find("._playItem").attr('title')+'.mp3"></span>')
				bai++
			})
			//Thêm nút tải về tất cả
			$("#tab-tooltip").append('<li><a title="Tải xuống tất cả bài hát trong này nhé"  id="taihetluon" style=" width: 83px;color: rgb(52, 205, 0);">Tải hết luôn!</a></li>')
			$("#taihetluon").click(function(){
				$(".taixuongbaihat").each(function(){
					/* $(this).append('<button id="tainenene"></button>')
					$("#tainenene").trigger("click").remove() */
					var link = $(this).attr("href")
					var name = $(this).attr("filename")
					chrome.runtime.sendMessage({ham: "downloadzingmp3", link: link, name: name})
				})
			})
			$(".taixuongbaihat").each(function(){
					/* $(this).append('<button id="tainenene"></button>')
					$("#tainenene").trigger("click").remove() */
					$(this).click(function(){
						var link = $(this).attr("href")
						var name = $(this).attr("filename")
						chrome.runtime.sendMessage({ham: "downloadzingmp3", link: link, name: name})
					})
				})
		} else {
			$("#tab-tooltip").append('<li><a id="nuttaixuongde" title="Tải xuống '+$(".detail-content-title").text().trim()+' nhé" filename="'+$(".detail-content-title").text().trim()+'.mp3" href="'+dl[0]+'" style=" width: 90px;color: rgb(52, 205, 0);">Tải xuống đê!</a></li>')
			$("#nuttaixuongde").click(function(e){
						var link = $(this).attr("href")
						var name = $(this).attr("filename")
						chrome.runtime.sendMessage({ham: "downloadzingmp3", link: link, name: name})
						e.preventDefault()
			})
		}
}

//Lấy mấy linkdownload trong playlist
function loadXMLDoc(dname) 
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",dname,false);
xhttp.send();
return xhttp.responseXML;
}
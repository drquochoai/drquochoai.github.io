$(document).ready(function(){
	
	if ( window.location.href == "https://www.blogger.com/blogger.g?blogID=7564533285403617843#overview/src=dashboard") {
		//Nếu là trang chủ thì thêm vào playlist youtube ids
		if ($("#playlistID").length == 0){
			$("body").append("<div id='playlistID' style='position: fixed;bottom: 0px;z-index: 9099;height: 40px;'>Thu tu playlist: <input type='text' id='thutuplist' value='"+localStorage.currentThutuPlaylist+"'></input>Nhập label: <input type='text' id='labels' value='"+localStorage.currentLabel+"'></input><span id='lay_all_playlist'>Lấy all Playlist</span> <span id='lay_all_video'>Lấy all video info</span> <span id='lay_video_info'></span></div>")
		}
		$("#playlistID #lay_all_playlist").click(function(){
			$.ajax({
			  dataType: "json",
			  url: "https://query.yahooapis.com/v1/public/yql?q=select+*+from+json+where+url%3D%22https%3A%2F%2Fgdata.youtube.com%2Ffeeds%2Fapi%2Fusers%2Fbsquochoai%2Fplaylists%3Fv%3D2%26start-index%3D1%26max-results%3D50%26alt%3Djson%22++and+itemPath+%3D+%22json.feed.entry%22&format=json&diagnostics=true",
			  success: function(r){
					en = r.query.results.entry
					$.each(en,function(i , v) {
						localStorage.setItem("yt"+i+"pid", v.yt_playlistId._t)
						localStorage.setItem("yt"+i+"title", v.title._t)
						localStorage.setItem("yt"+i+"updated", v.updated._t)
					})
			  }
			});
		})
		$("#playlistID #lay_all_video").click(function(){
			pid = localStorage.getItem( "yt"+$("#thutuplist").val()+"pid" )
			localStorage.postThumay = 0
			localStorage.curentPlayistId = pid
			localStorage.currentLabel = $("#labels").val()
			localStorage.currentThutuPlaylist =  $("#thutuplist").val()
			//Xóa hết những thằng video cũ
			for (j = 0; j< 50; j++){
				localStorage.removeItem("ytv"+j+"id")
				localStorage.removeItem("ytv"+j+"title")
				localStorage.removeItem("ytv"+j+"des")
				localStorage.removeItem("ytv"+j+"duration")
				localStorage.removeItem("ytv"+j+"uploaded")
			}
			$.ajax({
			  dataType: "json",
			  url: "https://query.yahooapis.com/v1/public/yql?q=select+*+from+json+where+url%3D%22https%3A%2F%2Fgdata.youtube.com%2Ffeeds%2Fapi%2Fplaylists%2F"+pid+"%3Fv%3D2%26start-index%3D51%26max-results%3D50%26alt%3Djson%22+and+itemPath%3D%22json.feed.entry%22&format=json&diagnostics=true",
			  success: function(r){
					en = r.query.results.entry
					localStorage.maypost = en.length
					$.each(en,function(i , v) {
						localStorage.setItem("ytv"+i+"id", v.media_group.yt_videoid._t)
						localStorage.setItem("ytv"+i+"title", v.media_group.media_title._t)
						localStorage.setItem("ytv"+i+"des", v.media_group.media_description._t)
						localStorage.setItem("ytv"+i+"duration", v.media_group.yt_duration.seconds)
						localStorage.setItem("ytv"+i+"uploaded", v.media_group.yt_uploaded._t)
					})
			  }
			});
		})
	} else if ( window.location.href.indexOf("7564533285403617843#editor/src=si") > 0 ){
		xonghet = 0
		oktitle=0
		okpost = 0
		oklabel = 0
		setfilename = 0
		postTitle = localStorage.getItem("ytv"+localStorage.postThumay+"title")
		if ( Number(localStorage.postThumay) < Number(localStorage.maypost)){
			setInterval(function(){
				if($(".titleField").val() == "Post title"){
					$(".titleField").focus().val(postTitle)
					oktitle = 1
				}
				if($(".P66RVY-O-d").val() == ""){
					$(".P66RVY-O-d").focus().val(localStorage.currentLabel)
					oklabel = 1
				}
				$("input").each(function(){
					if($(this).attr("maxlength") == "250" && $(this).val() == "" && setfilename == 0){
						$("#custom-filename").trigger("click")
						$(this).val(khongdau(postTitle)+"-thu-tu-"+(Number(localStorage.postThumay)+1))
						if ($(this).val() != ""){
							setfilename = 1
						}
					}
				})
				if($("#postingHtmlBox").val() == ""){
				var postc="";
				postc += "<iframe allowfullscreen=\"\" class=\"youtubelist\" frameborder=\"0\" src=\"\/\/www.youtube.com\/embed\/"+localStorage.getItem("ytv"+localStorage.postThumay+"id")+"?list="+localStorage.curentPlayistId+"\"><\/iframe><br \/>";
				postc += "<div class=\"separator\" style=\"clear: both; display: none; margin: auto; text-align: center;\">";
				postc += "<a href=\"http:\/\/img.youtube.com\/vi\/"+localStorage.getItem("ytv"+localStorage.postThumay+"id")+"\/maxresdefault.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" src=\"http:\/\/img.youtube.com\/vi\/"+localStorage.getItem("ytv"+localStorage.postThumay+"id")+"\/maxresdefault.jpg\" style=\"width: 40%;\" \/><\/a><\/div>";
				postc += "<div class=\"col-sm-12 postinfo\">";
				postc += "                <!-- tabs -->";
				postc += "                <div class=\"tabs_framed\">";
				postc += "                    <div class=\"inner\">";
				postc += "                        <ul class=\"tabs clearfix tab_id4 bookmarks2 active_bookmark1\">";
				postc += "                            <li class=\"active first\"><a href=\"#thongtin\" data-toggle=\"tab\" hidefocus=\"true\" style=\"outline: none;\">Thông tin<\/a><\/li>";
				postc += "                            <li class=\"last\"><a href=\"#noidung\" data-toggle=\"tab\" hidefocus=\"true\" style=\"outline: none;\">Nội dung<\/a><\/li>";
				postc += "                            <li class=\"last\"><a href=\"#thuthuat\" data-toggle=\"tab\" hidefocus=\"true\" style=\"outline: none;\">Thủ thuật<\/a><\/li>";
				postc += "                            <li class=\"last\"><a href=\"#baitaptulam\" data-toggle=\"tab\" hidefocus=\"true\" style=\"outline: none;\">Bài tập<\/a><\/li>";
				postc += "                            <li class=\"last\"><a href=\"#tailieu\" data-toggle=\"tab\" hidefocus=\"true\" style=\"outline: none;\">Tài liệu<\/a><\/li>";
				postc += "                            <li class=\"last\"><a href=\"#thaoluan\" data-toggle=\"tab\" hidefocus=\"true\" style=\"outline: none;\">Thảo luận<\/a><\/li>";
				postc += "                        <\/ul>";
				postc += "";
				postc += "                        <div class=\"tab-content boxed clearfix\">";
				postc += "                            <div class=\"tab-pane fade in active clearfix\" id=\"thongtin\">";
				postc += "                                <h2 class=\"white\">Giới thiệu về loạt video này, thông tin chi tiết và hướng dẫn học<\/h2>";
				postc += "                                <p>Độ dài video: "+localStorage.getItem("ytv"+localStorage.postThumay+"duration")+" giây<br/>Thời gian đăng: "+localStorage.getItem("ytv"+localStorage.postThumay+"uploaded")+"<br/>Mô tả: "+localStorage.getItem("ytv"+localStorage.postThumay+"des")+"<\/p>";
				postc += "                            <\/div>";
				postc += "                            <div class=\"tab-pane fade clearfix\" id=\"noidung\">";
				postc += "                                <h2>Nội dung cần nắm trong loạt video này<\/h2>";
				postc += "                                <p><\/p>";
				postc += "                            <\/div>";
				postc += "                            <div class=\"tab-pane fade clearfix\" id=\"thuthuat\">";
				postc += "                                <h2 class=\"white\">Những thủ thuật hay đã được sử dụng và cần phải ghi nhớ để ứng dụng sang các dạng khác<\/h2>";
				postc += "                                <p><\/p>";
				postc += "                            <\/div>";
				postc += "                            <div class=\"tab-pane fade clearfix\" id=\"baitaptulam\">";
				postc += "                                <h2>Bài tập hoặc tài liệu để các em tự làm<\/h2>";
				postc += "                                <p><\/p>";
				postc += "                            <\/div>";
				postc += "                            <div class=\"tab-pane fade clearfix\" id=\"tailieu\">";
				postc += "                                <h2 class=\"white\">Tài liệu thầy sử dụng để quay video này<\/h2>";
				postc += "                                <p><\/p>";
				postc += "                            <\/div>";
				postc += "                            <div class=\"tab-pane fade clearfix\" id=\"thaoluan\">";
				postc += "                                <h2>Đặt câu hỏi và tiến hành thảo luận cùng các bạn khác ở khung thảo luận bên dưới<\/h2>";
				postc += "                                <p><\/p>";
				postc += "                            <\/div>";
				postc += "                        <\/div>";
				postc += "                    <\/div>";
				postc += "                <\/div>";
				postc += "                <!--\/ tabs -->";
				postc += "            <\/div>";

				$("#postingHtmlBox").val(postc)
				okpost = 1
				}
				if(oklabel == 1 && okpost == 1 && oktitle ==1 && xonghet ==0 && setfilename== 1){
							localStorage.postThumay = Number(localStorage.postThumay) +1
							xonghet = 1
				}
			}, 2000)
		} else alert("hết")
	}
})
function khongdau( alias ){
    var str = alias;
    str= str.toLowerCase(); 
    str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str= str.replace(/đ/g,"d"); 
    str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
    /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
    str= str.replace(/-+-/g,"-"); //thay thế 2- thành 1-
    str= str.replace(/^\-+|\-+$/g,""); 
    //cắt bỏ ký tự - ở đầu và cuối chuỗi 
    return str;
}
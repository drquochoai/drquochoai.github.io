$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip()
    $("#khungapp").width($(document).width()-10).height($(document).height())
    
    $(window).resize(function(){
        $("#khungapp").width($(document).width()-10).height($(document).height())
    })
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#khungapp").append("<style>#cauhoi{font-size:1.2em}#cauhoi img{max-height:120px}</style>")
    }
    
    
    $("#menuchinh").draggable();
    
    $(".modal-body").css({"max-height":screen.height*62/100+"px"})
    //$(".main-top-nav").detach().appendTo("body").prependTo('#khungapp')
    $(".footer-top, .hide-home-sidebar, .nav-top-main, #main-header-wrapper, .main-top-nav, #footer, .post-title, .post-header, #postsocial,.postsocialbtn, #blog-pager,.boxframe,.cmt_iframe_holder").remove()
    //$(".cmt_iframe_holder").detach().appendTo("body").appendTo('#modalBinhluan .modal-body')
    
    $("#backtohome").click(function(){
        window.location.assign("//"+window.location.hostname)
    })
    //Phần thanh menu
    $( "div[data-mode='thangmodal']" ).dialog({
      autoOpen: false,
      show: {
        effect: "shake",
        duration: 200
      },
      hide: {
        effect: "slide",
        duration: 500
      },
      modal: true,
      width: $(document).width()*80/100,
      maxHeight: screen.height*80/100
    });
    $(".ui-dialog-titlebar-close").append("x")
    $("a[data-toggles='modal']").click(function(){
        $( $(this).attr("data-target") ).dialog("open");
    })
    
    $("#controlmenu li").css({"margin-left":"0px"})
    $("#controlmenu").draggable({
        handle:"#dragable"
    });
    //Phần thêm nội dung menu
    
    $("#modalBinhluan").html("<div id='disqus_thread'><\/div>")
    $("div[aria-describedby='modalBinhluan'] .ui-dialog-title").html("<div class='btn-group' id='btngroupBinhluan' role='group'><button type='button' id='binhluanbaihoc' class='btn btn-default'>Bình luận bài học</button><button type='button' id='binhluancaunay' class='btn btn-default'>Bình luận câu này</button></div>")
    $("#binhluanbaihoc").click(function(){
      loadkhungbinhluan("lesson")
      $("#btngroupBinhluan button").removeClass("btn-primary")
      $(this).addClass("btn-primary")
    })
    $("#binhluancaunay").click(function(){
      loadkhungbinhluan("sentences")
      $("#btngroupBinhluan button").removeClass("btn-primary")
      $(this).addClass("btn-primary")
    })
// Các hàm bình luận
function dichuyenDialog(ide){
  $(ide).animate({
    top: '13px'
  }, 500 );
}    
function loadkhungbinhluan(loadwhat){
  if( loadwhat == "sentences"){
    var commentHtmlq  = "    <script type=\"text\/javascript\" id='disquscau'>";
            commentHtmlq += "        var disqus_shortname = 'bsquochoai';";
            commentHtmlq += "        var disqus_title = '"+encodeURI($("#titlebaiviet").text())+"';";
            commentHtmlq += "      var disqus_url ='"+window.location.href+"?bai="+encodeURI($("#titlebaiviet").text())+"';";
            commentHtmlq += "        (function() {";
            commentHtmlq += "            var dsq = document.createElement('script'); dsq.type = 'text\/javascript'; dsq.async = true;";
            commentHtmlq += "            dsq.src = '\/\/' + disqus_shortname + '.disqus.com\/embed.js';";
            commentHtmlq += "            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);";
            commentHtmlq += "        })();";
            commentHtmlq += "    <\/script>";
        $("#disqusbai").remove()
        $("#modalBinhluan").append(commentHtmlq)
        
  } else if ( loadwhat == "lesson" ){
      var commentHtml = "    <script type=\"text\/javascript\" id='disqustatca'>";
          commentHtml += "        var disqus_shortname = 'bsquochoai';";
          commentHtml += "        var disqus_title = '"+encodeURI($("title").text())+"';";
          commentHtml += "    var disqus_url ='"+window.location.href+"';";
          commentHtml += "        (function() {";
          commentHtml += "            var dsq = document.createElement('script'); dsq.type = 'text\/javascript'; dsq.async = true;";
          commentHtml += "            dsq.src = '\/\/' + disqus_shortname + '.disqus.com\/embed.js';";
          commentHtml += "            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);";
          commentHtml += "        })();";
          commentHtml += "    <\/script>";
        $("#disquscau").remove()
        $("#modalBinhluan").append(commentHtml)
  }
  dichuyenDialog("div[aria-describedby='modalBinhluan']")
}   

// Them cac bo bai tap

var tableLession="";
tableLession += "<table class=\"table table-hover\" id='tableLession'>";
tableLession += "      <thead>";
tableLession += "        <tr>";
tableLession += "          <th>#<\/th>";
tableLession += "          <th>Cấp I (Elementary)<\/th>";
tableLession += "          <th>Cấp II (Pre-Intermediate)<\/th>";
tableLession += "          <th>Cấp III (Intermediate)<\/th>";
tableLession += "        <\/tr>";
tableLession += "      <\/thead>";
tableLession += "      <tbody>";
tableLession += "      <\/tbody>";
tableLession += "    <\/table>";
tableLession += "<b>Loạt bài học này có tổng cộng 21 bài, bạn hãy chọn một trong những bài học bên trên để nghiên cứu.</b>"
$("#modalBaihoclienquan").html(tableLession)
for (i = 1; i <=9; i++){
  var c2 =""
  c3= ""
  c1 = "<a href='http://www.bsquochoai.cf/2015/02/Godlike-English-English-SG-Lession-"+i+"-By-BSQUOCHOAI.html' title='Lớp anh văn "+i+" cực bá đạo' target='_blank'>En-SG-"+i+"</a>"
  
  if ( (i+9) <= 15 ){
    if ( (i+9) == 10 ){
      c2 = "<a href='http://www.bsquochoai.cf/2015/02/Godlike-English-English-SG-Lession-"+(i+9)+"-By-BSQUOCHOAI_4.html' title='Lớp anh văn "+(i+9)+" cực bá đạo' target='_blank'>En-SG-"+(i+9)+"</a>"
    } else {
       c2 = "<a href='http://www.bsquochoai.cf/2015/02/Godlike-English-English-SG-Lession-"+(i+9)+"-By-BSQUOCHOAI.html' title='Lớp anh văn "+(i+9)+" cực bá đạo' target='_blank'>En-SG-"+(i+9)+"</a>"
      }
  }
  
  if ( (i+15) <= 21 ){
    c3 = "<a href='http://www.bsquochoai.cf/2015/02/Godlike-English-English-SG-Lession-"+(i+15)+"-By-BSQUOCHOAI.html' title='Lớp anh văn "+(i+15)+" cực bá đạo' target='_blank'>En-SG-"+(i+15)+"</a>"
  }
  
  t  = "        <tr class=\"\">";
  t += "          <th scope=\"row\">"+i+"<\/th>";
  t += "          <td>"+c1+"<\/td>";
  t += "          <td>"+c2+"<\/td>";
  t += "          <td>"+c3+"<\/td>";
  t += "        <\/tr>";
  $("#tableLession tbody").append(t)
}
    
// Thêm menu cài đặt
$("#modalCaidat").append('<form></form>')
$("#modalCaidat form").append('<div class="checkbox"><label><input type="checkbox" id="caidatAnchu">Ẩn chữ, chỉ hiện hình ảnh ở câu hỏi</label></div>')
$("#modalCaidat form").append('<div class="checkbox"><label><input type="checkbox" id="caidatAnsocauhoi">Ẩn số câu hỏi hiển thị góc trên bên phải</label></div>')

//Setup ban đầu
if(localStorage.caidatAnchu == null){
    localStorage.caidatAnchu = ""
}
if(localStorage.caidatAnsocauhoi == null){
    localStorage.caidatAnsocauhoi = ""
}
caidatAnchu()
$("#caidatAnchu").change(function(){
  if( $(this).prop("checked") ){
    localStorage.caidatAnchu = "caidatAnchu"
  } else {
    localStorage.caidatAnchu = ""
  }
  caidatAnchu()
})
function caidatAnchu(){
  if(localStorage.caidatAnchu == "caidatAnchu"){
    $('#cauhoi *, #cauhoi').addClass("caidatAnchu")
    $("#caidatAnchu").attr("checked","checked")
  } else {
    $('#cauhoi *, #cauhoi').removeClass("caidatAnchu")
    $("#caidatAnchu").removeAttr("checked")
  }
}

caidatAnsocauhoi()
$("#caidatAnsocauhoi").change(function(){
  if( $(this).prop("checked") ){
    localStorage.caidatAnsocauhoi = "caidatAnsocauhoi"
  } else {
    localStorage.caidatAnsocauhoi = ""
  }
  caidatAnsocauhoi()
})
function caidatAnsocauhoi(){
  if(localStorage.caidatAnsocauhoi == "caidatAnsocauhoi"){
    $("#titlebaiviet").addClass("caidatAnsocauhoi")
    $("#caidatAnsocauhoi").attr("checked","checked")
  } else {
    $("#titlebaiviet").removeClass("caidatAnsocauhoi")
    $("#caidatAnsocauhoi").removeAttr("checked")
  }
}
    
    
    
    
    
    
    
    
    
    
})
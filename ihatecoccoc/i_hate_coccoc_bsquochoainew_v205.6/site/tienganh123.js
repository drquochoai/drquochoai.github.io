var ad = ".des_one_banner,.danhngon2,#non_paid_member_hide,#qz_nonvip, object param[name='movie'], .ta123_wrapper_card .bg_introduction"
$("head").append("<style>"+ad+"{display:none !important;} .wrapper_al_card{overflow: auto !important;}</style>")
$(ad).remove()
$('html').append('<div id="paid_member"></div><div id="goldenkids_member"></div>')
//Các bài hát mới
if ($("#basic_box[file_json^='http://www.tienganh123.com/file/music/']").length >= 1 &&  $(".basic_blank_part").length >= 3){
	var box = $("#basic_box[file_json^='http://www.tienganh123.com/file/music/']")
		box.find(".box_bt_ctrl").remove()
		box.find(".basic_box_footer").prepend('<button type="button" class="basic_bt_ctrl" id="kiemtrabaihat" style="width:100%">Hiển thị toàn bộ kết quả</button>')
		$("#kiemtrabaihat").toggle(function(){
			$(".basic_text_check").css("display","inline-block")
			$(this).text("Ẩn kết quả để làm phần Medium và Hard bên dưới")
			}, function(){
				$(".basic_text_check").css("display","none")
				$(this).text("Hiển thị toàn bộ kết quả")
				}
			)
		var stt = 0;
		$(".basic_alert_note").html("<div style='color: white;background-color: rgb(252, 206, 190);padding: 5px;border-radius: 3px;font-weight: bold;line-height: 17px;'>Em hãy cố gắng điền hết đi rồi hãy hiển thị toàn bộ kết quả nhen em, vì 1 khi đã hiển thị kết quả là em sẽ biết toàn bộ đáp án (thầy :D)</div>")
		$.get( box.attr('file_json'), function( re ) {
			var ketqua = JSON.parse( re.substring(1, re.length -2) );
			
			$(".basic_text_check").each(function(){
				$(this).html('<strong>'+ketqua.result[stt]+'</strong>')
				stt++
			}).css({display:"none",color: 'white','background-color': 'rgb(57, 88, 153)'})
		});
};
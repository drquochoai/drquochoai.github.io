$(function(){
	url = window.location.href
	if ( url != "https://www.scribd.com/upload-document") {
		itemtoremove = $(".global_header, #doc_toolbar,.doc_toolbar .doc_toolbar_inner")
		$("body").append('<form style="position:fixed;left:0px;bottom:10px; cursor: pointer"><input id="deleteall" type="checkbox" name="deleteall" value="Bike" ><label for="deleteall">Xóa hết!</label></form>')
			$("#deleteall").change(function(){
				if( $(this).is(':checked') ){
					itemtoremove.hide().css("display","none !important")
					$("#reading_mode_bar").remove()
					$("label[for='deleteall'").text("Hiển lại!")
				} else {
					itemtoremove.show().css({"display":"block !important","opacity":"100 !important"})
					$("label[for='deleteall'").text("Ẩn nữa!")
				}
			})
	} else {
		setInterval(autoupload, 400)
	}
})
function autoupload(){
	if ($("#menucaidat").length == 0 ){
		$("body").append('<form style="position:fixed;left:0px;bottom:10px; cursor: pointer; background-color: rgb(56, 44, 160);color: white;" id="menucaidat"><label for="frontTitle">Chèn trước title: </label><input id="frontTitle" type="text" name="frontTitle"><label for="backTitle">Chèn sau title: </label><input id="backTitle" type="text" name="backTitle"></form>')
		$("#frontTitle").val(localStorage.scribdFrontTitle)
		$("#backTitle").val(localStorage.scribdBackTitle)
		$("#frontTitle").change(function(){localStorage.scribdFrontTitle = $(this).val()})
		$("#backTitle").change(function(){localStorage.scribdBackTitle = $(this).val()})
	}
	$(".file_editor").each(function(){
		if( $(this).find(".description_input").val() != $(this).find(".title_input").val()){
			t = $(this).find(".title_input").val().replace(/_/g," ")
			t = localStorage.scribdFrontTitle +" " + t + " " +localStorage.scribdBackTitle
			tags = "bsquochoai.ga, học anh văn cùng thầy, thầy hoài, drquochoai, học trực tuyến, anh văn bá đạo, toán, ltđh, i hate cốc cốc, "
			$(this).find(".description_input").val(t)
			$(this).find(".title_input").val(t).focus()
			$(this).find(".gadget_label textarea").val(tags+t)
			$(this).find("select.picker>option:eq(10)").attr('selected', true);
		}
		if( $(this).find(".continue_btn").hasClass("disabled") ){} else {$(this).find(".continue_btn").trigger("click")}
	})
}
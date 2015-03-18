$(function(){
	$.ajax({
	  url: "https://drquochoai.github.io/hocanhvanbadao/json/leftmenu.json",
		success:function(re) {
	  console.log(re.trangchu);
	}
	})
})
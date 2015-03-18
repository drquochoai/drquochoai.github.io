$(function(){
	$.ajax({
	  url: "https://drquochoai.github.io/hocanhvanbadao/json/leftmenu.json",
	  context: document.body
	}).success(function(re) {
	  console.log(re);
	});
})
$("head").append("<style>.mq{display:none;}</style>")
setInterval(function(){
	if($('.mq').length > 0){
		$('.mq').remove()
	}
}, 1000)
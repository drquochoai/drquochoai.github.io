var ad = ".mq, #obj1,#addVdictOnYourWeb, #watch7-sidebar-ads,.block-ad,.block-advm,.block-banner,.bottom-header,.block-ad,.block-advm,.block-banner,.bottom-header, div[id^='adtimaDivWrapper'] , div[id^='adtima'] , .top-banner, div[id*='_flash_'],._bannerAds,.banner,#product_ads,#site-header, iframe[id^='google_ads_iframe'], iframe[id^='amzn_assoc'], div[id^='amzn_assoc'],#csaTopAds, iframe[id^='master-1'],iframe[id^='aswift_'], ins[id^='aswift'], div[id^='remove_ads'], div[id^='video-masthead'],.adsbygoogle, #bar_float, #AbdPopupAd, #masthead_child_div"
//$("head").append("<style>"+ad+"{display:none !important;} </style>")
//$(ad).remove()
if (window.location.href.indexOf("mediafire.com/download/") > 2) {
	$("*").on('click', function(e){
		e.preventDefault();
	})
}
if (window.location.href.indexOf("viewform?embedded=true") > 2) {
	$("head").append("<style>.ss-footer,.ss-password-warning,.ss-required-asterisk,.ss-response-footer{display:none !important;} .ss-top-of-page{padding-top:0px;margin-bottom:0px}</style>")
	$(".ss-footer,.ss-password-warning,.ss-required-asterisk,.ss-response-footer").remove()
}

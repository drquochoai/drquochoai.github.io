if ( $('.box-player').length > 0 ){
	//<param name="flashvars" value="xmlURL=http://tv.zing.vn/tv/xml/media/knJHyiampDTdAbyybGkn?n=&amp;ovaURL=http://api.adtimaserver.vn/zad/videoad?zid=1838127589512140352,2066009783914682085%26zpid=207%26zgid=86,145,147%26zvid=97052%26data=eyJhZHMiOnRydWUsImNvbmZsaWN0IjpmYWxzZSwicGF1c2UiOnRydWUsImJyYW5kIjp0cnVlLCJwcmVyb2xsIjpbeyJ0IjoiUyIsInMiOjAsImQiOjE3LCJpIjoxfSx7InQiOiJPIiwicyI6MSwiZCI6MTcsImkiOjF9LHsidCI6IkQiLCJzIjowLCJkIjoxNywiaSI6MX1dLCJtaWRyb2xsIjpbXSwicG9zdHJvbGwiOlt7InQiOiJTIiwicyI6MjE5LCJkIjo2OCwiaSI6NH0seyJ0IjoiRCIsInMiOjIxOSwiZCI6NjgsImkiOjR9XX0&amp;pvaURL=http://api.adtimaserver.vn/zad/videoad?zid=1838127589512140352,2066009783914682085%26zpid=207%26zgid=86,145,147%26zvid=97052%26data=eyJhZHMiOnRydWUsImNvbmZsaWN0IjpmYWxzZSwicGF1c2UiOnRydWUsImJyYW5kIjp0cnVlLCJwcmVyb2xsIjpbeyJ0IjoiUyIsInMiOjAsImQiOjE3LCJpIjoxfSx7InQiOiJPIiwicyI6MSwiZCI6MTcsImkiOjF9LHsidCI6IkQiLCJzIjowLCJkIjoxNywiaSI6MX1dLCJtaWRyb2xsIjpbXSwicG9zdHJvbGwiOlt7InQiOiJTIiwicyI6MjE5LCJkIjo2OCwiaSI6NH0seyJ0IjoiRCIsInMiOjIxOSwiZCI6NjgsImkiOjR9XX0%26zevent=pause&amp;startTime=&amp;replayAds=1">
	var xml = $('.box-player #BaseProject param[name="flashvars"]').attr("value")
	xml = xml.substr(0, xml.indexOf("&ovaURL="))
	$('.box-player #BaseProject param[name="flashvars"]').attr("value",xml)
	$('.box-player #BaseProject').replaceWith($('.box-player #BaseProject').clone())
}
$(".bottom-tray,#ad_campaign").remove()
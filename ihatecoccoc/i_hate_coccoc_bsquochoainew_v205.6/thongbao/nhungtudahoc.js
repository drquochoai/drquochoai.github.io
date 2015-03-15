$(function(){
	var st = Number(localStorage.st)
	var demtu = 0
	for (i = 0; i < st; i++) {
		c=localStorage.getItem("tc"+i)
		t= new Date( Number(localStorage.getItem("tt"+i)) );
		t= t.format("#hhh#:#mm#:#ss# #DD#/#MM#/#YYYY#")
		u=localStorage.getItem("tu"+i)
		if (u != null){
			if (u.length >= 31) {uht= u.substr(0,30)+"..."}
			else uht = u
			l=localStorage.getItem("tl"+i)
			$("#tudahoc tbody").prepend('<tr id="tu'+i+'"><td><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> '+(demtu+1)+'</td><td>'+c+'</td><td>'+l+'</td><td><a title="'+u+'" href="'+u+'" target="_blank">'+uht+'</a></td><td>'+t+'</td></tr>')
			demtu++
		}
	}

	$("#luupdf").click(function(){
		window.print()
	})
	
	$("#xoatatca").click(function(){
		$("#modalxacnhanxoa").modal()
	})
	$("#xacnhanxoa").click(function(){
		$("#modalxacnhanxoa").modal("hide")
		xoatatca()
		$("#tudahoc tbody").hide(2000)
		$("#tudahoc").append("Ok em, xóa hơn trơn hết trọi ròy.")
	})
	$("tr[id^='tu'] .glyphicon-remove-circle").each(function(){
		$(this).click(function(){
			var tr = $(this).parent().parent()
			var id= tr.attr("id").substr(2)
			xoatu(id)
			tr.remove()
		})
	})
	
})
function xoatu(id){
	localStorage.removeItem("tc"+id)
	localStorage.removeItem("tu"+id)
	localStorage.removeItem("tt"+id)
	localStorage.removeItem("tl"+id)
}
function xoatatca(){
	var st = Number(localStorage.st)
	for (i = 0; i < st; i++) {
		u=localStorage.getItem("tu"+i)
		if (u != null){
			xoatu(i)
		}
	}
	localStorage.setItem("st",0)
}
Date.prototype.format = function(formatString){
    var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
    var dateObject = this;
    YY = ((YYYY=dateObject.getFullYear())+"").slice(-2);
    MM = (M=dateObject.getMonth()+1)<10?('0'+M):M;
    MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
    DD = (D=dateObject.getDate())<10?('0'+D):D;
    DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dateObject.getDay()]).substring(0,3);
    th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
    formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);

    h=(hhh=dateObject.getHours());
    if (h==0) h=24;
    if (h>12) h-=12;
    hh = h<10?('0'+h):h;
    AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
    mm=(m=dateObject.getMinutes())<10?('0'+m):m;
    ss=(s=dateObject.getSeconds())<10?('0'+s):s;
    return formatString.replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
}
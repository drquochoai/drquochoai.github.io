
$(document.body).bind('mouseup', function(e){
        var selection;
        if (window.getSelection) {
          selection = window.getSelection();
        } else if (document.selection) {
          selection = document.selection.createRange();
        }
		  
        //selection.toString() !== '' && alert('"' + selection.toString() + '" was selected at ' + e.pageX + '/' + e.pageY);
			if (selection.toString() !== '' && selection.toString().trim().length >=1) {
					$("#bsquochoaiNgheaudio, #bsquochoaiTudien,#tattudien").remove()
					var dich = selection.toString().toLowerCase().trim().replace(/'/g,"\'")
						
					//Long live connect lấy dữ liệu về nè:
					var port = chrome.runtime.connect({name: "caidatnhanh"});
					port.postMessage({data: "cd"});
					port.onMessage.addListener(function(m) {
						if (m.cddoc != "cdtathet" && m.batphanmem == "1") {
								if (m.cdnghedoc == "1") {
								if (m.cddoctiengviet == "1" && tiengviet(selection.toString().trim()) != null) {
									$("#bsquochoaiNgheaudio, #bsquochoaiTudien,#tattudien").remove()
									var dichvn = selection.toString().trim().replace(/'/g," ").toLowerCase()
									$("body").append('<iframe id="bsquochoaiNgheaudio" src="https://translate.google.com.vn/translate_tts?ie=UTF-8&amp;q='+dichvn+'&amp;tl=vi&amp;total=1&amp;idx=0&amp;textlen=99&amp;client=t&amp;prev=input&output=embed" width="0px" height="0px"></iframe>');
								} else {
								// Nếu mà cài đặt đọc tiếng việt và phát hiện ra từ đó là tiếng việt thì đọc tiếng việt, Còn không thì nó sẽ đọc tiếng anh
									if (m.cddoc == "cddocchuan") {
										chrome.runtime.sendMessage({ham: "read",t:"speak", d:dich}, function(re) {});
									} else if (m.cddoc == "cddocgt"){
										var dichnew =selection.toString().trim().replace(/'/g,"\'")
										$("body").append('<iframe id="bsquochoaiNgheaudio" src="https://translate.google.com.vn/translate_tts?ie=UTF-8&amp;q='+dichnew+'&amp;tl='+m.gtdocngonngu+'&amp;total=1&amp;idx=0&amp;textlen=99&amp;client=t&amp;prev=input&output=embed" width="0px" height="0px" onerror="myScript"></iframe>');
									}
								}
								chrome.storage.local.set({'tumoidoc': dich}, function() { });
							}
							if (m.cdhighlight == "1") {
								highlight() // Highlight
							}
							if (m.cdluutu == "1") {
								chrome.runtime.sendMessage({ham: "luutu",t:"luu", c: dich, u:document.URL})
							}
							if (m.cdhientudien == "1") {
								if(m.cdnguondich == "cddichgt"){
									$("body").append('<div id="bsquochoaiTudien"></div>');
									$.get( 'https://translate.google.com/m?hl=vi&sl=auto&tl='+m.gttudien+'&ie=UTF-8&prev=_m&q='+dich, function( re ) {
										var tudien=$(re).find('.t0').prevObject
										for (i = 0; i < tudien.length; i++) {
											if (tudien[i].tagName == "DIV"){
												if (tudien[i].className != "small blue ub s2" && tudien[i].className !="small center" &&  tudien[i].innerText!= " Dịch"){
													$("#bsquochoaiTudien").append(tudien[i])
												}
											}
										}
									});
								} else if(m.cdnguondich == "cddich123"){
									if ( space(selection.toString().trim() ) == null && so(selection.toString().trim()) == null){
											$("body").append('<iframe id="bsquochoaiTudien" src="http://dic.tienganh123.com/fast_dict.php?word='+dich+'&dict=ev_ve&m=yes&output=embed" style="position:fixed;right:0px;bottom:0px;width:330px; height:300px;background-color: rgba(255, 255, 255, 0.8);border: solid rgb(177, 206, 252) 5px;border-top-left-radius:10px;border-top-right-radius:10px;z-index:99999;box-shadow: 0px 0px 10px #888888;box-shadow: 0px 0px 40px -7px rgba(78,23,230,1);" onerror="myScript"></iframe>');
									}
								}
							}
						
						}
					});
			}
			if (selection.toString() == ''){
					$("#bsquochoaiTudien").remove()
			} else {
			}
});
/* $.get("http://catchvideo.net/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-HBtGw6F-zU", function(re){
	console.log(re)
}) */
if ($("#chinhscrollbar").length <= 0 ) {
			 $('body').append('<style id="chinhscrollbar">::-webkit-scrollbar{width:9px;height:5px}::-webkit-scrollbar-track{background-color:#f4f4f4;-webkit-border-radius:5px}::-webkit-scrollbar-thumb:vertical{background-color:rgba(0,0,0,.3);-webkit-border-radius:6px}::-webkit-scrollbar-thumb:horizontal:hover,::-webkit-scrollbar-thumb:vertical:hover{background:gold}::-webkit-scrollbar-thumb:horizontal{background-color:rgba(0,0,0,.3);-webkit-border-radius:6px}</style>')
	}
// KHI BẤM NÚT R SẼ XÓA ÂM THANH ĐANG NÓI HOẶC LÀ NÓI LẠI ÂM THANH ĐANG NGHE
	$(window).keypress(function(e) {
			 var ev = e || window.event;
			 var key = ev.keyCode || ev.which;
			 if (key == 113)  //Bấm nút Q thì pause lại
				{
					chrome.storage.local.get('dangdoc', function (dd) {
						if( dd.dangdoc != "true") {
							chrome.runtime.sendMessage({ham: "read",t:"pause"})
							chrome.storage.local.set({'dangdoc': "true"})
						} else {
							chrome.runtime.sendMessage({ham: "read",t:"resume"})
							chrome.storage.local.set({'dangdoc': "false"})
						}
					});
				}
	});

$("#bsquochoaiTudien").click(function(e) {
        e.preventDefault();
});
function encode(url) {
	var unencoded = url;
	return encodeURIComponent(unencoded).replace(/'/g,"\'").replace(/"/g,"%22");	
}
function encodechinese(str){
   str = str.replace(/\s+/g,'-') // replace spaces with dashes
   str = encodeURIComponent(str) // encode (it encodes chinese characters)
   return str
}
function space(str) {
    var patt1 = /\s/g;
    var result = str.match(patt1);
    return result;
}
function so(str) {
    var patt1 = /^\d+$/;
    var result = str.match(patt1);
    return result;
}
function tiengviet(str) {
    var patt1 =/[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/g;
    var result = str.match(patt1);
    return result;
}
function highlight() {
    var range, sel;
    // IE case
    if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.execCommand("backColor", false, "rgb(247, 244, 0)");
    } else if (window.getSelection) {
        // Non-IE
        sel = window.getSelection();
        if (sel.rangeCount && sel.getRangeAt) {
            range = sel.getRangeAt(0);
        }
        document.designMode = "on";
        if (range) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        document.execCommand("backColor", false, "rgb(247, 244, 0)");
        
        document.designMode = "off";
    }
}
function xoachon(){
	if (window.getSelection) {
				  if (window.getSelection().empty) {  // Chrome
					 window.getSelection().empty();
				  } else if (window.getSelection().removeAllRanges) {  // Firefox
					 window.getSelection().removeAllRanges();
				  }
				} else if (document.selection) {  // IE?
				  document.selection.empty();
			} 
}
// The onClicked callback function.
var listmenucd=["cdluutu","cdnghedoc","cdhighlight","cdhientudien","cddoctiengviet"]
var listmenubattat=["cddocgt", "cddocchuan","cdtathet"]
function onClickHandler(info, tab) {
  if (info.menuItemId == "cddocgt" || info.menuItemId == "cddocchuan" || info.menuItemId == "cdtathet" ){
		localStorage.setItem("cddoc", info.menuItemId)
	} else if (info.menuItemId == "cdluutu" || info.menuItemId == "cdnghedoc" || info.menuItemId == "cdhighlight" || info.menuItemId == "cdhientudien" || info.menuItemId == "cddoctiengviet") {
		if (info.checked) { localStorage.setItem( info.menuItemId, "1") }
		else { localStorage.setItem( info.menuItemId, "0") }
	}
};
chrome.contextMenus.onClicked.addListener(onClickHandler);
  // Create some radio items.
  chrome.contextMenus.create({"title": "Tắt toàn bộ", "type": "radio", "contexts":["all"],
                              "id": "cdtathet"});
  chrome.contextMenus.create({"title": "Đọc bằng Google Translate", "type": "radio", "contexts":["all"],
                              "id": "cddocgt"});
  chrome.contextMenus.create({"title": "Đọc chuẩn người thật (theo cài đặt)", "type": "radio", "contexts":["all"],
                              "id": "cddocchuan"});
  // Create some checkbox items.
  chrome.contextMenus.create(
      {"title": "Lưu từ?", "type": "checkbox", "id": "cdluutu",  "contexts":["all"]});
  chrome.contextMenus.create(
      {"title": "Tự động đọc?", "type": "checkbox", "id": "cdnghedoc", "contexts":["all"]});
	chrome.contextMenus.create(
      {"title": "Hightlight?", "type": "checkbox", "id": "cdhighlight", "contexts":["all"]});
	chrome.contextMenus.create(
      {"title": "Hiện từ điển?", "type": "checkbox", "id": "cdhientudien",  "contexts":["all"]});
	chrome.contextMenus.create(
      {"title": "Tự phát hiện và đọc Tiếng Việt?", "type": "checkbox", "id": "cddoctiengviet", "contexts":["all"]});
		
listmenucd.forEach(function(entry) {
    if(localStorage.getItem(entry) == null){localStorage.setItem(entry,"1")}
	 if(localStorage.getItem(entry) == "1"){
		chrome.contextMenus.update(entry, {"checked":true},function(){
			x("asd");
		})
	 }
});
listmenubattat.forEach(function(entry) {
	if(localStorage.getItem("cddoc") == null){localStorage.setItem("cddoc","cddocgt")}
	if(localStorage.getItem("cddoc") == entry){
		chrome.contextMenus.update(entry, {"checked":true},function(){})
	 }
})
	chrome.notifications.create("", {
		type:"basic",
		title:"Cám ơn em!",
		iconUrl:"/icon/icon128.png",
		message:"Nhưng hãy sử dụng phần mềm của thầy với mục đích học tập, đừng sử dụng chỉ vì muốn có nó như người khác."
	},function(){})
function success(){
    alert('구매완료')
}
function fail(){
    alert('구매취소')
}

var num = 1;
function chagePic(idx){
    if(idx) {
        if(num ==5) return;
        ++num
    }
    else{
        if(num ==1) return;
        --num
    }
    var imgTag = document . getElementById("dark");
    imgTag.setAttribute("src", "dark0"+num+".jpg")
}

window.addEventListener("wheel", function(e){
    e.preventDefault();
}, {passive : false});

var $html = $("html");
var page = 1;
mhtml.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
    if(mhtml.is(":animated")) return;
if(e.originalEvent.deltaY > 0){
    if(page == 4) return;
    page++;
}
else if(e.originalEvent.deltaY >0){
    if(page == 1) return;
    page--;
}
var posTop = (page-1) * $(window).height();
$html.animate({scrollTop : posTop});

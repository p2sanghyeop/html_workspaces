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

const toogle = document.querySelector('navbar_toggle');
const kind = document.querySelector('navbar_kind');
const gallery = document.querySelector('navbar_gallery');
toogle.addEventListener('click', () => {
    kind.classList.toggle('active');
    gallery.classList.toggle('active');
})
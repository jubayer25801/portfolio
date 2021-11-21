console.log ('hello world');
const nav = document.querySelector(".navs");
window.onscroll = function(){
    var top =window.scrollY;
    console.log(top);
    if (top >= 200){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active');
    }
}
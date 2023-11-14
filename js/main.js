window.onscroll=function(){
    stickyNavbar();
};
const navbar= document.getElementById("navbar");
const sticky=navbar.offsetTop;
function stickyNavbar(){
    if (window.pageOffset>=sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}
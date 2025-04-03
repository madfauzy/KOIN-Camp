// Javascript DOM - Navigasi
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const navList = document.querySelector(".nav-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = ()=>{
    navList.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    body.classList.add("disabledScroll");
}

cancelBtn.onclick = ()=>{
    navList.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");
}

// Dropdown Menu
const dropDown = document.querySelector(".dropdown"); 
const subMenu = document.querySelector(".submenu"); 

dropDown.addEventListener('click', function(e) {
    if(subMenu.classList.contains('submenu-hide')) {
        subMenu.classList.add("submenu-show");
        subMenu.classList.remove("submenu-hide");
    }else if(subMenu.classList.contains('submenu-show')){
        subMenu.classList.remove("submenu-show");
        subMenu.classList.add("submenu-hide");
    }
    
    e.preventDefault();
});

// Ketika Scroll, tambah class sticky di Nav
window.onscroll = ()=>{
    this.scrollY > 20 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
}

// Page scroll Offset
$('.page-scroll').on('click', function(e){

    let tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);

    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 62
    }, 1000)

    e.preventDefault();
})
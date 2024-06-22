/*=============== SHOW MENU ===============*/

$(document).ready(function () {
    $("#nav-toggle").click(function(){
        $("#nav-menu").addClass("show-menu");
    });
    $("#nav-close").click(function(){
        $("#nav-menu").removeClass("show-menu");
    });
    $("#nav__link").click(function(){
        $('.active-link').removeClass("show-menu");
    });

    // $('.nav__item a').click(function(){
    //     $("#nav-menu").removeClass("show-menu");
    // });
    
    $(window).scroll(function(){
        $("#header").toggleClass("shadow-header", $(this).scrollTop() >= 50);
        $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);
    });
})
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () =>{
        // Thêm lớp menu hiển thị vào menu điều hướng
        nav.classList.toggle('show-menu')

        // Thêm show-icon để hiển thị và ẩn biểu tượng menu
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle','nav-menu')


let Enterpriseswiper = new Swiper('.enterprise__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
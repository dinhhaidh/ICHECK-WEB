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
    $(window).scroll(function(){
        $("#header").toggleClass("shadow-header", $(this).scrollTop() >= 50);
        $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);
    });
})
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')

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


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
  })
  sr.reveal(`.header__data, .highlights-images, .enterprise__container, .home__main`) //hiệu ứng trên xuống
  sr.reveal(`.header__images, .model__data, .model-solution, model__solution, .model-data, .model__data, .model__down-line,.highlights-card, .highlights__card, .model__add, .highlights__title `,{origin: 'bottom'})
  sr.reveal(`.home__list`,{interval: 100}) //hiệu ứng trêm xuống lần lần từng giây
  sr.reveal(`.model__desc, .feature__title, .feature__img, .application__data`,{origin: 'right'})
  sr.reveal(`.feature__data, .feature__content, .application__img `,{origin: 'left'})
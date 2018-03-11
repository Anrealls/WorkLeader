$('.slider-one').owlCarousel({
    loop:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,

    responsive:{
        0:{
            items:1
        }
    }
});
$('.slider-two').owlCarousel({
    loop:false,
    dots: false,
    autoplay: false,
    smartSpeed: 700,
    nav: false,

    responsive:{
        0:{
            items:1
        }
    }
});
var owl = $('.slider-two');
$('.testimonials-btn__prev').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.testimonials-btn__next').click(function() {
    owl.trigger('prev.owl.carousel');
});



$('.slider-three').owlCarousel({
    loop:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    nav: false,

    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        768:{
            items:3
        },
        1200: {
            items:4
        }
    }
});

function headerClick() {
    var toggle = document.querySelector('.header-btn');
    var nav = document.querySelector('.header-nav');
    var headermask = document.querySelector('.header-top-mask');
    toggle.addEventListener('click', function (e) {
        this.classList.toggle('is-active');
        nav.classList.toggle('header-nav-active');
        headermask.classList.toggle('header-top-mask-active');
    });

}
headerClick();




new WOW().init();

$("#fakeLoader").fakeLoader({
    timeToHide: 1500, //Time in milliseconds for fakeLoader disappear
    zIndex: 999, // Default zIndex
    spinner: "spinner2",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
    bgColor: "#000000" //Hex, RGB or RGBA colors
});



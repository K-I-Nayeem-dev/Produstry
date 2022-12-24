$(function(){
    $(".banner-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:1000,
        autoplay:false,
        nextArrow: '.next',
        prevArrow: '.prev',
    });
    $(".blog-main").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:1000,
        autoplay:false,
        nextArrow: '.move',
        prevArrow: '.back',
    });
    $(".testi-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:1000,
        autoplay:false,
        nextArrow: '.nexxt',
        prevArrow: '.preev',
    });
    $(".brand-main").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed:1000,
        autoplay:false,
        nextArrow: '.nexxxt',
        prevArrow: '.preeev',
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})
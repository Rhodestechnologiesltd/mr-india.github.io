$(document).ready(function(){
    $('.main-slider').slick({
        autoplay: true,
        fade: true,
        arrows: false
    });
    
    $('.slider-arrows').slick({
        autoplay: true,
        arrows: true ,   
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('.slider-testimonial').slick({
        autoplay: true,
        arrows: true,        
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    /* Offcanvas Mobile Menu */
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('body').toggleClass('menu-open');
        $('.offcanvas-collapse').toggleClass('menu-open');
        $('.navbar-toggler').toggleClass('menu-open');
    });
});
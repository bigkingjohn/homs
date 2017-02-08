console.log("loaded again");

$(document).ready(function(){
    $('.imageView').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.imageNav',
    });

    $('.imageNav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.imageView',
        dots: true,
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: true
    });
});
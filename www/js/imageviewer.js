console.log("loaded again");

$(document).ready(function(){
    $('.imageView').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        centerMode: true,
        centerPadding: '200px',
        asNavFor: '.imageNav',
        variableWidth: true,
        // adaptiveHeight: true,
    });

    $('.imageNav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.imageView',
        dots: true,
        centerMode: true,
        centerPadding: '100px',
        focusOnSelect: true
    });
});
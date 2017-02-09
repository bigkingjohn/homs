$(document).ready(function(){
    $('.imageView').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.imageNav',
        variableWidth:true,
    });

    $('.imageNav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.imageView',
        dots: true,
        centerMode: true,
        centerPadding: '100px',
        focusOnSelect: true,
        variableWidth:true,
    });
});
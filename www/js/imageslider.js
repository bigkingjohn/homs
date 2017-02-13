$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        centerMode: true,
        centerPadding: '0px',
        variableWidth:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        // autoplaySpeed: 500,
    });
});
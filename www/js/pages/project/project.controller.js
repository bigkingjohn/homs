(function () {
    'use strict';

    angular
        .module('homs')
        .controller('projectController', projectController);

    projectController.$inject = ['$anchorScroll'];

    function projectController($anchorScroll) {
        var vm = this;

        // Functions

        // Variables
        vm.photos = [
            "images/HOMS-details-01.jpg",
            "images/HOMS-heartstring-05dw.jpg",
            "images/HOMS-hearthstone-01dw.jpg",
            "images/HOMS-details-02.jpg",
            "images/HOMS-brightheart-06dw.jpg",
            "images/HOMS-lionheart-04dw.jpg",
            "images/HOMS-wholehearted-07dw.jpg",
            "images/HOMS-ironheart-02dw.jpg",
            "images/HOMS-tenderheart-12dw.jpg",
            "images/HOMS-ironheart-05dw.jpg",
            "images/HOMS-details-03.jpg",
        ];

        vm.slickConfig = {
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            centerMode: true,
            centerPadding: '0px',
            infinite: true,
            dots: true,
            method: {},
            event: {
                beforeChange: function (event, slick, currentSlide, nextSlide) {},
                afterChange: function (event, slick, currentSlide, nextSlide) {}
            }
        };

        // Constructor
        activate();

        function activate() {
            $anchorScroll();
        }
    }
})();
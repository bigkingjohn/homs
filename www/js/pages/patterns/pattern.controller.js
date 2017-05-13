(function () {
    'use strict';

    angular
        .module('homs')
        .controller('patternController', patternController);

    patternController.$inject = ['patternService'];

    function patternController(patternService) {
        var vm = this;

        // Functions
        vm.showTab = showTab;
        vm.isTabSelected = isTabSelected;
        vm.goToPattern = goToPattern;
        vm.hideLink = hideLink;

        // Variables
        vm.tabs = [
            "sizing",
            "yarn guage",
            "needles",
            "tutorials"
        ];
        vm.selectedTab = "";

        vm.selectedPattern = {};
        vm.patternLinks = [];

        vm.slickConfig = {
            enabled: false,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            centerMode: true,
            centerPadding: '0px',
            adaptiveHeight: true,
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
            vm.selectedTab = "sizing";
            vm.patternLinks = patternService.patternLinks;
            vm.selectedPattern = patternService.getPattern('crazyheart');
        }

        function showTab(tab) {
            vm.selectedTab = tab;
        }

        function isTabSelected(tab) {
            return vm.selectedTab === tab;
        }

        function goToPattern(pattern) {
            console.log("going to ", pattern);
        }

        function hideLink(pattern) {
            return pattern.toUpperCase() == vm.selectedPattern.title.toUpperCase();
        }
    }
})();
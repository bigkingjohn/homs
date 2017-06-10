(function () {
    'use strict';

    angular
        .module('homs')
        .controller('carouselController', carouselController);

    carouselController.$inject = ['$interval'];

    function carouselController($interval) {
        var vm = this;

        // Functions
        vm.showImage = showImage;
        vm.getCSS = getCSS;

        // Variables
        vm.images = [];
        vm.selectedIndex = 0;

        // Constructor
        activate();

        function activate() {
            // $interval(nextImage, 4000);
        }

        function showImage(index) {
            // return ((index == vm.selectedIndex) ||
            //         (index == vm.selectedIndex - 1) ||
            //         ((vm.selectedIndex == 0) && (index == vm.images.length - 1)));
            return true;
        }

        function nextImage() {
            console.log(vm.selectedIndex);
            if (vm.selectedIndex < (vm.images.length - 1)) {
                vm.selectedIndex++;
            } else {
                vm.selectedIndex = 0;
            }
        }

        function getCSS(index) {
            var css = '';

            if (index == vm.selectedIndex) {
                // css = 'doSlideOut';
                css = 'middleX';
            } else if ((index == vm.selectedIndex - 1) || ((vm.selectedIndex == 0) && (index == vm.images.length - 1))) {
                // css = 'doSlideIn';
                css = 'leftX';
            } else if ((index == vm.selectedIndex + 1) || ((vm.selectedIndex == vm.images.length - 1) && (index == 0))) {
                // css = 'doSlideIn';
                css = 'rightX';

            }

            return css;
        }
    }
})();
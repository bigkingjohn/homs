(function () {
    'use strict';

    angular
        .module('homs')
        .controller('carouselController', carouselController);

    carouselController.$inject = [];

    function carouselController() {
        var vm = this;

        // Functions
        vm.nextItem = nextItem;
        vm.previousItem = previousItem;
        vm.showItem = showItem;

        // Variables
        vm.currentIndex = 0;
        vm.items = [];

        // Constructor
        activate();

        function activate() {

        }

        function nextItem () {
            if (vm.currentIndex == vm.items.length - 1) {
                vm.currentIndex = 0;
            } else {
                vm.currentIndex++;
            }
        }

        function previousItem () {
            if (vm.currentIndex == 0) {
                vm.currentIndex = vm.items.length - 1;
            } else {
                vm.currentIndex--;
            }
        }

        function showItem (index) {
            return index == vm.currentIndex;
        }
    }
})();
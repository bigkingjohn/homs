(function () {
    'use strict';

    angular
        .module('homs')
        .controller('headerController', headerController);

    headerController.$inject = ['navigationService'];

    function headerController(navigationService) {
        var vm = this;

        // Functions
        vm.slideMenuIn = slideMenuIn;
        vm.slideMenuOut = slideMenuOut;

        // Variables
        vm.navPages = [];
        vm.showMenu = false;

        // Constructor
        activate();

        function activate() {
            vm.navPages = navigationService.pages;
        }

        function slideMenuIn() {
            vm.showMenu = true;
        }

        function slideMenuOut() {
            vm.showMenu = false;
        }
    }
})();
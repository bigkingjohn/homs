(function () {
    'use strict';

    angular
        .module('homs')
        .controller('headerController', headerController);

    headerController.$inject = ['navigationService'];

    function headerController(navigationService) {
        var vm = this;

        // Functions
        vm.toggleMenu = toggleMenu;
        vm.test = test;

        // Variables
        vm.navPages = [];
        vm.showMenu = false;

        // Constructor
        activate();

        function activate() {
            vm.navPages = navigationService.pages;
        }

        function toggleMenu() {
            vm.showMenu = !vm.showMenu;
        }

        function test() {
            console.log("testing123");
            vm.showMenu = false;
        }
    }
})();
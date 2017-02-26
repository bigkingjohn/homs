(function () {
    'use strict';

    angular
        .module('homs')
        .controller('headerController', headerController);

    headerController.$inject = ['navigationService'];

    function headerController(navigationService) {
        var vm = this;

        // Functions

        // Variables
        vm.navBar = [];

        // Constructor
        activate();

        function activate() {
            vm.navBar = navigationService.pages;
        }
    }
})();
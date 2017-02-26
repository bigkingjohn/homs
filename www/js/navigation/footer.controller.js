(function () {
    'use strict';

    angular
        .module('homs')
        .controller('footerController', footerController);

    footerController.$inject = ['navigationService'];

    function footerController(navigationService) {
        var vm = this;

        // Functions

        // Variables
        vm.footerBar = [];
        vm.socialButtons = [];

        // Constructor
        activate();

        function activate() {
            vm.footerBar = navigationService.pages;
            vm.socialButtons = navigationService.socialButtons;
        }
    }
})();
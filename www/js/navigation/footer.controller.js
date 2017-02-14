(function () {
    'use strict';

    angular
        .module('homs')
        .controller(footerController, 'footerController');

    footerController.$inject = [];

    function footerController() {
        var vm = this;

        // Functions

        // Variables

        // Constructor
        activate();

        function activate() {
            console.log("activating footer");
        }
    }
})();
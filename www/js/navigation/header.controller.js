(function () {
    'use strict';

    angular
        .module('homs')
        .controller(headerController, 'headerController');

    headerController.$inject = [];

    function headerController() {
        var vm = this;

        // Functions

        // Variables

        // Constructor
        activate();

        function activate() {
            console.log("activating header");
        }
    }
})();
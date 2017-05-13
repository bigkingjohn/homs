(function () {
    'use strict';

    angular
        .module('homs')
        .controller('contactController', contactController);

    contactController.$inject = ['$anchorScroll'];

    function contactController($anchorScroll) {
        var vm = this;

        // Functions

        // Variables

        // Constructor
        activate();

        function activate() {
            $anchorScroll();
        }
    }
})();
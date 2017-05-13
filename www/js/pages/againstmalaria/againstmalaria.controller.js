(function () {
    'use strict';

    angular
        .module('homs')
        .controller('againstmalariaController', againstmalariaController);

    againstmalariaController.$inject = ['$anchorScroll'];

    function againstmalariaController($anchorScroll) {
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
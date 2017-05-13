(function () {
    'use strict';

    angular
        .module('homs')
        .controller('patternThumbController', patternThumbController);

    patternThumbController.$inject = [];

    function patternThumbController () {
        var vm = this;

        // Functions
        vm.goToPattern = goToPattern;

        // Variables


        // Constructor
        activate();

        function activate() {

        }

        function goToPattern(name) {
            console.log("go to pattern ", name);
        }
    }
})();
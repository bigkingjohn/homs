(function () {
    'use strict';

    angular
        .module('homs')
        .controller(projectController, 'projectController');

    projectController.$inject = [];

    function projectController() {
        var vm = this;

        // Functions

        // Variables

        // Constructor
        activate();

        function activate() {
            console.log("activating project");
        }
    }
})();
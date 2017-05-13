(function () {
    'use strict';

    angular
        .module('homs')
        .factory('patternService', patternService);

        patternService.$inject = ['$state'];

        function patternService ($state) {
            var service = {
                patternLinks: [
                    {
                      name: "crazyheart",
                      imageUrl: "images/HOMS-crazyheart-tmb-a.jpg"
                    },
                    {
                      name: "brightheart",
                      imageUrl: "images/HOMS-brightheart-tmb-a.jpg"
                    },
                    {
                      name: "tenderheart",
                      imageUrl: "images/HOMS-tenderheart-tmb-a.jpg"
                    },
                    {
                      name: "wholehearted",
                      imageUrl: "images/HOMS-wholehearted-tmb-d.jpg"
                    },
                    {
                      name: "ironheart",
                      imageUrl: "images/HOMS-ironheart-tmb-e.jpg"
                    },
                    {
                      name: "heartstring",
                      imageUrl: "images/HOMS-heartstring-tmb-a.jpg"
                    },
                    {
                      name: "lionheart",
                      imageUrl: "images/HOMS-lionheart-tmb-a.jpg"
                    },
                    {
                      name: "hearthstone",
                      imageUrl: "images/HOMS-hearthstone-tmb-b.jpg"
                    },
                ]
            }

            return service;

            function goToPattern(patternName) {
                $state.go(patternName);
            }
        }
})();
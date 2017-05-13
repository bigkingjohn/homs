(function () {
    'use strict';

    angular
        .module('homs')
        .controller('knitsController', knitsController);

    knitsController.$inject = ['$state', '$anchorScroll'];

    function knitsController($state, $anchorScroll) {
        var vm = this;

        // Functions
        vm.goToPattern = goToPattern;

        // Variables
        vm.patterns = [
            {
                url: "http://heartonmysleeveknits.com/pattern-brightheart.html",
                imageUrl: "images/HOMS-brightheart-tmb-a.jpg",
                name: "BRIGHTHEART",
                designer: "Romi Hill",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-brightheart.html",
                imageUrl: "images/HOMS-brightheart-tmb-b.jpg",
                name: "BRIGHTHEART",
                designer: "Romi Hill",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-crazyheart.html",
                imageUrl: "images/HOMS-crazyheart-tmb-a.jpg",
                name: "Crazyheart",
                designer: "Tanis Lavallee",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-crazyheart.html",
                imageUrl: "images/HOMS-crazyheart-tmb-b.jpg",
                name: "Crazyheart",
                designer: "Tanis Lavallee",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-hearthstone.html",
                imageUrl: "images/HOMS-hearthstone-tmb-a.jpg",
                name: "Hearthstone",
                designer: "Ysolda Teague",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-hearthstone.html",
                imageUrl: "images/HOMS-hearthstone-tmb-c.jpg",
                name: "Hearthstone",
                designer: "Ysolda Teague",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-heartstring.html",
                imageUrl: "images/HOMS-heartstring-tmb-a.jpg",
                name: "Heartstring",
                designer: "Joji Locatelli",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-heartstring.html",
                imageUrl: "images/HOMS-heartstring-tmb-c.jpg",
                name: "Heartstring",
                designer: "Joji Locatelli",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-tenderheart.html",
                imageUrl: "images/HOMS-tenderheart-tmb-a.jpg",
                name: "Tenderheart",
                designer: "Alexa Ludeman",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-tenderheart.html",
                imageUrl: "images/HOMS-tenderheart-tmb-e.jpg",
                name: "Tenderheart",
                designer: "Alexa Ludeman",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-wholehearted.html",
                imageUrl: "images/HOMS-wholehearted-tmb-a.jpg",
                name: "Wholehearted",
                designer: "Bristol Ivy",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-wholehearted.html",
                imageUrl: "images/HOMS-wholehearted-tmb-d.jpg",
                name: "Wholehearted",
                designer: "Bristol Ivy",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-lionheart.html",
                imageUrl: "images/HOMS-lionheart-tmb-b.jpg",
                name: "Lionheart",
                designer: "Jane Richmond and Shannon Cook",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-lionheart.html",
                imageUrl: "images/HOMS-lionheart-tmb-a.jpg",
                name: "Lionheart",
                designer: "Jane Richmond and Shannon Cook",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-ironheart.html",
                imageUrl: "images/HOMS-ironheart-tmb-a.jpg",
                name: "Ironheart",
                designer: "Emily Wessel",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-ironheart.html",
                imageUrl: "images/HOMS-ironheart-tmb-c.jpg",
                name: "Ironheart",
                designer: "Emily Wessel",
            },
        ];

        // Constructor
        activate();

        function activate() {
            $anchorScroll();
        }

        function goToPattern(pattern) {
            $state.go('pattern', { name: pattern});
        }
    }
})();
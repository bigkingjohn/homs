(function () {
    'use strict';

    angular
        .module('homs')
        .controller('knitsController', knitsController);

    knitsController.$inject = [];

    function knitsController() {
        var vm = this;

        // Functions

        // Variables
        vm.patterns = [
            {
                url: "http://heartonmysleeveknits.com/pattern-brightheart.html",
                image: "images/HOMS-brightheart-tmb-a.jpg",
                name: "BRIGHTHEART",
                designer: " by Romi Hill",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-brightheart.html",
                image: "images/HOMS-brightheart-tmb-b.jpg",
                name: "BRIGHTHEART",
                designer: "by Romi Hill",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-crazyheart.html",
                image: "images/HOMS-crazyheart-tmb-a.jpg",
                name: "Crazyheart",
                designer: "by Tanis Lavallee",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-crazyheart.html",
                image: "images/HOMS-crazyheart-tmb-b.jpg",
                name: "Crazyheart",
                designer: "by Tanis Lavallee",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-hearthstone.html",
                image: "images/HOMS-hearthstone-tmb-a.jpg",
                name: "Hearthstone",
                designer: "by Ysolda Teague",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-hearthstone.html",
                image: "images/HOMS-hearthstone-tmb-c.jpg",
                name: "Hearthstone",
                designer: "by Ysolda Teague",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-heartstring.html",
                image: "images/HOMS-heartstring-tmb-a.jpg",
                name: "Heartstring",
                designer: "by Joji Locatelli",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-heartstring.html",
                image: "images/HOMS-heartstring-tmb-c.jpg",
                name: "Heartstring",
                designer: "by Joji Locatelli",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-tenderheart.html",
                image: "images/HOMS-tenderheart-tmb-a.jpg",
                name: "Tenderheart",
                designer: "by Alexa Ludeman",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-tenderheart.html",
                image: "images/HOMS-tenderheart-tmb-e.jpg",
                name: "Tenderheart",
                designer: "by Alexa Ludeman",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-wholehearted.html",
                image: "images/HOMS-wholehearted-tmb-a.jpg",
                name: "Wholehearted",
                designer: "by Bristol Ivy",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-wholehearted.html",
                image: "images/HOMS-wholehearted-tmb-d.jpg",
                name: "Wholehearted",
                designer: "by Bristol Ivy",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-lionheart.html",
                image: "images/HOMS-lionheart-tmb-b.jpg",
                name: "Lionheart",
                designer: "by Jane Richmond and Shannon Cook",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-lionheart.html",
                image: "images/HOMS-lionheart-tmb-a.jpg",
                name: "Lionheart",
                designer: "by Jane Richmond and Shannon Cook",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-ironheart.html",
                image: "images/HOMS-ironheart-tmb-a.jpg",
                name: "Ironheart",
                designer: "by Emily Wessel",
            },
            {
                url: "http://heartonmysleeveknits.com/pattern-ironheart.html",
                image: "images/HOMS-ironheart-tmb-c.jpg",
                name: "Ironheart",
                designer: "by Emily Wessel",
            },
        ];

        // Constructor
        activate();

        function activate() {

        }
    }
})();
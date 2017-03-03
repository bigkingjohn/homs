(function () {
    'use strict';

    angular
        .module('homs')
        .controller('yarnsController', yarnsController);

    yarnsController.$inject = [];

    function yarnsController() {
        var vm = this;

        // Functions

        // Variables
        vm.yarnLinks = [
            {
                url: "http://www.baaramewe.co.uk",
                image: "images/logo-baaramewe.png"
            },
            {
                url: "https://www.jarbon.com/",
                image: "images/logo-brooklyntweed.jpg"
            },
            {
                url: "https://www.jarbon.com/",
                image: "images/logo-johnarbon.gif"
            },
            {
                url: "http://www.jilldraper.com",
                image: "images/logo-jilldrapermakesstuff.jpg"
            },
            {
                url: "https://katedaviesdesigns.com/",
                image: "images/logo-katedaviesdesigns.png"
            },
            {
                url: "https://madelinetosh.com/",
                image: "images/logo-madelinetosh-3.jpg"
            },
            {
                url: "http://quinceandco.com/",
                image: "images/logo-quinceandco.png"
            },
            {
                url: "http://sweetfiberyarns.com/",
                image: "images/logo-sweetfiber.jpg"
            },
            {
                url: "http://sweetgeorgiayarns.com/",
                image: "images/logo-sweetgeorgia.png"
            },
            {
                url: "http://www.tanisfiberarts.com/",
                image: "images/logo-tanisfiberarts.jpg"
            },
            {
                url: "http://www.thepluckyknitter.com/",
                image: "images/logo-pluckyknitter.png"
            },
            {
                url: "http://www.averbforkeepingwarm.com",
                image: "images/logo-averbforkeepingwarm.png"
            },
            {
                url: "http://www.yothyarns.com",
                image: "images/logo-yoth.png"
            },
        ];

        // Constructor
        activate();

        function activate() {

        }
    }
})();
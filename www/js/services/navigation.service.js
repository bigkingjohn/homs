(function () {
    'use strict';

    angular
        .module('homs')
        .factory('navigationService', navigationService);

        navigationService.$inject = ['$state'];

        function navigationService ($state) {
            var service = {
                pages: [
                    {
                        title: "project",
                        goto: function () { goToState("project"); },
                    },
                    {
                        title: "knits",
                        goto: function () { goToState("knits"); },
                    },
                    {
                        title: "designers",
                        goto: function () { goToState("designers"); },
                    },
                    {
                        title: "yarns",
                        goto: function () { goToState("yarns"); },
                    },
                    {
                        title: "against malaria",
                        goto: function () { goToState("againstmalaria"); },
                    },
                    {
                        title: "blog",
                        goto: function () { goToSite("https://blog.tincanknits.com/2017/02/14/introducing-heart-on-my-sleeve/"); },
                    },
                    {
                        title: "contact",
                        goto: function () { goToState("contact"); },
                    },
                    {
                        title: "on ravelry",
                        goto: function () { goToSite("http://www.ravelry.com/patterns/sources/heart-on-my-sleeve/patterns"); },
                    },
                ],
                socialButtons: [
                    {
                        url: "https://www.instagram.com/explore/tags/heartonmysleeveknits",
                        image: "images/button-instagram.png"
                    },
                    {
                        url: "https://www.facebook.com/search/top/?q=%23heartonmysleeveknits",
                        image: "images/button-facebook.png"
                    },
                    {
                        url: "https://www.pinterest.com/tincanknits/heart-on-my-sleeve",
                        image: "images/button-pintrest.png"
                    },
                    {
                        url: "https://twitter.com/search?q=heartonmysleeveknits&src=typd",
                        image: "images/button-twitter.png"
                    },
                    {
                        url: "http://www.ravelry.com/groups/tin-can-knits",
                        image: "images/button-ravelry.png"
                    },
                ]
            }

            return service;

            function goToState(newState) {
                $state.go(newState);
            }

            function goToSite(newSite) {
                window.location.href = newSite;
            }
        }
})();
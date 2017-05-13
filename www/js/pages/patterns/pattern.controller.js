(function () {
    'use strict';

    angular
        .module('homs')
        .controller('patternController', patternController);

    patternController.$inject = ['$stateParams'];

    function patternController($stateParams) {
        var vm = this;

        // Functions
        vm.showInfo = showInfo;
        vm.isInfoSelected = isInfoSelected;
        vm.goToPattern = goToPattern;
        vm.hideLink = hideLink;

        // Variables
        vm.selectedPattern = {};
        vm.selectedPatternInfo = {};

        vm.patterns = [
            {
                title: "Crazyheart",
                designer: "by Tanis Lavallée of Tanis Fiber Arts",
                blurb: "Tanis has brought a true crazy heart to this design; creating beautiful sweaters to keep all three of the boys she holds dear warm against the Canadian winter. An entire family of matching sweaters is more than a little crazy, but we love it!",
                photos: [
                    "images/HOMS-crazyheart-02a.jpg",
                    "images/HOMS-crazyheart-07a.jpg",
                    "images/HOMS-crazyheart-03a.jpg",
                    "images/HOMS-crazyheart-11a.jpg",
                    "images/HOMS-crazyheart-16a.jpg",
                    "images/HOMS-crazyheart-17a.jpg",
                    "images/HOMS-crazyheart-13a.jpg",
                    "images/HOMS-crazyheart-20a.jpg",
                    "images/HOMS-crazyheart-10a.jpg",
                ],
                ravelryLink: "http://www.ravelry.com/badges/redirect?p=crazyheart",
                ravelryGif: "http://api.ravelry.com/badges/projects?p=crazyheart&amp;t=.gif",

                info: [
                    {
                        title: "sizing",
                        content: {

                        },
                    },
                    {
                        title: "yarn  guage",
                        content: "yarn  guage...",
                    },
                    {
                        title: "needles",
                        content: "needles...",
                    },
                    {
                        title: "useful tutorials",
                        content: "useful tutorials...",
                    },
                ]
            }
        ];

        vm.patternLinks = [
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
        ];

        vm.slickConfig = {
            enabled: false,
            // mobileFirst: true, // TODO not sure what this does
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            centerMode: true,
            centerPadding: '0px',
            // adaptiveHeight: true,
            infinite: true,
            dots: true,
            method: {},
            event: {
                beforeChange: function (event, slick, currentSlide, nextSlide) {},
                afterChange: function (event, slick, currentSlide, nextSlide) {}
            }
        };

        // Constructor
        activate();

        function activate() {
            vm.selectedPattern = vm.patterns[0];
            vm.selectedPatternInfo = vm.selectedPattern.info[0];
            // vm.slickConfig.enabled = true;
            console.log("params: ", $stateParams)
        }

        function showInfo(patternInfo) {
            console.log("Pattern selected ", patternInfo.title);
            vm.selectedPatternInfo = patternInfo;
        }

        function isInfoSelected(patternInfo) {
            return vm.selectedPatternInfo.title == patternInfo.title;
        }

        function goToPattern(pattern) {
            console.log("going to ", pattern);
        }

        function hideLink(pattern) {
            return pattern.toUpperCase()  == vm.selectedPattern.title.toUpperCase();
        }
    }
})();
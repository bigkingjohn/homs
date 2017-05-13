(function () {
    'use strict';

    angular
        .module('homs')
        .controller('patternController', patternController);

    patternController.$inject = ['$stateParams', 'patternService'];

    function patternController($stateParams, patternService) {
        var vm = this;

        // Functions
        vm.showTab = showTab;
        vm.isTabSelected = isTabSelected;
        vm.goToPattern = goToPattern;
        vm.hideLink = hideLink;

        // Variables
        vm.tabs = [
            "sizing",
            "yarn guage",
            "needles",
            "tutorials"
        ];
        vm.selectedTab = "";

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
                guageMC: "350 (400, 500, 650, 800, 900, 1000, 1100, 1200, 1300, 1400, 1600, 1800, 2000, 2200) yds",
                guageCC: "150 (170, 200, 250, 300, 350, 370, 400, 450, 450, 500, 550, 650, 750, 800) maximum total yds*",
                guageNote: "* Note: the CC yardage may be comprised of a number of different CCs depending on your design intent within the colourwork section, thus the total yardage in CC that you will require will vary.",
                knitNotes: [
                    {
                        head: "Lady sweater is knit ",
                        tail: " in ‘ravine ‘with ‘orchid’ and ‘sand’.",
                        link: "http://www.ravelry.com/yarns/library/tanis-fiber-arts-purewash-dk",
                        linkText: "Tanis Fiber Arts Purewash DK",
                    },
                    {
                        head: "Kid sweater knit in ",
                        tail: " in ‘sand’ and ‘stone’ with ‘chris grey’, ‘frost’, ‘natural’, ‘orange blossom’, ‘orchid’, ‘peacock’ ‘poppy’, ‘ravine’, ‘royal flush’ and ‘saffron’, ‘seabreeze’.",
                        link: "http://www.ravelry.com/yarns/library/tanis-fiber-arts-purewash-dk",
                        linkText: "Tanis Fiber Arts Purewash DK",
                    },
                    {
                        head: "Toddler sweater knit in ",
                        tail: " in ‘chris grey’ and ‘frost’ with ‘peacock’, ‘ravine’, and ‘sea breeze’.",
                        link: "http://www.ravelry.com/yarns/library/tanis-fiber-arts-purewash-dk",
                        linkText: "Tanis Fiber Arts Purewash DK",
                    },
                    {
                        head: "Dude sweater is knit in ",
                        tail: " in ‘graphite’ with ‘OOAK speckled’, ‘chris grey’, ‘sand’, ‘stone’, ‘chestnut’, ‘caramel’, ‘gold’, ‘chartreuse’, ‘mint’, ‘hunter’, ‘mallard’, and ‘olive’.",
                        link: "http://www.ravelry.com/yarns/library/tanis-fiber-arts-purewash-worsted",
                        linkText: "Tanis Fiber Arts Purewash Worsted",
                    },
                    {
                        head: "Details of how Tanis knit this sweater in a heavier weight are ",
                        tail: ".",
                        link: "http://www.tanisfiberarts.com/blog/2017/2/chris-worsted-weight-crazyheart",
                        linkText: "on her blog",
                    }
                ],
                notions: "darning needle, stitch markers",
                tutorials: [
                    {
                        url: "http://blog.tincanknits.com/2013/08/17/gauge/",
                        name: "Gauge in Knitting",
                    },
                    {
                        url: "http://blog.tincanknits.com/2012/10/21/bottom-up-sweater/",
                        name: "How to choose your sweater size",
                    },
                    {
                        url: "http://blog.tincanknits.com/2013/10/03/kitchener-stitch/",
                        name: "How to work the kitchener stitch",
                    },
                    {
                        url: "http://blog.tincanknits.com/2015/05/26/how-to-knit-fair-isle/",
                        name: "How to work stranded colourwork",
                    },
                    {
                        url: "http://blog.tincanknits.com/2014/09/01/choosing-a-palette-for-colourwork/",
                        name: "Choosing a palette for colourwork",
                    },
                    {
                        url: "https://blog.tincanknits.com/2016/01/28/collect-colour-combos/",
                        name: "Excellent colour combos for colourwork",
                    },
                    {
                        url: "http://blog.tincanknits.com/2014/06/06/how-to-read-a-knitting-chart/",
                        name: "How to read a knitting chart",
                    },
                    {
                        url: "http://blog.tincanknits.com/2015/10/15/how-to-block-a-hand-knit-sweater/",
                        name: "How to block a sweater",
                    },
                    {
                        url: "http://www.tanisfiberarts.com/blog/2017/2/chris-worsted-weight-crazyheart",
                        name: "How Tanis knit Crazyheart in a worsted weight yarn",
                    },
                ],
                info: [
                    {
                        title: "sizing",
                        content: "<h1>hello</h1><p>testing</p>",
                    },
                    {
                        title: "yarn guage",
                        content: "yarn guage...",
                    },
                    {
                        title: "needles",
                        content: "needles...",
                    },
                    {
                        title: "tutorials",
                        content: "useful tutorials...",
                    },
                ]
            }
        ];

        vm.patternLinks = [];

        vm.slickConfig = {
            enabled: false,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            centerMode: true,
            centerPadding: '0px',
            adaptiveHeight: true,
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
            vm.selectedTab = "sizing";
            vm.patternLinks = patternService.patternLinks;
            vm.selectedPattern = vm.patterns[0];
            vm.selectedPatternInfo = vm.selectedPattern.info[0];
        }

        function showTab(tab) {
            vm.selectedTab = tab;
        }

        function isTabSelected(tab) {
            return vm.selectedTab === tab;
        }

        function goToPattern(pattern) {
            console.log("going to ", pattern);
        }

        function hideLink(pattern) {
            return pattern.toUpperCase()  == vm.selectedPattern.title.toUpperCase();
        }
    }
})();
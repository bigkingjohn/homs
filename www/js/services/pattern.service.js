(function () {
    'use strict';

    angular
        .module('homs')
        .factory('patternService', patternService);

        patternService.$inject = ['$state'];

        function patternService ($state) {
            var patterns = {
                crazyheart: {
                    title: "Crazyheart",
                    designer: "by Tanis Lavallée of Tanis Fiber Arts",
                    blurb: ["Tanis has brought a true crazy heart to this design; creating beautiful sweaters to keep all three of the boys she holds dear warm against the Canadian winter. An entire family of matching sweaters is more than a little crazy, but we love it!"],
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
                            head: "Lady sweater is knit in ",
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
                },
                brightheart: {
                    title: "Brightheart",
                    designer: "by Romi Hill",
                    blurb: [
                        "Keep your heart bright, let nothing bring you down!",
                        "Brightheart is soft and feminine; the structure of the lace is highlighted by softly waving lines of contrast.",
                        "Romi is known for her exquisite details, and the split garter hems and cuffs are the perfect addition to this polished design.",
                    ],
                    photos: [
                        "images/HOMS-brightheart-07a.jpg",
                        "images/HOMS-brightheart-06a.jpg",
                        "images/HOMS-brightheart-03a.jpg",
                        "images/HOMS-brightheart-02a.jpg",
                        "images/HOMS-brightheart-04a.jpg",
                        "images/HOMS-brightheart-05a.jpg",
                        "images/HOMS-brightheart-01a.jpg",
                    ],
                    ravelryLink: "http://www.ravelry.com/badges/redirect?p=brightheart",
                    ravelryGif: "http://api.ravelry.com/badges/projects?p=brightheart&t=.gif",
                    guageMC: "350 (400, 500, 650, 800, 900, 1000, 1100, 1200, 1300, 1400, 1600, 1800, 2000, 2200) yds",
                    guageCC: "30 yds or less in CC for the yoke details",
                    guageNote: "",
                    knitNotes: [
                        {
                            head: "Adult sweater is knit in ",
                            tail: " in ‘black mission fig’ and ‘oyster’.",
                            link: "http://www.ravelry.com/yarns/library/yoth-yarns-big-sister",
                            linkText: "YOTH Big Sister",
                        },
                        {
                            head: "Toddler sweater knit ",
                            tail: " in ‘silver’ and ‘slate’.",
                            link: "http://www.ravelry.com/yarns/library/sweetgeorgia-yarns-superwash-dk",
                            linkText: "SweetGeorgia Superwash DK",
                        },
                    ],
                    notions: "darning needle, stitch markers, locking stitch markers, spare needle in US #4 / 3.5mm, a 3.25mm needle, and two 5/8” heart buttons",
                    tutorials: [
                        {
                            url: "http://blog.tincanknits.com/2013/08/17/gauge/",
                            name: "Gauge in knitting",
                        },
                        {
                            url: "http://blog.tincanknits.com/2012/10/21/bottom-up-sweater/",
                            name: "How to choose your sweater size",
                        },
                        {
                            url: "http://blog.tincanknits.com/2013/10/03/kitchener-stitch/",
                            name: " How to work the kitchener stitch",
                        },
                        {
                            url: "https://blog.tincanknits.com/2016/01/28/collect-colour-combos/",
                            name: "Excellent colour combos for colourwork",
                        },
                        {
                            url: "http://blog.tincanknits.com/2014/06/06/how-to-read-a-knitting-chart/",
                            name: " How to read a knitting chart",
                        },
                        {
                            url: "http://blog.tincanknits.com/2015/10/15/how-to-block-a-hand-knit-sweater/",
                            name: "How to block a sweater",
                        },
                        {
                            url: "http://blog.tincanknits.com/2014/05/15/how-to-knit-lace/",
                            name: " How to knit lace",
                        },
                    ],
                },
                tenderheart: {
                    title: "Tenderheart",
                    designer: "by Alexa Ludeman of Tin Can Knits",
                    blurb: ["My kids are lucky to have grandparents with tender hearts looking out for their happiness.  This sweater is a classic for big or little sweethearts, with crisp geometric motifs that sparkle in high contrast colours."],
                    photos: [
                        "images/HOMS-tenderheart-04a.jpg",
                        "images/HOMS-tenderheart-10a.jpg",
                        "images/HOMS-tenderheart-06a.jpg",
                        "images/HOMS-tenderheart-09a.jpg",
                        "images/HOMS-tenderheart-07a.jpg",
                        "images/HOMS-tenderheart-08a.jpg",
                        "images/HOMS-tenderheart-12a.jpg",
                        "images/HOMS-tenderheart-01a.jpg",
                    ],
                    ravelryLink: "http://www.ravelry.com/badges/redirect?p=tenderheart-3",
                    ravelryGif: "http://api.ravelry.com/badges/projects?p=tenderheart-3&t=.gif",
                    guageMC: "350 (400, 500, 650, 800, 900, 1000, 1100, 1200, 1300, 1400, 1600, 1800, 2000, 2200) yds",
                    guageCC: "140 (140, 150, 170, 230, 240, 250, 270, 270, 300, 330, 400, 430, 520, 580) maximum total yds*",
                    guageNote: "* Note: the CC yardage may be comprised of a number of different CCs depending on your design intent within the colourwork section, thus the total yardage in CC that you will require will vary.",
                    knitNotes: [
                        {
                            head: "Adult sweater is knit in ",
                            tail: " in ‘antler’, ‘scarlet’, and ‘tart’.",
                            link: "http://www.ravelry.com/yarns/library/madelinetosh-dk-twist",
                            linkText: "Madelinetosh Tosh DK",
                        },
                        {
                            head: "Kid sweater is knit in ",
                            tail: " in ‘KBN02’ and ‘KBN55’.",
                            link: "http://www.ravelry.com/yarns/library/john-arbon-textiles-knit-by-numbers-dk",
                            linkText: "John Arbon Textiles Knit by Numbers DK",
                        },
                    ],
                    notions: "darning needle, stitch markers",
                    tutorials: [
                        {
                            url: "http://blog.tincanknits.com/2013/08/17/gauge/",
                            name: "Gauge in knitting",
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
                            url: "http://blog.tincanknits.com/2015/05/14/german-short-rows/",
                            name: "German short rows",
                        },
                    ],
                },
                wholehearted: {
                    title: "Wholehearted",
                    designer: "by Bristol Ivy",
                    blurb: [
                        "While knitting by hand we invest our time, attention and care into each stitch.",
                        "Bristol loves exploring intriguing construction methods and crafting exquisite knitterly details, and with this design she does both.",
                        "The yoke is worked sideways to the body, shaped by short rows, and the result is a striking organic motif.",
                    ],
                    photos: [
                        "images/HOMS-wholehearted-02a.jpg",
                        "images/HOMS-wholehearted-09a.jpg",
                        "images/HOMS-wholehearted-15a.jpg",
                        "images/HOMS-wholehearted-18a.jpg",
                        "images/HOMS-wholehearted-06a.jpg",
                        "images/HOMS-wholehearted-08a.jpg",
                        "images/HOMS-wholehearted-10a.jpg",
                    ],
                    ravelryLink: "http://www.ravelry.com/badges/redirect?p=wholehearted-2",
                    ravelryGif: "http://api.ravelry.com/badges/projects?p=wholehearted-2&t=.gif",
                    guageMC: "350 (400, 500, 650, 800, 900, <strong>1000, 1100, 1200, 1300, 1400, 1600, 1800, 2000, 2200</strong>) yd",
                    guageCC: "",
                    guageNote: "",
                    knitNotes: [
                        {
                            head: "Adult sweater is knit in ",
                            tail: " in ‘smoke’.",
                            link: "http://www.ravelry.com/yarns/library/sweet-fiber-yarns-merino-twist-dk",
                            linkText: "Sweet Fiber Merino Twist DK",
                        },
                        {
                            head: "Child sweater knit in ",
                            tail: " in ‘tincture’.",
                            link: "http://www.ravelry.com/yarns/library/brooklyn-tweed-arbor",
                            linkText: "Brooklyn Tweed Arbor",
                        },
                    ],
                    notions: "darning needle, stitch markers, locking stitch markers",
                    tutorials: [
                        {
                            url: "http://blog.tincanknits.com/2013/08/17/gauge/",
                            name: "Gauge in knitting",
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
                            url: "http://blog.tincanknits.com/2015/10/15/how-to-block-a-hand-knit-sweater/",
                            name: "How to block a sweater",
                        },
                    ],
                },
                ironheart: {
                    title: "Ironheart",
                    designer: "by Emily Wessel of Tin Can Knits",
                    blurb: [
                        "While I was pregnant with my second baby, learning the shocking statistics about malaria made me feel like my heart would break. This galvanized my will to create Heart On My Sleeve and raise funds to protect little (and big) people.",
                        "As a parent, I often feel I must have an iron heart; at times strict, but always strong in my intention to do the best I can by my children.",
                        "This design pairs botanical motifs with rugged texture for a beautiful sweater with feminine strength and character.",
                    ],
                    photos: [
                        "images/HOMS-ironheart-09a.jpg",
                        "images/HOMS-ironheart-05a.jpg",
                        "images/HOMS-ironheart-07a.jpg",
                        "images/HOMS-ironheart-02a.jpg",
                        "images/HOMS-ironheart-03a.jpg",
                        "images/HOMS-ironheart-04a.jpg",
                    ],
                    ravelryLink: "http://www.ravelry.com/badges/redirect?p=ironheart",
                    ravelryGif: "http://api.ravelry.com/badges/projects?p=ironheart&t=.gif",
                    guageMC: "350 (400, 500, 650, 800, 900, 1000, 1100, 1200, 1300, 1400, 1600, 1800, 2000, 2200) yds", // TODO misisng prefix on this line?# on live site
                    guageCC: "",
                    guageNote: "",
                    knitNotes: [
                        {
                            head: "Adult sweater is knit in ",
                            tail: " in ‘highland coo’.",
                            link: "http://www.ravelry.com/yarns/library/kate-davies-designs-buachaille",
                            linkText: "Kate Davies Designs Buachaille",
                        },
                        {
                            head: "Toddler sweater knit in ",
                            tail: " in ‘thank you note’.",
                            link: "http://www.ravelry.com/yarns/library/the-plucky-knitter-plucky-sweater",
                            linkText: "The Plucky Knitter Plucky Sweater",
                        },
                    ],
                    notions: "darning needle, stitch markers",
                    tutorials: [
                        {
                            url: "http://blog.tincanknits.com/2013/08/17/gauge/",
                            name: "Gauge in knitting",
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
                            url: "http://blog.tincanknits.com/2014/06/06/how-to-read-a-knitting-chart/",
                            name: "How to read a knitting chart",
                        },
                        {
                            url: "http://blog.tincanknits.com/2015/10/15/how-to-block-a-hand-knit-sweater/",
                            name: "How to block a sweater",
                        },
                        {
                            url: "http://blog.tincanknits.com/2014/05/15/how-to-knit-lace/",
                            name: "How to knit lace",
                        },
                        {
                            url: "http://blog.tincanknits.com/2015/05/14/german-short-rows/",
                            name: "German short rows",
                        },
                    ],
                },
                heartstring: {
                    title: "Heartstring",
                    designer: "by Joji Locatelli",
                    blurb: [
                        "Heartstring is adorned by delicate lines of stitching, inspired by Japanese sashiko style embroidery.",
                        "Joji combines great fit, style and wearability in her designs, and she has stitched a sense of romance and minimalism into this simple sweater.",
                    ],
                    photos: [
                        "images/HOMS-heartstring-03a.jpg",
                        "images/HOMS-heartstring-04a.jpg",
                        "images/HOMS-heartstring-05a.jpg",
                        "images/HOMS-heartstring-07a.jpg",
                        "images/HOMS-heartstring-02a.jpg",
                        "images/HOMS-heartstring-06a.jpg",
                    ],
                    ravelryLink: "http://www.ravelry.com/badges/redirect?p=heartstring",
                    ravelryGif: "http://api.ravelry.com/badges/projects?p=heartstring&t=.gif",
                    guageMC: "350 (400, 500, 650, 800, 900, 1000, 1100, 1200, 1300, 1400, 1600, 1800, 2000, 2200) yds",
                    guageCC: "60 yds or less in CC for the yoke details*", // TODO what is this asterisk for?
                    guageNote: "",
                    knitNotes: [
                        {
                            head: "Adult sweater is knit in ",
                            tail: " in ‘dive bar‘ and ‘twill’.",
                            link: "http://www.ravelry.com/yarns/library/the-plucky-knitter-crew",
                            linkText: "The Plucky Knitter Crew",
                        },
                        {
                            head: "Baby sweater knit in ",
                            tail: " in ‘blood orange’ and",
                            link: "http://www.ravelry.com/yarns/library/sweetgeorgia-yarns-superwash-dk",
                            linkText: "SweetGeorgia Superwash DK",
                        },
                        {
                            head: "a ",
                            tail: " Tough Love Sock kit in ‘waterfall’ - the sock weight CC yarn was held doubled.",
                            link: "http://www.ravelry.com/yarns/library/sweetgeorgia-yarns-party-of-five-tough-love-sock-mini-skeins",
                            linkText: "Party of 5",
                        },
                    ],
                    notions: "darning needle, stitch markers",
                    tutorials: [
                        {
                            url: "http://blog.tincanknits.com/2013/08/17/gauge/",
                            name: "Gauge in knitting",
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
                            url: "http://blog.tincanknits.com/2014/09/01/choosing-a-palette-for-colourwork/",
                            name: "Choosing a palette for colourwork",
                        },
                        {
                            url: "https://blog.tincanknits.com/2016/01/28/collect-colour-combos/",
                            name: "Excellent colour combos for colourwork",
                        },
                        {
                            url: "http://blog.tincanknits.com/2015/10/15/how-to-block-a-hand-knit-sweater/",
                            name: "How to block a sweater",
                        },
                        {
                            url: "http://blog.tincanknits.com/2015/05/14/german-short-rows/",
                            name: "German short rows",
                        },
                    ],
                },
                lionheart: {
                    title: "Lionheart",
                    designer: "by By Shannon Cook and Jane Richmond",
                    blurb: [
                        "Jane and Shannon not only design together, but they are also the best of friends. They put their two heads and hearts together to create this casual hoodie.",
                        "Lionheart is perfect for throwing on over anything and heading out for a beach adventure, or brunch with friends.",
                    ],
                    photos: [
                        "images/HOMS-lionheart-04a.jpg",
                        "images/HOMS-lionheart-06a.jpg",
                        "images/HOMS-lionheart-10a.jpg",
                        "images/HOMS-lionheart-11a.jpg",
                        "images/HOMS-lionheart-03a.jpg",
                        "images/HOMS-lionheart-01a.jpg",
                        "images/HOMS-lionheart-13a.jpg",
                        "images/HOMS-lionheart-17a.jpg",
                        "images/HOMS-lionheart-05a.jpg",
                        "images/HOMS-lionheart-08a.jpg",
                    ],
                    ravelryLink: "http://www.ravelry.com/badges/redirect?p=lionheart-2",
                    ravelryGif: "http://api.ravelry.com/badges/projects?p=lionheart-2&t=.gif",
                    guageMC: "350 (400, 500, 650, 800, 900, <strong>1000, 1100, 1200, 1300, 1400, 1600, 1800, 2000, 2200</strong>) yds",
                    guageCC: "100 (100, 120, 130, 150, 160, 180, <strong>200, 200, 220, 220, 240, 240, 260, 260</strong>) yds",
                    guageNote: "",
                    knitNotes: [
                        {
                            head: "Adult sweater is knit in ",
                            tail: " in ‘jupiter’ and ‘mercury’.",
                            link: "http://www.ravelry.com/yarns/library/quince--co-phoebe",
                            linkText: "Quince and Co. Phoebe",
                        },
                        {
                            head: "Toddler sweater knit in ",
                            tail: " in ‘charcoal’ and ‘aire’.",
                            link: "http://www.ravelry.com/yarns/library/baa-ram-ewe-dovestone-dk",
                            linkText: "Baa Ram Ewe Dovestone DK",
                        },
                    ],
                    notions: "darning needle, stitch markers",
                    tutorials: [
                        {
                            url: "http://blog.tincanknits.com/2013/08/17/gauge/",
                            name: "Gauge in knitting",
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
                            url: "http://blog.tincanknits.com/2014/09/01/choosing-a-palette-for-colourwork/",
                            name: "Choosing a palette for colourwork",
                        },
                        {
                            url: "https://blog.tincanknits.com/2016/01/28/collect-colour-combos/",
                            name: "Excellent colour combos for colourwork",
                        },
                        {
                            url: "http://blog.tincanknits.com/2015/10/15/how-to-block-a-hand-knit-sweater/",
                            name: "How to block a sweater",
                        },
                    ],
                },
                hearthstone: {
                    title: "Hearthstone",
                    designer: "by Ysolda Teague",
                    blurb: [
                        "Stay cozy while you enjoy the simple pleasures of hearth and home.",
                        "Ysolda is known for her classic and wearable knits, and this sweater is no exception.",
                        "With striking cables, this casual sweater is perfect for relaxed weekends with friends and family.",
                    ],
                    photos: [
                        "images/HOMS-hearthstone-05a.jpg",
                        "images/HOMS-hearthstone-01a.jpg",
                        "images/HOMS-hearthstone-02b.jpg",
                        "images/HOMS-hearthstone-03a.jpg",
                        "images/HOMS-hearthstone-04a.jpg",
                        "images/HOMS-hearthstone-07a.jpg",
                        "images/HOMS-hearthstone-06a.jpg",
                    ],
                    ravelryLink: "http://www.ravelry.com/badges/redirect?p=hearthstone-3",
                    ravelryGif: "http://api.ravelry.com/badges/projects?p=hearthstone-3&t=.gif",
                    guageMC: "350 (400, 500, 650, 800, 900, <strong>1000, 1100, 1200, 1300, 1400, 1600, 1800, 2000, 2200</strong>) yds",
                    guageCC: "",
                    guageNote: "",
                    knitNotes: [
                        {
                            head: "Adult sweater is knit in ",
                            tail: " in ‘silver fox’.",
                            link: "http://www.ravelry.com/yarns/library/a-verb-for-keeping-warm-pioneer",
                            linkText: "A Verb for Keeping Warm Pioneer",
                        },
                        {
                            head: "Toddler sweater knit in ",
                            tail: " in ‘clear skies’.",
                            link: "http://www.ravelry.com/yarns/library/jill-draper-makes-stuff-mohonk",
                            linkText: "Jill Draper Makes Stuff Mohonk",
                        },
                    ],
                    notions: "darning needle, stitch markers, cable needle",
                    tutorials: [
                        {
                            url: "http://blog.tincanknits.com/2013/08/17/gauge/",
                            name: "Gauge in knitting",
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
                            url: "http://blog.tincanknits.com/2014/06/06/how-to-read-a-knitting-chart/",
                            name: "How to read a knitting chart",
                        },
                        {
                            url: "http://blog.tincanknits.com/2015/10/15/how-to-block-a-hand-knit-sweater/",
                            name: "How to block a sweater",
                        },
                        {
                            url: "https://blog.tincanknits.com/2009/08/01/how-to-cable/",
                            name: "How to cable",
                        },
                    ],
                },
            };


            var service = {
                getPattern: getPattern,
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

            function getPattern(name) {
                return patterns[name];
            }

            function goToPattern(patternName) {
                $state.go(patternName);
            }
        }
})();
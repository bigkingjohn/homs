(function () {
    'use strict';

    angular
        .module('homs')
        .controller('designersController', designersController);

    designersController.$inject = ['$anchorScroll'];

    function designersController($anchorScroll) {
        var vm = this;

        // Functions

        // Variables
        vm.designers = [
            {
                imageUrl: "images/bio-ShannonCook.jpg",
                style: "bioStandard",
                name: "Shannon Cook",
                bio: "Shannon designs modern patterns for both knitting and sewing. With their engaging textures, vibrant colours, and striking lines, her fun, dynamic garments and accessories are destined to become wardrobe staples. Shannon is the author and co-publisher of Seasonless, Journey, and Within.",
                homepageUrl: "http://www.veryshannon.com",
                homepageTitle: "www.veryshannon.com"
            },
            {
                imageUrl: "images/bio-RomiHill.jpeg",
                style: "bioStandard",
                name: "Romi Hill",
                bio: "Romi is a full time knitwear designer, pattern writer, and seeker of beauty living in the high desert of Northern Nevada, on the eastern slope of the Sierra-Nevada mountain range. ",
                homepageUrl: "http://www.designsbyromi.com",
                homepageTitle: "www.designsbyromi.com"
            },
            {
                imageUrl: "images/bio-BristolIvy.jpg",
                style: "bioStandard",
                name: "Bristol Ivy",
                bio: "Bristol is a knitting designer and teacher from Portland, Maine. Her work focuses on the intersection of classic tailoring and innovative technique, and has been published with Brooklyn Tweed’s Wool People, Quince &amp; Co., PomPom Quarterly, Interweave Knits, Amirisu, and many more.",
                homepageUrl: "http://www.bristolivy.com",
                homepageTitle: "www.bristolivy.com"
            },
            {
                imageUrl: "images/bio-TanisLavallee.jpg",
                style: "bioStandard",
                name: "Tanis Lavallée",
                bio: "Tanis combined her passion for textiles and colour when she started her hand dyed yarn company, Tanis Fiber Arts, in 2008. She and her husband Chris run their family business from their home in Montreal, Canada.",
                homepageUrl: "http://www.tanisfiberarts.com",
                homepageTitle: "www.tanisfiberarts.com"
            },
            {
                imageUrl: "images/bio-JojiLocatelli.jpg",
                style: "bioStandard",
                name: "Joji Locatelli",
                bio: "Joji enjoys living her life in sunny Buenos Aires, while dreaming of visiting the rest of the world armed with knitting needles and yarn. She also thinks life is much sweeter when served with coffee and chocolate.",
                homepageUrl: "http://www.jojiknits.com",
                homepageTitle: "www.jojiknits.com"
            },
            {
                imageUrl: "images/bio-JaneRichmond.jpg",
                style: "bioStandard",
                name: "Jane Richmond",
                bio: "Jane is known for her classic aesthetic and clearly written patterns. She delivers designs that are fun to knit and easy to wear, with an appealing casual style. Jane is the author and co-publisher of Island, Seasonless, Journey, and Within.",
                homepageUrl: "http://www.janerichmond.com",
                homepageTitle: "www.janerichmond.com"
            },
            {
                imageUrl: "images/bio-YsoldaTeague.jpg",
                style: "bioStandard",
                name: "Ysolda Teague",
                bio: "Ysolda took up knitting while studying English Literature. Over the last decade she’s pioneered new models for self publishing for both her patterns and books and developed a reputation for clear directions and interesting construction methods.",
                homepageUrl: "http://www.ysolda.com",
                homepageTitle: "www.ysolda.com"
            },
            {
                imageUrl: "images/bio-TCK.jpg",
                style: "bioWide",
                name: "Alexa Ludeman & Emily Wessel",
                bio: "Alexa and Emily are the design duo behind Tin Can Knits!  We live in Vancouver and Edinburgh respectively.\n\nOur focus is on simple seamless garments and creating tutorials which guide knitters in trying and mastering new techniques.",
                homepageUrl: "http://www.tincanknits.com",
                homepageTitle: "www.tincanknits.com"
            }
        ];

        vm.motifDesigners = {
            imageUrl: "images/HOMS-motif-01.jpg",
            title: "Motif Designers",
            text: "Another way that designers have contributed to this project is by creating motifs to adorn your sleeves!\n\nAdorable woolly logos have been created by:",
            designers: [
                {
                    url: "https://knitsharelove.com/",
                    name: "Clare Devine"
                },
                {
                    url: "http://thecrochetproject.com/",
                    name: "Kat Goldin"
                },
                {
                    url: "http://www.softsweaterknits.com/",
                    name: "Sylvia McFadden"
                },
                {
                    url: "http://maryjanemucklestone.com/",
                    name: "Mary Jane Mucklestone"
                },
            ]
        };

        // Constructor
        activate();

        function activate() {
            $anchorScroll();
        }
    }
})();
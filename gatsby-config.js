const path = require("path");

module.exports = {
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "team-images",
                path: path.join(__dirname, "src", "images", "team")
            }
        },
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
              src: '/test-script.js', // Change to the script filename
            },
        }
    ],

    siteMetadata: {
        team: {
            leadership: [
                {
                    "mediaLink": "https://www.linkedin.com/in/amilkhanzada",
                    "name": "Amil Khanzada",
                    "image": "amil.jpg",
                    "description": [
                        "One Young World Japan Ambassador",
                        "Alumni, UC Berkeley Computer Science"
                    ],
                    "title": "Founder & CTO"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/dariabutuc/",
                    "name": "Daria Butuc",
                    "image": "daria.jpg",
                    "description": [
                        "Head of Engineering, Project Access",
                        "B.S., University College London"
                    ],
                    "title": "Vice President"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/ravel-charles/",
                    "name": "Ravel Charles",
                    "image": "ravel.jpg",
                    "description": [
                        "Cloud Solutions Engineer, Google",
                        "M.P.S. Data Security, Northeastern University"
                    ],
                    "title": "Infosec Team Lead"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/bruna-louren%C3%A7o-02180a192/",
                    "name": "Bruna Lourenço",
                    "image": "bruna.jpg",
                    "description": [
                        "UX/UI Designer, ThinkBox",
                        "Graphic Design, Federal Institute of Education, Science and Technology of Paraíba"
                    ],
                    "title": "UI Team Lead"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/jonatan-jaskilioff-77075340/",
                    "name": "Jonatan Jaskilioff",
                    "image": "jonatan.jpg",
                    "description": [
                        "CTO - XOOR"
                    ],
                    "title": "Mobile App Team Lead"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/xhoana-koca/",
                    "name": "Xhoana Koca",
                    "image": "xhoana.jpg",
                    "description": [
                        "Website and Mobile App Developer",
                        "B.S., CUNY NYC College of Technology"
                    ],
                    "title": "Web Dev Team Lead"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/matheus-galiza-20539b106/",
                    "name": "Matheus Galiza",
                    "image": "matheus.jpg",
                    "description": [
                        "Public Policy Committee",
                        "Jovenes Iberoamericanos",
                        "M.A. International Relations, Federal University of Paraíba"
                    ],
                    "title": "Brazil Community Outreach Manager"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/sabrina-shen-83bba5172/",
                    "name": "Sabrina Shen",
                    "image": "sabrina.jpg",
                    "description": [
                        "Harvey Mudd Aero Lab Student Researcher",
                        "Autonomous Campus Robot Team Member",
                        "B.E. Electrical and Electronics Engineering, Harvey Mudd College"
                    ],
                    "title": "AI Team Lead"
                },
                {
                    "mediaLink": "https://co.linkedin.com/in/jean-sebastian-pedraza-paez-02b8aa11a",
                    "name": "Sebastian Pedraza",
                    "image": "sebastian.jpg",
                    "description": [
                        "One Young World Colombia Ambassador",
                        "YPARD Steering Committee Member",
                        "Political Science, International University of La Rioja"
                    ],
                    "title": "Colombia Community Outreach Manager"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/jasonpareja/",
                    "name": "Jason Pareja Jauregui",
                    "image": "jason.jpg",
                    "description": [
                        "One Young World Latin America Coordinating Ambassador",
                        "Graduate, MIT Sloan School of Management"
                    ],
                    "title": "Peru Community Outreach Manager"
                }
            ],
            advisors: [
                {
                    "mediaLink": "https://www.linkedin.com/in/kara-meister-200335110/",
                    "name": "Kara Meister, M.D.",
                    "image": "kara-meister.jpg",
                    "description": [
                        "Clinical Assistant Professor, Otolaryngology",
                        "Stanford School of Medicine"
                    ],
                    "title": "Medical Advisor"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/leskovec/",
                    "name": "Jure Leskovec",
                    "image": "jure.jpg",
                    "description": [
                        "Chief Scientist - Pinterest",
                        "Associate Professor, AI",
                        "Stanford School of Engineering"
                    ],
                    "title": "Artificial Intelligence Advisor"
                },
                {
                    "mediaLink": "https://www.pillsburylaw.com/en/lawyers/rafi-azim-khan.html",
                    "name": "Rafi Azim-Khan",
                    "image": "rafi.jpg",
                    "description": [
                        "Partner - Pillsbury Law",
                        "Silicon Valley & Europe"
                    ],
                    "title": "Executive Legal Advisor"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/malvikabawri/",
                    "name": "Malvika Bawri",
                    "image": "malvika.jpg",
                    "description": [
                        "Founder - Quantta Analytics",
                        "Founder - Think India Foundation"
                    ],
                    "title": "Executive Advisor"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/namathom/",
                    "name": "Nathan Thomas",
                    "image": "nathan.jpg",
                    "description": [
                        "One Young World Ambassador",
                        "Founder and CEO - All We Are"
                    ],
                    "title": "Executive Nonprofit Advisor"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/madhavdatt/",
                    "name": "Madhav Datt",
                    "image": "madhav.jpg",
                    "description": [
                        "Founder - Green the Gene",
                        "Former Global Representative for Youth - UN EP"
                    ],
                    "title": "Executive Nonprofit Advisor"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/pedrosiena/",
                    "name": "Pedro Siena",
                    "image": "pedro.jpg",
                    "description": [
                        "Founder and CEO - Siena Company",
                        "Mentor - Stanford Lean Launchpad",
                        "São Carlos, Brazil"
                    ],
                    "title": "Brazil Outreach Advisor"
                },
                {
                    "mediaLink": "http://tannan.fm/contents/about-us.html",
                    "name": "Tsutomu Ito",
                    "image": "ito.jpg",
                    "description": [
                        "Founder - Tannan FM Radio",
                        "Lead Architect, Bullet Train",
                        "Fukui, Japan"
                    ],
                    "title": "Visionary Advisor"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/taisuke-fukuno-a3b3415",
                    "name": "Taisuke Fukuno",
                    "image": "taisuke.jpg",
                    "description": [
                        "Founder - Open Data Japan",
                        "Chairman - jig.jp",
                        "Fukui, Japan"
                    ],
                    "title": "Executive Technology Advisor"
                },
                {
                    "mediaLink": "https://www.linkedin.com/in/richardnall/?originalSubdomain=uk",
                    "name": "Richard Nall",
                    "image": "richard.jpg",
                    "description": [
                        "The Brand Garden - CEO"
                    ],
                    "title": "Chief Marketing Officer"
                }
            ],
            ambassadors: [

            ]
        }
    }
}
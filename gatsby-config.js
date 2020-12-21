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
        }
    ],

    siteMetadata: {
        team: [
            {
                name: "Amil Khanzada",
                image: "amil.jpg",
                title: "Founder and CTO",
                linkedin: "linkedin.com"
            },
            {
                name: "Daria Butuc",
                image: "daria.jpg",
                title: "Vice President",
                linkedin: "linkedin.com" 
            },
            {
                name: "Ravel Charles",
                image: "ravel.jpg",
                title: "Infosec Team Lead",
                linkedin: "linkedin.com" 
            },
            {
                name: "Xhoana Koca",
                image: "xhoana.jpg",
                title: "Web Dev Team Lead",
                linkedin: "linkedin.com" 
            }
        ],
        ambassadors: [

        ]
    }
}
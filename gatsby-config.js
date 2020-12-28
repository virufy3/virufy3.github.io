const path = require("path");

module.exports = {
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "team-images",
                path: path.join(__dirname, "src", "images", "team")
            }
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: path.join(__dirname, "src", "intl"),
                languages: ["en", "es"],
                defaultLanguage: `en`,
                redirect: true,
            },
        }
    ],
    siteMetadata: {
        title: "Virufy",
        description: "Virufy is a global team of passionate young computer scientists mentored by authorities in AI, signal processing, & medicine.",
        author: "Team Virufy",
        image: "images/join-page/virufighters.png",
        url: "https://virufy.org/"
    }
}
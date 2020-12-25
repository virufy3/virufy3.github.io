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
            resolve: `gatsby-plugin-intl`,
            options: {
                path: path.join(__dirname, "src", "intl"),
                languages: ["en", "sp"],
                defaultLanguage: `en`,
                redirect: true,
            },
        }
    ]
}
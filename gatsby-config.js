const path = require("path");

module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-7PW8HS67TW", "G-8NL5MSXJPZ"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "/src/images/icons/favicon.png",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-breakpoints",
    "gatsby-background-image",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },

    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: path.join(__dirname, "src", "intl"),
        languages: ["en", "es", "pt"],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
  ],
  siteMetadata: {
    title: "Virufy",
    description:
      "Virufy is a global team of passionate young computer scientists mentored by authorities in AI, signal processing, & medicine.",
    author: "Team Virufy",
    image: "images/join-page/virufighters.png",
    url: "https://virufy.org/",
  },
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require("path");
module.exports = {
  siteMetadata: {
    menu: [
      { name: "Home", to: "/" },
      { name: "Blog", to: "/blog" },
    ],
    links: {
      facebook: "https://www.facebook.com/gogravital/",
      instagram: "https://www.instagram.com/sparker808/",
      twitter: "https://twitter.com/sparker888",
      gravital: "https://gravitaldigital.com/",
    },
    locale: "en",
    title: "Stephen Parker | UI/UX Gatsby/React Frontend Developer",
    titleTemplate: "Stephen Parker | UI/UX Gatsby/React Frontend Developer",
    description:
      "Check out the latest work by @sparker888",
    siteUrl: "https://www.sparker888.com", // No trailing slash allowed!
    twitterUsername: "@sparker888",
    publicURL: "/sparker888-default-image.jpg", // This will be the default image for social media shares (in the static folder)
    organization: "Gravital Digital",
    author: "@sparker888",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest", // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
      options: {
        name: `sparker888 Gatsby Tailwinds Starter`,
        short_name: `sparker888`,
        start_url: `/`,
        background_color: `#333663`, // The background_color property is used on the splash screen when the application is first launched on mobile.
        theme_color: `663399`, // The theme_color sets the color of the tool bar, and may be reflected in the app's preview in task switchers.
        display: `minimal-ui`,
        icon: "src/images/icon.png",
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          pages: path.join(__dirname, "./src/templates/pages.jsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx-embed",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "add tag manager id here",
        enableWebVitalsTracking: true,
      },
    },
  ],
};

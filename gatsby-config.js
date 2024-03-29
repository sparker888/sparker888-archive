require("dotenv").config({
  path: `.env`,
})

const path = require("path")
module.exports = {
  siteMetadata: {
    menu: [
      { name: "Stephen Parker", to: "/" },
      { name: "Projects", to: "/projects/" },
      { name: "Skills", to: "/skills/" },
      { name: "Gallery", to: "/gallery/" },
      { name: "Articles", to: "/blog/" },
      { name: "Contact", to: "/contact/" },
    ],
    links: {
      facebook: "https://www.facebook.com/gogravital/",
      instagram: "https://www.instagram.com/sparker808/",
      twitter: "https://twitter.com/sparker888",
      gravital: "https://gravitaldigital.com/",
    },
    locale: "en",
    title: "@sparker888 | Web Developer & Photographer",
    titleTemplate: "@sparker888 | Web Developer & Photographer",
    description: "Portfolio of @sparker888.",
    siteUrl: "https://www.sparker888.com", // No trailing slash allowed!
    twitterUsername: "@sparker888",
    publicURL: "/sparker888-social-image.jpg", // This will be the default 'social' image for social media shares (in the static folder)
    organization: "Gravital Digital",
    author: "@sparker888",
    name: "facebook-domain-verification content=n5hwp1vocfsi394ttexpeqruhjo0a1",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest", // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
      options: {
        name: `sparker888 Portfolio`,
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
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
        failOn: `warning`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-mdx-embed",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          pages: path.join(__dirname, "./src/templates/pages.jsx"),
        },
      },
    },
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
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -120,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PTGCLGT",
        includeInDevelopment: false,
        defaultDataLayer: { platform: `gatsby` },
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "448796836214637",
      },
    },
  ],
}

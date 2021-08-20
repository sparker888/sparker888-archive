module.exports = {
  siteMetadata: {
    siteUrl: "https://ecstatic-elion-b17c35.netlify.app/",
    title: "sparker888's Gatsby Starter",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `sparker888 Gatsby Starter`,
        short_name: `sparker888`,
        start_url: `/`,
        background_color: `#D7E8BA`,
        theme_color: `#B3525A`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
  ],
};

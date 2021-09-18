exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const results = await graphql(`
    {
      allContentfulArticle {
        nodes {
          slug
        }
      }
    }
  `)

  if (results.errors) {
    console.log(results.errors)
    return
  }

  results.data.allContentfulArticle.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve("./src/templates/pages.jsx"),
      context: {
        slug: node.slug,
      },
    })
  })
}

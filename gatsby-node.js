const path = require(`path`)

// Added due to simple-react-lightbox package trying to access the process module, which is no longer available by default in Webpack 5

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        process: require.resolve("process/browser"),
      },
    },
  })
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Individual article pages
  const articles = graphql(`
      {
        articles: allContentfulArticle {
          nodes {
            slug
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        Promise.reject(errors)
      }

      if (data && data.articles) {
        const component = path.resolve("./src/templates/pages.jsx")
        data.articles.nodes.map(({ slug }) => {
          createPage({
            path: `/blog/${slug}`,
            component,
            context: { slug },
          })
        })
      }
    })

    // Individual project pages
    const projects = graphql(`
    {
      projects: allContentfulProject {
        nodes {
          slug
        }
      }
    }
    `).then(({ errors, data }) => {
    if (errors) {
      Promise.reject(errors)
    }

    if (data && data.projects) {
      const component = path.resolve("./src/projects/ProjectPages.jsx")
      data.projects.nodes.map(({ slug }) => {
        createPage({
          path: `/projects/${slug}`,
          component,
          context: { slug },
        })
      })
    }
    })

    // Individual gallery pages
    const galleries = graphql(`
    {
      galleries: allContentfulGallery {
        nodes {
          slug
        }
      }
    }
    `).then(({ errors, data }) => {
    if (errors) {
      Promise.reject(errors)
    }

    if (data && data.galleries) {
      const component = path.resolve("./src/galleries/galleries.jsx")
      data.galleries.nodes.map(({ slug }) => {
        createPage({
          path: `/gallery/${slug}`,
          component,
          context: { slug },
        })
      })
    }
    })
    
  return Promise.all([articles, projects, galleries])
}


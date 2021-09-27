// Create pages for blogs, projects and galleries separately using three separate
// queries. We use the `graphql` function which returns a Promise and ultimately
// resolves all three queries using Promise.all(Promise[])
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve('./src/templates/pages.jsx');
  const projectTemplate = path.resolve('./src/projects/ProjectPages.jsx');
  const galleryTemplate = path.resolve('./src/galleries/galleries.jsx');

	// Individual blogs pages
	const blogs = graphql(`
  {
    allContentfulArticle {
      nodes {
        slug
      }
    }
  }
`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create blog pages
		result.data.allContentfulArticle.nodes.forEach(({ node }) => {
			createPage({
				path: `/blog/${node.slug}`,
				component: blogTemplate,
        context: {
          slug: node.slug,
        },
			});
		});
	});

	// Individual project pages
	const projects = graphql(`
  {
    allContentfulProject {
      nodes {
        slug
      }
    }
  }
`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create project pages
		result.data.allContentfulProject.nodes.forEach(({ node }) => {
			createPage({
				path: `/projects/${node.slug}`,
				component: projectTemplate,
        context: {
          slug: node.slug,
        },
			});
		});
	});

  	// Individual gallery pages
	const galleries = graphql(`
  {
    allContentfulGallery {
      nodes {
        slug
      }
    }
  }
`).then(result => {
  if (result.errors) {
    Promise.reject(result.errors);
  }

  // Create gallery pages
  result.data.allContentfulGallery.nodes.forEach(({ node }) => {
    createPage({
      path: `/gallery/${node.slug}`,
      component: galleryTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
});

	// Return a Promise which would wait for all three queries to resolve
	return Promise.all([blogs, projects, galleries]);
};


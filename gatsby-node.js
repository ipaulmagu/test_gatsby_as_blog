const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  console.log("gatsby-node.js/createpages")
  const postTemplate = path.resolve(`src/templates/blog-post.js`)
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
  `).then(res => {
    console.log("gatsby-node.js/createpages.then")
    if (res.errors) {
      return Pormise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    }) //forEach
  })
}

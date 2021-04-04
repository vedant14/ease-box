const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(async resolve => {
    const result = await graphql(`
      {
        allAirtable(filter: { data: { BoxName: { ne: null } } }) {
          edges {
            node {
              recordId
              id
              data {
                slug
              }
            }
          }
        }
      }
    `)
    // For each path, create page and choose a template.
    // values in context Object are available in that page's query
    result.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: `boxes/${node.data.slug}`,
        component: path.resolve(`./src/template/product.js`),
        context: {
          RecordID: node.recordId,
        },
      })
    })
    resolve()
  })
}

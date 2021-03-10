module.exports = {
  siteMetadata: {
    title: `Move-in with Convenience`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyuGaqNWkKUz0ZZD`, // may instead specify via env, see below
        tables: [
          {
            baseId: `apps0ewHWEXiQKPdn`,
            tableName: `Boxes`,
            mapping: {
              BoxAttachments: `fileNode`,
              BoxAdditional: `text/markdown`,
            },
            separateNodeType: true,
            tableLinks: [`BoxMapping`],
          },
          {
            baseId: `apps0ewHWEXiQKPdn`,
            tableName: `Mapping`,
            tableLinks: [`MappingProduct`],
          },
          {
            baseId: `apps0ewHWEXiQKPdn`,
            tableName: `Products`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
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
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					"G-RJYHNK7GQR", // Google Analytics / GA
				],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				gtagConfig: {
					optimize_id: "OPT_CONTAINER_ID",
					anonymize_ip: true,
					cookie_expires: 0,
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: false,
					// Setting this parameter is also optional
					respectDNT: true,
				},
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
				background_color: `#5C48D7`,
				theme_color: `#5C48D7`,
				display: `minimal-ui`,
				icon: `src/images/Logo.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-airtable`,
			options: {
				apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
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
					{
						baseId: `apps0ewHWEXiQKPdn`,
						tableName: `FAQ`,
						mapping: {
							Answer: `text/markdown`,
						},
					},
				],
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}

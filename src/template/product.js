import React from "react"
import { graphql } from "gatsby"
import { Layout, ProductHead, SEO, BestFor } from "../components"
const ProductPage = ({
	data: {
		airtable: { data },
	},
}) => {
	return (
		<Layout>
			<SEO />
			<ProductHead data={data} />
			<BestFor text={data.BoxAdditional} />
		</Layout>
	)
}

export const query = graphql`
	query ProductPageQuery($RecordID: String!) {
		airtable(recordId: { eq: $RecordID }) {
			data {
				BoxName
				BoxPrice
				BoxLabel
				BoxDescription
				BoxAdditional {
					childMarkdownRemark {
						html
					}
				}
				BoxMapping {
					data {
						MappingQty
						MappingProduct {
							data {
								ProductName
							}
						}
					}
				}
				BoxAttachments {
					localFiles {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
`

export default ProductPage

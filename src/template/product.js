import React from "react"
import { graphql } from "gatsby"
import {
	Layout,
	ProductHead,
	SEO,
	BestFor,
	ProductDetails,
} from "../components"
const ProductPage = ({
	data: {
		airtable: { data },
	},
}) => {
	return (
		<Layout box faq>
			<SEO title={data.BoxName} description="Move-in with Convenience" />
			<ProductHead data={data} />
			<BestFor text={data.BoxAdditional} />
			<ProductDetails items={data.BoxMapping} />
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
				Link
				BoxAdditional {
					childMarkdownRemark {
						html
					}
				}
				BoxMapping {
					data {
						MappingQty
						Segment
						MappingProduct {
							data {
								ProductName
								ProductDescription
								ProductSegment
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

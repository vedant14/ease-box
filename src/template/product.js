import React from "react"
import { graphql } from "gatsby"

const ProductPage = ({ data }) => {
	return (
		<div>
			<h1>{data.BoxName}</h1>
		</div>
	)
}

export const PageQuery = graphql`
	query ProductPageQuery($id: ID!) {
		airtable(id: { eq: $id }) {
			data {
				BoxName
			}
		}
	}
`

export default ProductPage

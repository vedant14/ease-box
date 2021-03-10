import React from "react"
import { DetailsWrapper } from "./styles"
export function ProductDetails({ items }) {
	return (
		<DetailsWrapper>
			<h2>Product Details</h2>
			<table>
				{items.map(boxmap => (
					<React.Fragment>
						{boxmap.data.MappingProduct.map(product => (
							<tr>
								<td>
									<h4>{product.data.ProductName}</h4>
								</td>
								<td>{product.data.ProductDescription}</td>
							</tr>
						))}
					</React.Fragment>
				))}
			</table>
		</DetailsWrapper>
	)
}

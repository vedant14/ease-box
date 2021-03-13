import React from "react"
import { DetailsWrapper } from "./styles"
export function ProductDetails({ items }) {
	return (
		<DetailsWrapper>
			<h2>Product Details</h2>
			<div>
				{items.map(boxmap => (
					<React.Fragment>
						{boxmap.data.MappingProduct.map(product => (
							<div>
								<h3>
									<strong>{product.data.ProductName}</strong>
								</h3>
								<h3>{product.data.ProductDescription}</h3>
							</div>
						))}
					</React.Fragment>
				))}
			</div>
		</DetailsWrapper>
	)
}

import React from "react"
import { DetailsWrapper, TextWrapper } from "./styles"
export function ProductDetails({ items }) {
	return (
		<DetailsWrapper>
			<h2>Product Details</h2>
			<div>
				{items
					.sort((a, b) => (a.data.Segment > b.data.Segment ? 1 : -1))
					.map(boxmap => (
						<React.Fragment>
							{boxmap.data.MappingProduct.map(product => (
								<TextWrapper>
									<h5>
										<strong>
											{product.data.ProductName} x {boxmap.data.MappingQty}
										</strong>
									</h5>
									<h5>{product.data.ProductDescription}</h5>
								</TextWrapper>
							))}
						</React.Fragment>
					))}
				}
			</div>
		</DetailsWrapper>
	)
}

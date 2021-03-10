import React from "react"
import {
	ProductHeadWrapper,
	LabelStrip,
	ProductImage,
	ProductText,
} from "./styles"
import { Link } from "gatsby"
import Img from "gatsby-image"

export function ProductHead({ data }) {
	return (
		<ProductHeadWrapper>
			<ProductImage>
				<Img fluid={data.BoxAttachments.localFiles[0].childImageSharp.fluid} />
			</ProductImage>
			<ProductText>
				<div>
					<h1>{data.BoxName}</h1>
					<LabelStrip>{data.BoxLabel}</LabelStrip>
				</div>
				<h3>Rs. {data.BoxPrice} /-</h3>
				<hr />
				<h3>{data.BoxDescription}</h3>
				<h4>This box contains -</h4>
				<ul>
					{data.BoxMapping.map(boxmap => (
						<React.Fragment>
							{boxmap.data.MappingProduct.map(product => (
								<li>
									<h4>
										{boxmap.data.MappingQty}
										{product.data.ProductName}
									</h4>
								</li>
							))}
						</React.Fragment>
					))}
				</ul>
				<div>
					<button>
						<h4>Buy this box</h4>
					</button>
					<Link to="/">View return policy</Link>
				</div>
			</ProductText>
		</ProductHeadWrapper>
	)
}

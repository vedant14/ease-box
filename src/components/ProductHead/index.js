import React from "react"
import {
	ProductHeadWrapper,
	LabelStrip,
	ProductImage,
	ProductText,
} from "./styles"
import Img from "gatsby-image"
import AnchorLink from "react-anchor-link-smooth-scroll"

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
				<div>
					<a href={data.Link} target="_blank" rel="noreferrer">
						<button>
							<h4>Buy this box</h4>
						</button>
					</a>
					<AnchorLink href="#FAQs">View return policy</AnchorLink>
				</div>
			</ProductText>
		</ProductHeadWrapper>
	)
}

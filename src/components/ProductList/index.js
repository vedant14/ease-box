import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
	HeadStrip,
	ProductContainer,
	LabelStrip,
	ProductPrice,
	ProductImage,
	ProductText,
} from "./styles"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

export function ProductList() {
	const products = useStaticQuery(graphql`
		query {
			allAirtable(
				sort: { order: ASC, fields: data___BoxName }
				filter: { data: { BoxName: { ne: null } } }
			) {
				edges {
					node {
						recordId
						data {
							BoxName
							BoxPrice
							BoxLabel
							BoxDescription
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
			}
		}
	`)
	return (
		<div>
			<HeadStrip>
				<h2>Shop Boxes</h2>
			</HeadStrip>
			{products.allAirtable.edges.map(({ node }, i) => (
				<Link key={i} to={node.recordId}>
					<ProductContainer col={i}>
						<Container>
							<div>
								<LabelStrip>
									{node.data.BoxLabel && <small>{node.data.BoxLabel}</small>}
								</LabelStrip>
								<ProductImage
									fluid={
										node.data.BoxAttachments.localFiles[0].childImageSharp.fluid
									}
								/>
								<ProductPrice>Rs. {node.data.BoxPrice}</ProductPrice>
							</div>
							<ProductText>
								<h2>{node.data.BoxName}</h2>
								<h3>{node.data.BoxDescription}</h3>
								<ul>
									{node.data.BoxMapping.map(boxmap => (
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
							</ProductText>
						</Container>
					</ProductContainer>
				</Link>
			))}
		</div>
	)
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
	Wrapper,
	BoxText,
	BoxContainer,
	BoxImages,
	BoxButton,
	Card,
	ProductImage,
} from "./styles"
import Slider from "react-slick"
import { Link } from "gatsby"

export function Boxes() {
	const settings = {
		dots: true,
		className: "center",
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 1,
		swipeToSlide: true,
	}
	const products = useStaticQuery(graphql`
		query {
			allAirtable(
				sort: { order: ASC, fields: data___BoxPrice }
				filter: { data: { BoxName: { ne: null } } }
			) {
				edges {
					node {
						data {
							BoxName
							slug
							BoxPrice
							BoxLabel
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
		<Wrapper>
			<BoxContainer>
				<BoxText>
					<h1>Our Boxes</h1>
					<h3>Chose the box that is convenient for you</h3>
				</BoxText>
				<BoxImages>
					<Slider {...settings}>
						{products.allAirtable.edges.map(({ node }, i) => (
							<Card key={i} to={`boxes/${node.data.slug}`}>
								<ProductImage
									fluid={
										node.data.BoxAttachments.localFiles[0].childImageSharp.fluid
									}
								/>
							</Card>
						))}
					</Slider>
				</BoxImages>
				<BoxButton>
					<Link to="/boxes">View All</Link>
				</BoxButton>
			</BoxContainer>
		</Wrapper>
	)
}

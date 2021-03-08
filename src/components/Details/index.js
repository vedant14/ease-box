import React from "react"
import { DetailsWrapper, MobileWrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { Scroll } from "../Scroll"
import Img from "gatsby-image"

export function Details() {
	const text = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: { type: { eq: "details" } }) {
				html
				frontmatter {
					heading
					image {
						childImageSharp {
							fluid(maxWidth: 500) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)
	return (
		<MobileWrapper>
			<Scroll id="Details" />
			<DetailsWrapper>
				<div>
					<h1>{text.markdownRemark.frontmatter.heading}</h1>
				</div>
				<Img
					fluid={text.markdownRemark.frontmatter.image.childImageSharp.fluid}
				/>
				<div
					dangerouslySetInnerHTML={{
						__html: text.markdownRemark.html,
					}}
				/>
			</DetailsWrapper>
		</MobileWrapper>
	)
}

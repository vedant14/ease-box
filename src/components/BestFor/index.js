import React from "react"
import { DetailsWrapper, MobileWrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export function BestFor() {
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
			<DetailsWrapper>
				<div>
					<h1>Best for</h1>
				</div>
				<div
					dangerouslySetInnerHTML={{
						__html: text.markdownRemark.html,
					}}
				/>
			</DetailsWrapper>
		</MobileWrapper>
	)
}

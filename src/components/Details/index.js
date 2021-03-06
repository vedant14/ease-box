import React from "react"
import { DetailsWrapper, MobileWrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { Scroll } from "../Scroll"
export function Details() {
	const text = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: { type: { eq: "details" } }) {
				html
				frontmatter {
					heading
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
				<div
					dangerouslySetInnerHTML={{
						__html: text.markdownRemark.html,
					}}
				/>
			</DetailsWrapper>
		</MobileWrapper>
	)
}

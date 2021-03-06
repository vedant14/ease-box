import React from "react"
import { WhoForWrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { Scroll } from "../Scroll"
export function WhoFor() {
	const text = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: { type: { eq: "whofor" } }) {
				html
				frontmatter {
					heading
					highlight
				}
			}
		}
	`)
	return (
		<div>
			<Scroll id="WhoIsThisFor" />
			<WhoForWrapper>
				<h1>{text.markdownRemark.frontmatter.heading}</h1>
				<h4>{text.markdownRemark.frontmatter.highlight}</h4>
				<div
					dangerouslySetInnerHTML={{
						__html: text.markdownRemark.html,
					}}
				/>
			</WhoForWrapper>
		</div>
	)
}

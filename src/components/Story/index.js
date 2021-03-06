import React from "react"
import { StoryWrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
export function Story() {
	const text = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: { type: { eq: "story" } }) {
				html
			}
		}
	`)
	return (
		<StoryWrapper
			dangerouslySetInnerHTML={{
				__html: text.markdownRemark.html,
			}}
		/>
	)
}

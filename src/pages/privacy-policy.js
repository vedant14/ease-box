import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import { Container } from "react-bootstrap"
const PrivacyPage = ({ data }) => {
	return (
		<Layout>
			<Container>
				<div
					dangerouslySetInnerHTML={{
						__html: data.markdownRemark.html,
					}}
				/>
			</Container>
		</Layout>
	)
}

export const query = graphql`
	{
		markdownRemark(frontmatter: { type: { eq: "privacy" } }) {
			id
			html
		}
	}
`

export default PrivacyPage

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import FaqItem from "./FaqItem"
import { Scroll } from "../Scroll"

export function FAQ() {
	const FAQtext = useStaticQuery(graphql`
		query {
			allAirtable(
				filter: { table: { eq: "FAQ" } }
				sort: { fields: data___QuestionOrder, order: ASC }
			) {
				edges {
					node {
						data {
							QuestionOrder
							Question
							Answer {
								childMarkdownRemark {
									html
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
			<Scroll id="FAQs" />
			<Container>
				<h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
				<div>
					{FAQtext.allAirtable.edges.map(({ node }, i) => (
						<FaqItem title={node.data.Question} key={i}>
							<div
								dangerouslySetInnerHTML={{
									__html: node.data.Answer.childMarkdownRemark.html,
								}}
							/>
						</FaqItem>
					))}
				</div>
			</Container>
		</div>
	)
}

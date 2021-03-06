import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import FaqItem from "./FaqItem"
import { Scroll } from "../Scroll"

export function FAQ() {
	const FAQtext = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: { type: { eq: "FAQ" } }) {
				frontmatter {
					question {
						question
						answer
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
					{FAQtext.markdownRemark.frontmatter.question.map(faqs => (
						<FaqItem title={faqs.question} key={faqs.question}>
							{faqs.answer}
						</FaqItem>
					))}
				</div>
			</Container>
		</div>
	)
}

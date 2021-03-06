import React from "react"
import { AuthorWrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import HeroImage from "../../images/header.svg"
import { Scroll } from "../Scroll"
export function Author() {
	const text = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: { type: { eq: "author" } }) {
				html
				frontmatter {
					heading
				}
			}
		}
	`)
	return (
		<div>
			<Scroll id="AboutMe" />
			<AuthorWrapper>
				<h1>{text.markdownRemark.frontmatter.heading}</h1>
				<div>
					<div>
						<img src={HeroImage} alt="Header" />
					</div>
					<div
						dangerouslySetInnerHTML={{
							__html: text.markdownRemark.html,
						}}
					/>
				</div>
			</AuthorWrapper>
		</div>
	)
}

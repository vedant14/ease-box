import React from "react"
import { HeroWrapper, HeaderImage, HeaderText, HeaderContainer } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"

export function Hero() {
	const hero = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: { type: { eq: "hero" } }) {
				frontmatter {
					heading
					subtitle
					image {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)

	return (
		<HeroWrapper id="Home">
			<HeaderContainer>
				<HeaderText>
					<h1>{hero.markdownRemark.frontmatter.heading}</h1>
					<AnchorLink href="#Details">
						<p>{hero.markdownRemark.frontmatter.subtitle}</p>
					</AnchorLink>
				</HeaderText>
				<HeaderImage
					fluid={hero.markdownRemark.frontmatter.image.childImageSharp.fluid}
				/>
			</HeaderContainer>
		</HeroWrapper>
	)
}

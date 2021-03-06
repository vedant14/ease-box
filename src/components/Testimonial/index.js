import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import { Scroll } from "../Scroll"
import { TestimonialWrapper, TestimonialCard } from "./styles"
import { Container } from "react-bootstrap"
export function Testimonial() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		cssEase: "linear",
	}
	const text = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: { type: { eq: "testimonial" } }) {
				frontmatter {
					testimonial {
						name
						testimonial
						image {
							id
							publicURL
						}
					}
				}
			}
		}
	`)
	return (
		<TestimonialWrapper>
			<Scroll id="Testimonial" />
			<Container>
				<h1>Testimonials</h1>
				<Slider {...settings}>
					{text.markdownRemark.frontmatter.testimonial.map(item => (
						<TestimonialCard>
							<img src={item.image.publicURL} alt={item.name} />
							<h3>{item.name}</h3>
							<p>{item.testimonial}</p>
						</TestimonialCard>
					))}
				</Slider>
			</Container>
		</TestimonialWrapper>
	)
}

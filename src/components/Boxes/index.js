import React from "react"
import {
	Wrapper,
	BoxText,
	BoxContainer,
	BoxImages,
	BoxButton,
	Card,
} from "./styles"
import Slider from "react-slick"

export function Boxes() {
	const settings = {
		dots: true,
		className: "center",
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 1,
		swipeToSlide: true,
	}
	return (
		<Wrapper>
			<BoxContainer>
				<BoxText>
					<h1>Our Boxes</h1>
					<h3>Chose the box that is convenient for you</h3>
				</BoxText>
				<BoxImages>
					<Slider {...settings}>
						<Card>
							<img src="https://dummyimage.com/600x400/000/fff" />
						</Card>
						<Card>
							<img src="https://dummyimage.com/600x400/000/fff" />
						</Card>
						<Card>
							<img src="https://dummyimage.com/600x400/000/fff" />
						</Card>
					</Slider>
				</BoxImages>
				<BoxButton>
					<button>View All</button>
				</BoxButton>
			</BoxContainer>
		</Wrapper>
	)
}

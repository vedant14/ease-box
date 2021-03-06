import React from "react"
import { FooterWrapper } from "./styles"
import { Container } from "react-bootstrap"
import Wave from "../../images/wave.svg"

export function Footer() {
	return (
		<FooterWrapper id="Footer">
			<img src={Wave} alt="date" />
			<div>
				<Container>
					<div>
						<ul>
							<li>
								<h3>Resources:</h3>
								<h4>About, FAQ</h4>
							</li>
							<li>
								<h3>Contact:</h3>
								<h4>Chat with Us, Email, Give feedback</h4>
							</li>
							<li>
								<h3>Social:</h3>
								<h4>Instragram, Facebook</h4>
							</li>
							<li>
								<h3>EaseBox.in © 2021, Privacy and Terms</h3>
							</li>
						</ul>
					</div>
					<div>
						<img src="https://dummyimage.com/600x400/000/fff" />
						<h3>Shop our boxes ⟶</h3>
					</div>
				</Container>
			</div>
		</FooterWrapper>
	)
}

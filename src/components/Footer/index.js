import React from "react"
import { FooterWrapper } from "./styles"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

export function Footer() {
	return (
		<FooterWrapper id="Footer">
			<Container>
				<div>
					<ul>
						<li>
							<h3>Contact: </h3>
							<h4>
								<a href="http://wa.me/+919172280651">Connect with Us</a>,{" "}
								<a href="mailto:contact@easebox.in">Email</a>
							</h4>
						</li>
						<li>
							<h3>Social: </h3>
							<h4>
								<a href="https://www.instagram.com/easebox.in/?igshid=1x8lto6gsn2mb">
									Instagram
								</a>
								, <a href="https://www.facebook.com/easebox.in">Facebook</a>
							</h4>
						</li>
						<li>
							<h4>
								EaseBox.in © {new Date().getFullYear()},{" "}
								<Link to="/privacy-policy">Privacy</Link> and{" "}
								<Link to="/terms-and-conditions">Terms</Link>
							</h4>
						</li>
					</ul>
				</div>
				<div>
					<img src="https://dummyimage.com/600x400/000/fff" />
					<h3>
						<Link to="/boxes">Shop our boxes ⟶</Link>
					</h3>
				</div>
			</Container>
		</FooterWrapper>
	)
}

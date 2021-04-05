import React from "react"
import { FooterWrapper } from "./styles"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"
import HappyMan from "../../images/happy.png"

export function Footer() {
	return (
		<FooterWrapper id="Footer">
			<Container>
				<div>
					<ul>
						<li>
							<h3>Contact: </h3>
							<h4>
								<a
									href="http://wa.me/+919767137428"
									target="_blank"
									rel="noreferrer"
								>
									Connect with Us
								</a>
								, <a href="mailto:contact@easebox.in">Email</a>
							</h4>
						</li>
						<li>
							<h3>Social: </h3>
							<h4>
								<a
									href="https://www.instagram.com/easebox.in/?igshid=1x8lto6gsn2mb"
									target="_blank"
									rel="noreferrer"
								>
									Instagram
								</a>
								,{" "}
								<a
									href="https://www.facebook.com/easebox.in"
									target="_blank"
									rel="noreferrer"
								>
									Facebook
								</a>
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
					<Link to="/boxes">
						<img src={HappyMan} alt="Shop at easebox" />
						<h3>Shop our boxes ⟶</h3>
					</Link>
				</div>
			</Container>
		</FooterWrapper>
	)
}

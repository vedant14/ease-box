import React from "react"
import { AboutWrapper, AboutText } from "./styles"
import { Container } from "react-bootstrap"
export function About() {
	return (
		<AboutWrapper>
			<Container>
				<AboutText>
					<small>Meet EaseBox</small>
					<h1>Moving houses does not have to be so stress-full</h1>
					<button>About Us</button>
				</AboutText>
			</Container>
		</AboutWrapper>
	)
}

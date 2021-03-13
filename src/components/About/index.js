import React from "react"
import { AboutWrapper, AboutText } from "./styles"
import { Container } from "react-bootstrap"
export function About() {
	return (
		<AboutWrapper>
			<Container>
				<AboutText>
					<small>Meet EaseBox</small>
					<h1>Moving to a new home shouldn't be stress-full</h1>
					<p>
						Have you ever had to move to a new city or new home in the same city
						and found yourself feeling <em>overwhelmed</em>? We hear you. We are
						just <em>like you</em>. We hate the dread that comes with moving.
					</p>
					<p>
						<em>Moving to a new space should be exciting! Right?</em>
					</p>
					<p>
						Ease box was born to create that experience. We want to make moving
						to a new home super-relaxing for you.
					</p>
					<p>How are we planning to do that? Keep reading!</p>
				</AboutText>
			</Container>
		</AboutWrapper>
	)
}

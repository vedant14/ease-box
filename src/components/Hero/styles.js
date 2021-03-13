import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"
import Img from "gatsby-image"

export const HeroWrapper = styled.div`
	color: ${colors.white};
	background: ${colors.primary};
	@media (min-width: 768px) {
		height: 500px;
	}
	@media (min-width: 1150px) {
		height: 600px;
	}
	height: 400px;
`

export const HeaderContainer = styled(Container)`
	display: grid;
	margin: auto;
	grid-template-columns: 1fr;
	grid-gap: 5px;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`

export const HeaderText = styled.span`
	margin: 70px auto 20px auto;
	max-width: 300px;
	text-align: center;
	@media (min-width: 768px) {
		margin: 50% 0px 0px 0px;
		max-width: 450px;
		text-align: right;
	}
	@media (min-width: 1150px) {
		margin: 230px 0px 0px 0px;
		max-width: 420px;
		text-align: right;
	}
	> a {
		color: ${colors.white};
		text-decoration: underline;
	}
`

export const HeaderImage = styled(Img)`
	z-index: 5;
	width: 80%;
	margin: auto;
	@media (min-width: 768px) {
		margin: 100px 0px 100px auto;
		width: 455px;
		max-width: 80%;
	}
	@media (min-width: 1150px) {
		width: 455px;
		margin: 100px 0px 100px auto;
		max-width: 80%;
	}
`

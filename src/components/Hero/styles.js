import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const HeroWrapper = styled.div`
	color: ${colors.primaryBlack};
	background: ${colors.washedGrey};
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

export const HeaderText = styled.h1`
	margin: 150px auto;
	max-width: 300px;
	z-index: 5;
	@media (min-width: 768px) {
		margin: 150px 0px;
		max-width: 400px;
	}
	@media (min-width: 1024px) {
		margin: 150px 0px;
		max-width: 450px;
	}
`

export const HeaderImage = styled.img`
	height: 355px;
	width: 355px;
	z-index: 5;
	display: none;
	@media (min-width: 768px) {
		display: flex;
		margin: 50px 0px 100px auto;
		max-width: 80%;
	}
	@media (min-width: 1024px) {
		display: flex;
		margin: 100px 0px 100px auto;
		max-width: 80%;
	}
`

export const BlobImage = styled.img`
	position: absolute;
	display: none;
	@media (min-width: 768px) {
		display: block;
		left: 25%;
		top: 10%;
		width: 450px;
	}
	@media (min-width: 1024px) {
		left: 20%;
		top: 5%;
		width: 600px;
	}
`

export const MobileBlobImage = styled.img`
	position: absolute;
	display: block;
	top: 10%;
	right: 0%;
	@media (min-width: 768px) {
		display: none;
	}
`

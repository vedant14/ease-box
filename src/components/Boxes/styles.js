import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const Wrapper = styled.div`
	color: ${colors.white};
	background: ${colors.primary};
`

export const BoxContainer = styled(Container)`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	grid-template-areas:
		"bt"
		"bi"
		"bb";
	grid-gap: 5px;
	@media (min-width: 728px) {
		grid-template-columns: repeat(5, minmax(0, 1fr));
		grid-template-areas:
			"bt bt bi bi bi"
			"bb bb bi bi bi";
	}
	overflow: hidden;
`

export const BoxText = styled.div`
	grid-area: bt;
	margin: auto;
	max-width: 300px;
	display: block;
	padding: 80px 0px 10px 0px;
	text-align: center;
	@media (min-width: 728px) {
		padding: 100px 0px 0px 0px;
		max-width: 450px;
	}
`

export const BoxButton = styled.div`
	grid-area: bb;
	margin: 20px auto;
	@media (min-width: 728px) {
		margin: 0px auto;
	}
	> button {
		margin: 20px auto;
		color: ${colors.white};
		border-color: ${colors.white};
		&:hover {
			background: ${colors.white};
			color: ${colors.primary};
		}
	}
`

export const BoxImages = styled.div`
	grid-area: bi;
	margin-top: 5px;
	margin-bottom: 5px;
	@media screen and (min-width: 728px) {
		margin-top: 80px;
		margin-bottom: 80px;
	}
`

export const Card = styled.div`
	> img {
		max-width: 100%;
		border-radius: 10px;
		margin: auto;
	}
`

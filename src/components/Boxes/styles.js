import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"
import Img from "gatsby-image"
import { Link } from "gatsby"
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
		height: 500px;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		grid-template-areas:
			"bt bt bi bi bi"
			"bb bb bi bi bi";
	}
	@media (min-width: 1150px) {
		height: 600px;
	}
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
	margin: 40px auto;
	@media (min-width: 728px) {
		margin: 0px auto;
	}
	> a {
		margin: 20px auto;
		color: ${colors.white};
		background: none;
		border: 1px solid ${colors.white};
		padding: 15px 80px;
		text-transform: capitalize;
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
		margin: auto 0px;
		padding: 100px;
	}
`

export const Card = styled(Link)`
	border: 3px solid black;
	background: white;
	padding: 20px;
	@media screen and (min-width: 728px) {
		padding: 50px;
	}
`
export const ProductImage = styled(Img)`
	margin: auto;
`

export const Label = styled.h4`
	position: absolute;
	background: ${colors.secondary};
	color: white;
	right: 400px;
	width: fit-content;
	padding: 10px 15px;
	border-radius: 10px;
`

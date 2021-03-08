import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"
import Img from "gatsby-image"

export const HeadStrip = styled.div`
	margin: auto;
	> h2 {
		padding: 20px 0px;
		text-align: center;
	}
`

export const ProductContainer = styled.div`
	background: ${colors.off_primary};
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 5px;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`

export const LabelStrip = styled.div`
	position: relative;
	background: ${colors.secondary};
	width: fit-content;
	padding: 5px 10px;
	border-radius: 5px;
	left: 20%;
	top: 20%;
	color: ${colors.white};
`

export const ProductPrice = styled.div`
	background: ${colors.primary};
	width: fit-content;
	padding: 5px 10px;
	border-radius: 5px;
	margin: 20px auto;
	color: ${colors.white};
`
export const ProductImage = styled(Img)`
	margin: auto;
	max-width: 400px;
`
export const ProductText = styled(Container)`
	margin: auto;
	> ul {
		padding-inline-start: 20px;
		> li {
			color: ${colors.primaryBlack};
		}
	}
`

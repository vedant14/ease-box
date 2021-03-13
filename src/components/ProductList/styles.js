import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import Img from "gatsby-image"

export const HeadStrip = styled.div`
	margin: auto;
	> h2 {
		padding: 20px 0px;
		text-align: center;
	}
`

export const ProductContainer = styled.div`
	background: ${props =>
		props.col % 2 === 0 ? `${colors.off_primary}` : `${colors.nav}`};

	> div {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas:
			"img"
			"text";
		grid-gap: 5px;
		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
			grid-template-areas: ${props =>
				props.col % 2 === 0 ? `"img text"` : `"text img"`};
		}

		> div:first-child {
			grid-area: img;
		}
	}
`

export const LabelStrip = styled.div`
	position: relative;
	background: ${colors.secondary};
	width: fit-content;
	padding: 5px 10px;
	border-radius: 5px;
	left: 20%;
	top: 15%;
	z-index: 5;
	color: ${colors.white};
`

export const ProductPrice = styled.div`
	background: ${colors.primary};
	width: fit-content;
	padding: 5px 10px;
	border-radius: 5px;
	margin: 20px auto;
	@media (min-width: 768px) {
		margin: 40px auto;
	}
	color: ${colors.white};
`
export const ProductImage = styled(Img)`
	margin: auto;
	width: 400px;
`
export const ProductText = styled.div`
	margin: auto;
	color: ${colors.primaryBlack};
	padding-bottom: 30px;
	grid-area: text;
	> ul {
		padding-inline-start: 20px;
		> li {
			color: ${colors.primaryBlack};
		}
	}
`

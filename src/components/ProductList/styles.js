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
		&:hover {
			> div > div > div {
				animation-iteration-count: infinite;
				animation: shake 1s;
			}
		}
	}
	@keyframes shake {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}
`

export const LabelStrip = styled.div`
	background: ${colors.secondary};
	position: relative;
	width: fit-content;
	height: fit-content;
	margin-left: 10px;
	padding: 2px 10px;
	top: 10%;
	border-radius: 5px;
	color: ${colors.white};
	> small {
		font-size: 12px;
		line-height: 26px;
	}
	&:hover {
		color: ${colors.primary};
		background: ${colors.white};
	}
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
	max-width: 400px;
`

export const ProductText = styled.div`
	margin: auto;
	> div:first-child {
		display: flex;
		> h2 {
			margin: auto 0px;
		}
		margin: 10px 0px;
	}
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

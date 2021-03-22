import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const ProductHeadWrapper = styled(Container)`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		"img"
		"text";
	grid-gap: 5px;
	margin-top: 25px;
	margin-bottom: 25px;
	@media (min-width: 768px) {
		margin-top: 75px;
		margin-bottom: 75px;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "img text";
	}
`

export const LabelStrip = styled.small`
	background: ${colors.secondary};
	width: fit-content;
	height: fit-content;
	padding: 5px 10px;
	margin: auto;
	border-radius: 5px;
	color: ${colors.white};
`
export const ProductImage = styled.div`
	grid-area: img;
	background: ${colors.nav};
	padding: 30px;
	margin-bottom: 25px;
	@media (min-width: 768px) {
		margin-bottom: 0px;
	}
`
export const ProductText = styled.div`
	margin: auto;
	grid-area: text;
	> div:first-child {
		display: flex;
		margin-bottom: 10px;
		> h1 {
			margin: 0;
		}
	}
	> ul {
		padding-inline-start: 20px;
		> li {
			color: ${colors.primaryBlack};
		}
	}
	> div:last-child {
		margin-top: 20px;
		> a > button {
			border: none;
			background: ${colors.primary};
			border: 2px solid ${colors.primary};
			color: ${colors.white};
			padding: 15px 50px;
			width: 100%;
			margin: 20px 0px;
			@media (min-width: 768px) {
				width: fit-content;
				margin: 0px;
			}
			&:hover {
				background: ${colors.white};
				color: ${colors.primary};
			}
			> h4 {
				margin: 0px;
				text-transform: capitalize;
			}
		}
		> a:last-child {
			font-style: normal;
			font-weight: 200;
			font-size: 14px;
			line-height: 16px;
			color: ${colors.washedBlack};
			text-decoration: underline;
			margin: 10px 0px;
			@media (min-width: 768px) {
				margin: auto 20px;
			}
		}
	}
`

import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const DetailsWrapper = styled(Container)`
	border: 1px solid ${colors.primary};
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		"hh"
		"tt "
		"img";
	@media (min-width: 768px) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-areas:
			"hh hh hh hh hh hh"
			"img img tt tt tt tt ";
	}
	> div:first-child {
		grid-area: hh;
		margin: 50px auto 10px auto;
		text-align: center;
		@media (min-width: 768px) {
			text-align: left;
			padding-left: 30px;
		}
	}
	> div:nth-child(2) {
		grid-area: img;
		object-fit: cover;
		margin: 10px;
		max-width: 200px;
		max-height: 200px;
		@media (min-width: 768px) {
			margin: auto 30px;
			max-width: 200px;
			max-height: 200px;
		}
		@media (min-width: 1150px) {
			margin: auto 40px;
			max-width: 300px;
			max-height: 300px;
		}
	}
	> div:last-child {
		grid-area: tt;

		@media (min-width: 768px) {
			margin: 30px 0px;
		}
		@media (min-width: 1150px) {
			margin: 0px 0px 30px 0px;
		}
		> ol {
			clear: both;
			list-style: none;
			> li {
				margin: 2em 0;
				padding-top: 0px;
				display: block;
				position: relative;
				counter-increment: inst;
				padding-inline-start: 40px;
				&:before {
					content: counter(inst);
					margin-left: -20px;
					margin-top: -5px;
					left: 0%;
					position: absolute;
					color: ${colors.primaryBlack};
					border: 1px solid ${colors.primaryBlack};
					border-radius: 50%;
					padding: 15px;
					height: 50px;
					width: 50px;
					text-align: center;
					font-size: 110%;
				}
				@media (min-width: 768px) {
					padding-top: 1em;
				}
				@media (min-width: 1150px) {
					padding-top: 3em;
				}
			}
		}
	}
`

export const MobileWrapper = styled.div`
	margin: 20px;
	@media (min-width: 768px) {
		margin: auto;
	}
`

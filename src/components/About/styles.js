import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const AboutWrapper = styled.div`
	color: ${colors.black};
	background: ${colors.off_primary};
`

export const AboutText = styled.span`
	margin: auto;
	max-width: 300px;
	display: block;
	padding: 65% 0px;
	text-transform: none;
	text-align: center;
	> p > em {
		font-weight: 500;
	}
	@media (min-width: 768px) {
		padding: 200px 0px;
		max-width: 750px;
	}
	@media (min-width: 1150px) {
		padding: 200px 0px;
		max-width: 800px;
	}
	> button {
		margin: 20px auto;
		background: none;
		border: 1px solid ${colors.primaryBlack};
		padding: 10px 80px;
		text-transform: inherit;
		&:hover {
			background: ${colors.primaryBlack};
			color: ${colors.white};
		}
	}
`

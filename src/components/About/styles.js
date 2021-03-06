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
	padding: 150px 0px;
	text-align: center;
	@media (min-width: 768px) {
		padding: 200px 0px;
		max-width: 650px;
	}
	@media (min-width: 1150px) {
		padding: 200px 0px;
		max-width: 650px;
	}
	> button {
		margin: 20px auto;
	}
`

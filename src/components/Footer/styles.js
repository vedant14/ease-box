import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const FooterWrapper = styled.div`
	background: ${colors.washedGrey};
	margin-top: 50px;
	height: 20vh;
	display: flex;
	@media screen and (min-width: 768px) {
		margin-top: 50px;
		height: 20vh;
	}
	> div {
		margin: auto;
	}
`

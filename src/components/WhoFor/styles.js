import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const WhoForWrapper = styled(Container)`
	> h1 {
		text-align: center;
		margin-bottom: 30px;
	}
	> h4 {
		background-color: ${colors.primary};
		text-align: center;
		margin: 30px 0px;
		padding: 30px;
		color: ${colors.washedGrey};
		@media (min-width: 768px) {
			padding: 40px;
		}
		@media (min-width: 1024px) {
			padding: 50px 100px;
			line-height: 25px;
		}
	}
	> div > ul {
		padding-inline-start: 10px;
		list-style-type: "-";
		> li {
			padding-inline-start: 30px;
			margin: 20px auto;
		}
	}
`

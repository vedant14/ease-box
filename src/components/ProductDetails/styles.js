import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const DetailsWrapper = styled(Container)`
	margin-top: 80px;
	border-top: 1px solid ${colors.secondary};
	padding-top: 60px;
	> h2 {
		text-align: center;
	}
	> table {
		margin: 20px auto;
		width: 100%;

		border: 1px solid black;
		> tr > td {
			border: 0.5px solid ${colors.washedBlack};
			padding: 10px;
		}
	}
`

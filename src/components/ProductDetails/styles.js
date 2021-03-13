import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const DetailsWrapper = styled(Container)`
	margin-top: 80px;
	border-top: 1px solid ${colors.secondary};
	padding-top: 60px;
	> h2 {
		text-align: center;
		margin-bottom: 30px;
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
	> div {
		display: grid;
		grid-gap: 5px;
		grid-template-columns: 1fr;
		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
		> div {
			display: flex;
			justify-content: space-between;
			padding: 5px;
			border: 1px dotted ${colors.primary};
			> h3 {
				margin: 0px 10px;
			}
		}
	}
`

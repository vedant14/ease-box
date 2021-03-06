import styled from "styled-components"
import { Container } from "react-bootstrap"
import { colors } from "../../styles/GlobalStyles"

export const BorderWrapper = styled.div`
	border-top: 1px solid ${colors.primaryBlack};
	border-bottom: 1px solid ${colors.primaryBlack};
	z-index: 5;
`

export const ApplyWrapper = styled(Container)`
	margin: 10px auto;
	padding: 22px auto;
	background: ${colors.white};
	display: grid;
	grid-template-columns: 1fr 1fr;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
	> div > span {
		color: ${colors.primary};
	}
	> div {
		margin: auto 0px;
		@media (min-width: 1024px) {
			margin: 5;
		}
	}
	> div#first {
		grid-column-start: 1;
		grid-column-end: 3;
		@media (min-width: 1024px) {
			grid-column-start: 1;
			grid-column-end: 2;
		}
	}
`

export const ApplyButton = styled.button`
	box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
	border: none;
	margin: 15px 0px;
	width: fit-content;
	grid-column-start: 1;
	grid-column-end: 3;
	@media (min-width: 1024px) {
		margin: 10px 0px;
		grid-column-start: 4;
		grid-column-end: 5;
	}
	> h3 {
		color: ${colors.white};
		padding: 18px 40px;
		margin: 0 auto;
		text-transform: capitalize;
	}
`

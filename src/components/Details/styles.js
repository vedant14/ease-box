import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const DetailsWrapper = styled(Container)`
	border: 1px solid ${colors.primary};
	display: grid;
	grid-template-columns: 1fr;
	@media (min-width: 768px) {
		grid-template: 3fr / 1fr 2fr;
	}
	> div:first-child {
		margin: 60px 20px 00px 20px;
		text-align: center;
		@media (min-width: 768px) {
			text-align: left;
			padding-left: 30px;
			margin: auto;
		}
		@media (min-width: 1024px) {
			padding-left: 50px;
		}
	}
	> div:last-child {
		> ul {
			padding-inline-start: 50px;
			> li {
				margin: 30px 10px 30px 0px;
			}
		}
		@media (min-width: 768px) {
			margin: 30px auto;
			> ul {
				padding-inline-start: 100px;
				> li {
					margin: 30px 0;
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

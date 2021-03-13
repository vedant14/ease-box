import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const DetailsWrapper = styled(Container)`
	border: 3px solid ${colors.primary};
	> div:first-child {
		margin: 30px auto 10px auto;
		text-align: center;
		width: fit-content;
		border-bottom: 2px solid ${colors.secondary};
		@media (min-width: 768px) {
			text-align: left;
			margin: 50px auto 10px auto;
		}
	}
	> div:last-child {
		margin-top: 30px;
		margin-bottom: 50px;
		ul {
			padding: 0px 10px 0px 20px;
			> li {
				margin: 20px 0px;
				color: ${colors.primaryBlack};
			}
		}
		@media (min-width: 768px) {
			margin-top: 60px;
			margin-bottom: 100px;
			ul {
				padding: 0px 100px;
				> li {
					margin: 40px 0px;
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

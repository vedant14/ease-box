import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const DetailsWrapper = styled(Container)`
	border: 3px solid ${colors.primary};
	> div:first-child {
		margin: 50px auto 10px auto;
		text-align: center;
		width: fit-content;
		border-bottom: 1px solid ${colors.washedGrey};
		@media (min-width: 768px) {
			text-align: left;
		}

	> div:last-child {
		@media (min-width: 768px) {
			margin: 30px 0px;
		}
		@media (min-width: 1150px) {
			margin: 0px 0px 30px 0px;
		}
		> ol {
			clear: both;
			> li {
				margin: 2em 0;
				padding-top: 0px;
				display: block;
				position: relative;
				counter-increment: inst;
				padding-inline-start: 40px;
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

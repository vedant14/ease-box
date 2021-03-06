import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const FooterWrapper = styled.div`
	margin-top: 50px;
	overflow: hidden;
	> img {
		max-width: 100%;
		margin-bottom: -5px;
		@media screen and (min-width: 768px) {
			margin-right: 0px;
			margin-left: 200px;
		}
	}
	> div {
		background: ${colors.off_primary};
		@media screen and (min-width: 768px) {
		}
		> div {
			padding: 50px 20px;
			display: grid;
			margin: auto;
			grid-template-columns: 1fr;
			grid-gap: 5px;
			@media (min-width: 768px) {
				padding: 50px 0px;
				grid-template-columns: 1fr 1fr;
			}
			> div:first-child {
				border-top: 5px solid ${colors.primaryBlack};
				@media (min-width: 768px) {
					border-top: none;
					border-right: 5px solid ${colors.primaryBlack};
				}
				> ul {
					padding-inline-start: 0px;
					> li {
						color: ${colors.primaryBlack};
						display: flex;
						margin: 10px 0px;
						> h3 {
							margin: 0px 10px 0px 0px;
						}
						> h4 {
							margin: 0px;
							text-decoration: underline;
						}
					}
				}
			}
			> div:last-child {
				margin: auto;
				text-align: center;
				> img {
					width: 300px;
					margin-bottom: 10px;
				}
			}
		}
	}
`

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
	background: ${colors.off_primary};
	@media screen and (min-width: 768px) {
	}
	> div {
		padding: 50px 20px;
		display: grid;
		margin: auto;
		grid-template-columns: 1fr;
		grid-gap: 5px;
		grid-template-areas: "img" "link";
		@media (min-width: 768px) {
			padding: 50px 0px;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: "link img";
		}
		> div:first-child {
			grid-area: link;
			border-top: 5px solid ${colors.primaryBlack};
			margin: 10px auto;
			@media (min-width: 768px) {
				margin: auto 0px;
				border-top: none;
				border-right: 5px solid ${colors.primaryBlack};
			}
			> ul {
				padding-inline-start: 0px;
				margin-top: 30px;
				@media (min-width: 768px) {
					margin-top: 0px;
				}
				> li {
					color: ${colors.primaryBlack};
					display: flex;
					margin: 10px 0px;
					> h3 {
						margin: 0px 10px 0px 0px;
					}
					> h4 {
						margin: 0px;
						> a {
							text-decoration: underline;
							color: ${colors.primaryBlack};
							&:hover {
								color: ${colors.primary};
							}
						}
					}
				}
			}
		}
		> div:last-child {
			grid-area: img;
			margin: auto;
			text-align: center;
			> a {
				> h3 {
					color: ${colors.primaryBlack};
				}
				> img {
					width: 200px;
					padding-bottom: 10px;
					@media (min-width: 768px) {
						width: 200px;
					}
				}
			}
		}
	}
`

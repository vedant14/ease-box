import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const AuthorWrapper = styled(Container)`
	> div {
		margin: 40px 0px;
		display: grid;
		grid-template-columns: 1fr;
		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
		> div:first-child {
			> img {
				position: relative;
				width: 100%;
				padding: 20px;
			}
		}
		> div:last-child {
			margin: 30px 0px;
			> h1,
			p {
				margin: 0px 0px 20px 0px;
			}
			@media (min-width: 768px) {
				margin: 0px 30px;
				> h1,
				p {
					margin: 0px 0px 25px 0px;
				}
				> h1 {
					font-size: 30px;
				}
			}
			@media (min-width: 1024px) {
				> h1 {
					font-size: 40px;
				}
			}
		}
	}
`

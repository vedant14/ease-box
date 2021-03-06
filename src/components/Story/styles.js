import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const StoryWrapper = styled(Container)`
	margin: 20px auto;
	> ul {
		padding-inline-start: 0px;
		list-style-type: none !important;
		> li {
			border-left: 5px solid #635c60;
			margin: 50px auto;
			padding-inline-start: 30px;
			color: ${colors.primary};
			> ul {
				padding-inline-start: 0px;
				list-style-type: none !important;
				> li {
					color: ${colors.washedBlack};
					margin: 8px 0px;
				}
			}
		}
	}
`

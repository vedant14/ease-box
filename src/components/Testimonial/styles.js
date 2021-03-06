import styled from "styled-components"

export const TestimonialWrapper = styled.div`
	padding: auto 150px;
`
export const TestimonialCard = styled.div`
	margin: 30px auto;
	display: grid !important;
	grid-template-columns: 1fr 1fr;
	grid-template: 2fr / 1fr 1fr;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-template: 4fr / 1fr 3fr;
	}
	> img {
		max-width: 100px;
		margin: 30px auto;
		@media screen and (min-width: 768px) {
			margin: auto;
			grid-row-start: 1;
			grid-row-end: 3;
		}
	}
	> h3 {
		margin: auto;
		@media screen and (min-width: 768px) {
			margin: auto 0px;
		}
	}
	> p {
		grid-column-start: 1;
		grid-column-end: 3;
		margin: 20px 20px 20px 0px;
		@media screen and (min-width: 768px) {
			grid-column-start: 2;
			grid-column-end: 4;
		}
	}
`

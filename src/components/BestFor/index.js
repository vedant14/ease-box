import React from "react"
import { DetailsWrapper, MobileWrapper } from "./styles"

export function BestFor({ text }) {
	return (
		<MobileWrapper>
			<DetailsWrapper>
				<div>
					<h1>Best for</h1>
				</div>
				<div
					dangerouslySetInnerHTML={{
						__html: text.childMarkdownRemark.html,
					}}
				/>
			</DetailsWrapper>
		</MobileWrapper>
	)
}

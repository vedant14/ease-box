import React from "react"
import { LayoutWrapper } from "./styles"
import { GlobalStyles } from "../../styles/GlobalStyles"
export function Layout({ children }) {
	return (
		<div>
			<GlobalStyles />
			<LayoutWrapper>
				<main>{children}</main>
			</LayoutWrapper>
		</div>
	)
}

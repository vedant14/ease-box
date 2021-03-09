import React from "react"
import { LayoutWrapper } from "./styles"
import { Header } from "../Header"
import { FAQ } from "../FAQ"
import { Footer } from "../Footer"
import { Details } from "../Details"
import { GlobalStyles } from "../../styles/GlobalStyles"
export function Layout({ children }) {
	return (
		<div>
			<GlobalStyles />
			<LayoutWrapper>
				<Header />
				<main>{children}</main>
				<Details />
				<FAQ />
				<Footer />
			</LayoutWrapper>
		</div>
	)
}

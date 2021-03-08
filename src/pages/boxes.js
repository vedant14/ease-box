import React from "react"
import { Layout, ProductList, SEO, Header } from "../components"

const BoxesPage = () => {
	return (
		<Layout color>
			<SEO title="Ease Box" description="Move-in with Convenience" />
			<Header />
			<ProductList />
		</Layout>
	)
}

export default BoxesPage

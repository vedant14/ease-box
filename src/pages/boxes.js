import React from "react"
import { Layout, ProductList, SEO } from "../components"

const BoxesPage = () => {
	return (
		<Layout box faq>
			<SEO title="Ease Box" description="Move-in with Convenience" />
			<ProductList />
		</Layout>
	)
}

export default BoxesPage

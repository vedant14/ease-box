import React from "react"
import { Layout, SEO, Hero, About, Boxes } from "../components"

const IndexPage = () => {
	return (
		<Layout box faq>
			<SEO title="Ease Box" description="Move-in with Convenience" />
			<Hero />
			<About />
			<Boxes />
		</Layout>
	)
}

export default IndexPage

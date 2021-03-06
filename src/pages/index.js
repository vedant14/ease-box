import React from "react"
import {
	Layout,
	Header,
	SEO,
	Hero,
	About,
	Details,
	FAQ,
	Footer,
} from "../components"

const IndexPage = () => {
	return (
		<Layout color>
			<SEO title="Ease Box" description="Move-in with Convenience" />
			<Header />
			<Hero />
			<About />
			<Details />
			<FAQ />
			<Footer />
		</Layout>
	)
}

export default IndexPage

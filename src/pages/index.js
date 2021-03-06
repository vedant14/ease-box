import React from "react"
import {
	Layout,
	Header,
	SEO,
	Hero,
	About,
	Boxes,
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
			<Boxes />
			<Details />
			<FAQ />
			<Footer />
		</Layout>
	)
}

export default IndexPage

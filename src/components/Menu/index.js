import React from "react"
import { Nav, BoxLink } from "./styles"
import Scrollspy from "react-scrollspy"
import AnchorLink from "react-anchor-link-smooth-scroll"
import BoxVector from "../../images/box.svg"

export function Menu({ items }) {
	return (
		<Nav>
			<Scrollspy
				items={items.map(item => item.link)}
				currentClassName="is-current"
				offset={-64}
			>
				{items.map(item => (
					<li key={item.id}>
						<AnchorLink href={`#${item.link}`}>{item.name}</AnchorLink>
					</li>
				))}
			</Scrollspy>
			<BoxLink to="/boxes">
				<h4>Shop Boxes</h4>
				<img src={BoxVector} alt="date" />
			</BoxLink>
		</Nav>
	)
}

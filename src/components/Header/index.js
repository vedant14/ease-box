import React, { useState } from "react"
import { HeaderWrapper, Logo } from "./styles"
import { Menu } from "../Menu"
import { Hamburger } from "../Hamburger"
import { MobileMenu } from "../MobileMenu"
import { useSiteConfigQuery } from "../../hooks/useSiteConfigQuery"

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const siteConfig = useSiteConfigQuery()
	return (
		<HeaderWrapper>
			<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Logo to="/">
				<h1>LOGO</h1>
			</Logo>
			<Menu items={siteConfig.menu} />
			<MobileMenu
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				items={siteConfig.menu}
			/>
		</HeaderWrapper>
	)
}

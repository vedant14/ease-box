import React, { useState } from "react"
import { HeaderWrapper, Logo } from "./styles"
import { Menu } from "../Menu"
import { Hamburger } from "../Hamburger"
import { MobileMenu } from "../MobileMenu"
import { useSiteConfigQuery } from "../../hooks/useSiteConfigQuery"
import LogoImage from "../../images/Logo.svg"

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const siteConfig = useSiteConfigQuery()
	return (
		<HeaderWrapper>
			<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Logo to="/">
				<img src={LogoImage} alt="Logo" />
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

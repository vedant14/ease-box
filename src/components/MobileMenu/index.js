import React from "react"
// Styles
import { OverrideGlobalStyle, NavScroll, Wrapper, BoxLink } from "./styles"
import AnchorLink from "react-anchor-link-smooth-scroll"
import BoxVector from "../../images/box.svg"

export function MobileMenu({ menuOpen, items, setMenuOpen }) {
  return (
    <>
      <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <NavScroll
          items={items.map(item => item.link)}
          currentClassName="is-current-mobile"
          offset={-64}
        >
          {items.map(item => (
            <li key={item.id} onClick={() => setMenuOpen(false)}>
              <AnchorLink href={`#${item.link}`}>{item.name}</AnchorLink>
            </li>
          ))}
          <li>
            <BoxLink to="/boxes" onClick={() => setMenuOpen(false)}>
              Shop Boxes
              <img src={BoxVector} alt="date" />
            </BoxLink>
          </li>
        </NavScroll>
      </Wrapper>
    </>
  )
}

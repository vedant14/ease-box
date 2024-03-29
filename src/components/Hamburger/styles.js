import styled from "styled-components"

export const HamburgerIcon = styled.div`
  display: block;
  width: 30px;
  z-index: 1000;
  cursor: pointer;

  :after,
  :before,
  div {
    background-color: black;
    border-radius: 2px;
    content: "";
    display: block;
    height: 5px;
    margin: 5px 0;
    transition: all 0.2s ease-in-out;
  }

  :before {
    transform: ${props =>
      props.menuOpen ? "translateY(10px) rotate(45deg)" : ""};
  }

  :after {
    transform: ${props =>
      props.menuOpen ? "translateY(-10px) rotate(-45deg)" : ""};
  }

  div {
    transform: ${props => (props.menuOpen ? "scale(0)" : "")};
  }

  @media screen and (min-width: 728px) {
    display: none;
  }
`

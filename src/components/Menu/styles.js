import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Nav = styled.ul`
  display: none;
  width: 100%;
  list-style-type: none;
  padding: 0;
  text-transform: uppercase;
  margin: auto auto auto 0px;
  a {
    text-decoration: none;
    color: ${colors.washedBlack};
  }
  > ul {
    margin: auto 0px;
  }
  > ul > li {
    display: inline-block;
    margin-right: 80px;
    transition: opacity 0.5s ease;
    cursor: pointer;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;

    .active {
      font-weight: 800;
    }

    :last-child {
      margin-right: 0;
    }

    :hover {
      color: ${colors.primaryBlack};
    }
  }
  > button {
    margin: auto 100px auto auto;
    border: none;
    background: none;
    display: flex;
    > h4 {
      margin: 0;
    }
    > img {
      margin: auto 10px;
    }
    &:hover {
      > img {
        animation-iteration-count: infinite;
        animation: shake 0.5s;
      }
    }
    @keyframes shake {
      0% {
        transform: translate(1px, 1px) rotate(0deg);
      }
      10% {
        transform: translate(-1px, -2px) rotate(-1deg);
      }
      20% {
        transform: translate(-3px, 0px) rotate(1deg);
      }
      30% {
        transform: translate(3px, 2px) rotate(0deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(1deg);
      }
      50% {
        transform: translate(-1px, 2px) rotate(-1deg);
      }
      60% {
        transform: translate(-3px, 1px) rotate(0deg);
      }
      70% {
        transform: translate(3px, 1px) rotate(-1deg);
      }
      80% {
        transform: translate(-1px, -1px) rotate(1deg);
      }
      90% {
        transform: translate(1px, 2px) rotate(0deg);
      }
      100% {
        transform: translate(1px, -2px) rotate(-1deg);
      }
    }
  }
  @media screen and (min-width: 1150px) {
    display: flex;
  }
`

import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../styles/GlobalStyles"
export const HeaderWrapper = styled.header`
  background: ${colors.nav};
  position: -webkit-sticky; /* Safari */
  position: sticky;
  margin: auto;
  top: 0;
  z-index: 999;
  padding: 10px 20px;
  display: flex;
  @media screen and (min-width: 1150px) {
    min-height: 100px;
  }
  > div:first-child {
    margin: 10px 20px;
  }
`

export const Logo = styled(Link)`
  margin: auto 30px auto auto;
  > img {
    width: 80px;
  }
  @media screen and (min-width: 728px) {
    margin: auto 50px auto 100px;
  }
`

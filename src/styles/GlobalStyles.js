import { createGlobalStyle } from "styled-components"

export const colors = {
  primaryBlack: "#000000",
  washedBlack: "#635C60",
  primary: "#AC3571",
  off_primary: "#A596FF",
  secondary: "#256A61",
  washedGrey: "#EBEEF1",
  white: "#FFFFFF",
  nav: "#EFEDF3",
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }


  body {
    background-color: ${colors.white}; 
    margin: 0;
    padding: 0;
  }

  main {
    margin-right: auto;
    margin-left: auto;
    min-height: 80vh;
  }


  h1{
    font-family: 'Epilogue', sans-serif;    
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-transform: capitalize;
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }

  h2{
    font-family: 'Epilogue', sans-serif;    
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }

  h3{
    font-family: 'Epilogue', sans-serif;    
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  h4{
    font-family: 'Epilogue', sans-serif;    
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    @media screen and (min-width: 768px) {
      font-weight: 500;
      font-size: 18px;
    }
  }

  small{
    font-family: Poppins;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  small{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 16px;
  }

  a {
    text-decoration: none;
    &:hover {
     text-decoration: none; 
    }
  }

  li {
    color: ${colors.washedBlack};
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    > strong{
      color: ${colors.primaryBlack};
    }
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  .is-current{
    > a {
      color: ${colors.primaryBlack} !important;
    }
  }
  
  .is-current-mobile{
    > a {
      color: ${colors.white} !important;
      &:after {
        content: " •"
      }
    }
  }

  .mob-buy-button{
    background: ${colors.white};
    box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
    border: none;
    > h4 {
      color: ${colors.primary};
      font-size: 24px;
      padding: 10px 9px;
      margin: 0px;
      text-transform: capitalize;
    }
  }

 .slick-arrow{
  display: none !important;
 }
 .slick-dots{
  >li {
    color: black;
  }
 }
`

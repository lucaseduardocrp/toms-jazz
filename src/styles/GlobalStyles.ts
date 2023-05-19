import { createGlobalStyle, css } from "styled-components";

export const flexCSS = css`
  display: flex;
  align-items: center;
`;

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  html{
    min-height: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    background: linear-gradient(90deg, #FFE7D1 0%, #FFF2E6 100%);
    padding: 0 3rem;
  }

  header, main, footer{
    border-color: var(--black);
    border-style: solid;
    border-width: 0 1px 1px 1px;
  }

  section{
    min-height: 80vh;
  }

  *, button, input{
    border: 0;
    background: none;
  }

  span{
    color: var(--primary);
  }

  a{
    color: var(--black);
    text-decoration: none;
  }
  
  :root{
    --primary: #ED4D1B;
    --secundary: #FF9A3C;
    --grey: #BFBFBF;
    --black: #000;
    --white: #ffffff;

    --h1-font: 4rem;
    --h2-font: 4.5rem;
    --h3-font: 2.5rem;
    --h4-font: 3rem;
    --p-font: 2rem;
    --sm-font: 1.6rem;
  }

  @media(max-width: 980px){
    :root{
      --h1-font: 2.5rem;
      --h2-font: 3.5rem;
      --p-font: 1.6rem;
      --sm-font: 1.6rem;
    }
  }
`;
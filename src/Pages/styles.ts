import styled from 'styled-components';
import { flexCSS } from '../styles/GlobalStyles';

export const Main = styled.main`
  width: 100%;

  h2{
    font-size: var(--h2-font);
    font-weight: 900;
  }

  .home{
    border-bottom: 1px solid var(--black);

    p{
      font-size: var(--p-font);
      font-weight: 500;
    }

    .grid{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
  
      .homeText{
        ${flexCSS}
        align-items: flex-start;
        flex-direction: column;
        padding: 8rem 13%;
        gap: 3rem;
  
        .arrow{
          width: 40%;
          margin-left: 16rem;
        }
      }
  
      img{
        max-width: 100%;
        object-fit: cover;
      }
    }
  }

  .cursosCard{
    ${flexCSS}
    justify-content: center;
    flex-direction: column;
    gap: 4rem;

    .cardGrid{
      ${flexCSS}
      justify-content: center;
      flex-wrap: wrap;
      gap: 3rem;
      margin-top: -16rem;

      .alternativeCard{
        background: var(--secundary);
        top: 2rem;
      }
    }
    
    .cursoText{
      text-align: center;
      padding-bottom: 4rem;
  
      >h2{
        margin: 20rem 0 4rem 0;
        letter-spacing: 2px;
      }
    }
  }

  @media(max-width: 1024px){
    .cursosCard{
      .cardGrid{
        margin-top: -6rem;
      }
  
      .cursoText{
        h2{
          margin-top: 2rem;
        }
      }  
    }
  }
`;
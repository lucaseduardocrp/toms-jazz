import styled from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  padding: 1rem;
  border-bottom: 1px solid var(--black);


  nav{
    ${flexCSS}
    justify-content: space-between;
    padding: 1.5rem 6%;

    h1{
      font-size: var(--h1-font);
      font-weight: 900;
      color: var(--black);
    }

    ul{
      ${flexCSS}
      gap: 5rem;

      a{
        position: relative;
        font-size: var(--p-font);
        font-weight: 500;
        transition: all .30s ease;

        &::after{
          content: '';
          position: absolute;
          display: block;
          height: 2px;
          width: 0;
          bottom: 0;
          left: 0;
          background: var(--black);
          transition: all .30s ease;
        }

        &:hover::after{
          width: 100%;
        }
      }
    }

    .mobileMenu{
      display: none;
      z-index: 1000;
    }
  }
  
  @media(max-width: 980px){
    nav{
      padding: 1rem 2%;

      .Open{
        width: 100%;
        padding: 8rem 0 4rem 0;
        text-align: center;
        line-height: 2.5;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background: var(--primary);
        border-bottom: 4px solid var(--black);

        a{
          font-size: 2.5rem;
        }
      }
       
      .Close{
        display: none;
      }

      .mobileMenu{
        display: block;
      }

      .subscrible{
        width: 13rem;
        padding: 0.5rem;
      }
    }
  }
`;


import styled from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';

export const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  gap: 2rem;
  padding: 4rem 4rem;
  text-align: center;

  .footerText{
    p{
      font-size: var(--p-font);
      padding-top: 1rem;
      line-height: 1.6;
    }
  }

  form{
    ${flexCSS}
    flex-direction: column;
    gap: 1rem;

    label{
      font-size: var(--p-font);
    }
    input{
      background: var(--white);
      width: 80%;
      height: 3rem;
      border: 1px solid var(--black);
      box-shadow: 2px 2px var(--black);
    }
  }

  .navFooter{
    line-height: 2;
    font-size: var(--p-font);
  }
`;

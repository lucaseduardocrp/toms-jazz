import styled from 'styled-components';

export const Button = styled.button`
  width: 20rem;
  padding: 1rem;
  background: var(--primary);
  border: 2px solid var(--black);
  box-shadow: 3px 3px var(--black);
  font-size: var(--sm-font);
  font-weight: 700;
  transition: all .30s ease;

  &:hover{
    transform: scale(0.95);
  }
`;

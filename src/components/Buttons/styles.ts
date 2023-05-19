import styled from 'styled-components';

export const Button = styled.button`
  width: 20rem;
  padding: 1rem;
  background: var(--primary);
  border: 2px solid var(--black);
  box-shadow: 3px 3px var(--black);
  font-size: var(--p-font);
  font-weight: 500;
  transition: all .30s ease;

  &:hover{
    transform: scale(0.95);
  }
`;

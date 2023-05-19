import styled from "styled-components";

export const Container = styled.div`
  width: 270px;
  height: 306px;
  padding: 2rem;
  background: var(--primary);
  border: 3px solid var(--black);
  box-shadow: 3px 3px var(--black);
  position: relative;

  h3{
    font-size: var(--h3-font);
    margin: 1.6rem 0;
  }

  p{
    font-size: var(--sm-font);
  }

  .arrowRight{
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
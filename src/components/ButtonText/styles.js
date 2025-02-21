import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  height: 3.6rem;
  border: 0;
  font-weight: 500;
  text-transform: uppercase;

  &:disabled {
    opacity: 0.5;
  }
`;

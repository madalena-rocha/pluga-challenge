import styled from "styled-components";

export const Container = styled.button`
  padding: 0.8rem;

  border: 0;

  font-weight: 500;
  text-transform: uppercase;

  &:disabled {
    opacity: 0.5;
  }
`;

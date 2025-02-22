import styled from "styled-components";

export const Container = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BLUE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 4rem;

  font-weight: 500;
  text-transform: uppercase;

  padding: 1.6rem;
`;

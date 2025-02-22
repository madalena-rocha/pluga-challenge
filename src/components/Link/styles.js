import styled from "styled-components";

export const Container = styled.a`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 4rem;
  font-weight: 500;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
`;

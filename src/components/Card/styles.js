import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 12px;

  max-width: 30rem;
  padding: 3.2rem;

  > button {
    width: 100%;
  }
`;

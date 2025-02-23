import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 12px;

  max-width: 26.4rem;
  height: fit-content;
  padding: 3.2rem;

  img {
    width: 80%;
  }

  button {
    width: 100%;
  }
`;

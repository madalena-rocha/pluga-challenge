import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  gap: 3.2rem;

  padding: 3.2rem;

  > header {
    grid-area: header;
  }
`;

export const Cards = styled.main`
  grid-area: content;

  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem 6.4rem;
  justify-content: center;
`;

export const Pagination = styled.footer`
  grid-area: footer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  > button {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > span {
    text-transform: uppercase;
  }
`;

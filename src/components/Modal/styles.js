import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 12px;
  padding: 4.8rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > svg {
    position: absolute;
    top: 4.8rem;
    right: 4.8rem;
    cursor: pointer;
  }

  > h2 {
    text-transform: uppercase;
  }
`;

export const Tool = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .tool-info {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > p {
      text-transform: uppercase;
      text-align: center;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      padding: 1.6rem;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

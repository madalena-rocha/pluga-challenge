import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Container = styled.div`
  width: 80%;
  max-width: 1152px;
  max-height: 90vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 12px;
  padding: 3.2rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  > svg {
    position: absolute;
    top: 3.2rem;
    right: 3.2rem;
    cursor: pointer;
  }

  > h2 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const Tool = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 2.4rem;

  > div:nth-child(1) {
    width: 24rem;
  }

  .tool-info {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > span {
      text-transform: uppercase;
      text-align: center;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      padding: 1.6rem;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2.4rem;

    .tool-info {
      width: 100%;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
  justify-content: center;

  > div {
    background-color: transparent;
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    pointer-events: none;
  }
`;

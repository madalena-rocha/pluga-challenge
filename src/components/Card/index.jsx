import { Container } from "./styles";

export function Card({ icon, name }) {
  return (
    <Container>
      <img src={icon} alt="" />
      <button>{name}</button>
    </Container>
  );
}

import { Container } from "./styles";

export function Icon({ icon }) {
  return (
    <Container>
      <img src={icon} alt="" />
    </Container>
  );
}

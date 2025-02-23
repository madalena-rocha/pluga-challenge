import { Container } from "./styles";

export function Icon({ icon, name }) {
  return (
    <Container>
      <img src={icon} alt={name} />
    </Container>
  );
}

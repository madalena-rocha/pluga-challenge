import { Container } from "./styles";

export function Link({ href, title }) {
  return (
    <Container href={href} target="_blank">
      {title}
    </Container>
  );
}

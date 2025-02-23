import { Container } from "./styles";

export function Link({ href, title }) {
  return (
    <Container href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </Container>
  );
}

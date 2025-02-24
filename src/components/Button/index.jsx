import { Container } from "./styles";

export function Button({ name, children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {name || children}
    </Container>
  );
}

import { Container } from "./styles";

export function Button({ name, children, loading = false, onClick, ...rest }) {
  return (
    <Container type="button" disabled={loading} onClick={onClick} {...rest}>
      {loading ? "Carregando..." : name || children}
    </Container>
  );
}

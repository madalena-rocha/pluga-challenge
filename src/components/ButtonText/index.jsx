import { Container } from "./styles";

export function ButtonText({ name, loading = false, setIsModalOpen, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      onClick={() => setIsModalOpen(true)}
      {...rest}
    >
      {loading ? "Carregando..." : name}
    </Container>
  );
}

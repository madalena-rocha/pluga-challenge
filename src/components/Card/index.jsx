import { Icon } from "../../components/Icon";

import { Container } from "./styles";

export function Card({ icon, name }) {
  return (
    <Container>
      <Icon icon={icon} />
      <button>{name}</button>
    </Container>
  );
}

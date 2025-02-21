import { Icon } from "../../components/Icon";
import { ButtonText } from "../../components/ButtonText";

import { Container } from "./styles";

export function Card({ icon, name }) {
  return (
    <Container>
      <Icon icon={icon} />
      <ButtonText name={name} />
    </Container>
  );
}

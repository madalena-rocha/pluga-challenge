import { Icon } from "../../components/Icon";
import { ButtonText } from "../../components/ButtonText";

import { Container } from "./styles";

export function Card({ icon, name, setIsModalOpen }) {
  return (
    <Container>
      <Icon icon={icon} />
      <ButtonText name={name} setIsModalOpen={setIsModalOpen} />
    </Container>
  );
}

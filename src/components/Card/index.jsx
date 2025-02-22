import { Icon } from "../../components/Icon";
import { Button } from "../../components/Button";

import { Container } from "./styles";

export function Card({ icon, name, setIsModalOpen }) {
  return (
    <Container>
      <Icon icon={icon} />
      <Button name={name} setIsModalOpen={setIsModalOpen} />
    </Container>
  );
}

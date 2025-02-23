import { Icon } from "../../components/Icon";
import { Button } from "../../components/Button";

import { Container } from "./styles";

export function Card({ tool, openModal }) {
  return (
    <Container>
      <Icon icon={tool.icon} name={tool.name} />
      <Button name={tool.name} onClick={() => openModal(tool.app_id)} />
    </Container>
  );
}

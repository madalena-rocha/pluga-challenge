import { Icon } from "../../components/Icon";
import { Button } from "../../components/Button";

import { Container } from "./styles";

export function Card({ tool, openModal }) {
  if (!tool) return null;

  return (
    <Container>
      <Icon icon={tool.icon} />
      <Button name={tool.name} onClick={() => openModal(tool.app_id)} />
    </Container>
  );
}

import { X } from "@phosphor-icons/react";

import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Card } from "../../components/Card";

import { Container, Tool, Cards } from "./styles";

export function Modal({ setIsMenuOpen }) {
  return (
    <Container>
      <X size={24} onClick={() => setIsMenuOpen(false)} />

      <Tool>
        <Icon icon="https://assets.pluga.co/apps/icons/omie/omie-icon.svg"></Icon>

        <div className="tool-info">
          <p>Omie</p>

          <Link href="https://pluga.co/ferramentas/omie/" title="Acessar" />
        </div>
      </Tool>

      <h2>Últimas ferramentas visualizadas</h2>

      <Cards>
        <Card
          icon="https://assets.pluga.co/apps/icons/omie/omie-icon.svg"
          name="Omie"
        ></Card>

        <Card
          icon="https://assets.pluga.co/apps/icons/omie/omie-icon.svg"
          name="Omie"
        ></Card>

        <Card
          icon="https://assets.pluga.co/apps/icons/omie/omie-icon.svg"
          name="Omie"
        ></Card>
      </Cards>
    </Container>
  );
}

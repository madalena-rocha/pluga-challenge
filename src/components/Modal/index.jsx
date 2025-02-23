import { X } from "@phosphor-icons/react";

import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Card } from "../../components/Card";

import { Container, Tool, Cards } from "./styles";

export function Modal({ tool, onClose }) {
  return (
    <Container>
      <X size={24} onClick={onClose} />

      <Tool>
        <Icon icon={tool.icon}></Icon>

        <div className="tool-info">
          <p>{tool.name}</p>

          <Link href={tool.link} title="Acessar" />
        </div>
      </Tool>

      <h2>Últimas ferramentas visualizadas</h2>

      <Cards>
        <Card
          tool={{
            icon: "https://assets.pluga.co/apps/icons/omie/omie-icon.svg",
            name: "Omie",
          }}
        />
        <Card
          tool={{
            icon: "https://assets.pluga.co/apps/icons/omie/omie-icon.svg",
            name: "Omie",
          }}
        />
        <Card
          tool={{
            icon: "https://assets.pluga.co/apps/icons/omie/omie-icon.svg",
            name: "Omie",
          }}
        />
      </Cards>
    </Container>
  );
}

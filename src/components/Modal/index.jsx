import { X } from "@phosphor-icons/react";

import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Card } from "../../components/Card";

import { Container, Tool, Cards } from "./styles";

export function Modal({ tool, recentlyViewed, onClose }) {
  if (!tool) return null;

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

      {recentlyViewed.length > 0 && (
        <Cards>
          {recentlyViewed.map((recentTool) => (
            <Card
              key={recentTool.app_id}
              tool={recentTool}
              openModal={() => {}}
            />
          ))}
        </Cards>
      )}
    </Container>
  );
}

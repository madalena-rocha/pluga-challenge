import { useEffect } from "react";

import { FiX } from "react-icons/fi";

import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Card } from "../../components/Card";

import { Overlay, Container, Tool, Cards } from "./styles";

export function Modal({ tool, recentlyViewed, onClose }) {
  useEffect(() => {
    if (tool) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [tool]);

  if (!tool) return null;

  return (
    <>
      <Overlay onClick={onClose} />

      <Container>
        <FiX size={24} onClick={onClose} />

        <Tool>
          <Icon icon={tool.icon} name={tool.name}></Icon>

          <div className="tool-info">
            <span>{tool.name}</span>

            <Link href={tool.link} title="Acessar" />
          </div>
        </Tool>

        <h2>Últimas ferramentas visualizadas</h2>

        {recentlyViewed.length > 0 && (
          <Cards>
            {recentlyViewed.map((recentTool) => (
              <Card key={recentTool.app_id} tool={recentTool} />
            ))}
          </Cards>
        )}
      </Container>
    </>
  );
}

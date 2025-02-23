import { useState } from "react";

import { FiSearch } from "react-icons/fi";

import { useToolsData } from "./hooks/useToolsData";

import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";

import { Container, Cards } from "./App.js";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);

  const [search, setSearch] = useState("");
  const toolsData = useToolsData(search);

  const [recentlyViewed, setRecentlyViewed] = useState([]);

  function openModal(toolId) {
    const selected = toolsData.find((tool) => tool.app_id === toolId);
    if (!selected) return;

    setSelectedTool(selected);
    setIsModalOpen(true);

    setRecentlyViewed((prev) => {
      const updatedHistory = [
        selected,
        ...prev.filter((t) => t.app_id !== toolId),
      ];

      return updatedHistory.slice(0, 3);
    });
  }

  const closeModal = () => {
    setSelectedTool(null);
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Input
        placeholder="Buscar ferramenta"
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Cards>
        {toolsData.map((tool) => (
          <Card key={tool.app_id} tool={tool} openModal={openModal} />
        ))}
      </Cards>

      {isModalOpen && (
        <Modal
          tool={selectedTool}
          recentlyViewed={recentlyViewed}
          onClose={closeModal}
        />
      )}
    </Container>
  );
}

export default App;

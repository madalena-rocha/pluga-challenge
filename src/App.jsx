import { useEffect, useState } from "react";

import { FiSearch } from "react-icons/fi";

import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";

import { Container, Cards } from "./App.js";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);

  const [toolsData, setToolsData] = useState([]);
  const [search, setSearch] = useState("");

  function openModal(toolId) {
    setIsModalOpen(true);
    setSelectedTool(toolId);
  }

  const closeModal = () => {
    setSelectedTool(null);
  };

  useEffect(() => {
    async function fetchToolsData() {
      try {
        const response = await fetch(
          "https://pluga.co/ferramentas_search.json"
        );
        const json = await response.json();

        const filteredToolsData = json.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

        setToolsData(filteredToolsData);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchToolsData();
  }, [search]);

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

      {isModalOpen && selectedTool && (
        <Modal
          tool={toolsData.find((t) => t.app_id === selectedTool)}
          onClose={closeModal}
        />
      )}
    </Container>
  );
}

export default App;

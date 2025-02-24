import { useState } from "react";

import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useToolsData } from "./hooks/useToolsData";
import { usePagination } from "./hooks/usePagination";

import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

import { Container, Search, Cards, Pagination } from "./App.js";

function App() {
  const { toolsData, setSearch } = useToolsData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const {
    currentItems: currentTools,
    totalPages,
    currentPage,
    setCurrentPage,
    goToPreviousPage,
    goToNextPage,
  } = usePagination(toolsData, 12);

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
      <Search>
        <Input
          placeholder="Buscar ferramenta"
          icon={FiSearch}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </Search>

      <Cards>
        {currentTools.map((tool) => (
          <Card key={tool.app_id} tool={tool} openModal={openModal} />
        ))}
      </Cards>

      {totalPages > 1 && (
        <Pagination>
          <Button onClick={goToPreviousPage} disabled={currentPage === 1}>
            <FiChevronLeft size={20} />
          </Button>

          <span>
            Página {currentPage} de {totalPages}
          </span>

          <Button onClick={goToNextPage} disabled={currentPage === totalPages}>
            <FiChevronRight size={20} />
          </Button>
        </Pagination>
      )}

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

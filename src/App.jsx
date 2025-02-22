import { useState } from "react";

import { FiSearch } from "react-icons/fi";

import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Input placeholder="Buscar ferramenta" icon={FiSearch} />

      <Card
        setIsModalOpen={setIsModalOpen}
        icon="https://assets.pluga.co/apps/icons/omie/omie-icon.svg"
        name="Omie"
      ></Card>

      {isModalOpen && <Modal setIsMenuOpen={setIsModalOpen} />}
    </>
  );
}

export default App;

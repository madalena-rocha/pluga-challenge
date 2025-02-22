import { useEffect, useState } from "react";

import { FiSearch } from "react-icons/fi";

import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pluga.co/ferramentas_search.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <>
      <Input placeholder="Buscar ferramenta" icon={FiSearch} />

      {data.map((item) => (
        <Card
          key={item.app_id}
          icon={item.icon}
          name={item.name}
          setIsModalOpen={setIsModalOpen}
        />
      ))}

      {isModalOpen && <Modal setIsMenuOpen={setIsModalOpen} />}
    </>
  );
}

export default App;

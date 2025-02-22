import { useEffect, useState } from "react";

import { FiSearch } from "react-icons/fi";

import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://pluga.co/ferramentas_search.json"
        );
        const json = await response.json();

        const filteredData = json.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

        setData(filteredData);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchData();
  }, [search]);

  return (
    <>
      <Input
        placeholder="Buscar ferramenta"
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
      />

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

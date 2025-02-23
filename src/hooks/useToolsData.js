import { useState, useEffect } from "react";

export function useToolsData(search) {
  const [toolsData, setToolsData] = useState([]);

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

  return toolsData;
}

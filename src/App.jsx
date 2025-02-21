import { FiSearch } from "react-icons/fi";

import { Input } from "./components/Input";

function App() {
  return (
    <>
      <Input placeholder="Buscar ferramenta" icon={FiSearch} />
      <h1>Pluga</h1>
    </>
  );
}

export default App;

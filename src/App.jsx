import { FiSearch } from "react-icons/fi";

import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

function App() {
  return (
    <>
      <Input placeholder="Buscar ferramenta" icon={FiSearch} />

      <Card
        icon="https://assets.pluga.co/apps/icons/omie/omie-icon.svg"
        name="Omie"
      ></Card>

      <Button title="Acessar" />

      <Modal />
    </>
  );
}

export default App;

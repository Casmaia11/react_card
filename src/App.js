import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/formulario";
import Time from "./componentes/Time";

const times = [
  {},
  {
    nome: "Boston Celtics",
    corPrimaria: "#0d9418",
    corSecundaria: "#ffff",
  },
  {
    nome: "Los Angeles Lakers",
    corPrimaria: "#FDB927",
    corSecundaria: "#552583",
  },
  {
    nome: "New York Knicks",
    corPrimaria: "006BB6",
    corSecundaria: "#F58426",
  },
  {
    nome: "Chicago Bulls",
    corPrimaria: "#CE1141",
    corSecundaria: "#000000",
  },
  {
    nome: "Golden State Warriors",
    corPrimaria: "#1D428A",
    corSecundaria: "#ffc72c",
  },
  {
    nome: "Miami Heat",
    corPrimaria: "#98002E",
    corSecundaria: "#F9A01B",
  },
  {
    nome: "Portland Trail Blazers",
    corPrimaria: "#E03A3E",
    corSecundaria: "#000000",
  },
];

export default function App() {
  const [torcedores, setTorcedores] = useState([]);
  const torcedorAdicionado = (torcedor) => {
    console.log(torcedor);
    setTorcedores([...torcedores, torcedor]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        torcedorCadastrado={(torcedor) => torcedorAdicionado(torcedor)}
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          torcedores={torcedores.filter(
            (torcedor) => torcedor.time === time.nome
          )}
        />
      ))}
    </div>
  );
}

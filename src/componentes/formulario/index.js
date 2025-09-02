import Areatexto from "../Textarea/Areatexto";
import "./Formulario.css";
import Lists from "../Lists";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const salve = (event) => {
    event.preventDefault();
    props.torcedorCadastrado({
      nome,
      imagem,
      time,
    });
    setNome("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={salve}>
        <h2>Preencha para criar seu card!</h2>
        <Areatexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        />
        <Areatexto
          obrigatorio={true}
          label="Imagem"
          placeholder="https://github.com/user.png"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <Lists
          obrigatorio={true}
          label="Selecione seu Time"
          itens={props.times}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
export default Formulario;

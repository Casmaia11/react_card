import Card from "../Card";
import "./Time.css";

const Time = (props) => {
  const estilos = { backgroundColor: props.corPrimaria };
  const estiloSecundario = { borderColor: props.corSecundaria };

  return props.torcedores.length > 0 ? (
    <section className="time" style={estilos}>
      <h3 style={estiloSecundario}>{props.nome}</h3>
      <div className="torcedor">
        {props.torcedores.map((torcedor) => (
          <Card
            corFundo={props.corSecundaria}
            key={torcedor.nome}
            nome={torcedor.nome}
            time={torcedor.time}
            imagem={torcedor.imagem}
          />
        ))}
      </div>
      {/* <Card /> */}
    </section>
  ) : (
    ""
  );
};

export default Time;

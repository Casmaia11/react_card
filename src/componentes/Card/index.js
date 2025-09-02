import "./Card.css";

const Card = ({ nome, time, imagem, corFundo }) => {
  return (
    <div className="card">
      <div className="cabecalho" style={{ backgroundColor: corFundo }}>
        <img src={imagem} alt={nome} />
        <div className="rodape">
          <h4>{nome}</h4>
          <h5>{time}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;

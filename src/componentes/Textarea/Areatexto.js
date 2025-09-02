import "./areatexto.css";

const Areatexto = (props) => {
  const placeholderMod = `${props.placeholder}`;

  const aoDigitar = (evento) => {
    props.aoAlterar(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      {/* required serve para o input ser preenchido obrigatoriamente */}
      <input
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={placeholderMod}
      />
    </div>
  );
};
export default Areatexto;

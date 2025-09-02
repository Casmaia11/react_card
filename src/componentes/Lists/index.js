import "./list.css";
const Lists = (props) => {
  return (
    <div className="Lists">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterar(evento.target.value)}
        required={props.required}
        value={props.valor}
      >
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
export default Lists;

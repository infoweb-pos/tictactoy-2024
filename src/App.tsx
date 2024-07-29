const Square = ({value}) => {
  const valor = value ?? "-";

// const Square = (props) => {
//   console.info(props);
//   const valor = props.value ?? "-";

  // const valor = props.value ? props.value : "-";
  // let valor;
  // if (props.value) {
  //   valor = props.value;
  // } else {
  //   valor = "-";
  // }
  return (
    <button className="square">
      {valor}
    </button>
  );
};

const Aplicacao = () => {
  return (
    <>
      <div className="board-row">
        <Square value="X" />
        <Square value="0" />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

// const Aplicacao = (<button>X</button>);

export default Aplicacao;

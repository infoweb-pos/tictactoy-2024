import { useState } from "react";

const Square = ({ value }) => {
  const [valor, mudarValor] = useState(value ?? "-");
  // const [valor] = useState(value ?? "-");
  // let valor = value ?? "-";
  // const valor = value ?? "-";

  const escutarClique = (evento) => {
    console.info(evento)
    // valor = "X";
    mudarValor("X");
  };

  return (
    <button className="square" onClick={escutarClique} >
      { valor }
    </button >
  );
};

const Board = () => {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
};

// const Aplicacao = (<button>X</button>);

const Aplicacao = () => <Board />;

export default Aplicacao;

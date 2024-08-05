import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
	const valor = value ?? " ";
	return (
		<button className="square" onClick={onSquareClick}>
			{valor}
		</button>
	);
};

const calculateWinner = (squares) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] !== " " && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return false;
};

const Board = () => {
	const [jogador, setJogador] = useState("X");
	const [squares, setSquares] = useState(Array(9).fill(" "));

	const handleClick = (indice: number) => {
		if (squares[indice] !== " " || calculateWinner(squares)) return;

		let copia = squares.slice();
		copia[indice] = jogador;
		setSquares(copia);
		if (jogador === "X") {
			setJogador("O");
		} else {
			setJogador("X");
		}
	};

	return (
		<>
			<div className="board-row">
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-row">
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-row">
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
		</>
	);
};

// const Aplicacao = (<button>X</button>);

const Aplicacao = () => <Board />;

export default Aplicacao;

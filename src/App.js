import { useState } from 'react';
import './App.css';

function Square( {onSquareClick, backgroundColor }) {
  return (
    <div className="square" onMouseOver={onSquareClick} style={{backgroundColor}} >
    </div>
  );
}

function randomColor() {
  return "#" + Math.random().toString(16).slice(2,8);
} //#58FEGD - color

export default function Board() {
  const [squares, setSquares] = useState(Array(24).fill(null));

  function asdf(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);

  }

  return (
    <>
      <div className="Board">
        <Square value={squares[0]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[1]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[2]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[3]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[4]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[5]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[6]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[7]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[8]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[9]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
      </div>

    </>
  );
}
import { useState } from 'react';
import './App.css';

function Square( {onSquareClick, backgroundColor} ) {
  return (
    <button className="square" onMouseOver={onSquareClick} style={{backgroundColor}} >
    </button>
  );
}

function randomColor() {
  return "#" + Math.random().toString(16).slice(2,8);
}

export default function Board() {
  const [squares, setSquares] = useState(Array(28).fill(null));

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
        <Square value={squares[10]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[11]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[12]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[13]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[14]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[15]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[16]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[17]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[18]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[19]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[20]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[21]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[22]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[23]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[24]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[25]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[26]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[27]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[28]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
        <Square value={squares[29]} onSquareClick={() => asdf(0)} backgroundColor={randomColor()} />
      </div>
    </>
  );
}
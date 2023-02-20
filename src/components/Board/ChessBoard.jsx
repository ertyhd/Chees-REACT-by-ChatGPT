import React, { useState } from 'react';
import Square from 'components/Square/Square';
import './board.css';

const Chessboard = () => {
  const [pieces, setPieces] = useState(
    // здесь можно передать начальное расположение фигур
    // в виде массива объектов с полями type (тип фигуры) и position (позиция на доске)
    [
      { type: 'r-w', position: 'a1' },
      { type: 'n-w', position: 'b1' },
      { type: 'b-w', position: 'c1' },
      { type: 'q-w', position: 'd1' },
      { type: 'k-w', position: 'e1' },
      { type: 'b-w', position: 'f1' },
      { type: 'n-w', position: 'g1' },
      { type: 'r-w', position: 'h1' },
      { type: 'p-w', position: 'a2' },
      { type: 'p-w', position: 'b2' },
      { type: 'p-w', position: 'c2' },
      { type: 'p-w', position: 'd2' },
      { type: 'p-w', position: 'e2' },
      { type: 'p-w', position: 'f2' },
      { type: 'p-w', position: 'g2' },
      { type: 'p-w', position: 'h2' },
      { type: 'r-b', position: 'a8' },
      { type: 'n-b', position: 'b8' },
      { type: 'b-b', position: 'c8' },
      { type: 'q-b', position: 'd8' },
      { type: 'k-b', position: 'e8' },
      { type: 'b-b', position: 'f8' },
      { type: 'n-b', position: 'g8' },
      { type: 'r-b', position: 'h8' },
      { type: 'p-b', position: 'a7' },
      { type: 'p-b', position: 'b7' },
      { type: 'p-b', position: 'c7' },
      { type: 'p-b', position: 'd7' },
      { type: 'p-b', position: 'e7' },
      { type: 'p-b', position: 'f7' },
      { type: 'p-b', position: 'g7' },
      { type: 'p-b', position: 'h7' },
    ]
  );

  const [removedPiece, setRemovedPiece] = useState();

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const getSquareColor = (row, col) => {
    return (row + col) % 2 === 0 ? 'light' : 'dark';
  };

  const getSquareCoordinates = (row, col) => {
    return letters[col] + numbers[row];
  };

  const handleSquareClick = position => {
    const piece = pieces.find(p => p.position === position);

    if (piece) {
      // фигура уже есть на этой клетке - удаляем ее и сохраняем информацию
      const newPieces = pieces.filter(p => p.position !== position);
      setPieces(newPieces);
      setRemovedPiece(piece);
    } else {
      // на клетке нет фигуры - добавляем новую, используя сохраненную информацию
      if (removedPiece) {
        const newPiece = { ...removedPiece, position };
        const newPieces = pieces.concat(newPiece);
        setPieces(newPieces);
        setRemovedPiece(null);
      } else {
        // если сохраненная информация отсутствует, добавляем новую пешку
        const newPiece = {};
        const newPieces = pieces.concat(newPiece);
        setPieces(newPieces);
      }
    }
  };

  const renderSquares = () => {
    const squares = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const squareColor = getSquareColor(row, col);
        const squareCoords = getSquareCoordinates(row, col);
        const piece = pieces.find(p => p.position === squareCoords);

        squares.push(
          <Square
            key={squareCoords}
            color={squareColor}
            piece={piece}
            onClick={() => handleSquareClick(squareCoords)}
          />
        );
      }
    }
    return squares;
  };

  return <div className="chessboard">{renderSquares()}</div>;
};

export default Chessboard;

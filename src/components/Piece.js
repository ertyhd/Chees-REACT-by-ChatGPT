import React from 'react';

const Piece = ({ type, color, position }) => {
  const pieceImage = require(`./pieces/${type}-${color}.png`);
  const pieceStyle = {
    backgroundImage: `url(${pieceImage})`,
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
  };
  const piecePosition = {
    gridColumn: `${position[1] + 1} / span 1`,
    gridRow: `${8 - position[0]} / span 1`,
  };
  return <div className="piece" style={{ ...pieceStyle, ...piecePosition }} />;
};

export default Piece;

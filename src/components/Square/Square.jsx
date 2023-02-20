import React from 'react';
import './square.css';
import PropTypes from 'prop-types';

const Square = ({ color, piece, onClick }) => {
  const pieceType = piece ? piece.type : null;
  console.log(pieceType);
  return (
    <div className={`square ${color}`} onClick={onClick}>
      <div className="coordinates">{piece && piece.position}</div>
      {pieceType && (
        <img
          alt={`${pieceType}`}
          src={require(`../pieces/${pieceType}.png`)}
          className="piece"
        />
      )}
    </div>
  );
};

Square.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']).isRequired,
  piece: PropTypes.shape({
    type: PropTypes.oneOf(['k', 'q', 'r', 'b', 'k', 'p']).isRequired,
    position: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default Square;
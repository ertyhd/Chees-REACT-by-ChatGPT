const Piece = () => {
  // ячейки доски и фигуры (если есть)
  const cellColor = (-1) ** (i + j) === 1 ? 'white' : 'teal';
  const pieceProps = {
    color: i < 3 ? 'b' : 'w',
    position: [i - 1, j - 1],
  };
  let piece = null;
  if (i === 2 || i === 7) {
    // пешки
    piece = <Piece {...pieceProps} type="p" />;
  } else if (i === 1 || i === 8) {
    const type =
      j === 1 || j === 8
        ? 'r'
        : j === 2 || j === 7
        ? 'n'
        : j === 3 || j === 6
        ? 'b'
        : j === 4
        ? 'q'
        : j === 5
        ? 'k'
        : null;
    if (type) {
      piece = <Piece {...pieceProps} type={type} />;
    }
  }
  row.push(
    <div key={`${i}-${j}`} style={{ ...cellStyle, backgroundColor: cellColor }}>
      {piece}
    </div>
  );
};

export default Piece;

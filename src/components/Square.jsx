export default function Square({ value, onSquareClick }) {
  return (
    <>
      <button className={`square value${value}`} onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}

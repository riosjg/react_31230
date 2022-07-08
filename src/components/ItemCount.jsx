import { useState } from "react";
// Ponemos valores default a las props, ya que no funcionaría si nos olvidamos de enviarlas.
const ItemCount = ({ stock = 2, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);
  const updateCount = (op) => {
    if (op === "-" && count > 0) {
      setCount(count - 1);
    }
    if (op === "+" && count < stock) {
      setCount(count + 1);
    }
  };
  const updateCountInput = (e) => {
    const { value } = e.target;
    if (value <= stock) {
      setCount(isNaN(value) ? 0 : parseInt(value));
    }
  };
  return (
    <>
      <div className="input-group input-spinner mb-3 d-flex justify-content-center">
        <input
          onChange={(e) => updateCountInput(e)}
          className="border-primary"
          placeholder=""
          value={count}
          type="number"
        />
        <button
          onClick={() => updateCount("-")}
          className="btn btn-icon btn-primary"
          type="button"
        >
          -
        </button>
        <button
          onClick={() => updateCount("+")}
          className="btn btn-icon btn-primary"
          type="button"
        >
          +
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => onAdd(count)}
          type="button"
          className="btn btn-info"
          disabled={count === "" || count === 0}
        >
          Buy!
        </button>
      </div>
    </>
  );
};

export default ItemCount;

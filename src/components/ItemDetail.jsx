import { useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate, Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [amount, setAmount] = useState(0);
  const { title, price, stock, pictureUrl, id, discount } = item;
  const onAdd = (amount) => {
    setAmount(amount);
  };
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${stock} units available!`}</p>
        <p className="card-text">{`$${
          (price * discount) / 100
        } | with a ${discount}% discount!`}</p>
      </div>
      {amount == 0 ? (
        <ItemCount stock={stock} initial={0} onAdd={onAdd} />
      ) : (
        <h1>{amount} items will be buy</h1>
      )}
      <div className="d-flex justify-content-center my-3">
        <Link to="/cart/">
          <button className="btn btn-warning">Go to checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;

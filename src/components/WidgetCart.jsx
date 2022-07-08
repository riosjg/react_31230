import { useState } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WidgetCart = () => {
  const [amount, setAmount] = useState(0);
  return (
    <div className="ps-4">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="ps-2">{amount}</span>
    </div>
  );
};

export default WidgetCart;

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WidgetCart = () => {
  const amount = 4;
  return (
    <div className="ps-4">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="ps-2">{amount}</span>
    </div>
  );
};

export default WidgetCart;

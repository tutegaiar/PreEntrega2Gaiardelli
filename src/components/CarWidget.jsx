import cart from "../assets/carrito.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export const CarWidget = () => {
  const { items } = useContext(ItemContext);
  const quantity = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link to="/cart">
      <div className="carritoContenedor">
        <img src={cart} alt="carrito" /> <span>{quantity}</span>
      </div>
    </Link>
  );
};

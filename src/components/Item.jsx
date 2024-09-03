import { Link } from "react-router-dom";
export const Item = ({ product }) => {
  return (
    <div className="card">
      <div className="imgContainer">
        <img src={`/productos/${product.img}`} alt={product.producto} />
      </div>
      <div className="bodyCard">
        <h2>{product.producto}</h2>
        <p>${product.precio}</p>
      </div>
      <Link to={`/item/${product.id}`}>
        <button>Comprar</button>
      </Link>
    </div>
  );
};

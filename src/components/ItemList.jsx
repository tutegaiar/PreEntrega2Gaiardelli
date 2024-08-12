import { Item } from "./Item.jsx";

export const ItemList = ({ products }) => {
  return (
    <div className="card__container">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

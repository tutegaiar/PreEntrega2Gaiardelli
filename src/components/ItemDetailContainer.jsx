import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../context/ItemContext";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addItem } = useContext(ItemContext);

  useEffect(() => {
    const db = getFirestore();
    const refdoc = doc(db, "items", id);
    getDoc(refdoc)
      .then((snapshot) => {
        setItem({ ...snapshot.data(), id: snapshot.id });
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "Cargando...";

  if (!item) return "Producto no encontrado.";

  const onAdd = (count) => {
    addItem({ ...item, quantity: count });
  };

  return (
    <div className="itemDetailContainer">
      <div className="imgDetailContainer">
        <img src={`/productos/${item.img}`} alt={item.producto} />
      </div>
      <div className="bodyDetailContainer">
        <h1>{item.producto}</h1>
        <p>Precio: ${item.precio}</p>
        <p>Descripción: {item.descripcion}</p>
        <p>Categoría: {item.categoria}</p>
        <p>Stock: {item.stock}</p>
        <ItemCount stock={item.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

import data from "../data/productos.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
export const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    })
      .then((respuesta) => {
        if (!categoryId) {
          setProduct(respuesta);
        } else {
          const filtered = data.filter((i) => i.categoria === categoryId);
          setProduct(filtered);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <>
      <ItemList products={product} />
    </>
  );
};

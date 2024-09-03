import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";
export const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = !categoryId
      ? collection(db, "items")
      : query(collection(db, "items"), where("categoria", "==", categoryId));
    getDocs(itemsCollection)
      .then((snapshot) => {
        setProduct(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
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

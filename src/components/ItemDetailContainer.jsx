import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/productos.json";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Cambia a 'id' si la ruta es '/item/:id'

  useEffect(() => {
    const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    fetchData
      .then((respuesta) => {
        if (id) {
          // Buscar el producto por 'id' en lugar de 'categoryId'
          const finded = respuesta.find((i) => i.id === Number(id));
          setItem(finded);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "Cargando...";

  if (!item) return "Producto no encontrado.";

  return (
    <div className="itemDetailContainer">
      <div className="imgDetailContainer">
        <img src={`/productos/${item.img}`} alt={item.producto} />
      </div>
      <div className="bodyDetailContainer">
        <h1>{item.producto}</h1>
        <p>Precio: {item.precio}</p>
        <p> Descripcion: {item.descripcion}</p>
        <p>Categoría: {item.categoria}</p>
        <p>Stock: {item.stock}</p>
        <div className="buttonsDetail">
          <button>Agregar Al Carrito</button>
          <button>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

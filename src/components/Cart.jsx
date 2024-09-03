import { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom"; // Importa Link si estás utilizando react-router-dom

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, removeItem, reset } = useContext(ItemContext);
  const total = items.reduce((acc, act) => acc + act.precio * act.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { phone, email, name } = buyer;
    if (!phone || !email || !name) {
      alert("Todos los campos son obligatorios.");
      return false;
    }
    return true;
  };

  const sendOrder = () => {
    if (!validateForm()) return;

    const order = {
      buyer,
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => {
        if (id) {
          alert(`Order ID: ${id}`);
          reset();
          setBuyer(initialValues);
        }
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  // Verificar si el carrito está vacío
  if (items.length === 0) {
    return (
      <div>
        <h2>No tienes productos en el carrito.</h2>
        <p>
          <Link to="/store">Volver a la tienda</Link> para agregar productos.
        </p>
      </div>
    );
  }

  return (
    <>
      <button onClick={reset}>Vaciar</button>
      {items.map((item) => (
        <div key={item.id}>
          <h1>{item.producto}</h1>
          <img src={`/productos/${item.img}`} alt={item.producto} />
          <p>{item.quantity}</p>
          <p onClick={() => removeItem(item.id)}>x</p>
        </div>
      ))}
      <form>
        <div>
          <label>Nombre</label>
          <input value={buyer.name} name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Teléfono</label>
          <input value={buyer.phone} name="phone" onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input value={buyer.email} name="email" onChange={handleChange} />
        </div>
        <button type="button" onClick={sendOrder}>
          Comprar
        </button>
      </form>
    </>
  );
};

import { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const alreadyExists = items.some((i) => i.id === item.id);
    if (alreadyExists) {
      const newItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + item.quantity };
        } else {
          return i;
        }
      });
      setItems(newItems);
    } else {
      setItems((prev) => [...prev, item]);
    }
  };

  const reset = () => {
    setItems([]);
  };
  const removeItem = (id) => {
    const filter = items.filter((i) => i.id !== id);
    setItems(filter);
  };

  return (
    <ItemContext.Provider value={{ items, addItem, removeItem, reset }}>
      {children}
    </ItemContext.Provider>
  );
};

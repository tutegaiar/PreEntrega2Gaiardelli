import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEzS6ZGZetWO_8tR9-9NDQkf6hue7L_hQ",
  authDomain: "tienda-mmarg.firebaseapp.com",
  projectId: "tienda-mmarg",
  storageBucket: "tienda-mmarg.appspot.com",
  messagingSenderId: "512097306243",
  appId: "1:512097306243:web:de2fcd6b604cf89c6bbdb6",
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

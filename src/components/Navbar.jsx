import React, { useState } from "react";
import { BarraDeBusqueda } from "./BarraDeBusqueda";
import { CarWidget } from "./CarWidget";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import cruz from "../assets/cruz.png";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleClose = () => {
    setClicked(false);
  };
  return (
    <>
      <div className="navbar__Container">
        <Menu clicked={clicked} handleClick={handleClick} />
        <h1>TIENDA MMARG</h1>
        <Link to="/">
          <Logo />
        </Link>
        <BarraDeBusqueda />
        <CarWidget />
      </div>
      <div className={`categorias__container ${clicked ? "active" : ""}`}>
        <ul>
          <li id="cruz">
            <a href="#">
              <img src={cruz} alt="" onClick={handleClose} />
            </a>
          </li>
          <li>
            <Link to="/categorias/Accesorios">Accesorios</Link>
          </li>
          <li>
            <Link to="/categorias/Hombres">Hombres</Link>
          </li>
          <li>
            <Link to="/categorias/Mujeres">Mujeres</Link>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

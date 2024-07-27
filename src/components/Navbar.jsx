import React, { useState } from "react"
import { BarraDeBusqueda } from "./BarraDeBusqueda"
import { CarWidget } from "./CarWidget"
import { Logo } from "./Logo"
import { Menu } from "./Menu"
import cruz from "../assets/cruz.png"

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
        <Logo />
        <BarraDeBusqueda />
        <CarWidget />
    </div>
    <div className={`categorias__container ${clicked ? 'active' : ''}`}>        
        <ul>
            <li id="cruz"><a href="#"><img src={cruz} alt="" onClick={handleClose}/></a></li>
            <li><a href="#">Deportes</a></li>
            <li><a href="#">hombres</a></li>
            <li><a href="#">Mujeres</a></li>
            <li><a href="#">login</a></li>
        </ul>
    </div>
        </>

    )


}
import React, { useState } from "react"
import { BarraDeBusqueda } from "./BarraDeBusqueda"
import { CarWidget } from "./CarWidget"
import { Logo } from "./Logo"
import { Menu } from "./Menu"
import cruz from "../assets/cruz.png"
export const Navbar = () => {
const [cliked, setCliked] = useState(false)
const handleClick = () => {
    setCliked(!cliked)
}

    return (
        <>
        <div className="navbar__Container">
        <Menu cliked={cliked} handleClick={handleClick} />
        <h1>TIENDA MMARG</h1>
        <Logo />
        <BarraDeBusqueda />
        <CarWidget />
    </div>
    <div className={`categorias__container ${cliked ? 'active' : ''}`}>
        <ul>
            <li id="cruz"><a href="#"><img src={cruz} alt="" /></a></li>
            <li><a href="#">Deportes</a></li>
            <li><a href="#">hombres</a></li>
            <li><a href="#">Mujeres</a></li>
            <li><a href="#">login</a></li>
        </ul>
    </div>
        </>

    )


}
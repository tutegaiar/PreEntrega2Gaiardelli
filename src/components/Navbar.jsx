import { CarWidget } from "./CarWidget"
import { Logo } from "./Logo"
export const Navbar = () => {
    return (
        <div className="navbar__Container">
        <h1>TIENDA MMARG</h1>
        <Logo />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>

        </ul>
        <CarWidget />
        
    </div>
    )


}
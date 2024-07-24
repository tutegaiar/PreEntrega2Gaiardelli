import menu from "../assets/menu.png";

export const Menu = (props) => {
    return (   
    <div onClick={props.handleClick}>
      <img id="menuimg" src={menu} alt="menu" /> 
    </div>
     
    )

}
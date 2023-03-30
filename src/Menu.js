import { NavLink } from "react-router-dom";
import "./styles/Menu.css";

function Menu() {
  return (
    <>
      <nav className="navbar">
        <NavLink className="navbar-menu" to={"/characters"}>
          All Characters
        </NavLink>
        <NavLink className="navbar-menu" to={"/characters/females"}>
          Females
        </NavLink>
        <NavLink className="navbar-menu" to={"/characters/males"}>
          Males
        </NavLink>
        <NavLink className="navbar-menu" to={"/characters/alive"}>
          Alive
        </NavLink>
        <NavLink className="navbar-menu" to={"/characters/dead"}>
          Dead
        </NavLink>
      </nav>
    </>
  );
}

export default Menu;

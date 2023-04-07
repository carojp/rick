import { NavLink } from "react-router-dom";
import "./styles/Menu.css";
import { useContext } from "react";
import UrlContext from "./context/UrlContext";

function Menu() {
  const { setUrl } = useContext(UrlContext);
  return (
    <>
      <nav className="navbar">
        <NavLink
          className="navbar-menu"
          to={"/characters"}
          onClick={() => setUrl("https://rickandmortyapi.com/api/character")}
        >
          All Characters
        </NavLink>
        <NavLink
          className="navbar-menu"
          to={"/characters/females"}
          onClick={() =>
            setUrl("https://rickandmortyapi.com/api/character/?gender=Female")
          }
        >
          Females
        </NavLink>
        <NavLink
          className="navbar-menu"
          to={"/characters/males"}
          onClick={() =>
            setUrl("https://rickandmortyapi.com/api/character/?gender=Male")
          }
        >
          Males
        </NavLink>
        <NavLink
          className="navbar-menu"
          to={"/characters/alive"}
          onClick={() =>
            setUrl("https://rickandmortyapi.com/api/character/?status=Alive")
          }
        >
          Alive
        </NavLink>
        <NavLink
          className="navbar-menu"
          to={"/characters/dead"}
          onClick={() =>
            setUrl("https://rickandmortyapi.com/api/character/?status=Dead")
          }
        >
          Dead
        </NavLink>
      </nav>
    </>
  );
}

export default Menu;

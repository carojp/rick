import "./styles/Menu.css";

function Menu() {
  return (
    <>
      <nav className="navbar">
        <a className="navbar-menu" href={"http://localhost:3000/characters"}>
          All Characters
        </a>
        <a
          className="navbar-menu"
          href={"http://localhost:3000/characters/females"}
        >
          Females
        </a>
        <a
          className="navbar-menu"
          href={"http://localhost:3000/characters/males"}
        >
          Males
        </a>
        <a
          className="navbar-menu"
          href={"http://localhost:3000/characters/alive"}
        >
          Alive
        </a>
        <a
          className="navbar-menu"
          href={"http://localhost:3000/characters/dead"}
        >
          Dead
        </a>
      </nav>
    </>
  );
}

export default Menu;

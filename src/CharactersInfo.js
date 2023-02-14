import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/CharactersInfo.css";
import Square from "./assets/Square.png";

function CharactersInfo() {
  const [character, setCharacter] = useState("");
  const api = `https://rickandmortyapi.com/api/character`;

  useEffect(() => {
    axios.get(api).then((response) => {
      console.log("hola Rick & Morty");
      setCharacter(response.data);
    });
  }, []);
  return (
    <section className="card">
      <div className="card-info">
        <h2 className="character-name">Name</h2>
        <img className="character-image" src={Square} alt="" />
        <div className="character-info">
          <h2 className="character-gender">Gender</h2>
          <h2 className="character-status">Status</h2>
        </div>
      </div>
    </section>
  );
}

export default CharactersInfo;

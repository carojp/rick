import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/CharactersInfo.css";

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
        <h2 className="character-name">{character.results[0].name}</h2>
        <img
          className="character-image"
          src={character.results[0].image}
          alt=""
        />
        <div className="character-info">
          <h2 className="character-gender">{character.results[0].gender}</h2>
          <h2 className="character-status">{character.results[0].status}</h2>
        </div>
      </div>
    </section>
  );
}

export default CharactersInfo;

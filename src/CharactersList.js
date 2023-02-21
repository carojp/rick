import axios from "axios";
import { useEffect, useState } from "react";
import CharacterItem from "./CharacterItem";
import "./styles/CharactersList.css";

function CharactersList() {
  const [page] = useState(1);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        setCharacters(response.data.results);
      });
  }, []);

  return (
    <section className="card">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </section>
  );
}

export default CharactersList;

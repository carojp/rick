import axios from "axios";
import { useEffect, useState } from "react";
import CharacterItem from "./CharacterItem";
import "./styles/CharactersList.css";

function CharactersList() {
  const [page, SetPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?pege=${page}`)
      .then((response) => {
        setCharacters(response.data);
      });
  }, []);

  return (
    <>
      {characters.map((character) => (
        <CharacterItem
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
        />
      ))}
    </>
  );
}

export default CharactersList;

import axios from "axios";
import { useEffect, useState } from "react";

function CharacterItem() {
  const [page, SetPage] = useState(1);
  const [character, setCharacter] = useState({
    results: [
      {
        id: "",
        name: "",
        status: "",
        species: "",
        gender: "",
      },
    ],
  });

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?pege=${page}`)
      .then((response) => {
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
          <h2 className="character-status">{character.results[0].status}</h2>
          <h2 className="character-gender">{character.results[0].species}</h2>
          <h2 className="character-gender">{character.results[0].gender}</h2>
        </div>
      </div>
    </section>
  );
}

export default CharacterItem;

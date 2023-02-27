import axios from "axios";
import { useEffect, useState } from "react";
import CharacterItem from "./CharacterItem";
import menor from "./assets/menor.png";
import mayor from "./assets/mayor.png";
import "./styles/CharactersList.css";

function CharactersList({ urlInitial }) {
  const [initial, setInitial] = useState(urlInitial);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(initial).then((response) => {
      setCharacters(response.data.results);
      setPrev(response.data.info.prev);
      setNext(response.data.info.next);
    });
  }, [initial]);

  return (
    <section className="conteiner-card-list">
      <div className="arrow">
        <img
          className="img-menor"
          src={menor}
          onClick={() => setInitial(prev)}
          alt=""
        />
        <img
          className="img-mayor"
          src={mayor}
          onClick={() => setInitial(next)}
          alt=""
        />
      </div>
      <section className="card-list">
        {characters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </section>
    </section>
  );
}

export default CharactersList;

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import CharacterItem from "./CharacterItem";
import Menu from "./Menu";
import "./styles/CharactersList.css";
import UrlContext from "./context/UrlContext";

function CharactersList({ urlInitial }) {
  const { url } = useContext(UrlContext);
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

  useEffect(() => {
    axios.get(url).then((response) => {
      setCharacters(response.data.results);
      setPrev(response.data.info.prev);
      setNext(response.data.info.next);
    });
  }, [url]);

  return (
    <>
      <Menu />
      <section className="conteiner-card-list">
        <div className="arrow">
          <button
            className="button-prev"
            disabled={prev === null}
            onClick={() => setInitial(prev)}
          >
            Prev
          </button>
          <button className="button-next" onClick={() => setInitial(next)}>
            Next
          </button>
        </div>
        <section className="card-list">
          {characters.map((character) => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </section>
      </section>
    </>
  );
}

export default CharactersList;

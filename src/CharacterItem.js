import "./styles/CharacterItem.css";

function CharacterItem({ character }) {
  return (
    <section className="card">
      <div className="card-info">
        <h2 className="character-name">{character.name}</h2>
        <img className="character-image" src={character.image} alt="" />
        <div className="character-info">
          <h2 className="character-status">{character.status}</h2>
          <h2 className="character-gender">{character.species}</h2>
          <h2 className="character-gender">{character.gender}</h2>
        </div>
      </div>
    </section>
  );
}

export default CharacterItem;

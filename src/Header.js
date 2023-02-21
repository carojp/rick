import imageSerie from "./assets/imageSerie.png";
import "./styles/Header.css";

function Header() {
  return (
    <>
      <header className="App-header">
        <p className="title">
          Another Joke about APIs? Give it a REST. Let’s Rick!
        </p>
        <button className="button-about">About me</button>
      </header>
      <section className="description-series">
        <img className="image-series" src={imageSerie} alt="" />
        <span>
          <h2 className="title-description">
            How Well Do You Know Rick & Morty?
          </h2>
          <p className="description">
            <b>Rick and Morty </b> is an American adult animated science-fiction
            sitcom created by Justin Roiland and Dan Harmon for Cartoon
            Network's nighttime programming block Adult Swim. The series follows
            the misadventures of cynical mad scientist Rick Sanchez and his
            good-hearted but fretful grandson Morty Smith, who split their time
            between domestic life and interdimensional adventures. Though you
            can enjoy Rick and Morty simply as a zany cartoon with some crude
            humor, you can also dive deeper into the human condition and wrestle
            with the existence of god itself through these characters.
            <b>So, here you can check them all!</b>
          </p>
        </span>
      </section>
    </>
  );
}

export default Header;

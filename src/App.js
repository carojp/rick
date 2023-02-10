import axios from "axios";
import "./styles/App.css";
import imageSerie from "./assets/imageSerie.png";
import { useEffect } from "react";

function App() {
  const api = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios.get(api).then((response) => {
      console.log("Hola Rick & Morty");
    });
  }, []);

  return (
    <div className="App">
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
            with the existence of god itself through these characters.{" "}
            <b>So, here you can check them all!</b>
          </p>
        </span>
      </section>
      <ul className="navbar">
        <li>All Characters</li>
        <li>Females</li>
        <li>Males</li>
        <li>Alive</li>
        <li>Dead</li>
        <button className="button-sign">Sign Up</button>
      </ul>
      <span className="choose-catergories">
        <p>
          Choose any of the catergories above and learn more about Rick and
          Morty characters
        </p>
      </span>
      <span className="footer">
        <ul>
          <h2 className="footer-title"> Kartik Bansal.</h2>
          <li>Create Designer & frond-end</li>
          <li>developer</li>
        </ul>
        <ul>
          <h2 className="footer-title"> Useful Links</h2>
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Contac</li>
        </ul>
        <ul>
          <h2 className="footer-title"> Social Media</h2>
          <li>Linkedin</li>
          <li>Github</li>
          <li>Instragram</li>
        </ul>
        <ul>
          <h2 className="footer-title"> Hire Me</h2>
          <li>Visit my Linkedin accounr!</li>
        </ul>
      </span>
    </div>
  );
}

export default App;

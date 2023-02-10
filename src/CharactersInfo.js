import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/CharactersInfo.css";
import Square from "./assets/Square.png";

function CharactersInfo() {
  return (
    <section className="card-info">
      <h2 className="character-name">Name</h2>
      <img className="character-image" src={Square} alt="" />
      <div className="character-info">
        <h2 className="character-gender">Gender</h2>
        <h2 className="character-status">Status</h2>
      </div>
    </section>
  );
}

export default CharactersInfo;

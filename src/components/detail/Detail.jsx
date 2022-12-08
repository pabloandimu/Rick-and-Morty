// import React from "react";
import styled from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();
  //   console.log(detailId)

  const [character, setCharacter] = useState();
  //console.log(character)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styled.colorText}>
      {character ? (
        <div>
          <div>
            <h1>Nombre: {character.name}</h1>
            <h5>Status: {character.status}</h5>
            <h5>Especie: {character.species}</h5>
            <h5>Género: {character.gender}</h5>
            <h5>Origen: {character.origin?.name}</h5>
          </div>

          <div>
            <img src={character.image} alt={character.name} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

import styled from './card.module.css';
import { Link } from "react-router-dom";

// Comando para instalar el Router versipon CORRECTA:   npm i react-router-dom@6.3.0

export default function Card(props) {
   //console.log(props);
   return (
      
      <div className={styled.cardDiv}>
         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={styled.img} src={props.image} alt={props.name}/>
      </div>
   );
}

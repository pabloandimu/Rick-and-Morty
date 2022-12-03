import styled from './card.module.css';

export default function Card(props) {
   //console.log(props);
   return (
      
      <div className={styled.cardDiv}>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.name}/>
      </div>
   );
}

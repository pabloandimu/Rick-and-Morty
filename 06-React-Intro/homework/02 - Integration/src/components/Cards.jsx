import Card from './Card';
import styled from './cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   //console.log("Contenido de Characters", characters);
   return <div className = {styled.divCards}>
      {
         characters.map((char) => (
         <Card
         key={char.name}
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         onClose={()=>alert("Emulamos que se cierra la card")}
         />))
      }
   </div>;
}

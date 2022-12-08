import Card from '../card/Card';
import styled from './cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
   //console.log("Contenido de Characters", characters);
   return <div className = {styled.divCards}>
      {
         characters.map((char) => (
         <Card
         key={char.name}
         id={char.id}
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         onClose={()=> onClose(char.id)}
         />))
      }
   </div>;
}

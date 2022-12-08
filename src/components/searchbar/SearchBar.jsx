// import { useState } from 'react';
import styled from './SearchBar.module.css'
import { useState } from "react";

export default function SearchBar(props) {
   const { onSearch } = props; // destructuring, me traigo onSerch del objeto props. 
   // Y lo uso en la línea 7
   const [character, setCharacter] = useState("");

   const handleChange = (evento) => {
      setCharacter(evento.target.value)
   }
   
   return (
      <div className= {styled.searchBar}>
         <input type='search' value={character} onChange={handleChange}/>
            {/* <button onClick={()=> (onSearch(character), alert('Al "Aceptar" se muestra su elección'))}> */}
            <button onClick={()=> (onSearch(character))}>
         Agregar
         </button>

      </div>
   );
}

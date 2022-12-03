import styled from './SearchBar.module.css'

export default function SearchBar(props) {
   const { onSearch } = props // destructuring, me traigo onSerch del objeto props. Y lo uso en la línea 6
   return (
      <div className= {styled.searchBar}>
         <input type='search' />
      <button onClick={()=> onSearch('Futuro ID del Personaje')}>
         Agregar
      </button>
      </div>
   );
}

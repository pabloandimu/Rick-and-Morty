import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import styled from './components/card.module.css';


function App () {
  return (
    <div className='App' style={{ padding: '25px' }} >
      {/* <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div> */}
      {/* <hr /> */}
      <div className={styled.divPadre}>
        <Cards
          characters={characters}
        />
      </div>
      {/* <hr /> */}
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
import "./App.css";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "./components/cards/Cards.jsx";
import styled from "./components/card/card.module.css";
import Nav from "./components/nav/Nav";
import Form from "./components/form/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  console.log(characters);
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const username = "pablo@gmail.com";

  const password = "Password1";

  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.username === username && userData.password === password)
      setAccess(true);
    navigate("/home");
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]); //oldChars, el estado anterior
          // y sumale, + , la info actual. No se sobreescribe, se agrega.
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    //console.log(id);
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="Sobre" style={{ backgroundColor: "red" }}>
      <div className="App" style={{ padding: "25px" }}>
        <div>
          <div>{location.pathname !== "/" && <Nav onSearch={onSearch} />}</div>
          <Routes>
            <Route path="/" element={<Form login={login}/>} />
            <Route
              path="/home"
              element={
                <div className={styled.divPadre}>
                  <Cards characters={characters} onClose={onClose} />
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:detailId" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';

function App() {

//e
const [characters, setCharacters]=useState([]);

//f
const onSearch=(id)=> {

      axios(`https://rickandmortyapi.com/api/character/${id}?`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      ).catch(error=>{
         console.error('Error al buscar el personaje: ', error);
         window.alert('Error al buscar personaje. Por favor, verifica el ID e inténtalo de nuevo.');
      });
   }
   
//F
 const onClose=(id)=>{  
 const updatedCharacters= characters.filter((character)=>
 character.id!=id)
   setCharacters(updatedCharacters); 
};

//R
   return (
      <div className='App'>
               
         <Cards characters={characters} onClose={onClose}/>
          <Nav onSearch={onSearch}/>
      </div>
   );
}

export default App;

import './App.css';
import Nav from './components/nav/Nav.jsx';
import Cards from './components/cards/Cards.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation,} from 'react-router-dom';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import NotFound from './components/notfound/NotFound.jsx';
import Form from './components/form/Form.jsx'; 
import Favorites from './components/favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';

function App() {

//HOOKS
const [characters, setCharacters]=useState([]);
const [acces, setAcces] = useState(false);
const navigate = useNavigate();
const location = useLocation()
const dispatch= useDispatch();

useEffect(() => {
   !acces && navigate('/');
}, [acces]);


//V
const EMAIL = "rickandmorty@hotmail.com"
const PASSWORD = "1234567"



//f
const onSearch=(id)=> {

  // `https://rickandmortyapi.com/api/character/${id}?`  

      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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
      navigate("/Home")
   }
   
 const onClose=(id)=>{  
 const updatedCharacters= characters.filter((character)=>
 character.id!=id)
   setCharacters(updatedCharacters); 
    dispatch(removeFav(id));
};

const login = (userData)=>{
if (userData.email===EMAIL && userData.password===PASSWORD){
setAcces(true)
navigate("/Home");}
else { 
window.alert('Su email o contraseña es incorrecta!')
};
}

//R
   return (
      <div className='App'>

             {location.pathname!=="/" && <Nav onSearch={onSearch} /> }
            
               <Routes>
               < Route path='/' element={<Form login={login}/>} />
               < Route path='/Home' element={<Cards characters={characters} onClose={onClose}/>} />
               < Route path='/About' element={<About/>} />
               < Route path='/Detail/:id' element={<Detail/>} />
               < Route path='/favorites' element={<Favorites onClose={onClose}/>} />
               < Route path='*' element={<NotFound/>} />
               

               </Routes>

               
     
      </div>  
   );
}

export default App;

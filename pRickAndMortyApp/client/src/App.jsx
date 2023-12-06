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


//f
const onSearch = async (id)=> {
  try {
     const {data} =  await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      
      if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
      }else {
      window.alert('¡No hay personajes con este ID!');
      }
         
  }catch (error) {
   console.error('Error al buscar el personaje: ', error);
         window.alert('Error al buscar personaje. Por favor, verifica el ID e inténtalo de nuevo.');
  }
   
    navigate("/Home")
   };
   
 const onClose=(id)=>{  
 const updatedCharacters= characters.filter((character)=>
 character.id!=id)
   setCharacters(updatedCharacters); 
    dispatch(removeFav(id));
};

const login = async (userData)=>{
   
   try {
   const {email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/'; 
   const response = await axios(URL + `?email=${email}&&password=${password}`)
   const data = response.data
   const {acces} = data;

      if(acces){
       setAcces(data);
       acces && navigate('/home');   
      }else{
       alert("credenciales incorrectas!")
      }
   
   }catch (error) {
      console.log("NO SE PUDO")
   } 
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

import { ADDFAV, REMOVEFAV,FILTERCARDS,ORDERCARS } from "./actiontypes";
import axios from "axios"

const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
  
    return async (dispatch) => {
      try {
        const { data } = await axios.post(endpoint, character);
        dispatch({
          type: ADDFAV,
          payload: data
        });
      } catch (error) {
        console.error('Error al agregar a favoritos: ', error);
        throw error; // Puedes manejar el error según tus necesidades y lanzarlo nuevamente si es necesario
      }
    };
  };
  
const removeFav = (id)=>{
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id
    
    return async (dispatch)=>{
    try {
        const {data} = await axios.delete(endpoint)
        return dispatch({
        type: REMOVEFAV,
        payload: data
        });
    }catch (error) {
     console.log('error al eliminar de favoritos: ', error)
    throw new Error(error.message)
    }
    };
};
 

const filterCards =(gender)=>{
     return{
        type: FILTERCARDS,
        payload: gender
     }

}

const orderCars=(order)=>{
    return{
        type: ORDERCARS,
        payload:order
    }

}

export {addFav,removeFav, filterCards, orderCars};


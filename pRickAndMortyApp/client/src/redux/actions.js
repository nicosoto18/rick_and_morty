import { ADDFAV, REMOVEFAV,FILTERCARDS,ORDERCARS } from "./actiontypes";
import axios from "axios"

const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character)
            .then(({ data }) => {
                return dispatch({
                    type: ADDFAV,  // Fixed typo here from 'rype' to 'type'
                    payload: data
                });
            });
    };
};

const removeFav = (id)=>{
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id
    return (dispatch)=>{
    axios.delete(endpoint)
    .then(
        (({data}) => {
            return dispatch({
                type: REMOVEFAV,
                payload: data
            })
        })
    )}
};






// const removeFav=(id)=>{
//    return {
//     type: REMOVEFAV,
//     payload: id
//    }
// }

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


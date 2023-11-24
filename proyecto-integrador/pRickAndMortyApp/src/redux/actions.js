import { ADDFAV, REMOVEFAV,FILTERCARDS,ORDERCARS } from "./actiontypes";

const addFav=(character)=>{
    return {
        type: ADDFAV,
        payload: character
    }
}

const removeFav=(id)=>{
   return {
    type: REMOVEFAV,
    payload: id
   }
}
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


import { ADDFAV, REMOVEFAV } from "./actiontypes";

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

export {addFav,removeFav};


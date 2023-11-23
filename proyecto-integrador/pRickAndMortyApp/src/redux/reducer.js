import { ADDFAV,REMOVEFAV } from "./actiontypes";



const initialState = {
    myFavorites: [],
}


const reducer=(state=initialState, action)=>{
    switch(action.type){
        case ADDFAV : return{
            ...state, myFavorites: [...state.myFavorites, action.payload]
        }
        case REMOVEFAV: 
            const newArray = state.myFavorites.filter(char=> char.id != action.payload )
        return {
            ...state, myFavorites: newArray
        }
        default: return {...state}
    }

}

export default reducer;

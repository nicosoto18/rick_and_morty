import { ADDFAV, REMOVEFAV, FILTERCARDS, ORDERCARS } from "./actiontypes";


const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDFAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload
      };
    case REMOVEFAV:
      return {
        ...state,
        myFavorites: action.payload,
        // allCharacters:action.payload
      };
    case FILTERCARDS:
      if (action.payload === "All") {
        return { ...state, myFavorites: state.allCharacters };
      } 
        const filtereFav = state.allCharacters.filter(
          (char) => char.gender === action.payload
        );
        return { ...state, myFavorites: filtereFav };
      

    case ORDERCARS:
      const orderCopy = [...state.myFavorites];
      if (action.payload === "A") {
        orderCopy.sort((a, b) => a.id - b.id)};
      if (action.payload === "D") {
          orderCopy.sort((a, b) => b.id - a.id);
        }
        return { ...state, myFavorites: orderCopy };

    default:
      return { ...state };
  }
};

export default reducer;

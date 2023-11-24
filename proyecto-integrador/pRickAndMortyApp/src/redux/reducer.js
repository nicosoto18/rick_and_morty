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
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVEFAV:
      const newArray = state.allCharacters.filter(
        (char) => char.id != action.payload
      );
      return {
        ...state,
        allCharacters: newArray,
        myFavorites: newArray,
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

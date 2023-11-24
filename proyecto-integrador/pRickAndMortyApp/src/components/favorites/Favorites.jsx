import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../card/Card";
import style from "./Favorites.module.css";
import { useDispatch } from "react-redux";
import { orderCars,filterCards} from "../../redux/actions";

const Favorites = ({ onClose }) => {
  
const myFavorites = useSelector((state) => state.myFavorites);
const dispatch = useDispatch();

const handleOrder=(event)=>{
    dispatch(orderCars(event.target.value)) 
};

const handleFilter=(event)=>{
  dispatch(filterCards(event.target.value))
}

  return (
    <div className={style.Favorites}>

      <select name="order" onChange={handleOrder} className={style.select}>
        <option value="A" >Ascendete</option> 
        <option value="D">Descendete</option>
      </select>

      <select name="filter" onChange={handleFilter} className={style.select}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknow</option>
      </select>

      {!myFavorites.length ? (
        <h2>No hay favoritos</h2>
      ) : (
        myFavorites.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={() => onClose(character.id)}
          />
        ))
      )}
    </div>
  );
        };

export default Favorites;

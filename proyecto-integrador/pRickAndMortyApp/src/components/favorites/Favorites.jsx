import { useSelector } from "react-redux/es/hooks/useSelector"
import Card from "../card/Card"
import style from "./Favorites.module.css"

const Favorites=({onClose})=>{

    const myFavorites = useSelector(state=> state.myFavorites)
    
    return(
        <div className={style.Favorites}>
      {
         myFavorites.map((character)=>(
            <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={()=> onClose(character.id)}
            />

         )

         )

      }
        </div>
    )
}


export default Favorites
import Card from '../card/Card';
import style from "./Cards.module.css"

const Cards=({characters, onClose})=> {
   return(
 <div className={style.Cards}>
   {
        characters.map(character=>(
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
        ))
   }
 </div>
  )
}


export default Cards

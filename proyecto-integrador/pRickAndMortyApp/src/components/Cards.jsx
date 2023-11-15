import Card from './Card';

const Cards=({characters, onClose})=> {
   return(
 <div>
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

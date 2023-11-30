import { useState } from "react";
import style from "./search.module.css"

const SearchBar=({onSearch})=> {
   
   const [id, setId] = useState('')

   const handleChange = (event)=>{
    setId(event.target.value)
   }
   
   return (
      <div >
         <input type="text" onChange={handleChange} value={id} className={style.input} /> 
         <button onClick={()=>onSearch(id)}>Agregar</button> 
       
     </div>
     
   );  
}

export default SearchBar
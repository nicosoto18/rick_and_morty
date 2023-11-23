import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

const Detail=()=>{
    
    const {id} = useParams(); //destractoring a id ya que me trae muchas cosas y no solo el id
    const [character,setCharacter] = useState({});



    

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}?`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.Detail}>

            <h2>{character.name}</h2>
             <img src={character.image} alt={character.name} />
            <h3>Status: {character.status}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin?.name}</h3>
           
            
            
            


        </div>
    )
}

export default Detail;
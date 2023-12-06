import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { addFav,removeFav } from "../../redux/actions";
import { useState,useEffect } from "react";
import style from "./Card.module.css"

const Card=(props)=>{

   
   const [isFav,setIsFav] = useState(false)
   const dispatch = useDispatch(); //function
  
   const handleFavorite=()=>{
      if(isFav){ //es true?
         setIsFav(false)
         dispatch(removeFav(props.id))
      }
      else{
         setIsFav(true)
         dispatch(addFav(props))
      }
   }

 const myFavorites= useSelector(state=>state.myFavorites)
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   
   
   return (
      <div className={style.Card}>

       {
        isFav? (<button onClick={handleFavorite}>❤️</button>)
        : (<button onClick={handleFavorite}>🤍</button>)
      }

        <button onClick={()=>props.onClose(props.id)}>X</button> 
         
        <Link to={`/Detail/${props.id}`}> <h2>{props.name}</h2> </Link>
          <img src={props.image} alt='imagen' />
          

        
                  
      </div>
   );
}

export default Card
import SearchBar from "../searchbar/SearchBar"
import { Link } from "react-router-dom";
import style from "./Nav.module.css"


const Nav = ({onSearch})=>{
    return(
      
  <nav className={style.navegacion}>
            
        <Link to="/About" > <button>About</button>  </Link> 
        <Link to="/Home"> <button>Home</button>  </Link>
        <Link to="/favorites"><button>Favorites</button></Link>
        <SearchBar onSearch={onSearch} />       
                 
 </nav>
    )
}

export default Nav;
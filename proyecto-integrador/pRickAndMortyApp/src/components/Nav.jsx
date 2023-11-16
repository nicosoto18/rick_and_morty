import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";
import About from "./about/About";
const Nav = ({onSearch})=>{
    return(
        <nav>

            <Link to="/About"> <button>About</button>  </Link> 
            <Link to="/Home"> <button>Home</button>  </Link>
               
          
            
       <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav;
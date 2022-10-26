import { Link } from "react-router-dom"

const Navbar = () => {
return(
    <div className="navbar">
          <Link to="/match">match</Link> |  <Link to="/match">chat</Link> |  <Link to="/events">events</Link>
  
    </div>
)
}

export default Navbar
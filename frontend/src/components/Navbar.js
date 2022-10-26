import { Link } from "react-router-dom"

const Navbar = () => {
return(
    <div className="navbar">
          <Link to="/dash">dashboard</Link> | <Link to="/match">match up!</Link> |  <Link to="/chat">chat</Link> |  <Link to="/event">event creation</Link>
  
    </div>
)
}

export default Navbar
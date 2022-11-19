import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <nav className="Navbar">
        <h2>Youtube</h2>
        <div className="Nav-links">
        <Link to= "/"><p>Home</p> </Link>
        <Link to="/about"><p>About</p></Link></div>
        </nav>
    )
}
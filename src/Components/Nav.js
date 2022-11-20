import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <nav className="Navbar">
        <h1 className="logo"><div className="yt"></div><span className="tit">Youtube</span></h1>
        <div className="Nav-links">
        <Link to= "/"><p>Home</p> </Link>
        <Link to="/about"><p>About</p></Link></div>
        </nav>
    )
}
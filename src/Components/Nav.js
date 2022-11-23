import { NavLink } from "react-router-dom"



export default function Nav(){
    return (
        <nav className="Navbar">
        <h1 className="logo"><div className="yt"></div><span className="tit">Youtube</span></h1>
        <div className="Nav-links">
        <NavLink className="links" to="/Home"  style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Home
                        </NavLink>
        <NavLink className="links" to="/about"  style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            About
                        </NavLink>
        <NavLink className="links" to="/"  style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Login
                        </NavLink>
        <NavLink className="links" to="/signup"  style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Sign Up
                        </NavLink>

</div>
        </nav>
    
    )
}
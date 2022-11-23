
import React from "react"
// import { useState } from "react";
// import './login.css';
import { useNavigate } from "react-router-dom"




export default function Login(){
    const navigate = useNavigate();

    // const [username, setUserName] = useState();
    // const [password, setPassword] = useState();
  
    // const handleSubmit = async e => {
    //   e.preventDefault();
    //   const token = await loginUser({
    //     username,
    //     password
    //   });
    //   setToken(token);
    // }
  


return(
<div>




<form   id='loginform'>
    {/* onSubmit={handleSubmit} */}
  <h3 id='signuptitle'>PLEASE LOG IN!</h3>
<div><label  htmlFor = 'username'>Please enter your username</label></div>

  <div>  <input  id = 'username' type="text" placeholder ="username" minLength='5' maxLength='15' required></input></div>
{/* onChange={e => setUserName(e.target.value)} */}
  <div><label  htmlFor='password'>Please enter your password</label></div>

    <div>  <input  id ="password" type="password" placeholder = "password" minLength = '5' maxLength='20' required></input></div>
{/* onChange={e => setPassword(e.target.value)} */}

  <div>  <button id="entry">Gain Entry to Clone Project</button></div>

  </form>
  <div>  <form id='SignUp'>
       <input onClick={()=>{navigate("/signup")}} id="Signbut" type="submit" value="Sign Up"/>
    </form></div>
    <div>  <form id='homeletgo'>
       <input onClick={()=>{navigate("/home")}} id="homeGo" type="submit" value="Go Home"/>
    </form></div>
    
   
</div>
)


}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };

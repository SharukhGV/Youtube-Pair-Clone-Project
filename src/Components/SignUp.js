import React from "react"
import { useNavigate } from "react-router-dom";

export default function SignUp(){
  const navigate = useNavigate();


return(
<div>

<form  id="signupform">
  {/* form and input have action */}
  <h3 id="signuptitle">Sign Up!</h3>
<div><label  htmlFor = "username">Please enter your username</label></div>

  <div>  <input id = "username" type="text" placeholder ="username" minLength="5" maxLength="15" required></input></div>

  <div><label  htmlFor="password">Please enter your password</label></div>

    <div>  <input id ="password" type="password" placeholder = "password" minLength = "5" maxLength='20' required></input></div>

    <div><label  htmlFor = "email"> Please enter your email</label> </div>
    <div> <input id="email" type="email" placeholder = "Enter Email Here" required></input></div>
  <div>  <button id="entry">Gain Entry to the Youtube Clone</button></div>
    </form>


    <div>  <form id="LOGIN" >
         <input onClick={()=>{navigate("/")}}  id="loginbut" type="submit" value="Login"/>
       </form>
</div>

<div>
<form id='homeletgo'>
       <input onClick={()=>{navigate("/home")}} id="homeGo" type="submit" value="Go Home"/>
    </form></div>

</div>
)}


import React from "react" 
import './signup.css'

export const Signup = () =>{
   return(
      <div className="col-form">
      <div className="form-container">
          <input type="text" placeholder="Email address or phone number" />
          <input type="password" placeholder="Password" />
          <button className="btn-login">Login</button>
          <a href="#">Forgotten password?</a>
          <button className="btn-new">Create new Account</button>
      </div>
      <p><a href="#"><b>Create a Page</b></a> for a celebrity, brand or business.</p>
  </div>
   )
}
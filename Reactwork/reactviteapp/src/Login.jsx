import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Login({reg}) { //registeration ka data as on object 

const[email,setEmail]=useState();
const[password,setPassword]=useState();

 function verifyData()
 {
    alert(email);
    alert(password);
   // alert(password);
   if(email==reg.email) 
   {
    alert("User is valid");
   }
   else
   {
    alert("User is invalid");
   }
   
 }


  return (
    <div>
        {email}
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={verifyData} className="btn btn-primary">Login</button>
</form>
    </div>
  )
}

export default Login
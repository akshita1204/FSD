import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Registration() {
  const [username,setusername]=useState();
  const [email,setemail]=useState();
  const [password,setPassword]=useState();

    function showData()
    {
       alert("Hiii "+ username);
       alert(email);
       alert(password);
      // alert(password);
      
    }
   
  return (
    <div>
      <div>{username}</div>

         <form>
         <div className="form-group">
    <label for="exampleInputName">Name</label>
    <input type="text" onChange={(e)=>setusername(e.target.value)} className="form-control" id="exampleInputName" placeholder="Enter your name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" onClick={showData} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Registration;
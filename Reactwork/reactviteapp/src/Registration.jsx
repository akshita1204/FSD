import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Registration() {
    function showData()
    {
       alert(email);
      // alert(password);
      
    }
   
  return (
    <div>
         <form>
         <div class="form-group">
    <label for="exampleInputName">Name</label>
    <input type="name" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputName" placeholder="name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" onClick={showData} class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Registration
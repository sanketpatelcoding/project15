import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

const Register = () => {
  return (
    <div className='container'>
    <NavLink to='/'>Home </NavLink>
   
    <form>
    <div className="row">
    <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="name" class="form-label">Name</label>
        <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="email" class="form-label">email</label>
        <input type="email"  name="email" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="age" class="form-label">age</label>
        <input type="text"  name="age" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="Mobile" class="form-label">Mobile</label>
        <input type="number"  name="mobile" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="work" class="form-label">Work</label>
        <input type="text"  name="work" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="Address" class="form-label">Address</label>
        <input type="text"  class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 col-lg-12 col-md-12 col-12">
        <label for="Description" class="form-label">Description</label>
        <textarea name="desc" className="form-control" id="" cols="30" rows="5"></textarea>
    </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
    
    </div>
  )
}

export default Register
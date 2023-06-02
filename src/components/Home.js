import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const Home = () => {
  return (
    <div className="mt-5">
    <div className="container">
        <div className="add_btn mt-2 mb-2">
        <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
        </div>

  

        <table className="table table-striped table-dark ">
        <thead >
          <tr >
            <th scope="col">id</th>
            <th scope="col">UserName</th>
            <th scope="col">email</th>
            <th scope="col">job</th>
               
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1345</td>
            <td className="d-flex justify-content-between"> 
                 <button className='btn btn-success' ><i class="fa-regular fa-eye"></i> </button>           
                 <button className='btn btn-primary' ><i class="fa-sharp fa-regular fa-pen-to-square"></i></button>
                 <button className='btn btn-danger' ><i class="fa-solid fa-trash"></i></button>
            </td>  
            </tr>
      
           
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1345</td>
            <td className="d-flex justify-content-between"> 
                 <button className='btn btn-success' ><i class="fa-regular fa-eye"></i> </button>           
                 <button className='btn btn-primary' ><i class="fa-sharp fa-regular fa-pen-to-square"></i></button>
                 <button className='btn btn-danger' ><i class="fa-solid fa-trash"></i></button>
            </td>  
            </tr>
        
        </tbody>
      </table>

        </div>
        
        
        </div>


  )
}

export default Home
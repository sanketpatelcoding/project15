import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import PreviewIcon from '@mui/icons-material/Preview';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Home = () => {
  const [getUserData, setUserData] = useState([]);
  console.log(getUserData);

  const getDatap = async (e) => {
    const res = await fetch("/getData", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 404 || !data) {
      console.log("it is error");
    } else {
      setUserData(data);
      console.log("GET Called");
    }
  };
  useEffect(() => {
    getDatap();
  }, []);


  //function to delete the data from the front end 
  const deleteUser=async (id)=>{
    const res2 = await fetch(`/deleteUserById/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
  });

  const deletedata = await res2.json();
  console.log(deletedata);

  if (res2.status === 422 || !deletedata) {
      console.log("error");
  } else {
      console.log("user deleted");
      window.location.reload(false);
    
     
  }

  }
  
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/register" className="btn btn-primary">
            Register UserData
          </NavLink>
        </div>

        <table className="table table-striped table-dark ">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">email</th>
              <th scope="col">age</th>
              
              <th scope="col">work</th>
              
            </tr>
          </thead>
          <tbody>
            {getUserData.map((element, id) => {
              return (
                <>
                  <tr>
                    <th scope="row">{id+1}</th>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.age}</td>
                  
                    <td>{element.work}</td>
                 
                    <td className="d-flex justify-content-between">
                      <NavLink to={`/viewInfo/${element._id}`}><button className="btn btn-success">
                       <PreviewIcon/>
                      </button></NavLink>
                      <NavLink to={`/edit/${element._id}`}><button className="btn btn-primary">
                       <ModeEditIcon fontSize="small"/>
                      </button></NavLink>
                      <NavLink to=''> <button  onClick={() => deleteUser(element._id)} className="btn btn-danger">
                        <DeleteOutlineOutlinedIcon fontSize="small"/>
                      </button></NavLink>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

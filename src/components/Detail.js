import React, {useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreateIcon from '@mui/icons-material/Create';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const Detail = () => {
  const history=useHistory();
  const [getUserdata, setUserdata] = useState([]);
  console.log(getUserdata);

  const { id } = useParams("");
  console.log(id);

  const getDatap = async () => {
    const res = await fetch(`/oneUserData/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
        console.log("error in getting id data ");

    } else {
        setUserdata(data)
        console.log("get data");
    }
}

//
//delete function

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
 //  window.location.reload(false);
 history.push('/')
   
}

}
//

useEffect(() => {
  getDatap();
}, [])

  return (


    
    <div className="container mt-4">
    <Card sx={{ maxWidth: 600 }}>
    <CardContent>
    <div className="add_btn">
    <NavLink to={`/edit/${getUserdata._id}`}><button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
    <button onClick={() => deleteUser(getUserdata._id)} className="btn btn-danger mx-2"><DeleteForeverIcon /></button>
    </div>
    <div className="left_view col-lg-6 col-md-6 col-12">
    <img src='../profile.png' style={{ width: 70 }} alt="imageFace"></img>
    </div>

    <h3 className="mt-3">Name: <span >{getUserdata.name}</span></h3>
    <div className="row">
 
    <div className="left_view  col-lg-6 col-md-6 col-12">
                            <h3 className="mt-3">Age: <span >{getUserdata.age}</span></h3>
                            <p className="mt-3"><AlternateEmailIcon />Email: <span>{getUserdata.email}</span></p>
                            <p className="mt-3"><BusinessCenterIcon />Occuption: <span>{getUserdata.work}</span></p>


                            </div>
                            
                            <div className="right_view  col-lg-6 col-md-6 col-12">
    
                                <p className="mt-5"><PhoneAndroidIcon />mobile: <span>{getUserdata.mobile}</span></p>
                                <p className="mt-3"><LocationOnIcon />address: <span>{getUserdata.add}</span></p>
                                <p className="mt-3"><DescriptionIcon/> Description: <span>{getUserdata.desc}</span></p>
                            </div>
                            </div>
    </CardContent>
    
    </Card>
    </div>
  )
}

export default Detail
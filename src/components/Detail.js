import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreateIcon from '@mui/icons-material/Create';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';

const Detail = () => {
  return (
    
    <div className="container mt-3">
    <Card sx={{ maxWidth: 600 }}>
    <CardContent>
    <div className="add_btn">
    <button className="btn btn-primary mx-2"><CreateIcon /></button>
    <button className="btn btn-danger mx-2"><DeleteForeverIcon /></button>
    </div>
    <div className="left_view col-lg-6 col-md-6 col-12">
    <img src='../profile.png' style={{ width: 70 }} alt="imageFace"></img>
    </div>

    <h3 className="mt-3">Name: <span ></span></h3>
    <div className="row">
 
    <div className="left_view  col-lg-6 col-md-6 col-12">
                            <h3 className="mt-3">Age: <span ></span></h3>
                            <p className="mt-3"><AlternateEmailIcon />Email: <span></span></p>
                            <p className="mt-3"><BusinessCenterIcon />Occuption: <span></span></p>


                            </div>
                            
                            <div className="right_view  col-lg-6 col-md-6 col-12">
    
                                <p className="mt-5"><PhoneAndroidIcon />mobile: <span></span></p>
                                <p className="mt-3"><LocationOnIcon />location: <span></span></p>
                                <p className="mt-3"><DescriptionIcon/> Description: <span></span></p>
                            </div>
                            </div>
    </CardContent>
    
    </Card>
    </div>
  )
}

export default Detail
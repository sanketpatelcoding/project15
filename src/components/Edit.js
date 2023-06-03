import React, {useState, useEffect } from 'react'
import { NavLink,useParams } from 'react-router-dom'


const Edit = () => {
  

//     const [getUserdata, setUserdata] = useState([]);
//   console.log(getUserdata);

    const[setInput,setValue]=useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""

    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setValue((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    //
    
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
        setValue(data)
        console.log("get data");
    }
}

useEffect(()=>{getDatap()
},[]);


    //
    const updateUser = async(e)=>{
        e.preventDefault();

        const {name,email,work,add,mobile,desc,age} = setInput;

        const res2 = await fetch(`/updateOldUser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,email,work,add,mobile,desc,age
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
         
           
        }

    }

   //

    return (
        <div className='container'>
        <NavLink to='/'>Home </NavLink>
       
        <form>
        <div className="row">
        <div class="mb-3 col-lg-5 col-md-5 col-12">
            <label for="name" class="form-label">Name</label>
            <input type="text"  value={setInput.name} onChange={setdata}  name="name" id="exampleInputEmail1" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3 col-lg-5 col-md-5 col-12">
            <label for="email" class="form-label">email</label>
            <input type="email"  name="email" value={setInput.email} onChange={setdata}  id="exampleInputEmail1" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3 col-lg-5 col-md-5 col-12">
            <label for="age" class="form-label">age</label>
            <input type="text"  name="age" value={setInput.age} onChange={setdata} id="exampleInputEmail1"  class="form-control"  />
        </div>
        <div class="mb-3 col-lg-5 col-md-5 col-12">
            <label for="Mobile" class="form-label">Mobile</label>
            <input type="number"  name="mobile" value={setInput.mobile} onChange={setdata}  id="exampleInputEmail1" class="form-control"  />
        </div>
        <div class="mb-3 col-lg-5 col-md-5 col-12">
            <label for="work" class="form-label">Work</label>
            <input type="text"  name="work" value={setInput.work} onChange={setdata} id="exampleInputEmail1"  class="form-control"  />
        </div>
        <div class="mb-3 col-lg-5 col-md-5 col-12">
            <label for="Address" class="form-label">Address</label>
            <input type="text" value={setInput.add} onChange={setdata} name='add'  id="exampleInputEmail1" class="form-control"  />
        </div>
        <div class="mb-3 col-lg-12 col-md-12 col-12">
            <label for="Description" class="form-label">Description</label>
            <textarea name="desc" value={setInput.desc} onChange={setdata}  id="exampleInputEmail1" className="form-control" id="" cols="30" rows="5"></textarea>
        </div>
      <button type="submit" onClick={updateUser} class="btn btn-primary">Submit</button>
      </div>
    </form>
        
        </div>
      )
    }

export default Edit
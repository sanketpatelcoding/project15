import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

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
              <th scope="col">mobile</th>
              <th scope="col">work</th>
              <th scope="col">address</th>
              <th scope="col">disc</th>
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
                    <td>{element.mobile}</td>
                    <td>{element.work}</td>
                    <td>{element.add}</td>
                    <td>{element.desc}</td>
                    <td className="d-flex justify-content-between">
                      <button className="btn btn-success">
                        <i class="fa-regular fa-eye"></i>{" "}
                      </button>
                      <button className="btn btn-primary">
                        <i class="fa-sharp fa-regular fa-pen-to-square"></i>
                      </button>
                      <button className="btn btn-danger">
                        <i class="fa-solid fa-trash"></i>
                      </button>
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

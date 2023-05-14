
import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function EditRestaurant() {

  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({
    Restaurant_Name: "",
    Location: "",
    Opening_Hours: "",
  });

  useEffect(() => {
    axios.get(`/post/${id}`).then((res) =>{
        if(res.data.success){
            setRestaurant({
              Restaurant_Name: res.data.post.Restaurant_Name,
              Location: res.data.post.Location,
              Opening_Hours: res.data.post.Opening_Hours,
            });
        }
    })
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setRestaurant({
      ...restaurant,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      Restaurant_Name: restaurant.Restaurant_Name,
      Location: restaurant.Location,
      Opening_Hours: restaurant.Opening_Hours,
    };

    await axios.put(`http://localhost:8800/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Restaurant Updated Successfully !!")
        setRestaurant({
          Restaurant_Name: "",
          Location: "",
          Opening_Hours: "",
        });
      }
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal" style={{ color: "#1A385A" }}>EDIT RESTAURANT</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px", color: "#1A385A"}}>Restaurant Name</label>
          <input
            type="text"
            className="form-control"
            name="Restaurant_Name"
            placeholder="Enter the name of Restaurant"
            value={restaurant.Restaurant_Name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px", color: "#1A385A" }}>Location</label>
          <input
            type="text"
            className="form-control"
            name="Location"
            placeholder="Enter the location of Restaurant"
            value={restaurant.Location}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px", color: "#1A385A" }}>Opening Hours</label>
          <input
            type="text"
            className="form-control"
            name="Opening_Hours"
            placeholder="Enter your  Opening Hours"
            value={restaurant.Opening_Hours}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="btn btn-success"
          type="submit"
          style={{ marginTop: "15px", backgroundColor: "#034752" }}
          onClick={onSubmit}
        >
          <i className="far fa-check-square"></i>
          &nbsp; Update
        </button>
      </form>
    </div>
  );
}

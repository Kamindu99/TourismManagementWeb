import React, { Component } from "react";
import axios from "axios";

export default class AddRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Restaurant_Name: "",
      Location: "",
      Opening_Hours: "",
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { Restaurant_Name, Location, Opening_Hours } = this.state;

    const data = {
      Restaurant_Name: Restaurant_Name,
      Location: Location,
      Opening_Hours: Opening_Hours,
    };

    await axios.post("http://localhost:8800/post/save", data).then((res) => {
      if (res.data.success) {
        alert("New Restaurant Added Successfully !!")
        this.setState({
          Restaurant_Name: "",
          Location: "",
          Opening_Hours: "",
        });
      }
      
    });
  };

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal" style={{ color: "#1A385A" }}>
          ADD A NEW RESTAURANT
        </h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px", color: "#1A385A" }}>
              Restaurant Name
            </label>
            <input
              type="text"
              className="form-control"
              name="Restaurant_Name"
              placeholder="Enter the name of Restaurant"
              value={this.state.Restaurant_Name}
              onChange={this.handleInputChange}
            />
          </div>
  
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px", color: "#1A385A" }}>
              Location
            </label>
            <input
              type="text"
              className="form-control"
              name="Location"
              placeholder="Enter the location of Restaurant"
              value={this.state.Location}
              onChange={this.handleInputChange}
            />
          </div>
  
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px", color: "#1A385A" }}>
              Opening Hours
            </label>
            <input
              type="text"
              className="form-control"
              name="Opening_Hours"
              placeholder="Enter your Opening Hours"
              value={this.state.Opening_Hours}
              onChange={this.handleInputChange}
            />
          </div>
  
          <button
            className="btn btn-primary"
            type="submit"
            style={{ marginTop: "15px", backgroundColor: "#034752" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>&nbsp; Save
          </button>
        </form>
      </div>
    );
  }  
}

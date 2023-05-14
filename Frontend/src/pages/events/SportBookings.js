import React from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";
// import './food.css'

class ComponentToPrintBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios
      .get("/sportbooking")
      .then((res) => {
        this.setState({
          posts: res.data,
        });

      });
  }

  onDelete = (id) => {

    axios.delete(`/sportbooking/delete/${id}`).then((res) => {


      window.location.reload()
    })
  }


  setaa = (id) => {

    const data = {
      cmp: true
    }
    axios.put(`/sportbooking/update/${id}`, data);
    window.location.reload();

  }

  render() {

    return (
      <div>

        <div
          className=""
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/02/78/42/76/360_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg')",
            minHeight: "650px", backgroundRepeat: "no-repeat", backgroundSize: "cover"
          }}
        >
          <br />
          <div >
            <div
              class="d-flex flex-row align-items-center mb-2"
              style={{
                backgroundColor: "hsla(90, 100%, 0%, 0.5)",
                color: "white",
                paddingTop: "10px",
              }}
            >
              <div class="form-outline mb-2 ">
                <h2 style={{ marginInlineStart: "60px" }}>

                  <b>Sport Booking Details</b>
                </h2>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="form-outline mb-2 ">
                <ReactToPrint
                  trigger={() => (
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{ marginInlineStart: "380%", width: "180px" }}
                    >
                      <i class="fas fa-print me-2"></i>Print this out!
                    </button>
                  )}
                  content={() => this.componentRef}
                />
              </div>
            </div>

            <div ref={(Component) => (this.componentRef = Component)}>
              <hr />
              <div
                style={{ marginInlineEnd: "10px", marginInlineStart: "10px" }}
              >
            
                <div class="bg-image intro mt-2" >
                  <div class="mask d-flex align-items-center">
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="col-12">
                          <div class="card cardas">
                            <div class="card-body p-0">
                              <div class="table-responsive table-scroll table-scrollas" data-mdb-perfect-scrollbar="true" style={{ position: "relative" }}>
                                <table class="table tableas table-striped mb-0" >
                                  <thead className="theadas" style={{ backgroundColor: "#002d72" }}>
                                    <tr>

                                      <th scope="col">#</th>
                                      <th scope="col">Event Name</th>
                                      <th scope="col">Event Date</th>
                                      <th scope="col">Event Place</th>
                                      <th scope="col">Event Time</th>
                                      <th scope="col">Ticket</th>
                                      <th scope="col">Accomndation</th>
                                      <th scope="col">Transport</th>
                                      <th scope="col">Total Price</th>
                                      <th scope="col">Booked Date</th>
                                      <th scope="col">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody >
                                    {this.state.posts.map((posts, index) => (
                                      <tr key={index} style={{ fontWeight: "bold" }}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{posts.eventrname}</td>
                                        <td>{posts.eventDate}</td>
                                        <td>{posts.eventLocation}</td>
                                        <td>{posts.eventTime}</td>
                                        <td>{posts.ticketPrice}</td>
                                        <td>{posts.accomendation}</td>
                                        <td>{posts.transport}</td>
                                        <td>Rs. {posts.total}</td>
                                        <td>{posts.bookingDate}</td>
                                        <td>
                                          <button onClick={() => this.setaa(posts._id)} style={{ width: "160px", backgroundColor: posts.cmp == true ? "red" : "" }} className="btn btn-success">
                                            {posts.cmp == true ? <text>Confirm</text> : null}
                                            {posts.cmp == false ? <text>Not Accept</text> : null}
                                          </button>

                                          {/* <button onClick={()=>this.onDelete(posts._id)}className="btn btn-success">
                        delete
                </button> */}


                                        </td>

                                      </tr>
                                    ))}
                                  </tbody>
                                </table>


                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentToPrintBooking;

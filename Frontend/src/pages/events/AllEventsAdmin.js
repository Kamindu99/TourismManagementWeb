import React from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";

class ComponentToPrintBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sportposts: [],
            enterposts: [],
            claposts: [],
            eduposts: [],
            modalShow: false,
            eventType: "4",
            subEvents: [],
            postId: '',
        };
    }

    componentDidMount() {
        this.retrievesportPosts();
        this.retrieveEnterPosts();
        this.retrieveCulPosts();
        this.retrieveEduPosts();
    }

    retrievesportPosts() {
        axios
            .get("/sportevent/?eventType=SPORT EVENTS")
            .then((res) => {

                this.setState({
                    sportposts: res.data,
                });

            });
    }

    retrieveCulPosts() {
        axios
            .get("/sportevent/?eventType=CULTURAL EVENTS")
            .then((res) => {

                this.setState({
                    claposts: res.data,
                });

            });
    }

    retrieveEnterPosts() {
        axios
            .get("/sportevent/?eventType=ENTERTAINMENT EVENTS")
            .then((res) => {

                this.setState({
                    enterposts: res.data,
                });

            });
    }
    retrieveEduPosts() {
        axios
            .get("/sportevent/?eventType=EDUCATIONAL EVENTS")
            .then((res) => {

                this.setState({
                    eduposts: res.data,
                });

            });
    }

    onDelete = (id) => {
        axios.delete(`/sportevent/delete/${id}`).then((res) => {
            alert("Deleted Successfully")
            window.location.reload()
        })
    }

    onDeletesubEvent = (id, fid) => {
        axios.delete(`/sportevent/${id}/${fid}`).then((res) => {
            alert("Event Deleted Successfully")
            window.location.reload()
        })
    }

    render() {

        return (
            <div>

                <div
                    className=""
                    style={{
                        backgroundImage:
                            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEX5Ew1ML3M8kZm0DMUhPN5cVNkEtH_9rAl4NGu2ACWAjXg0mo9oBMFXk4ss0dfTYDydQ&usqp=CAU')",
                        minHeight: "750px", backgroundRepeat: "no-repeat", backgroundSize: "cover"
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

                                    <b>All Event Details</b>
                                </h2>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <button
                                type="button"
                                class="btn btn-danger"
                                style={{ marginInlineStart: "35%", width: "120px" }}
                                onClick={() => { window.location.href = "/eventadd" }}
                            >
                                <i class="fas fa-plus me-2"></i>Add New
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                style={{ marginInlineStart: "3%", width: "200px" }}
                                onClick={() => { window.location.href = "/allbookings" }}
                            >
                                <i class="fas fa-eye me-2"></i>View Bookings
                            </button>
                            <ReactToPrint
                                trigger={() => (
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        style={{ marginInlineStart: "3%", width: "180px" }}
                                    >
                                        <i class="fas fa-print me-2"></i>Print this out!
                                    </button>
                                )}
                                content={() => this.componentRef}
                            />
                        </div>


                        <div class="dropdown mt-3 mb-5" >
                            <button style={{ width: "540px", height: "60px", textAlign: "left", fontSize: "19px" }} class="form-control  dropdown-toggle dropdown-toggle2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {this.state.eventType === "1" ? "Sport Events" : this.state.eventType === "2" ? "Culture Events" : this.state.eventType === "4" ? "All Events" : "ENTERTAINMENT EVENTS"}
                            </button>

                            <ul class="dropdown-menu" style={{ width: "540px", cursor: "pointer" }}>
                                <li><a class="dropdown-item" onClick={() => { this.setState({ eventType: '4' }) }}>All EVENTS</a></li>
                                <li><a class="dropdown-item" onClick={() => { this.setState({ eventType: '1' }) }} >Sport Events</a></li>
                                <li><a class="dropdown-item" onClick={() => { this.setState({ eventType: '2' }) }}>Culture Events</a></li>
                                <li><a class="dropdown-item" onClick={() => { this.setState({ eventType: '3' }) }}>ENTERTAINMENT EVENTS</a></li>
                                <li><a class="dropdown-item" onClick={() => { this.setState({ eventType: '5' }) }}>EDUCATIONAL EVENTS</a></li>
                            </ul>
                        </div>

                        <div ref={(Component) => (this.componentRef = Component)}>
                            <hr />
                            <div
                                style={{ marginInlineEnd: "10px", marginInlineStart: "10px" }}

                            >

                                <div hidden={this.state.eventType == "2" || this.state.eventType == "3" || this.state.eventType == "5"}>
                                    <div class="form-outline mb-2 ">
                                        <h4 style={{ marginInlineStart: "60px", color: 'white' }}>

                                            <b>Sports Event Details</b>
                                        </h4>
                                    </div>
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
                                                                                <th  >Event Description</th>
                                                                                <th scope="col">Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody >
                                                                            {this.state.sportposts.map((posts, index) => (
                                                                                <tr key={index} style={{ fontWeight: "bold" }}>
                                                                                    <th scope="row">{index + 1}</th>
                                                                                    <td>{posts.eventName}</td>
                                                                                    <td className="single-line">{posts.description}</td>


                                                                                    <td>



                                                                                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary me-3" onClick={() => { this.setState({ subEvents: posts.eventsubItems, postId: posts._id }) }}>
                                                                                            View Events
                                                                                        </button>
                                                                                        <button onClick={() => window.location.replace(`/eventedit/${posts._id}`)} className="btn btn-success me-3">
                                                                                            Edit
                                                                                        </button>

                                                                                        <button onClick={() => this.onDelete(posts._id)} className="btn btn-danger">
                                                                                            Delete
                                                                                        </button>


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

                                <div hidden={this.state.eventType == "1" || this.state.eventType == "3" || this.state.eventType == "5"}>
                                    <div class="form-outline mb-2 mt-5 ">
                                        <h4 style={{ marginInlineStart: "60px", color: 'white' }}>

                                            <b>CULTURAL Event Details</b>
                                        </h4>
                                    </div>
                                    <div class="bg-image intro mt-2" >
                                        <div class="mask d-flex align-items-center">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col-12">
                                                        <div class="card cardas">
                                                            <div class="card-body p-0">
                                                                <div class="table-responsive table-scroll table-scrollas" data-mdb-perfect-scrollbar="true" style={{ position: "relative" }}>
                                                                    <table class="table tableas table-striped mb-0" >
                                                                        <thead  className="theadas" style={{ backgroundColor: "#002d72" }}>
                                                                            <tr>

                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Event Name</th>
                                                                                <th scope="col">Event Description</th>
                                                                                <th scope="col">Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody >
                                                                            {this.state.claposts.map((posts, index) => (
                                                                                <tr key={index} style={{ fontWeight: "bold" }}>
                                                                                    <th scope="row">{index + 1}</th>
                                                                                    <td>{posts.eventName}</td>
                                                                                    <td className="single-line">{posts.description}</td>


                                                                                    <td>



                                                                                        <button data-bs-toggle="modal" data-bs-target="#exampleModal2" className="btn btn-primary me-3" onClick={() => { this.setState({ subEvents: posts.eventsubItems, postId: posts._id }) }}>
                                                                                            View Events
                                                                                        </button>
                                                                                        <button onClick={() => window.location.replace(`/eventedit/${posts._id}`)} className="btn btn-success me-3">
                                                                                            Edit
                                                                                        </button>

                                                                                        <button onClick={() => this.onDelete(posts._id)} className="btn btn-danger">
                                                                                            Delete
                                                                                        </button>


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

                                <div hidden={this.state.eventType == "2" || this.state.eventType == "1" || this.state.eventType == "5"}>
                                    <div class="form-outline mb-2 mt-5 ">
                                        <h4 style={{ marginInlineStart: "60px", color: 'white' }}>

                                            <b>ENTERTAINMENT Event Details</b>
                                        </h4>
                                    </div>
                                    <div class="bg-image intro mt-2" >
                                        <div class="mask d-flex align-items-center">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col-12">
                                                        <div class="card cardas">
                                                            <div class="card-body p-0">
                                                                <div class="table-responsive table-scroll table-scrollas" data-mdb-perfect-scrollbar="true" style={{ position: "relative" }}>
                                                                    <table class="table tableas table-striped mb-0" >
                                                                        <thead  className="theadas" style={{ backgroundColor: "#002d72" }}>
                                                                            <tr>

                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Event Name</th>
                                                                                <th scope="col">Event Description</th>
                                                                                <th scope="col">Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody >
                                                                            {this.state.enterposts.map((posts, index) => (
                                                                                <tr key={index} style={{ fontWeight: "bold" }}>
                                                                                    <th scope="row">{index + 1}</th>
                                                                                    <td>{posts.eventName}</td>
                                                                                    <td className="single-line">{posts.description}</td>


                                                                                    <td>



                                                                                        <button data-bs-toggle="modal" data-bs-target="#exampleModal3" className="btn btn-primary me-3" onClick={() => { this.setState({ subEvents: posts.eventsubItems, postId: posts._id }) }}>
                                                                                            View Events
                                                                                        </button>
                                                                                        <button onClick={() => window.location.replace(`/eventedit/${posts._id}`)} className="btn btn-success me-3">
                                                                                            Edit
                                                                                        </button>

                                                                                        <button onClick={() => this.onDelete(posts._id)} className="btn btn-danger">
                                                                                            Delete
                                                                                        </button>


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


                                <div hidden={this.state.eventType == "2" || this.state.eventType == "1" || this.state.eventType == "3"}>
                                    <div class="form-outline mb-2 mt-5 ">
                                        <h4 style={{ marginInlineStart: "60px", color: 'white' }}>

                                            <b>EDUCATIONAL Event Details</b>
                                        </h4>
                                    </div>
                                    <div class="bg-image intro mt-2" >
                                        <div class="mask d-flex align-items-center">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col-12">
                                                        <div class="card cardas">
                                                            <div class="card-body p-0">
                                                                <div class="table-responsive table-scroll table-scrollas" data-mdb-perfect-scrollbar="true" style={{ position: "relative" }}>
                                                                    <table class="table tableas table-striped mb-0" >
                                                                        <thead  className="theadas" style={{ backgroundColor: "#002d72" }}>
                                                                            <tr>

                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Event Name</th>
                                                                                <th scope="col">Event Description</th>
                                                                                <th scope="col">Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody >
                                                                            {this.state.eduposts.map((posts, index) => (
                                                                                <tr key={index} style={{ fontWeight: "bold" }}>
                                                                                    <th scope="row">{index + 1}</th>
                                                                                    <td>{posts.eventName}</td>
                                                                                    <td className="single-line">{posts.description}</td>


                                                                                    <td>



                                                                                        <button data-bs-toggle="modal" data-bs-target="#exampleModal3" className="btn btn-primary me-3" onClick={() => { this.setState({ subEvents: posts.eventsubItems, postId: posts._id }) }}>
                                                                                            View Events
                                                                                        </button>
                                                                                        <button onClick={() => window.location.replace(`/eventedit/${posts._id}`)} className="btn btn-success me-3">
                                                                                            Edit
                                                                                        </button>

                                                                                        <button onClick={() => this.onDelete(posts._id)} className="btn btn-danger">
                                                                                            Delete
                                                                                        </button>


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


                                <hr />
                                <hr />



                            </div>
                        </div>





                    </div>
                </div>



                <div class="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Sub Events Details</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="modal-body">
                                    {this.state.subEvents.length != 0 ?

                                        <>

                                            <div class="">
                                                <div
                                                    style={{ marginInlineEnd: "5px" }}

                                                >
                                                    <table
                                                        class="table tableas table-bordered border-light "
                                                        style={{ backgroundColor: "hsla(90, 0%,90%, 0.9)" }}
                                                    >
                                                        <thead  className="theadas" class="table-dark">
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Event Name</th>
                                                                <th scope="col">Event Location</th>
                                                                <th scope="col">Event Date</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody >

                                                            <>
                                                                {this.state.subEvents.map((post, index) => (
                                                                    <tr key={index} style={{ fontWeight: "bold" }}>
                                                                        <th scope="row">{index + 1}</th>
                                                                        <td>{post.eventName}</td>
                                                                        <td>{post.eventLocation}</td>
                                                                        <td>{post.eventDate} </td>

                                                                        <td>
                                                                            <button onClick={() => this.onDeletesubEvent(this.state.postId, post._id)} className="btn btn-danger">
                                                                                Delete
                                                                            </button>
                                                                        </td>

                                                                    </tr>

                                                                ))}
                                                            </>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </>

                                        :
                                        <>

                                            <div class="alert alert-danger" role="alert" style={{ width: "100%" }}>
                                                <h4 class="alert-heading">No Events</h4>

                                            </div>

                                        </>
                                    }
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="modal modal-lg fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Sub Events Details</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="modal-body">

                                    {this.state.subEvents.length != 0 ?

                                        <>

                                            <div class="">
                                                <div
                                                    style={{ marginInlineEnd: "5px" }}

                                                >
                                                    <table
                                                        class="table tableas table-bordered border-light "
                                                        style={{ backgroundColor: "hsla(90, 0%,90%, 0.9)" }}
                                                    >
                                                        <thead  className="theadas" class="table-dark">
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Event Name</th>
                                                                <th scope="col">Event Location</th>
                                                                <th scope="col">Event Date</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody >

                                                            <>
                                                                {this.state.subEvents.map((post, index) => (

                                                                    <tr key={index} style={{ fontWeight: "bold" }}>
                                                                        <th scope="row">{index + 1}</th>
                                                                        <td>{post.eventName}</td>
                                                                        <td>{post.eventLocation}</td>
                                                                        <td>{post.eventDate} </td>

                                                                        <td>
                                                                            <button onClick={() => this.onDeletesubEvent(this.state.postId, post._id)} className="btn btn-danger">
                                                                                Delete
                                                                            </button>
                                                                        </td>

                                                                    </tr>

                                                                ))}
                                                            </>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </>

                                        :
                                        <>

                                            <div class="alert alert-danger" role="alert" style={{ width: "100%" }}>
                                                <h4 class="alert-heading">No Events</h4>

                                            </div>

                                        </>
                                    }

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="modal modal-lg fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Sub Events Details</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="modal-body">

                                    {this.state.subEvents.length != 0 ?

                                        <>

                                            <div class="">
                                                <div
                                                    style={{ marginInlineEnd: "5px" }}

                                                >
                                                    <table
                                                        class="table tableas table-bordered border-light "
                                                        style={{ backgroundColor: "hsla(90, 0%,90%, 0.9)" }}
                                                    >
                                                        <thead  className="theadas" class="table-dark">
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Event Name</th>
                                                                <th scope="col">Event Location</th>
                                                                <th scope="col">Event Date</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody >
                                                            <>
                                                                {this.state.subEvents.map((post, index) => (
                                                                    <>

                                                                        <tr key={index} style={{ fontWeight: "bold" }}>
                                                                            <th scope="row">{index + 1}</th>
                                                                            <td>{post.eventName}</td>
                                                                            <td>{post.eventLocation}</td>
                                                                            <td>{post.eventDate} </td>

                                                                            <td>
                                                                                <button onClick={() => this.onDeletesubEvent(this.state.postId, post._id)} className="btn btn-danger">
                                                                                    Delete
                                                                                </button>
                                                                            </td>

                                                                        </tr>


                                                                    </>

                                                                ))}
                                                            </>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </>

                                        :
                                        <>

                                            <div class="alert alert-danger" role="alert" style={{ width: "100%" }}>
                                                <h4 class="alert-heading">No Events</h4>

                                            </div>

                                        </>
                                    }
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ComponentToPrintBooking;

import React, { useState, useMemo, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-jsonschema-form";
import { useObjectFieldPropertiesAsObject } from "../../components/utils/input";
import { IilDatePickerDialogRjsf, IilTimePickerDialogRjsf } from "../../components/utils/DatePicker.js";

const schema = {
    "type": "object",
    "title": "Event Information",
    "required": [],
    "properties": {
        "eventType": {
            "type": "string",
            "title": "Event Type",
            enum: ["SPORT EVENTS", "CULTURAL EVENTS", "ENTERTAINMENT EVENTS"],
        },
        "eventName": {
            "type": "string",
            "title": "Event Name",
            "default": ""
        },
        "description": {
            "type": "string",
            "title": "Event Description",
            "default": ""
        },
        "eventImage": {
            "type": "string",
            "title": "Event Image",
            "default": ""
        },
        "eventsubItems": {
            "type": "array",
            "title": "",
            "items": {
                "type": "object",
                "required": [],
                "properties": {
                    "eventName": {
                        "type": "string",
                        "title": 'Event Name',
                        "default": ""
                    },
                    "eventLocation": {
                        "type": "string",
                        "title": 'Event Location',
                        "default": ""
                    },
                    "eventDate": {
                        "type": "string",
                        "title": 'Event Date',
                        "default": ""
                    },
                    "eventTime": {
                        "type": "string",
                        "title": 'Event Time',
                        "default": ""
                    },
                    "tickets": {
                        "type": "array",
                        "title": "",
                        "items": {
                            "type": "object",
                            "required": [],
                            title: "Tickets",
                            "properties": {
                                "ticketName": {
                                    type: "string",
                                    title: "Ticket Name",
                                    "default": ""
                                },
                                "ticketprice": {
                                    type: "string",
                                    title: "Ticket Price",
                                    "default": ""
                                },

                            }
                        }
                    },
                    "accomendation": {
                        "type": "array",
                        "title": "",
                        "items": {
                            "type": "object",
                            "required": [],
                            title: "Accomendation",
                            "properties": {
                                "accomendationName": {
                                    type: "string",
                                    title: "Accomendation Name",
                                    "default": ""
                                },
                                "accomendationprice": {
                                    type: "string",
                                    title: "Accomendation Price",
                                    "default": ""
                                }
                            }
                        }
                    },
                    "transport": {
                        "type": "array",
                        "title": "",
                        "items": {
                            "type": "object",
                            "required": [],
                            title: "Transport",
                            "properties": {
                                "transportName": {
                                    type: "string",
                                    title: "Transport Name",
                                    "default": ""
                                },
                                "transportprice": {
                                    type: "string",
                                    title: "Transport Price",
                                    "default": ""
                                }
                            }
                        }
                    }
                }
            }
        },
    }
}

function CategoryFormTemplate(props) {
    const row = "formCard__row";

    let elements = useObjectFieldPropertiesAsObject(props);
    return (
        <div className="multiFormContainer" style={{ padding: '10px', background: "hsl(0,0%,0%,0.05)" }}>

            <h4 className="mt-2 mb-3">Event Type</h4>
            <div class="row g-12">
                <div className="col mb-3">{elements.eventType}</div>
                <div className="col mb-3"></div>
            </div>

            {props.formContext.eventType ?
                <>
                    <h4 className="mt-2 mb-3">Event Details</h4>
                    <div class="row g-12">
                        <div className="col mb-3">{elements.eventName}</div>
                        <div className="col mb-3">{elements.description}</div>
                        <div className="col mb-3">{elements.eventImage}</div>
                    </div>

                    <h4 className="mt-2 mb-3" hidden={props.formContext.eventType != "SPORT EVENTS"}>SPORT EVENTS Details</h4>
                    <h4 className="mt-2 mb-3" hidden={props.formContext.eventType != "CULTURAL EVENTS"}>CULTURAL EVENTS Details</h4>
                    <h4 className="mt-2 mb-3" hidden={props.formContext.eventType != "ENTERTAINMENT EVENTS"}>ENTERTAINMENT EVENTS Details</h4>
                    {elements.eventsubItems}

                </>

                :
                <>
                    <div className={row}>
                        <div class="alert alert-danger" role="alert" style={{ width: "50%" }}>
                            Please Select a Event Type ...!

                        </div>
                    </div>
                </>
            }
        </div >
    )
}

function ArrayFormTemplate(props) {

    let elements = useObjectFieldPropertiesAsObject(props);
    return (
        <div className="multiFormContainer mb-3" style={{ border: '2px solid', padding: '10px', boxShadow: '2px 2px' }}>
            <div class="row g-12 ms-3 me-2 mb-4" >

                <div className="col mb-3">{elements.eventName}</div>
                <div className="col mb-3">{elements.eventLocation}</div>
                <div className="col mb-3">{elements.eventDate}</div>
                <div className="col mb-3"> {elements.eventTime}</div>
            </div>


            <div class="row g-12 ms-3 me-2 mb-4" >

                <div className="col mb-2 me-2" style={{ background: "hsl(0,0%,0%,0.08)" }}> <h4 className="mt-2 mb-3 ms-2">Ticket Details</h4>
                    {elements.tickets}</div>
                <div className="col mb-2 me-2" style={{ background: "hsl(0,0%,0%,0.08)" }}> <h4 className="mt-2 mb-3 ms-2">Accomendation Details</h4>
                    {elements.accomendation}</div>
                <div className="col mb-2 me-2" style={{ background: "hsl(0,0%,0%,0.08)" }}><h4 className="mt-2 mb-3 ms-2">Transport Details</h4>
                    {elements.transport}</div>
            </div>


        </div >
    )
}

function TicketArrayFormTemplate(props) {

    let elements = useObjectFieldPropertiesAsObject(props);
    return (
        <>

            <div className="multiFormContainer">
                <div class="row g-12 ms-2 me-2 mb-2" >

                    <div className="col mb-2">{elements.ticketName}</div>
                    <div className="col mb-2">{elements.ticketprice}</div>
                </div>
            </div>
        </>
    )
}

function AccomendationArrayFormTemplate(props) {

    let elements = useObjectFieldPropertiesAsObject(props);
    return (
        <>

            <div className="multiFormContainer">
                <div class="row g-12 ms-2 me-2 mb-2" >

                    <div className="col mb-2">{elements.accomendationName}</div>
                    <div className="col mb-2">{elements.accomendationprice}</div>
                </div>
            </div>
        </>
    )
}

function TransportArrayFormTemplate(props) {

    let elements = useObjectFieldPropertiesAsObject(props);
    return (
        <>
            <div className="multiFormContainer">
                <div class="row g-12 ms-2 me-2 mb-2" >

                    <div className="col mb-2">{elements.transportName}</div>
                    <div className="col mb-2">{elements.transportprice}</div>
                </div>
            </div>
        </>
    )
}

function ArrayFieldTemplate(props) {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: "16" }}>
                {props.items.map((element) => element.children)}
            </div>
            <div style={{ flex: "1" }}>
                {props.canAdd && <button type="button" className="btn btn-outline-primary ms-2"
                    onClick={props.onAddClick}>  Add</button>}
            </div>
        </div>
    );
}

const uiSchema = {
    "ui:ObjectFieldTemplate": CategoryFormTemplate,
    eventType: {
        "ui:widget": "select",
        "ui:placeholder": "Select a Event Type",
    },
    eventName: {
    },
    description: {
    },
    eventImage: {
    },
    eventsubItems: {
        items: {
            "ui:ObjectFieldTemplate": ArrayFormTemplate,
            eventName: {
            },
            eventLocation: {
            },
            eventDate: {
                "ui:widget": IilDatePickerDialogRjsf
            },
            eventTime: {
                "ui:widget": IilTimePickerDialogRjsf
            },
            tickets: {
                items: {
                    "ui:ObjectFieldTemplate": TicketArrayFormTemplate,
                    ticketName: {
                    },
                    ticketprice: {
                    },
                    ticket1500: {
                    }
                }

            },
            accomendation: {
                items: {
                    "ui:ObjectFieldTemplate": AccomendationArrayFormTemplate,
                    accomendationName: {
                    },
                    accomendationprice: {
                    },
                    accomendation1500: {
                    }
                }
            },
            transport: {
                items: {
                    "ui:ObjectFieldTemplate": TransportArrayFormTemplate,
                    transportName: {
                    },
                    transportprice: {
                    },
                    transport1500: {
                    }

                }
            }

        }
    }
}


export default function EditEvents() {

    const { id } = useParams()

    let navigate = useNavigate();

    const formInit = {
        eventType: '',
        eventName: '',
        description: '',
        eventImage: '',
        eventsubItems: [
            {
                eventName: '',
                eventLocation: '',
                eventDate: new Date().toISOString().slice(0, 10),
                eventTime: '',
                tickets:
                    [
                        {
                            ticketprice: '',
                            ticketName: ''
                        }
                    ],
                accomendation:
                    [
                        {
                            accomendationprice: '',
                            accomendationName: ''
                        }
                    ],
                transport:
                    [
                        {
                            transportprice: '',
                            transportName: ''
                        }
                    ]
            }
        ]
    }
    const [formData, setFormData] = useState(formInit)

    useEffect((e) => {
        //Runs on every render
        axios.get(`/sportevent/${id}/`).then(res => [
            setFormData(res.data)
        ])
            .catch((error) => console.log(error));
    }, []);

    const onSubmit = (e) => {
        // action on form submit button click 
        let formData = e.formData

        axios.put(`/sportevent/${id}`, formData)
            .then((res) => {
                alert("Event Update Successful");
                window.location.href = "/admin-event";
            });

    }

    const onChange = (e) => {
        setFormData(e.formData)
    }

    const onClear = () => {
        setFormData(formInit)
    }

    const formValidate = (formData, err) => {
        if (typeof formData.eventName == "undefined" || formData.eventName == null || formData.eventName == "") {
            err.eventName.addError(`is a required property`)
        }
        if (typeof formData.description == "undefined" || formData.description == null || formData.description == "") {
            err.description.addError(`is a required property`)
        }
        if (typeof formData.eventImage == "undefined" || formData.eventImage == null || formData.eventImage == "") {
            err.eventImage.addError(`is a required property`)
        }
        {
            formData.eventsubItems.map((item, index) => {
                if (typeof item.eventName == "undefined" || item.eventName == null || item.eventName == "") {
                    err.eventsubItems[index].eventName.addError(`is a required property`)
                }
                if (typeof item.eventLocation == "undefined" || item.eventLocation == null || item.eventLocation == "") {
                    err.eventsubItems[index].eventLocation.addError(`is a required property`)
                }
                if (typeof item.eventDate == "undefined" || item.eventDate == null || item.eventDate == "") {
                    err.eventsubItems[index].eventDate.addError(`is a required property`)
                }
                if (typeof item.eventTime == "undefined" || item.eventTime == null || item.eventTime == "") {
                    err.eventsubItems[index].eventTime.addError(`is a required property`)
                }
                {
                    item.tickets.map((item, index) => {
                        if (typeof item.ticketprice == "undefined" || item.ticketprice == null || item.ticketprice == "") {
                            err.eventsubItems[index].tickets[index].ticketprice.addError(`is a required property`)
                        }
                        if (typeof item.ticketName == "undefined" || item.ticketName == null || item.ticketName == "") {
                            err.eventsubItems[index].tickets[index].ticketName.addError(`is a required property`)
                        }
                    })
                }
                {
                    item.accomendation.map((item, index) => {
                        if (typeof item.accomendationprice == "undefined" || item.accomendationprice == null || item.accomendationprice == "") {
                            err.eventsubItems[index].accomendation[index].accomendationprice.addError(`is a required property`)
                        }
                        if (typeof item.accomendationName == "undefined" || item.accomendationName == null || item.accomendationName == "") {
                            err.eventsubItems[index].accomendation[index].accomendationName.addError(`is a required property`)
                        }
                    })
                }
                {
                    item.transport.map((item, index) => {
                        if (typeof item.transportprice == "undefined" || item.transportprice == null || item.transportprice == "") {
                            err.eventsubItems[index].transport[index].transportprice.addError(`is a required property`)
                        }
                        if (typeof item.transportName == "undefined" || item.transportName == null || item.transportName == "") {
                            err.eventsubItems[index].transport[index].transportName.addError(`is a required property`)
                        }
                    })
                }

            })

        }
        return err
    }

    console.log(formData);
    return (
        <div id="bookadd">
            <div>
                <br />
                <div className="p-5">
                    <div className="w-100 mx-auto shadow p-5" style={{ background: "hsl(100,100%,100%,0.97)" }}>
                        <h2 className="text-center mb-4" style={{ padding: "10px", background: "hsl(100,95%,95%,0.97)" }}>Edit Event Details</h2>
                        <hr />

                        <Form
                            schema={schema}
                            uiSchema={uiSchema}
                            onSubmit={onSubmit}
                            onChange={onChange}
                            formData={formData}
                            validate={formValidate}
                            formContext={{ eventType: formData.eventType }}
                            liveValidate={false}
                            showErrorList={false}
                            ArrayFieldTemplate={ArrayFieldTemplate}
                        >

                            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                                <button
                                    class="btn btn-dark me-md-2 w-25"
                                    onClick={() => {navigate("/admin-event")}}
                                    type="button"
                                >
                                    Back
                                </button>

                                <button
                                    class="btn btn-success w-25"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};
import React, { useState, useEffect } from "react"
import axios from "axios";

export function VehiclSelectField(props) {

    const [options, setOptions] = useState([]);


    useEffect(() => {
        axios.get(`/api/vehicles`).then(res => [
            console.log(res.data),
            setOptions(res.data.map(vehicle => {
                return ({
                    label: vehicle.name,
                    value: vehicle.name   
                })
            }))
        ])
            .catch((error) => console.log(error));
    }, [])
    

    const { uiSchema, formData, onChange } = props;

    return (
        <select {...props} onChange={e => onChange(e.target.value)} className="form-control">
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

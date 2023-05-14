import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function IilDatePickerDialogRjsf({ formData, schema, onChange, onBlur, label, name, idSchema, readonly, ...props }) {

  const [selectedDate, setSelectedDate] = useState(new Date());

  console.log(selectedDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-'));
  };

  return (
    <div>
         <DatePicker
        id="date"
        className="form-control"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
        //value={selectedDate}
      />

    </div>
  );
}

export function IilTimePickerDialogRjsf({ formData, schema, onChange, onBlur, label, name, idSchema, readonly, ...props }) {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const timeString = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true});
    onChange(timeString);
  };

  return (
    <div>
         <DatePicker
        id="date"
        className="form-control"
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />

    </div>
  );
}




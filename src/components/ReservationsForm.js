import React from "react";
import { useState } from "react";



const ReservationsForm = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")

   const handleSubmit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    e.preventDefault();
    setDate(e.target.value);
    if (typeof props.dispatch === "function"){
      props.dispatch(e.target.value);
    }
   }

  return (
    <div className="reservations-body">
      <div className="reservations-container">
        <div className="reservations-content">
          <div className="reservations-title">
            <h1>Reserve your table</h1>
          </div>
          <section className="reservations-form">
            <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "10px" }}>
              <label htmlFor="res-date">Choose date</label>
              <input type="date" id="res-date" value={date} onChange={handleChange} required />

              <label htmlFor="res-time">Choose time</label>
              <select id="res-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a time</option>
                {Array.isArray(props.availableTimes?.availableTimes) && props.availableTimes.availableTimes.length > 0 ? (
                  props.availableTimes.availableTimes.map((availableTime) => (
                    <option key={availableTime}>{availableTime}</option>
                  ))
                ) : (
                  <option disabled>No times available</option>
                )}
              </select>

              <label htmlFor="guests">Number of guests</label>
              <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" max="10" id="guests" required />

              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>

              <input aria-label="On Click" className="button" type={"submit"} value="Submit" />

            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReservationsForm;

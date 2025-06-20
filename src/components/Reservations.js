import React from "react";
import ReservationsForm from "./ReservationsForm";


const Reservations= props => {

    return (

        <ReservationsForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Reservations;
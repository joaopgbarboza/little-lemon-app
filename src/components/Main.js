import React, { useReducer, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Reservations from "./Reservations";
import ReservationConfirmed from "./ReservationConfirmed";
import HomePage from "./HomePage";


const Main = () => {

    // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

    //Chrome was blocking running the script on the index page so I added it here. "https://chromestatus.com/feature/5629709824032768"
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }
    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/reserved")
        }
    }

    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reservations" element={<Reservations availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/reserved" element={<ReservationConfirmed/> } />
            </Routes>
        </main>


    )
}

export default Main;
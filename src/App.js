import React from "react";
import './App.scss';
import {  Route, Routes } from "react-router-dom";

import Reservations from "./components/Reservations";
import HomePage from "./components/HomePage";
import ReservationConfirmed from "./components/ReservationConfirmed";

function App() {
  return (
    <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path='/reservations' element={<Reservations/>} />
     <Route path='/reserved' element={<ReservationConfirmed/>}/>
    </Routes>
 )
}

export default App;

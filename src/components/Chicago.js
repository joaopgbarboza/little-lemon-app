import React from "react";
import Chefs from '../assets/Mario and Adrian A.jpg'
import Restaurant from '../assets/restaurant.jpg'


const Chicago = () => {
    return (
        <>
            <div className="text-chicago">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p></p>
            </div>
            <div className="images-chicago">
                <img className="chefs-chicago" src={Chefs} />
                <img className="resturant-chicago" src={Restaurant} />
            </div>
        </>
    )
}

export default Chicago;
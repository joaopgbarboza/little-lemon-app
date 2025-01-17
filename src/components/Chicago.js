import React from "react";
import Chefs from '../assets/chefs.jpg'
import Restaurant from '../assets/restaurant-v.jpg'


const Chicago = () => {
    return (
        <div className="chicago-container">
            <div className="text-chicago">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Enjoy our ambient specially design to offer you an experience of taste, 
                    refreshness and a remarkable Mediterranean food made with the best ingredients
                     and with a traditional touch that only a family business can offer.</p>
            </div>
            <div className="images-chicago">
                <img className="restaurant-chicago" src={Restaurant} alt="outdoor ambient" />
                <img className="chefs-chicago" src={Chefs} alt="chefs " />
            </div>
        </div>
    )
}

export default Chicago;
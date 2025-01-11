import React from "react";

import Bike from "../assets/bike.svg"

const ProductCard = (props) => {
    return (
        <div className="product-box">
                <img className="product-image" src={props.image} alt=""/>
            <div className="description">
                <div className="product-title">
                    <h2>{props.name}</h2>
                    <h2 className="product-price">{props.price}</h2>
                </div>
                <p className="paragraph">{props.description}
                </p>
                <div className="card-delivery">
                    <a href="/order-online">Order a delivery</a>
                    <img src={Bike} alt="bike icon"/>
                </div>
                
                
            </div>
        </div>
    )
}

export default ProductCard;
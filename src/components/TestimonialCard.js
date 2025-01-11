import React from "react";



const TestimonialCard = (props) => {
    return (
        <div className="testimonial-box">
            <div className="testimonial-card">
                <h2 className="rating">Rating</h2>
                <div className="user">
                    <img className="user-image" src={props.image} alt="user"/>
                    <h2 className="user-name">{props.name}</h2>
                </div>
                <div className="review">
                    <h2>Review</h2>
                    <img className="star" src={props.star} alt="star review"/>
                    <img className="star" src={props.star} alt="star review"/>
                    <img className="star" src={props.star} alt="star review"/>
                    <img className="star" src={props.star} alt="star review"/>
                    <img className="star" src={props.star} alt="star review"/>

                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;
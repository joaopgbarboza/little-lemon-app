import React from "react";
import TestimonialCard from './TestimonialCard'
import UserOne from '../assets/user-one.png'
import UserTwo from '../assets/user-two.png'
import UserThree from '../assets/user-three.png'
import UserFour from '../assets/user-four.png'
import Star from "../assets/star.png"

const Testimonials = () => {
    return (
        <>
            <div className="testimonial-container">
                    <h1 className="testimonials-title">
                        Testimonials
                    </h1>
                
                <div className="testimonial-cards">
                    <TestimonialCard
                        image={UserOne}
                        name= 'Oscar S.'
                        star={Star}
                        
                    />
                    <TestimonialCard
                        image={UserTwo}
                        name="Anne F."
                        star={Star}
                    />
                    <TestimonialCard
                        image={UserThree}
                        name="Claire M."
                        star={Star}
                    />
                    <TestimonialCard
                        image={UserFour}
                        name="Jean Lee"
                        star={Star}
                    />
                </div>
            </div>
        </>
    )
}

export default Testimonials;
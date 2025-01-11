import React from 'react'
import ProductCard from './ProductCard';
import Salad from "../assets/greek salad.jpg"
import Bruschetta from "../assets/bruchetta.svg"
import Dessert from "../assets/lemon dessert.jpg"




function Cards() {
    return (
        <>
            <div className="specials">
                <h1>This week specials!</h1>
                <a href="/menu">
                    <button className="button">Online Menu</button>
                </a>
            </div>
            <div className="card-container">
                <ProductCard 
                    image={Salad}
                    name="Greek Salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives 
                    and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                />
                <ProductCard 
                    image={Bruschetta}
                    name="Bruschetta"
                    price="$6.99"
                    description="Our Bruschetta is made from grilled bread that has been
                    smeared with garlic and seasoned with salt and olive oil. Simple but remarkable."
                />

                <ProductCard 
                    image={Dessert}
                    name="Lemon Dessert"
                    price="$4.99"
                    description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is an authentic as can be imagined."
                />
            </div> 
            
        </>
    )
}

export default Cards;
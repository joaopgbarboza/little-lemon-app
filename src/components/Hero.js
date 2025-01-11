import heroimage from "../assets/restauranfood.jpg"

function Header() {
    return (
        <>
            <div className='header'>
                <div className="header-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, 
                        focused on traditional recipes served with a modern twist.</p>
                    <a href="/reservations" alt="Reserve a table button">
                        <button className='button'>Reserve a table</button>
                    </a>
                    
                </div>
                <div className="hero-image">
                    <img  src={heroimage} alt="Chef holding a food dish"></img>
                </div>
            </div>

               

        </>
    )
  }

  export default Header;
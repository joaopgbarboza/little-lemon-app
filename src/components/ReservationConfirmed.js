
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


const ReservationConfirmed = () => {
let navigate = useNavigate();

    return (
        <>
            <Nav/>
                <div className="reservation-confirmed">
                    <h1>Reservation has been <span>confirmed!</span></h1>
                    <button onClick={() => {navigate(-1)}} className='button'>Go Back</button>
                </div>
            <Footer/>
        </>
    );
};

export default ReservationConfirmed;
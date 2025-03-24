import React, {useState} from 'react';

const HotelBooking = () =>{
    const [total_to_pay, setTotalToPay] = useState(35); // Current cost per night in the hotel. 
    const [nigths_number, setNightsNumber] = useState(1);

    function update_pay_info() {

        setTotalToPay(total_to_pay*nigths_number)

        if (nigths_number > 5) {
            setTotalToPay(total_to_pay-15) // If customer books more than 5 nigths at hotel they will receive a 15 USD discount. 
        }
    }

    return (
        <>  
            <h2>Book with our Hotel</h2>
            <form onChange={update_pay_info}>
                {/* This is the Booking module */}
                <input type='number' value={nigths_number} onChange={(e) => setNightsNumber((e.target.value))}></input>
                <p>Total to pay: {total_to_pay}</p>
            </form>
        </>
    );
}

export default HotelBooking;
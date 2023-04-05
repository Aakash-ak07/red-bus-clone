import React from "react";

const Booking = ({ selectedSeats, from, to, price }) => {
  // Implement booking functionality here

  return (
    <div>
      <h1>Booking Details</h1>
      <p>Selected Seats: {selectedSeats.join(", ")}</p>
      <p>From: {from}</p>
      <p>To: {to}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default Booking;
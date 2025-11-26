
import React from "react";
import { useNavigate } from "react-router-dom";
import "./BusBooking.css";

const BusBooking = () => {
  const navigate = useNavigate();

  // Example data (can be dynamic later)
  const destination = "Ahmedabad → Surat";
  const date = "2025-11-30";

  const buses = [
    {
      id: 1,
      name: "Shree Travels",
      type: "AC Sleeper",
      price: 499,
      seats: 12,
      departure: "08:00 AM",
      arrival: "12:30 PM"
    },
    {
      id: 2,
      name: "Raj Express",
      type: "Non-AC Seater",
      price: 399,
      seats: 8,
      departure: "09:30 AM",
      arrival: "01:45 PM"
    },
    {
      id: 3,
      name: "Patel Travels",
      type: "AC Seater",
      price: 450,
      seats: 15,
      departure: "10:00 AM",
      arrival: "02:00 PM"
    }
  ];

  return (
    <div className="bus-booking">
      {/* Header */}
      <header className="header">
        <h1>{destination}</h1>
        <p className="date">Travel Date: {date}</p>
      </header>

      {/* Available Buses */}
      <section className="bus-list">
        {buses.map((bus) => (
          <div key={bus.id} className="bus-card">
            <div className="bus-info">
              <h2>{bus.name}</h2>
              <p>Type: {bus.type}</p>
              <p>Price: ₹{bus.price}</p>
              <p>Seats Available: {bus.seats}</p>
              <p>
                Departure: {bus.departure} | Arrival: {bus.arrival}
              </p>
            </div>
            <button
              className="select-seat"
              onClick={() => navigate(`/select-seat/${bus.id}`)}
            >
              Select Seat
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BusBooking;

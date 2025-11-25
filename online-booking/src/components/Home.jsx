import React from "react";
import busImage from "../assets/image/bus.png";   // ← આ લાઇન ઉમેરો
import "./Home.css";

export default function Home() {
  return (
    <div className="hero">
      <img src={busImage} alt="Bus" className="bg-image" />
      <div className="overlay"></div>

      <div className="content">
        <h1>Online Bus Ticket Booking</h1>

        <div className="features">
  <div className="feature">
    <div className="feature-icon">⚡</div>
    <div className="feature-text"><h3>Fast Booking</h3></div>
  </div>
  <div className="feature">
    <div className="feature-icon">🔒</div>
    <div className="feature-text"><h3>Secure Payment</h3></div>
  </div>
  <div className="feature">
    <div className="feature-icon">☎️</div>
    <div className="feature-text"><h3>24/7 Support</h3></div>
  </div>
</div>
        <button className="book-now-btn">
          Book Ticket Now
        </button>
      </div>
    </div>
  );
}
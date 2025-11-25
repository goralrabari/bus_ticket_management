import React from "react";
import busImage from "../assets/image/bus.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <img src={busImage} alt="Bus" className="bg-image" />
      <div className="overlay"></div>

      <div className="content">
        <h1>Online Bus Ticket Booking</h1>

        <div className="features">
  <div className="feature">
    <div className="feature-icon">⚡</div>
    <div className="feature-text">Fast Booking</div>
  </div>
  <div className="feature">
    <div className="feature-icon">🔒</div>
    <div className="feature-text">Secure Payment</div>
  </div>
  <div className="feature">
    <div className="feature-icon">☎️</div>
    <div className="feature-text">24/7 Support</div>
  </div>
</div>
        <button className="book-now-btn" onClick={() => navigate("/search")}>
          Book Ticket Now
        </button>
      </div>
    </div>
  );
}
// src/components/SearchBus.jsx
import React from "react";
import "./SearchBus.css";

export default function SearchBus() {
  return (
    <div className="search-container">
      <div className="search-card">
        <h2>Search Your Bus</h2>

        <div className="input-group">
          <div className="input-box">
            <label>From</label>
            <input type="text" placeholder="Enter source city" />
            <span className="icon">From</span>
          </div>

          <div className="swap-btn">Swap</div>

          <div className="input-box">
            <label>To</label>
            <input type="text" placeholder="Enter destination city" />
            <span className="icon">To</span>
          </div>

          <div className="input-box">
            <label>Date of Journey</label>
            <input type="date" />
            <span className="icon">Calendar</span>
          </div>
        </div>

        <button className="search-btn">Search Buses</button>
      </div>
    </div>
  );
}
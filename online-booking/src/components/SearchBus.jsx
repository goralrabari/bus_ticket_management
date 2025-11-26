
import React, { useState } from "react";
import "./SearchBus.css";

const SearchBus = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const isFormValid = from.trim() !== "" && to.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    // અહીં તમે API call અથવા navigation કરી શકો છો
    // ઉદાહરણ:
    // navigate(`/results?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`);

    alert(`Searching buses:
From: ${from}
To: ${to}
Date: ${date || "Not selected"}`);
  };

  return (
    <div className="searchbus-container">
      <form className="searchbus-card" onSubmit={handleSubmit} noValidate>
        <h1 className="title">Search Bus</h1>

        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            id="from"
            type="text"
            placeholder="Enter departure city"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className={from.trim() === "" ? "input invalid" : "input"}
            autoComplete="off"
          />
          {from.trim() === "" && (
            <small className="helper">Please enter a departure city</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="to">To</label>
          <input
            id="to"
            type="text"
            placeholder="Enter destination city"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className={to.trim() === "" ? "input invalid" : "input"}
            autoComplete="off"
          />
          {to.trim() === "" && (
            <small className="helper">Please enter a destination city</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="date">Date (optional)</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input"
            min={new Date().toISOString().split("T")[0]} // આજ પછીની તારીખ allow
          />
        </div>

        <button
          type="submit"
          className="search-btn"
          disabled={!isFormValid}
          aria-disabled={!isFormValid}
          title={!isFormValid ? "Enter both From and To to search" : "Search buses"}
        >
          Search Bus
        </button>
      </form>
    </div>
  );
};

export default SearchBus;

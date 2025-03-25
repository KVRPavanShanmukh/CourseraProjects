import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    specialRequests: "",
  });

  const [error, setError] = useState("");

  const availableTimes = ["12:00 PM", "2:00 PM", "6:00 PM", "8:00 PM"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.date || !formData.time) {
      setError("All fields except special requests are required!");
      return;
    }
    
    setError("");
    alert("Table booked successfully!");
    setFormData({
      name: "",
      date: "",
      time: "",
      guests: 1,
      specialRequests: "",
    });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Table Booking</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label>Time:</label>
        <select name="time" value={formData.time} onChange={handleChange} required>
          <option value="">Select Time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>

        <label>Guests:</label>
        <input type="number" name="guests" value={formData.guests} min="1" max="10" onChange={handleChange} required />

        <label>Special Requests:</label>
        <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} />

        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};

export default BookingForm;

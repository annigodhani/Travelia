import React from "react";
import BookNowCSS from "./../Book/BookNow.module.css";

function BookNow() {
  return (
    <div className={BookNowCSS.bookNowWrapper} id="book">
      <h1>Book Your Trip</h1>
      <p>Fill in the details below to complete your booking.</p>
      <form className={BookNowCSS.bookingForm}>
        <div className={BookNowCSS.inputGroup}>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Enter destination"
            required
          />
        </div>
        <div className={BookNowCSS.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className={BookNowCSS.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={BookNowCSS.inputGroup}>
          <label htmlFor="dates">Dates:</label>
          <input type="date" id="dates" name="dates" required />
        </div>
        <button type="submit" className={BookNowCSS.submitButton}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookNow;

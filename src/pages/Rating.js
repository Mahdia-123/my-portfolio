import React, { useState, useEffect } from "react";
import "./Rating.css";

export default function Rating() {
  const [rating, setRating] = useState(0); // current user rating
  const [hover, setHover] = useState(0); // hover effect
  const [allRatings, setAllRatings] = useState([]); // all stored ratings

  // Load previous ratings from localStorage
  useEffect(() => {
    const storedRatings = JSON.parse(localStorage.getItem("ratings")) || [];
    setAllRatings(storedRatings);
  }, []);

  // Handle user rating
  const handleRate = (value) => {
    setRating(value);

    // Generate unique user ID (one per browser)
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = Date.now().toString(); // simple unique ID
      localStorage.setItem("userId", userId);
    }

    // Check if this user already rated
    const updatedRatings = allRatings.filter((r) => r.userId !== userId);
    updatedRatings.push({ userId, rating: value });

    setAllRatings(updatedRatings);
    localStorage.setItem("ratings", JSON.stringify(updatedRatings));
  };

  // Calculate average rating
  const averageRating = allRatings.length
    ? (
        allRatings.reduce((sum, r) => sum + r.rating, 0) / allRatings.length
      ).toFixed(1)
    : 0;

  return (
    <div className="rating-container">
      <h3>Rate my project</h3>
      <div className="stars">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleRate(currentRating)}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)}
              style={{
                color: currentRating <= (hover || rating) ? "#f76b8a" : "gray",
                fontSize: "16px",
                cursor: "pointer",
                background: "none",
                border: "none",
                transition: "transform 0.9s ease",
              }}
            >
              ★
            </button>
          );
        })}
      </div>

      <button
        className="btn"
        onClick={() => alert(`You rated ${rating} stars`)}
      >
        Rate
      </button>
      <hr />

      <div style={{ marginTop: "10px", color: "gray" }}>
        <p>Average Rating: {averageRating} ⭐</p>
        <p>Total Ratings: {allRatings.length}</p>
      </div>
    </div>
  );
}

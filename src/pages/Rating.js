import React, { useState } from "react";
import "./Rating.css";
export default function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="rating-container">
      <h3>Rate my project</h3>
      <div className="stars">
        {" "}
        {[...Array(5)].map(function (star, index) {
          const currentRating = index + 1;
          return (
            <button
              type="button"
              key={index}
              onClick={() => setRating(currentRating)}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(rating)}
              style={{
                color: currentRating <= (hover || rating) ? "#f76b8a" : "gray",
                fontSize: "15px",
                cursor: "pointer",
                background: "none",
                border: "none",
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
    </div>
  );
}

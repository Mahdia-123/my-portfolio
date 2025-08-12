import React, { useState } from "react";
import "./FunFact.css";

export default function FunFact() {
  const funFact = [
    "Skilled in cooking, baking, and household management.",
    "Proficient in drawing, digital design, and makeup artistry.",
    "Quick learner of new languages and coding skills through SheCodes and codeWeekend.",
    "Passionate about combining journalism and technology to create meaningful digital content.",
  ];

  const [showFacts, setShowFacts] = useState(false);

  function displayFunFact() {
    setShowFacts(true);
  }

  return (
    <section className="funfacts-section mt-5">
      {!showFacts && (
        <button onClick={displayFunFact} className="funfact-button">
          Fun Fact Here!
        </button>
      )}

      {showFacts && (
        <div className="funfact-circle">
          <h2 className="funfacts-title">Fun Facts About Me 😃</h2>
          <ul className="funfact-list">
            {funFact.map(function (fact, index) {
              return <li key={index}>{fact}</li>;
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

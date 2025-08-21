import React from "react";
import "./FunFact.css";

export default function FunFact() {
  const funFact = [
    "- Skilled in cooking, baking, and household management.",
    "- Proficient in drawing, digital design, and makeup artistry.",
    "- Quick learner of new languages and coding skills through SheCodes and codeWeekend.",
    "- Passionate about combining journalism and technology to create meaningful digital content.",
  ];

  function showFunFact() {
    alert(funFact.join("\n"));
  }

  return (
    <section className="funfacts-section mt-5">
      <button onClick={showFunFact} className="funfact-button">
        Fun Fact Here! 😅
      </button>
    </section>
  );
}

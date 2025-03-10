import React, { useState, useEffect } from "react";

const phrases = [
  "React is amazing!",
  "Component-based design is powerful.",
  "Hooks simplify state management.",
  "Keep learning, keep coding!"
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextPhrase = () => setIndex((index + 1) % phrases.length);
  const prevPhrase = () => setIndex((index - 1 + phrases.length) % phrases.length);

  return (
    <div style={{ textAlign: "center", padding: "10px", background: "#282c34", color: "white", borderRadius: "8px" }}>
      <button onClick={prevPhrase}>❮</button>
      <span style={{ margin: "0 15px" }}>{phrases[index]}</span>
      <button onClick={nextPhrase}>❯</button>
    </div>
  );
};

export default Carousel;

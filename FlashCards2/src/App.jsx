// src/App.jsx
import { useState } from "react";
import Flashcard from "./Components/Flashcard";
import "./App.css";

function App() {
  const flashcards = [
    {
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces.",
    },
    {
      question: "What is JSX?",
      answer: "A syntax extension for JavaScript used in React.",
    },
    {
      question: "What is a component?",
      answer: "Reusable UI elements that manage their own state.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className="app">
      <h1>Flash Cards</h1>
      <Flashcard
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
      />
      <div className="navigation-buttons">
        <button onClick={handleNextCard}>Next Card</button>
      </div>
    </div>
  );
}

export default App;

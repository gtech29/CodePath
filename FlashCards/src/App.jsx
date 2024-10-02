// src/App.jsx
import "./App.css";
import FlashCard from "./components/FlashCard";
import  { useState } from "react";

function App() {
  const flashcards = [
    {
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
    },
    {
      question: "What is JSX?",
      answer: "A syntax extension for JavaScript used in React",
    },
    {
      question: "What is a component?",
      answer: "Reusable piece of UI logic in React",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className="app">
      <h1>Flash Cards</h1>
      <FlashCard
        question={flashcards[currentCardIndex].question}
        answer={flashcards[currentCardIndex].answer}
        onNextCard={handleNextCard}
      />
    </div>
  );
}

export default App;

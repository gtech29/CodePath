// src/components/FlashCard.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./FlashCard.css";

const Button = styled.button`
  background-color: #5c6bc0;
  color: white;
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 5px;
  outline: 0;
  box-shadow: 2px 2px 5px lightblue;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #303f9f;
  }
`;

function FlashCard({ question, answer, onNextCard }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleFlip = () => {
    setShowAnswer((prevState) => !prevState);
  };

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${showAnswer ? "flipped" : ""}`}>
        <div className="flashcard-front">
          <p>{question}</p>
        </div>
        <div className="flashcard-back">
          <p>{answer}</p>
        </div>
      </div>
      <div className="navigation-buttons">
        <Button onClick={handleFlip}>
          {showAnswer ? "Show Question" : "Show Answer"}
        </Button>
        <Button onClick={onNextCard}>Next Card</Button>
      </div>
    </div>
  );
}

// Add prop type validation for question, answer, and onNextCard
FlashCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onNextCard: PropTypes.func.isRequired,
};

export default FlashCard;

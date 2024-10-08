import React, { useState } from "react";
import "./Flashcard.css";

function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false); // Manage card flip
  const [userGuess, setUserGuess] = useState(""); // Track user's input
  const [feedback, setFeedback] = useState(""); // Display feedback after guess

  const handleFlip = () => {
    setShowAnswer((prev) => !prev);
  };

  const handleSubmit = () => {
    if (userGuess.toLowerCase() === answer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect!");
    }
    setShowAnswer(true); // Show the answer after submitting
  };

  const handleBack = () => {
    // Reset everything to allow user to retry
    setShowAnswer(false);
    setFeedback("");
    setUserGuess("");
  };

  return (
    <div>
      <div
        className={`flashcard ${showAnswer ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="flashcard-front">
          <p>{question}</p>
        </div>
        <div className="flashcard-back">
          <p>{answer}</p>
        </div>
      </div>

      {/* User input field and submit button */}
      {!showAnswer && (
        <div>
          <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter your guess"
            style={{ marginTop: "20px", padding: "5px", width: "200px" }}
          />
          <button
            onClick={handleSubmit}
            style={{ marginTop: "10px", padding: "10px 20px" }}
          >
            Submit
          </button>
        </div>
      )}

      {/* Feedback message */}
      {feedback && (
        <div
          style={{
            marginTop: "20px",
            fontSize: "18px",
            fontWeight: "bold",
            color: feedback === "Correct!" ? "green" : "red",
          }}
        >
          {feedback}
        </div>
      )}

      {/* Back button */}
      {showAnswer && (
        <button
          onClick={handleBack}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#f0f0f0",
          }}
        >
          Back
        </button>
      )}
    </div>
  );
}

export default Flashcard;

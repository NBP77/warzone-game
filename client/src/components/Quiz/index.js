import React, { useState } from "react";
import "./style.css";

function Quiz() {
  const questions = [
    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: true },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: true },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: true },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: true },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: true },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: true },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: true },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: true },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: true },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: true },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: true },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: true },
        { answerText: "AS VAL", isCorrect: false },
      ],
    },

    {
      questionText: "What gun is this?",
      answerOptions: [
        { answerText: "Kilo", isCorrect: false },
        { answerText: "FAL", isCorrect: false },
        { answerText: "M4", isCorrect: false },
        { answerText: "FR 5.56", isCorrect: false },
        { answerText: "Oden", isCorrect: false },
        { answerText: "M13", isCorrect: false },
        { answerText: "Scar", isCorrect: false },
        { answerText: "AK-47", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Grau", isCorrect: false },
        { answerText: "AMAX", isCorrect: false },
        { answerText: "An-94", isCorrect: false },
        { answerText: "AS VAL", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  // Create a state that resets the game //
  // Create a state that displays your scores in another div //

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz vertical-center">
      <div className="container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-section">
          <h1>Can you guess that Modern Warfare AR by sound?</h1>
          <div className="question-count">
            <h3 className="gun-number">Gun {currentQuestion + 1}</h3>
          </div>

          <div className="question-text">{questions[currentQuestion].questionText}</div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOptions.isCorrect)}
              >
                {answerOptions.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Quiz;

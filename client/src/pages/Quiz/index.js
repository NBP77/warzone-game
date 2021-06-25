import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./style.css";
import KILO from "../../audioclips/Kilo.mp3";
import FAL from "../../audioclips/FAL.mp3";
import M4 from "../../audioclips/M4.mp3";
import FR556 from "../../audioclips/FR-5.56.mp3";
import ODEN from "../../audioclips/Oden.mp3";
import M13 from "../../audioclips/M13.mp3";
import SCAR from "../../audioclips/Scar.mp3";
import AK47 from "../../audioclips/AK-47.mp3";
import RAM from "../../audioclips/RAM.mp3";
import GRAU from "../../audioclips/GRAU.mp3";
import AMAX from "../../audioclips/AMAX.mp3";
import AN94 from "../../audioclips/AN-94.mp3";
import ASVAL from "../../audioclips/AS-VAL.mp3";


function Quiz() {
  const questions = [
    {
      id: 1,
      questionText: "What gun is this? KILo",
      audio: KILO,
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
      label: "Kilo",
    },

    {
      id: 2,
      questionText: "What gun is this? FAL",
      audio: FAL,
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
      label: "FAL",
    },

    {
      id: 3,
      questionText: "What gun is this? M4",
      audio: M4,
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
      label: "M4",
    },

    {
      id: 4,
      questionText: "What gun is this? FR556",
      audio: FR556,
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
      label: "FR 5.56",
    },

    {
      id: 5,
      questionText: "What gun is this? ODEN",
      audio: ODEN,
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
      label: "Oden",
    },

    {
      id: 6,
      questionText: "What gun is this? M13",
      audio: M13,
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
      label: "M13",
    },

    {
      id: 7,
      questionText: "What gun is this? SCAR",
      audio: SCAR,
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
      label: "Scar",
    },

    {
      id: 8,
      questionText: "What gun is this? AK47",
      audio: AK47,
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
      label: "AK-47",
    },

    {
      id: 9,
      questionText: "What gun is this? Ram",
      audio: RAM,
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
      label: "RAM",
    },

    {
      id: 10,
      questionText: "What gun is this? grau",
      audio: GRAU,
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
      label: "Grau",
    },

    {
      id: 11,
      questionText: "What gun is this? amax",
      audio: AMAX,
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
      label: "AMAX",
    },

    {
      id: 12,
      questionText: "What gun is this? an94",
      audio: AN94,
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
        { answerText: "AN-94", isCorrect: true },
        { answerText: "AS VAL", isCorrect: false },
      ],
      label: "AN-94",
    },

    {
      id: 13,
      questionText: "What gun is this? asval",
      audio: ASVAL,
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
      label: "AS VAL",
    },
  ];

 
//  const randomizedQuestions = questions.sort(() => Math.random() - 0.5);

//  console.log(randomizedQuestions);

var randomObject = questions[Math.floor(Math.random() * questions.length)];


console.log(randomObject);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const [currentClip, setCurrentClip] = useState(0);

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

  // const displayRandomQuestion = () => {

  // };

  const displayCorrectClip = () => {
    const correctClip = questions[currentQuestion].audio;
    const nextClip = currentClip + 1;
    if (nextClip < questions.length) {
      setCurrentClip(nextClip);
    }
    return (
      <div>
        <ReactAudioPlayer src={correctClip} controls />
      </div>
    );
  };

  return (
    <div className="quiz vertical-center">
      <div className="container-fluid">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <div className="question-section">
            <div className="row">
              <h1 className="game-title col">
                Can you guess that Modern Warfare AR by sound?
              </h1>
            </div>
            <div>
              <div className="question-count row">
                <h3 className="gun-number col">Gun {currentQuestion + 1}</h3>
              </div>
            </div>
            <div className="row">
              <div className="question-text col">
                {questions[currentQuestion].questionText}
              </div>
              <div className="mp3-player col">{displayCorrectClip()}</div>
            </div>
            <div className="container">
              <div className="row">
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() =>
                          handleAnswerOptionClick(answerOptions.isCorrect)
                        }
                      >
                        {answerOptions.answerText}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;

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

const questions = [
  {
    questionText: "What gun is this?",
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
  },

  {
    questionText: "What gun is this?",
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
  },

  {
    questionText: "What gun is this?",
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
  },

  {
    questionText: "What gun is this?",
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
  },

  {
    questionText: "What gun is this?",
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
  },

  {
    questionText: "What gun is this?",
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
  },

  {
    questionText: "What gun is this?",
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
  },

  {
    questionText: "What gun is this?",
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
  },

  {
    questionText: "What gun is this?",
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
  },

  {
    questionText: "What gun is this?",
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
  },

  {
    questionText: "What gun is this?",
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
  },

  {
    questionText: "What gun is this?",
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
    questionText: "What gun is this?",
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

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

shuffle(questions);
console.log(questions);

function Quiz() {
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
    if (isCorrect) {
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

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
    <div className="quiz">
      <div className="container-fluid">
        {showScore ? (
          <div className="score-section container-fluid vertical-center">
            <div class="card score-card">
              <div class="card-body">
                <p class="card-text">
                You scored {score} out of {questions.length}
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Play again?
                </a> */}
              </div>
            </div>
          </div>
          
        ) : (
          <div className="question-section">
            <div>
              <div>
                <div className="gun-number">Gun {currentQuestion + 1}</div>
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

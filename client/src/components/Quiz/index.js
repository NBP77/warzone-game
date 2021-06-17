import React, { useState } from "react";
import { Howl, Howler } from "howler";
import "./style.css";
import Kilo from "../../audioclips/Kilo.mp3";
import Fal from "../../audioclips/FAL.mp3";
import M4 from "../../audioclips/M4.mp3";
import Fr556 from "../../audioclips/FR-5.56.mp3";
import Oden from "../../audioclips/Oden.mp3";
import M13 from "../../audioclips/M13.mp3";
import Scar from "../../audioclips/Scar.mp3";
import AK47 from "../../audioclips/AK-47.mp3";
import RAM from "../../audioclips/RAM.mp3";
import Grau from "../../audioclips/GRAU.mp3";
import Amax from "../../audioclips/AMAX.mp3";
import AN94 from "../../audioclips/AN-94.mp3";
import ASVAL from "../../audioclips/AS-VAL.mp3";

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
     sound: Kilo, 
     label: "Kilo",
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
      sound: Fal, 
      label: "FAL" ,
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
      sound: M4,
      label: "M4" 
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
      sound: Fr556,
      label: "FR 5.56",
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
      sound: Oden,
      label: "Oden",
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
      sound: M13,  
      label: "M13",
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
      sound: Scar,
      label: "Scar",
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
      sound: AK47,
      label: "AK-47",
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
      sound: RAM,
      label: "RAM",
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
      sound: Grau,
      label: "Grau",
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
      sound: Amax,
      label: "AMAX",
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
        { answerText: "AN-94", isCorrect: true },
        { answerText: "AS VAL", isCorrect: false },
      ],
      sound: AN94,
      label: "AN-94",
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
      sound: ASVAL,
      label: "AS VAL",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  // const [correctClip, setCorrectClip] = useState(0)

  // Create a state that resets the game //
  // Create a state that displays your scores in another div //

  // const correctClip = questions.sound === questions.true

  // const displayCorrectClip = questions.match(questions.sound === questions.true)
  

  const SoundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  const RenderButtonAndSound = () => {
    return questions.map((soundObj, index) => {  
      return (
        <button key={index} onClick={() => SoundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      );
    
    });
  };

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

  Howler.volume(1.0);

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
              <div className="mp3-player col">{RenderButtonAndSound()}</div>
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

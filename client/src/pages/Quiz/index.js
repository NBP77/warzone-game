import React, { useRef, useState } from "react";
import DisplayLastScore from "../../components/DisplayLastScore";
// import ButtonDisplayOne from "../../components/ButtonDisplayOne";
import ReactAudioPlayer from "react-audio-player";
import "./style.css";
import questions from "../../questions";
import KiloPic from "../../ARPics/KILO.png";
import FalPic from "../../ARPics/FAL.png";
import M4Pic from "../../ARPics/M4.png";
import Fr556Pic from "../../ARPics/FR 5.56.png";
import OdenPic from "../../ARPics/ODEN.png";
import M13Pic from "../../ARPics/M13.png";
import ScarPic from "../../ARPics/SCAR.png";
import AK47Pic from "../../ARPics/AK47.png";
import RamPic from "../../ARPics/RAM.png";
import GrauPic from "../../ARPics/GRAU.png";
import AmaxPic from "../../ARPics/AMAX.png";
import ANPic from "../../ARPics/AN-94.png";
import ASValPic from "../../ARPics/ASVAL.png";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const [currentClip, setCurrentClip] = useState(0);

  // Color Theme!!!! 

  // Add sound clicks to buttons if user chooses right or wrong

  const scoreResponseOne = '"Umm have you even played the game??"';
  const scoreResponseTwo = '"Wow major BOT Alert!!!"';
  const scoreResponseThree = '"Chill you\'re dripping in sweat..."';
  const scoreResponseFour = '"This kid is CRACKED!!!"';
  const scoreResponseFive = '"Dude turn your Aimbot offff!!!!"';

  const replayGame = () => {
    window.location.reload();
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setCurrentClip(0);
    localStorage.setItem("LastScore", score);
  };

  const displayResponseOne = () => {
    if (score === 0) {
      return (
        <div className="score-card">
          <div className="card-body">
            <div className="card-text">
              You scored {score} out of {questions.length}
            </div>
            <div className="score-responses">{scoreResponseOne}</div>
            <div onClick={replayGame} type="button" className="replay-button">
              Try Again?
            </div>
          </div>
        </div>
      );
    }
  };

  const displayResponseTwo = () => {
    if (
      score === 1 ||
      score === 2 ||
      score === 3 ||
      score === 4 ||
      score === 5
    ) {
      return (
        <div className="score-card">
          <div className="card-body">
            <div className="card-text">
              You scored {score} out of {questions.length}
            </div>
            <div className="score-responses">{scoreResponseTwo}</div>
            <div onClick={replayGame} type="button" className="replay-button">
              Try Again?
            </div>
          </div>
        </div>
      );
    }
  };

  const displayResponseThree = () => {
    if (score === 6 || score === 7 || score === 8 || score === 9) {
      return (
        <div className="score-card">
          <div className="card-body">
            <div className="card-text">
              You scored {score} out of {questions.length}
            </div>
            <div className="score-responses">{scoreResponseThree}</div>
            <div onClick={replayGame} type="button" className="replay-button">
              Try Again?
            </div>
          </div>
        </div>
      );
    }
  };

  const displayResponseFour = () => {
    if (score === 10 || score === 11 || score === 12) {
      return (
        <div className="score-card">
          <div className="card-body">
            <div className="card-text">
              You scored {score} out of {questions.length}
            </div>
            <div className="score-responses">{scoreResponseFour}</div>
            <div onClick={replayGame} type="button" className="replay-button">
              Try Again?
            </div>
          </div>
        </div>
      );
    }
  };

  const displayResponseFive = () => {
    if (score === 13) {
      return (
        <div className="score-card">
          <div className="card-body">
            <div className="card-text">
              You scored {score} out of {questions.length}
            </div>
            <div className="score-responses">{scoreResponseFive}</div>
            <div onClick={replayGame} type="button" className="replay-button">
              Try Again?
            </div>
          </div>
        </div>
      );
    }
  };

  const buttonClickRef = useRef();

  const correctButtonStyle = `
  background-color: green;
  `;

  const wrongButtonStyle = `
    background-color: red;
  `;

  const oldButtonStyle = `
  background-color: none;
  `;

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
    if (isCorrect) {
      buttonClickRef.current.style = correctButtonStyle;
      setTimeout(() => {
        buttonClickRef.current.style = oldButtonStyle;
      }, 300);
    } else {
      buttonClickRef.current.style = wrongButtonStyle;
      setTimeout(() => {
      buttonClickRef.current.style = oldButtonStyle;
      }, 300);
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
    <div className="quiz" ref={buttonClickRef}>
      <div className="container-fluid">
        {showScore ? (
          <div className="score-section container-fluid vertical-center">
            {displayResponseOne()}
            {displayResponseTwo()}
            {displayResponseThree()}
            {displayResponseFour()}
            {displayResponseFive()}
          </div>
        ) : (
          <div>
            <DisplayLastScore />
            <div className="game-container">
              <div>
                <div>
                  <div className="game-question">
                    Can you guess that Modern Warfare AR by sound?
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="question-text col">
                  {questions[currentQuestion].questionText}
                </div>
                <div className="gun-number">
                  AR number {currentQuestion + 1}
                </div>
                <div className="mp3-player col">{displayCorrectClip()}</div>
              </div>
              {/* Buttons 1-4 */}
              <div className="row">
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(0, 1)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={KiloPic} alt="Kilo" />
                      </button>
                    ))}
                </div>
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(1, 2)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={FalPic} alt="FAL" />
                      </button>
                    ))}
                </div>
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(2, 3)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={M4Pic} alt="M4" />
                      </button>
                    ))}
                </div>
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(3, 4)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={Fr556Pic} alt="Fr556" />
                      </button>
                    ))}
                </div>
              </div>
              {/* Buttons 5-8 */}
              <div className="row">
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(4, 5)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={OdenPic} alt="Oden" />
                      </button>
                    ))}
                </div>
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(5, 6)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={M13Pic} alt="M13" />
                      </button>
                    ))}
                </div>
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(6, 7)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={ScarPic} alt="Scar" />
                      </button>
                    ))}
                </div>
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(7, 8)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={AK47Pic} alt="AK-47" />
                      </button>
                    ))}
                </div>
              </div>
              {/* Buttons 9-12 */}
              <div className="row">
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(8, 9)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={RamPic} alt="Ram" />
                      </button>
                    ))}
                </div>
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(9, 10)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={GrauPic} alt="Grau" />
                      </button>
                    ))}
                </div>
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(10, 11)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={AmaxPic} alt="Amax" />
                      </button>
                    ))}
                </div>
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(11, 12)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={ANPic} alt="AN-94" />
                      </button>
                    ))}
                </div>
              </div>
              {/* Button 13 */}
              <div className="row">
                <div className="answer-section col">
                  {questions[currentQuestion].answerOptions
                    .slice(12, 13)
                    .map((answerOptions) => (
                      <button
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                          // setColor(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}

                        <img className="gun-pic" src={ASValPic} alt="AS-Val" />
                      </button>
                    ))}
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

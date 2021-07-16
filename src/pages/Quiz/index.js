import React, { useState } from "react";
import DisplayLastScore from "../../components/DisplayLastScore";
import DisplayScoreResponses from "../../components/DisplayScoreResponses";
import ReactAudioPlayer from "react-audio-player";
import { Howl, Howler } from "howler";
import HeadShotSound from "../../WZSoundEffects/HeadShotSound.mp3";
import TeamateDowned from "../../WZSoundEffects/TeamateDowned.mp3";
import "./style.css";
import questions from "../../questions";
import KiloButton from "../../components/AnswerButtons/KiloButton";
import FalButton from "../../components/AnswerButtons/FalButton";
import M4Button from "../../components/AnswerButtons/M4Button";
import Fr556Button from "../../components/AnswerButtons/Fr556Button";
import OdenButton from "../../components/AnswerButtons/OdenButton";
import M13Button from "../../components/AnswerButtons/M13Button";
import ScarButton from "../../components/AnswerButtons/ScarButton";
import Ak47Button from "../../components/AnswerButtons/Ak47Button";
import RamButton from "../../components/AnswerButtons/RamButton";
import GrauButton from "../../components/AnswerButtons/GrauButton";
import AmaxButton from "../../components/AnswerButtons/AmaxButton";
import An94Button from "../../components/AnswerButtons/An94Button";
import AsvalButton from "../../components/AnswerButtons/AsvalButton";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const [currentClip, setCurrentClip] = useState(0);

  // Color Theme!!!!

  // fix the unique key issue

  const replayGame = () => {
    window.location.reload();
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setCurrentClip(0);
    localStorage.setItem("LastScore", score);
  };

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

  const buttonClickSound = (isCorrect) => {
    if (isCorrect) {
      const sound = new Howl({
        src: [HeadShotSound],
      });

      sound.play();

      Howler.volume(0.8);
    } else {
      const sound = new Howl({
        src: [TeamateDowned],
      });

      sound.play();

      Howler.volume(0.8);
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
            <DisplayScoreResponses
              score={score}
              questions={questions}
              replayGame={replayGame}
            />
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
              {/* Guns 1-4 */}
              <div className="answer-container">
                <div className="row">
                  <KiloButton
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                  <FalButton
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                  <M4Button
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                  <Fr556Button
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                </div>
                {/* Guns 5-8 */}
                <div className="row">
                  <OdenButton
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                  <M13Button
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                  <ScarButton
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                  <Ak47Button
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                </div>
                {/* Guns 8-12 */}
                <div className="row">
                  <RamButton
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                  <GrauButton
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                  <AmaxButton
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                  <An94Button
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
                </div>
                {/* Gun 13 */}
                <div className="row">
                  <AsvalButton
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    buttonClickSound={buttonClickSound}
                  />
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

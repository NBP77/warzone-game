import React, { useState } from "react";
import DisplayLastScore from '../../components/DisplayLastScore';
import ReactAudioPlayer from "react-audio-player";
import "./style.css";
import questions from '../../questions';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const [currentClip, setCurrentClip] = useState(0);

  // const [lastScore, setLastScore] = useState(0); 

  // Fix start page to look better

  // Make the MP3 player look cooler and bigger and not show legnth of clip

  // Re-Work the button layout to look good

  // Color change on button if correct/wrong choice is picked

  // Maybe use a different font

  // Add sound clicks to buttons if user chooses right or wrong

  // former score and high score
  
  const scoreResponseOne = "\"Umm have you even played the game??\"";
  const scoreResponseTwo = "\"Wow major BOT Alert!!!\"";
  const scoreResponseThree = "\"Chill you're dripping in sweat...\"";
  const scoreResponseFour = "\"This kid is CRACKED!!!\"";
  const scoreResponseFive = "\"Dude turn your Aimbot offff!!!!\"";
  

  const replayGame = () => {
    window.location.reload();
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setCurrentClip(0)
    localStorage.setItem('LastScore', score);
  }

  const displayResponseOne = () => {
    if (score === 0) {
      return (
        <div className="card score-card">
          <div className="card-body">
            <div className="card-text">
              You scored {score} out of {questions.length}
            </div>
            <div className="score-responses">{scoreResponseOne}</div>
            <div 
            onClick={replayGame} 
             type="button" className="play-button">
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
        <div className="card score-card">
          <div className="card-body">
            <div className="card-text">
              You scored {score} out of {questions.length}
            </div>
            <div className="score-responses">{scoreResponseTwo}</div>
            <div 
            onClick={replayGame} 
            type="button" className="play-button">
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
        <div className="card score-card">
          <div className="card-body">
            <div className="card-text">
              You scored {score} out of {questions.length}
            </div>
            <div className="score-responses">{scoreResponseThree}</div>
            <div 
            onClick={replayGame}
             type="button" className="play-button">
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
        <div className="card score-card">
          <div className="card-body">
            <div className="card-text">
              You scored {score} out of {questions.length}
            </div>
            <div className="score-responses">{scoreResponseFour}</div>
            <div 
            onClick={replayGame} 
            type="button" className="play-button">
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
        <div className="card score-card">
          <div className="card-body">
            <div className="card-text">
              You scored {score} out of {questions.length}
            </div>
            <div className="score-responses">{scoreResponseFive}</div>
            <div 
            onClick={replayGame} 
            type="button" className="play-button">
              Try Again?
            </div>
          </div>
        </div>
      );
    }
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
          <div 
          className="score-section container-fluid vertical-center">
            {displayResponseOne()}
            {displayResponseTwo()}
            {displayResponseThree()}
            {displayResponseFour()}
            {displayResponseFive()}
          </div>
        ) : (
          <div>
            <DisplayLastScore />
          <div className="question-section game-container">
            <div>
              <div>
                <div className="gun-number">
                  Assault rifle number {currentQuestion + 1}
                </div>
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
                        id="button-color-change"
                        className="answer-btn"
                        onClick={() => {
                          handleAnswerOptionClick(answerOptions.isCorrect);
                        }}
                      >
                        {answerOptions.answerText}
                      </button>
                    )
                  )}
                </div>
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

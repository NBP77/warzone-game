import React, { useState } from "react";
import "./style.css";
import questions from "../../questions";
import KiloPic from "../../ARPics/KILO.png"
import FalPic from "../../ARPics/FAL.png"
import M4Pic from "../../ARPics/M4.png"
import Fr556Pic from "../../ARPics/FR 5.56.png"

function ButtonDisplayOne() {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);
  
    const [score, setScore] = useState(0);
  
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


    return (
        <div className="row">
        <div className="answer-section col">
          {questions[currentQuestion].answerOptions.slice(0,1).map(
            (answerOptions) => (
              <button 
                className="answer-btn"
                onClick={() => {
                  handleAnswerOptionClick(answerOptions.isCorrect);
                }}
              >
                {answerOptions.answerText}

                <img className="gun-pic"
                src={KiloPic} 
                alt="Kilo"/>
              </button>
            )
          )}
        </div>
        <div className="answer-section col">
          {questions[currentQuestion].answerOptions.slice(1,2).map(
            (answerOptions) => (
              <button 
                className="answer-btn"
                onClick={() => {
                  handleAnswerOptionClick(answerOptions.isCorrect);
                }}
              >
                {answerOptions.answerText}

                <img className="gun-pic"
                src={FalPic} 
                alt="FAL"/>
              </button>
            )
          )}
        </div>
        <div className="answer-section col">
          {questions[currentQuestion].answerOptions.slice(2,3).map(
            (answerOptions) => (
              <button 
                className="answer-btn"
                onClick={() => {
                  handleAnswerOptionClick(answerOptions.isCorrect);
                }}
              >
                {answerOptions.answerText}

                <img className="gun-pic"
                src={M4Pic} 
                alt="M4"/>
              </button>
            )
          )}
        </div>
        <div className="answer-section col">
          {questions[currentQuestion].answerOptions.slice(3,4).map(
            (answerOptions) => (
              <button 
                className="answer-btn"
                onClick={() => {
                  handleAnswerOptionClick(answerOptions.isCorrect);
                }}
              >
                {answerOptions.answerText}

                <img className="gun-pic"
                src={Fr556Pic} 
                alt="Kilo"/>
              </button>
            )
          )}
        </div>
    </div>
    );
}

export default ButtonDisplayOne;
import React, { useRef } from "react";
import M4Pic from "../../ARPics/M4.png";

function M4Button(props) {
  const correctButtonStyle = `
  background-color: green;
`;

  const wrongButtonStyle = `
  background-color: red;
`;

  const oldButtonStyle = `
  background-color: none;
`;

  const buttonClickRef = useRef();

  const setColor = (isCorrect) => {
    if (isCorrect) {
      if (props.currentQuestion === 11 || props.currentQuestion === 12) {
        return;
      }
      buttonClickRef.current.style = correctButtonStyle;
      setTimeout(() => {
        buttonClickRef.current.style = oldButtonStyle;
      }, 300);
    } else {
      if (props.currentQuestion === 11 || props.currentQuestion === 12) {
        return;
      }
      buttonClickRef.current.style = wrongButtonStyle;
      setTimeout(() => {
        buttonClickRef.current.style = oldButtonStyle;
      }, 300);
    }
  };

  return (
    <div className="answer-section col">
      {props.questions[props.currentQuestion].answerOptions
        .slice(2, 3)
        .map((answerOptions) => (
          <button
            ref={buttonClickRef}
            className="answer-btn"
            onClick={() => {
              props.handleAnswerOptionClick(answerOptions.isCorrect);
              setColor(answerOptions.isCorrect);
            }}
          >
            {answerOptions.answerText}

            <img className="gun-pic" src={M4Pic} alt="M4" />
          </button>
        ))}
    </div>
  );
}

export default M4Button;

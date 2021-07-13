import React, { useRef } from "react";
import ANPic from "../../ARPics/AN-94.png";

function An94Button(props) {
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
        .slice(11, 12)
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

            <img className="gun-pic" src={ANPic} alt="AN-94" />
          </button>
        ))}
    </div>
  );
}

export default An94Button;

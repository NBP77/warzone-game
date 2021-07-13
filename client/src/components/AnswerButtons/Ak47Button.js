import React, { useRef } from "react";
import AK47Pic from "../../ARPics/AK47.png";

function Ak47Button(props) {
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
        .slice(7, 8)
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

            <img className="gun-pic" src={AK47Pic} alt="AK-47" />
          </button>
        ))}
    </div>
  );
}

export default Ak47Button;

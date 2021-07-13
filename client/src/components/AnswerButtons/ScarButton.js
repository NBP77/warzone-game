import React, { useRef } from "react";
import ScarPic from "../../ARPics/SCAR.png";

function ScarButton(props) {
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
      if (props.currentQuestion === 12) {
        return;
      }
      buttonClickRef.current.style = correctButtonStyle;
      setTimeout(() => {
        buttonClickRef.current.style = oldButtonStyle;
      }, 300);
    } else {
      if (props.currentQuestion === 12) {
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
        .slice(6, 7)
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

            <img className="gun-pic" src={ScarPic} alt="Scar" />
          </button>
        ))}
    </div>
  );
}

export default ScarButton;

import React, { useRef } from "react";
import Fr556Pic from "../../ARPics/FR 5.56.png";

function Fr556Button(props) {
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
        .slice(3, 4)
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

            <img className="gun-pic" src={Fr556Pic} alt="Fr556" />
          </button>
        ))}
    </div>
  );
}

export default Fr556Button;

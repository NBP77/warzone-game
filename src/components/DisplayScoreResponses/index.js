import React from "react";
import "./style.css";

const scoreResponseOne = '"Umm have you even played the game??"';
const scoreResponseTwo = '"Wow major BOT Alert!!!"';
const scoreResponseThree = '"Chill you\'re dripping in sweat..."';
const scoreResponseFour = '"This kid is CRACKED!!!"';
const scoreResponseFive = '"Dude turn your Aimbot offff!!!!"';

function DisplayScoreResponses(props) {
  if (props.score === 0) {
    return (
      <div className="score-card">
        <div className="card-body">
          <div className="card-text">
            You scored {props.score} out of {props.questions.length}
          </div>
          <div className="score-responses">{scoreResponseOne}</div>
          <div
            onClick={props.replayGame}
            type="button"
            className="replay-button"
          >
            Try Again?
          </div>
        </div>
      </div>
    );
  }
  if (props.score === 1 || props.score === 2 || props.score === 3 || props.score === 4 || props.score === 5) {
    return (
      <div className="score-card">
        <div className="card-body">
          <div className="card-text">
            You scored {props.score} out of {props.questions.length}
          </div>
          <div className="score-responses">{scoreResponseTwo}</div>
          <div onClick={props.replayGame} type="button" className="replay-button">
            Try Again?
          </div>
        </div>
      </div>
    );
  }

  if (props.score === 6 || props.score === 7 || props.score === 8 || props.score === 9) {
    return (
      <div className="score-card">
        <div className="card-body">
          <div className="card-text">
            You scored {props.score} out of {props.questions.length}
          </div>
          <div className="score-responses">{scoreResponseThree}</div>
          <div onClick={props.replayGame} type="button" className="replay-button">
            Try Again?
          </div>
        </div>
      </div>
    );
  };

  if (props.score === 10 || props.score === 11 || props.score === 12) {
    return (
      <div className="score-card">
        <div className="card-body">
          <div className="card-text">
            You scored {props.score} out of {props.questions.length}
          </div>
          <div className="score-responses">{scoreResponseFour}</div>
          <div onClick={props.replayGame} type="button" className="replay-button">
            Try Again?
          </div>
        </div>
      </div>
    );
  }

  if (props.score === 13) {
    return (
      <div className="score-card">
        <div className="card-body">
          <div className="card-text">
            You scored {props.score} out of {props.questions.length}
          </div>
          <div className="score-responses">{scoreResponseFive}</div>
          <div onClick={props.replayGame} type="button" className="replay-button">
            Try Again?
          </div>
        </div>
      </div>
    );
  }

};

export default DisplayScoreResponses;

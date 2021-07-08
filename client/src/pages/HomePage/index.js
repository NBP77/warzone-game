import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function HomePage() {
  let history = useHistory();

  function handleClick() {
    history.push("/Quiz");
  }

  return (
    <div className="center">
      <div className="gameTitle-section">
        <div className="gameTitle-box">
          <div className="gameTitle">The Warzone Sound Game</div>
          <div className="button-box">
            <div onClick={handleClick} type="button" className="playButton">
              PLAY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

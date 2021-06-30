import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
 
function HomePage() {

  let history = useHistory(); 
  
  function handleClick() {
    history.push("/Quiz");
  }

  return (
    <div className="vertical-center">
      <div className="container-fluid start-page">
        <div className="row">
          <h1 className="title col">Can you guess this Modern Warfare gun by sound?</h1>
        </div>
        <div className="row">
          <div className="display-3 btn-container col">
            <div type="button" className="start-button" onClick={handleClick}>Play</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

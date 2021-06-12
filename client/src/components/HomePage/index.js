import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
 
function HomePage() {

  let history = useHistory(); 
  
  function handleClick() {
    history.push("/GameStart");
  }

  return (
    <div className="vertical-center">
      <div className="container-fluid">
        <div className="row">
          <h1 className="display-1 title col">Hello World</h1>
        </div>
        <div className="row">
          <div className="display-3 btn-container col">
            <div type="button" className="start-button" onClick={handleClick}>Start</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

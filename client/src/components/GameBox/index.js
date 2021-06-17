import "./style.css";
import { GoPlay } from "react-icons/go";


function GameBox() {
  return (
    <div className="vertical-center">
      <div className="container-fluid">
        <div className="row">
          <h1 className="display-1 title col">Can you guess that gun?</h1>
        </div>

        <div className="row">
          <div className="col-4 play-btn">
            <button><GoPlay /></button>
          </div>
          <div className="col-8 mp3-animation">Put mp3 animation in</div>
        </div>

        <div className="row">
          <form className="col answer-section">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter answer" 
                name="answer"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GameBox;

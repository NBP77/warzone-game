import "./style.css";


function GameStart() {
  return (
    <div className="vertical-center">
      <div className="container-fluid">

        <div className="row">
          <h1 className="display-1 title col">Can you guess that gun?</h1>
        </div>

        <div className="row">
          <div className="col-4 play-btn">
          <button>Play clip</button>
          </div>
          <div className="col-8 mp3-animation">
            Put mp3 animation in 
          </div>
        </div>
        

      </div>
    </div>
  );
}

export default GameStart;

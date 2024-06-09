import React, { Component } from "react";

class Player extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="thethink">
          <img src="../assets/imgs/rock.png" alt="rock" />
        </div>
        <div className="speech-bubble"></div>
        <img src="../assets/imgs/player.png" alt="player" />
        <div className="row">
          <div className="col-4">
            <button>
              <img src="../assets/imgs/rock.png" alt="rock" />
            </button>
          </div>
          <div className="col-4">
            <button>
              <img src="../assets/imgs/paper.png" alt="paper" />
            </button>
          </div>
          <div className="col-4">
            <button>
              <img src="../assets/imgs/scissors.png" alt="scissors" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;

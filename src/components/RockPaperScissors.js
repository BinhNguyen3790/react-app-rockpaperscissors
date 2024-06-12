import React, { Component } from "react";
import Player from "./Player";
import Computer from "./Computer";
import Result from "./Result";
import "../assets/css/buble.css";
import "../assets/css/RockPaperScissors.css";
import { connect } from "react-redux";
class RockPaperScissors extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <Player />
        </div>
        <div className="col-6">
          <Result />
          <div className="mt-5 text-center">
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn bnt-rouder btn-success btn-lg"
            >
              Play game
            </button>
          </div>
        </div>
        <div className="col-3">
          <Computer />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count >= 25) {
          clearInterval(randomComputerItem);
          dispatch({
            type:"ENDGAME"
          })
        }
      }, 200);
    },
  };
};

export default connect(null, mapDispatchToProps)(RockPaperScissors);

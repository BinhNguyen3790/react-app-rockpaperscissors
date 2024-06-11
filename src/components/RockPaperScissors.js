import React, { Component } from "react";
import Player from "./Player";
import Computer from "./Computer";
import Result from "./Result";
import "../assets/css/buble.css";
import "../assets/css/RockPaperScissors.css";
class RockPaperScissors extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <Player />
        </div>
        <div className="col-6">
          <Result />
          <div className="mt-5 text-center">
            <button className="btn bnt-rouder btn-success btn-lg">Play game</button>
          </div>
        </div>
        <div className="col-3">
          <Computer />
        </div>
      </div>
    );
  }
}

export default RockPaperScissors;

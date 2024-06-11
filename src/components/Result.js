import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  state = {};
  render() {
    return (
      <div className="text-center fw-bold fs-1">
        <div>
          <p className="text-warning">{this.props.result}</p>
        </div>
        <div>
          <p className="text-primary">
            Number Win: <span className="text-warning">{this.props.youWin}</span>
          </p>
        </div>
        <div>
          <p className="text-primary">
            Number Play: <span className="text-warning">0</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.RockPaperScissors.result,
    youWin: state.RockPaperScissors.youWin,
    numberPlay: state.RockPaperScissors.numberPlay,
  };
};

export default connect(mapStateToProps)(Result);

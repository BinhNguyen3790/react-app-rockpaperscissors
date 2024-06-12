import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  state = {};
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
      0% {top: -100px}
      100% {top: 0}
    }`;
    return (
      <div>
        <style>{keyframe}</style>
        <div>
          <div className="thethink thethinkComputer">
            <img style={{ position: "absolute", animation: `randomItem${Date.now()} 0.1s` }} src={this.props.computer.img} alt={this.props.computer.id} />
          </div>
          <div className="speech-bubble"></div>
          <img src="../assets/imgs/computer.png" alt="computer" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.RockPaperScissors.computer,
  };
};

export default connect(mapStateToProps)(Computer);

import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <div className="thethink thethinkComputer">
            <img src={this.props.computer.img} alt={this.props.computer.id} />
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

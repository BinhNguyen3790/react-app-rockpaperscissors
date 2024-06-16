import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div>
        <div className="thethink">
          <img src={this.props.arrayChose.find((item) => item.chose === true).img} alt="rock" />
        </div>
        <div className="speech-bubble"></div>
        <img src="../assets/imgs/player.png" alt="player" />
        <div className="row chosePlayer">
          {this.props.arrayChose.map((item, index) => {
            let border = {};
            if (item.chose) {
              border = { border: "3px solid orange" };
            }
            return (
              <div className="col-4" key={index}>
                <button
                  onClick={() => {
                    this.props.chose(item.id);
                  }}
                  style={border}
                  className="btn btn-rounder bg-white"
                >
                  <img src={item.img} alt={item.id} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrayChose: state.RockPaperScissors.arrayChose,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chose: (id) => {
      dispatch({
        type: "CHOSE",
        id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

import React, { Component } from "react";
class Computer extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <div className="thethink">
            <img src="../assets/imgs/rock.png" alt="rock" />
          </div>
          <div className="speech-bubble"></div>
          <img src="../assets/imgs/computer.png" alt="computer" />
        </div>
      </div>
    );
  }
}

export default Computer;

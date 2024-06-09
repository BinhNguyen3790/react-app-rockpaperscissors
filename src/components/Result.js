import React, { Component } from "react";

class Result extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <p>You Win !!!</p>
        </div>
        <div>
          <p>Number Win: 0</p>
        </div>
        <div>
          <p>Number Play: 0</p>
        </div>
      </div>
    );
  }
}

export default Result;

import React, { Component } from "react";

class Result extends Component {
  state = {};
  render() {
    return (
      <div className="text-center fw-bold fs-1">
        <div>
          <p className="text-warning">You Win !!!</p>
        </div>
        <div>
          <p className="text-primary">
            Number Win: <span className="text-warning">0</span>
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

export default Result;

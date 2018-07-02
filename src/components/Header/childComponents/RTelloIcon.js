import React, { Component } from "react"

class RTelloIcon extends Component {
  constructor() {
    super()
    this.state = {
      flipper: true
    }
  }
  render() {
    return (
      <div>
        {!this.state.flipper ? (
          <img
            onMouseEnter={() => this.setState({ flipper: true })}
            onMouseOut={() => this.setState({ flipper: false })}
            src={require("../../routedComponents/Login/rTello.png")}
            alt="logo"
            className="Header-rTello"
          />
        ) : (
          <img
            onMouseEnter={() => this.setState({ flipper: true })}
            onMouseOut={() => this.setState({ flipper: false })}
            src={require("../../routedComponents/Login/Trello.png")}
            alt="logo"
            className="Header-rTello"
          />
        )}
      </div>
    )
  }
}
export default RTelloIcon

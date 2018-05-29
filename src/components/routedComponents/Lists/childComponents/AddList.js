import React, { Component } from "react"

class AddList extends Component {
  constructor() {
    super()
    this.state = {
      add: false
    }
  }

  render() {
    const style = {
      height: "4vh"
    }
    return (
      <div className="CardList-primary" style={{ ...style }}>
        <button className="AddList-button">Add a list...</button>
      </div>
    )
  }
}
export default AddList

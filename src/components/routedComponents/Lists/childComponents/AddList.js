import React, { Component } from "react"

class AddList extends Component {
  render() {
    const style = {
      height: "4vh"
    }
    return (
      <div className="CardList-primary" style={{ ...style }}>
        Add a list...
      </div>
    )
  }
}
export default AddList

import React, { Component } from "react"

class ListMenu extends Component {
  render() {
    return <div className="ListMenu-primary">{this.props.boardName}</div>
  }
}
export default ListMenu
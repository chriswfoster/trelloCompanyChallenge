import React, { Component } from "react"
import { connect } from "react-redux"

import { getUserBoards, boardView } from "../../../ducks/reducer"


import "./lists.css"

class Lists extends Component {
  render() {
    const list = this.props.viewingBoard.lists.map((listitem, i)=> <p>listItem</p>)
    console.log(this.props)
    return <div>Something here</div>
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getUserBoards,
  boardView
})(Lists)

import React, { Component } from "react"
import { connect } from "react-redux"
import { getUserBoards } from "../../../../ducks/reducer"

class Boards extends Component {
  componentDidMount() {
    this.props.getUserBoards(this.props.user.uid)
  }

  render() {
    return <div />
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getUserBoards
})(Boards)

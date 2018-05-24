import React, { Component } from "react"
import { connect } from "react-redux"
import { getUserBoards } from "../../../../ducks/reducer"

class Boards extends Component {
  componentDidMount() {
    this.props.getUserBoards(this.props.user.uid)
  }

  render() {
    console.log(this.props)
    const boards = this.props.userBoardList.map(board => <div className="Main-boardbuttons"><p>{board.name}</p></div>)
    return (
      <div>
        Personal Boards
        <div className="boardsFlex">{boards}</div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getUserBoards
})(Boards)

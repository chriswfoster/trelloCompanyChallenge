import React, { Component } from "react"
import { connect } from "react-redux"
import { getUserBoards } from "../../../../ducks/reducer"

class Boards extends Component {
  componentDidMount() {
    this.props.getUserBoards(this.props.user.uid)
  }

  render() {
    console.log(this.props)
    const boards = this.props.userBoardList.map((board, i )=> <div className="Main-boardbuttons Main-bluebuttons" key={i}><p>{board.name}</p></div>)
    return (
      <div>
        Personal Boards
        <div className="boardsFlex">{boards}<div className="Main-boardbuttons Main-createboardbutton"><p>Create new board...</p></div></div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getUserBoards
})(Boards)

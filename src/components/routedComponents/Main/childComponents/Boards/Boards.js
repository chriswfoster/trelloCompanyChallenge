import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getUserBoards, boardView } from "../../../../../ducks/reducer"
import CreateNewBoard from "./CreateNewBoard"

class Boards extends Component {
  componentDidMount() {
    this.props.getUserBoards(this.props.user.uid)
    this.props.boardView([])
  }

  render() {
    const boards = this.props.userBoardList.map((board, i) => (
      <Link
        to="/lists"
        className="Main-boardbuttons Main-bluebuttons"
        onClick={() => this.props.boardView(this.props.userBoardList[i])}
        key={i}
      >
        <p>{board.name}</p>
      </Link>
    ))
    return (
      <div>
        Personal Boards
        <div className="boardsFlex">
          {boards}
          <div className="Main-boardbuttons Main-createboardbutton">
            <div>
              <CreateNewBoard />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {
    getUserBoards,
    boardView
  }
)(Boards)

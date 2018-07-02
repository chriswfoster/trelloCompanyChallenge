import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class LeftPanel extends Component {
  constructor() {
    super()
    this.state = {
      main: "highlighted",
      boards: "nothighlighted",
      teams: "nothighlighted"
    }
  }

  highligher(one, two, three) {
    this.setState({
      [one]: "highlighted",
      [two]: "nothighlighted",
      [three]: "nothighlighted"
    })
  }

  render() {
    return (
      <div>
        <Link to="/main" className="Links">
          <div
            className={this.state.main}
            onClick={() => this.highligher("main", "boards", "teams")}
          >
            HOME
          </div>
        </Link>

        <Link to="/main/boards" className="Links">
          <div
            className={this.state.boards}
            onClick={() => this.highligher("boards", "main", "teams")}
          >
            BOARDS
          </div>
        </Link>
        <Link to="/main/teams" className="Links">
          <div
            className={this.state.teams}
            onClick={() => this.highligher("teams", "boards", "main")}
          >
            TEAMS
          </div>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(LeftPanel)

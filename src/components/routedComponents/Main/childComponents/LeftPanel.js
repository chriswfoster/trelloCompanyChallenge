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
        <div
          className={this.state.main}
          onClick={() => this.highligher("main", "boards", "teams")}
        >
          <Link to="/main" className={this.state.main}>
            HOME
          </Link>
        </div>
        <br />
        <div
          className={this.state.boards}
          onClick={() => this.highligher("boards", "main", "teams")}
        >
          <Link to="/main/boards" className={this.state.boards}>
            BOARDS
          </Link>
        </div>
        <br />
        <div
          className={this.state.teams}
          onClick={() => this.highligher("teams", "boards", "main")}
        >
          <Link to="/main/teams" className={this.state.teams}>
            TEAMS
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(LeftPanel)

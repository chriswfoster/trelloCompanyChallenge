import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"

class LeftPanel extends Component {
  constructor() {
    super()
  }

  render() {
 
    return (
      <div>
        <Link
          to="/main/boards"
          className=""
          style={{ textDecoration: "none", color: "blue" }}
        >
          BOARDS
        </Link>
    
      
        <p>TEAMS</p>
        <Link
          to="/main/teams"
          className=""
          style={{ textDecoration: "none", color: "blue" }}
        >
          TEAMS
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {})(LeftPanel)

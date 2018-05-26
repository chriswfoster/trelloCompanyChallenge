import React, { Component } from "react"
import { connect } from "react-redux"
import { getUserTeams } from "../../../../../ducks/reducer"

class Teams extends Component {
  componentDidMount() {
    this.props.getUserTeams(this.props.user.uid)
  }

  render() {
    const teams = this.props.userTeamList.map(team => team.name)
    return (
      <div>
        List of teams:
        {teams}
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getUserTeams
})(Teams)

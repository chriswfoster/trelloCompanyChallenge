import React, { Component } from "react"
import { connect } from "react-redux"
// import { getUserTeams } from "../../../../../ducks/reducer"

class Teams extends Component {
  componentDidMount() {
    // this.props.getUserTeams(this.props.user.uid)
  }

  render() {
    // const teams = this.props.userTeamList.map(team => team.name)
    return (
      <div>
        List of teams:
        <p>
          Not yet implemented, and I'm not sure if I'm going to implement it,
          yet.
        </p>
        {/* {teams} */}
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {
    // getUserTeams
  }
)(Teams)

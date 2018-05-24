import React, {Component} from 'react';
import { connect } from "react-redux"
import {getUserTeams} from '../../../../ducks/reducer'

class Teams extends Component {
    componentDidMount() {
        this.props.getUserTeams(this.props.user.uid)
      }

render() {
return(
<div>
</div>
)}
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
    getUserTeams
})(Teams)
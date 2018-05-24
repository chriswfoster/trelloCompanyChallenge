import React, {Component} from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import axios from 'axios'

class LeftPanel extends Component {
constructor(){
    super()
}


render() {
    console.log(this.props.user)
return(
<div>
<Link to="/main/boards">
Boards
</Link>
<p>TEAMS</p>


    </div>

)}
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {

})(LeftPanel)

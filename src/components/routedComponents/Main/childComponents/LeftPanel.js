import React, {Component} from 'react';
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class LeftPanel extends Component {
constructor(){
    super()
}

componentDidMount(){
    axios.get(`/api/getUserBoards/${this.props.user.uid}`)
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

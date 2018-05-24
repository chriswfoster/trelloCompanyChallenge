import React, { Component } from "react"
import axios from 'axios'
import { connect } from "react-redux"

import {getUserInfo} from './../../../ducks/reducer'
import LeftPanel from "./childComponents/LeftPanel"

class Main extends Component {


  render() {
      console.log(this.props)
    return (
      <div>
        Test2
        <LeftPanel />
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
    getUserInfo
})(Main)
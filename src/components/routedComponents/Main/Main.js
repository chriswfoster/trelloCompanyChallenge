import React, { Component } from "react"
import axios from 'axios'
import { connect } from "react-redux"

import LeftPanel from "./childComponents/LeftPanel"

class Main extends Component {
  componentDidMount() {
console.log(this.props)
  }

  render() {
    return (
      <div>
        Test2
        <LeftPanel />
      </div>
    )
  }
}
export default Main

import React, { Component } from "react"
import axios from 'axios'

import LeftPanel from "./childComponents/LeftPanel"

class Main extends Component {
  componentDidMount() {
    axios
      .get(`/api/getUserBoards/${this.props.user.uid}`)
      .then(response => console.log(response))
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

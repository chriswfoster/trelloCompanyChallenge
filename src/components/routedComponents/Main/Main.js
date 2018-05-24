import React, { Component } from "react"
import axios from 'axios'
import { connect } from "react-redux"

import Boards from './childComponents/Boards'
import Teams from './childComponents/Teams'
import { Route, Switch } from "react-router-dom"
import LeftPanel from "./childComponents/LeftPanel"

import './main.css'

class Main extends Component {


  render() {
      console.log(this.props)
    return (
      <div>
        Test2
        <LeftPanel />

        <div className="Main-rightside">
        <Switch>
          <Route
            path="/main/boards"
            component = {Boards}/>
          <Route
            path="/main/teams"
            component={Teams}/>
        </Switch>
            </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {

})(Main)
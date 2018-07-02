import React, { Component } from "react"

import { connect } from "react-redux"
import { Route, Switch } from "react-router-dom"

import Header from "../../Header/Header"
import Boards from "./childComponents/Boards/Boards"
import Teams from "./childComponents/Teams/Teams"
import LeftPanel from "./childComponents/LeftPanel"

import "./main.css"

class Main extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="mainFlex">
          <LeftPanel />

          <div className="Main-rightside">
            <Switch>
              <Route path="/main/boards" component={Boards} />
              <Route path="/main/teams" component={Teams} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(Main)

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
    console.log(this.props)
    return (
      <div>
        <Header />

        <div className="mainFlex">
          <LeftPanel />

          <div className="Main-rightside">
            {window.location.pathname === "/main" ? (
              <div>
                <p>
                  Hi, and thanks for visiting. This is my full stack "Trello"
                  clone app. It saves to a database, so you can technically use
                  it to organize your lists and data (safely and as a long term
                  solution, assuming you logged in with your personal account).
                </p>
                {this.props.user.uid === "U186LBop0RSz9eitxecVQX0HjH42" ? (
                  <p>
                    You are currently logged in as a PUBLIC user, so you share
                    your cards and lists with all other public users. Sign in if
                    you wish to protect your data.
                  </p>
                ) : null}
              </div>
            ) : (
              <Switch>
                <Route path="/main/boards" component={Boards} />
                <Route path="/main/teams" component={Teams} />
              </Switch>
            )}
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

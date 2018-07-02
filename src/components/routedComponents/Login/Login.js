import React, { Component } from "react"
import { Redirect } from "react-router"
import { connect } from "react-redux"
import axios from "axios"

import { auth, provider } from "../../../firebaseAuthentication/firebase"

import { sendUserInfo } from "./../../../ducks/reducer"

import loginInfo from "../../../tempUserData.json"

import "./login.css"

class Login extends Component {
  constructor() {
    super()
    this.state = { flipper: false }
  }

  //   logout() {
  //     auth.signOut().then(() => {
  //       this.setState({
  //         user: null
  //       })
  //     })
  //   }
  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user
      axios
        .post("/api/addToUserList", { user })
        .then(response => this.props.sendUserInfo(response.data[0]))
    })
  }

  render() {
    return (
      <div className="Login-main">
        {!this.state.flipper ? (
          <img
            onMouseEnter={() => this.setState({ flipper: true })}
            onMouseOut={() => this.setState({ flipper: false })}
            src={require("./rTello.png")}
            alt="logo"
            className="Login-rTello"
          />
        ) : (
          <img
            onMouseEnter={() => this.setState({ flipper: true })}
            onMouseOut={() => this.setState({ flipper: false })}
            src={require("./Trello.png")}
            alt="logo"
            className="Login-rTello"
          />
        )}
        <p
          onMouseEnter={() => this.setState({ flipper: true })}
          onMouseOut={() => this.setState({ flipper: false })}
        >
          Log in to {!this.state.flipper ? "яTello" : "Trello"}
        </p>
        {/* I used an arrow function below to bypass binding, heheh. Not sure if that's bad practice or not. */}
        <button onClick={() => this.login()}>
          <img src={require("./sign-in-with-google.svg")} alt="Google icon" />Log
          in with Google
        </button>
        <button onClick={() => this.props.sendUserInfo(loginInfo)}>
          Login with Default/Public user
        </button>
        {/* Below, I'm just rendering a redirect if something on the user object appears in props. */}
        {this.props.user.displayname ? <Redirect to="/main" /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {
    sendUserInfo
  }
)(Login)

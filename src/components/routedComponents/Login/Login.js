import React, { Component } from "react"
import { Redirect } from "react-router"
import { connect } from "react-redux"
import axios from "axios"

import { auth, provider } from "../../../firebaseAuthentication/firebase"

import { sendUserInfo } from "./../../../ducks/reducer"

import "./login.css"

class Login extends Component {
  constructor() {
    super()
    this.state = {}
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
        .post("/api/addToUserList", {user})
        .then(response => this.props.sendUserInfo(response.data))
    })
  }

  render() {

    return (
      <div className="Login-main">
        <p>Log in to Rtello</p>
        {/* I used an arrow function below to bypass binding, heheh. Not sure if that's bad practice or not. */}
        <button onClick={() => this.login()}>
          <img src={require("./sign-in-with-google.svg")} />Log in with Google
        </button>
        {/* Below, I'm just rendering a redirect if something on the user object appears in props. */}
        {this.props.user.displayName ? <Redirect to="/main" /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {
  sendUserInfo
})(Login)
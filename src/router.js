import { Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import React from "react"

import Login from "./components/routedComponents/Login/Login"
import Main from "./components/routedComponents/Main/Main"
import store from "./store"

export default (
  <Provider store={store}>
    <Switch>
      <Route path="/main" component={Main} />
      <Route exact path="/" component={Login} />
    </Switch>
  </Provider>
)

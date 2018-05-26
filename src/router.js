import { Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import React from "react"

import Login from "./components/routedComponents/Login/Login"
import Main from "./components/routedComponents/Main/Main"
import Lists from "./components/routedComponents/Lists/Lists"
import AsortingPlayground from "./components/AsortedPlayground/AsortingPlayground"
import store from "./store"

export default (
  <Provider store={store}>
    <Switch>
      <Route path="/main" component={Main} />
      <Route path="/AsortingPlayground" component={AsortingPlayground} />
      <Route path="/lists" component={Lists} />
      <Route exact path="/" component={Login} />
    </Switch>
  </Provider>
)

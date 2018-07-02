import { Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import React from "react"

import Login from "./components/routedComponents/Login/Login"
import Main from "./components/routedComponents/Main/Main"
import About from "./components/routedComponents/About/About"
import Lists from "./components/routedComponents/Lists/Lists"
import store from "./store"

export default (
  <Provider store={store}>
    <Switch>
      <Route path="/main" component={Main} />
      <Route path="/lists" component={Lists} />
      <Route path="/about" component={About} />
      <Route exact path="/" component={Login} />
    </Switch>
  </Provider>
)

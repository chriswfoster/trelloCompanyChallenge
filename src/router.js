import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';


import Login from './components/routedComponents/Login/Login';
import store from './store';


export default(
<Provider store={store}>
<Switch>
<Route exact path="/" component={Login}/>

    </Switch>
</Provider>
)
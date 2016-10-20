import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Achieves from './components/Achieves'
import Featured from './components/Featured'
import Layout from './components/Layout'
import Settings from './components/Settings'

const app = document.getElementById('app');

// ReactDOM.render(<Layout/>, app);
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="achieves(/:article)" component={Achieves}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
  app
);
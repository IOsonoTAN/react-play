import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import Archives from './components/Archives'
import Featured from './components/Featured'
import Layout from './components/Layout'
import Settings from './components/Settings'

const app = document.getElementById('app')
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  <Router history={ appHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Featured }></IndexRoute>
      <Route path="archives(/:article)" component={ Archives }></Route>
      <Route path="settings" component={ Settings }></Route>
    </Route>
  </Router>,
  app
)
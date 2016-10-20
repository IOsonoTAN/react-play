'use strict'

import React from 'react'
import { Link } from 'react-router'

export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/")
  }

  render() {
    const { history } = this.props
    console.log(history.isActive('achieves'))
    return (
      <div>
        <button onClick={ this.navigate.bind(this) }>features</button>
        <Link class="btn btn-link" activeClassName="active" to="achieves">achieves</Link>
        <Link class="btn btn-link" activeClassName="active" to="settings">button</Link>
        { this.props.children }
      </div>
    );
  }
}
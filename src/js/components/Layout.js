'use strict'

import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Nav from './layouts/Nav'

export default class Layout extends React.Component {
  render() {
    const { location } = this.props
    const containerStyle = {
      paddingTop: '75px'
    }

    return (
      <div>

        <Nav location={ location } />

        <div class="container" style={ containerStyle }>
          <div class="row">
            <div class="col-lg-12">
              { this.props.children }
            </div>
          </div>
        </div>

      </div>
    );
  }
}
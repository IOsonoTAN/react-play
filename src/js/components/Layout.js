'use strict'

import React from 'react'
import Moment from 'moment'

import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: 'Krissada',
      lastName: 'Boontrigratn',
      title: 'Welcome'
    };
  }

  getCurrentDate(format = 'DD/MM/YY HH:mm') {
    return Moment().format(format)
  }

  changeTitle(title) {
    this.setState({ title })
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <h1>{this.state.firstName}, {this.state.lastName}!</h1>
        <h2>{this.getCurrentDate()}</h2>
        <Footer />
      </div>
    );
  }
}
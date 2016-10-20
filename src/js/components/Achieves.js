'use strict'

import React from 'react'

export default class Achieves extends React.Component {
  render() {
    console.log(this.props)
    const { params } = this.props
    const { query } = this.props.location 
    const { date, filter } = query 
    return (
      <h1>Achieves ( { params.article } / { date } #{ filter } )</h1>
    );
  }
}
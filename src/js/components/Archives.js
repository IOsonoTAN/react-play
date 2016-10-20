'use strict'

import React from 'react'

export default class Archives extends React.Component {
  render() {
    console.log(this.props)
    const { params } = this.props
    const { query } = this.props.location 
    const { date, filter } = query 
    return (
      <h1>Archives ( { params.article } / { date } #{ filter } )</h1>
    );
  }
}
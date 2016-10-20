'use strict'

import React from 'react'
import Article from './Article'

export default class Featured extends React.Component {
  render() {

    const { query } = this.props.location
    const Articles = [
      "Uno",
      "Due",
      "Tre",
      "Quattro",
      "Cinque",
      "Sei",
      "Sette",
      "Otto",
      "Nove",
      "Dieci",
      "Undici",
      "Tredici",
      "Quattordici",
      "Quindici",
    ].map((title, i) => <Article key={i} title={title} />)

    return (
      <div>
        <div class="row">
          <div class="col-xs-12">
            <strong>Filters: </strong> { query.date }
          </div>
        </div>
        <div class="row">
          { Articles }
        </div>
      </div>
    );
  }
}
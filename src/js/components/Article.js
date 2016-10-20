'use strict'

import React from 'react'

export default class Article extends React.Component {
  render() {
    const title = this.props.title
    return (
      <div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="well text-left">
            <h3>{ title }</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis facere incidunt doloribus minima harum odit illo dolorum sequi dolor, non nam dolore, ratione voluptatibus. Magni, nulla, pariatur! Quas ducimus, officia!</p>
          </div>
        </div>
      </div>
    );
  }
}
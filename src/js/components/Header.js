import React from 'react'
import $ from 'jquery'

export default class Header extends React.Component {

  handleChange(ele) {
    const title = (ele.target.value ? ele.target.value : 'Welcome')
    this.props.changeTitle(title)
    $('title').html(title)
  }

  render() {
    return (
      <div>
        <header>{this.props.title}</header>
        <input onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
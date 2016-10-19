import React from 'react'
import ReactDOM from 'react-dom'
import Moment from 'moment'

class Layout extends React.Component {

  constructor() {
    super();
    this.name = {
      first: 'Krissada',
      last: 'Boontrigratn'
    };
  }

  getCurrentDate(format = 'DD/MM/YY HH:mm') {
    return Moment().format(format)
  }

  render() {
    return (
      <div>
        <h1>{this.name.first}, {this.name.last}!</h1>
        <h2>{this.getCurrentDate()}</h2>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
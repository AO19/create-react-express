import React, { Component } from 'react'

export default class Names extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
    };
  }

  componentDidMount() {
    fetch('/api/names')
      .then(res => res.json())
      .then(names => this.setState({names},
        () => console.log(`Fetched ${names.length} names:`, names)));
  }

  render() {
    return (
      <div>
        <h2>Names</h2>
        <ul>
          {this.state.names.map(name =>
            <li key={name.id}>{name.firstName} {name.lastName}</li>
          )}
        </ul>
      </div>
    )
  }
}

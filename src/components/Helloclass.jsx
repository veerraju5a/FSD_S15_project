import React, { Component } from 'react'

 class Helloclass extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to class componets {this.props.name} a.k.a {this.props.id}</h1>
      </div>
    )
  }
}

export default Helloclass
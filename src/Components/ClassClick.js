import React, { Component } from 'react'

export class ClassClick extends Component {
  clickHander = () => console.log('Event changed')
  render() {
    return (
      <div>
        <br/>
        <button onClick={this.clickHander}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    // const {char,person}=this.props
    const { char, person } = this.props
    return (
      <div>
        <h2>In marvel {this.props.person} is {this.props.char}</h2>
      </div>
    )
  }
}

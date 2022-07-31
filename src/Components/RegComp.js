import React, { Component } from 'react'

 class RegComp extends Component {
  render() {
    console.log('*******************Regular Component Reender**********************************')

    return (
      <div>RegComp {this.props.F_name}</div>
    )
  }
}

export default RegComp
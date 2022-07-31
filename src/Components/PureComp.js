import PropTypes from 'prop-types'
import React, { Component } from 'react'

 class PureComp extends Component {
  static propTypes = {}

  render() {
    console.log('*******************Pure Component Render**********************************')

    return (
      <div>PureComp {this.props.F_name}</div>
    )
  }
}

export default PureComp
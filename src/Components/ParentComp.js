import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      F_name: 'Kiran'
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        F_name: 'Kiran'
      })
    })
  }
  render() {
    console.log('*******************Parent Component REnder**********************************')
    return (
      <div>
        {/* ParentComp */}
        {/* <RegComp F_name={this.state.F_name}/>
        <PureComp F_name={this.state.F_name}/> */}
        <MemoComp data={this.state.F_name} />
      </div>
    )
  }
}

export default ParentComp

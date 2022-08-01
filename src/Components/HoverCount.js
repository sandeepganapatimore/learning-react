import React, { Component } from 'react'
import updatedComponent from './withCounter'

export class HoverCount extends Component {
    render() {
        // const { count } = this.state     
           const {count,incrementcount}=this.props
        return (
            <div>
                <h3 onMouseOver={incrementcount}>{this.props.name} Hovered Mouse {count} times</h3>
            </div>
        )
    }
}

export default updatedComponent(HoverCount)
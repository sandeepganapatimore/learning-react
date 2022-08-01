import React, { Component } from 'react'
import updatedComponent from './withCounter'

export class ClickCounter extends Component {
    render() {
        // const { count } = this.state
        const {count,incrementcount}=this.props
        return (
            <div>
                <button onClick={incrementcount}>
                    {this.props.name} Click {count} times
                </button>
            </div>
        )
    }
}

export default updatedComponent(ClickCounter)
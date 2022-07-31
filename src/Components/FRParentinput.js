import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentinput extends Component {
    constructor(props) {
        super(props)
        this.inputref = React.createRef()
    }
    render() {
        return (
            <div>
                {/* Ref is forwareded to the parent component to the native input component */}
                <FRInput ref={this.inputref} />
                <button>Focus Input</button>
            </div>
        )
    }
}

export default FRParentinput
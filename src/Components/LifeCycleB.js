import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "Sandeep"
        }
        console.log('LifeCycleB constructor') // 1 execution
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps') // second execution
        return null
    }
    componentDidMount() {
        console.log("LifeCycleB ComponentDidMount") // fourth execution
    }
    shouldComponentUpdate() {
        console.log("LifeCycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("LifeCycleB componentDidUpdate")
    }
    render() {
        console.log('LifeCycleB render') // Third execution
        return (
            <div>LifeCycleB</div>
        )
    }
}

export default LifeCycleB
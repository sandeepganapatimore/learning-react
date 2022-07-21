import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "Sandeep"
        }
        console.log('LifeCycleA constructor') // 1 execution
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps') // second execution
        return null
    }
    componentDidMount() {
        console.log("LifeCycleA ComponentDidMount") // fourth execution
    }
    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate") 
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifeCycleA getSnapshotBeforeUpdate") 
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate") 
    }
    changeset=()=>{
        this.setState({
            data:"Coding life"
        })
    }
    render() {
        console.log('LifeCycleA render') // Third execution
        return (
            <div>
            <div>LifeCycleA</div>

            <button onClick={this.changeset}>Change State</button>
            <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
// import { CircularProgress } from '@material-ui/core'
import React, { Component } from 'react'

// rconst is the short cut keyword to create constructor.

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Upgrade yourself"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: "Consistency is key"
        })
        console.log(this)

    }

    clickHandler = () => {
        this.setState({
            message: "Hello buddy"
        })
    }
    render() {
        return (
            <div>
                <br/>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Hit</button> // first approach */}

                {/* // second approach */}
                {/* <button onClick={()=>this.clickHandler()}>Hit</button>  */}
                <button onClick={this.clickHandler}>Hit</button>
            </div>
        )
    }
}

export default EventBind
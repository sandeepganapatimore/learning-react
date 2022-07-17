import React, { Component } from 'react'

export default class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }
    render() {

        return this.state.isLoggedin && <div>Welcome Sita</div>
        // return(
        //     this.state.isLoggedin?
        //     <div>Welcome Gita</div>:
        //     <div>Welcome Geeta</div>
        // )


        //         let message;
        //         if (this.state.isLoggedin) {
        //             return message=<div>Welcome Sita</div>

        //         }
        //         else {
        //             return (
        //                 message=<div>Welcome Guest</div>
        //             )
        //         }
        // return <div>{message}</div>
    }
}


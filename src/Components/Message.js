import React, { Component } from 'react';

class Message extends Component {
   constructor(){
       super()
       this.state={
           message:"Keep it up Learning ",
           newmessage:"Almost done"
       }
   }
   changeMessage(){
       this.setState({
           message:"Going on right path"
       })
   }

    render() {
        return (
            <div>
                <br/>
                {/* <h1>Hello {this.props.name} is feature {this.props.feature}</h1> */}
                {/* <h1>Welcome Learners</h1> */}
                <h1>{this.state.message}</h1>
               <button onClick={()=>this.changeMessage()}>Switch</button>
                
            </div>
        );
    }
}

export default Message;

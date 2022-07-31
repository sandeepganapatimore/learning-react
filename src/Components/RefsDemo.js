import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputref = React.createRef()
        this.cbref=null
        this.setCbref=()=>{
            this.cbref="value"
        }
    }

    componentDidMount() {
        // Focus keyword is used because while we click the mouse on the box then focus on the form get increased
        this.inputref.current.focus()
        console.log(this.inputref)
    }
    ClikHandler=()=>{
        alert(this.inputref.current.value)
    }
    changedata=({   })=>{
        
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputref}  />
                <input type="text" ref={this.cbref}  />
                <br/>
                <button onClick={this.ClikHandler}   onChange={this.changedata} type="submit">Submit</button>
            </div>
        )
    }
}

export default RefsDemo
import React, { Component } from 'react'

export class OuterClick extends Component {
    constructor(props) {
        super(props)

        this.state = { isOpen: false };
        this.onClickContainer = this.onClickContainer.bind(this);
        this.outSideContainer = this.outSideContainer.bind(this);
        this.togglecontainer = React.createRef();

        componentDidMount() 
        {
            window.addEventListener('click', this.outSideContainer);
        }
        componentWillUnmount()
        {
            window.addEventListener('click', this.outSideContainer);
        }

        onClickContainer()
        {
            this.setState(currentState => ({
                isOpen: !currentState.isOpen
            }));
        }

        outSideContainer(event){
            if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
              this.setState({ isOpen: false });
            }
          }

    }
    render() {
        return (
            <div ref={this.togglecontainer}>
                <button onClick={this.onClickContainer}>Select an Option</button>
                {this.state.isOpen && (
                    <ul>
                        <li>Pune</li>
                        <li>Mumbai</li>
                        <li>Banglore</li>
                        <li>Delhi</li>
                    </ul>
                )
                }
            </div>
        )
    }
}

export default OuterClick
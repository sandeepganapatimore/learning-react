import React from 'react'

const updatedComponent = OriginalComponent => {

    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }

        incrementcount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            return <OriginalComponent
                count={this.state.count}
                incrementcount={this.incrementcount}
            />
        }
    }
    return NewComponent
}

export default updatedComponent

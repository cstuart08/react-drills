import React, {Component} from 'react'
import InputField from './Input'

class Main extends Component {
    constructor() {
        super()

        this.state = {
            input: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(text) {
        this.setState({
            input: text
        })
    }


    render() {
        return (
            <div>
                <InputField handleInputChange={this.handleInputChange}/>
                <p>{this.state.input}</p>
            </div>
        )
    }
}

export default Main
import React from 'react'
import InputField from './InputField'
import List from './List'

class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            input: "",
            list: ['Spaghetti', 'Meatballs', 'Garlic Bread', 'Parmesan Cheese', 'Spag'],
            filteredList: ['Spaghetti', 'Meatballs', 'Garlic Bread', 'Parmesan Cheese', 'Spag']
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(text) {
        console.log(text)
        if (text === "") {
            this.setState({
                filteredList: this.state.list
            })
        }

        let copyArray = [...this.state.list]
        let filteredArray = copyArray.filter(e => {
            if (e.includes(text)) {
                return e
            }
        })
        this.setState({
            filteredList: filteredArray
        })
    }

    render() {
        return (
            <div>
                <InputField handleInputChange={this.handleInputChange}/>
                <List items={this.state.filteredList}/>
            </div>
        )
    }
}

export default Main
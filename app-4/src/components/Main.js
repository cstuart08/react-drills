import React from 'react'

class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsernameChange(text) {
        this.setState({
            username: text
        })
    }

    handlePasswordChange(text) {
        this.setState({
            password: text
        })
    }

    handleLogIn() {
        alert(`Username: ${this.state.username}    Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input placeholder="Username" onChange={e => this.handleUsernameChange(e.target.value)}></input>
                <input placeholder="Password" onChange={e => this.handlePasswordChange(e.target.value)}></input>
                <button onClick={() => this.handleLogIn()}>Log in!</button>
            </div>
        )
    }
}

export default Main
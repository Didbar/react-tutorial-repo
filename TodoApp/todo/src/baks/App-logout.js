
import React, { Component } from 'react'


export class App extends Component {

    constructor() {
        super()
        this.state = {
            logedIn: false
        }
    }
    render() {
        let login = this.state.logedIn ? "In" : "Out"
        return (
            <div>
                <h1>You are Currently looged {login}</h1>
            </div>
        )
    }
}

export default App

import React, { Component } from 'react';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            content: {}
        }

    }
    componentDidMount() {
        // this.setState({ isLoading: true })
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                    content: data
                })
            })

    }
    render() {

        return (
            <div className="App" >
                {this.state.isLoading ? "Loading...." : <p>{this.state.content.name}</p>}
            </div>
        );
    }
}

export default App;

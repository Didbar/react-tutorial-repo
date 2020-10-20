import React, { Component } from 'react';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            isVegetarian: false,
            isKosher: false,
            isLactose: false


        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const { name, value, type, checked } = e.target


        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleSubmit(e) {
        let kosher, vegetarian, lactose
        console.log(this.state.isKosher, this.state.isVegetarian)
        this.state.isKosher ? kosher = "Kosher" : kosher = undefined
        this.state.isVegetarian ? vegetarian = "Vegetarian" : vegetarian = undefined
        this.state.isLactose ? lactose = "Lactose Free" : lactose = undefined
        e.preventDefault()
        alert(`
    First Name: ${this.state.firstName}
    Last Name: ${this.state.lastName}
    Age: ${this.state.age}
    Gender: ${this.state.gender}
    Location: ${this.state.location}
    Dietary restrictions: ${kosher} ,${vegetarian},${lactose}
    `)
    }

    render() {

        return (
            <main className="App" >
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={this.handleChange}
                    /> <br />

                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={this.handleChange}
                    /><br />

                    <input
                        type="text"
                        placeholder="Age"
                        name="age"
                        onChange={this.handleChange}

                    /><br /><br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        />Male
          </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        />FeMale
          </label><br /><br />

                    <label>Location:</label>
                    <select value={this.state.location} onChange={this.handleChange} name="location">
                        <option value="home">Home</option>
                        <option value="away">Away</option>
                        <option value="onmyway">On My Way</option>
                        <option value="somewhere">SomeWhere</option>
                    </select><br /> <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            value={this.state.isKosher}
                            onChange={this.handleChange}

                        />
            Kosher
          </label>
                    <label>
                        <input
                            type="checkbox"
                            name="isLactose"
                            value={this.state.isLactose}
                            onChange={this.handleChange}

                        />
            Lactose
          </label>
                    <label>
                        <input
                            type="checkbox"
                            name="isVegetarian"
                            value={this.state.isVegetarian}
                            onChange={this.handleChange}

                        />
            Vegetarian
          </label><br /><br />
                    <button>Submit</button>

                </form>

                <h2>{this.state.firstName}</h2>
                <h2>{this.state.lastName}</h2>
                <h2>{this.state.age}</h2>
                <h2>{this.state.gender}</h2>
                <h2>{this.state.location}</h2>


            </main>
        )
    }
}

export default App;

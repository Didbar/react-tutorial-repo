import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import todoData from './components/todoData';


class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(id) {

        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }

                return todo
            })

            return {
                todos: updatedTodos
            }
        })
    }
    render() {

        const todoItems = this.state.todos.map(todo => <TodoItem key={todo.id} content={todo} handleChange={this.handleChange} />);
        return (
            <div className="App todo-list" >
                {todoItems ? todoItems : "Loading"}
            </div>
        );
    }
}

export default App;


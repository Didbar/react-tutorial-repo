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
    }
    render() {

        const todoItems = this.state.todos.map(todo => <TodoItem key={todo.id} content={todo} />);
        return (
            <div className="App todo-list" >
                {todoItems}
            </div>
        );
    }
}

export default App;


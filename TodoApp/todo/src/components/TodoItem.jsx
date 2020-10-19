import React from 'react'

const TodoItem = (props) => {
    // checked={props.content.completed}
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                onChange={(event) => props.handleChange(props.content.id, event)}
                checked={props.content.completed}
            />
            <p>{props.content.text}</p>
        </div>
    )
}

export default TodoItem

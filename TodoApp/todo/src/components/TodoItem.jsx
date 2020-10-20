import React from 'react'

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                onChange={(event) => props.handleChange(props.content.id, event)}
                checked={props.content.completed}
            />
            <p className={props.content.completed ? "todo-completed" : undefined}>{props.content.text}</p>
        </div>
    )
}

export default TodoItem

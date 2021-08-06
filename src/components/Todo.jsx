import React from 'react'

const Todo = ({ todo, index, remove }) => {

    return (
        <div className="todos" onClick={() => remove(index)}> [-] {todo.text}</div>
    )
}

export default Todo

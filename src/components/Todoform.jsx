import React from 'react'

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add an item:</label><br />
            <input
                type="text"
                className="input"
                aria-label="todo-input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

export default TodoForm
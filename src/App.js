import React from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/Todoform';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'Master React',
      isCompleted: false,
    },
    {
      text: 'Lunchtime dude',
      isCompleted: false,
    },
    {
      text: 'Polish todo app',
      isCompleted: false,
    },
    {
      text: 'Add more todos',
      isCompleted: false,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text: text, isCompleted: false }]
    setTodos(newTodos);
  }

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo, i) =>
        <Todo index={i} key={i} todo={todo} remove={removeTodo} />)}
    </>
  );
}

export default App;

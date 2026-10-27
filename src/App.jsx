
import { useState } from 'react';
import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

const todos = [
  { id: 1, title: "Study React" },
  { id: 2, title: "Practice JavaScript" },
  { id: 3, title: "Complete CTD assignment" }
];

function App() {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;


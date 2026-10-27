function TodoList() {
    const todoList = [
        { id: 1, title: "Study React" },
        { id: 2, title: "Practice JavaScript" },
        { id: 3, title: "Complete CTD assignment" }
      ]
    return (
        <ul>
          {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    );
  }
  
  export default TodoList;

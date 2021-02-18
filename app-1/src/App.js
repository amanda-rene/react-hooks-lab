import React, { useState } from 'react';
import AddTodo from './AddTodo';
import List from './List';


function App() {
  const [todos, setTodos] = useState([])

  function addTodo(item) {
    const newTodos = [...todos, item]
    setTodos(newTodos)
  }
  return(
    <div>
      <AddTodo addTodo={addTodo}/>
      <List list={todos}/>
    </div>
  )
}

export default App;
import { useEffect, useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'


function App() {
 const [todos, setTodos] = useState([
  {id: 1, text: 'todo 1', isFinished: true},
  {id: 2, text: 'todo 2', isFinished: false},
  {id: 3, text: 'todo 3', isFinished: false},
 ]);

 function addTodos(todoText){
  let nextId = todos.length + 1;
  setTodos([...todos, {id: nextId, isFinished: false, text:todoText}]);
 }

 useEffect(() => {
  console.log(todos);
 })

  return (
    <>
      <AddTodo addTodos={addTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App

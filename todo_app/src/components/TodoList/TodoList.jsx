import { useContext } from "react";
import Todo from "../ToDo/Todo";
import TodoContext from "../../context/TodoContext";
function TodoList(){

const {todos, setTodos} = useContext(TodoContext);

function  onDeleteTodo(id) {
    const newTodoList = todos.filter(todo => todo.id != id);// filtered out all the todos except the given id  todo and set 
    setTodos(newTodoList);
}

function  onEditTodo(id, newTodo) {
    const newTodoList = todos.map(todo =>{
       if(todo.id == id){
        todo.text = newTodo;
       } 
       return todo;
    });
    setTodos(newTodoList);   
}

function onFinishedTodo(id, state){
    const newTodoList = todos.map(todo =>{
        if(todo.id == id){
         todo.isFinished = state;
        } 
        return todo;
     });
     setTodos(newTodoList); 
}

    return(
         todos && todos.map(
            (todo)=> <Todo 
            key={todo.id} 
            text={todo.text} 
            isFinished={todo.isFinished}
            deleteTodo = {() => onDeleteTodo(todo.id)}
            editTodo = {(newTodo) => onEditTodo(todo.id, newTodo)}
            finishedTodo={(state)=> onFinishedTodo(todo.id, state)}

        />)
    );
}
export default TodoList;
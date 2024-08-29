import { useState } from "react";

function Todo ({finishedTodo, editTodo,deleteTodo, text, isFinished, id}){


    const [isEditing, setIsEditing]= useState(false);
    const [todoText, settodoText]= useState(text);
    return(
        <>
        <input type="checkbox" checked={isFinished} onChange={()=> finishedTodo(!isFinished)}/>

        {isEditing ? <input value={todoText} onChange={(e) => settodoText(e.target.value)}/> : <span>{todoText}</span>}
        
        <button onClick={()=>{
            setIsEditing(!isEditing);
            editTodo(todoText);
        }}>{isEditing ? 'Save': 'Edit'}</button>

        <button onClick={deleteTodo}>Delete</button>
        </>
    );
}
export default Todo;
import React, { useRef } from 'react'
import classes from './newTodos.module.css'
const NewTodo:React.FC <{addTodo:(text : string)=> void}>= (props) => {
    const todoRef=useRef<HTMLInputElement>(null);
    const submitHandler=(e:React.FormEvent)=>{
        e.preventDefault();
        const EnteredText=todoRef.current!.value;
        if(EnteredText.trim().length === 0)
        {
            return;
        }
        props.addTodo(EnteredText);
    };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='text'>Todo Text</label>
        <input type='text' id='text' ref={todoRef}/>
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;
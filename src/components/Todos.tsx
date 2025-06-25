import React from 'react'
import Todo  from '../models/todo'
import Display from './Display'
import classes from './todos.module.css'
const Todos:React.FC <{items:Todo[],DeleteTodo:(id:string)=>void}>= (props) => {
  return (
    <ul className={classes.todos} style={{gap:'20px', padding:'10px'}}>
        {props.items.map(item=>
          (
            /*<li key={item.id}>{item.text}</li>*/
            <Display key={item.id} text={item.text} DeleteTodo={props.DeleteTodo.bind(null , item.id)}/>
            ))}
    </ul>
  )
}

export default Todos
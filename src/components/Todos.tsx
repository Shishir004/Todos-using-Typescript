import React, { useContext } from 'react'
import Display from './Display'
import classes from './todos.module.css'
import { TodosContext } from '../store/todos.context'
const Todos:React.FC = () => {
  const contexx=useContext(TodosContext)
  return (
    <ul className={classes.todos} style={{gap:'20px', padding:'10px'}}>
        {contexx.items.map(item=>
          (
            /*<li key={item.id}>{item.text}</li>*/
            <Display key={item.id} text={item.text} DeleteTodo={contexx.DeleteTodo.bind(null , item.id)}/>
            ))}
    </ul>
  )
}

export default Todos
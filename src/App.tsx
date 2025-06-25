import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos"
import Todo from  './models/todo'
function App() {
  const [todos , setTodos] = useState<Todo[]>([]);
  // const todos=[
  //   new Todo('Learn React'),
  //   new Todo("learn typescript")
  // ];
  const AddTodohandler = (todoText:string)=>{
    const newTodo= new Todo(todoText);
    setTodos((prev)=>{
      return prev.concat(newTodo);
    })
  }
  const DeleteTodo=(todoId:string)=>{
    setTodos((prev)=>{
      return prev.filter(todo=>todo.id !== todoId)
    })
  }
  return (
    <>
      <NewTodo addTodo={AddTodohandler}/>
      <Todos items={todos} DeleteTodo={DeleteTodo}/>
    </>
  )
}

export default App

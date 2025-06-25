import React from 'react'
const Display:React.FC<{text:string, DeleteTodo:()=>void}>= (props) => {
  return (
    <>
      <li style={{background:'#F7F5EF', height:'50px', display:'grid', justifyContent:'center',alignItems:'center'}}>
        {props.text}
        <button onClick={props.DeleteTodo}>X</button>
      </li>
    </>
  )
}

export default Display
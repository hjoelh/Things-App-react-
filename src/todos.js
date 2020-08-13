import React from 'react';


const Todos = ({todos, deleteTodo, finished, finish}) => {
    const todoList = todos.length 
    ? (todos.map( todo => {
        return (
        <div style={{backgroundImage: finished}} className='collection-item center-align
         animate__animated animate__bounceIn' key={todo.id}>
         <i onClick={finish} className="right material-icons">check</i>
         
         <i className="left material-icons" 
         onClick={ () => {deleteTodo(todo.id)}}>close</i>  


          <span>{todo.content}</span> </div>)})) 

    : (<p className='center'>No things left...</p>  ) 


    return (
        <div className='todos collection'>

        {todoList}

        </div>
    )
}

export default Todos
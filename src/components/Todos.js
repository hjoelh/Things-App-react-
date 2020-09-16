import React from 'react';

const Todos = (props) => {

    const todoList = props.todos
    ? (props.todos.map( todo => {
        return (
        <div  
            className='collection-item center-align animate__animated animate__bounceIn' 
            key={todo.id} 
            id={todo.id}
            style={{ background: todo.completed ? 'linear-gradient(90deg, rgba(0,200,219,1) 0%, rgba(0,255,158,1) 100%)' : ''}}> 

            <i  onClick={ () => {props.finish(todo)} } 
                className="right material-icons">check</i>

            <i  onClick={ () => {props.deleteTodo(todo.id)} }
                className="left material-icons">close</i>

            <span>{todo.content}</span> </div>)})) 

    : (<p className='noThings'>No things left...</p>)

return (
    <div className='todos collection'>
        {todoList}
    </div>
    )
}

export default Todos;
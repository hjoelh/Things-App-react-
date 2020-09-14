import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const Todos = (props) => {
    

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            firebase.firestore().collection('things').doc(user.uid).onSnapshot(ans => {console.log(ans.data())})
        }
    })


    const todoList = props.todos
    ? (props.todos.map( todo => {
        return (
        <div  
            className='collection-item center-align animate__animated animate__bounceIn' 
            key={todo.id} 
            id={todo.id}
            >

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
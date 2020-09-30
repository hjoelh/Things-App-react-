import React from 'react';
import Todos from './components/Todos.js'
import AddTodo from './components/Form.js'
import Footer from './components/Footer.js'
import Login from './components/Login.js';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class App extends React.Component {

state = {
	todos: [],
    darkMode: false,
    loggedIn: false,
    uid: ''
}

  componentDidMount() {
	const json1 = localStorage.getItem('darkMode')
	const items1 = JSON.parse(json1)
  this.setState ({darkMode: items1})	
  
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.setState({uid: user.uid})
        console.log('logged in')
        thenn()
    }
    else {
      this.setState({uid: ''})
      console.log('guest user')
    }
  })

  const thenn = () => {
    firebase.firestore().collection('things').doc(this.state.uid).get().then(snap => {
      if(snap.data().content !== undefined) {
        this.setState({todos:
        snap.data().content
    })}
    })
    }
  }

  componentDidUpdate() {
	  const json1 = JSON.stringify(this.state.darkMode)
    localStorage.setItem('darkMode', json1)
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id} 
      )
        this.setState({todos})

    if (this.state.uid) {
    firebase.firestore().collection('things').doc(this.state.uid).update({
      content: todos 
  }) }
  }

  addTodo = (todo) => {
    if (todo.content !== '') {
			todo.id = Math.random()
      todo.completed = false;
      let todos = [...this.state.todos, todo];
      this.setState({todos: todos})

      if (this.state.uid) {
      firebase.firestore().collection('things').doc(this.state.uid).update({
                content: todos
              })
      }
    }
  }
  
  finish = (t) => {
    for (let i = 0; i < this.state.todos.length; i++) {
      if (t.id === this.state.todos[i].id) {
        let newState = [...this.state.todos]
        newState[i].completed = !newState[i].completed
          this.setState({newState})

          firebase.firestore().collection('things').doc(this.state.uid).update({
            content: newState
            })
      }
    }
	}
 
  deleteAll = (e) => {
    e.preventDefault()
    this.setState ({todos: []})

    if (this.state.uid) {
      firebase.firestore().collection('things').doc(this.state.uid).update({
        content: []
    }) } 
      
  }

  clearOnSignOut = () => {
    this.setState ({
      todos: [],
      uid: ''
    })  
  }

  toggleDark = () => {
    this.setState ({
     darkMode: !this.state.darkMode 
    })
  } 

  render () {
    return (
    <div className="todo-app">
    
    <Login  todos={this.state.todos}
            isLoggedIn={this.state.loggedIn}
            uid={this.state.uid}
            clearOnSignOut={this.clearOnSignOut} />

    <h1 className={
      this.state.darkMode 
        ? 'dark center animate__animated animate__tada' 
        : 'center animate__animated animate__tada'}>
        Things.</h1>

    <AddTodo 
      addTodo={this.addTodo}
      darkMode={this.state.darkMode}
     />

    <Todos 
    	todos={this.state.todos} 
      deleteTodo={this.deleteTodo} 
      finish={this.finish} 
     />

    <Footer 
      deleteAll={this.deleteAll} 
      toggle={this.toggleDark} 
      darkMode={this.state.darkMode}
      />

      <div className={
        this.state.darkMode 
          ? 'darkMode' 
          : null} /> 
      </div>
    )
  } 
}

export default App;

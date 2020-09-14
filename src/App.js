import React from 'react';

import Todos from './components/Todos.js'
import AddTodo from './components/Form.js'
import Footer from './components/Footer.js'
import Login from './components/Login.js';


class App extends React.Component {

state = {
	todos: [{
  	id: 1, 
		content: 'add some things',
	  completed: false }],
    darkMode: false 
    }

componentDidMount() {

	const json = localStorage.getItem('todos')
	if (json !== null) {
		const items = JSON.parse(json)
		this.setState ({todos: items} ) 
}
	const json1 = localStorage.getItem('darkMode')
	const items1 = JSON.parse(json1)
	this.setState ({darkMode: items1})	
}

componentDidUpdate() {

	const json = JSON.stringify(this.state.todos)
	localStorage.setItem('todos', json)

	const json1 = JSON.stringify(this.state.darkMode)
	localStorage.setItem('darkMode', json1)
}


deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => 
    	{return todo.id !== id} )
    this.setState({
    	todos
    })
  }

  addTodo = (todo) => {
    if (todo.content !== '') {
			todo.id = Math.random()
			todo.completed = false;
      let todos = [...this.state.todos, todo];
      this.setState({todos: todos})
    }
  }
  
	finish = (t) => {
		let tid = document.getElementById(t.id)
		if (tid.style.background === '') {
			tid.setAttribute(
				'style', 'background: linear-gradient(90deg, rgba(0,200,219,1) 0%, rgba(0,255,158,1) 100%')
		}
		else {
			tid.setAttribute(
				'style', 'background: ""')
		}
	}
 
  deleteAll = (e) => {
    e.preventDefault()
    this.setState ({todos: []})
  }

  toggleDark = () => {
    this.setState ({
     darkMode: !this.state.darkMode 
    })
   } 


  render () {
    return (
    <div className="todo-app">

    <Login />

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

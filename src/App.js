import React from 'react';
import Todos from './todos.js'
import AddTodo from './AddForm.js'
import Clear from './clear.js'
import DarkMode from './darkmode.js'


class App extends React.Component {

  state = {
    todos: [
      {id: 1, content: 'add some things'}
    ]}

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo];
    this.setState({todos})

  }

    finish = (id) => {
      let todo = document.getElementById(id)
      todo.setAttribute(
      'style', 'background: linear-gradient(90deg, rgba(0,200,219,1) 0%, rgba(0,255,158,1) 100%')
  }

  deleteAll = (e) => {
    e.preventDefault()
    this.setState ({todos: []})
  }

  darkMode = () => {
    let dark = document.getElementById('darkSwitch')
    dark.classList.toggle('darkMode')
  }






  render () {
    return (
    <div className="todo-app">

    <h1 className='center animate__animated animate__tada'>Things.</h1>

   

    <AddTodo addTodo={this.addTodo} />

    <Todos 
    todos={this.state.todos} 
    deleteTodo={this.deleteTodo} 
    finish={this.finish} 
     />

    <Clear  deleteAll={this.deleteAll} />

    <DarkMode toggle={this.darkMode} />

 
    

    </div>
    )
  } }

export default App;

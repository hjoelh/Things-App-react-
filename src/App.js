import React from 'react';
import Todos from './todos.js'
import AddTodo from './AddForm.js'
import Footer from './Footer.js'


class App extends React.Component {

  state = {
    todos: [
      {id: 1, content: 'add some things'} ],
    darkMode: false,
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    if (todo.content !== '') {
      todo.id = Math.random()
      let todos = [...this.state.todos, todo];
      this.setState({todos})
    }
  }

  finish = (id) => {

      let todo = document.getElementById(id)

      if (todo.style.background === '') {
        todo.setAttribute(
          'style', 'background: linear-gradient(90deg, rgba(0,200,219,1) 0%, rgba(0,255,158,1) 100%')
      }

      else {

        todo.setAttribute(
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

    <h1 className={this.state.darkMode ? 'dark center animate__animated animate__tada' 
    : 'center animate__animated animate__tada'} >Things.</h1>

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

      <div className={this.state.darkMode ? 'darkMode' : null} /> 

      </div>





      








    )
  } }


export default App;
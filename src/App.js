import React from 'react';
import Todos from './todos.js'
import AddTodo from './AddForm.js'


class App extends React.Component {

  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'bacon'}
    ]
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
    todo.id = Math.random()
    let todos = [...this.state.todos, todo];
    this.setState({todos})

  }


  render () {
    return (
    <div className="todo-app container">

    <h1 className='center blue-text'>Things</h1>

    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />

    <AddTodo addTodo={this.addTodo} />


    

    </div>
    )
  } }

export default App;

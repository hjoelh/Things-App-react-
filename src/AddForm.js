import React from 'react';

class AddTodo extends React.Component {
    state = {
        content: '',
    }

    handleChange = e => {
        this.setState({content: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({content: ''})
    }


    render() {
        return (
            <div className='inputDiv'>
                <form onSubmit={this.handleSubmit}>
           
                <input autoFocus placeholder='Add a thing' onChange={this.handleChange} value={this.state.content} />

                </form>

              
              

                
            </div>
        )
    }
}

export default AddTodo;
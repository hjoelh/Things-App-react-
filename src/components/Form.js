import React from 'react';

const AddTodo  = (props) => {

const [content, setContent] = React.useState('')

    const handleChange = e => {
        setContent(e.target.value)
        }
    
    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo({content});
        setContent('')
        }

    return (
        <div className={
            props.darkMode 
            ? 'inputDivDark' 
            : 'inputDiv'     }>

            <form onSubmit={handleSubmit}>

            <input 
                autoFocus placeholder='Add a thing' 
                onChange={handleChange} 
                value={content} 
                />

            </form>

            </div>
      );
}


export default AddTodo;
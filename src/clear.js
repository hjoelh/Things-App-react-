import React from 'react';
 

class Clear extends React.Component {

    render(props) {
        return (
            <div className='clearBtnDiv'>
            <form className='clearForm' onSubmit={this.props.deleteAll}>

            <button 
            className="waves-effect waves-red btn-small clearBtn"><i className="material-icons left">delete_sweep</i>Clear all</button>
            </form>




            </div>


        )
    }
}

export default Clear;

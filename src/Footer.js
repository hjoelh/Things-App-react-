import React from 'react';
 

class Footer extends React.Component {

    render(props) {
        return (

            <div className='Footer'>
                <form className='clearForm' onSubmit={this.props.deleteAll}>

                    <button 
                    className="waves-effect waves-red btn-small clearBtn">
                    <i className="material-icons left">delete_sweep</i>Clear all</button>
                    </form>

                    <button onClick={this.props.toggle}
                    className="btn-small darkBtn">
                    <i className="material-icons right">brightness_6</i>Dark Mode</button>

                        </div>  )}}



export default Footer;

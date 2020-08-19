import React from 'react';
 

class Footer extends React.Component {

    render(props) {
        return (

            <div className={this.props.darkMode ? 'DarkFooter' : 'Footer'}>

                    <button onClick={this.props.deleteAll}
                            className="waves-effect waves-red btn-small clearBtn">
                    <i className="material-icons left">delete_sweep</i>Clear all</button>

                    <button onClick={this.props.toggle}
                            className="btn-small darkBtn">
                    <i className="material-icons right">brightness_6</i>Dark Mode</button>

                    </div>  )}}



export default Footer;



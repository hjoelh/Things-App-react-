import React from 'react';

const Footer = (props) => {

	return (
	<div className={props.darkMode ? 'DarkFooter' : 'Footer'}>

    <button 
		onClick={props.deleteAll}
    	className="waves-effect waves-red btn-small clearBtn">
       	<i className="material-icons left">delete_sweep</i>Clear all
		</button>

    <button 
		onClick={props.toggle}
    	className="btn-small darkBtn">
        <i className="material-icons right">brightness_6</i>Dark Mode
		</button>

	</div>  
	  );
 	}
 
export default Footer;



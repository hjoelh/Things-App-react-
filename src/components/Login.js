import React, {useState} from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Fbconfig } from '../config/config.js';

const Login = (props) => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(Fbconfig);
    }

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [placeHolder, setPlaceHolder] = useState('email')
    const [passPlaceHolder, setPassPlaceHolder] = useState('password')
    const [loggedIn, setLoggedIn] = useState(firebase.auth().onAuthStateChanged(user => {
        if (user) {
            setLoggedIn(true)
            setPlaceHolder('Signed in')
            setPassPlaceHolder(user.email)
           
        }
        else {
            setLoggedIn(false)
        }
    })
)
    
    const signIn = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(username, pass)

        .then( cred => {
            setUsername('');
            setPass('');
            setPlaceHolder('Signed in');
            setLoggedIn(true);
            toggleFormAlways();
            setPassPlaceHolder(cred.user.email)
        })

        .catch(function(error) {
            setUsername('');
            setPass('');
                    console.log(error.code, error.message);
                    setPlaceHolder(error.message, error.code);
                  });
    }

    const signUp = e => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(username, pass)

        .then (cred => {
            setUsername('');
            setPass('');
            setPlaceHolder('Account created.')
            console.log('account succesfully created')

            firebase.firestore().collection('things').doc(cred.user.uid).set({
                newUser: 'test'
            })


        })

        .catch(function(error) {
            setUsername('');
            setPass('');
                    console.log(error.code, error.message);
                    setPlaceHolder(error.message, error.code);
                  });
    }

    const clearOnSignOut = (e) => {
        e.preventDefault()
        props.clearOnSignOut()
    }

    const signOut = e => {
                    e.preventDefault()
                    clearOnSignOut(e)

                    firebase.auth().signOut()
                    .then( () => {
                        setLoggedIn(false)
                        setUsername('');
                        setPass('');
                        setPlaceHolder('email')
                        setPassPlaceHolder('password')
                        toggleFormAlways();
                    })

                    .catch( (error) => {
                        setUsername('');
                        setPass('');
                        console.log(error.code, error.message);
                        setPlaceHolder(error.message, error.code);
                    });
    }             

    const handleChangeUser = e => {
        setUsername(e.target.value)
    }

    const handleChangePass = e => {
        setPass(e.target.value)
    }

    const toggleForm = e => {
        if (username) {
            signIn(e);
        }
        else {
        setShowForm(!showForm)
        }
    }

    const toggleFormAlways = e => {
        setShowForm(!showForm)
    }
    
    
    if (showForm === true) {

        return (
            <div className='loginBtnDiv'>
            <form onSubmit={signIn}>
                <div className="formOnly">
                    <input style={{color: 'white'}} placeholder={placeHolder} className='formInput' type="email" value={username} onChange={handleChangeUser} required/>
                    <input style={{color: 'white'}} placeholder={passPlaceHolder} className='formInput' type="password" value={pass} onChange={handleChangePass} required/>
                    {loggedIn ? <button onClick={signOut} className='signBtn btn-small darkBtn' style={{marginTop: '15px'}}>Sign Out</button>
                              : <button onClick={signUp} className='signBtn btn-small darkBtn' style={{marginTop: '15px'}}>Create Account</button> }
                </div>
                <button onClick={toggleForm} className='signBtn btn-small darkBtn'>{loggedIn ? 'Logged in' : 'Sign in'}</button>
            </form>    
            </div>  
        );
    }
        else {
            return ( 
                <div className='loginBtnDiv'>
                    <button onClick={toggleForm} className='signBtn btn-small'>{loggedIn ? 'Logged in' : 'Sign in'}</button>
                </div>  
        )
    }
}
 
export default Login;
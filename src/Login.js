import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory} from 'react-router-dom'
import {auth} from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault()

        // firebase login
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message));
    }
    const register = e =>{
        e.preventDefault();

        //firebase register
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth);
                if(auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        type="text" 
                        value={email}
                        onChange= {e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value={password} 
                        onChange = {e => setPassword(e.target.value)}
                    />
                    <button 
                            type="submit"  
                            onClick={signIn} 
                            className="login__signInButton">
                                Sign In
                    </button>
                </form>
                <p>By signing in, you have agreed to the AMAZON clone conditions of use and sale.</p>
                
                <button 
                    onClick={register} 
                    className="login__registerButoon">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login

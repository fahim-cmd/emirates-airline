import React, { createContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import fb from '../../images/fb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

// export const NewUserContext = createContext();

const Login = () => {
    const [user, setUser] = useContext(UserContext)

    const [newUser, setNewUser] = useState(false);

    // const [user, setUser] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     error: '',
    //     success: false
    // })

    //redirect ticketDetails page 
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    //  get input value and validation part 
    const handleInputBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            isFormValid = isEmailValid;
        }
        if (e.target.name === 'password') {
            const isPasswordValid = /\d{1}/.test(e.target.value) && e.target.value.length > 4;
            isFormValid = isPasswordValid;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;

            setUser(newUserInfo)
            console.log(user)
        }
    }

    // create user and sign in user. And form submit working are here.
    const handleFormSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // var user = userCredential.user;
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    history.replace(from)
                    // updateUserName(user.name)
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // var user = userCredential.user;
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log(user)
                    history.replace(from)
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault();
    }

    //facebook login 

    const handleFbSignIn = () => {
        var FbProvider = new firebase.auth.FacebookAuthProvider();

        firebase
            .auth()
            .signInWithPopup(FbProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email }
                console.log((signedInUser))
                setUser(signedInUser);
                history.replace(from)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email)
                // ...
            });
    }

    return (
        <div>

            <Form onSubmit={handleFormSubmit} className="formStyle">

                <input type="checkbox" onChange={() => { setNewUser(!newUser) }} name="newUser" id="" />
                <label htmlFor="newUser">New User Sign in</label>

                {newUser && <Form.Group >
                    <Form.Label>Username</Form.Label>
                    <Form.Control onBlur={handleInputBlur} name="name" type="text" placeholder="Your Name" />
                </Form.Group>}

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleInputBlur} name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleInputBlur} name="password" type="password" placeholder="Password" required />
                </Form.Group>

                {newUser && <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleInputBlur} name="password" type="password" placeholder="Repeat Password" required />
                </Form.Group>}

                <Button className="btnStyle" variant="primary" type="submit">
                    {newUser ? "create an account" : 'sign in '}
                </Button>
            </Form>

            <div>
                <button className="fbBtn" onClick={handleFbSignIn}><FontAwesomeIcon icon={faFacebook} />sign in with facebook</button>
            </div>

            <p style={{ color: 'red', textAlign: 'center' }}>{user.error}</p>

            {
                user.success && <p style={{ color: 'green', textAlign: 'center' }}>User {newUser ? 'created' : 'logged In'} successfully</p>
            }
        </div>
    );
};

export default Login;
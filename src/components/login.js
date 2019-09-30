import React, { useState, useEffect } from "react";
import axios from 'axios';


const Login = (props) => {

const [creds, setCreds] = useState({username: "", password: ""});
const handleChange = event => {
    setCreds({...creds, [event.target.name]: event.target.value});
};

const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://lambda-practice-db.herokuapp.com/api/auth/login', creds)
    .then(res => {console.log(res);
        localStorage.setItem('token', res.data.token);
        props.history.push('/Quotes');
    })
    .catch(err => console.log(err.response));
}

 
  return (
    <>
    

      <form onSubmit={handleSubmit}>

      

<input type='text' name='username' placeholder='username' onChange={handleChange} value={creds.username}/>

<input type='password' name='password' placeholder='password' onChange={handleChange} value={creds.password}/>

<button type='submit'>Submit</button>

    </form>
    <h1>Login</h1>
    </>
  );
};

export default Login;
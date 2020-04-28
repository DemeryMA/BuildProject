import React from 'react';
import './App.css';
import Login from './components/login';
import { Route, Redirect, Link } from 'react-router-dom';
import Quotes from "./components/Quotes";
import Register from './components/register';
import EditForm from './components/EditForm';
import quotepic from '../src/images/quotepic.jpg';


const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if(localStorage.getItem('token')) {
      return <Component {...props} />;
    } else { 
      return <Redirect to='/login'/>;
    }
  }}/>;
};


const PrivateRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if(localStorage.getItem('token')) {
      return <Component {...props} />;
    } else { 
      return <Redirect to='/login'/>;
    }
  }}/>;
};





function App() {
  return (
    
    <div className="App">
        <div className="Links">       
        <Link to ='/Register' >Register</Link>
        <Link to ='/'>Home</Link>
        <Link to ='/Login' >Login</Link>
        </div>

      <header className="App-header">
        <h1>Inspirational Quotes</h1>

        <div>
             <img src={quotepic} width="300" height="300" alt="this is quotepic image" />
        </div>
        
      <Route path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
      <ProtectedRoute path="/Quotes" component={Quotes} />
      <PrivateRoute path="/EditForm/:id" component={EditForm} render={props => <EditForm {...props} />} />
      
       
       
      
      </header>
    </div>
  );
}

export default App;

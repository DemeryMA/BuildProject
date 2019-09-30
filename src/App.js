import React from 'react';
import './App.css';
import Login from './components/login';
import { Route, Redirect } from 'react-router-dom';
import Quotes from "./components/Quotes";
import Register from './components/register';
import EditForm from './components/EditForm';

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
      
      <header className="App-header">
        <h2>Inspirational Quotes</h2>
      <Route path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
      <ProtectedRoute path="/Quotes" component={Quotes} />
      <PrivateRoute path="/EditForm/:id" component={EditForm} render={props => <EditForm {...props} />} />
      
       
       
      
      </header>
    </div>
  );
}

export default App;

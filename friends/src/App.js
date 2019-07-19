import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/friends" component={FriendsList} />
      <br />
      <br />
      <Link to='/'>Dashboard</Link>
      <br />
      <Link to='/login'>Login</Link>
      <br />
      <Link to='/friends'>Friends List</Link>
    </div>
  );
}

export default App;
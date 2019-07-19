import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
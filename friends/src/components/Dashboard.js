import React from 'react';
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="App">
      App here
      <br />
      <br />
        <Link to='/'>Home</Link>
        <br />
        <Link to='/login'>Login</Link>
    </div>
  );
}

export default Dashboard;
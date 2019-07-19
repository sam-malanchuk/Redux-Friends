import React from 'react';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <form
    // onSubmit={this.handleSubmit}
    >
       
        <input type="text" name="username" placeholder="Username"
        // value={username} onChange={this.handleChange}
        /><br />
        <input type="password" name="password" placeholder="Password"
        // value={password} onChange={this.handleChange}
        /><br />

        <button type="submit">Login</button>

        <br />
        <br />
        <br />
        <Link to='/'>Home</Link>
        <br />
        <Link to='/login'>Login</Link>

    </form>
);
}

export default Login;
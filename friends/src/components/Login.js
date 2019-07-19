import React from 'react';

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
    </form>
);
}

export default Login;

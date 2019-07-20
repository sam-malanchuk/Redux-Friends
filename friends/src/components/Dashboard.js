import React from 'react';
import { withRouter } from 'react-router-dom'

class Dashboard extends React.Component {
    token = localStorage.getItem('token')

    logout = (evt) => {
		evt.preventDefault()

		localStorage.removeItem('token')
		this.props.history.push('/login')
	}

    addFriend = (evt) => {
		evt.preventDefault()

		this.props.history.push('/add')
	}

    render() {
		return (
        <div>
            <h3>Dashboard page</h3>
            { // show logout button only when logged in
                this.token && <div><button type="button" onClick={this.addFriend}>Add friend</button><button type="button" onClick={this.logout}>Logout</button></div>}
            { // show logout button only when logged in
                (!this.token) && <p>Please login first</p>}
        </div>
        );
    }
}

export default withRouter(Dashboard);
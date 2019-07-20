import React from 'react';
import { withRouter } from 'react-router-dom'

class Dashboard extends React.Component {
    token = localStorage.getItem('token')

    logout = (evt) => {
		evt.preventDefault()

		localStorage.removeItem('token')
		this.props.history.push('/login')
	}

    render() {
		return (
        <div>
            <h3>Dashboard page</h3>
            { // show logout button only when logged in
                this.token && <button type="button" onClick={this.logout}>Logout</button>}
        </div>
        );
    }
}

export default withRouter(Dashboard);
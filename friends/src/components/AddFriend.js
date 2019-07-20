import React from 'react';
import { connect } from 'react-redux'
import { addFriend } from '../actions'
import { withRouter } from 'react-router-dom'

class AddFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    handleChange = event => {
		event.preventDefault()

		this.setState({
			[event.target.name]: event.target.value,
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()

        const { name, age, email } = this.state
        const payload = { name, age, email }
        console.log(payload)
        console.log(localStorage.getItem('token'))
        this.props.addFriend(payload)
        this.props.history.push("/friends")
    }

    render() {
        const { name, age, email } = this.props
		return (
        <div>
            <h3>Add a Friend</h3>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" /><br />
                <input type="number" name="age" value={age} onChange={this.handleChange} placeholder="Age" /><br />
                <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" />
                <br /><br />
                <input type="submit" value="submit" name="Submit" />
            </form>
        </div>
        );
    }
}

export default withRouter(connect(null, { addFriend })(AddFriend));
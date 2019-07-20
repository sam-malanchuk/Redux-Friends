import React from 'react';

class AddFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    handleChange = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
        })
	}

    render() {
        const { name, age, email } = this.props
		return (
        <div>
            <h3>Add a Friend</h3>
            <form>
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

export default AddFriend;
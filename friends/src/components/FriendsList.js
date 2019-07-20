import React from 'react';
// import connect to see the props
import { connect } from 'react-redux'
// import actions to use them
import { getFriends } from '../actions'
// import ability to add link
import { Link } from 'react-router-dom'

class FriendsList extends React.Component {
    componentDidMount() {
        // call our action
        this.props.getFriends()
    }
    
    render() {
        const {
            isLoading,
            errorMessage,
            friends,
        } = this.props
    
        if (isLoading) {
            return <p>Loading friends...</p>
        }

        return (
            <section>
                <h2>FriendsList here</h2>
                {errorMessage && <p>{errorMessage}</p>}
                
                <ul>
                    {friends.map((friend) => {
                        return <li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
                    })}
                    <Link to="/add"><li>Add a friend...</li></Link>
                </ul>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        friends: state.friends,
	}
}

export default connect(mapStateToProps, { getFriends })(FriendsList);
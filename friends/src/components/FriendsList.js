import React from 'react';
import { connect } from 'react-redux'

function FriendsList(props) {
    const {
		isLoading,
		errorMessage,
		friends,
	} = props

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
            </ul>
        </section>
    );
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        friends: state.friends,
	}
}

export default connect(mapStateToProps)(FriendsList);
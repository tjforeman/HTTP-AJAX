import React from 'react'
import axios from 'axios'

const FriendsList = props => {
    
    return(
        <div className='friends-list'>
        {props.friend.map(friend => (
        <div className="friend-card" key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick={() => props.deleteFriend(friend.id)}>Delete Friend</button>
        </div>
      ))}
        </div>
    )
}

export default FriendsList
import React from 'react'

const FriendsList = props => {
    return(
        <div className='friends-list'>
        {props.friend.map(props => (
        <div className="friend-card" key={props.id}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
        </div>
      ))}
        </div>
    )
}

export default FriendsList
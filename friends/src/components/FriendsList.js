import React from 'react'

const FriendsList = props => {
    return(
        <div className='friends-list'>
        {props.friend.map(props => (
        <div className="item-card" key={props.id}>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.email}</p>
        </div>
      ))}
        </div>
    )
}

export default FriendsList
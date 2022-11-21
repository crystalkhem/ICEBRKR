import React from 'react';
import './EventDetails.css';

const UserDetails = ({ user }) => {
    return(
        <div className="event-details" >
            <h4>{user.firstName}</h4>
        </div>
    )
}

export default UserDetails

import React from 'react';
import './EventDetails.css';
import { Link } from 'react-router-dom';

const UserDetails = ({ user }) => {
    return(
        <div className="event-details" >
        <Link to='/chat'>
            <h4>{user.firstName}</h4></Link>
        </div>
    )
}

export default UserDetails

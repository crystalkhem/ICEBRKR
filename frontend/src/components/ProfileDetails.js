import React from 'react';
import "./EventDetails.css";

const ProfileDetails = ({ profile }) => {
    return(
        <div className="event-details" >
            <h4>{profile.name}</h4>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Age:</strong> {profile.age}</p>
            <p><strong>Major:</strong> {profile.major}</p>
    
        </div>
    )
}

export default ProfileDetails

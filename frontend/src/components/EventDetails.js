import React from 'react';
import './EventDetails.css';

const EventDetails = ({ event }) => {
    return(
        <div className="event-details" >
            <h4>{event.name}</h4>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Description:</strong> {event.description}</p>
    
        </div>
    )
}

export default EventDetails

import React from 'react';
import './EventDetails.css';

const EventDetails = ({ event }) => {
    return(
        <div className="event-details" >
            <h4>{event.name}</h4>
            <p><strong>Date:</strong>{event.date}</p>
            <p><strong>Time:</strong>{event.time}</p>
            <p><strong>Description:</strong>{event.description}</p>
        {/* <br/>
        <small> <br/><b>EVENT:</b> {event.name}
        <br/><b>DATE:</b> {event.date}
        <br/><b>TIME:</b> {event.time}
        <br/><b>DESCRIPTION:</b> {event.description}
        <br/><b>created at:</b> {event.createdAt} 
        </small> */}
        </div>
    )
}

export default EventDetails

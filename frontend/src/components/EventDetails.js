import React from 'react';
import './EventDetails.css';
import { useEventsContext } from '../hooks/useEventsContext';


const EventDetails = ({ event }) => {

    
    const { dispatch } = useEventsContext()
    
    const handleClick = async() => {
        const  response = await fetch('http://localhost:4000/api/events/' + event._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_EVENT', payload: json})
        }
        window.location.reload();

    }

    return(
        <div className="event-details" >
            <h4>{event.name}</h4>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default EventDetails
